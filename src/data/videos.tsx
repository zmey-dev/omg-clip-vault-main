
export interface Video {
  id: string;
  title: string;
  embedUrl: string;
  thumbnailUrl: string;
  category: 'fails' | 'pranks' | 'reactions' | 'wtf' | 'wins';
  tags: string[];
  heatScore?: 'OMG' | 'LOL' | 'WOW' | '🔥'; 
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Guy Attempts Backflip and Fails Spectacularly',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    category: 'fails',
    tags: ['backflip', 'fail', 'funny'],
    heatScore: 'LOL'
  },
  {
    id: '2',
    title: 'Cat Scared by Cucumber Prank',
    embedUrl: 'https://www.youtube.com/embed/pXv44YL_Gio',
    thumbnailUrl: 'https://img.youtube.com/vi/pXv44YL_Gio/mqdefault.jpg',
    category: 'pranks',
    tags: ['cat', 'cucumber', 'jump'],
    heatScore: 'OMG'
  },
  {
    id: '3',
    title: 'Kid Reacts to First Roller Coaster Ride',
    embedUrl: 'https://www.youtube.com/embed/XQu8TTBmGhA',
    thumbnailUrl: 'https://img.youtube.com/vi/XQu8TTBmGhA/mqdefault.jpg',
    category: 'reactions',
    tags: ['kid', 'rollercoaster', 'scream'],
    heatScore: 'LOL'
  },
  {
    id: '4',
    title: 'Bizarre Science Experiment Gone Wrong',
    embedUrl: 'https://www.youtube.com/embed/yVQD0YJTvFU',
    thumbnailUrl: 'https://img.youtube.com/vi/yVQD0YJTvFU/mqdefault.jpg',
    category: 'wtf',
    tags: ['science', 'explosion', 'weird'],
    heatScore: '🔥'
  },
  {
    id: '5',
    title: 'Amazing Basketball Trick Shot from Roof',
    embedUrl: 'https://www.youtube.com/embed/zVIjUPXgnKk',
    thumbnailUrl: 'https://img.youtube.com/vi/zVIjUPXgnKk/mqdefault.jpg',
    category: 'wins',
    tags: ['basketball', 'trick shot', 'amazing'],
    heatScore: 'WOW'
  },
  {
    id: '6',
    title: 'Skateboarder Falls Down Rail',
    embedUrl: 'https://www.youtube.com/embed/aAkMkVFwAoo',
    thumbnailUrl: 'https://img.youtube.com/vi/aAkMkVFwAoo/mqdefault.jpg',
    category: 'fails',
    tags: ['skateboard', 'rail', 'fall'],
    heatScore: 'OMG'
  },
  {
    id: '7',
    title: 'Roommate Scare Prank Compilation',
    embedUrl: 'https://www.youtube.com/embed/lOWOyIuy_Y8',
    thumbnailUrl: 'https://img.youtube.com/vi/lOWOyIuy_Y8/mqdefault.jpg',
    category: 'pranks',
    tags: ['scare', 'roommate', 'compilation'],
    heatScore: 'LOL'
  },
  {
    id: '8',
    title: 'Gamer Reacts to Jumpscare',
    embedUrl: 'https://www.youtube.com/embed/K-fyu50eqAs',
    thumbnailUrl: 'https://img.youtube.com/vi/K-fyu50eqAs/mqdefault.jpg',
    category: 'reactions',
    tags: ['gamer', 'jumpscare', 'scream'],
    heatScore: 'WOW'
  },
  {
    id: '9',
    title: 'Mysterious Glowing Object in Sky',
    embedUrl: 'https://www.youtube.com/embed/Jh0ur8hb4bM',
    thumbnailUrl: 'https://img.youtube.com/vi/Jh0ur8hb4bM/mqdefault.jpg',
    category: 'wtf',
    tags: ['ufo', 'sky', 'mysterious'],
    heatScore: '🔥'
  },
  {
    id: '10',
    title: 'Dog Catches Frisbee in Amazing Jump',
    embedUrl: 'https://www.youtube.com/embed/ZJjAeHGh8AA',
    thumbnailUrl: 'https://img.youtube.com/vi/ZJjAeHGh8AA/mqdefault.jpg',
    category: 'wins',
    tags: ['dog', 'frisbee', 'jump'],
    heatScore: 'OMG'
  },
  {
    id: '11',
    title: 'Water Slide Belly Flop Fail',
    embedUrl: 'https://www.youtube.com/embed/VbOhpgvQKHs',
    thumbnailUrl: 'https://img.youtube.com/vi/VbOhpgvQKHs/mqdefault.jpg',
    category: 'fails',
    tags: ['water slide', 'belly flop', 'fail'],
    heatScore: 'LOL'
  },
  {
    id: '12',
    title: 'Dad Pranks Kids with Fake Spider',
    embedUrl: 'https://www.youtube.com/embed/l18MMn9x7gs',
    thumbnailUrl: 'https://img.youtube.com/vi/l18MMn9x7gs/mqdefault.jpg',
    category: 'pranks',
    tags: ['dad', 'kids', 'spider'],
    heatScore: 'LOL'
  },
  {
    id: '13',
    title: 'Twins Taste Lemon for First Time',
    embedUrl: 'https://www.youtube.com/embed/Nz5lkbcbdVA',
    thumbnailUrl: 'https://img.youtube.com/vi/Nz5lkbcbdVA/mqdefault.jpg',
    category: 'reactions',
    tags: ['twins', 'lemon', 'baby'],
    heatScore: 'WOW'
  },
  {
    id: '14',
    title: 'Strange Animal Caught on Security Camera',
    embedUrl: 'https://www.youtube.com/embed/jSkT8z84LKM',
    thumbnailUrl: 'https://img.youtube.com/vi/jSkT8z84LKM/mqdefault.jpg',
    category: 'wtf',
    tags: ['animal', 'security camera', 'strange'],
    heatScore: '🔥'
  },
  {
    id: '15',
    title: 'Incredible Half Court Basketball Shot',
    embedUrl: 'https://www.youtube.com/embed/aoQJp-GGk_Y',
    thumbnailUrl: 'https://img.youtube.com/vi/aoQJp-GGk_Y/mqdefault.jpg',
    category: 'wins',
    tags: ['basketball', 'half court', 'shot'],
    heatScore: 'OMG'
  },
];

export const categoryLabels = {
  'fails': 'Epic Fails',
  'pranks': 'Pranks & Jokes',
  'reactions': 'Reactions',
  'wtf': 'WTF?',
  'wins': 'Epic Wins'
};

export const categoryIcons = {
  'fails': '💥',
  'pranks': '😈',
  'reactions': '😲',
  'wtf': '❓',
  'wins': '🏆'
};

export const heatScoreEmojis = {
  'OMG': '😱',
  'LOL': '🤣',
  'WOW': '😮',
  '🔥': '🔥'
};
