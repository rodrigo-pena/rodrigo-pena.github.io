export type ProfileLink = {
  href: string;
  label: string;
};

export const siteConfig = {
  siteUrl: "https://rodrigo-pena.github.io",
  owner: {
    author: "Rodrigo C. G. Pena",
    headline: "Computer Science Researcher & Data Scientist",
    description:
      "Rodrigo C. G. Pena • Website",
    email: {
      handle: "rcgp",
      provider: "proton.me"
    },
    logo: "/images/me.png",
    tagline: "(ʁoˈdɾiɡu ˈse ˈɡe ˈpɛnɐ)"
  },
  // For Google Search Console verification
  googleVerify: "Z1RJE6QhVYyI4ypHTDgE1oOIt_VPwNrwgxUK7wv1f38",
  primaryLinks: [
    {
      href: "https://ceda.unibas.ch/",
      label: "Projects"
    },
    {
      href: "https://scholar.google.ch/citations?user=goU84qYAAAAJ&hl=en",
      label: "Publications"
    },
    {
      href: "https://gitlab.com/rodrigocgpena",
      label: "Code"
    }
  ] as ProfileLink[],
  secondaryLinks: [
    {
      href: "https://github.com/rodrigo-pena",
      label: "GitHub"
    },
    {
      href: "https://orcid.org/0000-0002-9010-2830",
      label: "ORCID"
    },
    {
      href: "https://zenodo.org/search?page=1&size=20&q=creators.orcid:0000-0002-9010-2830",
      label: "Zenodo"
    },
    {
      href: "https://www.linkedin.com/in/rodrigocgpena/?locale=en_US",
      label: "LinkedIn"
    },
    {
      href: "https://mathstodon.xyz/@gonzpen",
      label: "Mastodon"
    }
  ] as ProfileLink[]
};
