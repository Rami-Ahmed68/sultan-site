<template>
  <div
    :class="`skills-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>hi from skills page</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills-page",
  data() {
    return {
      page_status: "close",
    };
  },
  mounted() {
    setTimeout(() => {
      this.page_status = "open";
    }, 500);
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";

.skills-page-darck-English-open {
  width: 100%;
  min-height: 100vh;
  margin: auto;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;
  background-color: $Navy-blue-for;

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    background-color: green;
    transition-duration: 0.5s;
    opacity: 1;
  }
}

.skills-page-darck-English-close {
  @extend .skills-page-darck-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
</style>
