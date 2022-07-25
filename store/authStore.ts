import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

import { BASE_URL } from "../utils";

// auth store
const authStore = (set: any) => ({
  // variables
  userProfile: null,
  allUsers: [],

  // functions
  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
  fetchAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`);

    set({ allUsers: response.data });
  },
});

// use auth store
const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
