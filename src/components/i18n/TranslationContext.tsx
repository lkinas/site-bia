import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface TranslationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
  isDetecting: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.danceWorks': 'My Work',
    'nav.danceWorks.works': 'Works',
    'nav.danceWorks.workshops': 'Workshops',
    'nav.certifications': 'Certifications',
    'nav.supportTour': 'Support Tour',
    'nav.professionalDancer': 'Artist & Dancer',

    // Home page
    'home.hero.title': 'Bianca Marcela',
    'home.hero.description': 'As a nationally recognized dancer, I teach Jazz and Contemporary Dance. My work explores movement through research and experimentation, blending influences from commercial and urban dance styles.',
    'home.hero.bookClass': 'Book a Class',
    'home.hero.viewPortfolio': 'View Portfolio',
    'home.hero.myWork': 'My Work',
    'home.hero.studentsTaught': 'Students Taught',
    'home.hero.yearsExperience': 'Years Experience',
    'home.hero.reviews': 'Reviews',

    'home.video.title': 'The Art of Movement',
    'home.video.description': 'Discover the strength and delicacy of my art in recordings of performances and choreographic creations on my channel.',
    'home.video.watchFull': 'Watch My Performances',

    'home.gallery.teaching': 'Teaching',
    'home.gallery.teachingDesc': 'Training artists with technique and sensitivity',
    'home.gallery.performing': 'Performance',
    'home.gallery.performingDesc': 'The body as voice and narrative',
    'home.gallery.artisticDirector': 'Dance Student and Psychologist',

    'home.about.title': 'About me',
    'home.about.paragraph1': 'I am a dancer, choreographer and teacher, with a trajectory that unfolds between the stage and the classroom — two spaces that complete me and where I find purpose in dance. Specialized in Jazz and Contemporary Dance, with experience in Urban Dance, I seek to explore each movement as a form of connection: with the body, with music and with people. Dance, for me, is more than technique — it\'s presence, listening and surrender.',
    'home.about.paragraph2': 'With training in Scenic Dance, Technical Dance certification and more than a decade of experience, I have experienced the intensity of competitions as a soloist and in award-winning ensembles. All this baggage I carry with me in each class, rehearsal or performance — always with the purpose to inspire, teach and move.',
    'home.about.paragraph4': 'I create choreographies that are born from feeling, from listening to the group and respecting the individuality of each performer. My work unites technical rigor and artistic freedom, awakening in each student the courage to express themselves with truth.',
    'home.about.paragraph3': 'Taking classes with Bi has been wonderful! She is a teacher who looks at each of her students, respects their difficulties and always pushes us to be better. She is our biggest supporter and a complete artist. I am completely in love!',

    // Quote Section
    'home.quote.main': 'Whether on stage or in the classroom, dancing is, for me, a constant invitation to transformation — and that\'s what I seek to bring to each new project.',

    'home.pricing.title': 'Class Packages',
    'home.pricing.subtitle': 'From initiation to improvement: your dance, at your pace.',
    'home.pricing.starter.title': 'Starter Package',
    'home.pricing.starter.classes': '4 Classes',
    'home.pricing.starter.feature1': 'Group classes (max 8 students)',
    'home.pricing.starter.feature2': 'Basic technique foundation',
    'home.pricing.starter.feature3': 'Progress assessment',
    'home.pricing.starter.cta': 'Get Started',
    'home.pricing.professional.title': 'Professional Package',
    'home.pricing.professional.badge': 'Most Popular',
    'home.pricing.professional.classes': '8 Classes',
    'home.pricing.professional.save': 'Save R$ 200',
    'home.pricing.professional.feature1': 'Semi-private classes (max 4 students)',
    'home.pricing.professional.feature2': 'Advanced technique training',
    'home.pricing.professional.feature3': 'Personalized choreography',
    'home.pricing.professional.feature4': 'Performance opportunities',
    'home.pricing.professional.cta': 'Choose Professional',
    'home.pricing.elite.title': 'Elite Package',
    'home.pricing.elite.classes': 'Annual Program',
    'home.pricing.elite.save': 'Best Value',
    'home.pricing.elite.feature1': 'Private individual instruction',
    'home.pricing.elite.feature2': 'Competition preparation',
    'home.pricing.elite.feature3': 'Career mentorship',
    'home.pricing.elite.feature4': 'Exclusive masterclasses',
    'home.pricing.elite.cta': 'Go Elite',
    'home.pricing.footer': 'All packages include access to our online learning platform and community.',
    'home.pricing.finalCta': 'Start Your Journey',

    // Video embed content
    'home.video.award.title': 'Clips from "Clara Chama Silente"',
    'home.video.award.subtitle': 'Winner of the Curitiba Dance Award',
    'home.video.award.category': 'Female Jazz Solo 2025',

    // Image captions
    'home.gallery.teachingCaption': 'Jazz Duo Workshop',
    'home.gallery.performanceCaption': 'Jesus Lumma Show',
    'home.gallery.portraitCaption': 'Dançarte Photography Project - Gallery 33',

    // Alt texts for accessibility
    'home.hero.altText': 'Bianca Marcela in performance',
    'home.gallery.teachingAltText': 'Jazz workshop with two dancers practicing together',
    'home.gallery.performanceAltText': 'Dynamic dance performance with theatrical lighting',
    'home.gallery.portraitAltText': 'Artistic dance portrait with flowing fabric and expressive pose',

    // Dance Works page
    'danceWorks.title': 'My Work',
    'danceWorks.subtitle': 'A collection of performances, choreographies, and artistic collaborations that define my journey as an artist.',
    'danceWorks.viewWorks': 'View Works',
    'danceWorks.viewWorkshops': 'View Workshops',
    
    'danceWorks.works.title': 'Performance Works',
    'danceWorks.works.subtitle': 'Professional performances and artistic collaborations from prestigious venues worldwide.',
    
    'danceWorks.workshops.title': 'Workshops',
    'danceWorks.workshops.subtitle': 'Educational programs and intensive training sessions for dancers of all levels.',
    
    'danceWorks.featured.title': 'Featured Performances',
    'danceWorks.upcoming.title': 'Upcoming Performances',
    'danceWorks.upcoming.badge': 'Coming Soon',
    'danceWorks.learnMore': 'Learn More',
    'danceWorks.cta.title': 'Ready to Collaborate?',
    'danceWorks.cta.description': 'Whether you\'re interested in booking a performance or attending a workshop, let\'s create something beautiful together.',
    'danceWorks.cta.bookPerformance': 'Book Performance',
    'danceWorks.cta.workshopInquiry': 'Workshop Inquiry',

    // Dance Works - Awards section
    'danceWorks.watchPerformance': 'Watch Performance',

    // Dance Works - Workshops data
    'danceWorks.workshop1.title': 'Jazz Funk and Heels Workshop with Eduarda Rodrigues',
    'danceWorks.workshop1.date': 'August 2025',
    'danceWorks.workshop1.duration': '2 days',
    'danceWorks.workshop1.participants': '28',
    'danceWorks.workshop1.description': 'Independent project with a jazz funk duet proposal, exploring the connection between two bodies and camera performance using jazz lines and urban dance attitude. Second day with heels (high heel) choreography to develop self-confidence, sensuality and posture, intensifying stage presence and connection with one\'s own body.',

    'danceWorks.workshop2.title': 'Duet Workshop with Eduarda Rodrigues',
    'danceWorks.workshop2.date': 'March 2025',
    'danceWorks.workshop2.duration': '1 day', 
    'danceWorks.workshop2.participants': '35',
    'danceWorks.workshop2.description': 'Super Duo Heels workshop celebrating Xpace\'s 2nd anniversary.',

    // Workshops specific
    'workshops.upcoming.title': 'Upcoming Workshops',
    'workshops.upcoming.badge': 'Enrollment Open',
    'workshops.past.title': 'Past Workshops',
    'workshops.duration': 'Duration',
    'workshops.level': 'Level',
    'workshops.participants': 'Participants',
    'workshops.enroll': 'Enroll Now',
    'workshops.viewRecording': 'View Recording',
    'workshops.recordingUnavailable': 'Recording not available',

    // Certifications page
    'certifications.title': 'Certifications & Training',
    'certifications.subtitle': 'Professional credentials and continuous education that inform my teaching and artistry.',
    'certifications.stats.certifications': 'Major Certifications',
    'certifications.stats.awards': 'Awarded Works',
    'certifications.stats.experience': 'Years of Experience',
    'certifications.education.title': 'Education & Certifications',
    'certifications.awards.title': 'Awards & Recognition',
    'certifications.award.badge': 'Award',
    'certifications.memberships.title': 'Professional Memberships',
    'certifications.cta.title': 'Ready to Learn Together?',
    'certifications.cta.description': 'Whether you\'re seeking professional development or looking to advance your dance career, I\'m here to guide your journey.',
    'certifications.cta.button': 'Check out my classes',

    // Individual certifications
    'certifications.cert1.title': 'Dancer Training CIA Saltare',
    'certifications.cert1.level': 'Professional Training',
    'certifications.cert1.description': 'Intensive training in classical ballet and contemporary techniques with focus on artistic development and professional performance. Member of the First Professional Company of Dancers of Joinville Dance Festival "Saltare Dancer Training".',
    'certifications.cert1.prestige': 'recognized',
    'certifications.cert1.prestigeLabel': 'Recognized Institution',

    'certifications.cert2.title': 'Professional Course in Scenic Arts – Specialization in Scenic Dance',
    'certifications.cert2.level': 'Professional Course',
    'certifications.cert2.description': 'Training in scenic arts with specialization in scenic dance, covering ballet techniques, contemporary dance, jazz and body expression.',
    'certifications.cert2.prestige': 'prestigious',
    'certifications.cert2.prestigeLabel': 'Prestigious Institution',

    'certifications.cert3.title': 'Technical Course in Dance from the State of Santa Catarina',
    'certifications.cert3.level': 'Technical Course',
    'certifications.cert3.description': 'Official technical course in dance offered by the state, covering technical foundations, dance history, applied anatomy and teaching methodology.',
    'certifications.cert3.prestige': 'official',
    'certifications.cert3.prestigeLabel': 'Official Institution',

    // Awards
    'certifications.awards.award1.title': 'Work: What makes you human...',
    'certifications.awards.award1.organization': 'Senior Jazz Ensemble',
    'certifications.awards.award1.type': 'Ensemble Dancer',
    'certifications.awards.award1.description': 'First Place at Joinville Dance Festival 2025. Nomination for Best Choreography and Best Choreographer of the festival.',

    'certifications.awards.award2.title': 'Work: Clara Chama Silente',
    'certifications.awards.award2.organization': 'Senior Jazz Ensemble',
    'certifications.awards.award2.type': 'Soloist',
    'certifications.awards.award2.description': '🏆 First Place in "Advanced Female Jazz Solo" category at Curitiba Dance Award\n\n🏆 Nominated for Best Dancer at Curitiba Dance Award',

    'certifications.awards.award3.title': 'Work: Under Almodóvar\'s Eyes',
    'certifications.awards.award3.organization': 'Female Jazz Solo',
    'certifications.awards.award3.type': 'Soloist',
    'certifications.awards.award3.description': 'First Place in "Professional Female Jazz Solo" category at Curitiba Dance Award 2024. First Place in "Advanced Female Jazz Solo" category at Bravos Excellence Festival 2024 with nomination for best dancer of the festival.',

    'certifications.awards.award4.title': 'Work: Into the led',
    'certifications.awards.award4.organization': 'Senior Jazz Ensemble',
    'certifications.awards.award4.type': 'Ensemble Dancer',
    'certifications.awards.award4.description': 'First Place at Joinville Dance Festival 2024. Special Award for Environmentalization.',

    'certifications.awards.award5.title': 'Festival da Sapatilha',
    'certifications.awards.award5.organization': 'Female Jazz Solo',
    'certifications.awards.award5.type': 'Soloist',
    'certifications.awards.award5.description': 'Third Place in Jazz solo/duo open category at Festival da Sapatilha of Joinville Dance Festival.',

    'certifications.awards.award6.title': 'Work: Cela',
    'certifications.awards.award6.organization': 'Senior jazz ensemble',
    'certifications.awards.award6.type': 'Ensemble Dancer',
    'certifications.awards.award6.description': 'First Place at Joinville Dance Festival 2023.',

    // Teaching experiences
    'certifications.teaching.title': 'Teaching Experience',
    'certifications.teaching.current': 'Current',
    'certifications.teaching.period1': '2023 – present',
    'certifications.teaching.period2': '2021 – present', 
    'certifications.teaching.period4': '2021 – 2022',
    'certifications.teaching.period5': '2021',
    'certifications.teaching.period6': '2018 – 2019',
    'certifications.teaching.xpace.institution': 'Xpace Dance Company',
    'certifications.teaching.xpace.role': 'Contemporary and Adult Jazz Teacher',
    'certifications.teaching.xpace.period': '2023 – present',
    'certifications.teaching.fernandolima.institution': 'Fernando Lima Dance and Research Center',
    'certifications.teaching.fernandolima.role': 'Adult Jazz and Jazz Funk Teacher',
    'certifications.teaching.fernandolima.period': '2021 – present',
    'certifications.teaching.tiaelu.institution': 'CEI Tia Lu',
    'certifications.teaching.tiaelu.role': 'Baby Class I and II and Children\'s Ballet Teacher',
    'certifications.teaching.tiaelu.period': '2022 – 2024',
    'certifications.teaching.alisson.institution': 'Alisson Pereira Dance Studio',
    'certifications.teaching.alisson.role': 'Adult Jazz Teacher',
    'certifications.teaching.alisson.period': '2021',
    'certifications.teaching.arteencanta.institution': 'Cia Arte que Encanta',
    'certifications.teaching.arteencanta.role': 'Teacher of Children\'s Jazz and Youth/Adult, Contemporary, Baby Class and Classical Ballet',
    'certifications.teaching.arteencanta.period': '2021',
    'certifications.teaching.elias.institution': 'Elias Moreira School',
    'certifications.teaching.elias.role': 'Teacher of Children\'s Jazz, Youth Jazz and Children\'s Ballet',
    'certifications.teaching.elias.period': '2021 – 2022',
    'certifications.teaching.mariabenta.institution': 'CEI Maria Benta',
    'certifications.teaching.mariabenta.role': 'Baby Class Teacher',
    'certifications.teaching.mariabenta.period': '2021 – 2022',
    'certifications.teaching.belasartes.institution': 'Belas Artes Joinville',
    'certifications.teaching.belasartes.role': 'Teacher in Professional Course in Scenic Arts',
    'certifications.teaching.belasartes.period': '2018 – 2019',
    'certifications.teaching.belasartes.subjects': 'Subjects: Contemporary Dance, Baby Class, Classical Ballet, Scenic Dance, Body Expression, Jazz Dance and Artistic Practice',

    // Artistic Training and Workshops  
    'certifications.artisticTraining.title': 'Artistic Training and Dance Workshops',
    'certifications.artisticTraining.jazz.title': 'Jazz',
    'certifications.artisticTraining.contemporary.title': 'Contemporary Dance',
    'certifications.artisticTraining.urban.title': 'Urban Dance',
    'certifications.artisticTraining.pedagogy.title': 'Pedagogy and Research',

    // Jazz workshops - English translations
    'certifications.training.jazz.1': 'Regular weekly Jazz classes, Fernando Lima Dance and Research Center, 2020 - present',
    'certifications.training.jazz.2': 'Intermediate Jazz Course with Julia Meirelles - Joinfestival, 2025',
    'certifications.training.jazz.3': 'Jazz Musical Workshop with Victória Carvalho – Joinville Dance Camp, 2025',
    'certifications.training.jazz.4': 'Contemporary Jazz Workshop with Caique Bonforte – Joinville Dance Camp, 2025',
    'certifications.training.jazz.5': 'Jazz Funk Course with Fran Manson – Joinville Dance Camp, 2022',
    'certifications.training.jazz.6': 'Advanced Lyrical Jazz Course with Edson Santos – Joinville Dance Camp, 2021',
    'certifications.training.jazz.7': 'Advanced Jazz Dance Course with Jhean Allex – Joinville Dance Camp, 2021',
    'certifications.training.jazz.8': 'Modern Jazz Course with Eliane Fetzer – Joinville Dance Camp, 2021',
    'certifications.training.jazz.9': 'Jazz Funk Workshops – Labart Project, Dance Station, Joinville/SC, 2021',
    'certifications.training.jazz.10': 'Modern Jazz Workshop with Moa Nunes – A.Z Artes Joinville, 2017',
    'certifications.training.jazz.11': 'Contemporary Jazz Workshop with Fernando Lima – Belas Artes Joinville, 2017',

    // Contemporary dance workshops - English translations
    'certifications.training.contemporary.1': 'Regular weekly Contemporary Dance classes, Fernando Lima Dance and Research Center, 2020 - present',
    'certifications.training.contemporary.2': 'Contemporary with Nádia Freitas – Colônia de Inverno, 2025',
    'certifications.training.contemporary.9': 'Contemporary Dance Course with Fernando Lima – Joinville Dance Camp 2021',
    'certifications.training.contemporary.10': 'Contemporary Workshop – Pedro Quintino Dance Company, Curitiba 2016',

    // Urban dance workshops - English translations
    'certifications.training.urban.1': 'Regular weekly Urban Dance classes, Xpace Dance Company, 2023 - present',
    'certifications.training.urban.2': 'Urban Dance Course with Martin Klayver - Joinfestival, 2025',
    'certifications.training.urban.3': 'Urban Dance Workshops with Alisson Jordan, Amanda Villar, Andre Osei, Felipe Cardoso, Jhonney, Lucas Maciel, Paty Rodrigues, Matheus Rodrigues and Thomas Correa – Xpace 2 Years Super Workshop, 2025',
    'certifications.training.urban.4': 'Jazz Funk with Amanda Araújo – Colônia de Inverno, 2025',
    'certifications.training.urban.5': 'Jazz Funk with João Damaceno – Colônia de Inverno, 2025',
    'certifications.training.urban.6': 'Funk with Jennyfer Loren – Colônia de Inverno, 2025',
    'certifications.training.urban.7': 'Dancehall with Mel Stocchero – Colônia de Inverno, 2025',
    'certifications.training.urban.8': 'Sexy Vibes with Guiga de Souza – Colônia de Inverno, 2025',

    // Pedagogy and research workshops - English translations
    'certifications.training.pedagogy.1': 'Course on Pedagogical Studies and Practices for Baby Class and Children\'s Ballet Teachers with Paola Bartolo – Joinville Dance Camp, 2022',
    'certifications.training.pedagogy.2': 'Body and Decoloniality in Poetic Composition from a (de)codified aesthetic perspective with Jessé da Cruz – Tomorrow\'s Citizen Association, 2020',
    'certifications.training.pedagogy.3': 'Artistic Performance Workshop with Adriana Morango – Belas Artes Joinville, 2017',

    // Patron page
    'patron.badge': 'Fundraising Campaign',
    'patron.title': 'Support "Frágil" European Tour',
    'patron.subtitle': 'Help bring our innovative dance performance "Frágil" to the prestigious Abbaye de Neumünster in Luxembourg, featuring artists from Joinville and Luxembourg in an unforgettable cultural collaboration.',
    'patron.funding.title': 'Funding Progress',
    'patron.funding.support': 'Support Now',
    'patron.funding.share': 'Share Campaign',
    'patron.funding.of': 'of',
    'patron.funding.funded': 'funded',
    'patron.funding.backers': 'Backers',
    'patron.funding.daysLeft': 'Days Left',
    'patron.funding.customAmount': 'Custom Amount',
    
    'patron.story.title': 'About "Frágil"',
    'patron.story.paragraph1': '"Frágil" is an innovative dance performance directed by Moa Nunes with choreography by Fernando Lima. Life is like a delicate and ephemeral melody. With each step, we carry the weight of uncertainty and the lightness of the present. We are fragile like leaves in the wind, but it is in this fragility that we find the beauty of existing, feeling, and dancing.',
    'patron.story.paragraph2': 'This production brings together artists from Joinville region and Luxembourg for a performance that promises to enchant and inspire audiences. This experience will be fundamental for our artistic growth and our role in disseminating dance in our city and beyond.',
    'patron.story.learnMore': 'Learn More About the Journey',
    
    'patron.schedule.title': 'Performance Schedule',
    'patron.venue': 'Abbaye de Neumünster',
    'patron.location': 'Luxembourg',
    'patron.dates': 'May 21-23, 2026',
    
    'patron.support.title': 'How Your Support Helps',
    'patron.support.description': 'Every contribution goes directly toward making this Luxembourg performance a reality. Here is how your support will be used.',
    'patron.support.ofGoal': 'of goal',
    
    'patron.thankYou.title': 'Thank You for Your Support',
    'patron.thankYou.description': 'Every contribution, no matter the size, brings us closer to making this performance a reality.',
    'patron.thankYou.join': 'Join',
    'patron.thankYou.supporters': 'supporters',

    // Footer
    'footer.location.city': 'Made with  🤍  by Luísa Kinas',
    'footer.location.country': 'JOINVILLE • BRAZIL',

    // App loading
    'app.loading': 'Loading...',

    // Testimonials
    'home.testimonials.title': 'What Students Say',
    'home.testimonials.gabi.name': 'Gabi Troglio',
    'home.testimonials.gabi.role': 'Psychologist and Dance Student',
    'home.testimonials.gabi.quote': 'Taking classes with Bi has been wonderful! She is a teacher who looks at each of her students, respects their difficulties and always pushes us to be better. She is our biggest supporter and a complete artist. I am completely in love!',
    'home.testimonials.debora.name': 'Débora Benetti',
    'home.testimonials.debora.role': ' and Dance Student',
    'home.testimonials.debora.quote': 'Bianca is a teacher who welcomes us with incredible lightness and teaches with so much love and care. She makes us feel capable and makes each class unique. It\'s impossible not to fall in love with her way of teaching and her art.',
    'home.testimonials.andrielle.name': 'Andrielle Przybysewski',
    'home.testimonials.andrielle.role': 'Nurse and Dance Student',
    'home.testimonials.andrielle.quote': 'Dancing with Bi is pure magic! She has this incredible ability to bring out the best in each student, creating an environment of trust and growth. Her classes are a perfect blend of technique and emotion.',
  },
  pt: {
    // Navegação
    'nav.home': 'Início',
    'nav.danceWorks': 'Meu trabalho',
    'nav.danceWorks.works': 'Obras',
    'nav.danceWorks.workshops': 'Workshops',
    'nav.certifications': 'Certificações',
    'nav.supportTour': 'Apoiar Turnê',
    'nav.professionalDancer': 'artista e bailarina',

    // Página inicial
    'home.hero.title': 'Bianca Marcela',
    'home.hero.description': 'Bailarina com reconhecimento em festivais nacionais, me dedico ao ensino de Jazz e Dança Contemporânea. Pesquiso e experimento o movimento, dialogando também com danças comerciais e urbanas.',
    'home.hero.bookClass': 'Planos de Aulas',
    'home.hero.viewPortfolio': 'Ver Portfólio',
    'home.hero.myWork': 'Conheça meu trabalho',
    'home.hero.studentsTaught': 'Alunos Ensinados',
    'home.hero.yearsExperience': 'Anos de Experiência',
    'home.hero.reviews': 'Avaliações',

    'home.video.title': 'A Arte do Movimento',
    'home.video.description': 'Explore os registros mais recentes das minhas performances em obras premiadas e dos workshops que ministrei como professora.',
    'home.video.watchFull': 'Assistir Minhas Performances',

    'home.gallery.teaching': 'Ensino',
    'home.gallery.teachingDesc': 'Formando artistas com técnica e sensibilidade',
    'home.gallery.performing': 'Performance',
    'home.gallery.performingDesc': 'O corpo como voz e narrativa',
    'home.gallery.artisticDirector': 'Psicóloga e aluna',

    'home.about.title': 'Sobre mim',
    'home.about.paragraph1': 'Sou bailarina, coreógrafa e professora, com uma trajetória que se desdobra entre o palco e a sala de aula — dois espaços que me completam e onde encontro propósito na dança. Especializada em Jazz e Dança Contemporânea, e com vivência em Danças Urbanas, busco explorar cada movimento como uma forma de conexão: com o corpo, com a música e com as pessoas. A dança, para mim, é mais do que técnica — é presença, escuta e entrega.',
    'home.about.paragraph2': 'Com formação em Danças Cênicas, Técnico em Dança e mais de uma década de experiência, já vivi a intensidade das competições como solista e em conjuntos premiados. Toda essa bagagem carrego comigo em cada aula, ensaio ou apresentação — sempre com o propósito de inspirar, ensinar e emocionar.',
    'home.about.paragraph4': 'Crio coreografias que nascem do sentir, da escuta do grupo e do respeito à individualidade de cada intérprete. Meu trabalho une rigor técnico e liberdade artística, despertando em cada aluno a coragem de se expressar com verdade.',
    'home.about.paragraph3': 'Fazer aulas com a Bi tem sido maravilhoso! Ela é uma professora que olha pra cada um de seus alunos, respeita suas dificuldades e sempre nos impulsiona a sermos melhores. É nossa maior torcedora e uma artista completa. Sou completamente apaixonada!',

    // Seção de citação
    'home.quote.main': 'Seja no palco ou na sala de aula, dançar é, para mim, um convite constante à transformação — e é isso que procuro levar a cada novo projeto.',

    'home.pricing.title': 'Planos de Aulas',
    'home.pricing.subtitle': 'Da iniciação ao aperfeiçoamento: sua dança, no seu ritmo.',
    'home.pricing.starter.title': 'Plano Iniciante',
    'home.pricing.starter.classes': '4 Aulas',
    'home.pricing.starter.feature1': 'Aulas em grupo (máx. 8 alunos)',
    'home.pricing.starter.feature2': 'Base de técnica básica',
    'home.pricing.starter.feature3': 'Avaliação de progresso',
    'home.pricing.starter.cta': 'Começar',
    'home.pricing.professional.title': 'Plano Profissional',
    'home.pricing.professional.badge': 'Mais Popular',
    'home.pricing.professional.classes': '8 Aulas',
    'home.pricing.professional.save': 'Economize R$ 200',
    'home.pricing.professional.feature1': 'Aulas semi-privadas (máx. 4 alunos)',
    'home.pricing.professional.feature2': 'Treinamento de técnica avançada',
    'home.pricing.professional.feature3': 'Coreografia personalizada',
    'home.pricing.professional.feature4': 'Oportunidades de performance',
    'home.pricing.professional.cta': 'Escolher Profissional',
    'home.pricing.elite.title': 'Plano Elite',
    'home.pricing.elite.classes': 'Programa Anual',
    'home.pricing.elite.save': 'Melhor Valor',
    'home.pricing.elite.feature1': 'Instrução privada individual',
    'home.pricing.elite.feature2': 'Preparação para competições',
    'home.pricing.elite.feature3': 'Mentoria de carreira',
    'home.pricing.elite.feature4': 'Masterclasses exclusivas',
    'home.pricing.elite.cta': 'Ir Elite',
    'home.pricing.footer': 'Todos os planos incluem acesso à nossa plataforma de aprendizado online e comunidade.',
    'home.pricing.finalCta': 'Iniciar Sua Jornada',

    // Conteúdo do vídeo incorporado
    'home.video.award.title': 'Trechos da performance Clara Chama Silente',
    'home.video.award.subtitle': '1º Lugar na Categoria Solo Feminino Jazz Avançado e Indicação a Melhor Bailarina.',
    'home.video.award.category': 'Prêmio Curitiba na Dança - 2025',

    // Legendas das imagens
    'home.gallery.teachingCaption': 'Workshop de Jazz Duo',
    'home.gallery.performanceCaption': 'Show Jesus Lumma',
    'home.gallery.portraitCaption': 'Dançarte - Galeria 33',

    // Textos alternativos para acessibilidade
    'home.hero.altText': 'Bianca Marcela em performance',
    'home.gallery.teachingAltText': 'Workshop de jazz com duas dançarinas praticando juntas',
    'home.gallery.performanceAltText': 'Performance de dança dinâmica com iluminação teatral',
    'home.gallery.portraitAltText': 'Retrato artístico de dança com tecido fluído e pose expressiva',

    // Página de Trabalhos de Dança
    'danceWorks.title': 'Meu trabalho',
    'danceWorks.subtitle': 'Uma coleção de performances, coreografias e colaborações artísticas que definem minha jornada como artista.',
    'danceWorks.viewWorks': 'Ver Obras',
    'danceWorks.viewWorkshops': 'Ver Workshops',
    
    'danceWorks.works.title': 'Obras Performáticas',
    'danceWorks.works.subtitle': 'Performances profissionais e colaborações artísticas de locais prestigiosos mundialmente.',
    
    'danceWorks.workshops.title': 'Workshops',
    'danceWorks.workshops.subtitle': 'Programas educacionais e sessões de treinamento intensivo para dançarinos de todos os níveis.',
    
    'danceWorks.featured.title': 'Performances em Destaque',
    'danceWorks.upcoming.title': 'Próximas Performances',
    'danceWorks.upcoming.badge': 'Em Breve',
    'danceWorks.learnMore': 'Saiba Mais',
    'danceWorks.cta.title': 'Vamos Criar Juntas?',
    'danceWorks.cta.description': 'Mais do que o resultado, me interessa o caminho que percorremos. Seja em uma performance compartilhada ou em um espaço formativo, estou aqui para colaborar com presença, escuta e intenção.',
    'danceWorks.cta.bookPerformance': 'Solicite um orçamento',

    // Dance Works - Seção de Prêmios
    'danceWorks.watchPerformance': 'Assistir Performance',

    // Dance Works - Dados de Workshops
    'danceWorks.workshop1.title': 'Workshop de Jazz Funk e Heels com Eduarda Rodrigues',
    'danceWorks.workshop1.date': 'Agosto de 2025',
    'danceWorks.workshop1.duration': '2 dias',
    'danceWorks.workshop1.participants': '28',
    'danceWorks.workshop1.description': 'Projeto autônomo com proposta de jazz funk em dupla, explorando a conexão entre dois corpos e a performance para câmera utilizando as linhas de jazz e atitude das danças urbanas. Segundo dia com coreografia em heels (salto alto) para desenvolver autoconfiança, sensualidade e postura, intensificando a presença de palco e conexão com o próprio corpo.',

    'danceWorks.workshop2.title': 'Workshop de dueto com Eduarda Rodrigues',
    'danceWorks.workshop2.date': 'Março de 2025',
    'danceWorks.workshop2.duration': '1 dia',
    'danceWorks.workshop2.participants': '35',
    'danceWorks.workshop2.description': 'Super workshop de Duo Heels em comemoração de 2 anos da Xpace.',

    // Workshops específicos
    'workshops.upcoming.title': 'Próximos Workshops',
    'workshops.upcoming.badge': 'Inscrições Abertas',
    'workshops.past.title': '2025',
    'workshops.duration': 'Duração',
    'workshops.level': 'Nível',
    'workshops.participants': 'Participantes',
    'workshops.enroll': 'Inscrever-se',
    'workshops.viewRecording': 'Ver Gravação',
    'workshops.recordingUnavailable': 'Gravação não disponível',

    // Página de certificações
    'certifications.title': 'Certificações e Treinamento',
    'certifications.subtitle': 'Credenciais profissionais e educação continuada que informam meu ensino e arte.',
    'certifications.stats.certifications': 'Formações Especializadas',
    'certifications.stats.awards': 'Obras Premiadas como Intérprete',
    'certifications.stats.experience': 'Anos de Experiência',
    'certifications.education.title': 'Educação & Certificações',
    'certifications.awards.title': 'Prêmios & Reconhecimento',
    'certifications.award.badge': 'Prêmio',
    'certifications.memberships.title': 'Membros Profissionais',
    'certifications.cta.title': 'Quer aprender de forma leve e acolhedora?',
    'certifications.cta.description': 'Comigo, o aprendizado será construído com empatia, escuta e apoio contínuo — no seu ritmo e com seu propósito.',
    'certifications.cta.button': 'Conhecer Planos de Aula',

    // Certificações individuais
    'certifications.cert1.title': 'Formação de bailarinos CIA Saltare',
    'certifications.cert1.level': 'Formação Profissional',
    'certifications.cert1.description': 'Estudos intensivos de Ballet Clássico, Dança Contemporânea e Danças Urbanas, compondo uma obra de dança contemporânea pelo coreógrafo Willian Almeida. Integrante da Primeira Companhia Profissional de Bailarinos do Festival de Dança de Joinville "Saltare Formação de Bailarinos".',
    'certifications.cert1.prestige': 'reconhecida',
    'certifications.cert1.prestigeLabel': 'Instituição Reconhecida',

    'certifications.cert2.title': 'Curso Profissionalizante em Artes Cênicas – Habilitação em Danças Cênicas',
    'certifications.cert2.level': 'Curso Profissionalizante',
    'certifications.cert2.description': 'Formação em Artes Cênicas com especialização em Danças Cênicas, abrangendo técnicas de Ballet, Dança Contemporânea, Jazz e expressão corporal.',
    'certifications.cert2.prestige': 'conceituada',
    'certifications.cert2.prestigeLabel': 'Instituição Conceituada',

    'certifications.cert3.title': 'Curso Técnico em Dança do Estado de Santa Catarina',
    'certifications.cert3.level': 'Curso Técnico',
    'certifications.cert3.description': 'Curso técnico oficial em dança oferecido pelo estado, cobrindo fundamentos técnicos, história da dança, anatomia aplicada e metodologia de ensino.',
    'certifications.cert3.prestige': 'oficial',
    'certifications.cert3.prestigeLabel': 'Instituição Oficial',

    // Prêmios
    'certifications.awards.award1.title': 'Obra: O que te torna humano... de Fernando Lima',
    'certifications.awards.award1.organization': 'Categoria: Conjunto Jazz Sênior',
    'certifications.awards.award1.type': 'Bailarina do Conjunto',
    'certifications.awards.award1.description': '🏆 1º Lugar no Festival de Dança de Joinville.\nIndicação de Melhor coreografia e melhor coreógrafo do festival.\n🏆 1º Lugar no Prêmio Curitiba na Dança. \n🏆 Premiação Especial de Destaque Jazz Conjunto Avançado do Prêmio Curitiba na Dança.',

    'certifications.awards.award2.title': 'Obra: Clara Chama Silente, de Fernando Lima',
    'certifications.awards.award2.organization': 'Categoria: Solo Feminino Jazz Sênior',
    'certifications.awards.award2.type': 'Solista',
    'certifications.awards.award2.description': '🏆 1º Lugar no Prêmio Curitiba na Dança e Indicação a Melhor Bailarina.\n🏆 1º Lugar no Joinfestival.',

    'certifications.awards.award3.title': 'Obra: Sob os olhos de Almodóvar, de Fernando Lima',
    'certifications.awards.award3.organization': 'Categoria: Solo Feminino Jazz Sênior',
    'certifications.awards.award3.type': 'Solista',
    'certifications.awards.award3.description': '🏆 1º Lugar no Prêmio Curitiba em Dança.\n🏆 1º Lugar no Festival Bravos Excellence,\ncom indicação a melhor bailarina do festival.\n🏆 3° Lugar no Festival da Sapatilha de Joinville.',

    'certifications.awards.award4.title': 'Obra: Into the led, de Fernando Lima',
    'certifications.awards.award4.organization': 'Categoria: Conjunto Jazz Sênior',
    'certifications.awards.award4.type': 'Bailarina do Conjunto',
    'certifications.awards.award4.description': '🏆 1º Lugar no Festival de Dança de Joinville.\n🏆 Premiação especial de Ambientalização no Festival de Dança de Joinville.\n🏆 1º Lugar no Prêmio Curitiba na Dança.',

    'certifications.awards.award6.title': 'Obra: Cela, de Fernando Lima',
    'certifications.awards.award6.organization': 'Categoria: Conjunto Jazz Sênior',
    'certifications.awards.award6.type': 'Bailarina do Conjunto',
    'certifications.awards.award6.description': '🏆 1º Lugar no Festival de Dança de Joinville.\n🏆 1º Lugar no Prêmio Curitiba na Dança 2022.\n🏆 1º Lugar no Passo de Arte Grand Prix 2023 em São Paulo.',

    // Experiências de ensino
    'certifications.teaching.title': 'Experiências de Atuação Pedagógica',
    'certifications.teaching.current': 'Atual',
    'certifications.teaching.period1': '2023 – atual',
    'certifications.teaching.period2': '2021 – atual',
    'certifications.teaching.period4': '2021 – 2022',
    'certifications.teaching.period5': '2021',
    'certifications.teaching.period6': '2018 – 2019',
    'certifications.teaching.xpace.institution': 'Xpace Dance Company',
    'certifications.teaching.xpace.role': 'Professora das modalidades Contemporâneo e Jazz Adulto',
    'certifications.teaching.xpace.period': '2023 – atual',
    'certifications.teaching.fernandolima.institution': 'Centro de Dança e Pesquisa Fernando Lima',
    'certifications.teaching.fernandolima.role': 'Professora das modalidades Jazz Adulto e Jazz Funk',
    'certifications.teaching.fernandolima.period': '2021 – atual',
    'certifications.teaching.tiaelu.institution': 'CEI Tia Lu',
    'certifications.teaching.tiaelu.role': 'Professora de Baby Class I e II e Ballet Infantil',
    'certifications.teaching.tiaelu.period': '2022 – 2024',
    'certifications.teaching.alisson.institution': 'Alisson Pereira Studio de Dança',
    'certifications.teaching.alisson.role': 'Professora de Jazz Adulto',
    'certifications.teaching.alisson.period': '2021',
    'certifications.teaching.arteencanta.institution': 'Cia Arte que Encanta',
    'certifications.teaching.arteencanta.role': 'Professora de Jazz Infantil e Juvenil/Adulto, Contemporâneo, Baby Class e Ballet Clássico',
    'certifications.teaching.arteencanta.period': '2021',
    'certifications.teaching.elias.institution': 'Colégio Elias Moreira',
    'certifications.teaching.elias.role': 'Professora de Jazz Infantil, Jazz Juvenil e Ballet Infantil',
    'certifications.teaching.elias.period': '2021 – 2022',
    'certifications.teaching.mariabenta.institution': 'CEI Maria Benta',
    'certifications.teaching.mariabenta.role': 'Professora de Baby Class',
    'certifications.teaching.mariabenta.period': '2021 – 2022',
    'certifications.teaching.belasartes.institution': 'Belas Artes Joinville',
    'certifications.teaching.belasartes.role': 'Professora no Curso Profissionalizante em Artes Cênicas',
    'certifications.teaching.belasartes.period': '2018 – 2019',
    'certifications.teaching.belasartes.subjects': 'Disciplinas: Dança Contemporânea, Baby Class, Ballet Clássico, Danças Cênicas, Expressão Corporal, Jazz Dance e Prática Artística',

    // Formação Artística e Workshops
    'certifications.artisticTraining.title': 'Formação Artística e Workshops em Dança',
    'certifications.artisticTraining.jazz.title': 'Jazz',
    'certifications.artisticTraining.contemporary.title': 'Dança Contemporânea',
    'certifications.artisticTraining.urban.title': 'Danças Urbanas',
    'certifications.artisticTraining.pedagogy.title': 'Pedagogia e Pesquisa',

    // Workshops de Jazz - Traduções portuguesas originais (não alterar)
    'certifications.training.jazz.1': 'Aulas regulares semanais de Jazz, Centro de Dança e Pesquisa Fernando Lima, 2020 - presente',
    'certifications.training.jazz.2': 'Curso de Jazz Intermediário com Julia Meirelles - Joinfestival, 2025',
    'certifications.training.jazz.3': 'Workshop de Jazz Musical com Victória Carvalho – Joinville Dance Camp, 2025',
    'certifications.training.jazz.4': 'Workshop de Jazz Contemporâneo com Caique Bonforte – Joinville Dance Camp, 2025',
    'certifications.training.jazz.5': 'Curso de Jazz Funk com Fran Manson – Joinville Dance Camp, 2022',
    'certifications.training.jazz.6': 'Curso de Jazz Lírico Avançado com Edson Santos – Joinville Dance Camp, 2021',
    'certifications.training.jazz.7': 'Curso de Jazz Dance Avançado com Jhean Allex – Joinville Dance Camp, 2021',
    'certifications.training.jazz.8': 'Curso de Jazz Moderno com Eliane Fetzer – Joinville Dance Camp, 2021',
    'certifications.training.jazz.9': 'Oficinas de Jazz Funk – Projeto Labart, Estação da Dança, Joinville/SC, 2021',
    'certifications.training.jazz.10': 'Workshop de Modern Jazz com Moa Nunes – A.Z Artes Joinville, 2017',
    'certifications.training.jazz.11': 'Workshop de Jazz Contemporâneo com Fernando Lima – Belas Artes Joinville, 2017',

    // Workshops de Dança Contemporânea - Traduções portuguesas originais (não alterar)
    'certifications.training.contemporary.1': 'Aulas regulares semanais de Dança Contemporânea, Centro de Dança e Pesquisa Fernando Lima, 2020 - presente',
    'certifications.training.contemporary.2': 'Contemporâneo com Nádia Freitas - Colônia de Inverno, 2025',
    'certifications.training.contemporary.9': 'Curso de Dança Contemporânea com Fernando Lima - Joinville Dance Camp 2021',
    'certifications.training.contemporary.10': 'Workshop de contemporâneo - Companhia de Dança Pedro Quintino, Curitiba 2016',

    // Workshops de Danças Urbanas - Traduções portuguesas originais (não alterar)
    'certifications.training.urban.1': 'Aulas regulares semanais de Danças Urbanas, Xpace Dance Company, 2023 - presente',
    'certifications.training.urban.2': 'Curso de danças urbanas com Martin Klayver - Joinfestival, 2025',
    'certifications.training.urban.3': 'Workshops de Danças Urbanas com Alisson Jordan, Amanda Villar, Andre Osei, Felipe Cardoso, Jhonney, Lucas Maciel, Paty Rodrigues, Matheus Rodrigues e Thomas Correa – Super Workshop 2 anos Xpace, 2025',
    'certifications.training.urban.4': 'Jazz Funk com Amanda Araújo - Colônia de Inverno, 2025',
    'certifications.training.urban.5': 'Jazz Funk com João Damaceno - Colônia de Inverno, 2025',
    'certifications.training.urban.6': 'Funk com Jennyfer Loren - Colônia de Inverno, 2025',
    'certifications.training.urban.7': 'Dancehall com Mel Stocchero - Colônia de Inverno, 2025',
    'certifications.training.urban.8': 'Sexy Vibes com Guiga de Souza - Colônia de Inverno, 2025',

    // Workshops de Pedagogia e Pesquisa - Traduções portuguesas originais (não alterar)
    'certifications.training.pedagogy.1': 'Curso de Estudos e Práticas Pedagógicas para Professores de Baby Class e Ballet Infantil com Paola Bartolo – Joinville Dance Camp, 2022',
    'certifications.training.pedagogy.2': 'Curso Corpo e Docolonialidade em Composição Poética na perspectiva estética (de)codificada com Jessé da Cruz – Associação Cidadão do Amanhã, 2020',
    'certifications.training.pedagogy.3': 'Workshop de Performance Artística com Adriana Morango – Belas Artes Joinville, 2017',

    // Página do patrono
    'patron.badge': 'Campanha de Financiamento',
    'patron.title': 'Apoie a Turnê "Frágil" na Europa',
    'patron.subtitle': 'Ajude a levar nossa performance de dança inovadora "Frágil" ao prestigioso Abbaye de Neumünster em Luxemburgo, apresentando artistas de Joinville e Luxemburgo em uma colaboração cultural inesquecível.',
    'patron.funding.title': 'Progresso do Financiamento',
    'patron.funding.support': 'Apoiar Agora',
    'patron.funding.share': 'Compartilhar Campanha',
    'patron.funding.of': 'de',
    'patron.funding.funded': 'financiado',
    'patron.funding.backers': 'Apoiadores',
    'patron.funding.daysLeft': 'Dias Restantes',
    'patron.funding.customAmount': 'Valor Personalizado',
    
    'patron.story.title': 'Sobre "Frágil"',
    'patron.story.paragraph1': '"Frágil" é uma performance de dança inovadora dirigida por Moa Nunes com coreografia de Fernando Lima. A vida é como uma melodia delicada e efêmera. A cada passo, carregamos o peso da incerteza e a leveza do presente. Somos frágeis como folhas ao vento, mas é nessa fragilidade que encontramos a beleza de existir, sentir e dançar.',
    'patron.story.paragraph2': 'Esta produção reúne artistas da região de Joinville e de Luxemburgo para uma performance que promete encantar e inspirar o público. Esta experiência será fundamental para nosso crescimento artístico e nosso papel na disseminação da dança em nossa cidade e além.',
    'patron.story.learnMore': 'Saiba Mais Sobre a Jornada',
    
    'patron.schedule.title': 'Cronograma da Performance',
    'patron.venue': 'Abbaye de Neumünster',
    'patron.location': 'Luxemburgo',
    'patron.dates': '21-23 de Maio, 2026',
    
    'patron.support.title': 'Como Seu Apoio Ajuda',
    'patron.support.description': 'Cada contribuição vai diretamente para tornar esta performance em Luxemburgo uma realidade. Veja como seu apoio será usado.',
    'patron.support.ofGoal': 'da meta',
    
    'patron.thankYou.title': 'Obrigada pelo Seu Apoio',
    'patron.thankYou.description': 'Cada contribuição, não importa o tamanho, nos aproxima de tornar esta performance uma realidade.',
    'patron.thankYou.join': 'Junte-se a',
    'patron.thankYou.supporters': 'apoiadores',

    // Rodapé
    'footer.location.city': 'Feito com  🤍  por Luísa Kinas',
    'footer.location.country': 'JOINVILLE • BRASIL',

    // Carregamento do app
    'app.loading': 'Carregando...',

    // Depoimentos
    'home.testimonials.title': 'O que dizem os alunos',
    'home.testimonials.gabi.name': 'Gabi Troglio',
    'home.testimonials.gabi.role': 'Psicóloga e aluna',
    'home.testimonials.gabi.quote': 'Fazer aulas com a Bi tem sido maravilhoso! Ela é uma professora que olha pra cada um de seus alunos, respeita suas dificuldades e sempre nos impulsiona a sermos melhores. É nossa maior torcedora e uma artista completa. Sou completamente apaixonada!',
    'home.testimonials.debora.name': 'Débora Benetti',
    'home.testimonials.debora.role': 'Coordenadora administrativa e aluna',
    'home.testimonials.debora.quote': 'As aulas com a Prof. Bia são sempre mais do que apenas uma aula. Ela faz a gente se sentir tão confortável, que conseguimos nos conectar com o nosso interior e esquecer de tudo o que está acontecendo lá fora. Entrei com muitas dificuldades, mas ela sempre acreditou no meu processo muito mais do que eu mesma. A Bia é uma profissional e uma artista incrível, não largo ela nunca mais!',
    'home.testimonials.andrielle.name': 'Andrielle Przybysewski',
    'home.testimonials.andrielle.role': 'Analista de importação e aluna',
    'home.testimonials.andrielle.quote': 'Dançar com a Bia é uma experiência extraordinária. Cada passo, cada movimento, é arte. Cada um da sua forma, no seu tempo, mas todos inspirados pela paixão que ela exala pela dança. Não existe alguém que se encontre com a Bia e não sinta a necessidade de expressar essa arte linda e tão lapidada por ela. Uma profissional completa, e além de tudo, um ser humano maravilhoso!',
  },
};

// Detect browser language
const detectLanguage = (): Language => {
  if (typeof navigator !== 'undefined') {
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('pt')) {
      return 'pt';
    }
  }
  return 'en'; // Default to English
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const detectedLanguage = detectLanguage();
      setLanguage(detectedLanguage);
    }
    
    // Small delay to show loading state
    const timer = setTimeout(() => {
      setIsDetecting(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string, fallback?: string): string => {
    const translation = translations[language]?.[key] || fallback || key;
    return translation;
  };

  return (
    <TranslationContext.Provider value={{ 
      language, 
      setLanguage: changeLanguage, 
      t,
      isDetecting 
    }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};