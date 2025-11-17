import { Heart, Target, Users, Calendar, MapPin, Share2, DollarSign, Plane, Music, Camera, Home, Car } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoEmbed } from './VideoEmbed';
import { useTranslation } from './i18n/TranslationContext';

export function Patron() {
  const { t, language } = useTranslation();
  const fundingGoal = 125000;
  const currentFunding = 43750;
  const percentageFunded = (currentFunding / fundingGoal) * 100;
  const daysLeft = 45;
  const backers = 127;

  const formatCurrency = (amount: number) => {
    return `R$ ${amount.toLocaleString('pt-BR')}`;
  };

  const performanceDetails = {
    venue: t('patron.venue'),
    location: t('patron.location'),
    dates: t('patron.dates'),
    shows: [
      {
        date: language === 'pt' ? '21 de Maio' : 'May 21',
        time: '19:30',
        program: language === 'pt' ? 'Gala de Abertura' : 'Opening Gala'
      },
      {
        date: language === 'pt' ? '22 de Maio' : 'May 22',
        time: '20:00',
        program: language === 'pt' ? 'Repertório Clássico' : 'Classical Repertoire'
      },
      {
        date: language === 'pt' ? '23 de Maio' : 'May 23',
        time: '15:00',
        program: language === 'pt' ? 'Matinê Especial' : 'Special Matinee'
      }
    ]
  };

  const expenses = [
    { 
      icon: Plane, 
      label: language === 'pt' ? 'Passagens Aéreas' : 'Plane Tickets', 
      amount: 40000, 
      color: 'bg-slate-800' 
    },
    { 
      icon: Music, 
      label: language === 'pt' ? 'Taxa do Workshop de Dança' : 'Dance Workshop Fee', 
      amount: 37500, 
      color: 'bg-slate-800' 
    },
    { 
      icon: Home, 
      label: language === 'pt' ? 'Hospedagem' : 'Accommodation', 
      amount: 25000, 
      color: 'bg-slate-800' 
    },
    { 
      icon: Car, 
      label: language === 'pt' ? 'Alimentação e Transporte Local' : 'Food and Local Transport', 
      amount: 22500, 
      color: 'bg-slate-800' 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Dramatic Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-fixed bg-center filter saturate-[0.7] brightness-75 contrast-110 sepia-[0.15]"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1690747072874-bcff22341e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBYmJheWUlMjBkZSUyME5ldW0lQzMlQkNuc3RlciUyMEx1eGVtYm91cmclMjB0aGVhdGVyfGVufDF8fHx8MTc1NTc3NDY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </div>

        <div className="relative min-h-screen flex items-center py-20 lg:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div 
                className="space-y-8 text-white"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="space-y-6 pt-16 lg:pt-0">
                  <Badge variant="secondary" className="text-sm font-sans uppercase tracking-wider px-4 py-2 bg-white/20 text-white border-white/30">
                    {t('patron.badge')}
                  </Badge>
                  
                  <h1 className="text-6xl lg:text-8xl font-serif font-light text-white leading-[0.85] tracking-tight">
                    {t('patron.title')}
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl">
                    {t('patron.subtitle')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-8 lg:pb-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 h-auto font-medium">
                      <Heart className="mr-2 h-4 w-4" />
                      {t('patron.funding.support')}
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="px-8 py-4 h-auto font-medium bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      {t('patron.funding.share')}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Funding Progress Card */}
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-white" />
                  <span className="font-serif font-light text-xl text-white">{t('patron.funding.title')}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-serif font-light text-white">{formatCurrency(currentFunding)}</span>
                    <span className="text-sm text-white/80 font-sans">
                      {t('patron.funding.of')} {formatCurrency(fundingGoal)}
                    </span>
                  </div>
                  <Progress value={percentageFunded} className="h-3 bg-white/20" />
                  <div className="text-center text-sm text-white/80 font-sans">
                    {Math.round(percentageFunded)}% {t('patron.funding.funded')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-light text-white">{backers}</div>
                    <div className="text-xs text-white/80 font-sans uppercase tracking-wide">{t('patron.funding.backers')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-light text-white">{daysLeft}</div>
                    <div className="text-xs text-white/80 font-sans uppercase tracking-wide">{t('patron.funding.daysLeft')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Story with Video */}
      <section className="py-16 lg:py-32 bg-white">
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
                  {t('patron.story.title')}
                </h2>
                <div className="space-y-4 text-muted-foreground font-light text-lg leading-relaxed">
                  <p>{t('patron.story.paragraph1')}</p>
                  <p>{t('patron.story.paragraph2')}</p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg" className="px-8 py-4 h-auto font-medium">
                  {t('patron.story.learnMore')}
                </Button>
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
                title="Luxembourg Performance Campaign Video"
                className="hover-lift transition-elegant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Schedule */}
      <section className="py-16 lg:py-32 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-serif font-light text-primary mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('patron.schedule.title')}
          </motion.h2>

          {/* Venue Highlight */}
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-3xl font-serif font-light text-primary">{performanceDetails.venue}</h3>
            <div className="text-lg text-muted-foreground font-sans">{performanceDetails.location}</div>
            <div className="text-xl font-medium text-primary font-sans">{performanceDetails.dates}</div>
          </motion.div>

          {/* Performance Schedule */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {performanceDetails.shows.map((show, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg hover-lift transition-elegant"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <div className="text-lg font-serif font-light text-primary">{show.date}</div>
                  <div className="text-2xl font-serif font-light">{show.time}</div>
                  <div className="text-sm text-muted-foreground font-sans">{show.program}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-primary">
              {language === 'pt' ? 'Como Seu Apoio Ajuda' : 'How Your Support Helps'}
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              {language === 'pt' 
                ? 'Cada contribuição vai diretamente para tornar esta performance em Luxemburgo uma realidade. Veja como seu apoio será usado.'
                : 'Every contribution goes directly toward making this Luxembourg performance a reality. Here\'s how your support will be used.'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expenses.map((expense, index) => {
              const Icon = expense.icon;
              const percentage = (expense.amount / fundingGoal) * 100;
              
              return (
                <motion.div
                  key={index}
                  className="text-center space-y-6 p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 ${expense.color} rounded-full flex items-center justify-center mx-auto`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-serif font-light text-lg text-primary leading-tight">{expense.label}</h3>
                    <div className="text-2xl font-serif font-light">{formatCurrency(expense.amount)}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Support Section */}
      <section className="py-16 lg:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light leading-tight">
              {t('patron.thankYou.title')}
            </h2>
            <p className="text-xl font-light leading-relaxed opacity-90">
              {t('patron.thankYou.description')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[125, 250, 500, 1250].map((amount) => (
                <motion.div
                  key={amount}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full font-sans bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    R$ {amount}
                  </Button>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <Button variant="secondary" size="lg" className="px-8 py-4 h-auto font-sans bg-white text-primary hover:bg-white/90">
                <DollarSign className="mr-2 h-4 w-4" />
                {t('patron.funding.customAmount')}
              </Button>
            </motion.div>
            
            <div className="flex items-center justify-center space-x-3 text-white/80 font-sans pt-8">
              <Users className="h-5 w-5" />
              <span>{t('patron.thankYou.join')} {backers} {t('patron.thankYou.supporters')}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}