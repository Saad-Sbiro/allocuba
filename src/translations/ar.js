export const ar = {
  // Common
  common: {
    welcome: 'مرحباً',
    loading: 'جاري التحميل...',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    next: 'التالي',
    back: 'رجوع',
    save: 'حفظ',
    delete: 'حذف',
    edit: 'تعديل',
    close: 'إغلاق',
    search: 'بحث',
    filter: 'تصفية',
    language: 'اللغة'
  },

  // Splash Screen
  splash: {
    title: 'ألوكوبا',
    tagline: 'كسب طمأنينة، الماء فݣاع المدينة.'
  },

  // Sign Up
  signup: {
    title: 'مرحباً',
    subtitle: 'اختر دورك',
    client: 'عميل',
    driver: 'سائق',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    phone: 'رقم الهاتف',
    driverId: 'معرف السائق',
    password: 'كلمة المرور',
    start: 'ابدأ',
    login: 'تسجيل الدخول',
    selectLanguage: 'اختر اللغة',
    language: 'اللغة'
  },

  // Client Home
  clientHome: {
    greeting: 'مرحباً، {name}',
    greetingDefault: 'مرحباً',
    subtitle: 'توصيل الماء إلى باب منزلك',
    needWater: 'تحتاج ماء؟',
    orderNow: 'اطلب الآن واحصل على التوصيل بسرعة',
    orderButton: 'طلب الماء',
    recentOrders: 'طلباتي الأخيرة',
    driversWithoutApp: 'سائقون بدون تطبيق',
    contactDirectly: 'اتصل بهؤلاء السائقين مباشرة عبر الهاتف',
    deliveredBy: 'تم التوصيل بواسطة',
    status: {
      inProgress: 'قيد التنفيذ',
      delivered: 'تم التوصيل'
    }
  },

  // Order Page
  order: {
    title: 'طلب جديد',
    quantity: 'كمية الماء',
    waterType: 'نوع الماء',
    deliveryAddress: 'عنوان التوصيل',
    orderSummary: 'ملخص الطلب',
    confirmOrder: 'تأكيد الطلب',
    tonnes: 'برميل',
    unitPrice: 'السعر الوحدة',
    water: 'الماء',
    serviceFee: 'رسوم الخدمة',
    total: 'الإجمالي',
    estimatedDelivery: 'وقت التوصيل المتوقع',
    currentAddress: 'تم اكتشاف العنوان الحالي',
    detectLocation: 'اكتشف موقعي',
    detecting: 'جاري الاكتشاف...',
    chooseAddress: 'اختر عنواناً آخر',
    interactiveMap: 'خريطة تفاعلية',
    currentLocation: 'سيتم استخدام موقعك الحالي',
    step1: 'الكمية والنوع',
    step2: 'العنوان',
    step3: 'الملخص',
    orderConfirmed: 'تم تأكيد الطلب!',
    paymentMethod: 'طريقة الدفع',
    cod: 'الدفع عند الاستلام'
  },

  // Water Types
  waterTypes: {
    tantan: 'ماء طانطان',
    filtered: 'ماء تصفيه',
    pricePerTonne: '40 درهم / برميل',
    fixedFee: '+ 5 درهم رسوم (ثابتة)'
  },

  // Updates/Notifications
  updates: {
    title: 'الإشعارات',
    noNotifications: 'لا توجد إشعارات',
    viewOrder: 'عرض الطلب',
    viewOrders: 'عرض الطلبات',
    inRoute: 'طلبك في الطريق',
    inRouteMessage: '{driver} بدأ توصيل طلبك من {quantity} برميل من ماء طانطان. الوقت المتوقع للوصول: {time}',
    delivered: 'تم التوصيل',
    deliveredMessage: 'تم توصيل طلبك من {quantity} برميل من الماء المصفى بنجاح إلى عنوانك. شكراً لاستخدامك ألوكوبا!',
    confirmed: 'تم تأكيد الطلب',
    confirmedMessage: 'تم تأكيد طلبك من {quantity} برميل من ماء طانطان. سيتم تعيين سائق قريباً.',
    driverAssigned: 'تم تعيين سائق',
    driverAssignedMessage: 'تم تعيين {driver} لطلبك. سيتصل بك قبل التوصيل.',
    timeAgo: {
      minutes: 'منذ {count} دقيقة',
      minutesPlural: 'منذ {count} دقائق',
      hours: 'منذ {count} ساعة',
      hoursPlural: 'منذ {count} ساعات',
      yesterday: 'أمس',
      days: 'منذ {count} يوم',
      daysPlural: 'منذ {count} أيام'
    }
  },

  // Profile
  profile: {
    title: 'الملف الشخصي',
    name: '{firstName} {lastName}',
    role: 'عميل',
    editProfile: 'تعديل الملف الشخصي',
    personalInfo: 'المعلومات الشخصية',
    phone: 'الهاتف',
    address: 'العنوان',
    addressValue: 'العيون، المغرب',
    orderHistory: 'سجل الطلبات',
    settings: 'الإعدادات',
    darkMode: 'الوضع الداكن',
    logout: 'تسجيل الخروج',
    logoutConfirm: 'هل أنت متأكد من أنك تريد تسجيل الخروج؟',
    logoutConfirmText: 'تسجيل الخروج',
    tonnes: 'أطنان'
  },

  // Edit Profile
  editProfile: {
    title: 'تعديل الملف الشخصي',
    personalInfo: 'المعلومات الشخصية',
    save: 'حفظ',
    saved: 'تم تحديث الملف الشخصي بنجاح'
  },

  // Driver
  driver: {
    greeting: 'الطلبات المتاحة',
    subtitle: 'اختر طلباً للتوصيل',
    availableOrders: 'طلبات جديدة',
    activeDeliveries: 'التوصيلات الجارية',
    inRoute: 'في الطريق',
    startDelivery: 'بدء التوصيل',
    markDelivered: 'تم التوصيل',
    markDeliveredSuccess: 'تم تحديد الطلب كتم التوصيل بنجاح!',
    client: 'العميل',
    distance: 'المسافة',
    estimatedTime: 'الوقت المتوقع',
    address: 'العنوان',
    phone: 'الهاتف',
    ordersMap: 'خريطة الطلبات',
    mapDescription: 'خريطة تفاعلية مع مواقع العملاء',
    mapHint: 'المشابك الزرقاء تشير إلى الطلبات المتاحة',
    tonnes: 'برميل',
    tonnesDelivered: 'أطنان تم توصيلها',
    reportIssue: 'الإبلاغ عن مشكلة'
  },

  // Driver Report
  driverReport: {
    title: 'الإبلاغ عن مشكلة',
    subtitle: 'الإبلاغ عن مشكلة مع طلب {clientName}',
    noAnswer: 'العميل لا يرد',
    noAnswerDesc: 'العميل لا يرد على الهاتف',
    wrongAddress: 'عنوان خاطئ',
    wrongAddressDesc: 'العنوان المقدم غير صحيح',
    clientNotAvailable: 'العميل غير متاح',
    clientNotAvailableDesc: 'العميل غير متاح في العنوان',
    clientRefused: 'العميل رفض',
    clientRefusedDesc: 'العميل رفض الطلب',
    other: 'مشكلة أخرى',
    otherDesc: 'مشكلة أخرى غير مذكورة',
    additionalDetails: 'تفاصيل إضافية',
    descriptionPlaceholder: 'اوصف المشكلة بالتفصيل...',
    submit: 'إرسال التقرير'
  },

  // Driver Updates
  driverUpdates: {
    title: 'الإشعارات',
    noNotifications: 'لا توجد إشعارات',
    viewOrders: 'عرض الطلبات',
    urgent: 'عاجل',
    paymentDay: 'دفع اليوم',
    paymentDayMessage: 'يرجى التوجه إلى المكتب لاستلام دفعة يومك. المبلغ: {amount} درهم',
    newOrderAvailable: 'طلب جديد متاح',
    newOrderMessage: 'طلب جديد من {quantity} برميل متاح بالقرب من موقعك الحالي.',
    weeklyPaymentReminder: 'تذكير: الدفع الأسبوعي',
    weeklyPaymentMessage: 'لا تنسَ القدوم إلى المكتب غداً لاستلام دفعتك الأسبوعية.',
    deliveryCompleted: 'تم إكمال التوصيل',
    deliveryCompletedMessage: 'لقد أكملت {count} توصيلات اليوم. عمل ممتاز!',
    importantMeeting: 'مهم: اجتماع غداً',
    meetingMessage: 'اجتماع إلزامي في المكتب غداً الساعة {time}. الحضور مطلوب.',
    timeAgo: {
      minutes: 'منذ {count} دقيقة',
      minutesPlural: 'منذ {count} دقائق',
      hours: 'منذ {count} ساعة',
      hoursPlural: 'منذ {count} ساعات',
      yesterday: 'أمس',
      days: 'منذ {count} يوم',
      daysPlural: 'منذ {count} أيام'
    }
  },

  // Driver Profile
  driverProfile: {
    name: 'أحمد ب.',
    role: 'سائق',
    editProfile: 'تعديل الملف الشخصي',
    personalInfo: 'المعلومات الشخصية',
    phone: 'الهاتف',
    deliveryZone: 'منطقة التوصيل',
    deliveryZoneValue: 'العيون، المغرب',
    recentDeliveries: 'التوصيلات الأخيرة',
    deliveryGoal: 'هدف التوصيلات',
    rewardMessage: 'المكافأة: {amount} درهم مقابل {goal} توصيلات',
    completed: 'مكتمل',
    delivered: 'تم التوصيل',
    remaining: 'المتبقي',
    goal: 'الهدف',
    remainingMessage: '{count} توصيلات متبقية للحصول على مكافأتك البالغة {amount} درهم',
    congratulations: 'تهانينا! لقد حققت هدفك!',
    tonnesDelivered: 'برميل تم توصيلها',
    darkMode: 'الوضع الداكن',
    logout: 'تسجيل الخروج',
    logoutConfirm: 'هل أنت متأكد من أنك تريد تسجيل الخروج؟',
    logoutConfirmText: 'تسجيل الخروج'
  },

  // Navigation
  navigation: {
    home: 'الرئيسية',
    orders: 'الطلبات',
    notifications: 'الإشعارات',
    profile: 'الملف الشخصي',
    settings: 'الإعدادات'
  },

  // Settings
  settings: {
    title: 'الإعدادات',
    appearance: 'المظهر',
    language: 'اللغة',
    languageDescription: 'اختر لغتك المفضلة',
    darkMode: 'الوضع الداكن',
    darkModeDescription: 'تفعيل المظهر الداكن',
    themeColor: 'لون المظهر',
    themeColorDescription: 'خصص اللون الرئيسي للتطبيق',
    support: 'الدعم',
    contact: 'اتصل بنا',
    contactDescription: 'تحتاج مساعدة؟ اتصل بنا',
    phoneNumber: 'رقم الهاتف',
    phone: '+212 6XX XXX XXX',
    donation: 'تبرع',
    donationDescription: 'ادعم المشروع',
    donationPlace: 'تبرع الآن',
    about: 'حول',
    version: 'الإصدار 1.0.0'
  },

  // Donation Modal
  donationModal: {
    title: 'التبرع',
    subtitle: 'اختر المبلغ الذي ترغب في التبرع به لدعم تطبيقنا',
    selectAmount: 'اختر مبلغاً',
    customAmount: 'مبلغ مخصص',
    enterAmount: 'أدخل المبلغ',
    donationAmount: 'مبلغ التبرع',
    confirmDonation: 'تأكيد التبرع',
    successMessage: 'شكراً لك على تبرعك بمبلغ {amount} درهم!'
  },

  // Confirm Dialog
  confirmDialog: {
    cancel: 'إلغاء'
  }
}

