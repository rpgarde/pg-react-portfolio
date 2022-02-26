import grannyCrush from '../images/granny-crush.png';
// import covidStats from '../images/covid-tracker.png';
import techBlog from '../images/tech-blog.png';
// import weatherDash from '../images/weather-dash.png';
// import codingQuiz from '../images/coding-quiz.png';
import roomez from '../images/roomez.png';

const projects = [
  {
    name: 'roomEZ',
    description:
      'Full-stack MERN+GraphQL website for share house dwellers to manage chores, bills, and messages.',
    tech: [
      'React',
      'Express',
      'Node.js',
      'Mongoose',
      'MongoDB',
      'GraphQL',
      'Apollo',
      'JWT',
      'AWS S3'
    ],
    deployed: 'https://roomez.herokuapp.com/',
    repo: 'https://github.com/rpgarde/roomez',
    image: roomez
  },
  {
    name: 'Granny Crush',
    description:
      'Full-stack dating site for seniors with match and chat functionality. This was a group project and I was the lead backend developer.',
    tech: ['Javascript', 'Bulma', 'Node.js', 'Sequelize', 'Multer', 'Socket.io'],
    deployed: 'https://obscure-dusk-34538.herokuapp.com/',
    repo: 'https://github.com/zahramertens/granny-crush',
    image: grannyCrush
  },
  // {
  //   name:"COVID-19 Tracker",
  //   description:"Our first group project. This uses a COVID-19 API to display historical stats globally and by country. I took on the role of overall project lead and lead developer.",
  //   tech: ['COVID-19 Stats API', 'Bulma', 'Javascript'],
  //   deployed:"https://rpgarde.github.io/project-1-covid-stats",
  //   repo: "https://www.github.com/rpgarde/project-1-covid-stats",
  //   image: covidStats
  // },
  {
    name: 'Tech Blog',
    description:
      'Full-stack blog with user authentication, post, and comment functionality, deployed on Heroku.',
    tech: ['Javascript', 'Bootstrap', 'Node.js', 'Sequelize', 'MySQL', 'Handlebars'],
    deployed: 'https://protected-tor-62513.herokuapp.com/',
    repo: 'https://www.github.com/rpgarde/cms-tech-blog',
    image: techBlog
  }
  // {
  //   name:"Weather Dashboard",
  //   description:"My first foray into APIs. Allows you to show current weather + next 5 days for a city. Uses local storage to remember your past searches.",
  //   tech: ['Bootstrap', 'Javascript', 'OpenWeatherAPI'],
  //   deployed:"https://rpgarde.github.io/weather-dashboard",
  //   repo: "https://www.github.com/rpgarde/weather-dashboard",
  //   image: weatherDash
  // },
  // {
  //   name:"Coding Quiz",
  //   description:"Built after just 4 weeks into bootcamp. A simple 5-point timed coding quiz which tests you on Javascript.",
  //   tech: ['Javascript'],
  //   deployed:"https://rpgarde.github.io/coding-quiz",
  //   repo: "https://www.github.com/rpgarde/coding-quiz",
  //   image: codingQuiz
  // }
];

export default projects;
