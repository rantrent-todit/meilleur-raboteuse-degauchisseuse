export interface SiteConfig {
  siteName: string;
  siteDomain: string;
  tagline: string;
  description: string;
  contactEmail: string;
  affiliate: {
    amazonTag: string;
    disclaimer: string;
  };
  theme: {
    primaryColor: string;
    primaryHoverColor: string;
    accentColor: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "L'Expert Raboteuse Dégauchisseuse",
  siteDomain: "https://meilleur-raboteuse-degauchisseuse.fr",
  tagline: "Le guide comparatif indépendant pour choisir votre combiné bois d'atelier",
  description: "Comparez les meilleures raboteuses dégauchisseuses pour le bois. Guides d'achat indépendants, tests complets et avis d'experts pour équiper votre atelier.",
  contactEmail: "contact@meilleur-raboteuse-degauchisseuse.fr",
  affiliate: {
    amazonTag: "amazonwp0b-21",
    disclaimer: "En tant que Partenaire Amazon, ce site réalise un bénéfice sur les achats remplissant les conditions requises."
  },
  theme: {
    primaryColor: "#1E293B",
    primaryHoverColor: "#0F172A",
    accentColor: "#EA580C"
  }
};
