
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { flag, languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('language', languageCode);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="text-brand-brown hover:text-brand-orange">
          <span className="mr-2">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white">
        <div className="py-6">
          <h3 className="text-lg font-medium text-brand-brown mb-6 font-playfair">
            Choose Language
          </h3>
          <div className="space-y-2">
            {languages.map((language) => (
              <Button
                key={language.code}
                variant={i18n.language === language.code ? "default" : "ghost"}
                className={`w-full justify-start text-left ${
                  i18n.language === language.code 
                    ? "bg-brand-orange text-white" 
                    : "text-brand-brown hover:text-brand-orange hover:bg-brand-cream/20"
                }`}
                onClick={() => changeLanguage(language.code)}
              >
                <span className="mr-3 text-lg">{language.flag}</span>
                {language.name}
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LanguageSwitcher;
