// get the DOM of all the portfolio cards
portfolio_cards = document.querySelectorAll(".portfolio_card");

// Loop through all the portfolio_card class to implement the function in it
gridGlows(portfolio_cards);

// push all the glowable cards container into an array that collects all glowable cards section
cardContainerArray.push(portfolio_cards);

// to open the popup modal, it opens when the portfolio cards are clicked
portfolio_cards.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.querySelector(".card_title");
    const image = button.getElementsByTagName("img");
    const modal = document.querySelector(".modal");
    openModal(modal, title.textContent, image[0].src, image[0].alt, portfolios);
  });
});

// Array to store all the portfolio cards description
let portfolios = [];

// list of portfolio object to store the description and title

// for the project i did in my national service that can plan the duty
const NS_Roll_Call_System = {
  title: "NS Roll Call System",
  description:
    "Made during my national service. The Roll Call Web is a centralised platform where users can easily upload their attendance, significantly reducing the time required for administrative tasks and data uploads. Servicemen can submit their attendance status through the website, eliminating the need for manual submission via alternative means.",
  alternative: "picture showing NS roll call system project",
  technology: [
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Flask Framework",
    "SQL",
    "Amazon Web Services",
    "Data Management",
  ],
  skills: [
    "Web Development",
    "Responsive Web Design",
    "User Authentication",
    "Role-Based Access Control",
    "Automation Algorithms",
    "Agile Development",
  ],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/NS-Project-Automation",
    },
    {
      title: "<i class='bx bxs-book-content'></i> Testimonial for Project",
      link: "/static/portfolio/portfolio/NS_Testimonial.pdf",
    },
    {
      title: "<i class='bx bxs-book'></i> Report for Project",
      link: "/static/portfolio/portfolio/NS_Report.pdf",
    },
  ],
};
portfolios.push(NS_Roll_Call_System);

// for the e-commerce hackathon
const E_Commerce = {
  title: "E-Commerce Hackathon23",
  description:
    "As project leader, I lead the development of KIZEK Wear,a frontend-only e-commerce website dedicated to female sportswear. This project was developed as part of the Hackathon Team KIZEK, where our team secured the first-place position by creating an innovative and visually stunning user interface for a female sportswear marketplace.",
  alternative: "picture showing E commerce hackathon project",
  technology: [
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Django Framework",
    "GitHub",
  ],
  skills: [
    "Responsive Web Design",
    "Frontend Development",
    "UI/UX Design",
    "Team Collaboration",
  ],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/Hackathon-E-Commerce",
    },
    {
      title: "<i class='bx bxs-book-content'></i> Certificate of Appreciation",
      link: "/static/portfolio/portfolio/Hackathon23.pdf",
    },
  ],
};
portfolios.push(E_Commerce);

// for the project i did in my national service that creates a centralised attendance system
const NS_Duty_Planner_System = {
  title: "NS Duty Planner System",
  description:
    "Made during my national service. The automated duty planner program was developed to streamline duty planning processes, reducing planning time from days to seconds. I analysis the duty planning process and devised an algorithm that efficiently schedules duties, ensuring optimal efficiency and accuracy.",
  alternative: "picture showing NS duty planner system project",
  technology: [
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Flask Framework",
    "SQL",
    "Amazon Web Services",
    "Data Management",
  ],
  skills: [
    "Web Development",
    "Responsive Web Design",
    "User Authentication",
    "Role-Based Access Control",
    "Automation Algorithms",
    "Agile Development",
  ],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/NS-Project-Automation",
    },
    {
      title: "<i class='bx bxs-book-content'></i> Testimonial for Project",
      link: "/static/portfolio/portfolio/NS_Testimonial.pdf",
    },
    {
      title: "<i class='bx bxs-book'></i> Report for Project",
      link: "/static/portfolio/portfolio/NS_Report.pdf",
    },
  ],
};
portfolios.push(NS_Duty_Planner_System);

// my first portfolio website I created
const Portfolio_Website_V1 = {
  title: "Portfolio Website V1",
  description:
    "Welcome to my portfolio website! This is the first version of the portfolio website that I have made. This is the place where I showcase my skills and expertise as a first-year computer science student passionate about solving real-world problems through innovative projects.",
  alternative: "picture showing my first version of portfolio website project",
  technology: ["HTML/CSS", "JavaScript", "GitHub", "Visual Studio Code"],
  skills: [
    "Responsive Web Design",
    "Front-End Web Development",
    "UI/UX Design",
  ],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/portfolio_website_version_1",
    },
  ],
};
portfolios.push(Portfolio_Website_V1);

// platform game project
const Platform_Game = {
  title: "2D Platform Game",
  description:
    "This project is about developing a 2D platform game reminiscent of Mario, featuring custom graphics and engaging mechanics. It introduces enhancements like jump acceleration and sound effects, offering diverse levels for players. Despite challenges like implementing the translate function, the project provided valuable learning experiences in programming and design, resulting in a successful blend of technical proficiency and creativity.",
  alternative: "picture showing my 2d platform game project",
  technology: [
    "JavaScript",
    "p5.js",
    "HTML/CSS",
    "Visual Studio Code",
    "Version Control",
  ],
  skills: ["Game Development", "UI/UX Design", "Software Design Patterns"],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/2D_Platform_Game",
    },
  ],
};
portfolios.push(Platform_Game);

// poetry assistant
const poetry_assistant = {
  title: "Poetry Assistant",
  description:
    "Developed a Poetry Assistant to simplify the creative process for poets and lyricists. Leveraging advanced JavaScript algorithms and data structures, this tool provides single (masculine) and assonance rhyme suggestions. The assistant focuses on delivering accurate rhyme results with efficient syllable sorting and ranking, ensuring users' intuitive and smooth experience.",
  alternative: "picture showing my poetry assistant",
  technology: ["JavaScript", "Node.js", "Visual Studio Code"],
  skills: ["Data Structures", "Algorithm Design", "Server-side Processing"],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/Poetry_Assistant_Algorithm",
    },
    {
      title: '<i class="bx bxl-youtube"></i> YouTube',
      link: "https://www.youtube.com/watch?v=KbNYfMFjr6U",
    },
  ],
};
portfolios.push(poetry_assistant);

// Inventory system project
const Inventory_Management_System = {
  title: "Inventory Management System",
  description:
    "Made an inventory management system that is able to track and manage inventories. More information can be found on the website, along with a report.",
  alternative: "picture showing my Inventory Management System",
  technology: ["Python", "GitHub", "Pycharm"],
  skills: [
    "Algorithm Design",
    "Inventory Management",
    "Console-based interaction",
    "Data Validation",
  ],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/Inventory-management-and-billing-system",
    },
  ],
};
portfolios.push(Inventory_Management_System);

// Themepark Website project
const Themepark_Website = {
  title: "Themepark Website",
  description:
    "Led the development of a user-friendly, multi-page website for a theme park, focused on enhancing user experience and providing essential information. The project included a main page with events and promotions, an attractions page detailing top tips and maps, and a ticketing page for pricing and bookings. We ensured cohesive design, smooth navigation, and responsive layouts across all pages.",
  alternative: "picture showing my themepark website",
  technology: ["HTML/CSS", "Visual Studio Code", "GitHub"],
  skills: [
    "W3C Accessibility Standards",
    "Responsive Design",
    "Computer Animation",
    "Web Development",
    "Collaborative Project Management",
  ],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/Themepark_Website",
    },
  ],
};
portfolios.push(Themepark_Website);

// Inventory system project
const dsta_hackathon24 = {
  title: "DSTA Hackathon24",
  description:
    "Participated in a collaborative hackathon where my team developed innovative solutions for tasks in natural language processing (NLP), vision-language models (VLM), and automatic speech recognition (ASR). Leveraged the Vertex AI Workbench with full GPU support for efficient development in a JupyterLab environment.",
  alternative: "picture showing my DSTA hackathon24",
  technology: ["Python", "Pytorch", "Jupyter Notebook"],
  skills: [
    "Natural Language Processing",
    "Vision-language models",
    "Speech Recognition",
  ],
  links: [
    {
      title: '<i class="bx bxl-github"></i> Github',
      link: "https://github.com/KeaganSuah/Inventory-management-and-billing-system",
    },
    {
      title: "<i class='bx bxs-book-content'></i> Certificate of Participation",
      link: "/static/portfolio/portfolio/DSTA hackathon24.pdf",
    },
  ],
};
portfolios.push(dsta_hackathon24);
