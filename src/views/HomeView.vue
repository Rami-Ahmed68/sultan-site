<template>
  <div class="home-page">
    <h1>home page ...</h1>
    <h1>home page ...</h1>
    <h1>home page ...</h1>
    <h1>home page ...</h1>
    <h1>home page ...</h1>
    <h1>home page ...</h1>
    <h1>home page ...</h1>
    <h1>home page ...</h1>
    <h1>home page ...</h1>
  </div>
</template>

<script>
// import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  components: {},

  // mounted() {
  //   const router = useRouter();

  //   router.beforeEach((to, from, next) => {
  //     // ... باقي الكود الخاص بك للتحقق من التغييرات

  //     // إخفاء العنصر بسلاسة
  //     this.$refs.cont.style.opacity = 0;
  //     this.$refs.cont.style.marging.top = 200;
  //     setTimeout(() => {
  //       next();
  //     }, 500);
  //   });
  // },
};
</script>

<style lang="scss">
.home-page {
  width: 100%;
  min-height: 100%;
  background-color: red;
}
.cont {
  width: 60%;
  height: 800px;
  margin: auto;
  // background-color: red;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}
</style>
