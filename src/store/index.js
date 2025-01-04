import { createStore } from "vuex";

export default createStore({
  state: {
    // page mood
    mood: window.localStorage.getItem("sultan-mood") || "darck",
    // the current language
    language: "Arabic",
    // list of links
    links: [
      { english: "Home", arabic: "الصفحة الرئيسية", path: "/" },
      { english: "Works", arabic: "الأعمال", path: "/works" },
      { english: "Lessons", arabic: "الدروس", path: "/lessons" },
      { english: "Skills", arabic: "المهارات", path: "/skills" },
      { english: "login", arabic: "المهارات", path: "/login" },
    ],
    // error message
    error_object: {},
    // error message status
    error_message_status: "close",
    // loading animation status
    loading_status: "close",
    // Cinema lights
    Cinema_lights: "open",

    English: {
      Login_page: {
        title: "Log in page",
        email_label: "Email",
        password_label: "Password",
        email_placeholder: "Type your email here",
        password_placeholder: "Type your password here",
        button: "Log In",
      },
      global_message: "Mohamed Sultan",
    },
    Arabic: {
      Login_page: {
        title: "صفحة تسجيل الدخول",
        email_label: "الإيميل",
        password_label: "كلمة المرور",
        email_placeholder: "اكتب الإيميل هنا",
        password_placeholder: "اكتب كلمة المرور هنا",
        button: "تسجيل الدخول",
      },
      global_message: "محمد سلطان",
    },
    APIS: {
      auth: {
        log_in: "https://sultan-wngg.onrender.com/api/v1/sultan/login",
      },
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
