<template>
  <icon
    icon="arrow-left"
    :id="`scroll-btn-${this.$store.state.scroll_top_status}-${this.$store.state.language}`"
  />
</template>

<script>
export default {
  data() {
    return {
      name: "scroll-to-top-component",
    };
  },
  methdos: {},
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// English style
#scroll-btn-open-English {
  padding: 10px;
  border-radius: 5px;
  background: linear-gradient(to top, $gold-five, $gold-three, $gold-five);
  transform: rotate(90deg);
  cursor: pointer;
  color: $white;
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 100;
  transition-duration: 0.5s;
  opacity: 1;
}

#scroll-btn-close-English {
  @extend #scroll-btn-open-English;
  bottom: -50px;
  opacity: 0;
}
// English style

// Arabic style
#scroll-btn-open-Arabic {
  padding: 10px;
  border-radius: 5px;
  background: linear-gradient(to top, $gold-five, $gold-three, $gold-five);
  transform: rotate(90deg);
  cursor: pointer;
  color: $white;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 100;
  transition-duration: 0.5s;
  opacity: 1;
}

#scroll-btn-close-Arabic {
  @extend #scroll-btn-open-Arabic;
  bottom: -50px;
  opacity: 0;
}
// Arabic style
</style>
