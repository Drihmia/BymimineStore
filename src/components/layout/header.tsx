'use client';

import { useLanguage } from '@/hooks/use-language';
import SocialLinks from '@/components/social-links';
import { LanguageSwitcher } from '@/components/language-switcher';

const Header = () => {
  const { translations, language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline text-lg">
              {translations.brandName}
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
             <a href="/" className="flex items-center space-x-2">
                <span className="font-bold font-headline text-lg">
                    {translations.brandName}
                </span>
            </a>
          </div>
          <nav className="flex items-center gap-2">
            <SocialLinks />
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
