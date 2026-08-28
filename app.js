/* =========================================================================
   Muhammet Ertuğrul — site behaviour
   - i18n (EN / DE / TR) with localStorage persistence + browser detection
   - contact subject pills
   - mobile hamburger menu
   - contact form (Formspree / Web3Forms ready — see TODO in index.html)
   English is the source of truth: it is read from the DOM, DE/TR come from
   the dictionaries below.
   ========================================================================= */

(function () {
  'use strict';

  var SUPPORTED = ['en', 'de', 'tr'];

  /* ---- Translations --------------------------------------------------- */
  var dictsHtml = {
    de: {
      about_h2: 'Hallo, ich bin <mark>Muhammet</mark>.'
    },
    tr: {
      about_h2: 'Merhaba, ben <mark>Muhammet</mark>.',
      about_p3: 'Amacım, teknolojiyi yalnızca öğreten değil; öğrencilerin <strong>üreten, sorgulayan ve geleceğin problemlerine çözüm geliştiren bireyler</strong> olmalarını destekleyen bir öğrenme ortamı oluşturmak.'
    }
  };

  var dictsPh = {
    de: {
      ph_name: 'Ihr Name',
      ph_email: 'ihre@email.com',
      ph_msg: 'Womit kann ich Ihnen helfen?'
    },
    tr: {
      ph_name: 'Adınız',
      ph_email: 'eposta@adresiniz.com',
      ph_msg: 'Ne üzerinde çalışıyorsunuz?'
    }
  };

  var dicts = {
    de: {
      nav_about: 'Über mich', nav_tutoring: 'Einzelunterricht', nav_consult: 'Für Schulen', nav_contact: 'Kontakt', nav_cta: 'Kontakt aufnehmen',
      hero_badge: 'Informatik-Pädagoge · KI-Berater · Robotik-Coach',
      hero_h1: 'Informatik. Über den Unterricht hinaus.',
      hero_p: 'Ich begleite Schülerinnen und Schüler in internationalen Informatikprogrammen, insbesondere IB, AP und IGCSE, und berate Schulen bei der Integration Künstlicher Intelligenz, der Lehrplanentwicklung und der Fortbildung von Lehrkräften. Diese Arbeit basiert auf siebzehn Jahren Informatikunterricht an internationalen Schulen, am Robert College in Istanbul und an der International School of Stuttgart.',
      hero_cta1: 'Kontakt aufnehmen', hero_cta2: 'Projekte ansehen',
      chip_tutoring: 'Einzelunterricht', chip_schools: 'Für Schulen', chip_ai: 'KI & Informatik', chip_robotics: 'Robotik',
      about_label: '// über mich',
      about_p1: 'Meine Laufbahn als Informatiklehrer begann 2009 am Robert College in Istanbul, einer der renommiertesten Schulen der Türkei. In den folgenden vierzehn Jahren baute ich Informatikprogramme auf, betreute Robotik-Teams und entwickelte ein Gespür dafür, wie abstrakte Konzepte auch für Jugendliche greifbar werden, die sich mit Informatik zunächst wenig anfangen konnten. 2023 wechselte ich an die International School of Stuttgart, wo ich seitdem IB DP Computer Science, AP Computer Science und MYP unterrichte und die Robotik- und KI-AG von Grund auf aufgebaut habe.',
      about_p2: 'Alle Tätigkeiten, die ich außerhalb des Unterrichts ausübe, knüpfen an eine Frage an, die mich seit siebzehn Jahren im Unterricht beschäftigt: Wie lernen und verändern sich Schülerinnen und Schüler, und wie Institutionen? Lehrplanentwicklung, die Einführung Künstlicher Intelligenz und die Begleitung von Robotik-Teams sind unterschiedliche Antworten auf dieselbe Frage.',
      cred1: 'IB DP CS (SL & HL)', cred2: 'Google Certified Trainer', cred3: 'AP CS A', cred4: 'Digital Citizenship Educator', cred5: '17+ Jahre an internationalen Schulen',
      why_label: '// warum mit mir', why_h2: 'Verwurzelt in siebzehn Jahren Informatikunterricht an internationalen Schulen.',
      why_lead: 'Alles, was ich für Schülerinnen und Schüler und für Schulen anbiete, gründet auf unmittelbarer Unterrichtserfahrung in zwei Ländern und drei internationalen Programmen.',
      why1_title: 'Unterrichtserfahrung',
      why1_body: 'Ich unterrichte, was ich berate. Wenn ich eine Schule zur KI-Integration oder zum Informatik-Lehrplan berate, beruht das auf siebzehn Jahren gelebter Unterrichtspraxis an internationalen Schulen, am Robert College in Istanbul und an der International School of Stuttgart.',
      why2_title: 'Technische Tiefe',
      why2_body: 'Ich setze um, was ich empfehle. Ob maßgeschneiderter KI-Agent, automatisierte Abläufe für die Schulverwaltung oder ein Robotik-Lehrplan: Ich kann vom Konzept bis zur fertigen Lösung arbeiten, ohne eine dritte Partei einzubeziehen.',
      why3_title: 'Lehrplan-Expertise',
      why3_body: 'IB, AP, IGCSE. Diese Programme kenne ich aus langjähriger Unterrichts- und Korrekturtätigkeit: die Bewertungskriterien, die internen Prüfungen, die Erwartungen der Prüfer. Jede Sitzung ist darauf ausgerichtet, was die Prüfung tatsächlich prämiert.',
      why4_title: 'Unabhängige Perspektive',
      why4_body: 'Keine Hersteller-Bindungen, keine Software-Provisionen, keine Empfehlungsvereinbarungen. Wenn ich ein Werkzeug oder einen Ansatz empfehle, dann weil es zur tatsächlichen Situation der Schule passt.',
      tut_label: '// einzelunterricht', tut_h2: 'Einzelunterricht in Informatik, online.',
      tut_intro: 'Gezielte Stunden, abgestimmt auf Ihren Lehrplan, Ihre Lücken und die Prüfung, auf die Sie sich vorbereiten.',
      course1_tag: 'IB Diploma', course1_desc: '2027er Lehrplan, Paper 3 entfallen. SL und HL.',
      course1_b1: 'Neuer 2027er Lehrplan mit fünf Kerneinheiten', course1_b2: 'Java und Python, beide Sprachen und beide Paper',
      course1_b3: 'IA-Begleitung von der Themenwahl bis zur Einreichung', course1_b4: 'Alte Prüfungsaufgaben, Bewertungsschemata, Prüfungstechnik',
      course2_tag: 'College Board', course2_desc: 'Java, von der ersten Stunde bis zur Prüfung.',
      course2_b1: 'Objektorientiertes Java: Klassen, Vererbung, Rekursion', course2_b2: 'Free-Response-Aufgaben mit echtem Feedback',
      course2_b3: 'AP-Prüfungsstrategie: Multiple Choice und FRQ', course2_b4: 'Das Ziel ist College-Credit und darauf arbeiten wir hin',
      course3_tag: 'College Board', course3_desc: 'Grundkonzepte, der Create Task und die Abschlussprüfung.',
      course3_b1: 'Programmierung und Abstraktion, ohne Vorkenntnisse', course3_b2: 'Create Performance Task von der Idee bis zur Einreichung',
      course3_b3: 'Daten, Internet und gesellschaftliche Auswirkungen der Informatik', course3_b4: 'Abschlussprüfung, gezielt vorbereitet',
      course4_tag: 'Cambridge & Edexcel', course4_desc: 'Theorie und Programmierung für 14- bis 16-Jährige.',
      course4_b1: 'Cambridge 0478 und Edexcel, beide Prüfungsgremien abgedeckt', course4_b2: 'Pseudocode, Algorithmen und echtes Programmieren',
      course4_b3: 'Python zur praktischen Problemlösung', course4_b4: 'Paper für Paper: Theorie und Praxis',
      course5_tag: 'College Board · AP Career Kickstart', course5_desc: 'Brandneu ab 2026, keine Programmiervorkenntnisse nötig.',
      course5_b1: 'Mehrschichtige Verteidigung für Netzwerke, Geräte und Daten',
      course5_b2: 'Drei Kernfähigkeiten: Risiken analysieren, Risiken mindern, Angriffe erkennen',
      course5_b3: 'Praxisnahe Labs und reale Angriffsszenarien',
      course5_b4: 'Erste landesweite Prüfung im Mai 2027',
      course_cta: 'Kurs anfragen →',
      tut_note: 'Alle Stunden finden online und einzeln statt, mit gemeinsamem Code-Editor. Die erste Stunde ist eine Standortbestimmung. Wir schauen gemeinsam, wo Sie stehen, was die Prüfung erwartet und wo der Abstand liegt.',
      con_label: '// für schulen', con_h2: 'KI und Informatik für Schulen.',
      con_intro: 'Viele Schulen haben Künstliche Intelligenz zur Priorität erklärt. Die schwierigere Frage ist, wie das konkret aussieht: welche Werkzeuge, welche Abläufe, welche Fortbildung und wie sich das umsetzen lässt, damit im Unterricht tatsächlich etwas verändert.',
      conA_title: 'KI-Integration und Beratung',
      conA_desc: 'Strategie, Fortbildung und Lehrplanintegration, zugeschnitten auf die konkrete Arbeitsweise Ihrer Schule.',
      conA_b1: 'KI-Integration auf Lehrplanebene, fächerübergreifend und stufenübergreifend',
      conA_b2: 'Lehrkräftefortbildung, abgestimmt auf Ihre Werkzeuge, Fächer und Ihr Team',
      conA_b3: 'Herstellerneutrale Beratung, ohne Provisionen oder Vermittlungsvereinbarungen',
      conA_who: 'Schulleitungen und Lehrplanteams',
      conB_title: 'Maßgeschneiderte KI-Werkzeuge und -Agenten',
      conB_desc: 'Maßgeschneiderte Werkzeuge, entwickelt für die tatsächlichen Verwaltungs- und Lehrprozesse Ihrer Schule.',
      conB_b1: 'Verwaltungsautomatisierung, die echte Zeit spart',
      conB_b2: 'Werkzeuge und Assistenten für Schülerinnen und Schüler',
      conB_b3: 'Werkzeuge für Lehrkräfte, die den Verwaltungsaufwand reduzieren',
      conB_who: 'Schulen und Bildungstechnologie-Unternehmen',
      rob_label: '// praxisnahes lernen', rob_h2: 'Robotik- und KI-Programm',
      rob_intro: 'Ein strukturiertes Ingenieurprogramm, in dem Schülerinnen und Schüler vollständige Robotersysteme entwerfen: von der Programmierung über Elektronik, Arduino, Raspberry Pi und Sensoren bis hin zu Künstlicher Intelligenz, vom ersten Konzept bis zur Wettkampfteilnahme.',
      rob_b1: 'Ein vollständiges Curriculum aus Programmierung, Elektronik, mechanischer Konstruktion und Künstlicher Intelligenz',
      rob_b2: 'Team-Coaching vom ersten Konzept bis zum Wettkampftag',
      rob_b3: 'Wettkampfvorbereitung auf jeder Stufe des Prozesses',
      exp_label: '// beruflicher werdegang', exp_h2: 'Meine beruflichen Stationen.',
      exp1_org: 'International School of Stuttgart', exp1_loc: 'Stuttgart, Deutschland', exp1_period: '2023 – Heute',
      exp1_r1: 'IB DP Computer Science (SL & HL)', exp1_r2: 'AP Computer Science A', exp1_r3: 'MYP',
      exp1_r4: 'Robotik- und KI-AG, Gründer und Leiter',
      exp2_org: 'Robert College Istanbul', exp2_loc: 'Istanbul, Türkei', exp2_period: '2009 – 2023',
      exp2_r1: 'Informatik', exp2_r2: 'AP Computer Science', exp2_r3: 'Robotik-AG, Gründer und Leiter',
      conf_label: '// vorträge & präsentationen', conf_h2: 'Konferenzen und Workshops',
      conf1_name: 'IB Global Conference', conf1_loc: 'Den Haag, Niederlande',
      conf2_name: 'Apple Education Leadership Summit (AELS)', conf2_loc: 'München, Deutschland',
      conf3_name: 'ECIS Leadership & Management Conference', conf3_loc: 'Frankfurt, Deutschland',
      cert_label: '// zertifizierungen', cert_h2: 'Zertifizierungen',
      cert1_name: 'Google Certified Trainer', cert1_org: 'Google for Education',
      cert2_name: 'Google Certified Educator Level 2', cert2_org: 'Google for Education',
      cert3_name: 'Apple Teacher', cert3_org: 'Apple',
      cert4_name: 'AP Computer Science A Certified Teacher', cert4_org: 'College Board',
      cert5_name: 'Digital Citizenship Educator', cert5_org: 'Common Sense Education',
      cert6_name: 'IB Educator', cert6_org: 'International Baccalaureate',
      work_label: '// ausgewählte projekte', work_h2: 'Ausgewählte Projekte',
      work_lead: 'Projekte aus den Bereichen Informatikunterricht, Künstliche Intelligenz und Ingenieurwesen.',
      work1_cat: 'KI-gestützte Lernplattform', work1_status: 'In Entwicklung', work1_title: 'Praxis IB',
      work1_desc: 'Praxis IB ist eine KI-gestützte Lernplattform für Schülerinnen und Schüler des IB Diploma Computer Science. Sie verbindet adaptive Übungen, intelligentes Feedback und lehrplangerechte Lernwerkzeuge, um sowohl Prüfungsbereitschaft als auch echtes konzeptuelles Verständnis des Fachs zu fördern. Entwickelt auf Grundlage des Lehrplans von 2027.',
      work2_cat: 'KI-Plattform für Schulen', work2_status: 'In Entwicklung', work2_title: 'SchoolPro AI',
      work2_desc: 'SchoolPro AI ist eine KI-Plattform für die Schulverwaltung. Sie automatisiert Routineabläufe, unterstützt die Lehrplanung und interne Kommunikation und stellt Werkzeuge bereit, die Verwaltungskräften und Lehrkräften mehr Zeit für die Aufgaben lassen, die menschliches Urteil erfordern.',
      work3_cat: 'Ingenieurausbildung', work3_status: 'Laufend', work3_title: 'Robotik- und KI-Programm',
      work3_desc: 'Das Robotik- und KI-Programm gibt Schülerteams das Curriculum, die Begleitung und die Wettkampferfahrung, um von Grund auf vollständige Robotersysteme zu entwerfen und zu bauen. Die Schülerinnen und Schüler arbeiten in den Bereichen Programmierung, Elektronik, Arduino, Raspberry Pi, Sensoren, mechanische Konstruktion und Künstliche Intelligenz und entwickeln dabei technische Fähigkeiten ebenso wie die Fähigkeit, als Team unter realen Bedingungen zu arbeiten.',
      work4_cat: 'Internationale Bildung', work4_status: 'Abgeschlossen', work4_title: 'Informatik-Lehrplanentwicklung',
      work4_desc: 'Konzeption und Umsetzung von Informatik-Lehrplänen für internationale Schulen. Die Arbeit umfasst die Abstimmung auf IB Diploma und AP Computer Science, Entwicklung von Bewertungskonzepten, Planung von Unterrichtsinhalten und -abfolgen sowie die schulweite Laufbahnentwicklung, vom ersten Auftrag bis zu unterrichtsreifen Materialien.',
      work_note: 'Weitere Projekte befinden sich derzeit in Entwicklung.',
      contact_label: '// kontakt', contact_h2: 'Schreiben Sie mir.',
      contact_intro: 'Ob Einzelunterricht, ein Schulprojekt oder etwas anderes, hinterlassen Sie mir eine Nachricht. Ich antworte in der Regel innerhalb eines Tages.',
      contact_subject_label: 'Mein Anliegen',
      subj_tutoring: 'Einzelunterricht', subj_schools: 'KI & Informatik für Schulen', subj_other: 'Sonstiges',
      label_name: 'Name', label_email: 'E-Mail', label_msg: 'Nachricht', contact_submit: 'Absenden',
      form_note: 'Vielen Dank. Ich melde mich bald. Sie können mich auch direkt unter mertugrul68@gmail.com erreichen.',
      footer_role: 'Informatiklehrer & KI-Berater',
      footer_desc: 'Informatik und Künstliche Intelligenz für Schülerinnen und Schüler, Lehrkräfte und Schulen.',
      footer_loc: 'Stuttgart, Deutschland · Istanbul, Türkei', footer_copy: '© 2026 Muhammet Ertuğrul'
    },
    tr: {
      nav_about: 'Hakkımda', nav_tutoring: 'Özel Dersler', nav_consult: 'Okullar İçin', nav_contact: 'İletişim', nav_cta: 'İletişime Geçin',
      hero_badge: 'Bilgisayar Bilimi Eğitmeni · Yapay Zeka Danışmanı · Robotik Koçu',
      hero_h1: 'Bilgisayar Bilimi Eğitimi. Yapay Zekâ Çağına Hazırlanmak.',
      hero_p: '17 yılı aşkın uluslararası eğitim deneyimimle, Bilgisayar Bilimi eğitimi ve yapay zekânın eğitime entegrasyonu alanlarında öğrenciler, öğretmenler ve okullarla çalışıyorum. IB, AP ve IGCSE gibi uluslararası programlarda öğrenci gelişimini desteklerken; müfredat geliştirme ve öğretmen eğitimi konularında okullara danışmanlık sunuyorum.',
      hero_cta1: 'İletişime Geçin', hero_cta2: 'Projelerimi İnceleyin',
      chip_tutoring: 'Birebir Özel Ders', chip_schools: 'Okullar İçin', chip_ai: 'Yapay Zekâ & Bilgisayar Bilimi', chip_robotics: 'Robotik',
      about_label: '// hakkımda',
      about_p1: 'Bilgisayar Bilimi öğretmenliğine 2009 yılında Robert Kolej\'de başladım. On dört yıl boyunca Bilgisayar Bilimi müfredatları geliştirdim, robotik kulüpleri kurdum ve proje tabanlı öğrenmeyi sınıf pratiğimin önemli bir parçası hâline getirdim. 2023 yılında Almanya\'ya taşınarak International School of Stuttgart\'ta IB DP Bilgisayar Bilimi, AP Bilgisayar Bilimi ve MYP dersleri vermeye başladım; burada sıfırdan bir Robotik ve Yapay Zekâ Kulübü kurdum.',
      about_p2: 'Bugün çalışmalarımı sınıfın ötesine taşıyor; öğrencilerin ve kurumların teknolojiyle birlikte nasıl öğrenip gelişebileceği üzerine çalışıyorum. Müfredat geliştirme, yapay zekânın eğitime entegrasyonu ve robotik eğitimi alanlarında öğrencilere, öğretmenlere ve okullara destek oluyorum.',
      cred1: 'IB DP Bilgisayar Bilimi (SL & HL)', cred2: 'Google Sertifikalı Eğitmen', cred3: 'AP Bilgisayar Bilimi A', cred4: 'Dijital Vatandaşlık Eğitmeni', cred5: '17+ yıl uluslararası eğitim deneyimi',
      why_label: '// neden benimle?', why_h2: 'Neden Benimle Çalışmalısınız?',
      why_lead: 'Öğrencilere ve okullara sunduğum her şey, iki ülke ve üç uluslararası programdaki doğrudan sınıf deneyiminden doğuyor.',
      why1_title: 'Sınıf Deneyimi',
      why1_body: 'Danışmanlık yaptığım konuları bizzat öğretiyorum. Bir okula yapay zekâ entegrasyonu ya da Bilgisayar Bilimi müfredatı konusunda tavsiye verdiğimde, bu on yedi yıllık sınıf deneyimimden geliyor — Robert Kolej İstanbul ve International School of Stuttgart\'ta bizzat yaşadığım şeylerden.',
      why2_title: 'Teknik Derinlik',
      why2_body: 'Önerdiğim şeyleri bizzat hayata geçiriyorum. Özel bir yapay zekâ ajanı, okul yönetimi için otomatize iş akışları ya da bir robotik müfredatı olsun; stratejiden çalışan yazılıma kadar her aşamayı kendim tamamlayabiliyorum, başka birine ihtiyacım olmuyor.',
      why3_title: 'Müfredat Uzmanlığı',
      why3_body: 'IB, AP, IGCSE. Bu programları içeriden tanıyorum: değerlendirme kriterleri, dahili değerlendirmeler, sınav beklentileri. Her ders, sınavın gerçekte neyi ödüllendirdiği üzerine kurulu.',
      why4_title: 'Bağımsız Bakış Açısı',
      why4_body: 'Hiçbir yazılım şirketiyle anlaşmam, komisyon ilişkim ya da yönlendirme düzenlemem yok. Bir araç ya da yaklaşım önerdiğimde, bunun tek nedeni o okulun gerçek ihtiyacına uygun olmasıdır.',
      tut_label: '// özel dersler', tut_h2: 'Birebir Bilgisayar Bilimi dersleri, çevrimiçi.',
      tut_intro: 'Müfredatınıza, eksiklerinize ve hazırlandığınız sınava göre şekillendirilen, odaklı birebir dersler.',
      course1_tag: 'IB Diploma', course1_desc: '2027 müfredatı, Paper 3 kaldırıldı. SL ve HL.',
      course1_b1: 'Yeni 2027 müfredatı, beş temel ünite', course1_b2: 'Java ve Python, her iki dil ve her iki paper',
      course1_b3: 'Konu seçiminden teslime kadar IA rehberliği', course1_b4: 'Geçmiş sınavlar, değerlendirme kriterleri, sınav teknikleri',
      course2_tag: 'College Board', course2_desc: 'Java, ilk dersten sınava kadar.',
      course2_b1: 'Nesne yönelimli Java: sınıflar, kalıtım, özyineleme', course2_b2: 'Gerçek geri bildirimli açık uçlu soru çalışmaları',
      course2_b3: 'AP sınav stratejisi: çoktan seçmeli ve FRQ', course2_b4: 'Hedef üniversite kredisi ve buna doğru birlikte ilerliyoruz',
      course3_tag: 'College Board', course3_desc: 'Büyük fikirler, Create görevi ve dönem sonu sınavı.',
      course3_b1: 'Programlama ve soyutlama, ön deneyim gerekmez', course3_b2: 'Fikirden teslime kadar Create Performance Task',
      course3_b3: 'Veri, internet ve bilişimin etkileri', course3_b4: 'Dönem sonu sınavına odaklı hazırlık',
      course4_tag: 'Cambridge & Edexcel', course4_desc: '14–16 yaş grubu için teori ve programlama.',
      course4_b1: 'Cambridge 0478 ve Edexcel, her iki kurul kapsanıyor', course4_b2: 'Sözde kod, algoritmalar ve gerçek programlama',
      course4_b3: 'Pratik problem çözme için Python', course4_b4: 'Her paper için ayrı hazırlık: teori ve uygulama',
      course5_tag: 'College Board · AP Career Kickstart', course5_desc: '2026\'da yeni başlıyor, önceden kodlama bilgisi gerekmiyor.',
      course5_b1: 'Ağlar, cihazlar ve veriler için katmanlı savunma',
      course5_b2: 'Üç temel beceri: risk analizi, risk azaltma, saldırı tespiti',
      course5_b3: 'Uygulamalı laboratuvarlar ve gerçek saldırı senaryoları',
      course5_b4: 'İlk ulusal sınav Mayıs 2027\'de',
      course_cta: 'Detayları İncele →',
      tut_note: 'Dersler çevrimiçi ve birebir; ortak bir kod editörüyle yürütülüyor. İlk ders bir değerlendirme seansı. Nerede olduğunuzu, sınavın neler beklediğini ve aradaki farkı birlikte tespit ediyoruz.',
      con_label: '// okullarla çalışma', con_h2: 'Okullar İçin Yapay Zekâ ve Bilgisayar Bilimi',
      con_intro: 'Yapay zekâ artık pek çok okulun öncelikli gündem maddelerinden biri. Ancak asıl mesele, teknolojiyi kullanmaya başlamak değil; doğru araçları seçmek, öğretmenleri desteklemek ve yapay zekâyı eğitim süreçlerine gerçekten değer katacak şekilde entegre etmek.',
      conA_title: 'Yapay Zekâ Entegrasyon Danışmanlığı',
      conA_desc: 'Okulunuzun ihtiyaçlarına uygun, uygulanabilir bir yapay zekâ stratejisi oluşturmanıza ve bunu eğitim süreçlerine sağlıklı bir şekilde entegre etmenize destek oluyorum.',
      conA_b1: 'Ders ve sınıf düzeyine uygun yapay zekâ entegrasyonu',
      conA_b2: 'Öğretmenlere yönelik uygulamalı eğitim ve rehberlik',
      conA_b3: 'İhtiyaçlarınıza uygun, bağımsız ve tarafsız teknoloji önerileri',
      conA_who: 'Okul yöneticileri ve müfredat ekipleri için',
      conB_title: 'Okullara Özel Yapay Zekâ Araçları ve Ajanları',
      conB_desc: 'Okulunuzun eğitim ve yönetim süreçlerine özel, günlük iş yükünü azaltan ve mevcut çalışma düzeninize uyum sağlayan yapay zekâ araçları geliştiriyorum.',
      conB_b1: 'Tekrarlayan idari işleri otomatikleştiren çözümler',
      conB_b2: 'Öğrencilerin öğrenme süreçlerini destekleyen araçlar ve asistanlar',
      conB_b3: 'Öğretmenlerin planlama ve idari iş yükünü azaltan uygulamalar',
      conB_who: 'Okullar ve eğitim teknolojisi girişimleri için',
      rob_label: '// uygulamalı mühendislik', rob_h2: 'Robotik ve Yapay Zekâ Programı',
      rob_intro: 'Öğrencilerin programlama, elektronik, Arduino, Raspberry Pi, sensörler ve yapay zekâyı bir araya getirerek eksiksiz robotik sistemler tasarladığı, kavramdan yarışmaya uzanan yapılandırılmış bir mühendislik programı.',
      rob_b1: 'Programlama, elektronik, mekanik tasarım ve yapay zekâyı kapsayan tam bir müfredat',
      rob_b2: 'İlk kavramdan yarışma gününe kadar takım koçluğu',
      rob_b3: 'Sürecin her aşamasında yarışmaya hazırlık',
      exp_label: '// deneyim', exp_h2: 'Çalıştığım Kurumlar.',
      exp1_org: 'International School of Stuttgart', exp1_loc: 'Stuttgart, Almanya', exp1_period: '2023 – Günümüz',
      exp1_r1: 'IB DP Bilgisayar Bilimi (SL & HL)', exp1_r2: 'AP Bilgisayar Bilimi A', exp1_r3: 'MYP',
      exp1_r4: 'Robotik ve Yapay Zekâ Kulübü, Kurucu ve Koç',
      exp2_org: 'Robert Kolej İstanbul', exp2_loc: 'İstanbul, Türkiye', exp2_period: '2009 – 2023',
      exp2_r1: 'Bilgisayar Bilimi', exp2_r2: 'AP Bilgisayar Bilimi', exp2_r3: 'Robotik Kulübü, Kurucu ve Koç',
      conf_label: '// konferanslar & sunumlar', conf_h2: 'Konferanslar ve Çalıştaylar',
      conf1_name: 'IB Global Conference', conf1_loc: 'Lahey, Hollanda',
      conf2_name: 'Apple Education Leadership Summit (AELS)', conf2_loc: 'Münih, Almanya',
      conf3_name: 'ECIS Leadership & Management Conference', conf3_loc: 'Frankfurt, Almanya',
      cert_label: '// sertifikalar', cert_h2: 'Sertifikalar',
      cert1_name: 'Google Sertifikalı Eğitmen', cert1_org: 'Google for Education',
      cert2_name: 'Google Sertifikalı Eğitimci Seviye 2', cert2_org: 'Google for Education',
      cert3_name: 'Apple Teacher', cert3_org: 'Apple',
      cert4_name: 'AP Bilgisayar Bilimi A Sertifikalı Öğretmen', cert4_org: 'College Board',
      cert5_name: 'Dijital Vatandaşlık Eğitmeni', cert5_org: 'Common Sense Education',
      cert6_name: 'IB Eğitimcisi', cert6_org: 'International Baccalaureate',
      work_label: '// projeler', work_h2: 'Projeler',
      work_lead: 'Bilgisayar Bilimi eğitimi, yapay zekâ ve mühendislik alanlarındaki projeler.',
      work1_cat: 'Yapay Zekâ Destekli Öğrenme Platformu', work1_status: 'Geliştiriliyor', work1_title: 'Praxis IB',
      work1_desc: 'Praxis IB, IB Diploma Bilgisayar Bilimi öğrencileri için geliştirilmiş yapay zekâ destekli bir öğrenme platformudur. Uyarlanabilir alıştırmalar, akıllı geri bildirim mekanizmaları ve müfredata uyumlu çalışma araçlarını bir araya getirerek öğrencilerin hem sınava hazırlık hem de konuyu gerçek anlamda kavrama süreçlerini destekler. 2027 müfredatı temel alınarak tasarlanmıştır.',
      work2_cat: 'Okullar İçin Yapay Zekâ Platformu', work2_status: 'Geliştiriliyor', work2_title: 'SchoolPro AI',
      work2_desc: 'SchoolPro AI, okul yönetimi için geliştirilmiş bir yapay zekâ platformudur. Rutin iş akışlarını otomatize eder, müfredat planlaması ve kurumsal iletişimi destekler; yöneticilerin ve öğretmenlerin insan yargısı gerektiren işlere daha fazla zaman ayırmasını sağlayacak pratik araçlar sunar.',
      work3_cat: 'Mühendislik Eğitimi', work3_status: 'Devam Ediyor', work3_title: 'Robotik ve Yapay Zekâ Programı',
      work3_desc: 'Robotik ve Yapay Zekâ Programı, öğrenci takımlarına sıfırdan eksiksiz robotik sistemler tasarlayıp inşa edebilmeleri için gerekli müfredatı, koçluğu ve yarışma deneyimini sunuyor. Öğrenciler; programlama, elektronik, Arduino, Raspberry Pi, sensörler, mekanik tasarım ve yapay zekâ alanlarında çalışarak hem teknik becerilerini hem de gerçek kısıtlar altında takım hâlinde çalışma yetkinliklerini geliştiriyor.',
      work4_cat: 'Uluslararası Eğitim', work4_status: 'Tamamlandı', work4_title: 'Bilgisayar Bilimi Müfredat Geliştirme',
      work4_desc: 'Uluslararası okullar için Bilgisayar Bilimi müfredatlarının tasarımı ve uygulamaya konulması. Çalışma; IB Diploma ve AP Bilgisayar Bilimi uyumlaması, ölçme-değerlendirme tasarımı, kapsam ve sıralama planlaması ile okul genelinde program geliştirmeyi kapsamaktadır, ilk taslaktan sınıfa hazır materyallere kadar.',
      work_note: 'Geliştirme aşamasında olan projeler mevcuttur.',
      contact_label: '// iletişim', contact_h2: 'İletişime Geçin.',
      contact_intro: 'Özel ders, okul projesi ya da başka bir konu için mesaj bırakabilirsiniz. Genellikle bir gün içinde yanıt veririm.',
      contact_subject_label: 'İlgilendiğiniz konu',
      subj_tutoring: 'Özel Ders', subj_schools: 'Okullar İçin Yapay Zekâ & Bilgisayar Bilimi', subj_other: 'Diğer',
      label_name: 'Ad Soyad', label_email: 'E-posta', label_msg: 'Mesaj', contact_submit: 'Gönder',
      form_note: 'Teşekkürler. En kısa sürede dönüş yaparım. Doğrudan mertugrul68@gmail.com adresinden de ulaşabilirsiniz.',
      footer_role: 'Bilgisayar Bilimi Eğitmeni & Yapay Zekâ Danışmanı',
      footer_desc: 'Bilgisayar Bilimi ve Yapay Zekâ alanlarında öğrenciler, eğitimciler ve okullarla çalışıyorum.',
      footer_loc: 'Stuttgart, Almanya · İstanbul, Türkiye', footer_copy: '© 2026 Muhammet Ertuğrul'
    }
  };

  /* ---- i18n engine ---------------------------------------------------- */
  var en = {}, enHtml = {}, enPh = {};

  function captureEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      en[el.getAttribute('data-i18n')] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      enHtml[el.getAttribute('data-i18n-html')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      enPh[el.getAttribute('data-i18n-ph')] = el.getAttribute('placeholder');
    });
  }

  function applyLang(lang) {
    var T = dicts[lang] || {}, H = dictsHtml[lang] || {}, P = dictsPh[lang] || {};
    var isEn = lang === 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      el.textContent = isEn ? en[k] : (T[k] != null ? T[k] : en[k]);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      el.innerHTML = isEn ? enHtml[k] : (H[k] != null ? H[k] : enHtml[k]);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      el.setAttribute('placeholder', isEn ? enPh[k] : (P[k] != null ? P[k] : enPh[k]));
    });

    document.querySelectorAll('[data-setlang]').forEach(function (b) {
      b.classList.toggle('lang-btn--active', b.getAttribute('data-setlang') === lang);
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function initialLang() {
    var stored;
    try { stored = localStorage.getItem('lang'); } catch (e) {}
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  /* ---- Contact subject pills ------------------------------------------ */
  function initPills() {
    var pills = document.querySelectorAll('[data-subject]');
    var hidden = document.getElementById('subjectField');
    pills.forEach(function (p) {
      p.addEventListener('click', function () {
        pills.forEach(function (o) { o.classList.remove('pill--active'); });
        p.classList.add('pill--active');
        if (hidden) hidden.value = p.getAttribute('data-subject');
      });
    });
  }

  /* ---- Mobile menu ---------------------------------------------------- */
  function initMenu() {
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    // Close after tapping a link (but not the language buttons).
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---- Contact form --------------------------------------------------- */
  function initForm() {
    var form = document.querySelector('.form');
    if (!form) return;
    var note = document.getElementById('formNote');
    var endpoint = form.getAttribute('data-endpoint');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // No endpoint configured yet → keep the original demo behaviour.
      if (!endpoint) {
        if (note) note.classList.add('is-visible');
        return;
      }

      // Endpoint set (Formspree / Web3Forms) → submit via fetch.
      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          if (note) note.classList.add('is-visible');
        } else {
          alert('Something went wrong. Please email mertugrul68@gmail.com directly.');
        }
      }).catch(function () {
        alert('Something went wrong. Please email mertugrul68@gmail.com directly.');
      }).finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }

  /* ---- Carousel ------------------------------------------------------- */
  function initCarousel() {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.carousel').forEach(function (carousel) {
      var slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
      var dots   = Array.from(carousel.querySelectorAll('.carousel__dot'));
      var prev   = carousel.querySelector('.carousel__btn--prev');
      var next   = carousel.querySelector('.carousel__btn--next');
      var total  = slides.length;
      var current = 0;
      var timer = null;

      function goTo(n) {
        slides[current].classList.remove('carousel__slide--active');
        slides[current].setAttribute('aria-hidden', 'true');
        dots[current].classList.remove('carousel__dot--active');
        dots[current].setAttribute('aria-pressed', 'false');
        current = (n + total) % total;
        slides[current].classList.add('carousel__slide--active');
        slides[current].setAttribute('aria-hidden', 'false');
        dots[current].classList.add('carousel__dot--active');
        dots[current].setAttribute('aria-pressed', 'true');
      }

      function startAuto() {
        if (reducedMotion) return;
        timer = setInterval(function () { goTo(current + 1); }, 4000);
      }

      function resetAuto() { clearInterval(timer); startAuto(); }

      if (prev) prev.addEventListener('click', function () { goTo(current - 1); resetAuto(); });
      if (next) next.addEventListener('click', function () { goTo(current + 1); resetAuto(); });
      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); resetAuto(); });
      });

      startAuto();
    });
  }

  /* ---- Boot ----------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    captureEnglish();

    document.querySelectorAll('[data-setlang]').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-setlang')); });
    });

    initPills();
    initMenu();
    initForm();
    initCarousel();

    applyLang(initialLang());
  });
})();
