
import { Service, Project, Testimonial, TimelineEvent } from './types';

export const COMPANY_NAME = "Atomic Air Heating & Cooling";
export const TAGLINE = "Family Legacy Since 1978";
export const PHONE = "647.964.8579";
export const EMAIL = "info@atomicairhvac.ca";
export const PRIMARY_COLOR = "#FF6B00";
export const REBATE_MAX_VALUE = 10500;

export const SERVICES: Service[] = [
  {
    id: 'boilers',
    title: 'High-Efficiency Boilers',
    description: 'Specialized installation and service for modern combi-boilers and radiant systems.',
    icon: 'Flame',
    category: 'heating',
    rebateAvailable: true
  },
  {
    id: 'furnaces',
    title: 'Gas Furnaces',
    description: 'Precision installation of quiet, reliable, high-AFUE gas furnaces.',
    icon: 'Thermometer',
    category: 'heating',
    rebateAvailable: true
  },
  {
    id: 'heat-pumps',
    title: 'Cold-Climate Heat Pumps',
    description: 'Hybrid and ducted solutions for year-round comfort and energy savings.',
    icon: 'Wind',
    category: 'specialty',
    rebateAvailable: true
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description: 'Central air and ductless solutions tailored for Toronto summers.',
    icon: 'Snowflake',
    category: 'cooling',
    rebateAvailable: false
  },
  {
    id: 'tankless',
    title: 'Tankless Water Heaters',
    description: 'Endless hot water on demand with space-saving wall-mount technology.',
    icon: 'Droplets',
    category: 'water',
    rebateAvailable: true
  },
  {
    id: 'snow-melt',
    title: 'Snow Melting Systems',
    description: 'Advanced hydronic driveway and walkway heating for effortless winters.',
    icon: 'CloudSnow',
    category: 'specialty',
    rebateAvailable: false
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Commercial Boiler Retrofit', category: 'Commercial', imageUrl: 'https://picsum.photos/seed/hvac1/800/600', description: 'Complete system overhaul for a mid-rise residential building.' },
  { id: '2', title: 'Modern Home Heat Pump', category: 'Residential', imageUrl: 'https://picsum.photos/seed/hvac2/800/1000', description: 'Quiet cold-climate heat pump installation in Etobicoke.' },
  { id: '3', title: 'Snow Melt Driveway', category: 'Specialty', imageUrl: 'https://picsum.photos/seed/hvac3/800/600', description: 'Custom hydronic snow melting system for a luxury residence.' },
  { id: '4', title: 'Industrial Rooftop AC', category: 'Commercial', imageUrl: 'https://picsum.photos/seed/hvac4/800/800', description: 'Dual-unit rooftop replacement for logistics center.' },
  { id: '5', title: 'Tankless Upgrade', category: 'Residential', imageUrl: 'https://picsum.photos/seed/hvac5/800/600', description: 'Space-saving tankless conversion with high-efficiency venting.' },
  { id: '6', title: 'Heritage Home HVAC', category: 'Residential', imageUrl: 'https://picsum.photos/seed/hvac6/800/1200', description: 'Hidden ductwork solution for a Victorian renovation.' }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '1978', title: 'The Arrival', description: 'Our founder arrived in Canada with a toolkit and a vision for quality service.' },
  { year: '1984', title: 'Atomic Established', description: 'The official launch of Atomic Heating and Cooling in the heart of Toronto.' },
  { year: '2022', title: 'New Era', description: 'Expansion into renewable technologies including cold-climate heat pumps.' },
  { year: 'Today', title: 'Family Legacy', description: 'Upholding the reputation for honest communication and expert craftsmanship.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Julian Campisi',
    role: 'Homeowner',
    quote: '"Atomic Air installed a tankless combi-boiler in a pretty complex spot. They did the work on time, and were flexible with our needs. Honest salesmanship and friendly too."',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Hendrik',
    role: 'Etobicoke Resident',
    quote: '"I was impressed with the communication, responsiveness, and attention I received! Matviy is excellent to deal with, professional, and worked with me to fix my HVAC issues."',
    rating: 5
  },
  {
    id: '3',
    name: 'John DeVries',
    role: 'Business Owner',
    quote: '"Thank you Atomic Air, our new domestic hot water heater is working well! The team was knowledgeable and left the workspace spotless."',
    rating: 5
  }
];
