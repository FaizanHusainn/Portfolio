export const SKILLS = [
{
title: "Languages & Framework" ,
icon: "./coding.png",   
// Java, JavaSrcipt, React, Spring Boot, Spring MVC, Spring Security, Hibernate, JPA
skills: [
    { skill: "Java" },
    { skill: "JavaScript" },
    { skill: "React JS" },
    { skill: "Spring MVC"},
    { skill: "Spring Security"},
    { skill: "Hibernate"},
    { skill: "JPA"},

],
},
{
  title: "Backend",
  icon: "./Backend.png",
  skills: [
     { skill: "Spring Boot", percentage: "75%"},
     { skill: "Node.js", percentage: "70%"},
     { skill: "Express JS", percentage: "70%"},
  
  ],
},
{
   title: "Tools",
   icon: "./Tools.png",
   skills:  [
        { skill: "Git & Github", percentage: "85%"},
        { skill: "WordPress", percentage: "85%"},
        { skill: "Elementor", percentage: "90%"},
        { skill: "Visual Studio Code", percentage: "75%" },
        { skill: "Responsive Design", percentage: "78%"},
   ],
},
{
 title: "Soft Skills",
 icon: "./softSkills.png",
 skills: [
    { skill: "Problem-solving", percentage: "80%"},
    { skill: "Collaboration", percentage: "85%"},
    { skill: "Attention to Detail", percentage: "75%"},
    ],
},

];

export const WORK_EXPERIENCE = [
  {
  title: "1. COMPLAINT-SYSTEM TO SUBMIT USER’S COMPLAINTS TO THE DIFFERENT DEPARTMENTS",
  image : "../src/components/assets/ProjectImages/Project1.png",
  date: "Jan 2024 - Feb 2024",
  responsibilities: [
    "Technologies used: React, Bootstrap, Nodejs, Express, MongoDB",
    "Uses React to handle form submission events and send a request to the back-end when a user submits a complaint.",
    "Write logic to handle incoming complaints, including validation of data and storing the information/collection in the MongoDB database.",
    "Used a library like Axios or the built-in Fetch API to send HTTP requests from the React front-end to the Express.js back-end.",
    "User can check their application’s status. When the complaint is solved, the admin marks the complaint as solved",
  ],
  link: "https://complain-box-three.vercel.app/",
  },
  
  {
    title: "2. Outsourcing Agency Website",
    date: "29 Sep 2023 - 5 Oct 2029",
    image : "../src/components/assets/ProjectImages/Project2.png",
    responsibilities : [
    "Technology used: HTML, CSS, JavaScript, WordPress, Elementor Page Builder",
    "Led the development and UI/UX design of EaseMyRecruit Partners, a WordPress website built using the Elementor page builder, showcasing expertise in WordPress development and UI/UX design.",
    "Crafted intuitive and visually appealing user interfaces using Elementor page builder and custom CSS to enhance user experience and elevate the website's aesthetics.",
    "Collaborated closely with clients to understand their business needs and translate them into captivating UI designs, ensuring seamless integration with WordPress functionalities and exceeding client expectations."
    ,
    ],
    link: "https://www.easemyrecruit.com/",
    
  },
  {
    title: "3. Job Information Website",
    date: "June 2023",
    image : "../src/components/assets/ProjectImages/Project3.png",
    responsibilities : [
    " Technology used:  WordPress, Elementor Page Builder",
    " Developed and launched a dynamic job portal website using WordPress and Elementor page builder, attracting a remarkable monthly traffic of 3 lakh PageViews.",
    " Implemented effective SEO strategies and optimized the website’s content and structure, resulting in high search engine rankings and increased organic traffic.",
    " Successfully monetized the website by enabling Google AdSense, generating significant revenue through targeted advertisements.",
    " Implemented website performance optimization techniques, resulting in fast page load times and improved user satisfaction.",
    
    ],
    link: "https://jobscutter.com/",
  },
  
  {
    title: "4. Responsive Studio Website",
    date: "Jan 2023 - Feb 2023",
     image : "../src/components/assets/ProjectImages/Project4.png",
    responsibilities : [
    "Technology used: HTML, CSS, Javascript, Locomotive JS and GSAP.",
    "Responsive Studio website utilizing HTML, CSS, and Javascript, integrating advanced features such as dynamic web animations and smooth scrolling to enhance user engagement and experience.",
    "Leveraged HTML, CSS, and Javascript with libraries including Locomotive JS and GSAP to design and develop a responsive Studio website, showcasing proficiency in creating visually appealing and interactive web experiences to captivate users.",
    "Demonstrated expertise in frontend technologies by devloping this project, incorporating dynamic web animations and smooth scrolling using HTML, CSS, and Javascript with advanced libraries, resulting in an immersive user experience."
    ,
    ],
    link: "https://faizanhusainn.github.io/StudioWebsite/",

  },
  {
    title: "3. WEB BASED CHAT APPLICATION",
    date: "Dec 2023",
      image : "../src/components/assets/ProjectImages/github.webp",
    responsibilities : [
    "Technologies used: Java, Java Swing, Java Applet, Socket Programming.",
    "Spearheaded the development of a web-based chat application utilizing Java, Java Swing, and Java Applet technologies, leveraging socket programming to establish seamless real-time communication between users.",
    "Led the design and implementation of a robust chat application interface using Java Swing and Java Applet, integrated with socket programming to ensure efficient data transmission and synchronization between sender and receiver.",
    "Demonstrated proficiency in Java, Java Swing, Java Applet, and socket programming through the creation of a web-based chat application, facilitating dynamic and interactive communication features for users.",
    ,
    ],
    link: "https://github.com/FaizanHusainn/ChatApplication",
  },
  
]
