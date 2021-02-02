import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const projects = [
  {
    name: 'Mobile Baccarat',
    description:
      'A take on the classic casino game. Options to choose your shoe size allowing for a more beatable game. Created using object oriented programming.',
    url: 'http://edwardhorsey.github.io/baccarat',
    github: 'http://github.com/edwardhorsey/baccarat',
    backgroundImg: 1,
  },

  {
    name: 'Serverless Chat App',
    description: 'A real-time chat room app built with React, Python, AWS Gateway API, Lambda and DynamoDB.',
    url: 'https://serverless-d0cc8.web.app/',
    github: 'https://github.com/edwardhorsey/serverless-chat-app',
    backgroundImg: 2,
  },

  {
    name: 'Electronic Track Search',
    description:
      'A full-stack web app which searches for information on a track release and provides results of DJ mixes which feature the track. The front end (built in React) uses AWS Gateway API and Lambda to conduct the API searches. 🔥🎛️',
    url: 'https://electronic-track-search.edwardhorsey.io',
    github: 'https://github.com/edwardhorsey/electronic-track-search',
    backgroundImg: 3,
  },

  {
    name: 'Roland-react-8',
    description:
      'A <strong>drum-machine</strong> performing some of my favourite samples from the Roland TR-808. The sample controls are designed for playing live. Distortion included for added techno. Built with React and the Web Audio API. 🕺💃',
    url: 'https://rolandreact.com/',
    github: 'http://github.com/edwardhorsey/roland-react-8',
    backgroundImg: 4,
  },

  {
    name: 'Morse Code Generator',
    description: 'Convert English to Morse Code and Morse Code to English. Automatically detects input language.',
    url: 'https://edwardhorsey.github.io/morse-code-generator/',
    github: 'https://github.com/edwardhorsey/morse-code-generator',
    backgroundImg: 5,
  },

  {
    name: 'Euclidean Rhythm',
    description: 'A sequencer for playing Euclidean Rhythms. Generates a midi file. Written in React, AWS Lambda & S3',
    url: 'https://euclidean-rhythm.s3-eu-west-1.amazonaws.com/index.html',
    github: 'https://github.com/edwardhorsey/euclidean-rhythm',
    backgroundImg: 6,
  },

  {
    name: 'Cleanup',
    description: 'A python script for cleaning up your downloads folder.',
    url: '',
    github: 'https://github.com/edwardhorsey/downloads-folder-cleanup',
    backgroundImg: 7,
  },

  {
    name: 'Intergr8',
    description:
      'intergr8 is an online ticketing system designed and delivered in 4 week long sprints, in a team of 10. Notable contributions include (in pair): implimenting the CICD pipeline, modeling the data structure for NoSQL database. Written using React and Firebase BaaS. </br> Username: test@intergr8',
    url: 'project-icons"><a href="https://intergr8-42df9.web.app/',
    github: 'https://github.com/nology-tech/intergr8',
    backgroundImg: 8,
  },
];

interface skill {
  text: string;
  iconCode: IconProp;
}

export const skills: Array<skill> = [
  { text: 'HTML5', iconCode: ['fab', 'html5'] }, 
  { text: 'Sass', iconCode: ['fab', 'sass'] }, 
  { text: 'JavaScript', iconCode: ['fab', 'js-square'] },
  { text: 'React', iconCode: ['fab', 'react']   },
  { text: 'Python', iconCode: ['fab', 'python'] },
  { text: 'Node.js', iconCode: ['fab', 'node-js'] },
  { text: 'PHP', iconCode: ['fab', 'php'] },
  { text: 'Git', iconCode: ['fab', 'git-alt'] },
  { text: 'AWS', iconCode: ['fab', 'aws'] }
];
