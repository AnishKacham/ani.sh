export const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

export const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
  "base64",
);
export const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
export const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

export const PROJECTS = [
  {
    title: "Erp Course Notifier",
    description:
      "A selenium webdriver script that continuosly checks if any seats have opened for a particular course and alerts you. Attempted to make it Multithreaded",
    tags: ["Python", "Selenium Web Driver"],
    github: "https://github.com/AnishKacham/ERP-Course-Notifier",
  },
  {
    title: "G-overflow",
    description:
      "A stackoverflow clone for uni students. Upvote, Downvote, Mark as best, Comment and share posts and answers. A More SDLC related project",
    tags: ["MERN", "SDLC"],
    github: "https://github.com/AnishKacham/SEISF341",
  },
  {
    title: "Dodoshows",
    description:
      "Movie booking website emulation with a synthetic database. Book tickets, write reviews, rate movies, make shared and personal watchlists with friends on the platform",
    tags: ["Flask", "React", "MySQL", "Bootstrap"],
    github: "https://github.com/AnishKacham/dodoshows",
  },
  {
    title: "Task Tracker",
    description:
      "A place to track your shopping list / grocery lists, etc. Supports shared lists in case you have a roommate. Also maintain a daily diary and set reminders for tasks sent through email",
    tags: ["Springboot", "DOM Manipulation"],
    github: "https://github.com/AnishKacham/task-tracker-new",
  },
  {
    title: "Google Search Page",
    description:
      " CSS and HTML code to emulate a Google search results page only statically",
    tags: ["CSS", "HTML"],
    link: "https://anishkacham.github.io/google-homepage/",
    github: "https://github.com/anishKacham/google-homepage/",
  },
  {
    title: "Personal Website v1",
    description:
      "Portfolio website to share my few cents on personal and professional life.",
    tags: ["NextJS", "SSR", "Blog"],
    link: "https://anish-v1.vercel.app",
    github: "https://github.com/anishKacham/v1",
  },
];

export const EMOJIS = [
  "✨",
  "🪄🧙‍♂️",
  "🎊",
  "🎉",
  "💫",
  "🐲🌹",
  "😍",
  "💝",
  "🥏",
  "😰",
  "🫥",
  "🖖",
  "🐇",
  "🏃‍♂️🏃‍♀️",
  "🔮🃏",
];

type IAuthors = {
  [key: string]: {
    name: string;
    url: string;
  };
};
export const AUTHORS: IAuthors = {
  anish: {
    name: "Anish Kacham",
    url: "https://x.com/anishKach?t=lqwNg4n15mY_sIriBO6g2g&s=09",
  },
};
