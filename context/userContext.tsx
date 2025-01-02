"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: number;
  nombre: string;
  marketName: string;
  apellido: string;
  email: string;
  role: string;
  age: number;
  address: string;
}

const mockUser: User = {
  id: 1,
  nombre: "Juan",
  marketName: "Juan's Market",
  age: 25,
  apellido: "Pérez",
  email: "juan.perez@example.com",
  role: "user",
  address: "Av. Angelica Gamarra 358",
};

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(mockUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};