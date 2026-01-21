
import { Service, Project, Testimonial, TimelineEvent } from './types';

export const COMPANY_NAME = "Atomic Air Heating & Cooling";
export const TAGLINE = "Family Legacy Since 1978";
export const PHONE = "647.964.8579";
export const EMAIL = "info@atomicairhvac.ca";
export const PRIMARY_COLOR = "#FF6B00";
export const REBATE_MAX_VALUE = 10500;

export interface ProjectExtended extends Project {
  systemId: string;
  efficiency: string;
  year: string;
  components: string[];
  location: string;
}

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

export const PROJECTS: ProjectExtended[] = [
  { 
    id: '1', 
    title: 'Industrial Boiler Array', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb79a9?auto=format&fit=crop&q=80&w=1000', 
    description: 'Complete multi-stage boiler system for a high-rise retrofit. Focused on hydraulic separation and cascading logic.',
    systemId: 'AT-BO-2024-C1',
    efficiency: '98.5% AFUE',
    year: '2024',
    location: 'Downtown Toronto',
    components: ['Viessmann Vitodens', 'Grundfos Pumps', 'Weben-Jarco Tanks']
  },
  { 
    id: '2', 
    title: 'Cold-Climate Heat Pump', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000', 
    description: 'Installation of a dual-fuel hybrid system designed to operate efficiently down to -25C.',
    systemId: 'AT-HP-2025-R1',
    efficiency: '3.8 COP @ -15C',
    year: '2025',
    location: 'Etobicoke',
    components: ['Mitsubishi Zuba', 'Ecobee Premium', 'Custom Plenums']
  },
  { 
    id: '3', 
    title: 'Clean Mechanical Room', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000', 
    description: 'Copper-dominant hydronic layout for a luxury residence with 12 distinct heating zones.',
    systemId: 'AT-HY-2023-R4',
    efficiency: 'System Peak 96%',
    year: '2023',
    location: 'Oakville',
    components: ['Copper L-Type', 'Caleffi Manifolds', 'Tekmar Controls']
  },
  { 
    id: '4', 
    title: 'Rooftop Package Units', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000', 
    description: 'Crane-assisted replacement of two 15-ton rooftop units for a medical office building.',
    systemId: 'AT-RT-2024-C3',
    efficiency: '14.5 IEER',
    year: '2024',
    location: 'Mississauga',
    components: ['Carrier WeatherExpert', 'Economizer Controls']
  },
  { 
    id: '5', 
    title: 'Smart Zone Management', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1590059132218-4b3e8c9c7d1e?auto=format&fit=crop&q=80&w=1000', 
    description: 'Whole-home integration of smart thermostats with legacy high-velocity air handlers.',
    systemId: 'AT-SM-2024-R9',
    efficiency: '22% Energy Savings',
    year: '2024',
    location: 'North York',
    components: ['Nest Learning Gen 3', 'Aprilaire Humidifier']
  },
  { 
    id: '6', 
    title: 'Hydronic Snow Melt Hub', 
    category: 'Specialty', 
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000', 
    description: 'Custom PEX-A driveway heating system with automated moisture and temp sensing.',
    systemId: 'AT-SM-2025-S2',
    efficiency: '94% Fuel Utilization',
    year: '2025',
    location: 'Forest Hill',
    components: ['Rehau PEX-A', 'Snow Sensor S100', 'Plate Heat Exchanger']
  }
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
