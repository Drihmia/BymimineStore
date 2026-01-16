'use client';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import TikTokIcon from '@/components/icons/tiktok-icon';
import { useLanguage } from '@/hooks/use-language';

const SocialLinks = () => {
  const { translations } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/bymiminestore1/" target="_blank" rel="noopener noreferrer" aria-label={translations.social.instagram}>
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{translations.social.instagram}</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.tiktok.com/@bymiminestore1" target="_blank" rel="noopener noreferrer" aria-label={translations.social.tiktok}>
              <TikTokIcon className="h-5 w-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{translations.social.tiktok}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default SocialLinks;
