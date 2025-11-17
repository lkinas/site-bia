import svgPaths from "../imports/svg-stwlaz7ujx";
import imgImage from "figma:asset/5a4d1faf8482073e50699ba573bf5dd90ccfdb2b.png";
import { useTranslation } from './i18n/TranslationContext';
import { Instagram, Mail, Music } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-[#1e293b]">
      <div
        aria-label="Woman dancing"
        className="bg-top bg-cover bg-gradient-to-b box-border content-stretch flex flex-col from-[#00000000] gap-[330px] h-[573px] items-center justify-center w-full lg:max-w-[1500px] lg:mx-auto p-0 relative shrink-0 to-[#25252599]"
        style={{ backgroundImage: `url('${imgImage}')` }}
      >
        {/* Social Links */}
        <motion.div 
          className="box-border content-stretch flex gap-10 h-10 items-center justify-center p-0 relative shrink-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.a
            aria-label="TikTok"
            className="group flex items-center justify-center w-7 h-7 cursor-pointer relative shrink-0 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full"
            href="https://www.tiktok.com/@biancamarceela"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              className="w-6 h-6 text-white/90 group-hover:text-white transition-colors duration-300" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
            </svg>
          </motion.a>
          <motion.a
            aria-label="Instagram"
            className="group flex items-center justify-center w-7 h-7 cursor-pointer relative shrink-0 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full"
            href="https://www.instagram.com/biancamarceela/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-300" />
          </motion.a>
          <motion.a
            aria-label="Email"
            className="group flex items-center justify-center w-7 h-7 cursor-pointer relative shrink-0 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full"
            href="https://wa.me/5547997359210?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-300" />
          </motion.a>
        </motion.div>

        {/* Brand and Location */}
        <motion.div 
          className="box-border content-stretch flex flex-col gap-2.5 items-center justify-end p-0 relative shrink-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Brand initials with updated typography to match navigation */}
          <motion.div 
            className="font-serif font-light relative shrink-0 text-[#f7f7f7] text-[80px] lg:text-[117px] text-nowrap tracking-wide leading-[0.85]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="block leading-[0.85] whitespace-pre">BM.</p>
          </motion.div>
          
          <div className="box-border content-stretch flex flex-col gap-[154px] items-center justify-center p-0 relative shrink-0 w-full">
            <motion.div 
              className="font-sans font-normal leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] text-center text-nowrap tracking-[-0.4px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="block leading-[1.4] whitespace-pre text-[rgba(199,202,207,1)] text-[12px]">
                <a
                  href="https://www.linkedin.com/in/lkinas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-[rgba(160,163,168,1)]"
                >
                  {t('footer.location.city')}
                </a>
                <br />
                {t('footer.location.country')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}