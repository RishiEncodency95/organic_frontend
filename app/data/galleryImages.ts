import p1 from '@/app/assets/gallery/Picture1.webp';
import p2 from '@/app/assets/gallery/Picture2.webp';
import p3 from '@/app/assets/gallery/Picture3.webp';
import p4 from '@/app/assets/gallery/Picture4.webp';
import p5 from '@/app/assets/gallery/Picture5.webp';
import p6 from '@/app/assets/gallery/Picture6.webp';
import p7 from '@/app/assets/gallery/Picture7.webp';
import p8 from '@/app/assets/gallery/Picture8.webp';
import p9 from '@/app/assets/gallery/Picture9.webp';
import p10 from '@/app/assets/gallery/Picture10.webp';
import p11 from '@/app/assets/gallery/Picture11.webp';
import p12 from '@/app/assets/gallery/Picture12.webp';
import p13 from '@/app/assets/gallery/Picture13.webp';
import p14 from '@/app/assets/gallery/Picture14.webp';
import p15 from '@/app/assets/gallery/Picture15.webp';
import p16 from '@/app/assets/gallery/Picture16.webp';
import p17 from '@/app/assets/gallery/Picture17.webp';
import p18 from '@/app/assets/gallery/Picture18.webp';
import p19 from '@/app/assets/gallery/Picture19.webp';
import p20 from '@/app/assets/gallery/Picture20.webp';
import p21 from '@/app/assets/gallery/Picture21.webp';
import p22 from '@/app/assets/gallery/Picture22.webp';
import p23 from '@/app/assets/gallery/Picture23.webp';
import p24 from '@/app/assets/gallery/Picture24.webp';
import p25 from '@/app/assets/gallery/Picture25.webp';
import p26 from '@/app/assets/gallery/Picture26.webp';
import p27 from '@/app/assets/gallery/Picture27.webp';
import p28 from '@/app/assets/gallery/Picture28.webp';
import p29 from '@/app/assets/gallery/Picture29.webp';
import p30 from '@/app/assets/gallery/Picture30.webp';
import p31 from '@/app/assets/gallery/Picture31.webp';
import p32 from '@/app/assets/gallery/Picture32.webp';
import p33 from '@/app/assets/gallery/Picture33.webp';
import p34 from '@/app/assets/gallery/Picture34.webp';
import p35 from '@/app/assets/gallery/Picture35.webp';
import p36 from '@/app/assets/gallery/Picture36.webp';
import p37 from '@/app/assets/gallery/Picture37.webp';
import p38 from '@/app/assets/gallery/Picture38.webp';
import p39 from '@/app/assets/gallery/Picture39.webp';
import p40 from '@/app/assets/gallery/Picture40.webp';

export interface GalleryItem {
  id: number;
  src: any;
  title: string;
  category: string;
  year: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1,  src: p1,  title: 'Grand Inaugural Ceremony',             category: 'Inauguration',        year: '2025' },
  { id: 2,  src: p2,  title: 'Expo Pavilion & Stalls',                category: 'Exhibition (Expo)',   year: '2025' },
  { id: 3,  src: p3,  title: 'Scientific & Research Sessions',        category: 'Scientific Sessions', year: '2025' },
  { id: 4,  src: p4,  title: 'Delegates & Buyer Interaction',         category: 'Networking',          year: '2025' },
  { id: 5,  src: p5,  title: 'Sustainable Future Panel',              category: 'Panel Discussions',   year: '2025' },
  { id: 6,  src: p6,  title: 'Exhibition Product Display',            category: 'Exhibition (Expo)',   year: '2025' },
  { id: 7,  src: p7,  title: 'Organic Excellence Awards',             category: 'Awards',              year: '2025' },
  { id: 8,  src: p8,  title: 'Cultural Dance & Heritage',             category: 'Cultural Programs',   year: '2025' },
  { id: 9,  src: p9,  title: 'Industry Leaders Networking',           category: 'Networking',          year: '2024' },
  { id: 10, src: p10, title: 'Distinguished Keynote Address',         category: 'Speakers',            year: '2025' },
  { id: 11, src: p11, title: 'Honor & Certificate Felicitation',      category: 'Awards',              year: '2024' },
  { id: 12, src: p12, title: 'Organic Farming Masterclass',           category: 'Workshops',           year: '2025' },
  { id: 13, src: p13, title: 'Dignitaries Lamp Lighting',             category: 'Inauguration',        year: '2024' },
  { id: 14, src: p14, title: 'Interactive Exhibition Area',           category: 'Exhibition (Expo)',   year: '2024' },
  { id: 15, src: p15, title: 'Global Expert Perspectives',            category: 'Speakers',            year: '2024' },
  { id: 16, src: p16, title: 'B2B Buyer-Seller Meeting',              category: 'Networking',          year: '2024' },
  { id: 17, src: p17, title: 'Annual Recognition Ceremony',           category: 'Awards',              year: '2024' },
  { id: 18, src: p18, title: 'VIP Inauguration Tour',                 category: 'Inauguration',        year: '2024' },
  { id: 19, src: p19, title: 'Agri-Tech Innovation Dialogue',         category: 'Panel Discussions',   year: '2024' },
  { id: 20, src: p20, title: 'Organic Produce Showcase',              category: 'Exhibition (Expo)',   year: '2024' },
  { id: 21, src: p21, title: 'Bio-Organic Research Paper',            category: 'Scientific Sessions', year: '2024' },
  { id: 22, src: p22, title: 'Hands-on Farming Workshop',             category: 'Workshops',           year: '2024' },
  { id: 23, src: p23, title: 'Traditional Music Performance',         category: 'Cultural Programs',   year: '2024' },
  { id: 24, src: p24, title: 'Visionary Leader Speech',               category: 'Speakers',            year: '2023' },
  { id: 25, src: p25, title: 'Expo Grand Opening',                    category: 'Inauguration',        year: '2023' },
  { id: 26, src: p26, title: 'Display Stalls & Visitors',             category: 'Exhibition (Expo)',   year: '2023' },
  { id: 27, src: p27, title: 'Scientific Seminar & Q&A',              category: 'Scientific Sessions', year: '2023' },
  { id: 28, src: p28, title: 'Global Organic Market Trends',          category: 'Panel Discussions',   year: '2023' },
  { id: 29, src: p29, title: 'Collaborative Industry Connect',        category: 'Networking',          year: '2023' },
  { id: 30, src: p30, title: 'Organic Standards & Certification',     category: 'Workshops',           year: '2023' },
  { id: 31, src: p31, title: 'Folk Dance Celebrations',               category: 'Cultural Programs',   year: '2023' },
  { id: 32, src: p32, title: 'Trophy & Accolades Night',              category: 'Awards',              year: '2023' },
  { id: 33, src: p33, title: 'Lamp Lighting & Ceremony',              category: 'Inauguration',        year: '2022' },
  { id: 34, src: p34, title: 'Heritage Expo Pavilion',                category: 'Exhibition (Expo)',   year: '2022' },
  { id: 35, src: p35, title: 'Academic & Scientific Meet',            category: 'Scientific Sessions', year: '2022' },
  { id: 36, src: p36, title: 'Policy & Growth Dialogue',              category: 'Panel Discussions',   year: '2022' },
  { id: 37, src: p37, title: 'Eminent Address to Delegates',          category: 'Speakers',            year: '2021' },
  { id: 38, src: p38, title: 'Farmer Capacity Building',              category: 'Workshops',           year: '2021' },
  { id: 39, src: p39, title: 'Cultural Heritage Showcase',            category: 'Cultural Programs',   year: '2020' },
  { id: 40, src: p40, title: 'Partnership & Networking Lounge',        category: 'Networking',          year: '2020' },
];
