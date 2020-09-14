<template>
  <div class="home">
    <Headers />
    <Step v-if="$route.meta.isStep" />
    <el-main>
      <ContentMain />
    </el-main>
  </div>
</template>

<script>
import ContentMain from "@/layout/contentMain/contentMain.vue";
import Headers from "@/layout/headers/headers.vue";
import Step from "@/layout/Step/Step.vue";
export default {
  components: {
    ContentMain,
    Headers,
    Step
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.el-main {
  padding: 40px !important;
  background: #f8f8f8;
  flex-basis: inherit;
}
</style>
