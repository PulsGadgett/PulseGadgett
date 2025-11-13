const products = [
    {
        id: 1,
        name: "پخش‌کننده FM خودرو",
        price: "۶۲۹,۰۰۰ تومان", 
        image: "images/T03/پخش‌کننده خودرو.jpg",
        category: "پخش‌کننده خودرو",
        code: "T03",
        available: true,
        description: "budi | پخش‌کننده FM خودرو | گارانتی شش ماهه"
    },
    {
        id: 2,
        name: "میکروفون تایپ سی",
        price: "۶۱۸,۰۰۰ تومان", 
        image: "images/JD057/میکروفون.jpg",
        category: "میکروفون",
        code: "JD057",
        available: true,
        description: "Jokade | میکروفون تایپ سی | گارانتی سه ماهه"
    },
    {
        id: 3,
        name: "کابل شارژ سه کاره",
        price: "۱۹۹,۰۰۰ تومان", 
        image: "images/JA024/کابل شارژ.jpg",
        category: "کابل شارژ",
        code: "JA024",
        available: true,
        description: "Jokade | کابل شارژ سه کاره | با قابلیت شارژ سریع | گارانتی سه ماهه"
    },
    {
        id: 4,
        name: "آداپتور سامسونگ سه پین",
        price: "۱,۰۹۸,۰۰۰ تومان", 
        image: "images/S087/آداپتور.jpg",
        category: "آداپتور",
        code: "S087",
        available: true,
        description: "Samsung | آداپتور سامسونگ سه پین | اورجینال | ۴۵وات | با قابلیت شارژ فوق سریع | مشکی | گارانتی شش ماهه"
    },
    {  
        id: 5,
        name: "قاب سیلیکونی سامسونگ A26",
        price: "۱۵۷,۰۰۰ تومان", 
        image: "images/GS86/قاب.jpg",
        category: "قاب",
        code: "GS86",
        available: true,
        description: "Samsung | قاب سیلیکونی سامسونگ A26"
    },
    {
        id: 6,
        name: "هولدر کانال کولری ۳۶۰درجه",
        price: "۲۳۴,۰۰۰ تومان",
        image: "images/JE057/هولدر.jpg",
        category: "هولدر",
        code: "JE057",
        available: true,
        description: "Jokade | هولدر کانال کولری ۳۶۰درجه | انعطا‌ف‌پذیر | گارانتی تست"
    },
    {
        id: 7,
        name: "هولدر کانال کولری",
        price: "۳۴۲,۰۰۰ تومان", 
        image: "images/500A/هولدر.jpg",
        category: "هولدر",
        code: "500A",
        available: true,
        description: "budi | هولدر کانال کولری | گارانتی تست"
    },
    {
        id: 8,
        name: "هندزفری دور گردنی",
        price: "۷۳۰,۰۰۰ تومان", 
        image: "images/EP63B/هندزفری و هدست.jpg",
        category: "هندزفری و هدست",
        code: "EP63B",
        available: true,
        description: "budi | هندزفری دور گردنی | گارانتی شش ماهه"
    },
    {
        id: 9,
        name: "قاب مخصوص مگ‌سیف آیفون۱۶",
        price: "۲۹۱,۰۰۰ تومان",
        image: "images/M93S/قاب.jpg",
        category: "قاب",
        code: "M93S",
        available: true,
        description: "Eouro | قاب مخصوص مگ‌سیف آیفون۱۶"
    },
    {
        id: 10,
        name: "قاب مخصوص مگ‌سیف آیفون۱۳",
        price: "۲۹۱,۰۰۰ تومان", 
        image: "images/M46S/قاب.jpg",
        category: "قاب",
        code: "M46S",
        available: true,
        description: "Eouro | قاب مخصوص مگ‌سیف آیفون۱۳"
    },
    {
        id: 11,
        name: "فلش ۶۴گیگ",
        price: "۵۸۶,۰۰۰ تومان", 
        image: "images/JC034/فلش.jpg",
        category: "فلش",
        code: "JC034",
        available: true,
        description: "Jokade | فلش ۶۴گیگ | گارانتی یک ساله"
    },
    {
        id: 12,
        name: "فلش ۶۴گیگ",
        price: "۴۴۲,۰۰۰ تومان", 
        image: "images/JC032/فلش.jpg",
        category: "فلش",
        code: "JC032",
        available: true,
        description: "Jokade | فلش ۶۴گیگ | گارانتی یک ساله"
    },
    {
        id: 13,
        name: "ساعت هوشمند ۴۶.۲میلی‌متر",
        price: "۲,۶۲۶,۰۰۰ تومان", 
        image: "images/JM002/ساعت.jpg",
        category: "ساعت",
        code: "JM002",
        available: true,
        description: "Jokade | ساعت هوشمند ۴۶.۲میلی‌متر | گارانتی شش ماهه"
    },
    {
        id: 14,
        name: "ساعت هوشمند ۴۴.۵میلی‌متر",
        price: "۱,۵۲۱,۰۰۰ تومان", 
        image: "images/JM001/ساعت.jpg",
        category: "ساعت",
        code: "JM001",
        available: true,
        description: "Jokade | ساعت هوشمند ۴۴.۵میلی‌متر | گارانتی شش ماهه"
    },
    {
        id: 15,
        name: "هندزفری دور گردنی",
        price: "۴۶۹,۰۰۰ تومان", 
        image: "images/JI025/هندزفری و هدست.jpg",
        category: "هندزفری و هدست",
        code: "JI025",
        available: true,
        description: "Jokade | هندزفری دور گردنی | گارانتی سه ماهه"
    },
    {
        id: 16,
        name: "هندزفری بی‌سیم",
        price: "۱,۷۶۷,۰۰۰ تومان", 
        image: "images/E19/هندزفری و هدست.jpg",
        category: "هندزفری و هدست",
        code: "E19",
        available: true,
        description: "Baseus | هندزفری بی‌سیم | با قابلیت شارژ سریع | گارانتی شش ماهه"
    },
    {
        id: 17,
        name: "کابل شارژ تایپ سی به لایتنینگ",
        price: "۵۳۴,۰۰۰ تومان", 
        image: "images/TL05/کابل شارژ.jpg",
        category: "کابل شارژ",
        code: "TL05",
        available: true,
        description: "Baseus | کابل تایپ سی به لایتنینگ | کنفی | ۱.۲متر | در پنج رنگ | گارانتی شش ماهه"
    },
    {
        id: 18,
        name: "هندزفری سیم‌دار تایپ سی",
        price: "۶۹۹,۰۰۰ تومان",
        image: "images/5830/هندزفری و هدست.jpg",
        category: "هندزفری و هدست",
        code: "5830",
        available: true,
        description: "Mcdodo | هندزفری سیم‌دار تایپ سی | گارانتی تست"
    },
    {
        id: 19,
        name: "کابل فنری AUX به بلوتوث",
        price: "۶۳۴,۰۰۰ تومان", 
        image: "images/8700/کابل AUX.jpg",
        category: "کابل AUX",
        code: "8700",
        available: true,
        description: "Mcdodo | کابل فنری AUX به بلوتوث | مناسب برای ضبط ماشین و اسپیکر | گارانتی شش ماهه"
    },
    {
        id: 20,
        name: "کابل شارژ تایپ سی به لاتنینگ",
        price: "۲۱۲,۰۰۰ تومان", 
        image: "images/275/کابل شارژ.jpg",
        category: "کابل شارژ",
        code: "275",
        available: true,
        description: "Apple | کابل شارژ تایپ سی به لایتنینگ | های کپی | ۱متر | گارانتی سه ماهه"
    },
    {
        id: 21,
        name: "کابل شارژ تایپ سی به تایپ سی",
        price: "۱,۰۲۹,۰۰۰ تومان",
        image: "images/IO86/کابل شارژ.jpg",
        category: "کابل شارژ",
        code: "IO86",
        available: true,
        description: "Apple | کابل شارژ تایپ سی به تایپ سی | کنفی | اورجینال | گارانتی شش ماهه"
    },
    {
        id: 22,
        name: "تبدیل لایتنینگ به USB",
        price: "۴۱۶,۰۰۰ تومان", 
        image: "images/7390/تبدیل.jpg",
        category: "تبدیل",
        code: "7390",
        available: true,
        description: "Mcdodo | تبدیل لایتنینگ به USB | دارای چراغ راهنما و بندآویز | گارانتی شش ماهه"
    },
    {
        id: 23,
        name: "تبدیل لایتنینگ",
        price: "۱۶۰,۰۰۰ تومان", 
        image: "images/JC018/تبدیل.jpg",
        category: "تبدیل",
        code: "JC018",
        available: true,
        description: "Jokade | تبدیل لایتنینگ | گارانتی سه ماهه"
    },
    {
        id: 24,
        name: "اسپیکر قابل حمل",
        price: "۱,۶۵۹,۰۰۰ تومان", 
        image: "images/VS-801/اسپیکر.jpg",
        category: "اسپیکر",
        code: "VS-801",
        available: true,
        description: "V-Smart | اسپیکر قابل حمل | گارانتی شش ماهه"
    },
    {
        id: 25,
        name: "هدست بی‌سیم گربه‌ای",
        price: "۹۷۵,۰۰۰ تومان", 
        image: "images/JD012/هندزفری و هدست.jpg",
        category: "هندزفری و هدست",
        code: "JD012",
        available: true,
        description: "Jokade | هدست بی‌سیم گربه‌ای | صورتی، آبی | گارانتی سه ماهه"
    },
    {
        id: 26,
        name: "کابل شارژ کنفی تایپ سی به تایپ سی",
        price: "۴۹۷,۰۰۰ تومان", 
        image: "images/C920/کابل شارژ.jpg",
        category: "کابل شارژ",
        code: "C920",
        available: true,
        description: "Baseus | کابل شارژ کنفی تایپ سی به تایپ سی | ۱۰۰وات | ۱متر | گارانتی شش ماهه"
    },
    {
        id: 27,
        name: "آداپتور سامسونگ ۲۵وات",
        price: "۴۹۷,۰۰۰ تومان", 
        image: "images/029/آداپتور.jpg",
        category: "آداپتور",
        code: "029",
        available: true,
        description: "Samsung | آداپتور سامسونگ ۲۵وات | اورجینال | با قابلیت شارژ فوق سریع | سفید، مشکی | گارانتی شش ماهه"
    }
];
