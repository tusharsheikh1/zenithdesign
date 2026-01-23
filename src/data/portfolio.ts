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
    description: 'একটি পূর্ণাঙ্গ অনলাইন বুকশপ প্ল্যাটফর্ম।',
    img: '/naabamart.png', 
    url: 'http://naabamart.com/',
    tags: ['Laravel', 'React', 'Tailwind']
  },
  { 
    id: 2, 
    category: 'web-design', 
    title: 'E-commerce Project Oppsbd', 
    description: 'আধুনিক ই-কমার্স সল্যুশন এবং বিজনেস প্ল্যাটফর্ম।',
    img: '/oppsbd.png', 
    url: 'http://oppsbd.com/',
    tags: ['PHP', 'MySQL', 'UI/UX']
  },
  { 
    id: 3, 
    category: 'web-design', 
    title: 'E-commerce Project 1', 
    description: 'মাল্টি-ফাংশনাল শপিং এক্সপেরিয়েন্স।',
    img: '/ecom1.png', 
    url: 'http://1.naabamart.com/',
    tags: ['E-commerce', 'Responsive']
  },
  { 
    id: 4, 
    category: 'web-design', 
    title: 'E-commerce Project 2', 
    description: 'ইউজার ফ্রেন্ডলি ইন্টারফেস সহ ডায়নামিক স্টোর।',
    img: '/ecom2.png', 
    url: 'http://2.naabamart.com/',
    tags: ['Web Design', 'Cart']
  },
  { 
    id: 5, 
    category: 'web-design', 
    title: 'E-commerce Project 3', 
    description: 'আধুনিক ফিচার সমৃদ্ধ অনলাইন শপ।',
    img: '/ecom3.png', 
    url: 'http://3.naabamart.com/',
    tags: ['Laravel', 'Bootstrap']
  },
  { 
    id: 6, 
    category: 'web-design', 
    title: 'E-commerce Project 4', 
    description: 'ক্লিন এবং মডার্ন ডিজাইন ই-কমার্স।',
    img: '/ecom4.png', 
    url: 'http://4.naabamart.com/',
    tags: ['React', 'API']
  },
  { 
    id: 7, 
    category: 'web-design', 
    title: 'Ecom Project 8', 
    description: 'ফাস্ট লোডিং এবং অপ্টিমাইজড ই-কমার্স প্ল্যাটফর্ম।',
    img: '/ecom8.png', 
    url: 'http://8.naabamart.com',
    tags: ['Performance', 'SEO']
  },
  { 
    id: 8, 
    category: 'web-design', 
    title: 'Ecom Project 9', 
    description: 'অ্যাডভান্সড ইনভেন্টরি ম্যানেজমেন্ট সল্যুশন।',
    img: '/ecom9.png', 
    url: 'http://9.naabamart.com',
    tags: ['Dashboard', 'React']
  },
  { 
    id: 9, 
    category: 'software', 
    title: 'Blood Bank Project', 
    description: 'রক্তদান এবং ডোনার ম্যানেজমেন্ট সিস্টেম (Jnureddrop)।',
    img: '/jnureddrop.png', 
    url: 'http://jnureddrop.com/',
    tags: ['Firebase', 'Real-time']
  },
  { 
    id: 10, 
    category: 'software', 
    title: 'To let Project', 
    description: 'বাসা এবং ব্যাচেলর মেস খোঁজার ডিজিটাল প্ল্যাটফর্ম (JnuMate)।',
    img: '/jnumate.png', 
    url: 'http://jnumate.com/',
    tags: ['Next.js', 'PostgreSQL']
  }
];