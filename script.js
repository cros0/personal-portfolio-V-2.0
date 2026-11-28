/* ==========================================================================
   PORTFOLIO 2.0 — script.js
   Features: Language Toggle (EN/AR + RTL), Page Transitions,
             Scroll Animations, Mobile Nav
   ========================================================================== */

/* ── 1. TRANSLATIONS ───────────────────────────────────────────────────── */
const translations = {
  en: {
    /* Navbar */
    "nav.name":     "Mohamed Abbas",
    "nav.about":    "About",
    "nav.exp":      "Experience",
    "nav.certs":    "Certifications",
    "nav.skills":   "Skills",
    "nav.projects": "Projects",
    "nav.resume":   "Resume",
    "nav.contact":  "Contact",

    /* Hero */
    "hero.badge":     "Open to Opportunities",
    "hero.title.a":   "Hi, I'm ",
    "hero.title.b":   "Mohamed Abbas",
    "hero.headline":  "Biomedical Engineer & Aspiring Web Developer",
    "hero.bio":       "Biomedical Engineering graduate from Al-Turath University with a growing passion for technology and its potential to solve real-world problems.",
    "hero.cta1":      "View My Projects",
    "hero.cta2":      "View Resume",
    "hero.cta3":      "Get In Touch",
    "hero.card.name": "Mohamed A. Abbas",
    "hero.card.sub":  "Biomedical Engineer",
    "hero.card.badge":"Al-Turath · Class of 2026",

    /* About */
    "about.eyebrow":   "About Me",
    "about.title":     "About Me",
    "about.subtitle":  "Biomedical Engineering graduate with a passion for software, technology, and practical innovation",
    "about.p1":        "I'm a Biomedical Engineering graduate from Al-Turath University with a growing passion for technology and its potential to solve real-world problems.",
    "about.p2":        "My interests extend beyond my academic background into programming, web development, artificial intelligence, and exploring how technology works behind the scenes. I enjoy learning new tools, experimenting with ideas, and turning what I learn into practical projects.",
    "about.p3":        "I'm naturally curious, always looking for opportunities to expand my skills, connect different fields, and create things that combine technology with creativity. I believe the best way to grow is to keep exploring, building, and challenging myself.",
    "stat.degree.label":  "Degree",
    "stat.degree.value":  "B.Sc. Biomedical Engineering",
    "stat.degree.sub":    "Al-Turath University (Jan 2022 – Jan 2026)",
    "stat.loc.label":     "Location & Status",
    "stat.loc.value":     "Baghdad, Iraq",
    "stat.loc.sub":       "Available for Full-time / Internships",

    /* Experience */
    "exp.eyebrow":    "Background",
    "exp.title":      "Education & Practical Experience",
    "exp.subtitle":   "Academic milestones and clinical observations",
    "exp.1.period":   "Jan 2022 — Jan 2026",
    "exp.1.role":     "Bachelor of Science in Biomedical Engineering",
    "exp.1.org":      "Al-Turath University · Baghdad, Iraq",
    "exp.1.desc":     "Four-year engineering curriculum focusing on medical equipment technology, physiological measurement systems, biomedical sensors, electronic circuit analysis, and medical device safety standards.",
    "exp.2.period":   "Academic Fieldwork",
    "exp.2.role":     "Clinical Hospital Visits & Medical Equipment Observation",
    "exp.2.org":      "Healthcare Facilities · Baghdad",
    "exp.2.desc":     "Visited hospitals to observe a diverse range of operational medical equipment in active clinical settings. Studied clinical workflows, preventive maintenance schedules, and patient safety protocols.",
    "exp.3.period":   "Academic Labs",
    "exp.3.role":     "Biomedical Instrumentation & Electronics Laboratory",
    "exp.3.org":      "Al-Turath University Laboratories",
    "exp.3.desc":     "Performed hands-on experiments involving electrical circuits, biomedical sensors, diagnostic measurement tools, and signal processing apparatus.",

    /* Certifications */
    "certs.eyebrow":  "Credentials",
    "certs.title":    "Certifications & Specialized Workshops",
    "certs.subtitle": "Continuous professional development across AI, medical ultrasound, and biomedical hardware",
    "cert.1.date":    "Jun 16, 2026",
    "cert.1.title":   "Google AI Essentials",
    "cert.1.issuer":  "Coursera · Google",
    "cert.1.desc":    "Completed 5 specialized courses: Introduction to AI, Maximize Productivity with AI Tools, Discover the Art of Prompting, Use AI Responsibly, and Stay Ahead of the AI Curve.",
    "cert.2.date":    "Aug 27, 2026",
    "cert.2.title":   "Ultrasound Scanner Workshop",
    "cert.2.issuer":  "Pioneers of BME Association / medworx",
    "cert.2.desc":    "Comprehensive training on ultrasound scanner working principles, acoustic transducer components, signal receivers, and operational modes across device types.",
    "cert.3.date":    "Aug 9–13, 2026",
    "cert.3.title":   "BCP & Soldering Workshop",
    "cert.3.issuer":  "Scientific Care Directorate · Ministry of Youth and Sport",
    "cert.3.desc":    "Four-day practical workshop covering the core principles of BCP components, circuit integration, and precision soldering techniques.",
    "cert.4.date":    "Jun 30, 2026",
    "cert.4.title":   "Spinal Orthosis and Deformities Workshop",
    "cert.4.issuer":  "Pioneers of BME Association · National Volunteer Center",
    "cert.4.desc":    "Introduction to spinal orthosis design, structural biomechanics, spinal deformation pathologies, and therapeutic patient treatment methods.",

    /* Skills */
    "skills.eyebrow":    "Expertise",
    "skills.title":      "Skills & Capabilities",
    "skills.subtitle":   "Core technical expertise, modern AI tools, and professional attributes",
    "skills.ai.title":   "AI & Developer Tools",
    "skills.ai.desc":    "Growing skill in modern AI-assisted workflows for planning, development, and research.",
    "skills.bme.title":  "Biomedical Engineering",
    "skills.bme.desc":   "Solid grounding in medical device fundamentals, clinical instrumentation, and biomedical hardware.",
    "skills.pro.title":  "Professional & Languages",
    "skills.pro.desc":   "Bilingual communicator with strong soft skills built through academic and clinical environments.",
    "skills.ai.section": "AI Tools I Use",
    "skills.claude.name":  "Claude",
    "skills.claude.desc":  "My development and problem-solving partner for coding, building projects, debugging, and exploring technical ideas.",
    "skills.chatgpt.name": "ChatGPT",
    "skills.chatgpt.desc": "My everyday thinking partner for learning, research, brainstorming, explanations, planning, and refining ideas.",
    "skills.agy.name":     "Antigravity",
    "skills.agy.desc":     "My primary agentic AI partner for planning and building large, complex projects requiring sustained context, multi-step execution, and deep collaboration.",
    "badge.agy":           "Antigravity",
    "badge.prompt":        "Prompt Engineering",
    "badge.vscode":        "VS Code",
    "badge.git":           "Git & GitHub",
    "badge.med.eq":        "Medical Equipment Fundamentals",
    "badge.troubleshoot":  "Troubleshooting & Maintenance",
    "badge.safety":        "Medical Device Safety",
    "badge.ecg":           "ECG Signal Simulation",
    "badge.biosensors":    "Biosensors",
    "badge.soldering":     "Precision Soldering",
    "badge.office":        "MS Word & Excel",
    "badge.problem":       "Problem Solving",
    "badge.teamwork":      "Teamwork & Communication",
    "badge.time":          "Time Management",
    "badge.adapt":         "Adaptability & Fast Learner",
    "badge.arabic":        "Arabic: Native",
    "badge.english":       "English: B2 Upper Intermediate",

    /* Projects */
    "proj.eyebrow":        "Work",
    "proj.title":          "Featured Projects",
    "proj.subtitle":       "Engineering capstone and AI-assisted web development journey",
    "proj.ecg.tag":        "Graduation Project · Al-Turath",
    "proj.ecg.title":      "ECG Simulator",
    "proj.ecg.desc":       "Collaborated with a team of Biomedical Engineering students to design and build a functional ECG Simulator. Gained practical exposure to biomedical signal generation, cardiac waveform simulation, instrumentation design, and collaborative project planning.",
    "proj.port.tag":       "AI-Assisted Web Development",
    "proj.port.title":     "Personal Portfolio Website",
    "proj.port.v1.label":  "v1.0 — Original",
    "proj.port.v1.desc":   "Built using Antigravity and pure HTML5 & CSS3. Features an atmospheric theme, responsive layout, and an accessible presentation of engineering credentials without any third-party frameworks.",
    "proj.port.v2.label":  "v2.0 — Major Redesign (This Site)",
    "proj.port.v2.desc":   "A complete redesign adopting a clean, structured multi-page layout with bilingual Arabic/English support, smooth page transitions, and a dedicated AI tools section. Built with Antigravity.",
    "proj.view.repo":      "View Repository →",
    "proj.view.site":      "View Live Site →",

    /* Resume Page */
    "resume.page.title":       "Curriculum Vitae",
    "resume.page.subtitle":    "Official resume of Mohamed Abdulhassan Abbas — Biomedical Engineer",
    "resume.btn.print":        "Print / Save PDF",
    "resume.btn.back":         "← Back to Portfolio",
    "resume.name":             "MOHAMED ABDULHASSAN ABBAS",
    "resume.title":            "BIOMEDICAL ENGINEER",
    "resume.loc":              "Baghdad, Iraq, Palestine street",
    "resume.sec.summary":      "SUMMARY",
    "resume.summary.text":     "Biomedical Engineering graduate with an interest in technology and its practical applications. My academic background has given me an understanding of technical systems, problem-solving, and the relationship between engineering and healthcare. I am continuously working to improve my technical skills and broaden my knowledge beyond my academic field, with a growing interest in software, digital technologies, and automation. I am eager to gain practical experience, take on new challenges, and develop my abilities in a professional environment.",
    "resume.sec.education":    "EDUCATION",
    "resume.edu.degree":       "Bachelor of Science in Biomedical Engineering",
    "resume.edu.date":         "Jan 2022 – Jan 2026",
    "resume.edu.school":       "Al-Turath University, Baghdad, Iraq",
    "resume.sec.certs":        "CERTIFICATIONS AND WORKSHOPS",
    "resume.cert1.title":      "Google AI Essentials",
    "resume.cert1.date":       "Jun 16, 2026",
    "resume.cert1.desc":       "Coursera – Completed 5 courses: Introduction to AI, Maximize Productivity with AI Tools, Discover the Art of Prompting, Use AI Responsibly, Stay Ahead of the AI Curve",
    "resume.cert2.title":      "Spinal Orthosis and Deformities Workshop",
    "resume.cert2.date":       "Jun 30, 2026",
    "resume.cert2.desc":       "Pioneers of Biomedical Engineering Association | National Center for Volunteer Work (Ministry of Youth and Sports) — Introduction to the Spinal Orthosis and Deformation and how to treat the patient conditions",
    "resume.cert3.title":      "BCP Workshop",
    "resume.cert3.date":       "Aug 9-13, 2026",
    "resume.cert3.desc":       "Scientific Care Directorate, Ministry of Youth and Sport — A four days workshop focused on the principles of the BCP and its components, the soldering process",
    "resume.cert4.title":      "Ultrasound Scanner Workshop",
    "resume.cert4.date":       "Aug 27, 2026",
    "resume.cert4.desc":       "Pioneers of Biomedical Engineering Association / medworx, Al Harthya-Kindi St — A one day workshop about the Ultrasound Scanner focused on the main working principle of the device, its components and the types of the device",
    "resume.sec.skills":       "SKILLS & LANGUAGES",
    "resume.skills.tech.title":"TECHNICAL SKILLS",
    "resume.skills.tech.desc": "Microsoft Word & Excel, AI Tools (ChatGPT, Claude, Antigravity)",
    "resume.skills.pro.title": "PROFESSIONAL SKILLS",
    "resume.skills.pro.desc":  "Problem Solving, Teamwork & Communication, Adaptability, Fast Learning",
    "resume.skills.lang.title":"LANGUAGES",
    "resume.skills.lang.desc": "• Arabic: Native  • English: Upper Intermediate (B2)",

    /* Contact */
    "contact.eyebrow":    "Reach Out",
    "contact.title":      "Get In Touch",
    "contact.subtitle":   "Available for biomedical engineering roles, internships and skills improvement opportunities, or professional connections",
    "contact.info.title": "Direct Contact Information",
    "contact.info.sub":   "Feel free to contact me via email, phone, or LinkedIn. I am based in Baghdad and open to on-site, hybrid, or remote discussions.",
    "contact.email":      "Email",
    "contact.phone":      "Phone",
    "contact.linkedin":   "LinkedIn",
    "contact.github":     "GitHub",
    "contact.location":   "Location",
    "contact.loc.value":  "Baghdad, Iraq, Palestine street",
    "contact.btn.email":  "Send Direct Email",
    "contact.form.title": "Send a Message",
    "contact.form.sub":   "Send a direct message that arrives straight into my inbox:",
    "form.name.label":    "Your Name",
    "form.name.ph":       "e.g. Dr. Ahmed / Recruiter Name",
    "form.email.label":   "Your Email",
    "form.email.ph":      "e.g. name@company.com",
    "form.msg.label":     "Message",
    "form.msg.ph":        "Hello Mohamed, I came across your portfolio and would like to connect regarding...",
    "form.submit":        "Submit Message",

    /* Footer */
    "footer.copy":    "© 2026 Mohamed Abdulhassan Abbas · Baghdad, Iraq",
    "footer.built":   "Built with Antigravity & Pure HTML/CSS",
    "footer.home":    "Home",
    "footer.about":   "About",
    "footer.exp":     "Experience",
    "footer.skills":  "Skills",
    "footer.projects":"Projects",
    "footer.resume":  "Resume",
    "footer.contact": "Contact",
  },

  ar: {
    /* Navbar */
    "nav.name":     "محمد عباس",
    "nav.about":    "نبذة عني",
    "nav.exp":      "الخبرة",
    "nav.certs":    "الشهادات",
    "nav.skills":   "المهارات",
    "nav.projects": "المشاريع",
    "nav.resume":   "السيرة الذاتية",
    "nav.contact":  "تواصل معي",

    /* Hero */
    "hero.badge":     "متاح للفرص الوظيفية",
    "hero.title.a":   "مرحباً، أنا ",
    "hero.title.b":   "محمد عباس",
    "hero.headline":  "مهندس طب حياتي ومطور ويب طموح",
    "hero.bio":       "خريج هندسة الطب الحياتي من جامعة التراث مع شغف متنامٍ بالتكنولوجيا وإمكاناتها في حل مشكلات الواقع العملي.",
    "hero.cta1":      "عرض مشاريعي",
    "hero.cta2":      "السيرة الذاتية",
    "hero.cta3":      "تواصل معي",
    "hero.card.name": "محمد عبد الحسن عباس",
    "hero.card.sub":  "مهندس طب حياتي",
    "hero.card.badge":"جامعة التراث · دفعة 2026",

    /* About */
    "about.eyebrow":   "نبذة عني",
    "about.title":     "نبذة عني",
    "about.subtitle":  "خريج هندسة الطب الحياتي مع شغف متنامٍ بالبرمجيات والتكنولوجيا والابتكار العملي",
    "about.p1":        "أنا خريج هندسة الطب الحياتي من جامعة التراث، ولديّ شغف متنامٍ بالتكنولوجيا وإمكاناتها في حل مشكلات الواقع العملي.",
    "about.p2":        "تمتد اهتماماتي إلى ما وراء خلفيتي الأكاديمية لتشمل البرمجة وتطوير الويب والذكاء الاصطناعي، واستكشاف كيفية عمل التكنولوجيا خلف الكواليس. أستمتع بتعلم أدوات جديدة، والتجريب بالأفكار، وتحويل ما أتعلمه إلى مشاريع عملية.",
    "about.p3":        "أنا فضولي بطبعي، وأبحث دائماً عن فرص لتطوير مهاراتي والربط بين المجالات المختلفة وابتكار أشياء تجمع بين التقنية والإبداع. أؤمن بأن أفضل وسيلة للنمو هي الاستمرار في الاستكشاف والبناء وتحدي الذات.",
    "stat.degree.label":  "الشهادة",
    "stat.degree.value":  "بكالوريوس هندسة الطب الحياتي",
    "stat.degree.sub":    "جامعة التراث (يناير 2022 – يناير 2026)",
    "stat.loc.label":     "الموقع والحالة",
    "stat.loc.value":     "بغداد، العراق",
    "stat.loc.sub":       "متاح للعمل الكامل / التدريب",

    /* Experience */
    "exp.eyebrow":    "الخلفية",
    "exp.title":      "التعليم والخبرة العملية",
    "exp.subtitle":   "المحطات الأكاديمية والمشاهدات السريرية",
    "exp.1.period":   "يناير 2022 — يناير 2026",
    "exp.1.role":     "بكالوريوس علوم في هندسة الطب الحياتي",
    "exp.1.org":      "جامعة التراث · بغداد، العراق",
    "exp.1.desc":     "منهج هندسي لأربع سنوات يركز على تقنية المعدات الطبية وأنظمة القياس الفيزيولوجية والمستشعرات وتحليل الدوائر الإلكترونية ومعايير سلامة الأجهزة الطبية.",
    "exp.2.period":   "العمل الميداني الأكاديمي",
    "exp.2.role":     "زيارات المستشفيات السريرية ومراقبة المعدات الطبية",
    "exp.2.org":      "المرافق الصحية · بغداد",
    "exp.2.desc":     "زيارة المستشفيات لمراقبة مجموعة متنوعة من المعدات الطبية التشغيلية في البيئات السريرية الفعلية، ودراسة سير العمل السريري وجداول الصيانة الوقائية وبروتوكولات سلامة المرضى.",
    "exp.3.period":   "المختبرات الأكاديمية",
    "exp.3.role":     "مختبر الطب الحياتي والإلكترونيات",
    "exp.3.org":      "مختبرات جامعة التراث",
    "exp.3.desc":     "إجراء تجارب عملية تشمل الدوائر الكهربائية والمستشعرات وأدوات القياس التشخيصية وأجهزة معالجة الإشارات.",

    /* Certifications */
    "certs.eyebrow":  "الوثائق",
    "certs.title":    "الشهادات وورش العمل المتخصصة",
    "certs.subtitle": "التطوير المهني المستمر في الذكاء الاصطناعي والموجات فوق الصوتية والطب الحياتي",
    "cert.1.date":    "16 يونيو 2026",
    "cert.1.title":   "أساسيات الذكاء الاصطناعي من Google",
    "cert.1.issuer":  "Coursera · Google",
    "cert.1.desc":    "أتممت 5 دورات متخصصة: مقدمة في الذكاء الاصطناعي، زيادة الإنتاجية بأدوات الذكاء الاصطناعي، اكتشاف فن الحث، الاستخدام المسؤول للذكاء الاصطناعي، والبقاء في مقدمة الذكاء الاصطناعي.",
    "cert.2.date":    "27 أغسطس 2026",
    "cert.2.title":   "ورشة أجهزة الموجات فوق الصوتية",
    "cert.2.issuer":  "جمعية رواد الهندسة الطبية / medworx",
    "cert.2.desc":    "تدريب شامل على مبادئ عمل أجهزة الموجات فوق الصوتية ومكونات المحولات الصوتية وأجهزة استقبال الإشارات وأوضاع التشغيل عبر أنواع الأجهزة المختلفة.",
    "cert.3.date":    "9–13 أغسطس 2026",
    "cert.3.title":   "ورشة BCP واللحام",
    "cert.3.issuer":  "الرعاية العلمية · وزارة الشباب والرياضة",
    "cert.3.desc":    "ورشة عملية لأربعة أيام تغطي المبادئ الأساسية لمكونات BCP وتكامل الدوائر وتقنيات اللحام الدقيق.",
    "cert.4.date":    "30 يونيو 2026",
    "cert.4.title":   "ورشة تقويم العمود الفقري وتشوهاته",
    "cert.4.issuer":  "جمعية رواد الهندسة الطبية · المركز الوطني للعمل التطوعي",
    "cert.4.desc":    "مقدمة في تصميم دعامات العمود الفقري وميكانيكا الحيوية الهيكلية وأمراض تشوه العمود الفقري وأساليب علاج المرضى.",

    /* Skills */
    "skills.eyebrow":    "الخبرات",
    "skills.title":      "المهارات والقدرات",
    "skills.subtitle":   "الخبرة التقنية الأساسية وأدوات الذكاء الاصطناعي والسمات المهنية",
    "skills.ai.title":   "أدوات الذكاء الاصطناعي والتطوير",
    "skills.ai.desc":    "مهارة متنامية في سير عمل الذكاء الاصطناعي للتخطيط والتطوير والبحث.",
    "skills.bme.title":  "الطب الحياتي",
    "skills.bme.desc":   "أساس متين في أساسيات الأجهزة الطبية والأجهزة السريرية والطب الحياتي.",
    "skills.pro.title":  "المهارات المهنية واللغات",
    "skills.pro.desc":   "متواصل ثنائي اللغة بمهارات ناعمة قوية مبنية من البيئات الأكاديمية والسريرية.",
    "skills.ai.section": "أدوات الذكاء الاصطناعي التي أستخدمها",
    "skills.claude.name":  "Claude",
    "skills.claude.desc":  "شريكي في التطوير وحل المشكلات للبرمجة، وبناء المشاريع، وتصحيح الأخطاء، واستكشاف الأفكار التقنية.",
    "skills.chatgpt.name": "ChatGPT",
    "skills.chatgpt.desc": "شريكي اليومي في التفكير للتعلم، والبحث، والعصف الذهني، وتوضيح المفاهيم، والتخطيط، وصقل الأفكار.",
    "skills.agy.name":     "Antigravity",
    "skills.agy.desc":     "شريكي الذكي الرئيسي لتخطيط وبناء المشاريع الكبيرة والمعقدة التي تتطلب سياقاً مستداماً وتنفيذاً متعدد الخطوات وتعاوناً عميقاً.",
    "badge.agy":           "Antigravity",
    "badge.prompt":        "هندسة الأوامر",
    "badge.vscode":        "VS Code",
    "badge.git":           "Git و GitHub",
    "badge.med.eq":        "أساسيات المعدات الطبية",
    "badge.troubleshoot":  "الصيانة والاستكشاف",
    "badge.safety":        "معايير سلامة الأجهزة الطبية",
    "badge.ecg":           "محاكاة إشارة ECG",
    "badge.biosensors":    "المستشعرات الحيوية",
    "badge.soldering":     "اللحام الدقيق",
    "badge.office":        "Word و Excel",
    "badge.problem":       "حل المشكلات",
    "badge.teamwork":      "العمل الجماعي والتواصل",
    "badge.time":          "إدارة الوقت",
    "badge.adapt":         "التكيف والتعلم السريع",
    "badge.arabic":        "العربية: لغة أم",
    "badge.english":       "الإنجليزية: B2 متوسط متقدم",

    /* Projects */
    "proj.eyebrow":        "الأعمال",
    "proj.title":          "المشاريع المميزة",
    "proj.subtitle":       "المشروع التخرجي ورحلة تطوير الويب بمساعدة الذكاء الاصطناعي",
    "proj.ecg.tag":        "مشروع تخرج · جامعة التراث",
    "proj.ecg.title":      "جهاز محاكاة ECG",
    "proj.ecg.desc":       "تعاونت مع فريق من طلاب هندسة الطب الحياتي لتصميم وبناء جهاز محاكاة ECG وظيفي. اكتسبت خبرة عملية في توليد الإشارات الحيوية ومحاكاة الموجات القلبية وتصميم الأجهزة والتخطيط التعاوني للمشاريع.",
    "proj.port.tag":       "تطوير ويب بمساعدة الذكاء الاصطناعي",
    "proj.port.title":     "الموقع الشخصي",
    "proj.port.v1.label":  "الإصدار 1.0 — الأصلي",
    "proj.port.v1.desc":   "بُني باستخدام Antigravity وHTML5 وCSS3 النقي. يتميز بتصميم متجاوب وعرض واضح للمؤهلات الهندسية بدون أي إطارات خارجية.",
    "proj.port.v2.label":  "الإصدار 2.0 — إعادة تصميم كاملة (هذا الموقع)",
    "proj.port.v2.desc":   "إعادة تصميم كاملة تعتمد تخطيطاً متعدد الصفحات نظيفاً ومنظماً مع دعم ثنائي اللغة العربية/الإنجليزية وانتقالات سلسة وقسم مخصص لأدوات الذكاء الاصطناعي.",
    "proj.view.repo":      "عرض المستودع →",
    "proj.view.site":      "عرض الموقع المباشر →",

    /* Resume Page */
    "resume.page.title":       "السيرة الذاتية",
    "resume.page.subtitle":    "السيرة الذاتية الرسمية للمهندس محمد عبد الحسن عباس — مهندس طب حياتي",
    "resume.btn.print":        "طباعة / حفظ PDF",
    "resume.btn.back":         "← العودة إلى الموقع",
    "resume.name":             "محمد عبد الحسن عباس",
    "resume.title":            "مهندس طب حياتي",
    "resume.loc":              "العراق، بغداد، شارع فلسطين",
    "resume.sec.summary":      "الملخص المهني",
    "resume.summary.text":     "خريج هندسة الطب الحياتي مع اهتمام بالتقنية وتطبيقاتها العملية. منحتني خلفيتي الأكاديمية فهماً للأنظمة التقنية وحل المشكلات والعلاقة بين الهندسة والرعاية الصحية. أعمل باستمرار على تطوير مهاراتي التقنية وتوسيع معرفتي لتشمل البرمجيات والتقنيات الرقمية والأتمتة، وأتطلع لاكتساب الخبرة العملية وخوض تحديات جديدة في بيئة مهنية.",
    "resume.sec.education":    "التعليم",
    "resume.edu.degree":       "بكالوريوس علوم في هندسة الطب الحياتي",
    "resume.edu.date":         "يناير 2022 – يناير 2026",
    "resume.edu.school":       "جامعة التراث، بغداد، العراق",
    "resume.sec.certs":        "الشهادات وورش العمل",
    "resume.cert1.title":      "أساسيات الذكاء الاصطناعي من Google",
    "resume.cert1.date":       "16 يونيو 2026",
    "resume.cert1.desc":       "Coursera – إتمام 5 دورات: مقدمة في الذكاء الاصطناعي، زيادة الإنتاجية بأدوات الذكاء الاصطناعي، فن الحث، الاستخدام المسؤول للذكاء الاصطناعي، الاستعداد لمستقبل الذكاء الاصطناعي",
    "resume.cert2.title":      "ورشة تقويم العمود الفقري وتشوهاته",
    "resume.cert2.date":       "30 يونيو 2026",
    "resume.cert2.desc":       "جمعية رواد الهندسة الطبية | المركز الوطني للعمل التطوعي (وزارة الشباب والرياضة) — مقدمة في تقويم العمود الفقري والتشوهات وكيفية التعامل مع حالات المرضى",
    "resume.cert3.title":      "ورشة BCP واللحام",
    "resume.cert3.date":       "9-13 أغسطس 2026",
    "resume.cert3.desc":       "مديرية الرعاية العلمية، وزارة الشباب والرياضة — ورشة عمل لأربعة أيام تركز على مبادئ BCP ومكوناتها وعملية اللحام الدقيق",
    "resume.cert4.title":      "ورشة أجهزة الموجات فوق الصوتية",
    "resume.cert4.date":       "27 أغسطس 2026",
    "resume.cert4.desc":       "جمعية رواد الهندسة الطبية / medworx، الحارثية - شارع الكندي — ورشة عمل ليوم واحد حول أجهزة السونار ومبادئ عملها ومكوناتها وأنواعها",
    "resume.sec.skills":       "المهارات واللغات",
    "resume.skills.tech.title":"المهارات التقنية",
    "resume.skills.tech.desc": "Microsoft Word و Excel، أدوات الذكاء الاصطناعي (ChatGPT, Claude, Antigravity)",
    "resume.skills.pro.title": "المهارات المهنية",
    "resume.skills.pro.desc":  "حل المشكلات، العمل الجماعي والتواصل، القدرة على التكيف، التعلم السريع",
    "resume.skills.lang.title":"اللغات",
    "resume.skills.lang.desc": "• العربية: لغة أم  • الإنجليزية: متوسط متقدم (B2)",

    /* Contact */
    "contact.eyebrow":    "التواصل",
    "contact.title":      "تواصل معي",
    "contact.subtitle":   "متاح لفرص هندسة الطب الحياتي والتدريب وتطوير المهارات والتواصل المهني",
    "contact.info.title": "معلومات الاتصال المباشر",
    "contact.info.sub":   "لا تتردد في الاتصال عبر البريد الإلكتروني أو الهاتف أو LinkedIn. أنا مقيم في بغداد ومنفتح على المناقشات الحضورية والهجينة والعن بعد.",
    "contact.email":      "البريد الإلكتروني",
    "contact.phone":      "الهاتف",
    "contact.linkedin":   "لينكد إن",
    "contact.github":     "جيت هاب",
    "contact.location":   "الموقع",
    "contact.loc.value":  "العراق، بغداد، شارع فلسطين",
    "contact.btn.email":  "إرسال بريد إلكتروني مباشر",
    "contact.form.title": "أرسل رسالة",
    "contact.form.sub":   "أرسل رسالة مباشرة تصل إلى صندوق بريدي:",
    "form.name.label":    "اسمك",
    "form.name.ph":       "مثل: د. أحمد / اسم المُجنِّد",
    "form.email.label":   "بريدك الإلكتروني",
    "form.email.ph":      "مثل: name@company.com",
    "form.msg.label":     "الرسالة",
    "form.msg.ph":        "مرحباً محمد، اطلعت على موقعك وأود التواصل معك بخصوص...",
    "form.submit":        "إرسال الرسالة",

    /* Footer */
    "footer.copy":    "© 2026 محمد عبد الحسن عباس · بغداد، العراق",
    "footer.built":   "بُني مع Antigravity وHTML/CSS النقي",
    "footer.home":    "الرئيسية",
    "footer.about":   "نبذة عني",
    "footer.exp":     "الخبرة",
    "footer.skills":  "المهارات",
    "footer.projects":"المشاريع",
    "footer.resume":  "السيرة الذاتية",
    "footer.contact": "تواصل",
  }
};

/* ── 2. LANGUAGE TOGGLE ─────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Translate placeholder-only elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update toggle button text
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = isAr ? 'EN' : 'ع';

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }
});

/* ── 3. PAGE TRANSITIONS ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href &&
      !href.startsWith('#') &&
      !href.startsWith('http') &&
      !href.startsWith('mailto') &&
      !href.startsWith('tel') &&
      !href.startsWith('javascript') &&
      link.target !== '_blank'
    ) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.18s ease';
        setTimeout(() => { window.location.href = href; }, 180);
      });
    }
  });
});

/* ── 4. SCROLL-TRIGGERED SECTION ANIMATIONS ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(s => observer.observe(s));
});

/* ── 5. MOBILE NAV TOGGLE ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.textContent = '☰';
    });
  });
});

/* ── 6. ACTIVE NAVBAR LINK HIGHLIGHTING ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
/* ── 7. RESTORE PAGE VISIBILITY ON BACK/FORWARD ─────────────────────────── */
window.addEventListener('pageshow', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = '';
});