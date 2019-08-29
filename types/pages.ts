export interface About {
  firstName: string;
  lastName: string;
  role: string;
  city: string;
  state: string;
  bio: string;
  twitterHandle: string;
  companyLogo: string;
  almaMaterLogo: string;
}

export interface Work {
  name: string;
  icon: string;
  to: string;
}

export interface Writing {
  title: string;
  date: string;
  featured?: boolean;
  type: string;
  to: string;
}
