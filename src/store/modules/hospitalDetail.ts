import { defineStore } from "pinia";
import { reqHospitalDeparment, reqHospitalDetail } from '@/api/hospital';
import type { HospitalDetail } from '@/api/hospital/type'
import type { DetailState } from './interface'
import type { HosPitalDetail, DeparmentResponseData, DeparmentArr } from '@/api/hospital/type';

const useDetailStore = defineStore('Detail', {
  state: (): DetailState => {
    return {
      hospitalInfo: ({} as HosPitalDetail),
      deparmentArr: []
    }
  },
  actions: {
    async getHospital(hosCode: string){
      let result: HospitalDetail = await reqHospitalDetail(hosCode)
      if(result.code == 200){
        this.hospitalInfo = result.data
      }
    },
    async getDepartment(hosCode: string){
      let result: DeparmentResponseData = await reqHospitalDeparment(hosCode);
        if (result.code == 200) {
            this.deparmentArr = result.data;
        }
    }
  },
  getters: {

  }
})

export default useDetailStore;