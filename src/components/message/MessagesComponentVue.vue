<template>
  <div
    :class="`message-${this.$store.state.mood}-${this.$store.state.language}`"
  >
    <h3>
      {{ this.message_data.name }}
      <icon icon="trash" id="trash-icon" @click="delete_message" />
    </h3>
    <p class="message">
      {{ this.message_data.message }}
    </p>

    <p
      class="email"
      @click="Copy_text(this.message_data.email)"
      v-if="this.message_data.email"
    >
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.message_component.email
          : this.$store.state.Arabic.message_component.email
      }}
      {{ this.message_data.message }}
    </p>
    <p
      class="phone_number"
      @click="Copy_text(this.message_data.phone_number)"
      v-if="this.message_data.phone_number"
    >
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.message_component.phone_number
          : this.$store.state.Arabic.message_component.phone_number
      }}
      : {{ this.message_data.phone_number }}
    </p>
    <p
      class="whatsapp_number"
      v-if="this.message_data.whatsapp"
      @click="go_to_whatsapp"
    >
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.message_component.whatsapp_number
          : this.$store.state.Arabic.message_component.whatsapp_number
      }}
      : {{ this.message_data.whatsapp }}
    </p>
    <p class="created_at" v-if="this.message_data.created_at">
      {{ this.message_data.created_at.split("T")[0] }}
    </p>
  </div>
</template>

<script>
export default {
  name: "message-component",
  data() {
    return {};
  },
  props: {
    message_data: Object,
  },
  methods: {
    // copy text method
    async Copy_text(text) {
      await navigator.clipboard.writeText(text);

      this.$store.commit("OpenOrCloseCopyMessage");

      // to close the message after 500 ms
      setTimeout(() => {
        this.$store.commit("OpenOrCloseCopyMessage");
      }, 1500);
    },

    // delete message
    delete_message() {
      // set the message's id to message_id_for_delete
      this.$store.state.message_id_for_delete = this.message_data._id;

      // to open the form
      this.$store.commit("OpenOrCloseDeleteMessageForm");
    },

    // go to whatsapp
    go_to_whatsapp() {
      window.location = `https://wa.me/${this.message_data.whatsapp}`;
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.message-darck-English {
  direction: ltr;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 5px;
  background-color: $Navy-blue-tow;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 10px 0px;

  h3 {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $white;
    border: 1px solid;
    border-color: transparent transparent $white transparent;
    position: relative;

    #trash-icon {
      position: absolute;
      top: -5px;
      right: 0%;
      font-size: $small;
      padding: 7px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid $error-red-one;
      background-color: $error-red-tow;
      transition-duration: 0.5s;
    }

    #trash-icon:hover {
      background-color: $error-red-one;
    }
  }

  .message {
    width: 100%;
    height: auto;
    font-size: $small;
    color: $white;
  }

  .email,
  .phone_number,
  .whatsapp_number {
    width: auto;
    height: auto;
    color: $white;
    font-size: $small;
    margin: 5px 5px 5px 0px;
    padding: 4px;
    border-radius: 3px;
    background-color: $Navy-blue-one;
    cursor: pointer;

    @media (max-width: $mobile) {
      font-size: $x-small;
    }
  }

  .whatsapp_number {
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .email:hover {
    text-decoration: underline;
  }

  .phone_number:hover {
    text-decoration: underline;
  }

  .whatsapp_number:hover {
    text-decoration: underline;
  }

  .created_at {
    @extend .email;
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: $x-small;
    cursor: text;
  }

  .created_at:hover {
    text-decoration: none;
  }
}

.message-light-English {
  direction: ltr;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 5px;
  background-color: $white-tow;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 10px 0px;

  h3 {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $black;
    border: 1px solid;
    border-color: transparent transparent $black transparent;
    position: relative;

    #trash-icon {
      position: absolute;
      top: -5px;
      right: 0%;
      font-size: $small;
      padding: 7px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid $error-red-one;
      background-color: $error-red-tow;
      transition-duration: 0.5s;
    }

    #trash-icon:hover {
      background-color: $error-red-one;
    }
  }

  .message {
    width: 100%;
    height: auto;
    font-size: $small;
    color: $black;
  }

  .email,
  .phone_number,
  .whatsapp_number {
    width: auto;
    height: auto;
    color: $black;
    font-size: $small;
    margin: 5px 5px 5px 0px;
    padding: 4px;
    border-radius: 3px;
    background-color: $white-one;
    cursor: pointer;

    @media (max-width: $mobile) {
      font-size: $x-small;
    }
  }

  .whatsapp_number {
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .email:hover {
    text-decoration: underline;
  }

  .phone_number:hover {
    text-decoration: underline;
  }

  .whatsapp_number:hover {
    text-decoration: underline;
  }

  .created_at {
    @extend .email;
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: $x-small;
    cursor: text;
  }

  .created_at:hover {
    text-decoration: none;
  }
}

.message-darck-Arabic {
  direction: rtl;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 5px;
  background-color: $Navy-blue-tow;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 10px 0px;

  h3 {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $white;
    border: 1px solid;
    border-color: transparent transparent $white transparent;
    position: relative;

    #trash-icon {
      position: absolute;
      top: -5px;
      left: 0%;
      font-size: $small;
      padding: 7px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid $error-red-one;
      background-color: $error-red-tow;
      transition-duration: 0.5s;
    }

    #trash-icon:hover {
      background-color: $error-red-one;
    }
  }

  .message {
    width: 100%;
    height: auto;
    font-size: $small;
    color: $white;
  }

  .email,
  .phone_number,
  .whatsapp_number {
    width: auto;
    height: auto;
    color: $white;
    font-size: $small;
    margin: 5px 5px 5px 0px;
    padding: 4px;
    border-radius: 3px;
    background-color: $Navy-blue-one;
    cursor: pointer;

    @media (max-width: $mobile) {
      font-size: $x-small;
    }
  }

  .whatsapp_number {
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .email:hover {
    text-decoration: underline;
  }

  .phone_number:hover {
    text-decoration: underline;
  }

  .whatsapp_number:hover {
    text-decoration: underline;
  }

  .created_at {
    @extend .email;
    position: absolute;
    left: 5px;
    bottom: 5px;
    font-size: $x-small;
    cursor: text;
  }

  .created_at:hover {
    text-decoration: none;
  }
}

.message-light-Arabic {
  direction: rtl;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 5px;
  background-color: $white-tow;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 10px 0px;

  h3 {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $black;
    border: 1px solid;
    border-color: transparent transparent $black transparent;
    position: relative;

    #trash-icon {
      position: absolute;
      top: -5px;
      left: 0%;
      font-size: $small;
      padding: 7px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid $error-red-one;
      background-color: $error-red-tow;
      transition-duration: 0.5s;
    }

    #trash-icon:hover {
      background-color: $error-red-one;
    }
  }

  .message {
    width: 100%;
    height: auto;
    font-size: $small;
    color: $black;
  }

  .email,
  .phone_number,
  .whatsapp_number {
    width: auto;
    height: auto;
    color: $black;
    font-size: $small;
    margin: 5px 5px 5px 0px;
    padding: 4px;
    border-radius: 3px;
    background-color: $white-one;
    cursor: pointer;

    @media (max-width: $mobile) {
      font-size: $x-small;
    }
  }

  .whatsapp_number {
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .email:hover {
    text-decoration: underline;
  }

  .phone_number:hover {
    text-decoration: underline;
  }

  .whatsapp_number:hover {
    text-decoration: underline;
  }

  .created_at {
    @extend .email;
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: $x-small;
    cursor: text;
  }

  .created_at:hover {
    text-decoration: none;
  }
}
// darck and light English style
</style>
