import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist((set) => ({
    username: null,
    setUsername: (username) => set(() => ({ username })),
  }),{
    name: "user",
  })
);

export { useUserStore };
