import { createStore } from "vuex";

export default createStore({
  state: {
    // page mood
    mood: window.localStorage.getItem("sultan-mood") || "darck",
    // the current language
    language: window.localStorage.getItem("sultan-language") || "English",
    // language list status
    language_list_status: "close",
    // list of links
    links: [
      { english: "Home", arabic: "الصفحة الرئيسية", path: "/" },
      { english: "About", arabic: "عني", path: "/about" },
      { english: "Works", arabic: "الأعمال", path: "/works" },
      { english: "Lessons", arabic: "الدروس", path: "/lessons" },
      { english: "Skills", arabic: "المهارات", path: "/skills" }, // (true) to use it when the page is loading to show or hidd the skills link
      { english: "Install App", arabic: "تنزيل التطبيق", path: "/install" }, // (true) to use it when the page is loading to show or hidd the skills link
      {
        english: "Login",
        arabic: "تسجيل الدخول",
        path: "/login",
      },
      {
        english: "DashBoard",
        arabic: "لوحة التحكم",
        path: "/dashboard",
      },
    ],
    developer: {
      english: "Developer",
      arabic: "المبرمج",
      href: "https://rami-web.onrender.com/",
    },
    // error message
    error_object: {
      type: "Error",
    },
    // error message status
    error_message_status: "close",
    // loading animation status
    loading_status: "close",
    // scroll_top_status
    scroll_top_status: "close",
    // Cinema lights
    Cinema_lights: "open",
    // admin_saved_data
    admin_data: window.localStorage.getItem("sultan-site")
      ? JSON.parse(window.localStorage.getItem("sultan-site"))
      : "",
    // sid bars status
    sid_bar_status: "close",
    // admin info to show it in the home page
    admin_info: {},
    // sulta links
    sulta_links: "",
    // works data
    works: [],
    //work data
    work_data: "",
    // lessons data
    lessonse_data: [],
    // lesson data
    lesson_data: {},
    // skills data
    skills_data: [],
    // skill data
    skill_data: {},
    English: {
      name: "MUHAMED SULTAN",
      Login_page: {
        title: "Log in page",
        email_label: "Email",
        password_label: "Password",
        email_placeholder: "Type your email here",
        password_placeholder: "Type your password here",
        button: "Log In",
      },
      language: {
        english: "English",
        arabic: "Arabic",
      },
      buttons: {
        discovr: "Discovr more",
      },
      about_page: {
        description: "Description",
        bio: "Bio",
      },
      note: "Never stop learning and gaining experience.",
      messages: {
        about_message_one: "👋 Hi, welcome to designer Mohammed Sultan's site.",
      },
      work_page: {
        title: "Work's page",
        tags_title: "tags",
        visit_link: "visit the owner",
      },
      global_message: "Mohamed Sultan",
      not_found_page_message: "Sorry, page not found",
      home_page: "home page",
    },
    Arabic: {
      name: "محمد سلطان",
      Login_page: {
        title: "صفحة تسجيل الدخول",
        email_label: "الإيميل",
        password_label: "كلمة المرور",
        email_placeholder: "اكتب الإيميل هنا",
        password_placeholder: "اكتب كلمة المرور هنا",
        button: "تسجيل الدخول",
      },
      language: {
        english: "إنكليزي",
        arabic: "عربي",
      },
      buttons: {
        discovr: "اكتشف المزير",
      },
      about_page: {
        description: "الوصف",
        bio: "نبذة",
      },
      note: "لا تتوقف أبدًا عن التعلم واكتساب الخبرة.",
      messages: {
        about_message_one: "👋 مرحبًا بكم في موقع المصمم محمد سلطان.",
      },
      work_page: {
        title: "صفحة العمل",
        tags_title: "التاغات",
        visit_link: "زُر المالك",
      },
      global_message: "محمد سلطان",
      not_found_page_message: "عذرا لم يتم العثور على الصفحة",
      home_page: "الصفحة الرئيسية",
    },
    APIS: {
      auth: {
        log_in: "https://sultan-wngg.onrender.com/api/v1/sultan/login",
        get_admin_info: "https://sultan-wngg.onrender.com/api/v1/sultan/get",
        get_admin_links:
          "https://sultan-wngg.onrender.com/api/v1/sultan/get/links",
      },
      works: {
        get_all: "https://sultan-wngg.onrender.com/api/v1/sultan/work/get/all",
        get_one: "https://sultan-wngg.onrender.com/api/v1/sultan/work/get/one",
        update: "https://sultan-wngg.onrender.com/api/v1/sultan/works/update",
        delete: "https://sultan-wngg.onrender.com/api/v1/sultan/works/delete",
        create: "https://sultan-wngg.onrender.com/api/v1/sultan/works/create",
      },
    },
  },
  getters: {},
  mutations: {
    // to use it in any page's requets to handel the error
    OpenOrCloseMessageForm(state) {
      state.error_message_status =
        state.error_message_status == "close" ? "open" : "close";
    },

    // change the message form status after 4 s
    ChangeMEssageFormStatus(state) {
      setTimeout(() => {
        state.error_message_status =
          state.error_message_status == "close" ? "open" : "close";
      }, 4000);
    },

    // change mood
    ChangeMood(state) {
      state.mood = state.mood == "darck" ? "light" : "darck";

      // save the new mood in localStorage
      window.localStorage.setItem("sultan-mood", state.mood);
    },

    // change the language
    ChangeLanguage(state) {
      state.language = state.language == "English" ? "Arabic" : "English";

      // save the selected language in localStorage
      window.localStorage.setItem("sultan-language", state.language);
    },

    // change the language list status
    change_language_list_state(state) {
      state.language_list_status =
        state.language_list_status == "close" ? "open" : "close";
    },

    // change the sid bar status
    chnage_sid_bar_status(state) {
      state.sid_bar_status = state.sid_bar_status == "close" ? "open" : "close";
    },
  },
  actions: {},
  modules: {},
});
