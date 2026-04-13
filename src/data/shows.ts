export interface Show {
  id: string;
  name: string;
  category: "celebration" | "family" | "kids";
  subcategory?: string;
  description: string;
  duration: string;
  performers: string;
  support?: string;
  shortDescription: string;
  isPopular?: boolean;
  isBand?: boolean;
}

export const showCategories: Record<Show["category"], string> = {
  celebration: "Celebration",
  family: "Family",
  kids: "Little Ones",
};

export const celebrationSubcategories = [
  "Cabaret",
  "Tribute Bands",
  "Aquavistas Got Talent",
] as const;

export const shows: Show[] = [
  // ── CELEBRATION ──
  {
    id: "magic-mike",
    name: "Magic Mike",
    category: "celebration",
    description:
      "Cameras off for this show… Bring this fun and powerful show to your guests for an unforgettable night. Experience a medley of group and solo performances. Expect daring dancing, acrobatics, playful interactions and a powerhouse night from our talented performers!",
    duration: "50 mins",
    performers: "3 performers",
    support: "2 support",
    shortDescription: "Daring dance, acrobatics & a powerhouse night.",
  },
  {
    id: "classical",
    name: "Classical",
    category: "celebration",
    description:
      "An elegant evening of classical music, performed by world-class musicians on violin and piano. With a repertoire of timeless pieces, this performance sets the perfect tone — whether during dinner, a cocktail hour or throughout the evening. Each musician has performed at prestigious concert halls and unique venues worldwide. Their artistry and experience ensure an unforgettable performance.",
    duration: "1 hr",
    performers: "2 performers",
    support: "1 support",
    shortDescription: "World-class violin & piano for elegant yacht evenings.",
  },
  // Cabaret sub-section
  {
    id: "great-gatsby",
    name: "Cabaret des Rêves",
    category: "celebration",
    subcategory: "Cabaret",
    description:
      "A night of the best entertainment in the world with your favourite guests. Inspired by the 1920s, expect amazement and wonders. We bring outfits and masks to get guests dressed up. Welcoming award-winning acts and talent from the four corners of the world to the best stage: yours.",
    duration: "60–90 mins",
    performers: "3–6 performers",
    shortDescription: "1920s-inspired cabaret with world-class acts.",
  },
  {
    id: "burlesque",
    name: "Burlesque",
    category: "celebration",
    subcategory: "Cabaret",
    description:
      "We bring a touch of forbidden elegance to any party with our headliner Jolie Papillon. Burlesque, a Martini Glass, not so much on the dry side. \"Queen of Classic Burlesque\" — The Stage. \"Moves for Days\" — Broadway World UK. \"One of the sexiest bath scenes an audience might ever encounter\" — London Theatre.",
    duration: "3×10 mins (dinner)",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "Forbidden elegance with headliner Jolie Papillon.",
  },
  // Tribute Bands sub-section
  {
    id: "abba",
    name: "ABBA",
    category: "celebration",
    subcategory: "Tribute Bands",
    description:
      "Shift the mood of your trip with the world's best ABBA tribute, direct from Broadway and beyond. This is your chance to dance, sing, and celebrate the magic of ABBA at sea.",
    duration: "90 mins",
    performers: "7 performers",
    support: "3 support",
    shortDescription: "The world's best ABBA tribute, direct from Broadway.",
    isBand: true,
  },
  {
    id: "daft-punk",
    name: "Daft Punk",
    category: "celebration",
    subcategory: "Tribute Bands",
    description:
      "Recreate the pyramid performance in this retrofuturist-style show with a bespoke, yacht-friendly light show, transforming the deck into an immersive space. The music is performed live — driven by drums and guitar — in a show designed to stay with you… One More Time.",
    duration: "90 mins",
    performers: "2 performers",
    support: "3 support",
    shortDescription: "Retrofuturist live show transforming your yacht deck.",
    isBand: true,
  },
  {
    id: "michael-jackson",
    name: "Michael Jackson",
    category: "celebration",
    subcategory: "Tribute Bands",
    description:
      "We bring to you the ultimate and award-winning Michael Jackson tribute. With a four-piece band and dancers, this is a show like no other.",
    duration: "60–90 mins",
    performers: "7–9 performers",
    support: "3 support",
    shortDescription: "The ultimate award-winning MJ tribute on your yacht.",
    isBand: true,
  },
  {
    id: "taylor-swift",
    name: "Taylor Swift",
    category: "celebration",
    subcategory: "Tribute Bands",
    description:
      "A high-energy tribute showcasing Taylor Swift's biggest hits, complete with era-defining outfits and show-stopping performances — an unforgettable journey through her music.",
    duration: "60–90 mins",
    performers: "7 performers",
    support: "3 support",
    shortDescription: "Era-defining outfits & show-stopping Taylor hits.",
    isBand: true,
  },
  {
    id: "jazz-trio",
    name: "Jazz Trio",
    category: "celebration",
    subcategory: "Tribute Bands",
    description:
      "Step back into the golden age of jazz with a glamorous vocal trio, bringing the roaring '20s to life. With rich harmonies, vintage charm, and timeless classics, their performance is effortlessly stylish.",
    duration: "2×60 or 3×40 mins",
    performers: "3–9 performers",
    support: "3 support",
    shortDescription: "Golden-age glamour with rich harmonies & vintage charm.",
    isBand: true,
  },
  {
    id: "party-bands",
    name: "Party Bands",
    category: "celebration",
    subcategory: "Tribute Bands",
    description:
      "Enjoy this amazing acoustic party band, based out of the South of France. Songs you know and love, or some of the French & Italian classics.",
    duration: "1 hr",
    performers: "4 performers",
    support: "1 support",
    shortDescription: "Acoustic party band with French & Italian classics.",
    isBand: true,
  },
  // Aquavistas Got Talent sub-section
  {
    id: "sean-heydon",
    name: "Sean Heydon",
    category: "celebration",
    subcategory: "Aquavistas Got Talent",
    description:
      "Sean is the 'Card Trick King', the best in the world with a deck of cards, as well as an array of top-quality illusions to mesmerise your guests. A world-class magic experience performed by an elite illusionist. As seen on TV talent shows, sold-out theatres, and exclusive private events.",
    duration: "60 mins",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "The 'Card Trick King' — world-class close-up magic.",
    isPopular: true,
  },
  {
    id: "alex-trust",
    name: "Alex Trust",
    category: "celebration",
    subcategory: "Aquavistas Got Talent",
    description:
      "Alexandra is a Russian-speaking magician, with numerous TV performances and award-winning magic that is performed to the most discerning guests around the world.",
    duration: "60 mins",
    performers: "2 performers",
    support: "1 support",
    shortDescription: "Award-winning magic for the most discerning guests.",
  },
  {
    id: "magic-circle-president",
    name: "Marvin Berglas",
    category: "celebration",
    subcategory: "Aquavistas Got Talent",
    description:
      "Marvin Berglas continues a family dynasty of magic, founding the globally sold Marvin's Magic, and current President of the Magic Circle. Experience a close-up, intimate show with one of the world's best-renowned magicians.",
    duration: "60 mins",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "Magic Circle President — a dynasty of world-class magic.",
  },
  {
    id: "mind-2-mind",
    name: "Mind 2 Mind",
    category: "celebration",
    subcategory: "Aquavistas Got Talent",
    description:
      "In 2025, James and Marina became FISM World Champions — the \"Olympics of Magic.\" In 77 years of competition, mentalism has taken the top title only four times. Mind to Mind is one of four acts in history. Called \"mind-blowing\" by Simon Cowell, \"sensational\" by Derren Brown, and \"as good as it gets\" by David Blaine — they are the duo David Blaine trusts to perform for his own private guests. Blindfolded, Marina identifies personal objects, serial numbers, and private memories — with no electronics, no pre-show data, no explanation. This is not a magic show. It is a shared experience that becomes the story your guests tell the next morning.",
    duration: "1 hr",
    performers: "2 performers",
    support: "1 support",
    shortDescription: "FISM World Champions — \"as good as it gets\" — David Blaine.",
  },
  {
    id: "seance",
    name: "Séance",
    category: "celebration",
    subcategory: "Aquavistas Got Talent",
    description:
      "It is time to offer your bravest guests a brand-new experience! Witness an all-new level of unexpected with world-renowned mentalist and magician Paul — resident at the Venetian and Disney parks regular. With only your people in the close-quarters séance room, he brings the supernatural to a whole new level of reality. Everyone joins hands, and candles are extinguished. In pitch darkness, Paul summons the spirits. Amid the gasps of participants, objects levitate from the table. Glasses shatter, metal bends, and something reaches through the darkness. The show can be tailored to be more or less scary according to audience. Paul can also perform individual readings for guests wanting to peek into the future. \"Paul created the best séance ever\" — Larry Sloman, New York Times best-selling author of The Secret Life of Houdini.",
    duration: "1 hr",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "\"The best séance ever\" — supernatural mentalism at sea.",
  },
  {
    id: "markobi",
    name: "Markobi",
    category: "celebration",
    subcategory: "Aquavistas Got Talent",
    description:
      "Markobi won 1st Prize at the FISM World Championships in Québec in 2022 in the Card Magic category. He Fooled Penn & Teller on their show Fool Us and won the Platinum Buzzer on France's Got Talent. Considered by his peers as the best card magician in the world, Markobi does not have a set — he shares moments of magic tailored to your guests, following their moods and fancies. The show is set in an intimate close-up setting with guests sitting as close to his table as possible so they cannot miss a thing. A unique blend of relaxed wonders from the very best in the business, up close and personal.",
    duration: "60 mins",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "FISM World Champion — the best card magician in the world.",
  },
  {
    id: "bow-to-bow",
    name: "Bow to Bow",
    category: "celebration",
    description:
      "We bring to you the unique and award-winning Orissa Kelly with a bespoke show for yacht owners. Blending her aerial poetry, the hypnotic sensuality of fire and her heart-stopping archery — this is a show like no other. Orissa is one of the most in-demand acrobatics performers, having headlined Billionaire. Her signature act is shooting an arrow, whilst upside down, with her feet — she is the only one in the world to perform this feat. The show is an in-between courses dinner experience with a unique finale using the crane for aerial poetry over the sea, lit up by underwater lights, fire dazzlement and a finale on the helipad.",
    duration: "3×10 mins (dinner)",
    performers: "1 performer",
    support: "2 support",
    shortDescription: "Award-winning Orissa Kelly — aerial poetry, fire & archery.",
  },
  // ── FAMILY ──
  {
    id: "visual-variety",
    name: "Visual Variety",
    category: "family",
    description:
      "The Whimsical Wonders of Mat Ricardo. \"Mat Ricardo is amazing\" — HRH King Charles III. \"So, so funny\" — Larry David. \"My favourite show\" — Emma Thompson. Mat is one of the best performers alive. He has won numerous awards and has a show for yachts! ★★★★★ from The Herald, Fringe Guru, Broadway Baby, The Scotsman and Time Out.",
    duration: "1 hr",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "\"Mat Ricardo is amazing\" — HRH King Charles III.",
  },
  {
    id: "overboard",
    name: "Overboard",
    category: "family",
    description:
      "Magic, Miracles and Mischief. No matter how close you get, our magicians perform miracles with cards, money, food or drinks — sometimes borrowing items from the audience, yet always leaving guests with a souvenir and a story to share. We have put together a nautical feast of magic and illusions that will entertain and delight adults and children alike. All Overboard Magicians are Members of The Magic Circle with careers spanning over 15 years, performing for audiences from royalty (Prince's Trust) to rock stars (Ronnie Wood).",
    duration: "1 hr",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "Magic Circle magicians — miracles, mischief & souvenirs.",
  },
  {
    id: "murder-mystery",
    name: "Murder Mystery",
    category: "family",
    description:
      "Suspect everyone! Become both accomplice and culprit in your very own Murder Mystery party. With the help of our actors, we bring the mystery and fun to the heart of your trip. We provide tuxedos for guests and secret identities for all in this spy-themed casino night! Play as late as you want once the murderer is found in your own private onboard casino!",
    duration: "2–4 hrs",
    performers: "3 performers",
    shortDescription: "Spy-themed casino night with tuxedos & secret identities.",
    isPopular: true,
  },
  {
    id: "treasure-rush",
    name: "Treasure Rush",
    category: "family",
    description:
      "Teams of Treasure Hunters go head to head to solve clues, riddles and obstacles against the clock (and each other) in a winner-takes-all Treasure Hunting extravaganza. Held over a day near your boat, the teams will rush around local landmarks and secret locations to test their skills in a contest of wits and problem solving. Half-day hunts available in the Med and Caribbean.",
    duration: "Half day",
    performers: "2–8 performers",
    shortDescription: "Competition-style Treasure Hunt — winner takes all.",
    isPopular: true,
  },
  {
    id: "lost-legacy",
    name: "Lost Legacy",
    category: "family",
    description:
      "Our Treasure Hunt team has compelling evidence that pirate John Rackham's lost ship, The Ranger, was wrecked… close to where your yacht is anchored. With a known heir who didn't inherit the famous pirate's fortune, we take up the challenge of retracing his steps and follow clues to the actual treasure. 1 to 3 day hunts available in the Med and Caribbean.",
    duration: "1–3 days",
    performers: "2–8 performers",
    shortDescription: "Epic family pirate adventure spanning 1–3 days.",
  },
  // ── KIDS (Little Ones) ──
  {
    id: "wizardly-party",
    name: "Wizardly Magic Party",
    category: "kids",
    description:
      "We bring the magic to you! Just for you, the ban on underage wizardry is lifted for this evening! Expect special tuition of Potions, Spells and a bit of quidditch fun. Wands will be provided in this unique \"magic-in-your-hands\" experience (no prior magical training necessary). All under strict wizard supervision of course… Just don't tell the muggles…",
    duration: "1.5 hrs",
    performers: "2 performers",
    support: "1 support",
    shortDescription: "Potions, spells & quidditch — wands provided!",
  },
  {
    id: "freestyle-football",
    name: "Freestyle Football",
    category: "kids",
    description:
      "For football fans of all ages, we bring to you some of the best Freestyle Footballers. With trick shots that defy gravity, get that touch of football back onboard! Perfect for children and families wanting a fun show and to learn (or improve) their freestyle skills. For children of all ages!",
    duration: "1 hr",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "Gravity-defying freestyle tricks for all ages.",
  },
  {
    id: "supercharged",
    name: "Supercharged",
    category: "kids",
    description:
      "Children entertainment like you've never seen. Kurtis trained with Disney Cruises and through his 15+ year career has performed for large audiences on land and onboard. His specialty is entertaining children of all ages and hosting workshops where they'll learn skills they'll keep forever. Choose from Circus (juggling, plate spinning, straight jacket escape), Magic (colourful props, wands, floating table illusion) or Music Parties (interactive games and children's karaoke). No matter which way we look at it, keeping children happy is key to keeping parents, principal and crew happy. This is the silver bullet you've been looking for.",
    duration: "1–2 hrs",
    performers: "1 performer",
    support: "1 support",
    shortDescription: "Disney-trained magic, circus & music — the silver bullet.",
    isPopular: true,
  },
  {
    id: "superhero-academy",
    name: "Superhero Academy",
    category: "kids",
    description:
      "No matter whether you are a Marvel or DC fan, there is only one Spiderman… unless you count all the Spidermen from all the 'multiverses' of course… For now, we have our one and only Spidey for you on your yacht. The ultimate meet-and-greet with a display of super heroic skills and fun. Celebrate birthdays and other occasions like no other — Spidey will teach his students the values and skills needed to become an outstanding superhero through a series of immersive games. Join Spidey to discover your superpowers and watch him demonstrate his superhuman skills against anyone (including the strongest deckie)!",
    duration: "1 hr",
    performers: "2 performers",
    shortDescription: "Spidey's superhero training for your little ones.",
  },
];
