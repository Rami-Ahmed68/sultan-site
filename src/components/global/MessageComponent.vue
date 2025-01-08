<template>
  <div
    :class="`message-form-${this.$store.state.language}-${this.$store.state.error_message_status}-${this.$store.state.error_object.type}`"
  >
    <icon icon="xmark" @click="this.$store.commit(`OpenOrCloseMessageForm`)" />

    <h3
      v-if="
        this.$store.state.error_object && this.$store.state.error_object.title
      "
    >
      {{
        this.$store.state.language == "English"
          ? this.$store.state.error_object.title.english
          : this.$store.state.error_object.title.arabic
      }}
    </h3>

    <p v-if="this.$store.state.error_object">
      {{
        this.$store.state.error_object
          ? this.$store.state.error_object.status
          : ""
      }}
    </p>

    <p
      v-if="
        this.$store.state.error_object.messages &&
        this.$store.state.language == 'English'
      "
    >
      {{ this.$store.state.error_object.messages.english }}
    </p>

    <p
      v-if="
        this.$store.state.error_object.messages &&
        this.$store.state.language == 'Arabic'
      "
    >
      {{ this.$store.state.error_object.messages.arabic }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "message-form-component",
    };
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// Error English style
.message-form-English-open-Error {
  width: 400px;
  min-height: 100px;
  border-radius: 5px;
  border: 1px solid $error-red-one;
  transition-duration: 1s;
  position: fixed;
  left: 20px;
  bottom: 10px;
  background-color: $error-red-tow;

  @media (max-width: $mobile) {
    width: 300px;
    min-height: 70px;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    color: $white;
  }

  h3 {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }

  p {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }
}

.message-form-English-close-Error {
  @extend .message-form-English-open-Error;
  position: fixed;
  left: -100%;
  bottom: 10px;
}
// Error English style

// Success English style
.message-form-English-open-Success {
  width: 400px;
  min-height: 100px;
  border-radius: 5px;
  border: 1px solid $error-green-one;
  transition-duration: 1s;
  position: fixed;
  left: 20px;
  bottom: 10px;
  background-color: $error-green-tow;

  @media (max-width: $mobile) {
    width: 300px;
    min-height: 70px;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    color: $white;
  }

  h3 {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }

  p {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }
}

.message-form-English-close-Success {
  @extend .message-form-English-open-Success;
  position: fixed;
  left: -100%;
  bottom: 10px;
}
// Success English style

// Error Arabic style
.message-form-Arabic-open-Error {
  direction: rtl;
  width: 400px;
  min-height: 100px;
  border-radius: 5px;
  border: 1px solid $error-red-one;
  transition-duration: 1s;
  position: fixed;
  right: 20px;
  bottom: 10px;
  background-color: $error-red-tow;

  @media (max-width: $mobile) {
    width: 300px;
    min-height: 70px;
  }

  svg {
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
    color: $white;
  }

  h3 {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }

  p {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }
}

.message-form-Arabic-close-Error {
  @extend .message-form-Arabic-open-Error;
  position: fixed;
  right: -100%;
  bottom: 10px;
}
// Error Arabic style

// Success Arabic style
.message-form-Arabic-open-Success {
  direction: rtl;
  width: 400px;
  min-height: 100px;
  border-radius: 5px;
  border: 1px solid $error-green-one;
  transition-duration: 1s;
  position: fixed;
  right: 20px;
  bottom: 10px;
  background-color: $error-green-tow;

  @media (max-width: $mobile) {
    width: 300px;
    min-height: 70px;
  }

  svg {
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
    color: $white;
  }

  h3 {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }

  p {
    color: $white;
    max-width: 90%;
    margin: 5px;
  }
}

.message-form-Arabic-close-Success {
  @extend .message-form-Arabic-open-Success;
  position: fixed;
  right: -100%;
  bottom: 10px;
}
// Success Arabic style
</style>
