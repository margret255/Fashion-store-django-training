import { useState, useEffect } from "react";

export interface User {
  id: number;
  email: string;
  fullName: string;
  username: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("amalia-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - in real app this would call backend API
      const mockUser: User = {
        id: 1,
        email,
        fullName: "Jane Doe",
        username: email.split("@")[0]
      };
      
      setUser(mockUser);
      localStorage.setItem("amalia-user", JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: "Login failed" };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (fullName: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock signup - in real app this would call backend API
      const mockUser: User = {
        id: 1,
        email,
        fullName,
        username: email.split("@")[0]
      };
      
      setUser(mockUser);
      localStorage.setItem("amalia-user", JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: "Signup failed" };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("amalia-user");
  };

  return {
    user,
    isLoading,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  };
}
