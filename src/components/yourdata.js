import img from "../images/fashion-3080644_1920.jpg";
import restaurantFood from "../images/restauranfood.jpg"
import Mylogo from "../images/Serge.png"
export default  {
  //(Please Do Not Remove The comma(,) after every variable)

  //Change The Website Template
  name: "SAN",
  logo: `${Mylogo}`,

  //Contact Email
  contactEmail: "sergethiti@gmail.com",

  // Landing Page Name
  landingPageName: "Serge Aristide Nikiema",

  // Landing Page Paragraph
  landingPagePara: "Software Engineer",

  // Landing Page Image (replace - root/public/assets/photo.jpg)
  landingPageImage: "root/public/assets/IMG_4335.jpg",

  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Malicious-Keys", //Project Title - Add Your Project Title Here
      // Image Size Should be (300X300 px)
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWvOMkCWv5jLOXmaes5ZPDc75kuCSxA5yRfg&usqp=CAU",
      //Project URL - Add Your Project Url Here
      url: "https://malicious-keys.herokuapp.com/",
      //Project Github
      git: "https://github.com/malicious-cookies/Malicious-keys",
      isLive: false,
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Serge-Party-Event-Rentals",
      imageSrc:
        "https://oaklawnpartyrentals.com/wp-content/uploads/2019/02/dance-floor.jpg",
      url: "https://sergepartyrentals.netlify.app/",
      //Project Github
      git: "https://github.com/orgs/Serge-Rental/repositories",
      isLive: true,
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Event-Share",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaVzHwtaT8FGyLgNNb6X7NcHXSO13_plFRGQ&usqp=CAU",
      url: "https://event-share.herokuapp.com/",
      //Project Github
      git: "https://github.com/EventShare-WDF-2004/EventShare",
      isLive: false,
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Little Lemon Restaurant", //Project Title - Add Your Project Title Here
      // Image Size Should be (300X300 px)
      imageSrc: `${restaurantFood}`,
      //Project URL - Add Your Project Url Here
      url: "https://little-lemon-restaurant-serge.netlify.app/",
      git: "https://github.com/sergethi/Little-Lemon-restaurant.git",
      isLive: true,
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "The Artists Forum", //Project Title - Add Your Project Title Here
      // Image Size Should be (300X300 px)
      imageSrc:
        "data:image/png;base64,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",
      //Project URL - Add Your Project Url Here
      url: "https://theartistsforum.org/",
      isLive: true,
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Golden-Face Salon",
      imageSrc:`${img}`,
      url: "https://golden-face-salon.netlify.app/",
      git: "https://github.com/sergethi/Beauty-salon-Golden-Face",
      isLive: true,
    },
    // {
    //   id: 5, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Five",
    //   imageSrc: "https://via.placeholder.com/300",
    //   url: "http://chetanverma.com/"
    // },
    // {
    //   id: 6, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Six",
    //   imageSrc: "https://via.placeholder.com/300",
    //   url: "http://chetanverma.com/"
    // }
    // Paste more projects here from the template

    /*
                      If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                  ,{
                  id: 7,
                  service: 'Something Amazing',
                  imageSrc: "",
                  url: ''
              }
                  */
  ],

  projects2: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "How to deploy your project using Heroku and Travis", //Project Title - Add Your Project Title Here
      // Image Size Should be (300X300 px)
      imageSrc: "https://miro.medium.com/max/700/1*bDSuRlyueyadZYT3hjGOEw.png",
      //Project URL - Add Your Project Url Here
      url: "https://medium.com/@sergethiti",
    },
  ],
  //Resume

  resumeURL:
    "https://drive.google.com/file/d/1McWhkqSGBOt90mbfIish0MOYIRBID50M/view?usp=sharing",

  // Contact Section
  contactPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  social: [
    // Add Or Remove The Link Accordingly
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/serge-aristide-nikiema/",
    },
    {
      name: "Github",
      url: "https://github.com/sergethi",
    },
    {
      name: "Code Pen",
      url: "https://codepen.io/sergethi",
    },
  ],

  // About Page
  aboutTitle: "About Me",
  aboutPara: [
     `I began my journey with a background in electrical engineering before pivoting into the realm of software engineering. Taking a distinctive route into the tech sector, my proficiency has been sculpted by intensive web development bootcamps, professional workforce programs, and a rigorous software engineering apprenticeship with Google.`,
       `Outside of crafting applications, I delve into new technologies, ever eager to learn. Basketball fuels my active side, while my fitness regime keeps me in top shape. Additionally, the art of DJing captivates me, and I continuously refine my skills in it.`
  ]
       
    ,
  aboutCredentialSkills: `Express, Sequelize, React, Redux, React-Redux, Angular, Node.js, Git, PostgreSQL, MongoDB, WordPress, Jasmine, Mocha/Chai, CSS, Jest.`,
  aboutCredentialLanguages: `HTML, CSS, Javascript (ES5 & ES6), Python, Java.`,
};
