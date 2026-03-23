import React, { createContext, useContext, useState, useEffect } from 'react';

const StudyContext = createContext();

const INITIAL_STATE = {
  profile: { 
    name: "Scholar", 
    email: "", 
    avatar: null, 
    bio: "", 
    school: "" 
  },
  subjects: [],
  activeSubjectIndex: 0,
  stats: { 
    streak: 0, 
    todayHours: 0, 
    completed: 0, 
    totalProgress: 0 
  },
  currentSession: null
};

export const StudyProvider = ({ children }) => {
  // 1. Initialize from LocalStorage with Error Handling
  const [userData, setUserData] = useState(() => {
    try {
      const saved = localStorage.getItem('study_app_data');
      return saved ? JSON.parse(saved) : INITIAL_STATE;
    } catch (error) {
      console.error("Error loading local storage:", error);
      return INITIAL_STATE;
    }
  });

  // 2. Auto-Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('study_app_data', JSON.stringify(userData));
  }, [userData]);

  // 3. INTERNAL HELPER: Auto-calculate Average Progress
  const calculateTotalProgress = (subjects) => {
    if (!subjects || subjects.length === 0) return 0;
    const sum = subjects.reduce((acc, sub) => acc + (sub.progress || 0), 0);
    return Math.round(sum / subjects.length);
  };

  /**
   * Main Update Function
   */
  const updateStudyPlan = (newData) => {
    setUserData((prev) => {
      const updatedSubjects = newData.subjects || prev.subjects;
      
      const newTotalProgress = newData.subjects 
        ? calculateTotalProgress(updatedSubjects) 
        : prev.stats.totalProgress;

      return {
        ...prev,
        // Merge Profile
        profile: newData.profile 
          ? { ...prev.profile, ...newData.profile } 
          : prev.profile,
        
        // Deep Merge Stats
        stats: { 
          ...prev.stats, 
          ...newData.stats, 
          totalProgress: newTotalProgress 
        },

        subjects: updatedSubjects,

        currentSession: newData.hasOwnProperty('currentSession') 
          ? newData.currentSession 
          : prev.currentSession,

        activeSubjectIndex: newData.hasOwnProperty('activeSubjectIndex')
          ? newData.activeSubjectIndex
          : prev.activeSubjectIndex
      };
    });
  };

  /**
   * NEW HELPER: addStudyStats
   * Simplifies updating specific stats from any component.
   * Usage: addStudyStats('task', 1) or addStudyStats('hours', 0.5)
   */
  const addStudyStats = (type, value = 1) => {
    setUserData(prev => {
      const currentStats = prev.stats || INITIAL_STATE.stats;
      
      return {
        ...prev,
        stats: {
          ...currentStats,
          todayHours: type === 'hours' ? (currentStats.todayHours || 0) + value : currentStats.todayHours,
          completed: type === 'task' ? (currentStats.completed || 0) + value : currentStats.completed,
          // Basic streak logic: if they do anything, ensure streak is at least 1
          streak: currentStats.streak === 0 ? 1 : currentStats.streak 
        }
      };
    });
  };

  const updateProfileName = (newName) => {
    setUserData(prev => ({
      ...prev,
      profile: { ...prev.profile, name: newName }
    }));
  };

  const clearData = () => {
    localStorage.removeItem('study_app_data');
    setUserData(INITIAL_STATE);
  };

  return (
    <StudyContext.Provider value={{ 
      userData, 
      updateStudyPlan, 
      addStudyStats, // Added to Provider
      updateProfileName, 
      clearData 
    }}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error("useStudy must be used within a StudyProvider");
  }
  return context;
};