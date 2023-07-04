import { defineStore } from "pinia";
import { reqHospitalDetail } from '@/api/hospital';
import type { HospitalDetail } from '@/api/hospital/type'

const useDetailStore = defineStore('Detail', {
  state: () => {
    return {
      hospitalInfo: {}
    }
  },
  actions: {
    async getHospital(hosCode: string){
      let result: HospitalDetail = await reqHospitalDetail(hosCode)
      if(result.code == 200){
        this.hospitalInfo = result.data
      }
    }
  },
  getters: {

  }
})

export default useDetailStore;