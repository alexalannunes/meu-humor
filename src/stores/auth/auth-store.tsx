import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { IUser } from "@/types/user";
import { LocalStorageKeys } from "@/config/local-storage-keys";

interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}

interface IAuthActions {
  login: (user: IUser) => void;
  logout: () => void;

  // need fetch user states?
}

type AuthStore = IAuthState & IAuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: LocalStorageKeys.AUTH_USER,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
