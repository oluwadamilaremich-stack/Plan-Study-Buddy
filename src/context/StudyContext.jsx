import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const StudyContext = createContext();

const INITIAL_STATE = {
  profile: { name: "", goal: "" },
  subjects: [],
  activeSubjectIndex: 0,
  stats: { streak: 0, todayHours: 0, totalProgress: 0 },
  currentSession: null,
  lastUpdated: null
};

export const StudyProvider = ({ children }) => {
  const { currentUser } = useAuth();
  
  // Create a unique key for this specific user
  const storageKey = currentUser ? `study_app_data_${currentUser.uid}` : 'study_app_data_guest';

  const [userData, setUserData] = useState(() => {
    // 1. Initial Load Logic
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);

    // 2. MIGRATION: If no user-specific data exists, check if there's "Legacy" data
    // from before we added the User ID keys.
    const legacyData = localStorage.getItem('study_app_data');
    if (legacyData && currentUser) {
      console.log("Migrating legacy data to account:", currentUser.uid);
      localStorage.setItem(storageKey, legacyData);
      // Optional: localStorage.removeItem('study_app_data'); 
      return JSON.parse(legacyData);
    }

    return INITIAL_STATE;
  });

  // --- SYNC STATE WHEN USER LOGS IN/OUT ---
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setUserData(JSON.parse(saved));
    } else {
      // If it's a truly brand new user with no data at all
      setUserData(INITIAL_STATE);
    }
  }, [currentUser, storageKey]);

  // --- PERSISTENCE ---
  useEffect(() => {
    if (userData !== INITIAL_STATE) {
      localStorage.setItem(storageKey, JSON.stringify(userData));
    }
  }, [userData, storageKey]);

  // --- ACTIONS ---

  const updateStudyPlan = (updates) => {
    setUserData(prev => ({
      ...prev,
      ...updates,
      lastUpdated: new Date().toISOString()
    }));
  };

  const addSubject = (newSubject) => {
    setUserData(prev => ({
      ...prev,
      subjects: [...prev.subjects, { ...newSubject, progress: 0, topics: newSubject.topics || [] }]
    }));
  };

  const updateSubjectProgress = (subjectName, newProgress) => {
    setUserData(prev => {
      const updatedSubjects = prev.subjects.map(s => 
        s.name === subjectName ? { ...s, progress: Math.min(100, newProgress) } : s
      );
      
      // Calculate total average progress for the dashboard
      const totalAvg = updatedSubjects.length > 0 
        ? updatedSubjects.reduce((acc, curr) => acc + (curr.progress || 0), 0) / updatedSubjects.length 
        : 0;

      return {
        ...prev,
        subjects: updatedSubjects,
        stats: { ...prev.stats, totalProgress: totalAvg }
      };
    });
  };

  const clearData = () => {
    localStorage.removeItem(storageKey);
    setUserData(INITIAL_STATE);
  };

  const value = {
    userData,
    updateStudyPlan,
    addSubject,
    updateSubjectProgress,
    clearData
  };

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) throw new Error("useStudy must be used within a StudyProvider");
  return context;
};