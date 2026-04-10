export type SocialLink = {
  href: string;
  iconClass: string;
  label: string;
};

export const siteConfig = {
  siteUrl: "https://rodrigo-pena.github.io",
  owner: {
    author: "Rodrigo C. G. Pena",
    description: "Personal Website",
    email: {
      handle: "rcgp",
      provider: "proton.me"
    },
    logo: "/images/me.png",
    tagline: "(ʁoˈdɾiɡu ˈse ˈɡe ˈpɛnɐ)"
  },
  // For Google Search Console verification
  googleVerify: "Z1RJE6QhVYyI4ypHTDgE1oOIt_VPwNrwgxUK7wv1f38",
  socialLinks: [
    {
      href: "https://github.com/rodrigo-pena",
      iconClass: "fa-brands fa-github fa-lg main-list-item-icon",
      label: "GitHub"
    },
    {
      href: "https://gitlab.com/rodrigocgpena",
      iconClass: "fa-brands fa-gitlab fa-lg main-list-item-icon",
      label: "GitLab"
    },
    {
      href: "https://orcid.org/0000-0002-9010-2830",
      iconClass: "fa-brands fa-orcid fa-lg main-list-item-icon",
      label: "ORCID"
    },
    {
      href: "https://scholar.google.ch/citations?user=goU84qYAAAAJ&hl=en",
      iconClass: "ai ai-google-scholar ai-lg main-list-item-icon",
      label: "Google Scholar"
    },
    {
      href: "https://zenodo.org/search?page=1&size=20&q=creators.orcid:0000-0002-9010-2830",
      iconClass: "ai ai-zenodo ai-lg main-list-item-icon",
      label: "Zenodo"
    },
    {
      href: "https://www.linkedin.com/in/rodrigocgpena/?locale=en_US",
      iconClass: "fa-brands fa-linkedin-in fa-lg main-list-item-icon",
      label: "LinkedIn"
    },
    {
      href: "https://mathstodon.xyz/@gonzpen",
      iconClass: "fa-brands fa-mastodon fa-lg main-list-item-icon",
      label: "Mastodon"
    }
  ] as SocialLink[]
};
