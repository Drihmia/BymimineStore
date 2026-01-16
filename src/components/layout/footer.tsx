'use client';

import { useLanguage } from '@/hooks/use-language';
import SocialLinks from '../social-links';

const Footer = () => {
    const { translations } = useLanguage();

    return (
        <footer className="bg-primary/20">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        {translations.footer.copyright}
                    </p>

                    <div className="mt-4 sm:mt-0">
                        <SocialLinks />
                    </div>
                </div>
                 <p className="text-center text-sm text-muted-foreground mt-4 font-headline">
                    {translations.slogan}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
