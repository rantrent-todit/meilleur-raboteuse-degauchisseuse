export interface SiteConfig {
  siteName: string;
  siteDomain: string;
  tagline: string;
  description: string;
  contactEmail: string;
  // Métadonnées SEO prioritaires (optimisées sans branding)
  primaryKeyword?: string;
  homeSeoTitle?: string;
  homeH1?: string;
  homeTagline?: string;
  homeDescription?: string;
  affiliate: {
    amazonTag: string;
    disclaimer: string;
  };
  theme: {
    primaryColor: "#b45309",
    primaryHoverColor: "#92400e",
    accentColor: "#d97706"
  };
}

export const siteConfig: SiteConfig = {
  siteName: "L'Expert Raboteuse Dégauchisseuse",
  siteDomain: "https://meilleur-raboteuse-degauchisseuse.fr",
  tagline: "Le guide comparatif indépendant pour choisir votre combiné bois d'atelier",
  description: "Comparez les meilleures raboteuses dégauchisseuses pour le bois. Guides d'achat indépendants, tests complets et avis d'experts pour équiper votre atelier.",
  contactEmail: "contact@meilleur-raboteuse-degauchisseuse.fr",
  // Optimisation mot-clé principal "Meilleure raboteuse dégauchisseuse"
  primaryKeyword: "Meilleure raboteuse dégauchisseuse",
  homeSeoTitle: "Meilleure Raboteuse Dégauchisseuse : Comparatif, Tests & Guide",
  homeH1: "Meilleure Raboteuse Dégauchisseuse",
  homeTagline: "Le comparatif indépendant et guide d'achat pour équiper votre atelier bois",
  homeDescription: "Quelle est la meilleure raboteuse dégauchisseuse ? Comparez les modèles testés, découvrez notre podium et notre guide d'achat complet pour équiper votre atelier.",
  affiliate: {
    amazonTag: "amazonwp0b-21",
    disclaimer: "En tant que Partenaire Amazon, ce site réalise un bénéfice sur les achats remplissant les conditions requises."
  },
  theme: {
    primaryColor: "#0f172a",
    primaryHoverColor: "#1e293b",
    accentColor: "#ea580c"
  }
};
