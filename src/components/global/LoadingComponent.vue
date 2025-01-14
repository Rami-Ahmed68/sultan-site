<template>
  <div
    :class="`loading-${this.$store.state.language}-${this.$store.state.mood}-${this.$store.state.loading_status}`"
  >
    <div :class="`cont`">
      <div class="center"></div>
    </div>
    <p>
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.loading
          : this.$store.state.Arabic.loading
      }}
    </p>
    <p v-if="this.$store.state.uploaded_rate">
      {{ this.$store.state.uploaded_rate }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "loading-component",
    };
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light loading style
.loading-English-darck-open {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  backdrop-filter: blur(200px);
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  position: fixed;
  top: 10%;
  left: 45%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    width: 120px;
    height: 120px;
    left: 35%;
  }

  .cont {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(to top, $gold-five, $gold-one, $gold-five);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: loading 2s linear infinite;

    .center {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: $Navy-blue-tow;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 10px $black;
    }
  }

  p {
    width: 100%;
    font-size: $small;
    text-align: center;
    color: $white;
    text-shadow: 0 0 5px $black;
  }

  // load animation ( rotate )
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

.loading-English-darck-close {
  @extend .loading-English-darck-open;
  top: -20%;
}

.loading-English-light-open {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  backdrop-filter: blur(200px);
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  position: fixed;
  top: 10%;
  left: 45%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    width: 120px;
    height: 120px;
    left: 35%;
  }

  .cont {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(to top, $gold-five, $gold-one, $gold-five);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: loading 2s linear infinite;

    .center {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: $white-tow;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 10px $black;
    }
  }

  p {
    width: 100%;
    font-size: $small;
    text-align: center;
    color: $black;
    text-shadow: 0 0 5px $black;
  }

  // load animation ( rotate )
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

.loading-English-light-close {
  @extend .loading-English-light-open;
  top: -20%;
}
// darck and light loading style

// darck and light loading style
.loading-Arabic-darck-open {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  backdrop-filter: blur(200px);
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  position: fixed;
  top: 10%;
  left: 45%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    width: 120px;
    height: 120px;
    left: 35%;
  }

  .cont {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(to top, $gold-five, $gold-one, $gold-five);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: loading 2s linear infinite;

    .center {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: $Navy-blue-tow;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 10px $black;
    }
  }

  p {
    width: 100%;
    font-size: $small;
    text-align: center;
    color: $white;
    text-shadow: 0 0 5px $black;
  }

  // load animation ( rotate )
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

.loading-Arabic-darck-close {
  @extend .loading-Arabic-darck-open;
  top: -20%;
}

.loading-Arabic-light-open {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  backdrop-filter: blur(200px);
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  position: fixed;
  top: 10%;
  left: 45%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    width: 120px;
    height: 120px;
    left: 35%;
  }

  .cont {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(to top, $gold-five, $gold-one, $gold-five);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: loading 2s linear infinite;

    .center {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: $white-tow;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 10px $black;
    }
  }

  p {
    width: 100%;
    font-size: $small;
    text-align: center;
    color: $black;
    text-shadow: 0 0 5px $black;
  }

  // load animation ( rotate )
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

.loading-Arabic-light-close {
  @extend .loading-Arabic-light-open;
  top: -20%;
}
// darck and light loading style
</style>
