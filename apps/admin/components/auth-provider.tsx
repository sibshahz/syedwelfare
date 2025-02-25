"use client";
import { createContext, useContext, useState } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};
const AuthContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
}>({
  user: null,
  setUser: () => {},
  loading: true,
});

import { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  // const [loading] = useState(true);

  // useEffect(() => {
  //     const fetchUser = async () => {
  //         try {
  //             const res = await fetch('http://localhost:4000/protected', { credentials: 'include' });
  //             if (res.ok) {
  //                 const data = await res.json();
  //                 setUser(data);
  //             } else {
  //                 setUser(null);
  //             }
  //         } catch {
  //             setUser(null);
  //         } finally {
  //             setLoading(false);
  //         }
  //     };
  //     fetchUser();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
