import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, AuthState, User } from "../types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AUTH_STORAGE_KEY = "auth_users";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem(AUTH_STORAGE_KEY);
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const currentUser = localStorage.getItem("current_user");

    if (storedUsers && isAuthenticated === "true" && currentUser) {
      setState((prev) => ({
        ...prev,
        user: JSON.parse(currentUser),
        loading: false,
      }));
    } else {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  // **Sign Up: Stores multiple users instead of overwriting**
  const signUp = async (email: string, password: string) => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "[]");

      if (!Array.isArray(storedUsers)) {
        throw new Error("Storage corrupted. Please clear local storage.");
      }

      if (storedUsers.some((user: User) => user.email === email)) {
        throw new Error("User already exists. Please log in.");
      }

      const newUser: User = {
        id: crypto.randomUUID(),
        email,
        password, //We can Use hashing for better security
        created_at: new Date().toISOString(),
      };

      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedUsers));
      localStorage.setItem("current_user", JSON.stringify(newUser));
      localStorage.setItem("isAuthenticated", "true");

      setState({ user: newUser, loading: false, error: null });
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    }
  };

  // Sign In: Checks if user exists & matches password
  const signIn = async (email: string, password: string) => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "[]");

      const user = storedUsers.find((u: User) => u.email === email);

      if (!user) {
        return Promise.reject(new Error("User not found"));
      }

      if (user.password !== password) {
        return Promise.reject(new Error("Incorrect  password"));
      }
      if (user.email !== email) {
        return Promise.reject(new Error("Incorrect email "));
      }

      localStorage.setItem("current_user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true");

      setState({ user, loading: false, error: null });
      return Promise.resolve();

     
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    }
  };

  

  // Sign Out: Clears session but keeps user list
  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("current_user");
    setState((prev) => ({ ...prev, user: null, error: null }));
  };

  // **Delete Account: Removes user permanently**
  const deleteAccount = async () => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "[]");
      const updatedUsers = storedUsers.filter((user: User) => user.id !== state.user?.id);

      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedUsers));
      localStorage.removeItem("current_user");
      localStorage.removeItem("isAuthenticated");

      setState({ user: null, loading: false, error: null });
    } catch (error) {
      setState((prev) => ({ ...prev, error: (error as Error).message }));
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signUp, signIn, signOut, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
