
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'heating' | 'cooling' | 'water' | 'specialty' | 'commercial';
  rebateAvailable: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageUrl?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
