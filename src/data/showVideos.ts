// Show-specific video URLs from S3
const S3_BASE = "https://aquavistas-website-media.s3.eu-north-1.amazonaws.com/Videos/";

export interface ShowVideo {
  src: string;
  label: string;
}

export const showVideos: Record<string, ShowVideo[]> = {
  "treasure-rush": [
    { src: `${S3_BASE}250818%20Treasure%20Rush%20Trailer.mp4`, label: "Treasure Rush Trailer" },
    { src: `${S3_BASE}210916%20Treasure%20Hunt%20Trailer%20LR.mp4`, label: "Treasure Hunt Trailer" },
  ],
  "lost-legacy": [
    { src: `${S3_BASE}210916%20Treasure%20Hunt%20Trailer%20LR.mp4`, label: "Treasure Hunt Trailer" },
  ],
  overboard: [
    { src: `${S3_BASE}240205%20Overboard%20WL.MP4`, label: "Overboard Trailer" },
  ],
  "superhero-academy": [
    { src: `${S3_BASE}240421%20Superhero%20Academy%20LR.mp4`, label: "Superhero Academy Trailer" },
  ],
  "wizardly-party": [
    { src: `${S3_BASE}240421%20Wizardly%20WL.MP4`, label: "Wizardly Party Trailer" },
  ],
  "bow-to-bow": [
    { src: `${S3_BASE}240425%20Bow%20to%20Bow%20WL.MP4`, label: "Bow to Bow Trailer" },
  ],
  supercharged: [
    { src: `${S3_BASE}240425%20Supercharged%20WL.MP4`, label: "Supercharged Trailer" },
  ],
  "sean-heydon": [
    { src: `${S3_BASE}250604%20Premium%20Magic%20-%20Sean%20BGT.mp4`, label: "Sean Heydon — Britain's Got Talent" },
  ],
  burlesque: [
    { src: `${S3_BASE}250719%20Burleque_WL.mp4`, label: "Burlesque Trailer" },
  ],
  "michael-jackson": [
    { src: `${S3_BASE}250722%20MJ_WL.mp4`, label: "Michael Jackson Tribute Trailer" },
  ],
  "murder-mystery": [
    { src: `${S3_BASE}250810%20Murder%20Mystery%20WL.mp4`, label: "Murder Mystery Trailer" },
  ],
  "visual-variety": [
    { src: `${S3_BASE}250810%20Visual%20Variety_WL.mp4`, label: "Visual Variety Trailer" },
  ],
  // Tribute Bands shared trailer
  abba: [
    { src: `${S3_BASE}250722%20Tribute%20Bands_WL.mp4`, label: "Tribute Bands Showreel" },
  ],
  "taylor-swift": [
    { src: `${S3_BASE}250722%20Tribute%20Bands_WL.mp4`, label: "Tribute Bands Showreel" },
  ],
  "daft-punk": [
    { src: `${S3_BASE}250722%20Tribute%20Bands_WL.mp4`, label: "Tribute Bands Showreel" },
  ],
  "jazz-trio": [
    { src: `${S3_BASE}251016%20BANDS%20SER%20Clip.mp4`, label: "Party Bands Clip" },
  ],
};

// General showreel for shows without a dedicated video
export const generalShowreel: ShowVideo = {
  src: `${S3_BASE}250816%20Premium%20Entertainment%20Showreel_WL.mp4`,
  label: "Aquavistas Entertainment Showreel",
};

// LTH teaser for treasure hunt pages
export const lthTeaser: ShowVideo = {
  src: `${S3_BASE}240502%20LTH%20Teaser%20WL.MP4`,
  label: "Luxury Treasure Hunts Teaser",
};
