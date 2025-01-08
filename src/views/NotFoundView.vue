<template>
  <div :class="`page-${this.$store.state.language}-${this.$store.state.mood}`">
    <div :class="`cont-${this.status}`">
      <img src="../assets/notfound.png" alt="image" />
      <h4>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.not_found_page_message
            : this.$store.state.Arabic.not_found_page_message
        }}
      </h4>
      <router-link to="/">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.home_page
            : this.$store.state.Arabic.home_page
        }}
        <icon icon="arrow-right" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "not-found-page",
      // page status
      status: "close",
    };
  },
  mounted() {
    // change the status after a 500 ms
    setTimeout(() => {
      this.status = "open";
    }, 500);
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// darck and light English style
.page-English-darck {
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding-bottom: 10%;

  .cont-open {
    width: 50%;
    height: auto;
    margin: 0% 25%;
    padding-top: 15%;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: $mobile) {
      width: 100%;
      margin: 0%;
    }

    img {
      width: 300px;
      height: 300px;
      margin: 10px 10%;

      @media (min-width: $mobile) {
        width: 300px;
        height: 300px;
      }
    }

    h4 {
      width: auto;
      height: 40px;
      padding: 5px 10px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px;
      color: $white;
      background-color: $Navy-blue-one;
      box-shadow: 0 0 5px $black;

      @media (min-width: $mobile) {
        width: 80%;
        margin: 30px;
      }
    }

    a {
      padding: 10px 20px;
      border-radius: 5px;
      background: linear-gradient(to right, $gold-for, $gold-tow, $gold-three);
      text-decoration: none;
      color: $white;
      box-shadow: 0 0 5px $black;

      @media (min-width: $mobile) {
        margin: 30px;
      }
    }
  }

  .cont-close {
    @extend .cont-open;
    padding: 40% 0%;
    opacity: 0;
  }
}

.page-English-light {
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding-bottom: 10%;

  .cont-open {
    width: 50%;
    height: auto;
    margin: 0% 25%;
    padding-top: 15%;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: $mobile) {
      width: 100%;
      margin: 0%;
    }

    img {
      width: 300px;
      height: 300px;
      margin: 10px 10%;

      @media (min-width: $mobile) {
        width: 300px;
        height: 300px;
      }
    }

    h4 {
      width: auto;
      height: 40px;
      padding: 5px 10px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px;
      color: $black;
      background-color: $white-for;
      box-shadow: 0 0 5px $black;

      @media (min-width: $mobile) {
        width: 80%;
        margin: 30px;
      }
    }

    a {
      padding: 10px 20px;
      border-radius: 5px;
      background: linear-gradient(to right, $gold-for, $gold-tow, $gold-three);
      text-decoration: none;
      color: $white;
      box-shadow: 0 0 5px $black;

      @media (min-width: $mobile) {
        margin: 30px;
      }
    }
  }

  .cont-close {
    @extend .cont-open;
    padding: 40% 0%;
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.page-Arabic-darck {
  direction: rtl;
  @extend .page-English-darck;
}

.page-Arabic-light {
  direction: rtl;
  @extend .page-English-light;
}
// darck and light Arabic style
</style>
