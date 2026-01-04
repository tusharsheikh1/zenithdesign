export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  img: string;
  url: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, category: 'web-dijan', title: 'ফাকল পুলিশ লাইন্স স্কুল অ্যান্ড কলেজ', img: 'https://www.creativedesign.com.bd/assets/images/portfolio/1766477223phakal.jpg', url: 'https://phakal.edu.bd/' },
  { id: 2, category: 'web-dijan', title: 'Astha Online Shop', img: 'https://www.creativedesign.com.bd/assets/images/portfolio/17664771611.jpg', url: 'https://asthaonlinnebd.shop/' },
  { id: 3, category: 'web-dijan', title: 'Nabanno BD', img: 'https://www.creativedesign.com.bd/assets/images/portfolio/1766477105nobanno.jpg', url: 'https://nabannobd.com' },
  { id: 4, category: 'web-dijan', title: 'Quick Pharma', img: 'https://www.creativedesign.com.bd/assets/images/portfolio/1766477053gro.jpg', url: 'https://quickpharma.com.bd/' },
];