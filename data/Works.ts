export enum AwardType {
  WINNER,
  NOMINEE,
  OFFICAL_SELECTION,
  SEMI_FINALIST,
  FINALIST,
  HONOURABLE_MENTION,
}

export default [
  {
    title: "Ah (The Sperm)",
    type: "Short Film",
    year: "2018",
    trailer: "",
    crew: [
        {title: "Director", name: "Yoginee (a) Vishnu Devi Arul"},
        {title: "Cast", name: "Gabrella Sellus"},
        {title: "Director Of Photography", name: "Sridhar G."},
        {title: "Music", name: "Sam C. S."},
        {title: "Edited By", name: "Gowtham G. A."},
        {title: "Stills", name: "CTSK"},
        {title: "Sound", name: "Sudharsan Lingam (SoundParti Studios)"},
        {title: "VFX", name: "Arunachalam"},
        {title: "Lyrics", name: "Yoginee (a) Vishnu Devi Arul"},
    ],
    description:
      `Apprehensions and incertitude of a teenage Indian female sex worker who works in a brothel in her town having lost her mother to death and father to ignorance. They still have ethics in their profession. Her never ending search and the emotions portrays her struggle. The film was shot in a single room with a single actress.`,
    poster: "/img/posters/ah.webp",
    awards: [
      {
        name: "Direct Monthly Online Film Festival",
        date: "2018",
        category: "Best Female Director",
        award: AwardType.WINNER,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "Goa Short Film Festival",
        date: "2018",
        category: "Best Fiction Film",
        award: AwardType.NOMINEE,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "Lake View International Film Festival",
        date: "2018",
        category: "Best Indian Short Film",
        award: AwardType.WINNER,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "Top Indie Film Awards",
        date: "2018",
        category: "Best Actress",
        award: AwardType.WINNER,
        winner: "Gabrella",
      },
      {
        name: "Top Indie Film Awards",
        date: "2018",
        category: "Best Short Film",
        award: AwardType.NOMINEE,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },

      {
        name: "Top Indie Film Awards",
        date: "2018",
        category: "Best Cinematography",
        award: AwardType.NOMINEE,
        winner: "Sridhar",
      },

      {
        name: "Top Indie Film Awards",
        date: "2018",
        category: "Best Music",
        award: AwardType.NOMINEE,
        winner: "Sam C. S.",
      },
      {
        name: "Eurasia International Monthly Film Festival",
        date: "2018",
        category: "Best Short Film",
        award: AwardType.SEMI_FINALIST,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "Cine Fern",
        date: "2018",
        category: "Winner Of The Month",
        award: AwardType.WINNER,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "Starlight Film Awards",
        date: "2018",
        category: "Best Actress",
        award: AwardType.WINNER,
        winner: "Gabrella Sellus",
      },
      {
        name: "Inshort Film Festival",
        date: "2018",
        category: "Best Short Film",
        award: AwardType.OFFICAL_SELECTION,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "Bengals International",
        date: "2019",
        category: "Best Short Film",
        award: AwardType.FINALIST,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "5th International Short Film Festival Pune India 20",
        date: "2019",
        category: "Best Short Film",
        award: AwardType.SEMI_FINALIST,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "Cinema Of The World",
        date: "2019",
        category: "Best Short Film",
        award: AwardType.OFFICAL_SELECTION,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
      {
        name: "St. Francis College Women's Film Festival",
        date: "2019",
        category: "Best Short Film",
        award: AwardType.OFFICAL_SELECTION,
        winner: "Yoginee (a) Vishnu Devi Arul",
      },
    ],
  },
  {
    title: "Kumaresan Collector",
    type: "Short Film",
    year: "2022",
    crew: [
        {title: "Director", name: "Nivas Adithan"},
        {title: "Writer", name: "Nivas Adithan"},
        {title: "Writer", name: "Yoginee (a) Vishnu Devi Arul"},
        {title: "Producer", name: "Nivas Adithan"},
        {title: "Producer", name: "Yoginee (a) Vishnu Devi Arul"},
        {title: "Art", name: "Yoginee (a) Vishnu Devi Arul"},
        {title: "Cast", name: "Uma"},
        {title: "Cast", name: "Arya"},
        {title: "Cinematography", name: "Manish Murthy"},
        {title: "Editor", name: "Sudhar (Director of Tamil film Thittam Poattu Thirudura Kootam)"},
        {title: "DI", name: "Veeraragavan"},
        {title: "VFX", name: "Vetri Selvan B."},
        {title: "Sound Design & Mixing", name: "Arunkanth"},
        {title: "Poster Design", name: "Chathriya"},
        {title: "Locations", name: "'Aura' Uma"},
    ],
    trailer: "https://player.vimeo.com/video/755227143?h=68ea5ce42b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description: "Kumaresan lives with his mother and his little sister. His family depends on the free afternoon meal provided by the government of Tamil Nadu for poor students at school. He sacrifices his meal for his mother and his little sister. No matter what happens, he always remains happy. He has his own dreams. One such dream is his desire to become a collector (IAS Officer). The film says happiness lies in small things. Beyond poverty and struggles, there exists HOPE which gives one happiness and confidence.",
    poster: "/img/posters/kumaresan_collector.webp",
    awards: [
      {
        name: "Istanbul Film Awards",
        date: "2022",
        category: "Best Picture",
        award: AwardType.WINNER,
        winner: "Nivas Adithan",
      },
      {
        name: "Goa Short Film Festival",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.OFFICAL_SELECTION,
        winner: "Nivas Adithan",
      },
      {
        name: "Flatness Film Awards",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.FINALIST,
        winner: "Nivas Adithan",
      },
      {
        name: "Europe Independent Movie Festival",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.OFFICAL_SELECTION,
        winner: "Nivas Adithan",
      },
      {
        name: "Direct Monthly Online Film Festival",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.OFFICAL_SELECTION,
        winner: "Nivas Adithan",
      },
      {
        name: "Hollywood's Monthly Film Festival",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.SEMI_FINALIST,
        winner: "Nivas Adithan",
      },
      {
        name: "Lift-Off Filmaker Sessions @ pinewoodstudios",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.OFFICAL_SELECTION,
        winner: "Nivas Adithan",
      },
      {
        name: "London International Monthly Film Festival",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.HONOURABLE_MENTION,
        winner: "Nivas Adithan",
      },
      {
        name: "Athens International Monthly Film Festival",
        date: "2022",
        category: "Best Short Film",
        award: AwardType.HONOURABLE_MENTION,
        winner: "Nivas Adithan",
      },
    ],
  },
];
