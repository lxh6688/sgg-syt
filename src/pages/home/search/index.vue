<template>
  <div class="search">
    <el-autocomplete
      @select="goDetail"
      :trigger-on-focus="false"
      clearable
      placeholder="请你输入医院名称"
      v-model="hosname"
      :fetch-suggestions="fetchData"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { HospitalInfo } from "@/api/home/type";
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { reqHospitalInfo } from "@/api/home";

let $router = useRouter();
let hosname = ref<string>("");

const fetchData = async (keyword: string, cb: any) => {
  let result: HospitalInfo = await reqHospitalInfo(keyword)
  let showData = result.data.map((item) => {
    return {
      value: item.hosname, 
      hoscode: item.hoscode,
    }
  });
  console.log(result.data)
  cb(showData)
}

const goDetail = (item: any) => {
  $router.push({ path: "/hospital/register",query:{hoscode:item.hoscode}})
};
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
