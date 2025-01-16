<template>
  <div
    :class="`contact-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>contact me page</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-page",
  data() {
    return {
      // page status
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
// darck and light English style
.contact-page-darck-English-open {
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    background-color: green;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 50%;
    }

    h1 {
      width: 100%;
      color: $white;
      border: 1px solid $white;
      border-color: transparent transparent $white transparent;
    }
  }
}

.contact-page-darck-English-close {
  @extend .contact-page-darck-English-open;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}
// darck and light English style
</style>
