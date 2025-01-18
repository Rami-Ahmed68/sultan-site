<template>
  <div
    :class="`copy-message-${this.$store.state.mood}-${this.$store.state.copy_message_status}`"
  >
    {{
      this.$store.state.language == "English"
        ? this.$store.state.English.copied_message
        : this.$store.state.Arabic.copied_message
    }}
  </div>
</template>

<script>
export default {
  name: "copy-message-component",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light style
.copy-message-darck-open {
  width: 10%;
  height: auto;
  padding: 4px;
  border-radius: 5px;
  color: $white;
  position: absolute;
  right: 45%;
  top: 70px;
  transition-duration: 0.5s;
  background-color: $Navy-blue-one;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: $mobile) {
    width: 30%;
    left: 35%;
  }
}

.copy-message-darck-close {
  @extend .copy-message-darck-open;
  top: -10%;
}

.copy-message-light-open {
  width: 10%;
  height: auto;
  padding: 4px;
  border-radius: 5px;
  color: $black;
  position: absolute;
  right: 45%;
  top: 70px;
  transition-duration: 0.5s;
  background-color: $white-tow;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: $mobile) {
    width: 30%;
    left: 35%;
  }
}

.copy-message-light-close {
  @extend .copy-message-light-open;
  top: -10%;
}
// darck and light style
</style>
