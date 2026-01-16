'use client';

import WhatsAppIcon from './icons/whatsapp-icon';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useLanguage } from '@/hooks/use-language';

const WhatsAppFAB = () => {
  const { translations, language } = useLanguage();
  const fabPosition = language === 'ar' ? 'left-4' : 'right-4';
  
  const whatsappNumber = "212781939612";
  const whatsappMessage = translations.social.whatsappMessage || "Hello! I would like to place an order.";

  return (
    <div className={`fixed bottom-4 ${fabPosition} z-50`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild size="icon" className="w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={translations.social.whatsapp}
            >
              <WhatsAppIcon className="w-7 h-7" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side={language === 'ar' ? 'left' : 'right'}>
          <p>{translations.social.whatsapp}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default WhatsAppFAB;
