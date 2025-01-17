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
      { english: "Cv", arabic: "السيرة الذاتية", path: "/cv" },
      { english: "Install App", arabic: "تنزيل التطبيق", path: "/install" },
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
    dash_board_links: [
      { english: "Home", arabic: "الصفحة الرئيسية", path: "" },
      {
        english: "Update Info",
        arabic: "تعديل البيانات",
        path: "dashboard/info/update",
      },
      {
        english: "Works",
        arabic: "الأعمال",
        path: "dashboard/works",
      },
      {
        english: "Craete Work",
        arabic: "إنشاء عمل",
        path: "dashboard/work/create",
      },
      {
        english: "Lessons",
        arabic: "الدروس",
        path: "dashboard/lessons",
      },
      {
        english: "Craete Lesson",
        arabic: "إنشاء درس",
        path: "dashboard/lesson/create",
      },
      {
        english: "Skills",
        arabic: "المهارات",
        path: "dashboard/skills",
      },
      {
        english: "Craete Skill",
        arabic: "إنشاء مهارة",
        path: "dashboard/skill/create",
      },
      {
        english: "update Cv",
        arabic: "تعديل السيرة الذاتية",
        path: "dashboard/cv/update",
      },
    ],
    skills_link: { english: "Skills", arabic: "المهارات", path: "/skills" },
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
    // Download rate
    uploaded_rate: "",
    // scroll_top_status
    scroll_top_status: "close",
    // Cinema lights
    Cinema_lights: "open",
    // works not found message status
    works_not_found_message_status: "close",
    // lessons not found message status
    lessons_not_found_message_status: "close",
    // admin_saved_data
    admin_data: window.localStorage.getItem("sultan-site")
      ? JSON.parse(window.localStorage.getItem("sultan-site"))
      : "",
    // sultan's cv
    cv: "",
    // skills page status
    skills_page_status: true,
    // sid bars status
    sid_bar_status: "close",
    // works filter component status
    works_filter_status: "close",
    // filter component status
    lessons_filter_status: "close",
    // delete_work_form_status
    delete_work_form_status: "close",
    // delete_lesson_form_status
    delete_lesson_form_status: "close",
    // delete_skill_form_status
    delete_skill_form_status: "close",
    // admin info to show it in the home page
    admin_info: "",
    // selected_images
    selected_images: [],
    // sulta links
    sulta_links: "",
    // works data
    works: [],
    // selectd_avatar
    selectd_avatar: [],
    //work data
    work_data: "",
    // lessons data
    lessons_data: [],
    // lesson data
    lesson_data: {},
    // skills data
    skills_data: [],
    // skill data
    skill_data: "",
    // work_id_for_delete
    work_id_for_delete: "",
    // lesson_id_for_delete
    lesson_id_for_delete: "",
    // skills_id_for_delete
    skill_id_for_delete: "",
    English: {
      name: "MUHAMED SULTAN",
      Login_page: {
        title: "Log in page",
        email_label: "Email",
        password_label: "Password",
        email_placeholder: "Type your email here",
        password_placeholder: "Type your password here",
        log_out: "Log out",
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
        see_more: "See moor",
        program_name: "Program",
      },
      works_filter_component: {
        title: "Filter the works",
        button: "Filter the works",
      },
      lessosn_filter_component: {
        title: "Filter the lessons",
        tags_section: "select the tags",
        program_section: "select the program",
        level_section: "select the level",
        button: "Filter the lessosn",
      },
      cv_page: {
        title: "Cv page",
      },
      install_page: {
        title: "Install app page",
        button: "install app",
        message:
          "Hi 👋 designer, you can download designer Mohamed Sultan's website as a mobile or desktop application to quickly check his latest works.",
      },
      skills_page: {
        title: "Skills page",
      },
      skill_page: {
        title: "Skill's page",
      },
      not_found_page: {
        message: "The page you're looking for was not found.",
        button: "Go to home",
      },
      update_info_page: {
        title: "Update info",
        avatar_btn: "Update Avatar",
        english_name_label: "Name in English",
        arabic_name_label: "Name in Arabic",
        english_description_label: "Description in English",
        arabic_description_label: "Description in Arabic",
        whatsApp_label: "WhatsApp number",
        phone_label: "Phone number",
        telegram_label: "Telegram link",
        facebook_label: "facebook link",
        instgram_label: "Instagram link",
        linkedIn_label: "linked In link",
        behance_label: "Behance link",
        email_address_label: "Email address",
        update_btn: "Update",
      },
      contact_page: {
        title: "Contact page",
        helping_message:
          "Hello, here you can contact me by sending me an email by writing your full name, your email address and the message you want to deliver to me, I will contact you as soon as possible",
        name_label: "Full name",
        email_label: "Email address",
        message_label: "You'r message",
        send_btn: "Send",
      },
      dash_works_page: {
        title: "Works events",
      },
      dash_skills_page: {
        title: "Skills events",
        skills_page_btn: "Skills page",
      },
      dash_work_update_page: {
        title: "Update Work",
        video: "Video",
        video_btn: "Upload new video",
        video_cover_btn: "Update video's cover",
        delete_video_btn: "Delete video",
        video_cover_label: "Video cover",
        image_label: "image",
        english_title: "Title in english",
        arabic_title: "Title in arabic",
        english_description: "Description in english",
        arabic_description: "Description in arabic",
        link: "Linke",
        created_at: "Created at",
        tags: "Tags",
        update_btn: "Update",
      },
      dash_lessons_page: {
        title: "Lessons events",
      },
      dash_lesson_update_page: {
        title: "Update Lesson",
        video: "Video",
        video_btn: "Upload new video",
        video_cover_btn: "Update video's cover",
        delete_video_btn: "Delete video",
        video_cover_label: "Video cover",
        image_label: "image",
        english_title: "Title in english",
        arabic_title: "Title in arabic",
        english_description: "Description in english",
        arabic_description: "Description in arabic",
        link: "Linke",
        program: "Program",
        level: "Level",
        created_at: "Created at",
        tags: "Tags",
        update_btn: "Update",
      },
      dash_skill_update_page: {
        title: "Update Skill",
        english_title: "Title in english",
        arabic_title: "Title in arabic",
        english_description: "Description in english",
        arabic_description: "Description in arabic",
        created_at: "Created at",
        delete_icon: "Delete selected icon",
        update_icon_btn: "Update icon",
        update_btn: "Update",
      },
      dash_skill_create_page: {
        title: "Create Skill",
        english_title: "Title in english",
        arabic_title: "Title in arabic",
        english_description: "Description in english",
        arabic_description: "Description in arabic",
        delete_icon: "Delete Icon",
        created_at: "Created at",
        create_btn: "Create",
      },
      dash_work_create_page: {
        title: "Create Work",
        video: "Video",
        video_btn: "Upload new video",
        delete_video_btn: "Delete video",
        image_label: "image",
        english_title: "Title in english",
        arabic_title: "Title in arabic",
        english_description: "Description in english",
        arabic_description: "Description in arabic",
        link: "Linke",
        created_at: "Created at",
        tags: "Tags",
        create_btn: "Create",
      },
      dash_lesson_create_page: {
        title: "Create Lesson",
        video: "Video",
        video_btn: "Upload new video",
        delete_video_btn: "Delete video",
        image_label: "image",
        english_title: "Title in english",
        arabic_title: "Title in arabic",
        english_description: "Description in english",
        arabic_description: "Description in arabic",
        link: "Linke",
        program: "Program",
        level: "Level",
        created_at: "Created at",
        tags: "Tags",
        create_btn: "Create",
      },
      dash_work_component: {
        options: {
          delete: "Delete",
          update: "Update",
        },
      },
      dash_lessons_component: {
        options: {
          delete: "Delete",
          update: "Update",
        },
      },
      delete_work_form: {
        title: "Delete Work",
        message:
          "Are you sure that the work will be deleted with all its contents of photos and videos permanently?",
        yes: "Yes",
        no: "No",
      },
      delete_lesson_form: {
        title: "Delete Lesson",
        message:
          "Are you sure that the lesson will be deleted with all its contents of photos and videos permanently?",
        yes: "Yes",
        no: "No",
      },
      delete_skill_form: {
        title: "Delete Skill",
        message:
          "Are you sure that the skill will be deleted with all its contents of photos and videos permanently?",
        yes: "Yes",
        no: "No",
      },
      update_cv_page: {
        title: "Update Cv",
        button: "Update",
      },
      loading: "Wait please",
      global_message: "Mohamed Sultan",
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
        log_out: "تسجيل الخروج",
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
        see_more: "شاهد المزيد",
        program_name: "البرنامج",
      },
      works_filter_component: {
        title: "تصفية الأعمال",
        button: "تصفية الأعمال",
      },
      lessosn_filter_component: {
        title: "تصفية الدروس",
        tags_section: "اختر التاغات",
        program_section: "اختر البرنامج",
        level_section: "اختر المستوى",
        button: "تصفية الأعمال",
      },
      cv_page: {
        title: "صفحة السيرة الذاتية",
      },
      install_page: {
        title: "صفحة تنزيل التطبيق",
        button: "تنيزل التطبيق",
        message:
          "مرحبا ايها المصمم يمكنك تنزيل موقع المصمم محمد سلطان كتطبيق موبايل او ديسكتوب للتفقد آخر أعماله بسرعة",
      },
      skills_page: {
        title: "صفحة المهارات",
      },
      skill_page: {
        title: "صفحة المهارة",
      },
      not_found_page: {
        message: "الصفحة التي تبحث عنها غير موجودة",
        button: "اذهب للصفحة الرئيسية",
      },
      update_info_page: {
        title: "تعديل البيانات",
        avatar_btn: "تعديل الافاتار",
        english_name_label: "الاسم بالإنكليزي",
        arabic_name_label: "الاسم بالعربي",
        english_description_label: "الوصف بالإنكليزي",
        arabic_description_label: "الوصف بالعربي",
        whatsApp_label: "رقم الواتس اب",
        phone_label: "رقم الهاتف",
        telegram_label: "رابط التلغرام",
        facebook_label: "رابط الفسبوك",
        instgram_label: "رابط الانستغرام",
        linkedIn_label: "رابط اللينكد إن",
        behance_label: "رابط البيهانس",
        email_address_label: "عنوان البريد الالكتروني",
        update_btn: "تعديل",
      },
      contact_page: {
        title: "صفحة التواصل",
        helping_message:
          "مرحبا، هنا يمكنك التواصل معي بارسالك بريد إلكتروني لي من خلال كتابة اسمك الكامل و عنوان البريد الإلكتروني الخاص بك والرسالة التي نريد إيصالها لي ، سأقوم بالتواصل معك بأقرب وقت ممكن",
        name_label: "الأسم الكامل",
        email_label: "عنوان البريد الإلكتروني",
        message_label: "رسالتك",
        send_btn: "إرسال",
      },
      dash_works_page: {
        title: "أحداث الأعمال",
      },
      dash_skills_page: {
        title: "أحداث المهارات",
        skills_page_btn: "صفحة المهارات",
      },
      dash_work_update_page: {
        title: "تعديل العمل",
        video: "الفيديو",
        video_cover_btn: "تعديل غلاف الفيديو",
        video_btn: "تحميل فيديو جديدة",
        delete_video_btn: "حذف الفيديو",
        video_cover_label: "صورة الفيديو المصغر",
        image_label: "الصور",
        english_title: "العنوان بالإنكليزي",
        arabic_title: "العنوان بالعربي",
        english_description: "الوصف بالإنكليزي",
        arabic_description: "الوصف بالعربي",
        link: "رابط",
        created_at: "تاريخ الإنشاء",
        tags: "التاغات",
        update_btn: "تعديل",
      },
      dash_lessons_page: {
        title: "أحداث الدروس",
      },
      dash_lesson_update_page: {
        title: "تعديل الدرس",
        video: "الفيديو",
        video_cover_btn: "تعديل غلاف الفيديو",
        video_btn: "تحميل فيديو جديدة",
        delete_video_btn: "حذف الفيديو",
        video_cover_label: "صورة الفيديو المصغر",
        image_label: "الصور",
        english_title: "العنوان بالإنكليزي",
        arabic_title: "العنوان بالعربي",
        english_description: "الوصف بالإنكليزي",
        arabic_description: "الوصف بالعربي",
        link: "رابط",
        created_at: "تاريخ الإنشاء",
        program: "البرنامج",
        level: "المستوى",
        tags: "التاغات",
        update_btn: "تعديل",
      },
      dash_skill_update_page: {
        title: "تعديل المهارة",
        english_title: "العنوان بالإنكليزي",
        arabic_title: "العنوان بالعربي",
        english_description: "الوصف بالإنكليزي",
        arabic_description: "الوصف بالعربي",
        created_at: "تاريخ الإنشاء",
        delete_icon: "حذف الأيقونة المحددة",
        update_icon_btn: "تعديل الأيقونة",
        update_btn: "تعديل",
      },
      dash_skill_create_page: {
        title: "إنشاء المهارة",
        english_title: "العنوان بالإنكليزي",
        arabic_title: "العنوان بالعربي",
        english_description: "الوصف بالإنكليزي",
        arabic_description: "الوصف بالعربي",
        delete_icon: "حذف الأيقونة",
        created_at: "تاريخ الإنشاء",
        create_btn: "إنشاء",
      },
      dash_work_create_page: {
        title: "إنشاء العمل",
        video: "الفيديو",
        video_btn: "تحميل فيديو",
        delete_video_btn: "حذف الفيديو",
        image_label: "الصور",
        english_title: "العنوان بالإنكليزي",
        arabic_title: "العنوان بالعربي",
        english_description: "الوصف بالإنكليزي",
        arabic_description: "الوصف بالعربي",
        link: "رابط",
        created_at: "تاريخ الإنشاء",
        tags: "التاغات",
        create_btn: "إنشاء",
      },
      dash_lesson_create_page: {
        title: "إنشاء الدرس",
        video: "الفيديو",
        video_btn: "تحميل فيديو",
        delete_video_btn: "حذف الفيديو",
        image_label: "الصور",
        english_title: "العنوان بالإنكليزي",
        arabic_title: "العنوان بالعربي",
        english_description: "الوصف بالإنكليزي",
        arabic_description: "الوصف بالعربي",
        link: "رابط",
        program: "البرنامج",
        level: "المستوى",
        created_at: "تاريخ الإنشاء",
        tags: "التاغات",
        create_btn: "إنشاء",
      },
      dash_work_component: {
        options: {
          delete: "حذف",
          update: "تعديل",
        },
      },
      dash_lesson_component: {
        options: {
          delete: "حذف",
          update: "تعديل",
        },
      },
      delete_work_form: {
        title: "حذف العمل",
        message:
          "هل انت متأكد سيتم حذف العمل بكامل محتوياته من صور وفيديوهات بشكل نهائي",
        yes: "نعم",
        no: "لا",
      },
      delete_lesson_form: {
        title: "حذف الدرس",
        message:
          "هل انت متأكد سيتم حذف الدرس بكامل محتوياته من صور وفيديوهات بشكل نهائي",
        yes: "نعم",
        no: "لا",
      },
      delete_skill_form: {
        title: "حذف المهارة",
        message: "هل انت متأكد سيتم حذف المهارة بكامل محتوياته بشكل نهائي",
        yes: "نعم",
        no: "لا",
      },
      update_cv_page: {
        title: "تعديل السيرة الذاتية",
        button: "تعديل",
      },
      loading: "انتظر رجاء",
      global_message: "محمد سلطان",
      home_page: "الصفحة الرئيسية",
    },
    APIS: {
      auth: {
        log_in: "https://sultan-wngg.onrender.com/api/v1/sultan/login",
        get_admin_info: "https://sultan-wngg.onrender.com/api/v1/sultan/get",
        get_admin_links:
          "https://sultan-wngg.onrender.com/api/v1/sultan/links/get",
        get_admin_cv: "https://sultan-wngg.onrender.com/api/v1/sultan/cv/get",
        change_cv: "https://sultan-wngg.onrender.com/api/v1/sultan/cv",
        update_avatar: "https://sultan-wngg.onrender.com/api/v1/sultan/avatar",
        update_info: "https://sultan-wngg.onrender.com/api/v1/sultan/update",
      },
      skills_page_status: {
        get_status:
          "https://sultan-wngg.onrender.com/api/v1/sultan/skills/page/get/status",
        change_status:
          "https://sultan-wngg.onrender.com/api/v1/sultan/skills/page/change/status",
      },
      works: {
        get_all: "https://sultan-wngg.onrender.com/api/v1/sultan/work/get/all",
        get_one: "https://sultan-wngg.onrender.com/api/v1/sultan/work/get/one",
        update: "https://sultan-wngg.onrender.com/api/v1/sultan/work/update",
        change_cover:
          "https://sultan-wngg.onrender.com/api/v1/sultan/work/cover/update",
        delete: "https://sultan-wngg.onrender.com/api/v1/sultan/work/delete",
        create: "https://sultan-wngg.onrender.com/api/v1/sultan/work/create",
      },
      lessons: {
        get_all:
          "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/get/all",
        get_one:
          "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/get/one",
        change_cover:
          "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/cover/update",
        update: "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/update",
        delete: "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/delete",
        create: "https://sultan-wngg.onrender.com/api/v1/sultan/lesson/create",
      },
      skills: {
        get_all: "https://sultan-wngg.onrender.com/api/v1/sultan/skill/get/all",
        get_one: "https://sultan-wngg.onrender.com/api/v1/sultan/skill/get/one",
        change_icon:
          "https://sultan-wngg.onrender.com/api/v1/sultan/skill/change/icon",
        update: "https://sultan-wngg.onrender.com/api/v1/sultan/skill/update",
        delete: "https://sultan-wngg.onrender.com/api/v1/sultan/skill/delete",
        create: "https://sultan-wngg.onrender.com/api/v1/sultan/skill/create",
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

    // chage delete work's form status
    OpenOrCloseDeleteWorkForm(state) {
      state.delete_work_form_status =
        state.delete_work_form_status == "close" ? "open" : "close";
    },

    // chage delete lesson's form status
    OpenOrCloseDeleteLessonForm(state) {
      state.delete_lesson_form_status =
        state.delete_lesson_form_status == "close" ? "open" : "close";
    },

    // chage delete skill's form status
    OpenOrCloseDeleteSkillForm(state) {
      state.delete_skill_form_status =
        state.delete_skill_form_status == "close" ? "open" : "close";
    },
  },
  actions: {},
  modules: {},
});
