export type NavLink = {
  label: string;
  href: string;
};

type NonEmptyArray<T> = [T, ...T[]];

export const navLinks: NonEmptyArray<NavLink> = [
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Request Demo", href: "/request-demo" },
];

export const digitalSolutions: NavLink[] = [
  { label: "Manusia AI", href: "/digital-solutions/manusia-ai" },
  { label: "Nanonets", href: "/digital-solutions/nanonets" },
  { label: "Brilian AI", href: "/digital-solutions/brilian-ai" },
  { label: "Cyclone", href: "/digital-solutions/cyclone" },
  { label: "Tilaka", href: "/digital-solutions/tilaka" },
  { label: "Docuflo", href: "/digital-solutions/docuflo" },
  { label: "InTalks", href: "/digital-solutions/intalks" },
  { label: "Syclus", href: "/digital-solutions/syclus" },
  { label: "Disply", href: "/digital-solutions/disply" },
  { label: "OrionStar", href: "/digital-solutions/orionstar" },
];

export const itSolutions: NavLink[] = [
  { label: "IT Infrastructure", href: "/it-solutions/it-infrastructure" },
  { label: "Network Security", href: "/it-solutions/network-security" },
  { label: "Cyber Security", href: "/it-solutions/cyber-security" },
  { label: "Internet of Things", href: "/it-solutions/internet-of-things" },
  { label: "Unified Communication", href: "/it-solutions/unified-communication" },
  { label: "Physical Security System", href: "/it-solutions/physical-security-system" },
  { label: "Third Party Maintenance", href: "/it-solutions/third-party-maintenance" },
  // { label: "PC & Laptop", href: "/it-solutions/pc-laptop" },
];
