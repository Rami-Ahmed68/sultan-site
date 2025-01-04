<template>
  <div :class="`skills-${this.status}`">
    <h1>This is an Skills page</h1>
  </div>
</template>

<script>
export default {
  name: "skills-page",
  data() {
    return {
      status: "close",
    };
  },
  mounted() {
    setTimeout(() => {
      this.status = "open";
    }, 500);
  },
};
</script>

<style lang="scss">
.skills-close {
  width: 60%;
  height: 700px;
  margin: auto;
  transition-duration: 0.5s;
  // transition: opacity 0.5s ease-in-out;
}

.skills-open {
  @extend .skills-close;
  background-color: red;
}
</style>
