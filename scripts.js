const toggleBtn = document.getElementById('lang-toggle');
let currentLang = 'ar';
const translations = {
    en: {
        "الرئيسية": "Home",
        "عن الشركة": "About Us",
        "خدماتنا": "Services",
        "تواصل معنا": "Contact",
        "نحن نخلق لحظات لا تُنسى": "We Create Unforgettable Moments",
        "تنظيم الحفلات، أعياد الميلاد، الخطوبات والمزيد بأسلوب فاخر.": "We organize parties, birthdays, engagements and more with a luxurious style.",
        "معرض الصور": "Gallery",
        "معلومات التواصل": "Contact Info",
        "📞الهاتف:+212633585325": "📞 Phone: +212 633585325",
        "📧 البريد الإلكتروني: ayoubgf1808@gmail.com": "📧 Email: ayoubgf1808@gmail.com",
        "📍 العنوان: مراكش ،المغرب": "📍 Address: marrakech, Morocco",
        "تواصل معنا": "Contact Us",
        "إرسال": "Send"
    },
    ar: {}
};
toggleBtn.addEventListener('click', () => {
    const elements = document.querySelectorAll('[data-lang]');
    if(currentLang === 'ar'){
        elements.forEach(el => {
            if(translations.en[el.textContent]){
                el.textContent = translations.en[el.textContent];
            }
        });
        toggleBtn.textContent = 'العربية';
        currentLang = 'en';
    } else {
        elements.forEach(el => {
            if(translations.en[el.textContent]){
                const arText = Object.keys(translations.en).find(key => translations.en[key] === el.textContent);
                if(arText) el.textContent = arText;
            }
        });
        toggleBtn.textContent = 'English';
        currentLang = 'ar';
    }
});
