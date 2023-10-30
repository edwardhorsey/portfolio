export interface Project {
    name: string;
    description: string;
    url: string;
    github: string;
    images: string[];
    video?: string;
    tech: string[];
    id: number;
}

export const projects: Project[] = [
    {
        name: 'Drum Machine',
        description:
            'A drum-machine performing some of my favourite samples from the Roland TR-808. The sample controls are designed for playing live. Distortion included for added techno. Connect and save your beats. 🕺💃',
        url: 'https://drummachine.xyz/',
        github: 'http://github.com/edwardhorsey/roland-react-8',
        images: [],
        video: '/video/drum-machine.mp4',
        tech: ['Next.js', 'Web Audio API', 'TypeScript', 'Prisma'],
        id: 3,
    },

    {
        name: 'Piñata',
        description:
            'Commisioned for band Third Eye Blind, this is a game where users attempt to break a Piñata in order to be entered into a prize draw. I used the Matter.js physics engine and react-spring to create the animations and howler.js to trigger the sound effects. The site was built in Next.js with React hooks.',
        url: 'https://www.thirdeyeblindgame.com',
        github: '',
        images: [],
        video: '/video/pinata-800.mp4',
        tech: ['React', 'Matter.js', 'react-spring', 'howler.js', 'Spotify Web Playback SDK'],
        id: 6,
    },
    {
        name: 'Generate your own F*ck you',
        description:
            "Type in your own lyric and create your own chorus of GAYLE's song abcdefu. Download and share audio and a video of your chorus. I used Google Text-to-Speech API & Tone.js to create the audio snippet and FFMPEG in AWS Lambda to create the video.",
        url: 'https://abcde-fu-com.nds.acquia-psi.com/?token=1juf3j7gcb2k8gha',
        github: '',
        images: ['/img/gayle.png', '/img/gayle-2.png'],
        tech: ['React', 'Tone.js', 'AWS Lambda', 'AWS S3', 'FFmpeg', 'Google Text to Speech'],
        id: 1,
    },

    {
        name: 'Fred Again - The Sun',
        description:
            'Video carousel website to display user generated content. Fans submitted videos of themselves and their friends during sunset from different locations around the globe. The project received 256 submissions from 30+ different countries.',
        url: 'https://fredagain.com/thesun/',
        github: '',
        images: ['/img/f-again.png', '/img/f-again-2.png'],
        tech: ['React', 'react-spring'],
        id: 2,
    },

    {
        name: 'Electronic Track Search',
        description:
            'A web application which searches (by web-scraping) for information on a track release and provides results of DJ mixes which feature the track 🔥🎛️',
        url: 'https://www.tracksearch.xyz',
        github: 'https://github.com/edwardhorsey/ets',
        images: ['/img/electronic-track-search-3.png', '/img/electronic-track-search-4.png'],
        tech: ['Next.js', 'Discogs API', 'Google Search API'],
        id: 4,
    },

    {
        name: 'Euclidean Rhythm Generator',
        description:
            'A sequencer for experimenting with euclidean rhythms. You can export your rhythm as a MIDI file. The site uses a Lambda function to generate the MIDI file which in turn is saved on AWS S3.',
        url: 'https://euclidean-ryhthm.web.app/',
        github: 'https://github.com/edwardhorsey/euclidean-rhythm',
        images: [],
        video: '/video/euclidean-rhythm.mp4',
        tech: ['React', 'Web Audio API', 'AWS S3', 'AWS Lambda', 'Serverless Framework'],
        id: 5,
    },
];
