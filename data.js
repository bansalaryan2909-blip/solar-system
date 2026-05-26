const SUN_DATA = {
    name: "The Sun",
    subtitle: "Our Parent Star",
    classification: ["G-Type Main Sequence", "Yellow Dwarf", "Age: 4.6 Billion Years"],
    facts: [
        { icon: "🔥", text: "The Sun's core temperature reaches 15 million °C — hot enough to sustain nuclear fusion, converting 600 million tons of hydrogen into helium every second." },
        { icon: "💥", text: "The Sun contains 99.86% of all mass in the solar system. You could fit 1.3 million Earths inside it." },
        { icon: "⚡", text: "Solar flares release energy equivalent to millions of 100-megaton hydrogen bombs in minutes, hurling plasma at millions of km/h." },
        { icon: "🌊", text: "The Sun's surface (photosphere) is about 5,500°C, but its outer atmosphere (corona) mysteriously reaches over 1 million °C — a puzzle physicists still can't fully explain." },
        { icon: "💨", text: "The solar wind — a stream of charged particles — travels at 400-800 km/s and creates a bubble called the heliosphere that extends far past Pluto." },
        { icon: "🎵", text: "The Sun vibrates in millions of acoustic modes simultaneously. Helioseismology uses these 'sound waves' to map the Sun's hidden interior." },
        { icon: "⏱️", text: "Light from the Sun takes 8 minutes 20 seconds to reach Earth, but a photon generated in the core takes roughly 100,000 years to reach the surface due to constant absorption and re-emission." },
        { icon: "💀", text: "In about 5 billion years, the Sun will exhaust its hydrogen fuel, swell into a red giant engulfing Mercury, Venus, and possibly Earth, then collapse into a white dwarf the size of Earth." }
    ],
    history: [
        { heading: "Ancient Worship", text: "The Sun has been worshipped by virtually every civilization in human history. The Egyptians revered Ra, the sun god who sailed across the sky each day. The Aztecs built pyramids to Tonatiuh and believed the Sun required human sacrifice to continue rising. In ancient Greece, Helios drove a chariot of fire across the heavens." },
        { heading: "Early Scientific Understanding", text: "The ancient Greeks were the first to study the Sun scientifically. Anaxagoras (450 BCE) proposed the Sun was a giant burning stone — and was imprisoned for heresy. Aristarchus suggested Earth orbited the Sun around 270 BCE, but the idea was rejected for nearly 2,000 years until Copernicus revived it in 1543." },
        { heading: "The Telescope Revolution", text: "Galileo's telescopic observations of sunspots in 1610 proved the Sun was not a perfect, unchanging sphere. Over the following centuries, astronomers discovered the solar cycle (Heinrich Schwabe, 1843), spectral absorption lines revealing the Sun's composition, and helium — an element discovered on the Sun before it was found on Earth." },
        { heading: "Nuclear Fusion Revealed", text: "In the 1920s-30s, Arthur Eddington proposed that the Sun was powered by nuclear fusion. Hans Bethe worked out the precise nuclear reactions in 1939 — the proton-proton chain — earning a Nobel Prize. This solved the centuries-old mystery of how the Sun could shine so brightly for billions of years." },
        { heading: "The Space Age of Solar Science", text: "NASA and ESA have launched dozens of solar observatories. Skylab (1973) provided the first detailed UV and X-ray images. SOHO (1995) revolutionized our understanding of solar wind and coronal mass ejections. The Solar Dynamics Observatory (2010) captures stunning 4K images of the Sun every 12 seconds." },
        { heading: "Parker Solar Probe — Touching the Sun", text: "Launched in 2018, NASA's Parker Solar Probe is the closest human-made object to the Sun, diving within 6.1 million km of the surface at speeds exceeding 690,000 km/h — the fastest object ever built. In 2021, it became the first spacecraft to fly through the Sun's corona, sampling solar particles directly." }
    ]
};

const PLANETS = [
  {
    name: "Mercury",
    orbitRadius: 75,
    size: 8,
    speed: 0.015,
    color: "#a0a0a0",
    gradient: "radial-gradient(circle at 35% 35%, #d4d4d4, #a0a0a0 40%, #6b6b6b 70%, #3a3a3a)",
    shadowColor: "rgba(160,160,160,0.3)",
    subtitle: "The Swift Messenger",
    facts: [
      { icon: "🔥", text: "Surface temperatures swing from -180°C at night to 430°C during the day — the most extreme temperature range of any planet." },
      { icon: "💨", text: "Mercury has virtually no atmosphere. It has an ultra-thin exosphere made of atoms blasted off its surface by solar wind." },
      { icon: "⏱️", text: "A single day on Mercury (sunrise to sunrise) lasts 176 Earth days — longer than its year of 88 Earth days." },
      { icon: "🧲", text: "Despite its small size, Mercury has a global magnetic field — roughly 1% the strength of Earth's." },
      { icon: "💥", text: "The Caloris Basin, a massive impact crater, is 1,550 km wide. The impact was so violent it created chaotic terrain on the opposite side of the planet." },
      { icon: "📏", text: "Mercury is shrinking. Over billions of years it has contracted by more than 7 km in radius as its iron core slowly cools." }
    ],
    moons: [],
    history: [
      { heading: "Ancient Observations", text: "Mercury has been known since at least 3000 BCE. The ancient Sumerians called it 'Ubu-idim-gud-ud.' The Greeks initially thought it was two separate objects — Apollo (morning star) and Hermes (evening star) — before realizing it was one planet." },
      { heading: "Naming & Mythology", text: "The Romans named it Mercury after their swift-footed messenger god, because it moves across the sky faster than any other planet. Its rapid orbit of just 88 days made it the perfect namesake for the god of speed and commerce." },
      { heading: "Telescopic Era", text: "Galileo observed Mercury in the early 17th century, but his telescope was too weak to see its phases. In 1631, Pierre Gassendi made the first telescopic transit observation. It wasn't until the 1800s that Giovanni Schiaparelli attempted to map its surface." },
      { heading: "Mariner 10 — First Visitor", text: "In 1974-75, NASA's Mariner 10 became the first spacecraft to visit Mercury, making three flybys. It mapped about 45% of the surface and discovered Mercury's unexpected magnetic field — a major surprise for such a small, slowly rotating world." },
      { heading: "MESSENGER Mission", text: "NASA's MESSENGER spacecraft orbited Mercury from 2011 to 2015, mapping the entire surface in stunning detail. It discovered water ice in permanently shadowed craters near the poles, found evidence of past volcanic activity, and confirmed the planet is still shrinking." },
      { heading: "BepiColombo & The Future", text: "The ESA-JAXA BepiColombo mission launched in 2018 and is en route to Mercury. It will study the planet's magnetic field, surface composition, and interior structure in unprecedented detail when it enters orbit, opening a new chapter in Mercury exploration." }
    ]
  },
  {
    name: "Venus",
    orbitRadius: 110,
    size: 14,
    speed: 0.011,
    color: "#e8c56d",
    gradient: "radial-gradient(circle at 35% 35%, #f5e6b8, #e8c56d 40%, #c4943a 70%, #8a6420)",
    shadowColor: "rgba(232,197,109,0.3)",
    subtitle: "Earth's Evil Twin",
    facts: [
      { icon: "🌡️", text: "Venus is the hottest planet in the solar system at 465°C — hot enough to melt lead — even though Mercury is closer to the Sun." },
      { icon: "🔄", text: "Venus rotates backwards (retrograde rotation) and so slowly that a day on Venus is longer than its year: 243 Earth days vs 225 Earth days." },
      { icon: "🌋", text: "Venus has over 1,600 major volcanoes — more than any other planet. Recent evidence suggests some may still be active today." },
      { icon: "💀", text: "Its atmosphere is 96% carbon dioxide with clouds of sulfuric acid. The surface pressure is 92 times Earth's — like being 900 meters underwater." },
      { icon: "⚡", text: "Lightning storms rage in Venus's thick clouds. The planet also has a mysterious 'super-rotation' where its atmosphere circles the planet in just 4 days." },
      { icon: "🪞", text: "Venus is the brightest natural object in the night sky after the Moon, so bright it can cast shadows on Earth." }
    ],
    moons: [],
    history: [
      { heading: "The Morning & Evening Star", text: "Venus has been observed since prehistoric times. Like Mercury, ancient civilizations initially thought it was two objects — the 'morning star' and 'evening star.' The Babylonians were among the first to recognize it as a single body around 1581 BCE." },
      { heading: "Cultural Significance", text: "Named after the Roman goddess of love and beauty, Venus has captivated cultures worldwide. The Maya based their calendar partly on Venus's cycles. In many cultures, Venus was associated with femininity, love, and war." },
      { heading: "Early Space Exploration", text: "The Soviet Union's Venera program was the first to explore Venus. Venera 3 became the first human-made object to reach another planet in 1966 (though it crashed). Venera 7 made the first successful landing in 1970, surviving the hellish conditions for 23 minutes." },
      { heading: "Mapping Through Clouds", text: "NASA's Magellan spacecraft (1990-1994) used radar to peer through Venus's thick clouds and map 98% of the surface. It revealed a world of vast volcanic plains, massive shield volcanoes, and unique geological features found nowhere else in the solar system." },
      { heading: "The Phosphine Controversy", text: "In 2020, scientists announced the detection of phosphine gas in Venus's clouds — a potential biosignature. The finding sparked intense debate and renewed interest in Venus as a possible habitat for microbial life floating in its cloud layers." },
      { heading: "New Missions Ahead", text: "NASA's VERITAS and DAVINCI missions, along with ESA's EnVision, are planned to return to Venus in the late 2020s-2030s. They will study whether Venus once had oceans, investigate its geology, and search for signs of volcanic activity." }
    ]
  },
  {
    name: "Earth",
    orbitRadius: 150,
    size: 15,
    speed: 0.009,
    color: "#4a90d9",
    gradient: "radial-gradient(circle at 35% 35%, #7ec8e3, #4a90d9 35%, #2d6a4f 55%, #1a4731 70%, #1b3a5c 90%)",
    shadowColor: "rgba(74,144,217,0.3)",
    subtitle: "The Blue Marble",
    facts: [
      { icon: "💧", text: "Earth is the only known planet with liquid water on its surface — about 71% of the surface is covered by oceans containing 1.335 billion cubic km of water." },
      { icon: "🛡️", text: "Earth's magnetic field extends 65,000 km into space, deflecting deadly solar radiation and preventing the atmosphere from being stripped away." },
      { icon: "🌍", text: "Earth is the densest planet in the solar system at 5.51 g/cm³, thanks to its massive iron-nickel core." },
      { icon: "🏔️", text: "The tallest mountain from base to peak isn't Everest — it's Mauna Kea in Hawaii at 10,203 meters from its oceanic base, with most of it underwater." },
      { icon: "⚡", text: "About 100 lightning bolts strike the Earth's surface every single second — that's roughly 8.6 million strikes per day." },
      { icon: "🦠", text: "Life exists in the most extreme environments on Earth — from boiling hydrothermal vents 4 km deep to frozen Antarctic ice sheets, and even inside nuclear reactors." }
    ],
    moons: [
      {
        name: "The Moon (Luna)",
        size: 40,
        color: "#c8c8c8",
        gradient: "radial-gradient(circle at 35% 35%, #e8e8e8, #c8c8c8 40%, #999 70%, #666)",
        subtitle: "Earth's Faithful Companion",
        facts: [
          { icon: "🌊", text: "The Moon's gravity causes Earth's ocean tides. It's slowly moving away from Earth at 3.8 cm per year." },
          { icon: "👣", text: "12 humans have walked on the Moon between 1969 and 1972 during NASA's Apollo program." },
          { icon: "🔒", text: "The Moon is tidally locked — the same side always faces Earth. The far side wasn't seen until 1959." },
          { icon: "💥", text: "The leading theory is that the Moon formed when a Mars-sized body called Theia slammed into early Earth 4.5 billion years ago." },
          { icon: "🥶", text: "Temperatures range from 127°C in sunlight to -173°C in shadow. Permanently shadowed craters contain water ice." }
        ]
      }
    ],
    history: [
      { heading: "Formation — 4.5 Billion Years Ago", text: "Earth formed from the solar nebula about 4.54 billion years ago. In its early days, it was a molten hellscape bombarded by asteroids. A collision with a Mars-sized body called Theia created the Moon and tilted Earth's axis, giving us seasons." },
      { heading: "The Hadean & Archean Eons", text: "For its first billion years, Earth was a violent world of volcanic eruptions and meteor impacts. Gradually, the surface cooled, oceans formed from volcanic outgassing and comet impacts, and the first simple life appeared — microscopic organisms in ancient seas around 3.8 billion years ago." },
      { heading: "The Great Oxidation Event", text: "Around 2.4 billion years ago, cyanobacteria began producing oxygen through photosynthesis. This 'Great Oxidation Event' transformed Earth's atmosphere and was catastrophic for anaerobic life, but it paved the way for complex oxygen-breathing organisms." },
      { heading: "The Cambrian Explosion", text: "About 540 million years ago, life suddenly diversified in the 'Cambrian Explosion.' In a geologically brief period, most major animal groups appeared. This was followed by the colonization of land by plants and animals, transforming Earth's barren continents into lush ecosystems." },
      { heading: "Mass Extinctions & Resilience", text: "Earth has endured five major mass extinctions. The most devastating, the Permian extinction 252 million years ago, killed 96% of marine species. The most famous, 66 million years ago, ended the dinosaurs but allowed mammals — and eventually humans — to rise." },
      { heading: "The Age of Humans", text: "Modern humans appeared roughly 300,000 years ago. In just the last 200 years, we've transformed the planet — industrialization, space exploration, and now grappling with climate change. Earth remains the only known harbor of life in the universe." }
    ]
  },
  {
    name: "Mars",
    orbitRadius: 195,
    size: 11,
    speed: 0.007,
    color: "#c1440e",
    gradient: "radial-gradient(circle at 35% 35%, #e8a87c, #c1440e 40%, #8b2500 70%, #4a1200)",
    shadowColor: "rgba(193,68,14,0.3)",
    subtitle: "The Red Planet",
    facts: [
      { icon: "🏔️", text: "Olympus Mons is the tallest volcano in the solar system at 21.9 km — nearly 2.5 times the height of Mount Everest." },
      { icon: "🌊", text: "Mars once had rivers, lakes, and possibly an ocean covering its northern hemisphere. Evidence of ancient water is everywhere on its surface." },
      { icon: "🌪️", text: "Mars has planet-wide dust storms that can last for months, completely obscuring the surface from view." },
      { icon: "❄️", text: "Both poles have ice caps made of water ice and dry ice (frozen CO₂). The southern cap alone contains enough water ice to cover the planet in 11 meters of water." },
      { icon: "📏", text: "Valles Marineris is a canyon system stretching 4,000 km — so long it would span the entire United States from coast to coast." },
      { icon: "🔴", text: "Mars is red because its surface is rich in iron oxide (rust). The iron was oxidized billions of years ago when Mars had a thicker atmosphere." }
    ],
    moons: [
      {
        name: "Phobos",
        size: 30,
        color: "#8a7d6b",
        gradient: "radial-gradient(circle at 35% 35%, #b0a090, #8a7d6b 40%, #5c5040 70%, #3a3020)",
        subtitle: "The Doomed Moon",
        facts: [
          { icon: "💀", text: "Phobos is slowly spiraling inward and will either crash into Mars or break apart into a ring in about 50 million years." },
          { icon: "⏱️", text: "Phobos orbits Mars in just 7 hours 39 minutes — faster than Mars rotates. It rises in the west and sets in the east." },
          { icon: "🕳️", text: "The Stickney crater is nearly half the diameter of Phobos itself. The impact that created it nearly shattered the moon." },
          { icon: "📏", text: "Phobos is tiny and irregular — only about 27 × 22 × 18 km. Its gravity is so weak you could throw a baseball into orbit." }
        ]
      },
      {
        name: "Deimos",
        size: 22,
        color: "#9a8d7b",
        gradient: "radial-gradient(circle at 35% 35%, #c0b0a0, #9a8d7b 40%, #6c6050 70%, #4a4030)",
        subtitle: "The Tiny Companion",
        facts: [
          { icon: "🪶", text: "Deimos is one of the smallest moons in the solar system — just 15 × 12 × 11 km. It's smoother than Phobos." },
          { icon: "🌅", text: "From Mars's surface, Deimos looks like a bright star rather than a moon due to its tiny size and distant orbit." },
          { icon: "🪨", text: "Both Deimos and Phobos are thought to be captured asteroids, though some scientists believe they formed from debris after a giant impact on Mars." },
          { icon: "⏱️", text: "Deimos orbits Mars in about 30 hours, and unlike Phobos, it's slowly moving away from the planet." }
        ]
      }
    ],
    history: [
      { heading: "Ancient Observations", text: "Mars's distinctive red color made it one of the most recognized objects in the night sky. The ancient Egyptians called it 'Her Desher' (the red one). The Babylonians associated it with their god of war, Nergal, a tradition continued by the Greeks (Ares) and Romans (Mars)." },
      { heading: "The Canal Controversy", text: "In 1877, Italian astronomer Giovanni Schiaparelli reported seeing 'canali' (channels) on Mars. This was mistranslated as 'canals,' leading Percival Lowell to build an entire observatory to study them. He believed they were irrigation systems built by an intelligent civilization — sparking decades of Mars fever." },
      { heading: "First Missions", text: "The Space Age brought Mars into focus. NASA's Mariner 4 flew past Mars in 1965, returning the first close-up photos — revealing a cratered, barren world with no canals. It was a shock. Mariner 9 (1971) became the first spacecraft to orbit another planet, discovering Olympus Mons and Valles Marineris." },
      { heading: "Viking Landings", text: "In 1976, NASA's Viking 1 and 2 became the first spacecraft to successfully land on Mars and send back photos from the surface. They conducted biology experiments searching for life — the results were ambiguous and remain debated to this day." },
      { heading: "The Rover Era", text: "Spirit and Opportunity landed in 2004. Opportunity was designed for 90 days but lasted 15 years, finding definitive evidence of ancient water. Curiosity (2012) discovered organic molecules and seasonal methane. Perseverance (2021) is collecting samples for future return to Earth." },
      { heading: "The Future — Human Mars", text: "Multiple space agencies and private companies are planning crewed missions to Mars in the 2030s-2040s. The challenges are immense — radiation, the 7-month journey, and surviving on a hostile world. But Mars remains humanity's most likely destination for becoming a multi-planet species." }
    ]
  },
  {
    name: "Jupiter",
    orbitRadius: 270,
    size: 30,
    speed: 0.004,
    color: "#c88b3a",
    gradient: "radial-gradient(circle at 35% 35%, #f0d8a8, #c88b3a 30%, #a06820 50%, #8b5e28 65%, #c88b3a 75%, #6b4513 90%)",
    shadowColor: "rgba(200,139,58,0.4)",
    subtitle: "King of the Planets",
    facts: [
      { icon: "👑", text: "Jupiter is so massive that it contains more than twice the mass of all other planets combined. You could fit 1,321 Earths inside it." },
      { icon: "🌀", text: "The Great Red Spot is a storm larger than Earth that has been raging for at least 350 years, with winds exceeding 640 km/h." },
      { icon: "⚡", text: "Jupiter's lightning bolts are up to 1,000 times more powerful than Earth's. Its magnetic field is 20,000 times stronger than ours." },
      { icon: "💨", text: "Despite being the largest planet, Jupiter has the shortest day — just 9 hours 56 minutes. This rapid spin creates its distinctive bands." },
      { icon: "🛡️", text: "Jupiter acts as a cosmic shield, using its massive gravity to deflect or capture asteroids and comets that might otherwise hit Earth." },
      { icon: "🔥", text: "Jupiter radiates nearly twice as much heat as it receives from the Sun, generated by slow gravitational compression of its interior." }
    ],
    moons: [
      {
        name: "Io",
        size: 35,
        color: "#e8c84a",
        gradient: "radial-gradient(circle at 35% 35%, #f5e680, #e8c84a 40%, #c8a030 60%, #a07820 80%)",
        subtitle: "The Volcanic Hellworld",
        facts: [
          { icon: "🌋", text: "Io is the most volcanically active body in the solar system, with over 400 active volcanoes erupting constantly." },
          { icon: "🔥", text: "Volcanic plumes on Io can reach 500 km above the surface. Lava temperatures exceed 1,600°C." },
          { icon: "🧲", text: "Jupiter's intense tidal forces squeeze and stretch Io, generating the internal heat that drives its volcanism." },
          { icon: "🎨", text: "Io's surface is a psychedelic landscape of yellows, reds, and blacks — colored by sulfur and sulfur dioxide from its volcanoes." }
        ]
      },
      {
        name: "Europa",
        size: 33,
        color: "#c8d8e8",
        gradient: "radial-gradient(circle at 35% 35%, #e8f0f8, #c8d8e8 40%, #a0b8d0 70%, #7090b0)",
        subtitle: "The Ocean World",
        facts: [
          { icon: "🌊", text: "Europa has a global ocean beneath its icy shell containing roughly twice as much water as all of Earth's oceans combined." },
          { icon: "🧬", text: "Europa is considered one of the most likely places in the solar system to find extraterrestrial life." },
          { icon: "❄️", text: "Its icy surface is one of the smoothest in the solar system, crisscrossed by mysterious reddish-brown streaks." },
          { icon: "💦", text: "Water vapor plumes have been detected erupting from Europa's surface, potentially offering a way to sample the ocean below." }
        ]
      },
      {
        name: "Ganymede",
        size: 38,
        color: "#a0a8b0",
        gradient: "radial-gradient(circle at 35% 35%, #c8d0d8, #a0a8b0 40%, #808890 70%, #606870)",
        subtitle: "The Giant Moon",
        facts: [
          { icon: "📏", text: "Ganymede is the largest moon in the solar system — bigger than the planet Mercury, with a diameter of 5,268 km." },
          { icon: "🧲", text: "It's the only moon known to have its own magnetic field, generating its own miniature magnetosphere." },
          { icon: "🌊", text: "Ganymede likely has a subsurface ocean sandwiched between layers of ice, possibly 100 km deep." },
          { icon: "🪨", text: "Its surface shows two distinct terrain types: ancient dark regions covered in craters, and younger lighter grooved terrain." }
        ]
      },
      {
        name: "Callisto",
        size: 36,
        color: "#6a6e72",
        gradient: "radial-gradient(circle at 35% 35%, #909498, #6a6e72 40%, #4a4e52 70%, #2a2e32)",
        subtitle: "The Ancient One",
        facts: [
          { icon: "💥", text: "Callisto is the most heavily cratered object in the solar system. Its surface hasn't changed significantly in 4 billion years." },
          { icon: "🌊", text: "Despite its ancient surface, Callisto may harbor a subsurface ocean, making it another candidate for life." },
          { icon: "🛡️", text: "Callisto orbits outside Jupiter's intense radiation belts, making it the safest of the Galilean moons for future human exploration." },
          { icon: "📏", text: "It's nearly the same size as Mercury but only one-third the mass, suggesting it's made of roughly equal parts rock and ice." }
        ]
      }
    ],
    history: [
      { heading: "Ancient Wonder", text: "Jupiter has been observed since ancient times. The Babylonians tracked its movements as early as the 7th century BCE. Named after the king of the Roman gods, Jupiter's brilliance in the night sky made it a symbol of power and authority across many civilizations." },
      { heading: "Galileo's Revolution", text: "In January 1610, Galileo Galilei pointed his telescope at Jupiter and discovered four large moons orbiting it — Io, Europa, Ganymede, and Callisto. This was revolutionary proof that not everything orbited Earth, helping to overthrow the geocentric model of the universe." },
      { heading: "The Great Red Spot", text: "The Great Red Spot was first observed in 1665 by Giovanni Cassini. This anticyclonic storm is the largest in the solar system — at its peak, it was three times the size of Earth. It has been shrinking over the past century but remains one of Jupiter's most iconic features." },
      { heading: "Pioneer & Voyager Flybys", text: "Pioneer 10 (1973) and Pioneer 11 (1974) were the first spacecraft to visit Jupiter, revealing its intense radiation environment. The Voyager missions (1979) discovered Jupiter's faint ring system, active volcanoes on Io, and the possibility of an ocean beneath Europa's ice." },
      { heading: "The Galileo Mission", text: "NASA's Galileo orbiter (1995-2003) spent eight years studying Jupiter and its moons in unprecedented detail. It dropped a probe into Jupiter's atmosphere — the first to directly sample a gas giant. It confirmed Europa's subsurface ocean and revealed the complexity of Jupiter's weather systems." },
      { heading: "Juno & Beyond", text: "NASA's Juno spacecraft has been orbiting Jupiter since 2016, peering beneath the clouds with microwave instruments. It has revealed that Jupiter's iconic bands extend thousands of kilometers deep, its core is 'fuzzy' rather than solid, and its polar regions host stunning geometric cyclone patterns." }
    ]
  },
  {
    name: "Saturn",
    orbitRadius: 350,
    size: 26,
    speed: 0.003,
    color: "#d4a843",
    gradient: "radial-gradient(circle at 35% 35%, #f0dca0, #d4a843 30%, #c49535 50%, #a07828 65%, #d4a843 80%, #806020)",
    shadowColor: "rgba(212,168,67,0.4)",
    hasRing: true,
    subtitle: "The Ringed Wonder",
    facts: [
      { icon: "💍", text: "Saturn's rings span up to 282,000 km in diameter but are incredibly thin — averaging only about 10 meters thick." },
      { icon: "🪶", text: "Saturn is the least dense planet — at 0.687 g/cm³, it would float in water if you could find a bathtub big enough." },
      { icon: "💨", text: "Wind speeds on Saturn can reach 1,800 km/h — among the fastest in the solar system." },
      { icon: "⬡", text: "Saturn's north pole features a persistent hexagonal storm pattern 30,000 km across — large enough to fit four Earths inside." },
      { icon: "🌙", text: "Saturn has at least 146 known moons — more than any other planet. New ones are still being discovered." },
      { icon: "⏱️", text: "Saturn's rings are not permanent. They are slowly raining onto the planet and may disappear entirely within 100 million years." }
    ],
    moons: [
      {
        name: "Titan",
        size: 38,
        color: "#d4a050",
        gradient: "radial-gradient(circle at 35% 35%, #e8c880, #d4a050 40%, #b08030 70%, #806020)",
        subtitle: "The Alien Earth",
        facts: [
          { icon: "🌫️", text: "Titan is the only moon with a thick atmosphere — denser than Earth's, composed mainly of nitrogen with methane clouds and rain." },
          { icon: "🌊", text: "Titan has lakes and seas of liquid methane and ethane on its surface — the only body besides Earth with stable surface liquids." },
          { icon: "📏", text: "Titan is larger than Mercury and is the second-largest moon in the solar system." },
          { icon: "🧬", text: "Titan's complex organic chemistry makes it one of the most intriguing places to search for prebiotic chemistry or exotic life." }
        ]
      },
      {
        name: "Enceladus",
        size: 28,
        color: "#e8e8f0",
        gradient: "radial-gradient(circle at 35% 35%, #ffffff, #e8e8f0 40%, #c0c0d0 70%, #9090a0)",
        subtitle: "The Ice Geyser Moon",
        facts: [
          { icon: "💦", text: "Enceladus shoots massive geysers of water ice and vapor from its south pole through cracks called 'tiger stripes.'" },
          { icon: "🌊", text: "Beneath its icy shell lies a global ocean with hydrothermal vents — conditions similar to where life began on Earth." },
          { icon: "✨", text: "Enceladus is the most reflective body in the solar system, reflecting nearly 100% of the sunlight that hits it." },
          { icon: "🧪", text: "Cassini detected complex organic molecules, molecular hydrogen, and silica nanoparticles in the plumes — strong signs of habitability." }
        ]
      },
      {
        name: "Mimas",
        size: 24,
        color: "#b0b0b8",
        gradient: "radial-gradient(circle at 35% 35%, #d0d0d8, #b0b0b8 40%, #888890 70%, #606068)",
        subtitle: "The Death Star Moon",
        facts: [
          { icon: "💥", text: "Mimas has a giant crater called Herschel that makes it look eerily like the Death Star from Star Wars." },
          { icon: "📏", text: "The Herschel crater is 130 km wide — nearly one-third of Mimas's entire diameter of 396 km." },
          { icon: "🌊", text: "Despite its small size, Mimas may have an internal ocean, suggested by its unusual wobble as it orbits Saturn." },
          { icon: "💍", text: "Mimas's gravity is responsible for the Cassini Division — the largest gap in Saturn's rings." }
        ]
      },
      {
        name: "Iapetus",
        size: 30,
        color: "#8a7060",
        gradient: "radial-gradient(circle at 35% 35%, #c0b0a0, #8a7060 40%, #5a4030 70%, #2a2018)",
        subtitle: "The Yin-Yang Moon",
        facts: [
          { icon: "🎭", text: "Iapetus has a dramatic two-tone appearance — one hemisphere is dark as coal, the other bright as snow." },
          { icon: "🏔️", text: "A mysterious equatorial ridge up to 20 km high runs around Iapetus, giving it a walnut-like shape." },
          { icon: "🤔", text: "The dark material on its leading hemisphere may come from dust swept up from Saturn's outer moon Phoebe." },
          { icon: "📏", text: "Iapetus orbits much farther from Saturn than the other large moons and has a significantly tilted orbit." }
        ]
      }
    ],
    history: [
      { heading: "Discovery & Ancient Skies", text: "Saturn has been observed since ancient times — it's the most distant planet visible to the naked eye. The Babylonians, Greeks, and Romans all tracked it. Named after the Roman god of agriculture and time, Saturn's slow movement across the sky (29.5-year orbit) made it a symbol of patience and old age." },
      { heading: "Galileo's Mystery", text: "When Galileo first observed Saturn through his telescope in 1610, he saw strange 'ears' on either side of the planet but couldn't resolve them as rings. He was baffled when they seemed to disappear (the rings were edge-on). It wasn't until 1655 that Christiaan Huygens correctly identified them as a ring system." },
      { heading: "The Cassini Division", text: "In 1675, Giovanni Cassini discovered a gap in Saturn's rings — now called the Cassini Division. Over the following centuries, astronomers discovered more ring divisions and moons. James Clerk Maxwell proved in 1859 that the rings couldn't be solid but must be made of countless small particles." },
      { heading: "Pioneer & Voyager Visits", text: "Pioneer 11 flew past Saturn in 1979, followed by Voyager 1 (1980) and Voyager 2 (1981). These missions revealed the incredible complexity of the ring system, discovered new moons, and gave us our first detailed look at Titan's thick atmosphere." },
      { heading: "The Cassini-Huygens Mission", text: "The Cassini spacecraft orbited Saturn from 2004 to 2017 — one of the greatest space missions ever. It discovered ocean worlds (Enceladus, Titan), revealed the rings in stunning detail, and dropped the Huygens probe onto Titan's surface — the most distant landing ever achieved." },
      { heading: "Grand Finale & Legacy", text: "In 2017, Cassini performed its 'Grand Finale' — 22 daring dives between Saturn and its rings before plunging into the planet's atmosphere. This sacrifice prevented contamination of potentially habitable moons. The data revealed Saturn's rings are surprisingly young — perhaps only 100 million years old." }
    ]
  },
  {
    name: "Uranus",
    orbitRadius: 420,
    size: 20,
    speed: 0.002,
    color: "#72b5c0",
    gradient: "radial-gradient(circle at 35% 35%, #a8e0e8, #72b5c0 40%, #5a9aa8 70%, #3a7a88)",
    shadowColor: "rgba(114,181,192,0.3)",
    hasUranusRing: true,
    subtitle: "The Tilted Ice Giant",
    facts: [
      { icon: "🔄", text: "Uranus rotates on its side with an axial tilt of 98°. It essentially rolls around the Sun like a ball, likely due to an ancient collision." },
      { icon: "🥶", text: "Uranus is the coldest planet in the solar system with temperatures dropping to -224°C, even colder than Neptune despite being closer to the Sun." },
      { icon: "💎", text: "It may rain diamonds deep inside Uranus. Extreme pressure crushes methane into diamond crystals that sink toward the core." },
      { icon: "💍", text: "Uranus has 13 known rings, discovered in 1977. They are dark and narrow, very different from Saturn's bright, wide rings." },
      { icon: "🌬️", text: "Uranus appears featureless but has extreme seasons — each pole gets 42 years of continuous sunlight followed by 42 years of darkness." },
      { icon: "🔵", text: "Its blue-green color comes from methane in the atmosphere, which absorbs red light and reflects blue-green wavelengths." }
    ],
    moons: [
      {
        name: "Miranda",
        size: 26,
        color: "#a0a0a8",
        gradient: "radial-gradient(circle at 35% 35%, #c8c8d0, #a0a0a8 40%, #787880 70%, #505058)",
        subtitle: "The Frankenstein Moon",
        facts: [
          { icon: "🏔️", text: "Miranda has Verona Rupes — a cliff 20 km high, the tallest known cliff in the solar system. A dropped object would take 12 minutes to fall." },
          { icon: "🧩", text: "Miranda's surface looks like it was assembled from mismatched pieces, with dramatically different terrain types side by side." },
          { icon: "💥", text: "One theory suggests Miranda was shattered by a massive impact and reassembled from the fragments, explaining its chaotic surface." },
          { icon: "📏", text: "At only 472 km in diameter, Miranda is the smallest and innermost of Uranus's five major moons." }
        ]
      },
      {
        name: "Ariel",
        size: 30,
        color: "#b8b8c0",
        gradient: "radial-gradient(circle at 35% 35%, #d8d8e0, #b8b8c0 40%, #909098 70%, #686870)",
        subtitle: "The Brightest Uranian Moon",
        facts: [
          { icon: "✨", text: "Ariel is the brightest of Uranus's moons, with a relatively young and geologically active surface." },
          { icon: "🏔️", text: "Its surface features vast canyons and valleys, suggesting past geological activity possibly driven by tidal heating." },
          { icon: "❄️", text: "Ariel's surface is covered in water ice, with possible cryovolcanic flows that resurfaced parts of the moon." },
          { icon: "📏", text: "With a diameter of 1,158 km, Ariel is the fourth-largest moon of Uranus." }
        ]
      },
      {
        name: "Titania",
        size: 34,
        color: "#a8a8b0",
        gradient: "radial-gradient(circle at 35% 35%, #d0d0d8, #a8a8b0 40%, #808088 70%, #585860)",
        subtitle: "Queen of the Uranian Moons",
        facts: [
          { icon: "👑", text: "Titania is the largest moon of Uranus and the eighth-largest moon in the solar system at 1,578 km in diameter." },
          { icon: "🏔️", text: "It has enormous fault canyons up to 1,500 km long, indicating the moon expanded as its interior froze and cracked the surface." },
          { icon: "🌫️", text: "Titania may have a thin carbon dioxide atmosphere, detected during stellar occultation observations." },
          { icon: "🌊", text: "Like several other large moons, Titania may have a subsurface ocean between its rocky core and icy mantle." }
        ]
      }
    ],
    history: [
      { heading: "Discovery — A New World", text: "On March 13, 1781, William Herschel discovered Uranus using a homemade telescope from his garden in Bath, England. It was the first planet discovered with a telescope and the first new planet found since antiquity. Herschel initially thought it was a comet." },
      { heading: "The Naming Debate", text: "Herschel wanted to name it 'Georgium Sidus' (George's Star) after King George III. The French suggested 'Herschel.' Eventually, German astronomer Johann Bode proposed 'Uranus' after the Greek god of the sky — father of Saturn in mythology — and the name stuck." },
      { heading: "Mathematical Mysteries", text: "Uranus's orbit didn't match predictions, leading astronomers to suspect an unseen planet was tugging on it. This led to the mathematical prediction and discovery of Neptune in 1846 — one of the greatest triumphs of celestial mechanics." },
      { heading: "Voyager 2 — The Only Visitor", text: "Voyager 2 remains the only spacecraft to visit Uranus, flying past in January 1986. It discovered 10 new moons, two new rings, and revealed Miranda's bizarre, fractured surface. It found that Uranus's magnetic field is tilted 59° from its rotation axis — uniquely offset." },
      { heading: "Modern Observations", text: "Hubble and ground-based telescopes have continued to study Uranus, discovering new moons and rings, and observing seasonal changes as the planet's extreme tilt brings different regions into sunlight. Bright cloud features have been spotted, challenging the idea that Uranus is featureless." },
      { heading: "Future Exploration", text: "A dedicated Uranus orbiter and probe has been identified as a top priority by planetary scientists. Such a mission could launch in the 2030s and would revolutionize our understanding of ice giants — a class of planet common in the galaxy but barely explored in our own solar system." }
    ]
  },
  {
    name: "Neptune",
    orbitRadius: 490,
    size: 19,
    speed: 0.0015,
    color: "#3a5ba0",
    gradient: "radial-gradient(circle at 35% 35%, #6a8bd0, #3a5ba0 40%, #2a4580 70%, #1a2f60)",
    shadowColor: "rgba(58,91,160,0.3)",
    subtitle: "The Windiest World",
    facts: [
      { icon: "💨", text: "Neptune has the fastest winds in the solar system — up to 2,100 km/h. That's 1.5 times the speed of sound on Earth." },
      { icon: "🔮", text: "Neptune was the first planet found through mathematical prediction rather than observation, discovered in 1846." },
      { icon: "💎", text: "Like Uranus, Neptune likely has diamond rain in its interior. It also radiates 2.6 times more energy than it receives from the Sun." },
      { icon: "🌀", text: "Neptune's Great Dark Spot, discovered by Voyager 2, was an Earth-sized storm that mysteriously vanished within 5 years." },
      { icon: "📅", text: "Neptune takes 165 Earth years to orbit the Sun. It completed its first full orbit since discovery in 2011." },
      { icon: "🔵", text: "Neptune's vivid blue color is deeper than Uranus's, likely due to an unknown atmospheric component beyond just methane." }
    ],
    moons: [
      {
        name: "Triton",
        size: 34,
        color: "#c0b8a8",
        gradient: "radial-gradient(circle at 35% 35%, #e0d8c8, #c0b8a8 40%, #988878 70%, #706050)",
        subtitle: "The Captured World",
        facts: [
          { icon: "🔄", text: "Triton orbits Neptune backwards (retrograde), strongly suggesting it was captured from the Kuiper Belt — possibly a dwarf planet like Pluto." },
          { icon: "🌋", text: "Triton has active geysers that shoot nitrogen gas and dark dust 8 km into its thin atmosphere." },
          { icon: "🥶", text: "At -235°C, Triton's surface is one of the coldest in the solar system, covered in nitrogen and methane ice." },
          { icon: "💀", text: "Triton is slowly spiraling inward and will eventually be torn apart by Neptune's gravity, possibly forming a ring system." }
        ]
      },
      {
        name: "Proteus",
        size: 28,
        color: "#707078",
        gradient: "radial-gradient(circle at 35% 35%, #909098, #707078 40%, #505058 70%, #303038)",
        subtitle: "The Dark Irregular",
        facts: [
          { icon: "🪨", text: "Proteus is one of the darkest objects in the solar system, reflecting only 6% of the light that hits it." },
          { icon: "📏", text: "At 420 km across, Proteus is about as large as a body can be without being pulled into a sphere by its own gravity." },
          { icon: "🔍", text: "Proteus was not discovered until Voyager 2's flyby in 1989 because it orbits so close to Neptune that it's lost in the planet's glare." },
          { icon: "💥", text: "Its largest crater, Pharos, is 255 km wide — more than half the moon's diameter." }
        ]
      },
      {
        name: "Nereid",
        size: 22,
        color: "#909098",
        gradient: "radial-gradient(circle at 35% 35%, #b0b0b8, #909098 40%, #686870 70%, #404048)",
        subtitle: "The Eccentric Wanderer",
        facts: [
          { icon: "🔄", text: "Nereid has one of the most eccentric orbits of any moon — its distance from Neptune varies by a factor of 7 during each orbit." },
          { icon: "📏", text: "Nereid is about 340 km in diameter and takes nearly an Earth year (360 days) to complete one orbit around Neptune." },
          { icon: "🤔", text: "Its wild orbit suggests Nereid was gravitationally scattered when Neptune captured Triton, disrupting the original moon system." },
          { icon: "🔍", text: "Very little is known about Nereid's surface — Voyager 2 only managed distant images during its 1989 flyby." }
        ]
      }
    ],
    history: [
      { heading: "Predicted Before Seen", text: "Neptune's existence was predicted mathematically before it was ever observed. After Uranus was discovered, its orbit showed unexplained deviations. In 1846, Urbain Le Verrier (France) and John Couch Adams (England) independently calculated where an unseen planet must be." },
      { heading: "Discovery Night", text: "On September 23, 1846, Johann Galle at the Berlin Observatory pointed his telescope at Le Verrier's predicted position and found Neptune within 1° of the calculated spot — on his very first night of searching. It was a stunning triumph of mathematics and physics." },
      { heading: "The Priority Dispute", text: "A bitter controversy erupted between France and England over who deserved credit for Neptune's discovery. Adams had made his calculations first but failed to get astronomers to search. Le Verrier published and prompted the actual observation. Today, both are credited." },
      { heading: "Triton & Early Observations", text: "William Lassell discovered Triton just 17 days after Neptune itself was found. For over a century, Neptune remained a tiny blue dot in telescopes. Its extreme distance (4.5 billion km) made detailed observation nearly impossible from Earth." },
      { heading: "Voyager 2 — The Grand Tour", text: "Voyager 2's flyby in August 1989 remains our only close encounter with Neptune. It revealed a dynamic, stormy world with the fastest winds in the solar system, discovered 6 new moons and a ring system, and captured stunning images of Triton's geysers and young surface." },
      { heading: "Modern Era & Future", text: "Hubble and ground-based telescopes have tracked Neptune's changing weather, including the appearance and disappearance of dark spots. A Neptune orbiter mission has been proposed but remains unfunded. Understanding Neptune is key to understanding the many Neptune-sized exoplanets discovered around other stars." }
    ]
  },
  {
    name: "Pluto",
    orbitRadius: 700,
    size: 5,
    speed: 0.001,
    color: "#c8b8a8",
    gradient: "radial-gradient(circle at 35% 35%, #d8c8b8, #b8a898 25%, #988878 50%, #786858 75%, #584838)",
    shadowColor: "rgba(180,160,140,0.2)",
    subtitle: "The Dwarf Planet",
    facts: [
      { icon: "💔", text: "Pluto was reclassified from planet to dwarf planet in 2006 by the IAU, sparking worldwide debate and controversy that continues today." },
      { icon: "❤️", text: "Pluto has a heart-shaped nitrogen ice glacier called Tombaugh Regio, named after its discoverer. It's larger than Texas." },
      { icon: "🌙", text: "Pluto's largest moon Charon is so big (half Pluto's diameter) that they orbit a point in space between them — making them a binary system." },
      { icon: "🔵", text: "Pluto has a thin atmosphere of nitrogen, methane, and carbon monoxide that expands when closer to the Sun and freezes onto the surface when farther away." },
      { icon: "🏔️", text: "Pluto has mountains made of water ice that are as tall as the Rocky Mountains, floating on a sea of frozen nitrogen." },
      { icon: "🌡️", text: "Surface temperatures on Pluto range from -228°C to -238°C. It's so cold that nitrogen exists as a solid ice." }
    ],
    moons: [
      {
        name: "Charon",
        size: 32,
        color: "#a8a0a0",
        gradient: "radial-gradient(circle at 35% 35%, #c8c0c0, #a8a0a0 40%, #888080 70%, #585050)",
        subtitle: "The Ferryman Moon",
        facts: [
          { icon: "🔒", text: "Charon and Pluto are tidally locked to each other — the same faces always point toward one another." },
          { icon: "📏", text: "Charon is about half the size of Pluto, making it the largest moon relative to its planet in the solar system." },
          { icon: "🔴", text: "Charon has a dark reddish polar cap called Mordor Macula, likely made of organic compounds from Pluto's escaping atmosphere." },
          { icon: "🏔️", text: "Charon has a massive canyon system called Serenity Chasma that's longer and deeper than the Grand Canyon." }
        ]
      },
      {
        name: "Nix",
        size: 18,
        color: "#c0b8b8",
        gradient: "radial-gradient(circle at 35% 35%, #d8d0d0, #c0b8b8 40%, #989090 70%, #686060)",
        subtitle: "The Chaotic Tumbler",
        facts: [
          { icon: "🔄", text: "Nix tumbles chaotically as it orbits, with its rotation axis changing unpredictably due to Pluto and Charon's gravitational influence." },
          { icon: "📏", text: "Nix is roughly 50 km long and shaped like a jelly bean." },
          { icon: "✨", text: "Nix is highly reflective, suggesting a surface covered in water ice." }
        ]
      },
      {
        name: "Hydra",
        size: 18,
        color: "#b8b0b0",
        gradient: "radial-gradient(circle at 35% 35%, #d0c8c8, #b8b0b0 40%, #908888 70%, #605858)",
        subtitle: "The Outer Guardian",
        facts: [
          { icon: "📏", text: "Hydra is the outermost of Pluto's known moons and is about 55 km long." },
          { icon: "🔄", text: "Like Nix, Hydra rotates chaotically and unpredictably." },
          { icon: "💎", text: "Hydra's surface appears to be almost pure water ice, making it one of the most reflective objects in the Kuiper Belt." }
        ]
      }
    ],
    history: [
      { heading: "The Search for Planet X", text: "After Neptune's discovery, astronomers noticed its orbit still had unexplained irregularities. Percival Lowell began searching for 'Planet X' in 1906 from his observatory in Arizona. He died in 1916 without finding it, but his calculations would guide future searchers." },
      { heading: "Discovery — 1930", text: "On February 18, 1930, 24-year-old Clyde Tombaugh discovered Pluto at Lowell Observatory by comparing photographic plates. The name 'Pluto' was suggested by 11-year-old Venetia Burney from Oxford, England — after the Roman god of the underworld." },
      { heading: "A Tiny, Strange World", text: "For decades, Pluto was assumed to be larger than it is. The discovery of its moon Charon in 1978 allowed astronomers to calculate Pluto's mass — revealing it was far smaller than expected. It became clear Pluto was unlike the other planets." },
      { heading: "The Kuiper Belt Emerges", text: "In 1992, astronomers discovered the first Kuiper Belt Object beyond Pluto. Soon, thousands more were found. Pluto wasn't alone — it was the largest known member of a vast population of icy bodies. This raised questions about its planetary status." },
      { heading: "Demotion — 2006", text: "When Eris, a Kuiper Belt Object larger than Pluto, was discovered in 2005, the IAU was forced to define 'planet.' In 2006, they created the 'dwarf planet' category. Pluto was reclassified, sparking public outcry and scientific debate that continues today." },
      { heading: "New Horizons — 2015", text: "NASA's New Horizons spacecraft flew past Pluto on July 14, 2015, after a 9.5-year journey. It revealed a geologically active world with nitrogen glaciers, water ice mountains, a hazy atmosphere, and the iconic heart-shaped Tombaugh Regio. Pluto was far more complex than anyone imagined." }
    ]
  }
];


// ===== ALPHA CENTAURI SYSTEM DATA =====
const ALPHA_CENTAURI_STARS = [
    {
        id: "alpha-a",
        name: "Alpha Centauri A",
        subtitle: "Rigil Kentaurus",
        classification: ["G2V Main Sequence", "Yellow Star", "1.1 Solar Masses"],
        color: "#ffe855",
        gradient: "radial-gradient(circle at 38% 38%, #fffef5, #ffe855 15%, #ffcc00 35%, #ffaa00 55%, #e08800 75%, #a06000)",
        glow: "rgba(255, 210, 80, 0.15)",
        facts: [
            { icon: "⭐", text: "Alpha Centauri A is the primary star of the system and the fourth brightest star in Earth's night sky." },
            { icon: "☀️", text: "It's 10% more massive and 23% larger than our Sun, with 1.5 times the luminosity." },
            { icon: "🔥", text: "Surface temperature is about 5,790 K — nearly identical to our Sun's 5,778 K." },
            { icon: "🌍", text: "If you stood on a planet orbiting Alpha Centauri A, our Sun would appear as a bright star in the constellation Cassiopeia." },
            { icon: "📅", text: "Alpha Centauri A is estimated to be 5-6 billion years old — slightly older than our Sun." },
            { icon: "🔭", text: "The star has been studied extensively for potential exoplanets, but none have been confirmed yet." }
        ],
        history: [
            { heading: "Ancient Observations", text: "Alpha Centauri has been observed since ancient times. The ancient Greeks and Egyptians recorded it as a single bright star. It was known to many southern hemisphere cultures, including Aboriginal Australians who incorporated it into their dreamtime stories." },
            { heading: "Discovery of Binary Nature", text: "In 1689, Jesuit priest Jean Richaud discovered that Alpha Centauri was actually two stars while observing a comet from India. This made it one of the first binary star systems ever identified." },
            { heading: "Measuring the Distance", text: "In 1839, Thomas Henderson measured Alpha Centauri's parallax from South Africa, determining it was the closest star system to Earth. This was one of the first successful stellar parallax measurements in history." },
            { heading: "Modern Study", text: "Today, Alpha Centauri A is one of the most studied stars in the sky. Its similarity to our Sun makes it a prime target for understanding stellar evolution and searching for potentially habitable exoplanets." }
        ]
    },
    {
        id: "alpha-b",
        name: "Alpha Centauri B",
        subtitle: "Toliman",
        classification: ["K1V Main Sequence", "Orange Star", "0.9 Solar Masses"],
        color: "#ff9540",
        gradient: "radial-gradient(circle at 38% 38%, #fff8e8, #ffc878 15%, #ff9540 35%, #e87020 55%, #c05010 75%, #803000)",
        glow: "rgba(255, 150, 60, 0.12)",
        facts: [
            { icon: "🟠", text: "Alpha Centauri B is a K-type orange dwarf star, slightly smaller and cooler than our Sun." },
            { icon: "📏", text: "It has 90% of the Sun's mass and 86% of its diameter, with about 50% of the Sun's luminosity." },
            { icon: "🔥", text: "Surface temperature is approximately 5,260 K — about 500 degrees cooler than our Sun." },
            { icon: "💫", text: "Alpha Centauri A and B orbit each other every 79.9 years, with distances ranging from 11 to 36 AU." },
            { icon: "🌍", text: "In 2012, a planet was announced around Alpha Centauri B, but it was later determined to be a data artifact." },
            { icon: "🔭", text: "The star's habitable zone would be closer than Earth's orbit around the Sun due to its lower luminosity." }
        ],
        history: [
            { heading: "Part of the Binary", text: "Alpha Centauri B was recognized as the companion star to Alpha Centauri A in 1689. For centuries, the two were studied together as one of the most important binary star systems in astronomy." },
            { heading: "The Planet That Wasn't", text: "In 2012, astronomers announced the discovery of Alpha Centauri Bb, an Earth-mass planet. This made headlines worldwide. However, by 2015, further analysis showed the signal was likely caused by data processing artifacts, not a real planet." },
            { heading: "Ongoing Search", text: "Despite the false alarm, the search for planets around Alpha Centauri B continues. Its similarity to our Sun and proximity to Earth make it one of the most important targets in the search for nearby exoplanets." }
        ]
    },
    {
        id: "proxima",
        name: "Proxima Centauri",
        subtitle: "The Closest Star",
        classification: ["M5.5Ve Red Dwarf", "Flare Star", "0.12 Solar Masses"],
        color: "#ff6040",
        gradient: "radial-gradient(circle at 38% 38%, #ffc0b0, #ff7050 25%, #e04020 50%, #a02010 75%, #601008)",
        glow: "rgba(255, 80, 50, 0.1)",
        hasProximaB: true,
        facts: [
            { icon: "📍", text: "Proxima Centauri is the closest star to our Sun at just 4.24 light-years away — about 40 trillion kilometers." },
            { icon: "🔴", text: "It's a red dwarf star with only 12% of the Sun's mass and 15% of its diameter — too dim to see with the naked eye." },
            { icon: "⚡", text: "Proxima is a flare star that experiences violent stellar flares, increasing its brightness by several times within minutes." },
            { icon: "🌍", text: "Proxima Centauri b, an Earth-sized planet in the habitable zone, was confirmed in 2016 — the closest known exoplanet." },
            { icon: "🔄", text: "Proxima orbits Alpha Centauri A and B at a distance of about 13,000 AU — taking 550,000 years to complete one orbit." },
            { icon: "⏱️", text: "Despite being the closest star, light from Proxima still takes 4.24 years to reach Earth." }
        ],
        history: [
            { heading: "Discovery — 1915", text: "Proxima Centauri was discovered in 1915 by Scottish astronomer Robert Innes at the Union Observatory in South Africa. He noticed its large proper motion — its movement across the sky — which indicated it was very close to Earth." },
            { heading: "Confirming the Closest Star", text: "Parallax measurements confirmed Proxima was slightly closer to Earth than Alpha Centauri A and B, making it the closest known star to our solar system. The name 'Proxima' comes from Latin, meaning 'nearest.'" },
            { heading: "A Violent Star", text: "Observations revealed Proxima is a flare star, experiencing sudden, intense bursts of radiation. In 2019, a superflare was detected that was 100 times more powerful than any solar flare from our Sun — raising questions about habitability of its planets." },
            { heading: "Proxima b Discovery — 2016", text: "In August 2016, astronomers announced the discovery of Proxima Centauri b — an Earth-sized planet in the habitable zone. This was a landmark discovery: the closest potentially habitable exoplanet to Earth." },
            { heading: "Breakthrough Starshot", text: "Proxima Centauri is the target of Breakthrough Starshot, an ambitious project to send tiny spacecraft at 20% the speed of light using powerful lasers. If successful, these 'StarChips' could reach Proxima in about 20 years and send back images." }
        ]
    }
];

const PROXIMA_B_DATA = {
    name: "Proxima Centauri b",
    subtitle: "The Closest Exoplanet",
    classification: ["Rocky Exoplanet", "Habitable Zone", "Earth-like Mass"],
    gradient: "radial-gradient(circle at 35% 35%, #90b0d0, #5080b0 25%, #306090 50%, #104070 75%, #002050)",
    glow: "rgba(80, 130, 180, 0.08)",
    facts: [
        { icon: "🌍", text: "Proxima b has a minimum mass of 1.17 Earth masses, making it potentially rocky like our planet." },
        { icon: "📍", text: "At 4.24 light-years away, Proxima b is the closest known exoplanet to our solar system." },
        { icon: "🌡️", text: "Proxima b orbits in the habitable zone where liquid water could exist — if it has an atmosphere." },
        { icon: "⏱️", text: "The planet orbits Proxima Centauri every 11.2 Earth days at a distance of only 7.5 million km." },
        { icon: "🔒", text: "Proxima b is likely tidally locked, with one side in permanent daylight and the other in eternal darkness." },
        { icon: "⚡", text: "The planet is bombarded by intense stellar flares from Proxima Centauri, which may strip away any atmosphere." },
        { icon: "❓", text: "We don't know if Proxima b has an atmosphere, water, or any conditions suitable for life — it remains one of astronomy's biggest mysteries." },
        { icon: "🚀", text: "Proxima b is the primary target for future interstellar missions like Breakthrough Starshot." }
    ]
};


// ===== TRAPPIST-1 SYSTEM DATA =====
const TRAPPIST_1_STAR = {
    name: "TRAPPIST-1",
    subtitle: "The Ultra-Cool Red Dwarf",
    classification: ["M8V Ultra-Cool Dwarf", "Red Dwarf Star", "0.09 Solar Masses"],
    color: "#cc4444",
    gradient: "radial-gradient(circle at 38% 38%, #ff9988, #cc5544 25%, #aa3322 50%, #882211 75%, #551108)",
    glow: "rgba(200, 80, 60, 0.12)",
    facts: [
        { icon: "🔴", text: "TRAPPIST-1 is an ultra-cool red dwarf star with only 9% of the Sun's mass and 12% of its radius — barely larger than Jupiter." },
        { icon: "🌡️", text: "Surface temperature is just 2,566 K — less than half the Sun's temperature, giving it a deep red color." },
        { icon: "💡", text: "TRAPPIST-1 is 2,000 times dimmer than our Sun. Standing on one of its planets, the star would appear salmon-pink." },
        { icon: "🌍", text: "All 7 planets orbit closer to TRAPPIST-1 than Mercury orbits our Sun — the entire system would fit inside Mercury's orbit." },
        { icon: "⏱️", text: "TRAPPIST-1 is estimated to be 7.6 billion years old — nearly twice the age of our solar system." },
        { icon: "🔥", text: "Despite being cool, TRAPPIST-1 emits powerful flares that could strip atmospheres from its planets." },
        { icon: "♾️", text: "Red dwarfs like TRAPPIST-1 can burn for trillions of years — long after our Sun has died." },
        { icon: "📍", text: "Located 40.7 light-years away in the constellation Aquarius, TRAPPIST-1 is relatively close in cosmic terms." }
    ],
    history: [
        { heading: "Discovery — 2016", text: "TRAPPIST-1 was discovered in 2016 by the TRAPPIST (Transiting Planets and Planetesimals Small Telescope) survey in Chile. Initially, three planets were detected. The star was named after the telescope, which itself was named after Belgian Trappist beers." },
        { heading: "The Seven Worlds — 2017", text: "In February 2017, NASA announced the discovery of seven Earth-sized planets orbiting TRAPPIST-1 — the largest batch of Earth-sized worlds ever found around a single star. Three of them lie in the habitable zone where liquid water could exist." },
        { heading: "A Compact System", text: "The TRAPPIST-1 system is remarkably compact. All seven planets orbit within 0.06 AU of the star — closer than Mercury's 0.39 AU orbit around our Sun. The planets are so close together that from one planet, you could see the others as clearly as we see the Moon." },
        { heading: "Resonant Orbits", text: "The seven planets are locked in a complex orbital resonance chain. Their orbital periods form near-perfect ratios: 8:5, 5:3, 3:2, 3:2, 4:3, and 3:2. This gravitational harmony has kept the system stable for billions of years." },
        { heading: "James Webb Observations", text: "The James Webb Space Telescope has begun studying TRAPPIST-1's planets, searching for atmospheres and signs of habitability. Early results suggest TRAPPIST-1 b likely has no atmosphere, but observations of the other planets continue." },
        { heading: "The Search for Life", text: "TRAPPIST-1 remains one of the most promising systems for finding life beyond Earth. The habitable zone planets (e, f, and g) could harbor liquid water. However, the star's frequent flares pose challenges for life as we know it." }
    ]
};

const TRAPPIST_1_PLANETS = [
    {
        name: "TRAPPIST-1 b",
        subtitle: "The Innermost World",
        classification: ["Rocky Exoplanet", "Tidally Locked", "Too Hot for Life"],
        gradient: "radial-gradient(circle at 35% 35%, #c8a090, #a07860 30%, #805840 55%, #503020 75%, #281810)",
        glow: "rgba(160, 100, 80, 0.15)",
        orbitRadius: 55,
        size: 18,
        facts: [
            { icon: "🔥", text: "TRAPPIST-1 b is the innermost planet, orbiting just 0.011 AU from its star — 35 times closer than Mercury to our Sun." },
            { icon: "⏱️", text: "A year on TRAPPIST-1 b lasts only 1.51 Earth days. You'd celebrate over 240 birthdays per Earth year." },
            { icon: "🌡️", text: "Surface temperature is estimated at 400°C (750°F) — hot enough to melt lead and far too hot for liquid water." },
            { icon: "🔒", text: "The planet is tidally locked, with one side in permanent scorching daylight and the other in eternal darkness." },
            { icon: "🌍", text: "TRAPPIST-1 b is about 1.02 times Earth's diameter and 1.37 times its mass — slightly larger and denser than Earth." },
            { icon: "💨", text: "James Webb observations in 2023 found no evidence of an atmosphere — likely stripped away by stellar radiation." },
            { icon: "🌋", text: "The intense tidal forces from the nearby star may drive volcanic activity on this world." }
        ],
        history: [
            { heading: "Discovery — 2016", text: "TRAPPIST-1 b was among the first three planets discovered around TRAPPIST-1 in 2016 using the TRAPPIST telescope in Chile. The discovery was made by detecting the tiny dip in starlight as the planet passed in front of its star." },
            { heading: "Confirmation — 2017", text: "NASA's Spitzer Space Telescope confirmed TRAPPIST-1 b's existence in February 2017 as part of the landmark announcement of seven Earth-sized planets. Its orbital period was precisely measured at 1.51 days." },
            { heading: "JWST Observations — 2023", text: "The James Webb Space Telescope observed TRAPPIST-1 b in 2023, measuring its thermal emission. The results showed the planet's dayside temperature matches predictions for a bare rock with no atmosphere." },
            { heading: "No Atmosphere Detected", text: "JWST's observations strongly suggest TRAPPIST-1 b has no substantial atmosphere. The intense radiation from the nearby star has likely stripped away any gases that once existed, leaving a barren, scorched world." },
            { heading: "Tidal Heating", text: "Scientists believe TRAPPIST-1 b experiences significant tidal heating from its star's gravitational pull. This could drive volcanic activity, potentially resurfacing the planet and releasing gases — though any atmosphere would quickly be lost to space." }
        ]
    },
    {
        name: "TRAPPIST-1 c",
        subtitle: "The Venus Analog",
        classification: ["Rocky Exoplanet", "Tidally Locked", "Possible Thick Atmosphere"],
        gradient: "radial-gradient(circle at 35% 35%, #e0c090, #c09860 30%, #a07840 55%, #705020 75%, #402810)",
        glow: "rgba(200, 150, 80, 0.15)",
        orbitRadius: 75,
        size: 19,
        facts: [
            { icon: "🌡️", text: "TRAPPIST-1 c receives about twice the radiation Earth gets from the Sun, making it similar to Venus in terms of heating." },
            { icon: "⏱️", text: "Orbital period is 2.42 Earth days — completing over 150 orbits per Earth year." },
            { icon: "🌍", text: "The planet is 1.10 times Earth's diameter and 1.38 times its mass — very Earth-like in size." },
            { icon: "💨", text: "JWST observations suggest TRAPPIST-1 c has little to no atmosphere, or possibly a very thin one." },
            { icon: "🔒", text: "Like all TRAPPIST-1 planets, it's tidally locked with permanent day and night sides." },
            { icon: "🌋", text: "If it has volcanic activity, it could potentially replenish a thin atmosphere over time." },
            { icon: "👀", text: "From TRAPPIST-1 c, neighboring planets would appear several times larger than our Moon in the sky." }
        ],
        history: [
            { heading: "Discovery — 2016", text: "TRAPPIST-1 c was discovered alongside planets b and d in 2016 by the TRAPPIST survey. It was identified through the transit method, detecting the characteristic dimming pattern as it crossed in front of its star." },
            { heading: "The Venus Connection", text: "Early analysis suggested TRAPPIST-1 c receives similar stellar radiation to Venus in our solar system. This led scientists to speculate it might have a thick, Venus-like atmosphere with extreme greenhouse heating." },
            { heading: "JWST Breakthrough — 2023", text: "James Webb Space Telescope observations in 2023 measured TRAPPIST-1 c's thermal emission during secondary eclipse. The data revealed the planet is likely bare rock or has only a very thin atmosphere." },
            { heading: "Ruling Out Venus-Like Conditions", text: "JWST results showed TRAPPIST-1 c's dayside temperature is consistent with no atmosphere, ruling out a thick Venus-like CO2 atmosphere. This was a significant finding for understanding rocky exoplanet atmospheres." },
            { heading: "Ongoing Research", text: "Scientists continue to study TRAPPIST-1 c to understand why it lost its atmosphere. The intense stellar activity of red dwarf stars may strip atmospheres from close-in planets over billions of years." }
        ]
    },
    {
        name: "TRAPPIST-1 d",
        subtitle: "The Inner Edge",
        classification: ["Rocky Exoplanet", "Inner Habitable Zone", "Possible Water World"],
        gradient: "radial-gradient(circle at 35% 35%, #a8c0d8, #7898b8 30%, #506890 55%, #304068 75%, #182038)",
        glow: "rgba(100, 150, 200, 0.15)",
        orbitRadius: 100,
        size: 14,
        facts: [
            { icon: "💧", text: "TRAPPIST-1 d sits at the inner edge of the habitable zone — it could potentially have liquid water if it has the right atmosphere." },
            { icon: "⏱️", text: "A year lasts just 4.05 Earth days. The planet whips around its star at incredible speed." },
            { icon: "🌍", text: "TRAPPIST-1 d is the smallest of the seven, at 0.77 times Earth's diameter — between Mars and Earth in size." },
            { icon: "⚖️", text: "With only 0.39 times Earth's mass, gravity on the surface would be noticeably weaker than Earth's." },
            { icon: "🌊", text: "Models suggest TRAPPIST-1 d could be a water world with deep global oceans, if it retained water." },
            { icon: "🔒", text: "Tidally locked, but atmospheric circulation could distribute heat to the dark side." },
            { icon: "🌅", text: "The star would appear 5 times larger in the sky than our Sun appears from Earth." }
        ],
        history: [
            { heading: "Discovery — 2016", text: "TRAPPIST-1 d was one of the original three planets discovered in 2016. Its position at the inner edge of the habitable zone immediately made it a target of interest for habitability studies." },
            { heading: "Refined Measurements — 2017", text: "The 2017 Spitzer observations refined TRAPPIST-1 d's properties, revealing it to be the smallest of the seven planets. Its low mass suggests it may have a significant water content." },
            { heading: "Water World Hypothesis", text: "Computer models suggest TRAPPIST-1 d could be a water world — a planet with deep global oceans covering its entire surface. If it retained water from its formation, oceans could be hundreds of kilometers deep." },
            { heading: "Habitable Zone Position", text: "TRAPPIST-1 d sits at the inner edge of the habitable zone. With the right atmospheric conditions, liquid water could exist on its surface, though it may be too warm for Earth-like conditions." },
            { heading: "Future JWST Targets", text: "TRAPPIST-1 d is scheduled for atmospheric observations with JWST. Scientists hope to detect signs of water vapor or other molecules that could indicate habitability." }
        ]
    },
    {
        name: "TRAPPIST-1 e",
        subtitle: "The Most Earth-Like",
        classification: ["Rocky Exoplanet", "Habitable Zone", "Best Candidate for Life"],
        gradient: "radial-gradient(circle at 35% 35%, #88a8c8, #6088a8 30%, #406080 55%, #284058 75%, #102030)",
        glow: "rgba(80, 130, 180, 0.2)",
        orbitRadius: 130,
        size: 17,
        facts: [
            { icon: "🏆", text: "TRAPPIST-1 e is considered the most likely of the seven planets to harbor life — it's the most Earth-like world known." },
            { icon: "🌡️", text: "Located in the middle of the habitable zone, TRAPPIST-1 e receives similar radiation to what Earth receives from the Sun." },
            { icon: "🌍", text: "At 0.92 times Earth's diameter and 0.77 times its mass, TRAPPIST-1 e is remarkably similar to our planet." },
            { icon: "💧", text: "If TRAPPIST-1 e has an atmosphere, liquid water could exist on its surface — a key ingredient for life." },
            { icon: "⏱️", text: "A year lasts 6.10 Earth days. Seasons, if any, would cycle incredibly fast." },
            { icon: "🛡️", text: "The planet may have a magnetic field that could protect a potential atmosphere from stellar wind." },
            { icon: "🔭", text: "TRAPPIST-1 e is a prime target for James Webb Space Telescope atmospheric studies." },
            { icon: "🌌", text: "From TRAPPIST-1 e, you could see all six sibling planets with the naked eye, some appearing larger than the Moon." }
        ],
        history: [
            { heading: "Discovery — 2017", text: "TRAPPIST-1 e was discovered in February 2017 as part of the expanded survey using NASA's Spitzer Space Telescope. It immediately stood out as the most promising candidate for habitability." },
            { heading: "The Goldilocks Planet", text: "TRAPPIST-1 e sits in the 'Goldilocks zone' — not too hot, not too cold. It receives about 60% of the light Earth gets from the Sun, but the star's redder spectrum means similar heating." },
            { heading: "Earth's Twin?", text: "With 92% of Earth's diameter and 77% of its mass, TRAPPIST-1 e is the most Earth-like exoplanet discovered. Its density suggests a rocky composition similar to Earth's." },
            { heading: "Atmospheric Hopes", text: "Unlike the inner planets, TRAPPIST-1 e may have retained an atmosphere. Its position in the habitable zone and Earth-like properties make it the top priority for JWST atmospheric studies." },
            { heading: "The Search for Biosignatures", text: "Scientists hope to detect biosignatures — chemical signs of life — in TRAPPIST-1 e's atmosphere. Oxygen, methane, or ozone could indicate biological processes, though false positives must be ruled out." },
            { heading: "A Window to Alien Life", text: "TRAPPIST-1 e represents humanity's best current chance of finding life beyond Earth. If it has oceans and an atmosphere, the conditions for life as we know it could exist just 40 light-years away." }
        ]
    },
    {
        name: "TRAPPIST-1 f",
        subtitle: "The Frozen Possibility",
        classification: ["Rocky Exoplanet", "Outer Habitable Zone", "Possible Ice World"],
        gradient: "radial-gradient(circle at 35% 35%, #b8d0e8, #88a8c8 30%, #6080a0 55%, #405070 75%, #202838)",
        glow: "rgba(130, 170, 210, 0.15)",
        orbitRadius: 160,
        size: 18,
        facts: [
            { icon: "❄️", text: "TRAPPIST-1 f lies in the outer habitable zone — it could have liquid water with a thick greenhouse atmosphere." },
            { icon: "🌍", text: "At 1.04 times Earth's diameter and 0.93 times its mass, TRAPPIST-1 f is almost Earth's twin in size." },
            { icon: "⏱️", text: "Orbital period is 9.21 Earth days — about 40 orbits per Earth year." },
            { icon: "🧊", text: "Without a substantial atmosphere, TRAPPIST-1 f would be a frozen ice world like Europa." },
            { icon: "🌊", text: "Models suggest it could have a deep subsurface ocean beneath an icy crust." },
            { icon: "🔒", text: "Tidally locked, with the star-facing side potentially warmer and the dark side frozen solid." },
            { icon: "🌅", text: "The star would appear about 3 times larger than our Sun from Earth, glowing a deep red-orange." }
        ],
        history: [
            { heading: "Discovery — 2017", text: "TRAPPIST-1 f was discovered in February 2017 during the extended Spitzer observations. Its position in the outer habitable zone made it an intriguing target for habitability studies." },
            { heading: "An Icy Possibility", text: "TRAPPIST-1 f receives about 40% of the light Earth gets from the Sun. Without a greenhouse atmosphere, it would be frozen — but with the right atmosphere, liquid water could exist." },
            { heading: "Earth-Sized Twin", text: "At 1.04 times Earth's diameter, TRAPPIST-1 f is almost exactly Earth's size. Its slightly lower mass suggests it may have more water or ice than Earth." },
            { heading: "Subsurface Ocean?", text: "Like Jupiter's moon Europa, TRAPPIST-1 f could harbor a subsurface ocean beneath an icy shell. Tidal heating from the star and neighboring planets could keep water liquid below the surface." },
            { heading: "Atmospheric Studies", text: "JWST will study TRAPPIST-1 f's atmosphere to determine if it has the greenhouse gases needed to warm its surface. A thick CO2 atmosphere could make it habitable despite its distance from the star." }
        ]
    },
    {
        name: "TRAPPIST-1 g",
        subtitle: "The Outer Giant",
        classification: ["Rocky Exoplanet", "Outer Habitable Zone", "Largest of the Seven"],
        gradient: "radial-gradient(circle at 35% 35%, #98a8b8, #708090 30%, #505868 55%, #303840 75%, #181820)",
        glow: "rgba(100, 120, 150, 0.15)",
        orbitRadius: 195,
        size: 20,
        facts: [
            { icon: "👑", text: "TRAPPIST-1 g is the largest of the seven planets at 1.13 times Earth's diameter." },
            { icon: "⚖️", text: "Despite being the largest, it has only 1.15 times Earth's mass, suggesting a lower density — possibly more water/ice." },
            { icon: "❄️", text: "Located at the outer edge of the habitable zone, TRAPPIST-1 g is likely cold but could have subsurface liquid water." },
            { icon: "⏱️", text: "A year lasts 12.35 Earth days — the second-longest orbital period in the system." },
            { icon: "🌊", text: "TRAPPIST-1 g may be an ocean world with a thick ice shell and a liquid water layer beneath." },
            { icon: "🔒", text: "Tidally locked like its siblings, with extreme temperature differences between hemispheres." },
            { icon: "🌌", text: "From TRAPPIST-1 g, the inner planets would transit across the star frequently, creating mini-eclipses." }
        ],
        history: [
            { heading: "Discovery — 2017", text: "TRAPPIST-1 g was discovered in February 2017 as part of the seven-planet announcement. As the largest planet in the system, it immediately drew scientific interest." },
            { heading: "The Largest Sibling", text: "At 1.13 times Earth's diameter, TRAPPIST-1 g is the biggest of the seven worlds. However, its relatively low density suggests it contains significant amounts of water or ice." },
            { heading: "An Ocean World?", text: "Models suggest TRAPPIST-1 g could be a water world with oceans hundreds of kilometers deep. The water may exist as high-pressure ice beneath a liquid layer, similar to some moons in our solar system." },
            { heading: "Outer Habitable Zone", text: "TRAPPIST-1 g sits at the outer edge of the habitable zone. While likely too cold for surface liquid water without a thick atmosphere, subsurface oceans could exist." },
            { heading: "Resonant Orbit", text: "TRAPPIST-1 g is locked in orbital resonance with its neighbors. For every 2 orbits of planet f, planet g completes 3 — a gravitational dance that has kept the system stable for billions of years." }
        ]
    },
    {
        name: "TRAPPIST-1 h",
        subtitle: "The Outermost Frontier",
        classification: ["Rocky Exoplanet", "Beyond Habitable Zone", "Frozen World"],
        gradient: "radial-gradient(circle at 35% 35%, #788898, #586878 30%, #384050 55%, #202830 75%, #101418)",
        glow: "rgba(80, 100, 120, 0.12)",
        orbitRadius: 235,
        size: 14,
        facts: [
            { icon: "🥶", text: "TRAPPIST-1 h is the outermost and coldest planet, receiving only 13% of the light Earth gets from the Sun." },
            { icon: "⏱️", text: "Orbital period is 18.77 Earth days — the longest year in the TRAPPIST-1 system." },
            { icon: "🌍", text: "At 0.77 times Earth's diameter and 0.33 times its mass, TRAPPIST-1 h is the smallest and least massive." },
            { icon: "🧊", text: "Surface temperatures are estimated around -100°C (-148°F) — far too cold for liquid surface water." },
            { icon: "🌊", text: "Like Jupiter's moon Europa, TRAPPIST-1 h could have a subsurface ocean kept liquid by tidal heating." },
            { icon: "🔒", text: "Tidally locked, with the dark side even colder than the already frigid day side." },
            { icon: "🌅", text: "The star would appear only slightly larger than our Sun from Earth, but much dimmer and redder." },
            { icon: "🛸", text: "Despite being frozen, TRAPPIST-1 h remains scientifically interesting as a potential analog to icy moons in our solar system." }
        ],
        history: [
            { heading: "Discovery — 2017", text: "TRAPPIST-1 h was the last of the seven planets to be confirmed, announced in February 2017. Its longer orbital period made it harder to detect, requiring extended observations with the Spitzer Space Telescope." },
            { heading: "The Outer Frontier", text: "TRAPPIST-1 h orbits at the outer edge of the system, receiving only 13% of the light Earth gets from the Sun. It's a frozen world, but its position makes it scientifically valuable for understanding planetary system architecture." },
            { heading: "Completing the Resonance Chain", text: "TRAPPIST-1 h completes the remarkable orbital resonance chain of the system. Its orbit is locked in a 3:2 ratio with planet g, meaning for every 2 orbits of h, planet g completes 3." },
            { heading: "An Icy Moon Analog", text: "Scientists compare TRAPPIST-1 h to icy moons in our solar system like Europa and Enceladus. Despite surface temperatures around -100°C, tidal heating could maintain a subsurface liquid water ocean." },
            { heading: "Future Exploration", text: "While TRAPPIST-1 h is too cold for surface habitability, it remains a target for future study. Understanding its composition and potential subsurface ocean could reveal how water is distributed in compact planetary systems." }
        ]
    }
];


// ===== APPLY EXPANDED MOON DATA =====
// This replaces the basic moon data with the comprehensive moon arrays from moons-data.js
// The moons-data.js file must be loaded before app.js

// Helper function to apply moon data after moons-data.js is loaded
function applyExpandedMoonData() {
    if (typeof JUPITER_MOONS !== 'undefined') {
        // Find Jupiter and replace its moons
        const jupiter = PLANETS.find(p => p.name === 'Jupiter');
        if (jupiter) jupiter.moons = JUPITER_MOONS;
    }
    
    if (typeof SATURN_MOONS !== 'undefined') {
        const saturn = PLANETS.find(p => p.name === 'Saturn');
        if (saturn) saturn.moons = SATURN_MOONS;
    }
    
    if (typeof URANUS_MOONS !== 'undefined') {
        const uranus = PLANETS.find(p => p.name === 'Uranus');
        if (uranus) uranus.moons = URANUS_MOONS;
    }
    
    if (typeof NEPTUNE_MOONS !== 'undefined') {
        const neptune = PLANETS.find(p => p.name === 'Neptune');
        if (neptune) neptune.moons = NEPTUNE_MOONS;
    }
    
    if (typeof PLUTO_MOONS !== 'undefined') {
        const pluto = PLANETS.find(p => p.name === 'Pluto');
        if (pluto) pluto.moons = PLUTO_MOONS;
    }
    
    if (typeof MARS_MOONS !== 'undefined') {
        const mars = PLANETS.find(p => p.name === 'Mars');
        if (mars) mars.moons = MARS_MOONS;
    }
    
    if (typeof EARTH_MOONS !== 'undefined') {
        const earth = PLANETS.find(p => p.name === 'Earth');
        if (earth) earth.moons = EARTH_MOONS;
    }
}
