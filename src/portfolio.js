/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash:false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hrithik's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hrithik Tiwari Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hrithik Tiwari",
  logo_name: "HrithikTiwari",
  nickname: "Salav",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Hrithik333",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/Hrithik333",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hrithik-tiwari-a562991b2",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCFHXjBOCqbNpuW03e1oA6Jg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:hrithiktiwari33@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }

];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Software Developer",
      fileName: "Sofware development",
      skills: [
        "⚡ Successfully completed over 300+ Leetcode problems, applying my expertise in data structures and algorithms. Demonstrated a consistent commitment to self-improvement by practicing regularly on the Leetcode platform",
      
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Hrithik333/",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/hrithiktiwari/practice",
    },
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kalinga Institute of Industrial Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "kitt.jpg",
      alt_name: "KIIT",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on  Full Stack Development(MERN),Frontend Development,Backend Development,Oracle Database",
        "⚡ I have got CGPA 8.66",
      ],
      website_link: "https://kiit.ac.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS",
      subtitle: "",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1z5ZzU-d7zLxH0IKvi-W-rXYr8l_rOqd4/view",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning ISRO certificate on ”Overview of Web GIS technology",
      subtitle: "",
      logo_path: "isro.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Software Developer and  Full Stack Developer. I have also worked with some well established companies mostly as Backend Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work and Internship",
      experiences: [
        {
          title: "Backend Developer",
          company: "Anicca Data Science -Software company",
          company_url: "https://www.aniccadata.com/drt",
          logo_path: "Anicca data Science.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "• Developed and deployed a Digital Reporting Tool using Python Flask for a product-based project; streamlined data processing and generated comprehensive reports in real-time, reducing reporting time by 75% ,Architected and developed server-side REST APIs that interact with MongoDB and managed user authentication and authorization, resulting in 50 percetage faster sign-up and login loading times, and 20 perentage increase in user engagement,Collaborated effectively with team members and clients to maintain project timelines and deliverables, resulting in 15% improvement in project quality and Utilized agile methodologies to complete the Spring project",
          color: "#0879bf",
        },
        {
          title: "Software Intern",
          company: "HighRadius Corporation -Software company",
          company_url: "https://www.highradius.com/",
          logo_path: "hrc.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "Created an AI-powered B2B fintech WebApp and applied machine learning algorithms to predict clear dates.Leveraged Java Servlets to connect the application to a MySQL database and designed an intuitive UI using ReactJS,resulting in a 20% increase in productivity.",
          color: "#9b1578",
        },
        {
          title: "Oracle Database Intern",
          company: "MECON LIMITED(PSU)",
          company_url: "http://www.meconlimited.co.in/",
          logo_path: "mecon.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            " Internship in IT service Section of Organisation in Oracle Apex Database.Made a Gate Pass website with integrated Camera through oracle Apex with Excellent permormance.",
          color: "#9b1578",
        },
        {
          title: "Internship Full Stack Web Development",
          company: "ShapeAi(DevTown)",
          company_url: "https://lnkd.in/gXfdKatE",
          logo_path: "dev.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            " Received letter of recommendation for among top 20 students out of 250+ students and performing tenacity to learn uses of javascript",
          color: "#9b1578",
        }
      ],
    },
   
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Kindle Society (KIIT)",
          company: "Kindle Society -Coding club",
          company_url: "https://www.facebook.com/kindle.knack/",
          logo_path: "kindle.jfif",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
          "I am actively contributing to many opensource projects and coding events.I am active in events organising by the society"
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked ",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "React Series",
      createdAt: "May 18, 2023",
      description: "1. Understand useState() — React Hooks Series",
      url:
        "https://medium.com/@hrithiktiwari33/1-understand-usestate-react-hooks-series-b32fa65828c",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Oracle Database",
      createdAt: "Jul 27, 2022",
      description: "Gate Pass website with integrated Camera through Oracle Apex",
      url:
        "https://medium.com/@hrithiktiwari33/gate-pass-website-with-integrated-camera-through-oracle-apex-7c470b3e8016",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrithik.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@hrithiktiwari33",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Uma niwash suryapuri hehal Ranchi-834005",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
