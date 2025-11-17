import { ArrowRight, Heart, Users, Award, Star, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoEmbed } from './VideoEmbed';
import { useTranslation } from './i18n/TranslationContext';
import heroImage from 'figma:asset/3c2252ea30ac29b445c401d8f6ab9cbf0a11c2ae.png';
import performanceImage from 'figma:asset/0eed4dc2ec4a59a5669c4ae404d7d1c9a116d7b8.png';
import teachingImage from 'figma:asset/a17258406832873ad66622dc09098e642e0ff9fa.png';
import portraitImage from 'figma:asset/908f41517f29479cab6c580e3b5ce1f54ada7198.png';
import quoteBackgroundImage from 'figma:asset/eba75e8c4d512ebce480dd751721e08ce1961602.png';

export function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const testimonials = [
    {
      quote: t('home.about.paragraph3'),
      name: 'Gabi Troglio',
      role: t('home.gallery.artisticDirector')
    },
    {
      quote: t.language === 'pt' 
        ? 'As aulas com a Prof. Bia são sempre mais do que apenas uma aula. Ela faz a gente se sentir tão confortável, que conseguimos nos conectar com o nosso interior e esquecer de tudo o que está acontecendo lá fora. Entrei com muitas dificuldades, mas ela sempre acreditou no meu processo muito mais do que eu mesma. A Bia é uma profissional e uma artista incrível, não largo ela nunca mais!'
        : 'Classes with Prof. Bia are always more than just a class. She makes us feel so comfortable that we can connect with our inner selves and forget everything that\'s happening outside. I entered with many difficulties, but she always believed in my process much more than I did myself. Bia is an incredible professional and artist, I\'ll never let her go!',
      name: 'Débora Benetti',
      role: t.language === 'pt' ? 'Coordenadora administrativa e aluna' : 'Administrative Coordinator and Student'
    },
    {
      quote: t.language === 'pt'
        ? 'Dançar com a Bia é uma experiência extraordinária. Cada passo, cada movimento, é arte. Cada um da sua forma, no seu tempo mas todos inspirados pela paixão que ela exala pela dança. Não existe alguém que se encontre com a Bia e não sinta a necessidade de expressar essa arte linda e tão lapidada por ela. Uma profissional completa, mas além de tudo, um ser humano maravilhoso!'
        : 'Dancing with Bia is an extraordinary experience. Every step, every movement, is art. Each in their own way, in their own time, but all inspired by the passion she exudes for dance. There\'s no one who meets Bia and doesn\'t feel the need to express this beautiful art so refined by her. A complete professional, but above all, a wonderful human being!',
      name: 'Andrielle Przybysewski',
      role: t.language === 'pt' ? 'Analista de importação e aluna' : 'Import Analyst and Student'
    }
  ];
  
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

  return (
    <div className="min-h-screen">
      {/* Dramatic Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Dramatic dance performance with atmospheric lighting and artistic composition"
            className="w-full h-full scale-[1.5] md:scale-[1.1] object-cover object-[30%_0%] md:object-[100%_40%] filter saturate-[0.5] brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-end md:items-center">
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
                    {t('home.hero.title')}
                  </h1>
                  
                  <p className="text-white/90 font-light leading-relaxed max-w-2xl text-xl text-[16px]">
                    {t('home.hero.description')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  {/* <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 px-8 py-4 h-auto font-medium w-52"
                      onClick={handleNavigateToPlans}
                    >
                      {t('home.hero.bookClass')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div> */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whiletap={{ scale: 0.98 }}
                  >
                    <Link to="/works">
                      <Button 
                        size="lg" 
                        className="px-8 py-4 h-auto font-medium bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 w-52"
                      >
                        {t('home.hero.myWork')}
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-serif font-light text-primary leading-tight">
                  {t('home.video.title')}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed text-[16px]">
                  {t('home.video.description')}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whiletap={{ scale: 0.98 }}
              >
                <Link to="/works">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 h-auto font-medium"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {t('home.video.watchFull')}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <VideoEmbed
                videoId="0HEjy8h5GN4"
                title="Clara Chama Silente"
                className="hover-lift transition-elegant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetrical Layout */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              className="lg:col-span-7 space-y-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-6xl font-serif font-light text-primary leading-tight">
                  {t('home.about.title')}
                </h2>
                <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
                  <p className="text-[16px]">{t('home.about.paragraph1')}</p>
                  <p className="text-[16px]">{t('home.about.paragraph2')}</p>
                  <p className="text-[16px]">{t('home.about.paragraph4')}</p>
                </div>
              </div>

              {/* Image Gallery Grid */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[3/4] rounded-lg overflow-hidden hover-lift transition-elegant relative group">
                    <ImageWithFallback
                      src={teachingImage}
                      alt={t('home.gallery.teachingAltText')}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Image caption pill */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <p className="text-[14px] font-[Cormorant_Garamond] font-medium text-gray-800 leading-tight">
                          {t('home.gallery.teachingCaption')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-serif font-light text-primary">{t('home.gallery.teaching')}</div>
                    <div className="text-sm text-muted-foreground font-sans">{t('home.gallery.teachingDesc')}</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-6 pt-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[3/4] rounded-lg overflow-hidden hover-lift transition-elegant relative group">
                    <ImageWithFallback
                      src={performanceImage}
                      alt={t('home.gallery.performanceAltText')}
                      className="w-full h-full object-cover brightness-125 transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Image caption pill */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <p className="text-[14px] font-[Cormorant_Garamond] font-medium text-gray-800 leading-tight">
                          {t('home.gallery.performanceCaption')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-serif font-light text-primary">{t('home.gallery.performing')}</div>
                    <div className="text-sm text-muted-foreground font-sans">{t('home.gallery.performingDesc')}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl hover-lift transition-elegant relative group">
                <ImageWithFallback
                  src={portraitImage}
                  alt={t('home.gallery.portraitAltText')}
                  className="w-full h-full object-cover object-center grayscale scale-150 transition-transform duration-400 group-hover:scale-170"
                />
                {/* Image caption pill */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <p className="text-[14px] font-[Cormorant_Garamond] font-medium text-gray-800 leading-tight">
                      {t('home.gallery.portraitCaption')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                  <Heart className="h-4 w-4 text-gray-400" />
                </div>
                
                {/* Testimonial Carousel */}
                <div className="relative">
                  {/* Content Container - Fixed height for largest testimonial */}
                  <div className="min-h-[280px] flex items-center justify-center">
                    <motion.div
                      key={currentTestimonialIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="space-y-6"
                    >
                      <p className="text-muted-foreground font-light italic leading-relaxed text-left">
                        "{currentTestimonialIndex === 0 ? t('home.testimonials.gabi.quote') : 
                          currentTestimonialIndex === 1 ? t('home.testimonials.debora.quote') : 
                          t('home.testimonials.andrielle.quote')}"
                      </p>
                      <div className="pt-4">
                        <div className="text-lg font-serif font-light text-primary text-left">
                          {currentTestimonialIndex === 0 ? t('home.testimonials.gabi.name') : 
                           currentTestimonialIndex === 1 ? t('home.testimonials.debora.name') : 
                           t('home.testimonials.andrielle.name')}
                        </div>
                        <div className="text-sm text-muted-foreground font-sans text-left">
                          {currentTestimonialIndex === 0 ? t('home.testimonials.gabi.role') : 
                           currentTestimonialIndex === 1 ? t('home.testimonials.debora.role') : 
                           t('home.testimonials.andrielle.role')}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Navigation Dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonialIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonialIndex
                            ? 'bg-gray-600 w-6'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={t.language === 'pt' ? `Ir para depoimento ${index + 1}` : `Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative min-h-[700px] overflow-hidden flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={quoteBackgroundImage}
            alt="Bianca Marcela performing on stage with dramatic lighting"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <motion.div 
            className="text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-serif font-light text-white leading-tight drop-shadow-lg text-left">
              {t('home.quote.main')}
            </p>
          </motion.div>
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
            <p className="font-light leading-relaxed opacity-90 text-[16px]">
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

      {/* Class Offerings - Creative Layout */}
      {/* <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-serif font-light text-primary">
              {t('home.pricing.title')}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              {t('home.pricing.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

            <motion.div 
              className="bg-white p-8 lg:p-10 border border-gray-200 rounded-lg hover-lift transition-elegant"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-light text-primary mb-4">{t('home.pricing.starter.title')}</h3>
                  <div className="space-y-2">
                    <div className="text-5xl font-serif font-light">R$ 900</div>
                    <div className="text-sm text-muted-foreground font-sans">{t('home.pricing.starter.classes')}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-sans text-muted-foreground">{t('home.pricing.starter.feature1')}</div>
                  <div className="text-sm font-sans text-muted-foreground">{t('home.pricing.starter.feature2')}</div>
                  <div className="text-sm font-sans text-muted-foreground">{t('home.pricing.starter.feature3')}</div>
                </div>

                <Button variant="outline" className="w-full">
                  {t('home.pricing.starter.cta')}
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-primary text-white p-8 lg:p-10 rounded-lg transform lg:scale-105 lg:-translate-y-4 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <Badge className="bg-white text-primary mb-4">{t('home.pricing.professional.badge')}</Badge>
                  <h3 className="text-2xl font-serif font-light mb-4">{t('home.pricing.professional.title')}</h3>
                  <div className="space-y-2">
                    <div className="text-5xl font-serif font-light">R$ 1.600</div>
                    <div className="text-sm opacity-80 font-sans">{t('home.pricing.professional.classes')}</div>
                    <div className="text-xs text-green-400 font-semibold font-sans">{t('home.pricing.professional.save')}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-sans opacity-90">{t('home.pricing.professional.feature1')}</div>
                  <div className="text-sm font-sans opacity-90">{t('home.pricing.professional.feature2')}</div>
                  <div className="text-sm font-sans opacity-90">{t('home.pricing.professional.feature3')}</div>
                  <div className="text-sm font-sans opacity-90">{t('home.pricing.professional.feature4')}</div>
                </div>

                <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  {t('home.pricing.professional.cta')}
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 lg:p-10 border border-gray-200 rounded-lg hover-lift transition-elegant"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-light text-primary mb-4">{t('home.pricing.elite.title')}</h3>
                  <div className="space-y-2">
                    <div className="text-5xl font-serif font-light">R$ 6.000</div>
                    <div className="text-sm text-muted-foreground font-sans">{t('home.pricing.elite.classes')}</div>
                    <div className="text-xs text-green-600 font-semibold font-sans">{t('home.pricing.elite.save')}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-sans text-muted-foreground">{t('home.pricing.elite.feature1')}</div>
                  <div className="text-sm font-sans text-muted-foreground">{t('home.pricing.elite.feature2')}</div>
                  <div className="text-sm font-sans text-muted-foreground">{t('home.pricing.elite.feature3')}</div>
                  <div className="text-sm font-sans text-muted-foreground">{t('home.pricing.elite.feature4')}</div>
                </div>

                <Button variant="outline" className="w-full">
                  {t('home.pricing.elite.cta')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}