export interface CallToAction {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  icon?: AstroComponentFactory;
  ariaLabel?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: AstroComponentFactory;
  iconClass?: string;
  centerIcon?: boolean;
  image?: ImageMetadata;
  imageAlt?: string;
}

export type Value = Feature;

export interface RoomOption {
  price: number | string;
  description: string[];
  roomType: string;
  title: string;
  icon?: AstroComponentFactory;
}

export interface Service {
  title: string;
  description: string;
  icon: AstroComponentFactory;
}

export interface NavLink {
  text: string;
  href: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  containerClass?: string;
  classes?: Record<string, string>;
  animate?: boolean;
}

export interface HeadlineProps extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  titleAs?: string;
}

export interface HeroProps extends HeadlineProps {
  description?: string; // override or additional? Hero has description, Headline has subtitle. Hero has actions.
  actions?: string | CallToAction[];
  image?: ImageMetadata; // Just in case, though checked Hero.astro and it uses slots mostly or props.
  imageAlt?: string;
}

export interface FeaturesProps extends HeadlineProps {
  features?: Feature[];
  columns?: number; // Values has columns
}

export interface ContentProps extends HeadlineProps {
  content?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  items?: Feature[];
  isReversed?: boolean;
  isAfterContent?: boolean;
  description?: string[]; // Adding back description as string array for compatibility
  actions?: string | CallToAction[];
}

export interface ServiceListProps extends HeadlineProps {
  services?: Service[];
}

export interface ValuesProps extends HeadlineProps {
  items?: Value[];
  columns?: 1 | 2 | 3 | 4;
}

export interface PricingProps extends HeadlineProps {
  roomOptions: RoomOption[];
  description?: string[];
}
