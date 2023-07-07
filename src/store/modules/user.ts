import { defineStore } from "pinia";

const useUserStore = defineStore('User', {
  state: () => {
    return {
      visiable: false,
      code: '',
    }
  },
  actions: {
      
  },
  getters: {

  }
});


export default useUserStore;