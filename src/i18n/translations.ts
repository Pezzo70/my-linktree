export interface BioTranslations {
  bio: string;
}

export interface Translations {
  bio: BioTranslations;
}

export const translations: Record<string, Translations> = {
  en: {
    bio: {
      bio: "Software Engineer. Building amazing things one line at a time."
    }
  },
  ptbr: {
    bio: {
      bio: "Desenvolvedor de Software. Construindo coisas incríveis uma linha por vez."
    }
  }
};

export const defaultLanguage = 'en';
export const supportedLanguages = ['en', 'ptbr'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];
