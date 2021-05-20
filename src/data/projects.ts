import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const projects = [
  {
    name: 'Euclidean Rhythm',
    description: 'A sequencer for playing Euclidean Rhythms. I create a lambda which generates you a downlaodable midi file saved on AWS S3. Written in React, AWS Lambda & S3',
    url: 'https://euclidean-ryhthm.web.app/',
    github: 'https://github.com/edwardhorsey/euclidean-rhythm',
    backgroundImg: 4,
    tech: ['React', 'Node.js', 'AWS S3', 'AWS Lambda', 'AWS Gateway API', 'AWS CodePipeline']
  },
  
  {
    name: 'Serverless Chat App',
    description: 'A real-time chat room app built with React, Python, AWS Gateway API, Lambda and DynamoDB.',
    url: 'https://serverless-d0cc8.web.app/',
    github: 'https://github.com/edwardhorsey/serverless-chat-app',
    backgroundImg: 2,
    tech: ['React', 'TypeScript', 'Python', 'AWS Lambda', 'AWS Gateway API']
  },

  {
    name: 'Roland-react-8',
    description:
      'A drum-machine performing some of my favourite samples from the Roland TR-808. The sample controls are designed for playing live. Distortion included for added techno. Built with React and the Web Audio API. 🕺💃',
    url: 'https://rolandreact.com/',
    github: 'http://github.com/edwardhorsey/roland-react-8',
    backgroundImg: 6,
    tech: ['React', 'Firebase']
  },

  {
    name: 'Electronic Track Search',
    description:
      'A full-stack web app which searches for information on a track release and provides results of DJ mixes which feature the track. The front end (built in React) uses AWS Gateway API and Lambda to conduct the API searches. 🔥🎛️',
    url: 'https://electronic-track-search.edwardhorsey.io',
    github: 'https://github.com/edwardhorsey/electronic-track-search',
    backgroundImg: 5,
    tech: ['React', 'Node.js', 'AWS Lambda', 'AWS Gateway API']
  },

  {
    name: 'Mobile Baccarat',
    description:
      'A take on the classic casino game. Options to choose your shoe size allowing for a more beatable game. Created using object oriented programming.',
    url: 'http://edwardhorsey.github.io/baccarat',
    github: 'http://github.com/edwardhorsey/baccarat',
    backgroundImg: 1,
    tech: ['HTML', 'SCSS', 'JavaScript']
  },

  {
    name: 'Morse Code Generator',
    description: 'Convert English to Morse Code and Morse Code to English. Automatically detects input language.',
    url: 'https://edwardhorsey.github.io/morse-code-generator/',
    github: 'https://github.com/edwardhorsey/morse-code-generator',
    backgroundImg: 3,
    tech: ['HTML', 'SCSS', 'JavaScript']
  },

  {
    name: 'Heads Up Poker',
    description: 'A game of heads up All-In-or-Fold poker. This is an in-progress project. The app uses AWS Gateway API for the websocket, AWS lambda, a single DynamoDB table, AWS Cognito for authentication and React TypeScript for the frontend. I am using AWS CodePipeline to deploy the application direct from GitHub.',
    url: 'https://d3vj6y4539i61v.cloudfront.net/',
    github: 'https://github.com/edwardhorsey/heads-up',
    backgroundImg: 7,
    tech: ['React', 'TypeScript', 'Python', 'AWS Lambda', 'AWS Gateway API', 'AWS Cognito', 'AWS CodePipeline']
  },

  {
    name: 'Intergr8',
    description:
      'intergr8 is an online ticketing system designed and delivered in 4 week long sprints, in a team of 10. Notable contributions include (in pair): implimenting the CICD pipeline, modeling the data structure for NoSQL database. Written using React and Firebase BaaS. Username: test@intergr8',
    url: 'project-icons"><a href="https://intergr8-42df9.web.app/',
    github: 'https://github.com/nology-tech/intergr8',
    backgroundImg: 8,
    tech: ['React', 'Firebase', 'GitHub Actions']
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
  { text: 'MySQL', iconCode: ['fas', 'database'] },
  { text: 'Git', iconCode: ['fab', 'git-alt'] },
  { text: 'AWS', iconCode: ['fab', 'aws'] },
];
