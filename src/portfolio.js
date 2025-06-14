/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "UZOROV",
  title: "Привет! Я Кирилл",
  subTitle: emoji(
    "Опытный Full-Stack разработчик с фокусом на .NET Core и микросервисную архитектуру. " + 
    "Специализируюсь на создании надёжных и масштабируемых систем с использованием C# .NET Core 7+, " +
    "Python (FastAPI), Kafka, Docker, PostgreSQL. "+
    "В настоящее время являюсь ведущим разработчиком в проекте по разработке производственной системы (MES), " +
    "где отвечаю за архитектурные решения, производительность и устойчивость сервиса."
  ),
  resumeLink: "ВАША_ССЫЛКА_НА_РЕЗЮМЕ", // Замените на свою ссылку
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/uzorov",
  linkedin: "https://www.linkedin.com/in/kirill-uzorov-40380935a/",
  gmail: "uzorovkirill@gmail.com",
  // Добавьте другие соцсети по желанию
  display: true
};
// Skills Section

const skillsSection = {
  title: "Что я умею",
  subTitle: "Ведущий full-stack разработчик, создаю масштабируемые и надёжные системы",
  skills: [
    emoji("⚡ Проектирование и разработка распределённых микросервисных систем"),
    emoji("⚡ Оптимизация высоконагруженных сервисов на C# (.NET)"),
    emoji("⚡ Разработка фронтенда на Angular и TypeScript"),
    emoji("⚡ Создание асинхронных микросервисов на Python (FastAPI)"),
    emoji("⚡ Интеграция AI-функций для автоматизации и повышения эффективности"),
    emoji("⚡ Ведение командной работы и техническое руководство")
  ],
  softwareSkills: [
    { skillName: "C# .NET", fontAwesomeClassname: "fas fa-code" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python FastAPI", fontAwesomeClassname: "fab fa-python" },
    // { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    // { skillName: "Kafka/Rabbit MQ", fontAwesomeClassname: "fa-solid fa-arrows-rotate" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-tools" },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "МИРЭА — Российский технологический университет",
      logo: require("./assets/images/mirea-logo.png"), // замените на свой логотип
      subHeader: "Бакалавр, Программная инженерия",
      duration: "Сентябрь 2020 — Июнь 2024",
      desc: "Изучал проектирование ПО, управление проектами, SQL, шаблоны проектирования и современные веб-технологии.",
      descBullets: [
        "Участие в разработке микросервисных систем",
        "Опыт работы с CI/CD, Docker, Python, FastAPI"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Ведущий Full-Stack разработчик",
      company: "TMK",
      companylogo: require("./assets/images/tmk-logo.png"),
      date: "Апрель 2023 — настоящее время",
      desc: "Ведущий full-stack инженер, проектирование и внедрение распределённых микросервисных систем, оптимизация высоконагруженных сервисов, внедрение AI-функций, руководство командой.",
      descBullets: [
        "Успешная реализация и сопровождение MES-системы, используемой в производстве",
        "Оптимизация производительности сервисов, снижение времени отклика на 30%",
        "Победы в корпоративных IT-соревнованиях компании"
      ]
    },
    {
      role: "Веб-разработчик",
      company: "РТУ МИРЭА",
      companylogo: require("./assets/images/mirea-logo.png"),
      date: "Июнь 2022 — Апрель 2023",
      desc: "Разработка асинхронных микросервисов на Python (FastAPI), интеграция с информационной системой университета, настройка CI/CD, работа с Docker.",
      descBullets: []
    },
    {
      role: "Младший разработчик",
      company: "КонсультантПлюс",
      companylogo: require("./assets/images/consult.jpg"),
      date: "Сентябрь 2022 — Ноябрь 2022",
      desc: "Руководство командой, проектирование и разработка мобильного приложения для LegalTech.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Связаться со мной",
  subtitle: "Открыт для новых возможностей и сотрудничества.",
  number: "+7 920 976-64-27",
  email_address: "uzorovkirill@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
