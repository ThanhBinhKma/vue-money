<template>
  <div>
    <el-container style="min-height: 100vh; border: 1px solid #eee">
      <Sidebar />

      <el-container>
        <Header />

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header/index.vue";
import Sidebar from "@/components/Layouts/Sidebar/index.vue";
export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style>
</style>