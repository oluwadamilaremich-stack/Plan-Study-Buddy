import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../FireBase';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  reload
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Signup with immediate Profile Update
  const signup = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the display name in Firebase
      await updateProfile(userCredential.user, {
        displayName: name
      });

      // IMPORTANT: Use the actual user instance, NOT a spread {...user}
      // Spreading creates a plain object that loses Firebase methods like getIdToken()
      const updatedUser = auth.currentUser;
      setCurrentUser(updatedUser); 
      
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  // 2. Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 3. Logout
  const logout = () => {
    return signOut(auth);
  };

  // 4. Password Reset
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // 5. Helper: Refresh User Data
  // Call this after updating profiles to sync the Sidebar/Header immediately
  const refreshUser = async () => {
    if (auth.currentUser) {
      await reload(auth.currentUser);
      setCurrentUser(auth.currentUser);
    }
  };

  // 6. Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Firebase provides the full User instance here automatically
      setCurrentUser(user);
      setLoading(false); 
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading, 
    signup,
    login,
    logout,
    resetPassword,
    refreshUser
  };

  return (
    <AuthContext.Provider value={value}>
      {/* We wait for the initial loading to finish before rendering the app.
          This prevents "Guest" flashes or Context mismatches on page refresh.
      */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);