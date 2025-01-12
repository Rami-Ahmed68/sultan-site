<template>
  <div
    :class="`create-work-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>create work page</h1>

      <WorkComponentVue
        v-for="(work, index) in this.$store.state.works"
        :key="index"
        :work_data="work"
      />
    </div>
  </div>
</template>

<script>
import WorkComponentVue from "@/components/dash/WorkComponentVue.vue";
export default {
  data() {
    return {
      name: "create-work-page",

      // page status
      page_status: "close",
    };
  },
  components: {
    WorkComponentVue,
  },
  mounted() {
    setTimeout(() => {
      this.page_status = "open";
    }, 500);
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.create-work-page-darck-English-open {
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    background-color: red;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 50%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      margin: 5px 0px;
      color: $white;
    }
  }
}

.create-work-page-darck-English-close {
  @extend .create-work-page-darck-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style
</style>
