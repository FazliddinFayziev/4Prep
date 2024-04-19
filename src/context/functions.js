export const languageChange = (language) => {
    const { eng, ru } = language

    // Herro Banner
    const first_part = eng ? "Dream Big" : ru ? "Мечтай крупно" : "Katta orzular";
    const second_part = eng ? "Start Now!" : ru ? "начни сейчас" : "Hozirdan boshlanadi!";
    const become_student = eng ? "Become Student" : ru ? "Стать студентом" : "Talaba bo'lish";
    const title = eng ? "Discover New Opportunities and Ideas with Our Global Student Community!" : ru ? "Откройте новые возможности с нашим международным студенческим сообществом!" : "Xalqaro talabalar hamjamiyatimiz bilan yangi imkoniyatlar va g'oyalarni kashf eting!";

    // About US
    const about_one = eng ? "About" : ru ? "O" : "Biz";
    const about_two = eng ? "Us" : ru ? "Нас" : "";
    const about_title = eng ? "Welcome to 4prep, your trusted partner in unlocking the doors to prestigious American universities." : ru ? "Добро пожаловать в 4prep, вашего надежного партнера в открытии дверей престижных американских университетов."  : "Amerikaning nufuzli universitetlari eshiklarini ochishdagi ishonchli hamkoringiz 4prepga xush kelibsiz.";
    const about_text = eng ? "At 4prep, we are dedicated to empowering students worldwide to pursue their dreams of studying in the United States. With our comprehensive suite of services, we guide aspiring scholars through every step of the journey, from university admissions to securing scholarships and navigating the complex visa application process." : ru ? "В 4prep мы посвящаем себя тому, чтобы дать студентам по всему миру возможность осуществить свои мечты об учебе в Соединенных Штатах. С нашим комплексным набором услуг мы ведем амбициозных ученых через каждый этап пути, от поступления в университет до получения стипендий и оформления сложной визовой анкеты." : "4prepda biz butun dunyodagi talabalarga Qo'shma Shtatlarda o'qish orzulariga erishish imkoniyatini berishga intilamiz. Bizning keng qamrovli xizmatlarimiz orqali biz intiluvchan olimlarga universitetga hujjat topshirishdan tortib grand olish va murakkab viza ariza berish jarayonini boshqarishgacha bo'lgan har qadamda yo'l-yo'riq ko'rsatamiz.";

    // Our Services
    const service_title_one = eng ? "Our" : ru ? "Наши" : "";
    const service_title_two = eng ? "Services" : ru ? "Услуги" : "Xizmatlarimiz";
    const service_study = eng ? "Unlocking Opportunities: Your Comprehensive Guide to Scholarships, Grants, and Financial Aid" : ru ? "Открытие возможностей: ваш точный доступ к стипендиям, грантам и финансовой помощи." : "Imkoniyatlarni ochish: stipendiyalar, grantlar va moliyaviy yordam bo'yicha sizning aniq qo'llanmangiz";
    const service_visa = eng ? "Navigate the Visa Maze: Your Visa & Immigration Resource Hub" : ru ? "Подготовка к собеседованию по визе США с помощью руководств и онлайн занятий." : "AQSh Viza Intervyusi Uchun yo'riqnomalar va online darslar orqali tayyorlaning.";

    // Our Family
    const family_title_one = eng ? "Our" : ru ? "Наша" : "Bizning";
    const family_title_two = eng ? "Family" : ru ? "Семья" : "Oila";
    const family_button = eng ? "Show More" : ru ? "Больше" : "Ko'proq"

    // Testimonials
    const testimonials_title = eng ? "Testimonials" : ru ? "Отзывы" : "Sharhlar";
    const test_one = eng ? "Thanks to 4prep, I received personalized guidance and support throughout my entire application process." : ru ? "Благодаря 4prep я получила персонализированное руководство и поддержку на протяжении всего процесса подачи заявки." : "4prep tufayli men ariza berish jarayonida shaxsiy yo'l-yo'riq va yordam oldim.";
    const test_two = eng ? "I'm incredibly grateful for the invaluable assistance provided by 4prep." : ru ? "Я чрезвычайно благодарен за бесценную помощь, предоставленную 4prep." : "Men 4prep tomonidan ko'rsatilgan bebaho yordam uchun juda minnatdorman.";
    const test_three = eng ? "Choosing 4prep was one of the best decisions I made for my academic journey. Their unwavering commitment to student success and comprehensive services made the daunting task of applying to American universities feel manageable and rewarding." : ru ? "Выбор 4prep был одним из лучших решений, которые я приняла в своем академическом путешествии." : "4Prep, mening akademik sayohatim uchun qabul qilgan eng yaxshi tanlovlardan biri bo'ldi. Ularning yuqori sifatli xizmatlar taqdim etishdagi ko'rsatilgan yaxshi yondoshmalari orqali, Amerika universitetlariga hujjat topshirishda ko'p mablag' va vaqt tejam etdim.";

    // FAQs
    const faqs_title = eng ? "FAQs" : ru ? "ЧаВо" : "Savollar";
    const question_one = eng ? "How can 4prep help me with my university admissions process?" : ru ? "Как 4prep может помочь мне с процессом поступления в университет?" : "4prep menga universitetga kirish jarayonida qanday yordam berishi mumkin?";
    const question_two = eng ? "Can 4prep assist me in finding scholarships to fund my education in the United States?" : ru ? "Может ли 4prep помочь мне найти стипендии для финансирования моего образования в Соединенных Штатах?" : "4prep menga Qo'shma Shtatlardagi ta'limimni moliyalashtirish uchun stipendiya topishda yordam bera oladimi?";
    const question_three = eng ? "Does 4prep provide support for the visa application process?" : ru ? "Предоставляет ли 4prep поддержку в процессе оформления визы?" : "4prep vizaga ariza berish jarayonini qo'llab-quvvatlaydimi?";
    const answer_one = eng ? "4prep provides comprehensive assistance throughout the university admissions process. Our experienced team guides you through selecting suitable universities, preparing application materials, and ensuring all requirements are met for a successful application. We offer personalized support to maximize your chances of admission to top universities in the United States." : ru ? "4prep обеспечивает всестороннюю помощь на протяжении процесса поступления в университет. Наш опытный коллектив поможет вам выбрать подходящие университеты, подготовить необходимые документы и удовлетворить все требования для успешной подачи заявки. Мы предлагаем персонализированную поддержку для максимизации ваших шансов на поступление в ведущие университеты Соединенных Штатов." : "4prep universitetga qabul qilish jarayonida har tomonlama yordam beradi. Bizning tajribali jamoamiz sizga mos universitetlarni tanlash, ariza materiallarini tayyorlash va muvaffaqiyatli ariza berish uchun barcha talablar bajarilishini ta'minlash orqali sizga yo'l ko'rsatadi. Biz sizning Amerika Qo'shma Shtatlaridagi eng yaxshi universitetlarga kirish imkoniyatingizni oshirish uchun shaxsiy yordamni taklif qilamiz.";
    const answer_two = eng ? "Yes, 4prep is dedicated to helping students secure scholarships to fund their education in the United States. Our team assists you in identifying scholarship opportunities, crafting compelling scholarship applications, and meeting deadlines. We strive to alleviate the financial burden of studying abroad by connecting students with various scholarship options tailored to their academic achievements and financial needs." : ru ? "Да, 4prep посвящен помощи студентам в получении стипендий для финансирования обучения в Соединенных Штатах. Наша команда помогает вам выявить возможности для получения стипендий, создать убедительные заявки на стипендии и соблюсти сроки. Мы стремимся смягчить финансовую нагрузку при обучении за рубежом, предлагая студентам различные варианты стипендий, адаптированные к их академическим достижениям и финансовым потребностям." : "Ha, 4prep talabalarga Qo'shma Shtatlardagi ta'limini moliyalashtirish uchun stipendiya olishda yordam berishga bag'ishlangan. Bizning jamoamiz sizga stipendiya imkoniyatlarini aniqlashda, jozibali stipendiya arizalarini tayyorlashda va belgilangan muddatlarga rioya qilishda yordam beradi. Biz talabalarni akademik yutuqlari va moliyaviy ehtiyojlariga moslashtirilgan turli stipendiya variantlari bilan bog'lash orqali chet elda o'qishning moliyaviy yukini engillashtirishga intilamiz.";
    const answer_three = eng ? "Absolutely! 4prep understands the importance of a smooth visa application process for international students. Our experts offer guidance and resources to prepare you for the visa interview, including mock interviews and tips for success. We ensure that you are equipped with the necessary documents and information to navigate the visa application process with confidence, helping you realize your dream of studying in the United States." : ru ? "Безусловно! 4prep понимает важность гладкого процесса оформления визы для международных студентов. Наши эксперты предлагают руководство и ресурсы для подготовки к визовому интервью, включая тренировочные интервью и советы для успешного прохождения. Мы гарантируем, что вы будете оснащены необходимыми документами и информацией для уверенного прохождения процесса оформления визы, помогая вам осуществить свою мечту об обучении в Соединенных Штатах." : "Mutlaqo! 4prep xalqaro talabalar uchun vizaga ariza topshirishning muammosiz jarayoni muhimligini tushunadi. Mutaxassislarimiz sizni viza intervyusiga tayyorlash uchun yo'l-yo'riq va resurslarni, jumladan, suhbatlar va muvaffaqiyatga erishish uchun maslahatlarni taklif qilishadi. Biz sizga vizaga ariza topshirish jarayonini ishonchli boshqarish uchun zarur hujjatlar va maʼlumotlar bilan taʼminlanganligingizni taʼminlaymiz, bu sizga Qoʻshma Shtatlarda oʻqish orzuingizni roʻyobga chiqarishga yordam beradi.";

    // Contact US
    const contact_one = eng ? "Contact" : ru ? "Контак" : "Aloqa";
    const contact_two = eng ? "Us" : "";
    const name = eng ? "Full Name" : ru ? "Полное имя" : "To'liq ism";
    const email = eng ? "Email" : ru ? "Электронная почта" : "Elektron pochta";
    const phone = eng ? "Phone Number" : ru ? "Номер телефона" : "Telefon raqam";
    const message = eng ? "Message!" : ru ? "Отзыв!": "Xabar qoldiring!";
    const submit = eng ? "Submit" : ru ? "Отправить" : "Jo'natish";

    // Our Blog
    const blog_one = eng ? "Our" : ru ? "Наш" : "";
    const blog_two = eng ? "Blog" : ru ? "Блог" : "Blog";
    const follow = eng ? "FOLLOW OUR BLOGS" : ru ? "СЛЕДУЙТЕ НАШИМ БЛОГАМ" : "BLOGLARIMIZNI KUZATIB BORING";
    const location = eng ? "HOW AND WHERE CAN I FIND OFFICE OF 4PREP?" : ru ? "КАК И ГДЕ МОЖНО НАЙТИ ОФИС 4PREP?" : "4PREP OFISINI QANDAY VA QAYERDAN TOPISH MUMKIN?";
    const writting = eng ? "WRITING A CORRECT PERSONAL STATEMENT" : ru ? "НАПИСАНИЕ ПРАВИЛЬНОГО ЛИЧНОГО ЗАЯВЛЕНИЯ" : "TO'G'RI PERSONAL STATEMENT YOZISH";
    const students = eng ? "WE ARE WITH OUR STUDENTS IN NEW YORK" : ru ? "МЫ С НАШИМИ СТУДЕНТАМИ В НЬЮ-ЙОРКЕ" : "NEW-YORKDA STUDENTLARIMIZ BILAN BIRGAMIZ";
    const world = eng ? "4PREP IS NOW AVAILABLE WORLDWIDE TO SERVE YOU." : ru ? "4PREP СЕЙЧАС ДОСТУПЕН ПО ВСЕМУ МИРУ, ЧТОБЫ СЛУЖИТЬ ВАМ." : "4PREP ENDI BUTUN DUNYO BO'YLAB XIZMATINGIZDA";

    return {
        name,
        email,
        phone,
        world,
        title,
        submit,
        follow,
        message,
        students,
        location,
        writting,
        blog_one,
        test_one,
        test_two,
        blog_two,
        about_one,
        about_two,
        faqs_title,
        answer_two,
        about_text,
        test_three,
        first_part,
        answer_one,
        contact_one,
        contact_two,
        second_part,
        about_title,
        answer_three,
        question_one,
        service_visa,
        question_two,
        service_study,
        family_button,
        question_three,
        become_student,
        family_title_one,
        family_title_two,
        service_title_one,
        service_title_two,
        testimonials_title,
    }
}