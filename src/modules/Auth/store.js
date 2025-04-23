import { defineStore } from "pinia";
import { ref } from "vue";
export const useAuthStore = defineStore("userDataStore", {
  state: () => ({
    userData: ref(null),
  }),
  actions: {
    setUserData(data) {
      this.userData = data;
    },
  },
});
