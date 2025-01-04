<template>
  <div class="nav">
    <!-- logo  -->
    <router-link to="/">
      <img src="../../assets/logo.png" alt="" />
    </router-link>
    <!-- logo  -->

    <!-- links  -->
    <div class="links">
      <router-link
        v-for="(link, index) in this.$store.state.links"
        :key="index"
        :to="link.path"
        >{{
          this.$store.state.language == "English" ? link.english : link.arabic
        }}</router-link
      >
    </div>
    <!-- links  -->

    <div class="links-icon">
      <icon icon="burger" />
    </div>
  </div>
</template>

<script>
export default {
  name: "nave-component",
};
</script>
;

<style lang="scss">
@import "../../sass/varibels";

.nav {
  width: 100%;
  height: 60px;
  backdrop-filter: blur(50px);
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: $mobile) {
    justify-content: space-between;
    padding: 0px 10px;
  }

  .links {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: $mobile) {
      display: none;
    }

    a {
      padding: 10px;
      border-radius: 5px;
      color: $white;
      transition-duration: 0.2s;
      text-decoration: none;
    }

    .router-link-active {
      background-color: green;
    }

    a:hover {
      background-color: green;
    }
  }

  img {
    width: 40px;
    height: 40px;
  }
}
</style>
