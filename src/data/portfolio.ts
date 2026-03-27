// src/data/portfolio.ts

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  img: string;
  url: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    category: 'web-design', 
    title: 'E-commerce Project Naabamart', 
    description: 'A complete online bookshop platform.',
    img: '/naabamart.png', 
    url: 'http://naabamart.com/',
    tags: ['Laravel', 'React', 'Tailwind']
  },
  { 
    id: 2, 
    category: 'web-design', 
    title: 'E-commerce Project Oppsbd', 
    description: 'Modern e-commerce solution and business platform.',
    img: '/oppsbd.png', 
    url: 'http://oppsbd.com/',
    tags: ['PHP', 'MySQL', 'UI/UX']
  },
  { 
    id: 3, 
    category: 'web-design', 
    title: 'E-commerce Project 1', 
    description: 'Multi-functional shopping experience.',
    img: '/ecom1.png', 
    url: 'http://1.naabamart.com/',
    tags: ['E-commerce', 'Responsive']
  },
  { 
    id: 4, 
    category: 'web-design', 
    title: 'E-commerce Project 2', 
    description: 'Dynamic store with a user-friendly interface.',
    img: '/ecom2.png', 
    url: 'http://2.naabamart.com/',
    tags: ['Web Design', 'Cart']
  },
  { 
    id: 5, 
    category: 'web-design', 
    title: 'E-commerce Project 3', 
    description: 'Modern feature-rich online shop.',
    img: '/ecom3.png', 
    url: 'http://3.naabamart.com/',
    tags: ['Laravel', 'Bootstrap']
  },
  { 
    id: 6, 
    category: 'web-design', 
    title: 'E-commerce Project 4', 
    description: 'Clean and modern design e-commerce.',
    img: '/ecom4.png', 
    url: 'http://4.naabamart.com/',
    tags: ['React', 'API']
  },
  { 
    id: 7, 
    category: 'web-design', 
    title: 'Ecom Project 8', 
    description: 'Fast loading and optimized e-commerce platform.',
    img: '/ecom8.png', 
    url: 'http://8.naabamart.com',
    tags: ['Performance', 'SEO']
  },
  { 
    id: 8, 
    category: 'web-design', 
    title: 'Ecom Project 9', 
    description: 'Advanced inventory management solution.',
    img: '/ecom9.png', 
    url: 'http://9.naabamart.com',
    tags: ['Dashboard', 'React']
  },
  { 
    id: 9, 
    category: 'software', 
    title: 'Blood Bank Project', 
    description: 'Blood donation and donor management system (Jnureddrop).',
    img: '/jnureddrop.png', 
    url: 'http://jnureddrop.com/',
    tags: ['Firebase', 'Real-time']
  },
  { 
    id: 10, 
    category: 'software', 
    title: 'To let Project', 
    description: 'Digital platform for finding houses and bachelor messes (JnuMate).',
    img: '/jnumate.png', 
    url: 'http://jnumate.com/',
    tags: ['Next.js', 'PostgreSQL']
  }
];