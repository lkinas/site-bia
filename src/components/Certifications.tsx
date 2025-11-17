import {
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Star,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "./i18n/TranslationContext";
import { useNavigate } from "react-router-dom";
import dancerImage from "figma:asset/e84c06c5878b9a11a990a2b78c176bccd30450e4.png";
import saltareCertificate from "figma:asset/1b4f604b65c40a5a006cdbc77340414e8cc703cf.png";
import belasArtesCertificate from "figma:asset/80f66b068b0bc81fefe140172d21f74ba95abe5e.png";
import technicalDanceCertificate from "figma:asset/f5cb86c98ed2111d32df9d95555bc1fba8c11823.png";
import heroImage from "figma:asset/473e908e4489bdf1a9fc70f47a77d3d7de38df0e.png";

export function Certifications() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToPlans = () => {
    navigate("/#pricing");
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const certifications = [
    {
      title: t(
        "certifications.cert1.title",
        "Formação de bailarinos CIA Saltare",
      ),
      institution: "CIA Saltare",
      year: "2024",
      location: "Joinville, SC, Brasil",
      level: t(
        "certifications.cert1.level",
      ),
      description: t(
        "certifications.cert1.description",
      ),
      prestige: t(
        "certifications.cert1.prestige",
        "reconhecida",
      ),
      prestigeLabel: t(
        "certifications.cert1.prestigeLabel",
        "Instituição Reconhecida",
      ),
    },
    {
      title: t(
        "certifications.cert3.title",
      ),
      institution: "Estado de Santa Catarina",
      year: "2020",
      location: "Joinville, SC, Brasil",
      level: t("certifications.cert3.level"),
      description: t(
        "certifications.cert3.description",
      ),
      prestige: t("certifications.cert3.prestige"),
      prestigeLabel: t(
        "certifications.cert3.prestigeLabel",
      ),
    },
    {
      title: t(
        "certifications.cert2.title",
      ),
      institution: "Belas Artes Joinville",
      year: "2019",
      location: "Joinville, SC, Brasil",
      level: t(
        "certifications.cert2.level",
        "Curso Profissionalizante",
      ),
      description: t(
        "certifications.cert2.description",
      ),
      prestige: t(
        "certifications.cert2.prestige",
      ),
      prestigeLabel: t(
        "certifications.cert2.prestigeLabel",
      ),
    },
  ];

  const teachingPeriods = [
    {
      period: t("certifications.teaching.period1", "2023 – atual"),
      current: true,
      experiences: [
        {
          institution: t("certifications.teaching.xpace.institution", "Xpace Dance Company"),
          role: t("certifications.teaching.xpace.role", "Professora de Contemporâneo e Jazz Adulto"),
        },
      ],
    },
    {
      period: t("certifications.teaching.period2", "2021 – atual"),
      current: true,
      experiences: [
        {
          institution: t("certifications.teaching.fernandolima.institution", "Centro de Dança e Pesquisa Fernando Lima"),
          role: t("certifications.teaching.fernandolima.role"),
        },
      ],
    },
    {
      period: t("certifications.teaching.period4", "2021 – 2022"),
      current: false,
      experiences: [
        {
          institution: t("certifications.teaching.elias.institution", "Colégio Elias Moreira"),
          role: t("certifications.teaching.elias.role", "Professora de Jazz Infantil, Jazz Juvenil e Ballet Infantil"),
        },
      ],
    },
    {
      period: t("certifications.teaching.period5", "2021"),
      current: false,
      experiences: [
        {
          institution: t("certifications.teaching.alisson.institution", "Alisson Pereira Studio de Dança"),
          role: t("certifications.teaching.alisson.role", "Professora de Jazz Adulto"),
        },
        {
          institution: t("certifications.teaching.arteencanta.institution", "Cia Arte que Encanta"),
          role: t("certifications.teaching.arteencanta.role", "Professora de Jazz Infantil e Juvenil/Adulto, Contemporâneo, Baby Class e Ballet Clássico"),
        },
      ],
    },
    {
      period: t("certifications.teaching.period6", "2018 – 2019"),
      current: false,
      experiences: [
        {
          institution: t("certifications.teaching.belasartes.institution", "Belas Artes Joinville"),
          role: t("certifications.teaching.belasartes.role", "Professora no Curso Profissionalizante em Artes Cênicas"),
          subjects: t("certifications.teaching.belasartes.subjects", "Disciplinas: Dança Contemporânea, Baby Class, Ballet Clássico, Danças Cênicas, Expressão Corporal, Jazz Dance e Prática Artística"),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Dramatic Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Dramatic theatrical performance with dancer being lifted on stage, blue spotlights and golden sparkles, silhouetted audience with raised hands"
            className="w-full h-full object-cover filter saturate-[0.8] brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-8 text-white"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-8xl font-serif font-light text-white leading-[0.85] tracking-tight">
                    {t("certifications.title")}
                  </h1>

                  <p className="lg:text-2xl text-white/90 font-light leading-relaxed max-w-xl text-[20px]">
                    {t("certifications.subtitle")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6 backdrop-blur-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                <div className="bg-white/10 rounded-lg p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                    <div>
                      <div className="text-2xl font-serif font-light text-white">
                        3
                      </div>
                      <div className="text-sm text-white/80 font-sans uppercase tracking-wide">
                        {t(
                          "certifications.stats.certifications",
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Star className="h-8 w-8 text-white" />
                    <div>
                      <div className="text-2xl font-serif font-light text-white">
                        10+
                      </div>
                      <div className="text-sm text-white/80 font-sans uppercase tracking-wide">
                        {t("certifications.stats.experience")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Experience Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-serif font-light text-primary mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("certifications.teaching.title")}
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute w-0.5 bg-primary/20 left-[2.5625rem] md:left-1/2 md:-translate-x-0.5" 
              style={{
                top: '3rem',
                height: `calc(${teachingPeriods.length * 19}rem)`
              }}
            ></div>

            <div className="space-y-16">
              {teachingPeriods.map((periodGroup, index) => (
                <motion.div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 transform md:-translate-x-2.5 bg-white border-4 border-primary rounded-full z-10 shadow-lg">
                    {periodGroup.current && (
                      <div className="absolute inset-1.5 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover-lift transition-elegant">
                      <div className="space-y-6">
                        {/* Period header */}
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                          <Clock className="h-5 w-5 text-primary" />
                          <Badge 
                            variant={periodGroup.current ? "default" : "secondary"}
                            className="font-sans uppercase tracking-wide text-sm"
                          >
                            {periodGroup.period}
                          </Badge>
                        </div>

                        {/* Experiences in this period */}
                        <div className="space-y-4">
                          {periodGroup.experiences.map((experience, expIndex) => (
                            <div key={expIndex} className="space-y-3">
                              <h3 className="text-xl text-left font-serif font-light text-primary leading-tight">
                                {experience.institution}
                              </h3>

                              <div className="flex items-start gap-3">
                                <Users className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                                  {experience.role}
                                </p>
                              </div>

                              {/* Separator between experiences in same period */}
                              {expIndex < periodGroup.experiences.length - 1 && (
                                <div className="w-full h-px bg-gray-100 my-4"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-serif font-light text-primary mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("certifications.education.title")}
          </motion.h2>

          <div className="space-y-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <div
                  className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="rounded-lg overflow-hidden shadow-2xl hover-lift transition-elegant">
                    <ImageWithFallback
                      src={
                        index === 0
                          ? saltareCertificate
                          : index === 1
                            ? technicalDanceCertificate
                            :  index === 2
                              ? belasArtesCertificate
                              : dancerImage
                      }
                      alt={`${cert.institution} certification - ${index === 0 ? "Official certificate of completion from Saltare Dance Training Program for Bianca Marcela Silva" : index === 1 ? "Official Professional Qualification certificate in Scenic Arts - Dance Specialization from Belas Artes Joinville for Bianca Marcela da Silva" : index === 2 ? "Official Technical Course in Dance diploma from Estado de Santa Catarina for Bianca Marcela da Silva" : "Bianca Marcela dance training"}`}
                      className="w-full h-full object-contain grayscale"
                    />
                  </div>
                </div>
                
                <div
                  className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Badge
                        variant="outline"
                        className="font-sans uppercase tracking-wide"
                      >
                        {cert.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-sans">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="text-3xl font-serif font-light text-primary leading-tight">
                      {cert.title}
                    </h3>

                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="h-5 w-5" />
                        <span className="font-sans text-lg">
                          {cert.institution}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5" />
                        <span className="font-sans">
                          {cert.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-light leading-relaxed text-lg">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-serif font-light text-primary mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
{t('certifications.artisticTraining.title')}
          </motion.h2>

          <div className="space-y-16">
            {/* Jazz */}
            <div>
              <motion.h3
                className="text-2xl font-serif font-light text-primary mb-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
{t('certifications.artisticTraining.jazz.title')}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  t('certifications.training.jazz.1'),
                  t('certifications.training.jazz.2'),
                  t('certifications.training.jazz.3'),
                  t('certifications.training.jazz.6'),
                  t('certifications.training.jazz.7'),
                  t('certifications.training.jazz.10'),
                  t('certifications.training.jazz.11'),
                  t('certifications.training.jazz.4'),
                  t('certifications.training.jazz.8'),
                ].map((workshop, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 rounded-lg hover-lift transition-elegant"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm leading-tight">
                      {workshop}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dança Contemporânea */}
            <div>
              <motion.h3
                className="text-2xl font-serif font-light text-primary mb-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
{t('certifications.artisticTraining.contemporary.title')}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  t('certifications.training.contemporary.1'),
                  t('certifications.training.contemporary.2'),
                  t('certifications.training.contemporary.9'),
                  t('certifications.training.contemporary.10'),
                ].map((workshop, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 rounded-lg hover-lift transition-elegant"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm leading-tight">
                      {workshop}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Danças Urbanas */}
            <div>
              <motion.h3
                className="text-2xl font-serif font-light text-primary mb-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
{t('certifications.artisticTraining.urban.title')}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {[
                  t('certifications.training.urban.1'),
                  t('certifications.training.urban.2'),
                  t('certifications.training.urban.3'),
                  t('certifications.training.urban.4'),
                  t('certifications.training.urban.5'),
                  t('certifications.training.urban.6'),
                  t('certifications.training.urban.7'),
                  t('certifications.training.jazz.5'),
                  t('certifications.training.jazz.9'),
                ].map((workshop, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 rounded-lg hover-lift transition-elegant"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm leading-tight">
                      {workshop}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedagogia e Pesquisa */}
            <div>
              <motion.h3
                className="text-2xl font-serif font-light text-primary mb-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
{t('certifications.artisticTraining.pedagogy.title')}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  t('certifications.training.pedagogy.1'),
                  t('certifications.training.pedagogy.2'),
                  t('certifications.training.pedagogy.3'),
                ].map((workshop, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 rounded-lg hover-lift transition-elegant"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm leading-tight">
                      {workshop}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light leading-tight">
              {t("certifications.cta.title")}
            </h2>

            <p className="text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
              {t("certifications.cta.description")}
            </p>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="px-8 py-4 h-auto font-sans bg-white text-primary hover:bg-white/90"
            >
              <a
                href="https://wa.me/5547997359210?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('danceWorks.cta.bookPerformance')}
              </a>
            </Button>

            {/* <Button
              onClick={handleNavigateToPlans}
              size="lg"
              variant="secondary"
              className="font-sans tracking-wide px-8 py-4 text-base hover-lift transition-elegant"
            >
              {t("certifications.cta.button")}
            </Button> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}