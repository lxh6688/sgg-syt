import { defineStore } from "pinia";
import { reqCode } from '@/api/hospital'

const useUserStore = defineStore('User', {
  state: () => {
    return {
      visiable: false,
      code: '',
    }
  },
  actions: {
    async getCode(phone: string) {
      let result: any = await reqCode(phone)
      console.log(result)
      if (result.code == 200) {
        this.code = result.data;
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    }
  },
  getters: {

  }
});


export default useUserStore;