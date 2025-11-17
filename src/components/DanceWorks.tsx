import { Calendar, MapPin, Users, ArrowRight, Clock, Award, Play, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoEmbed } from './VideoEmbed';
import { useTranslation } from './i18n/TranslationContext';
import stagePerformanceImage from 'figma:asset/cd67a60c78da33c54a91eb2bea0750afe33df02c.png';
import workshopImage from 'figma:asset/566b8773d5feace6f6384d5243467aade7190b60.png';
import jazzFunkWorkshopImage from 'figma:asset/50f03a37ad9ad3c0504dc2073892f8acb6a83fd4.png';

export function DanceWorks() {
  const { t } = useTranslation();

  // Handle hash navigation on component mount and when hash changes
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      console.log('DanceWorks: Hash detected:', hash);
      
      if (hash && (hash === 'works' || hash === 'workshops')) {
        // Delay to ensure the component is fully rendered
        const timeoutId = setTimeout(() => {
          const element = document.getElementById(hash);
          console.log('DanceWorks: Looking for element:', hash, element);
          
          if (element) {
            console.log('DanceWorks: Scrolling to element:', element);
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          } else {
            console.log('DanceWorks: Element not found:', hash);
          }
        }, 300);

        return () => clearTimeout(timeoutId);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

   const awards = [
    {
      title: t(
        "certifications.awards.award2.title",
        "Obra: Clara Chama Silente",
      ),
      organization: t(
        "certifications.awards.award2.organization",
        "Conjunto Jazz Sênior",
      ),
      year: "2025",
      type: t("certifications.awards.award2.type", "Solista"),
      description: t(
        "certifications.awards.award2.description",
      ),
      videoUrl: "https://youtu.be/0HEjy8h5GN4",
      videoThumbnail: "https://img.youtube.com/vi/0HEjy8h5GN4/maxresdefault.jpg",
    },
    {
      title: t(
        "certifications.awards.award3.title",
        "Obra: Sob os olhos de Almodóvar",
      ),
      organization: t(
        "certifications.awards.award3.organization",
        "Solo Feminino Jazz",
      ),
      year: "2024",
      type: t("certifications.awards.award3.type", "Solista"),
      description: t(
        "certifications.awards.award3.description",
        "🏆 Primeiro Lugar no Premio Curitiba em Dança 2024\\n\\n🏆 Primeiro Lugar no Festival Bravos Excellence 2024 com indicação a melhor bailarina do festival\\n\\n🏆 Terceiro Lugar no Festival da Sapatilha do Festival de Dança de Joinville",
      ),
      videoUrl: "https://youtu.be/C60YbAiITU8",
      videoThumbnail: "https://img.youtube.com/vi/C60YbAiITU8/maxresdefault.jpg",
    },
    {
      title: t(
        "certifications.awards.award1.title",
        "Obra: O que te torna humano...",
      ),
      organization: t(
        "certifications.awards.award1.organization",
        "Conjunto Jazz Sênior",
      ),
      year: "2025",
      type: t(
        "certifications.awards.award1.type",
        "Bailarina do Conjunto",
      ),
      description: t(
        "certifications.awards.award1.description",
        "🏆 Primeiro Lugar no Festival de Dança de Joinville 2025\\n\\n🏆 Indicação de Melhor coreografia e melhor coreógrafo do festival",
      ),
      videoUrl: "https://youtu.be/hRcPk5EQe1k",
      videoThumbnail: "https://img.youtube.com/vi/hRcPk5EQe1k/maxresdefault.jpg",
    },
    {
      title: t(
        "certifications.awards.award4.title",
        "Obra: Into the led",
      ),
      organization: t(
        "certifications.awards.award4.organization",
        "Conjunto Jazz Sênior",
      ),
      year: "2024",
      type: t(
        "certifications.awards.award4.type",
        "Bailarina do Conjunto",
      ),
      description: t(
        "certifications.awards.award4.description",
        "🏆 Primeiro Lugar no Festival de Dança de Joinville 2024\\n\\n🏆 Premiação especial de Ambientalização",
      ),
      videoUrl: "https://youtu.be/lfDovz_reGM",
      videoThumbnail: "https://img.youtube.com/vi/lfDovz_reGM/maxresdefault.jpg",
    },
    {
      title: t(
        "certifications.awards.award6.title",
        "Obra: Cela",
      ),
      organization: t(
        "certifications.awards.award6.organization",
        "Conjunto jazz sênior",
      ),
      year: "2023",
      type: t(
        "certifications.awards.award6.type",
        "Bailarina do Conjunto",
      ),
      description: t(
        "certifications.awards.award6.description",
        "🏆 Primeiro Lugar no Festival de Dança de Joinville 2023",
      ),
      videoUrl: "https://youtu.be/grPB9bNTAkM",
      videoThumbnail: "https://img.youtube.com/vi/grPB9bNTAkM/maxresdefault.jpg",
    },
  ];

  const featuredWorks = [
    {
      title: "Swan Lake - Principal Dancer",
      company: "Metropolitan Ballet Company",
      year: "2023",
      location: "Lincoln Center, New York",
      description: "Lead role as Odette/Odile in this classic ballet production. A career-defining performance that showcased technical precision and emotional depth.",
      videoId: "dQw4w9WgXcQ",
      category: "Ballet"
    },
    {
      title: "Contemporary Voices",
      company: "Avant-Garde Dance Collective", 
      year: "2023",
      location: "Kennedy Center, Washington DC",
      description: "Original contemporary piece exploring themes of identity and transformation. Choreographed in collaboration with emerging artists.",
      videoId: "dQw4w9WgXcQ",
      category: "Contemporary"
    },
    {
      title: "The Nutcracker Suite",
      company: "Regional Ballet Theater",
      year: "2022", 
      location: "Chicago Theater District",
      description: "Featured soloist in the Sugar Plum Fairy variation. This holiday classic allowed for technical showcase and audience connection.",
      videoId: "dQw4w9WgXcQ",
      category: "Ballet"
    }
  ];

  const pastWorkshops = [
    {
      title: t('danceWorks.workshop1.title'),
      date: t('danceWorks.workshop1.date'),
      duration: t('danceWorks.workshop1.duration'),
      participants: t('danceWorks.workshop1.participants'),
      description: t('danceWorks.workshop1.description'),
      hasRecording: true,
      recordingUrl: "https://www.instagram.com/p/DM0ctDcODsi/",
      image: jazzFunkWorkshopImage
    },
    {
      title: t('danceWorks.workshop2.title'),
      date: t('danceWorks.workshop2.date'), 
      duration: t('danceWorks.workshop2.duration'),
      participants: t('danceWorks.workshop2.participants'),
      description: t('danceWorks.workshop2.description'),
      hasRecording: true,
      recordingUrl: "https://www.instagram.com/p/DHgWiABssSA/",
      image: workshopImage
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Dramatic Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={stagePerformanceImage}
            alt="Elegant dancer in flowing dress performing against dark background with warm string lights creating cinematic atmosphere"
            className="w-full h-full object-cover object-[50%_20%] filter saturate-[0.8] brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <motion.div 
                className="space-y-8 text-white"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-8xl font-serif font-light text-white leading-[0.85] tracking-tight">
                    {t('danceWorks.title')}
                  </h1>
                  
                  <p className="lg:text-2xl text-white/90 font-light leading-relaxed max-w-xl text-[20px]">
                    {t('danceWorks.subtitle')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Showcase */}
      <section className="py-32 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-serif font-light text-primary mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("certifications.awards.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center max-w-6xl">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="text-center space-y-6 p-8 bg-white rounded-lg shadow-lg hover-lift transition-elegant overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {/* Video Thumbnail Section */}
                {award.videoThumbnail && (
                  <div className="relative group cursor-pointer -m-8 mb-6" onClick={() => window.open(award.videoUrl, '_blank')}>
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img 
                        src={award.videoThumbnail}
                        alt={`Video thumbnail for ${award.title}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                     <motion.button
                        whiletap={{ scale: 0.9 }}
                        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white pointer-events-auto"
                      >
                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                      </motion.button>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="font-sans uppercase tracking-wide"
                  >
                    {award.type}
                  </Badge>

                  <h3 className="text-xl font-serif font-light text-primary leading-tight">
                    {award.title}
                  </h3>

                  <div className="space-y-2 text-muted-foreground">
                    <div className="font-sans">
                      {award.organization}
                    </div>
                    <div className="text-sm font-sans">
                      {award.year}
                    </div>
                  </div>

                  <div className="text-muted-foreground font-light leading-relaxed text-sm whitespace-pre-line">
                    {award.description}
                  </div>

                  {/* Watch Video Button */}
                  {award.videoUrl && (
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full font-sans mt-4"
                    >
                      <a
                        href={award.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PlayCircle className="mr-2 h-4 w-4" />
                        {t('danceWorks.watchPerformance')}
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-32 bg-gray-50/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-primary">
              {t('danceWorks.workshops.title')}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              {t('danceWorks.workshops.subtitle')}
            </p>
          </motion.div>

          {/* Past Workshops */}
          <div>
            <motion.h3 
              className="text-3xl font-serif font-light text-primary mb-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('workshops.past.title')}
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pastWorkshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover-lift transition-elegant overflow-hidden h-fit"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {workshop.image && (
                    <div className="w-full bg-gray-50 flex items-center justify-center">
                      <img 
                        src={workshop.image} 
                        alt={workshop.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  <div className="p-8 space-y-6">
                    <h4 className="text-xl font-serif font-light text-primary leading-tight">
                      {workshop.title}
                    </h4>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-4 w-4" />
                        <span className="font-sans">{workshop.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4" />
                        <span className="font-sans">{t('workshops.duration')}: {workshop.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4" />
                        <span className="font-sans">{t('workshops.participants')}: {workshop.participants}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-light leading-relaxed text-sm">
                      {workshop.description}
                    </p>
                    
                    {workshop.hasRecording && workshop.recordingUrl ? (
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full font-sans"
                      >
                        <a
                          href={workshop.recordingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PlayCircle className="mr-2 h-4 w-4" />
                          {t('workshops.viewRecording')}
                        </a>
                      </Button>
                    ) : workshop.hasRecording ? (
                      <Button variant="outline" className="w-full font-sans">
                        <PlayCircle className="mr-2 h-4 w-4" />
                        {t('workshops.viewRecording')}
                      </Button>
                    ) : (
                      <div className="text-center py-4 text-sm text-muted-foreground">
                        {t('workshops.recordingUnavailable')}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light leading-tight">
              {t('danceWorks.cta.title')}
            </h2>
            <p className="text-lg font-light leading-relaxed opacity-90">
              {t('danceWorks.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whiletap={{ scale: 0.98 }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}