import request from "@/utils/request";
import { HospitalDetail } from "./type";

enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某一个医院的科室的数据
    HOSPITALDEPARMENT_URL = '/hosp/hospital/department/',
    //获取验证码接口
    GETUSERCODE_URL = '/sms/send/',
    //用户登录接口
    USERLOGIN_URL = '/user/login',
    //获取微信扫码登录需要参数
    WXLOGIN_URL = '/user/weixin/getLoginParam/',
    //获取某一个医院的某一个科室预约挂号数据
    HOSPITALWORK_URL = '/hosp/hospital/auth/getBookingScheduleRule/',
    //获取医院某一个科室某一天相应医生排班的数据
    HOSPITALDOCTOR_URL = '/hosp/hospital/auth/findScheduleList/',
    //获取某一个账号下就诊人的信息
    GETUSER_URL = '/user/patient/auth/findAll',
    //获取挂号医生的信息
    GETDOCTOR_URL='/hosp/hospital/getSchedule/'
}

//获取医院详情的接口
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + hoscode);