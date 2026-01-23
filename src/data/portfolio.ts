export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  img: string;
  url: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Existing items with updated URLs
  { 
    id: 10, 
    category: 'web-dijan', 
    title: 'E-commerce Project Oppsbd', 
    img: '/oppsbd.png', 
    url: 'http://oppsbd.com/' 
  },
  { 
    id: 1, 
    category: 'web-dijan', 
    title: 'E-commerce Project Naabamart', 
    img: '/naabamart.png', 
    url: 'http://naabamart.com/' 
  },
  { 
    id: 1, 
    category: 'web-dijan', 
    title: 'E-commerce Project 1', 
    img: '/ecom1.png', 
    url: 'http://1.naabamart.com/' 
  },
  { 
    id: 2, 
    category: 'web-dijan', 
    title: 'E-commerce Project 2', 
    img: '/ecom2.png', 
    url: 'http://2.naabamart.com/' 
  },
  { 
    id: 3, 
    category: 'web-dijan', 
    title: 'E-commerce Project 3', 
    img: '/ecom3.png', 
    url: 'http://3.naabamart.com/' 
  },
  { 
    id: 4, 
    category: 'web-dijan', 
    title: 'E-commerce Project 4', 
    img: '/ecom4.png', 
    url: 'http://4.naabamart.com/' 
  },
  
  { 
    id: 8, 
    category: 'web-dijan', 
    title: 'Ecom Project 8', 
    img: '/ecom8.png', 
    url: 'http://8.naabamart.com' 
  },
  { 
    id: 9, 
    category: 'web-dijan', 
    title: 'Ecom Project 9', 
    img: '/ecom9.png', 
    url: 'http://9.naabamart.com' 
  },
  { 
    id: 11, 
    category: 'web-dijan', 
    title: 'Blood Bank Project', 
    img: '/jnureddrop.png', 
    url: 'http://jnureddrop.com/' 
  },
  { 
    id: 11, 
    category: 'web-dijan', 
    title: 'To let Project', 
    img: '/jnumate.png', 
    url: 'http://jnumate.com/' 
  },
 
];