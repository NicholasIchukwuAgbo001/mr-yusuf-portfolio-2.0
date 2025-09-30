type Project = {
  title: string;
  year: string;
  image: string;
  description: string;
  url: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "E-Commerce Project",
    year: "2024",
    image: "/e-commerce.png",
    description:
      "A full-stack group project building an E-Commerce platform with product catalog, shopping cart, and secure checkout system. Includes user authentication, order management, and admin dashboard for inventory control.",
    url: "https://github.com/yusufusmahn/E-Commerce-Group-Project.git",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
  },
  {
    title: "URL Shortener Service",
    year: "2024",
    image: "/url.png",
    description:
      "A scalable microservice for shortening URLs, similar to Bitly. Supports analytics for click tracking, unique short codes, and REST APIs for integration with other apps.",
    url: "https://github.com/yusufusmahn/URL-Shortner-Service.git",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
  },
  {
    title: "Auction System",
    year: "2023",
    image: "/auction.png",
    description:
      "An eBay-like online auction system where users can list items, place bids in real-time, and win auctions. Includes role-based authentication and transaction history tracking.",
    url: "https://github.com/yusufusmahn/AuctionSystemMaven-Ebay.git",
    tech: ["Java", "Maven", "Hibernate", "MySQL", "JSP"],
  },
  {
    title: "LightHouseBank",
    year: "2023",
    image: "/bank.png",
    description:
      "A digital banking system with secure account management, fund transfers, transaction history, and balance monitoring. Built with enterprise-grade practices to simulate core banking operations.",
    url: "https://github.com/yusufusmahn/LiteBank.git",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf"],
  },
  {
    title: "Expense Tracker",
    year: "2022",
    image: "/tracker.png",
    description:
      "A personal finance tracking app to record daily expenses, categorize transactions, and visualize financial health using charts. Helps users stay on top of their budgets and savings goals.",
    url: "https://github.com/yusufusmahn/ExpenseTracker.git",
    tech: ["React", "Firebase", "Chart.js", "TailwindCSS"],
  },
];
