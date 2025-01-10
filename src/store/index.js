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
    // works not found messaeg status
    works_not_found_message_statu: "close",
    // admin_saved_data
    admin_data: window.localStorage.getItem("sultan-site")
      ? JSON.parse(window.localStorage.getItem("sultan-site"))
      : "",
    // sid bars status
    sid_bar_status: "close",
    // works filter component status
    works_filter_status: "close",
    // filter component status
    lessons_filter_status: "close",
    // admin info to show it in the home page
    admin_info: {},
    // sulta links
    sulta_links: "",
    // works data
    works: [],
    //work data
    work_data: "",
    // lessons data
    lessons_data: [],
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
      works_page: {
        title: "Works page",
      },
      lessons_page: {
        title: "Lessons page",
      },
      lesson_page: {
        title: "Lesson's page",
        tags_title: "tags",
        visit_link: "Learn moor",
      },
      works_filter_component: {
        title: "Filter the works by tags",
        button: "Filter the works",
      },
      lessosn_filter_component: {
        title: "Filter the lessons by tags & level & program",
        tags_section: "select the tags",
        program_section: "select the program",
        level_section: "select the level",
        button: "Filter the lessosn",
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
      works_page: {
        title: "صفحة الأعمال",
      },
      lessons_page: {
        title: "صفحة الدروس",
      },
      lesson_page: {
        title: "صفحة الدرس",
        tags_title: "التاغات",
        visit_link: "تعم المزيد",
      },
      works_filter_component: {
        title: "فلتر الأعمال باستخدام التاغات",
        button: "فلتر الأعمال",
      },
      lessosn_filter_component: {
        title: "فلتر الدروس باستخدام التاغات و المستوى والبرنامج",
        tags_section: "اختر التاغات",
        program_section: "اختر البرنامج",
        level_section: "اختر المستوى",
        button: "فلتر الأعمال",
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
      lessons: {
        get_all:
          "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/get/all",
        get_one:
          "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/get/one",
        update: "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/update",
        delete: "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/delete",
        create: "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/create",
      },
    },
    tags: [
      {
        arabic_title: "أدوبي فوتوشوب",
        english_title: "Adobe Photoshop",
        image_path: "logo.png",
      },
      {
        arabic_title: "ادوبي إلستريتر",
        english_title: "Adobe Illustrator",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "أدوبي أكس دي",
        english_title: "Adobe xd",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "أدوبي أفتر إفكت",
        english_title: "Adobe After Effects",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "أدوبي برميير",
        english_title: "Adobe Premiere",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "ادوبي أوديشن",
        english_title: "Adobe Audition",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "فيغما",
        english_title: "Figma",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "دمج",
        english_title: "Manipulation",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "تصميم برندات",
        english_title: "Brand Design",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "تصميم لوغو",
        english_title: "Logo Design",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "تصميم سوشيال ميديا",
        english_title: "Social Media Design",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "واجهة المستخدم / تجربة المستخدم",
        english_title: "UI/UX",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "موشن غرافيك",
        english_title: "Motion Graphic",
        image_path: "../../assets/logo.png",
      },
      {
        arabic_title: "مونتاج",
        english_title: "Montage",
        image_path: "../../assets/logo.png",
      },
    ],
    programs: [
      {
        arabic_title: "أدوبي فوتوشوب",
        english_title: "Adobe Photoshop",
      },
      {
        arabic_title: "ادوبي إلستريتر",
        english_title: "Adobe Illustrator",
      },
      {
        arabic_title: "أدوبي أكس دي",
        english_title: "Adobe xd",
      },
      {
        arabic_title: "أدوبي أفتر إفكت",
        english_title: "Adobe After Effects",
      },
      {
        arabic_title: "أدوبي برميير",
        english_title: "Adobe Premiere",
      },
      {
        arabic_title: "ادوبي أوديشن",
        english_title: "Adobe Audition",
      },
      {
        arabic_title: "فيغما",
        english_title: "Figma",
      },
      {
        arabic_title: "دمج",
        english_title: "Manipulation",
      },
      {
        arabic_title: "تصميم برندات",
        english_title: "Brand Design",
      },
      {
        arabic_title: "تصميم لوغو",
        english_title: "Logo Design",
      },
      {
        arabic_title: "تصميم سوشيال ميديا",
        english_title: "Social Media Design",
      },
      {
        arabic_title: "واجهة المستخدم / تجربة المستخدم",
        english_title: "UI/UX",
      },
      {
        arabic_title: "موشن غرافيك",
        english_title: "Motion Graphic",
      },
      {
        arabic_title: "مونتاج",
        english_title: "Montage",
      },
    ],
    levels: [
      { english_title: "essential", arabic_title: "سهل" },
      { english_title: "professional", arabic_title: "احترافي" },
      { english_title: "advanced", arabic_title: "متقدم" },
    ],
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

    // open or close filter component
    change_works__filter_component_status(state) {
      state.works_filter_status =
        state.works_filter_status == "close" ? "open" : "close";
    },

    // open or close filter component
    change_lessons__filter_component_status(state) {
      state.lessons_filter_status =
        state.lessons_filter_status == "close" ? "open" : "close";
    },
  },
  actions: {},
  modules: {},
});
