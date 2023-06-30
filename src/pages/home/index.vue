<template>
  <div>
    <Carousel />
    <Search />
    <el-row gutter="20">
      <el-col :span="20">
        <Level />
        <Region />
        <div class="hospital">
          <Card v-for="item in 10" :key="item" class="item" />
        </div>

        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="prev, pager, next, jumper, -> ,sizes, total"
          :total="400"
        />
      </el-col>
      <el-col :span="4">
        右侧
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import { ref } from "vue";

let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>