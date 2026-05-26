// ===== JUPITER'S 50 MOONS =====
const JUPITER_MOONS = [
  // === THE 4 GALILEAN MOONS (Large, with detailed facts) ===
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
  },
  // === INNER MOONS (4 moons) ===
  {
    name: "Metis",
    size: 18,
    color: "#8a8a8a",
    gradient: "radial-gradient(circle at 35% 35%, #a8a8a8, #8a8a8a 40%, #6a6a6a 70%, #4a4a4a)",
    subtitle: "The Innermost Moon",
    facts: [
      { icon: "⚡", text: "Metis orbits closer to Jupiter than any other moon, completing one orbit in just 7 hours." },
      { icon: "💍", text: "Metis orbits within Jupiter's main ring and is a source of ring material." }
    ]
  },
  {
    name: "Adrastea",
    size: 16,
    color: "#7a7a7a",
    gradient: "radial-gradient(circle at 35% 35%, #9a9a9a, #7a7a7a 40%, #5a5a5a 70%, #3a3a3a)",
    subtitle: "The Ring Shepherd",
    facts: [
      { icon: "💍", text: "Adrastea is one of the smallest moons in the solar system at just 20 km wide." },
      { icon: "🔄", text: "It orbits at the outer edge of Jupiter's main ring, helping to maintain the ring's structure." }
    ]
  },
  {
    name: "Amalthea",
    size: 22,
    color: "#c85050",
    gradient: "radial-gradient(circle at 35% 35%, #e87070, #c85050 40%, #a03030 70%, #702020)",
    subtitle: "The Red Moon",
    facts: [
      { icon: "🔴", text: "Amalthea is the reddest object in the solar system, even redder than Mars." },
      { icon: "📏", text: "It's irregularly shaped, about 250 km long, and was discovered by E.E. Barnard in 1892." },
      { icon: "🔥", text: "Amalthea radiates more heat than it receives from the Sun, likely due to Jupiter's intense radiation." }
    ]
  },
  {
    name: "Thebe",
    size: 20,
    color: "#9a8070",
    gradient: "radial-gradient(circle at 35% 35%, #baa090, #9a8070 40%, #7a6050 70%, #5a4030)",
    subtitle: "The Gossamer Source",
    facts: [
      { icon: "💍", text: "Thebe is the source of Jupiter's outer Gossamer ring." },
      { icon: "📏", text: "About 100 km in diameter, Thebe is irregularly shaped and heavily cratered." }
    ]
  },
  // === HIMALIA GROUP (5 moons) ===
  {
    name: "Himalia",
    size: 24,
    color: "#a09080",
    gradient: "radial-gradient(circle at 35% 35%, #c0b0a0, #a09080 40%, #807060 70%, #605040)",
    subtitle: "Largest Irregular Moon",
    facts: [
      { icon: "👑", text: "Himalia is Jupiter's largest irregular moon at 170 km diameter." },
      { icon: "🔭", text: "Discovered in 1904 by Charles Dillon Perrine at Lick Observatory." },
      { icon: "🪨", text: "Himalia is likely a captured asteroid from the outer solar system." }
    ]
  },
  {
    name: "Elara",
    size: 20,
    color: "#908070",
    gradient: "radial-gradient(circle at 35% 35%, #b0a090, #908070 40%, #706050 70%, #504030)",
    subtitle: "Himalia's Companion",
    facts: [
      { icon: "📏", text: "Elara is about 80 km in diameter, the second largest in the Himalia group." },
      { icon: "🔭", text: "Discovered in 1905 by Charles Perrine, one year after Himalia." }
    ]
  },
  {
    name: "Lysithea",
    size: 17,
    color: "#888078",
    gradient: "radial-gradient(circle at 35% 35%, #a8a098, #888078 40%, #686058 70%, #484038)",
    subtitle: "The Small Companion",
    facts: [
      { icon: "📏", text: "Lysithea is about 36 km in diameter." },
      { icon: "🔭", text: "Discovered in 1938 by Seth Barnes Nicholson." }
    ]
  },
  {
    name: "Leda",
    size: 15,
    color: "#807870",
    gradient: "radial-gradient(circle at 35% 35%, #a09890, #807870 40%, #605850 70%, #403830)",
    subtitle: "Smallest Himalia Member",
    facts: [
      { icon: "📏", text: "Leda is only about 20 km in diameter." },
      { icon: "🔭", text: "Discovered in 1974 by Charles Kowal." }
    ]
  },
  {
    name: "Ersa",
    size: 14,
    color: "#787068",
    gradient: "radial-gradient(circle at 35% 35%, #989088, #787068 40%, #585048 70%, #383028)",
    subtitle: "Recent Discovery",
    facts: [
      { icon: "🔭", text: "Discovered in 2018, Ersa is about 3 km in diameter." },
      { icon: "👨‍👩‍👧", text: "Named after the Greek goddess of dew, daughter of Zeus." }
    ]
  },
  // === CARME GROUP (6 moons) ===
  {
    name: "Carme",
    size: 22,
    color: "#706860",
    gradient: "radial-gradient(circle at 35% 35%, #908880, #706860 40%, #504840 70%, #302820)",
    subtitle: "Retrograde Leader",
    facts: [
      { icon: "🔄", text: "Carme orbits Jupiter backwards (retrograde) at a steep inclination." },
      { icon: "📏", text: "About 46 km in diameter, it leads a group of similar moons." },
      { icon: "🪨", text: "Likely a captured D-type asteroid, very dark and primitive." }
    ]
  },
  {
    name: "Kalyke",
    size: 17,
    color: "#686058",
    gradient: "radial-gradient(circle at 35% 35%, #888078, #686058 40%, #484038 70%, #282018)",
    subtitle: "Carme Family Member",
    facts: [
      { icon: "📏", text: "Kalyke is about 5 km in diameter." },
      { icon: "🔭", text: "Discovered in 2000 by Scott Sheppard's team." }
    ]
  },
  {
    name: "Isonoe",
    size: 15,
    color: "#605850",
    gradient: "radial-gradient(circle at 35% 35%, #807870, #605850 40%, #403830 70%, #201810)",
    subtitle: "Small Retrograde Moon",
    facts: [
      { icon: "📏", text: "Isonoe is about 4 km in diameter." },
      { icon: "🔄", text: "Orbits Jupiter in a retrograde direction." }
    ]
  },
  {
    name: "Taygete",
    size: 16,
    color: "#585048",
    gradient: "radial-gradient(circle at 35% 35%, #787068, #585048 40%, #383028 70%, #181008)",
    subtitle: "Distant Wanderer",
    facts: [
      { icon: "📏", text: "Taygete is about 5 km in diameter." },
      { icon: "⏱️", text: "Takes about 732 days to orbit Jupiter." }
    ]
  },
  {
    name: "Chaldene",
    size: 14,
    color: "#504840",
    gradient: "radial-gradient(circle at 35% 35%, #706860, #504840 40%, #302820 70%, #100800)",
    subtitle: "Tiny Carme Member",
    facts: [
      { icon: "📏", text: "Chaldene is about 4 km in diameter." },
      { icon: "🔭", text: "Discovered in 2000." }
    ]
  },
  {
    name: "Erinome",
    size: 14,
    color: "#484038",
    gradient: "radial-gradient(circle at 35% 35%, #686058, #484038 40%, #282018 70%, #080000)",
    subtitle: "Dark Fragment",
    facts: [
      { icon: "📏", text: "Erinome is about 3 km in diameter." },
      { icon: "🪨", text: "Likely a fragment from a larger body." }
    ]
  },
  // === ANANKE GROUP (6 moons) ===
  {
    name: "Ananke",
    size: 21,
    color: "#787878",
    gradient: "radial-gradient(circle at 35% 35%, #989898, #787878 40%, #585858 70%, #383838)",
    subtitle: "Retrograde Group Leader",
    facts: [
      { icon: "📏", text: "Ananke is about 28 km in diameter." },
      { icon: "🔄", text: "Leads a group of retrograde moons with similar orbits." },
      { icon: "🔭", text: "Discovered in 1951 by Seth Nicholson." }
    ]
  },
  {
    name: "Praxidike",
    size: 17,
    color: "#707070",
    gradient: "radial-gradient(circle at 35% 35%, #909090, #707070 40%, #505050 70%, #303030)",
    subtitle: "Ananke Family Member",
    facts: [
      { icon: "📏", text: "Praxidike is about 7 km in diameter." },
      { icon: "🔭", text: "Discovered in 2000." }
    ]
  },
  {
    name: "Harpalyke",
    size: 15,
    color: "#686868",
    gradient: "radial-gradient(circle at 35% 35%, #888888, #686868 40%, #484848 70%, #282828)",
    subtitle: "Small Irregular Moon",
    facts: [
      { icon: "📏", text: "Harpalyke is about 4 km in diameter." },
      { icon: "🔄", text: "Retrograde orbit in the Ananke group." }
    ]
  },
  {
    name: "Iocaste",
    size: 16,
    color: "#606060",
    gradient: "radial-gradient(circle at 35% 35%, #808080, #606060 40%, #404040 70%, #202020)",
    subtitle: "Ananke Companion",
    facts: [
      { icon: "📏", text: "Iocaste is about 5 km in diameter." },
      { icon: "🔭", text: "Discovered in 2000 by Scott Sheppard." }
    ]
  },
  {
    name: "Euanthe",
    size: 14,
    color: "#585858",
    gradient: "radial-gradient(circle at 35% 35%, #787878, #585858 40%, #383838 70%, #181818)",
    subtitle: "Tiny Ananke Member",
    facts: [
      { icon: "📏", text: "Euanthe is about 3 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Thyone",
    size: 14,
    color: "#505050",
    gradient: "radial-gradient(circle at 35% 35%, #707070, #505050 40%, #303030 70%, #101010)",
    subtitle: "Dark Ananke Fragment",
    facts: [
      { icon: "📏", text: "Thyone is about 4 km in diameter." },
      { icon: "🪨", text: "Likely a collision fragment." }
    ]
  },
  // === PASIPHAE GROUP (8 moons) ===
  {
    name: "Pasiphae",
    size: 23,
    color: "#909090",
    gradient: "radial-gradient(circle at 35% 35%, #b0b0b0, #909090 40%, #707070 70%, #505050)",
    subtitle: "Outermost Group Leader",
    facts: [
      { icon: "📏", text: "Pasiphae is about 60 km in diameter, one of Jupiter's largest irregular moons." },
      { icon: "🔄", text: "Orbits Jupiter in a retrograde direction at extreme distance." },
      { icon: "🔭", text: "Discovered in 1908 by Philibert Jacques Melotte." }
    ]
  },
  {
    name: "Sinope",
    size: 20,
    color: "#888888",
    gradient: "radial-gradient(circle at 35% 35%, #a8a8a8, #888888 40%, #686868 70%, #484848)",
    subtitle: "Distant Retrograde Moon",
    facts: [
      { icon: "📏", text: "Sinope is about 38 km in diameter." },
      { icon: "⏱️", text: "Takes about 759 days to orbit Jupiter — over 2 Earth years." },
      { icon: "🔭", text: "Discovered in 1914 by Seth Nicholson." }
    ]
  },
  {
    name: "Callirrhoe",
    size: 17,
    color: "#808080",
    gradient: "radial-gradient(circle at 35% 35%, #a0a0a0, #808080 40%, #606060 70%, #404040)",
    subtitle: "Pasiphae Family Member",
    facts: [
      { icon: "📏", text: "Callirrhoe is about 9 km in diameter." },
      { icon: "🔭", text: "Initially thought to be an asteroid, later confirmed as a Jupiter moon." }
    ]
  },
  {
    name: "Megaclite",
    size: 16,
    color: "#787878",
    gradient: "radial-gradient(circle at 35% 35%, #989898, #787878 40%, #585858 70%, #383838)",
    subtitle: "Outer Irregular Moon",
    facts: [
      { icon: "📏", text: "Megaclite is about 5 km in diameter." },
      { icon: "🔭", text: "Discovered in 2000." }
    ]
  },
  {
    name: "Cyllene",
    size: 14,
    color: "#707070",
    gradient: "radial-gradient(circle at 35% 35%, #909090, #707070 40%, #505050 70%, #303030)",
    subtitle: "Small Pasiphae Member",
    facts: [
      { icon: "📏", text: "Cyllene is about 2 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  },
  {
    name: "Kore",
    size: 14,
    color: "#686868",
    gradient: "radial-gradient(circle at 35% 35%, #888888, #686868 40%, #484848 70%, #282828)",
    subtitle: "Distant Tiny Moon",
    facts: [
      { icon: "📏", text: "Kore is about 2 km in diameter." },
      { icon: "⏱️", text: "Takes about 779 days to orbit Jupiter." }
    ]
  },
  {
    name: "Autonoe",
    size: 15,
    color: "#606060",
    gradient: "radial-gradient(circle at 35% 35%, #808080, #606060 40%, #404040 70%, #202020)",
    subtitle: "Pasiphae Companion",
    facts: [
      { icon: "📏", text: "Autonoe is about 4 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Sponde",
    size: 13,
    color: "#585858",
    gradient: "radial-gradient(circle at 35% 35%, #787878, #585858 40%, #383838 70%, #181818)",
    subtitle: "Tiny Outer Moon",
    facts: [
      { icon: "📏", text: "Sponde is about 2 km in diameter." },
      { icon: "🔄", text: "Retrograde orbit in the Pasiphae group." }
    ]
  },
  // === OTHER NOTABLE MOONS (17 more to reach 50) ===
  {
    name: "Themisto",
    size: 17,
    color: "#a09890",
    gradient: "radial-gradient(circle at 35% 35%, #c0b8b0, #a09890 40%, #807870 70%, #605850)",
    subtitle: "The Loner",
    facts: [
      { icon: "🔭", text: "Themisto orbits alone between the Galilean moons and the outer irregular moons." },
      { icon: "📏", text: "About 8 km in diameter, discovered in 1975 and lost until 2000." }
    ]
  },
  {
    name: "Carpo",
    size: 14,
    color: "#989088",
    gradient: "radial-gradient(circle at 35% 35%, #b8b0a8, #989088 40%, #787068 70%, #585048)",
    subtitle: "Prograde Outlier",
    facts: [
      { icon: "🔄", text: "Carpo is one of only two prograde irregular moons of Jupiter." },
      { icon: "📏", text: "About 3 km in diameter." }
    ]
  },
  {
    name: "Valetudo",
    size: 13,
    color: "#908880",
    gradient: "radial-gradient(circle at 35% 35%, #b0a8a0, #908880 40%, #706860 70%, #504840)",
    subtitle: "The Oddball",
    facts: [
      { icon: "⚠️", text: "Valetudo orbits prograde among retrograde moons — a collision waiting to happen." },
      { icon: "📏", text: "Only about 1 km in diameter, Jupiter's smallest known moon." }
    ]
  },
  {
    name: "Euporie",
    size: 13,
    color: "#686058",
    gradient: "radial-gradient(circle at 35% 35%, #888078, #686058 40%, #484038 70%, #282018)",
    subtitle: "Ananke Fragment",
    facts: [
      { icon: "📏", text: "Euporie is about 2 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Orthosie",
    size: 13,
    color: "#605850",
    gradient: "radial-gradient(circle at 35% 35%, #807870, #605850 40%, #403830 70%, #201810)",
    subtitle: "Small Ananke Member",
    facts: [
      { icon: "📏", text: "Orthosie is about 2 km in diameter." },
      { icon: "🔄", text: "Retrograde orbit." }
    ]
  },
  {
    name: "Mneme",
    size: 12,
    color: "#585048",
    gradient: "radial-gradient(circle at 35% 35%, #787068, #585048 40%, #383028 70%, #181008)",
    subtitle: "Tiny Ananke Moon",
    facts: [
      { icon: "📏", text: "Mneme is about 2 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  },
  {
    name: "Thelxinoe",
    size: 12,
    color: "#504840",
    gradient: "radial-gradient(circle at 35% 35%, #706860, #504840 40%, #302820 70%, #100800)",
    subtitle: "Ananke Group Member",
    facts: [
      { icon: "📏", text: "Thelxinoe is about 2 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  },
  {
    name: "Helike",
    size: 15,
    color: "#484038",
    gradient: "radial-gradient(circle at 35% 35%, #686058, #484038 40%, #282018 70%, #080000)",
    subtitle: "Ananke Companion",
    facts: [
      { icon: "📏", text: "Helike is about 4 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  },
  {
    name: "Aoede",
    size: 15,
    color: "#706868",
    gradient: "radial-gradient(circle at 35% 35%, #908888, #706868 40%, #504848 70%, #302828)",
    subtitle: "Pasiphae Group Member",
    facts: [
      { icon: "📏", text: "Aoede is about 4 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  },
  {
    name: "Hegemone",
    size: 14,
    color: "#686060",
    gradient: "radial-gradient(circle at 35% 35%, #888080, #686060 40%, #484040 70%, #282020)",
    subtitle: "Pasiphae Fragment",
    facts: [
      { icon: "📏", text: "Hegemone is about 3 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  },
  {
    name: "Eurydome",
    size: 14,
    color: "#605858",
    gradient: "radial-gradient(circle at 35% 35%, #807878, #605858 40%, #403838 70%, #201818)",
    subtitle: "Pasiphae Companion",
    facts: [
      { icon: "📏", text: "Eurydome is about 3 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Arche",
    size: 13,
    color: "#585050",
    gradient: "radial-gradient(circle at 35% 35%, #787070, #585050 40%, #383030 70%, #181010)",
    subtitle: "Carme Group Member",
    facts: [
      { icon: "📏", text: "Arche is about 3 km in diameter." },
      { icon: "🔭", text: "Discovered in 2002." }
    ]
  },
  {
    name: "Pasithee",
    size: 12,
    color: "#504848",
    gradient: "radial-gradient(circle at 35% 35%, #706868, #504848 40%, #302828 70%, #100808)",
    subtitle: "Carme Fragment",
    facts: [
      { icon: "📏", text: "Pasithee is about 2 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Aitne",
    size: 14,
    color: "#484040",
    gradient: "radial-gradient(circle at 35% 35%, #686060, #484040 40%, #282020 70%, #080000)",
    subtitle: "Carme Group Moon",
    facts: [
      { icon: "📏", text: "Aitne is about 3 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Kale",
    size: 13,
    color: "#706058",
    gradient: "radial-gradient(circle at 35% 35%, #908078, #706058 40%, #504038 70%, #302018)",
    subtitle: "Carme Companion",
    facts: [
      { icon: "📏", text: "Kale is about 2 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Eukelade",
    size: 15,
    color: "#685850",
    gradient: "radial-gradient(circle at 35% 35%, #887870, #685850 40%, #483830 70%, #281810)",
    subtitle: "Carme Family Member",
    facts: [
      { icon: "📏", text: "Eukelade is about 4 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  },
  {
    name: "Herse",
    size: 13,
    color: "#605048",
    gradient: "radial-gradient(circle at 35% 35%, #807068, #605048 40%, #403028 70%, #201008)",
    subtitle: "Carme Group Moon",
    facts: [
      { icon: "📏", text: "Herse is about 2 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003." }
    ]
  }
];


// ===== SATURN'S 50 MOONS =====
const SATURN_MOONS = [
  // === MAJOR MOONS (Large, with detailed facts) ===
  {
    name: "Titan",
    size: 38,
    color: "#d4a050",
    gradient: "radial-gradient(circle at 35% 35%, #e8c880, #d4a050 40%, #b08030 70%, #806020)",
    subtitle: "The Alien Earth",
    facts: [
      { icon: "🌍", text: "Titan is the only moon with a dense atmosphere — thicker than Earth's, composed mainly of nitrogen." },
      { icon: "🌊", text: "Titan has lakes and seas of liquid methane and ethane on its surface — the only body besides Earth with stable surface liquids." },
      { icon: "🌧️", text: "It rains liquid methane on Titan, carving rivers and filling lakes in a complete hydrocarbon cycle." },
      { icon: "📏", text: "Titan is larger than Mercury and is the second-largest moon in the solar system." }
    ]
  },
  {
    name: "Enceladus",
    size: 28,
    color: "#f0f0f8",
    gradient: "radial-gradient(circle at 35% 35%, #ffffff, #f0f0f8 40%, #d0d0e0 70%, #a0a0b0)",
    subtitle: "The Ice Geyser Moon",
    facts: [
      { icon: "💦", text: "Enceladus shoots massive geysers of water ice from its south pole, feeding Saturn's E ring." },
      { icon: "🌊", text: "Beneath its icy crust lies a global subsurface ocean — a prime candidate for extraterrestrial life." },
      { icon: "✨", text: "Enceladus is the most reflective body in the solar system, reflecting nearly 100% of sunlight." },
      { icon: "🔬", text: "Cassini flew through the plumes and detected organic molecules, hydrogen, and silica — signs of hydrothermal activity." }
    ]
  },
  {
    name: "Mimas",
    size: 24,
    color: "#c0c0c8",
    gradient: "radial-gradient(circle at 35% 35%, #e0e0e8, #c0c0c8 40%, #a0a0a8 70%, #808088)",
    subtitle: "The Death Star Moon",
    facts: [
      { icon: "💥", text: "Mimas has a giant crater called Herschel that makes it look like the Death Star from Star Wars." },
      { icon: "📏", text: "The Herschel crater is 130 km wide — one-third of Mimas's diameter. The impact nearly shattered the moon." },
      { icon: "❄️", text: "Mimas is the smallest body in the solar system known to be rounded by its own gravity." }
    ]
  },
  {
    name: "Rhea",
    size: 30,
    color: "#d8d8e0",
    gradient: "radial-gradient(circle at 35% 35%, #f0f0f8, #d8d8e0 40%, #b8b8c0 70%, #9898a0)",
    subtitle: "Saturn's Second Largest",
    facts: [
      { icon: "📏", text: "Rhea is Saturn's second-largest moon at 1,527 km diameter." },
      { icon: "💍", text: "Rhea may have its own faint ring system — the first moon ever found with rings." },
      { icon: "❄️", text: "Rhea is composed mostly of water ice with a small rocky core." }
    ]
  },
  {
    name: "Tethys",
    size: 26,
    color: "#e8e8f0",
    gradient: "radial-gradient(circle at 35% 35%, #ffffff, #e8e8f0 40%, #c8c8d0 70%, #a8a8b0)",
    subtitle: "The Cracked Moon",
    facts: [
      { icon: "🕳️", text: "Tethys has a massive canyon called Ithaca Chasma that stretches 2,000 km — three-quarters around the moon." },
      { icon: "💥", text: "The Odysseus crater is 400 km wide, covering nearly half of Tethys's surface." },
      { icon: "❄️", text: "Tethys is almost pure water ice, one of the least dense moons in the solar system." }
    ]
  },
  {
    name: "Dione",
    size: 27,
    color: "#d0d0d8",
    gradient: "radial-gradient(circle at 35% 35%, #e8e8f0, #d0d0d8 40%, #b0b0b8 70%, #909098)",
    subtitle: "The Wispy Moon",
    facts: [
      { icon: "✨", text: "Dione has bright 'wispy' features that are actually ice cliffs hundreds of meters high." },
      { icon: "🌊", text: "Dione may have a subsurface ocean, similar to Enceladus." },
      { icon: "📏", text: "At 1,123 km diameter, Dione is Saturn's fourth-largest moon." }
    ]
  },
  {
    name: "Iapetus",
    size: 29,
    color: "#a08060",
    gradient: "radial-gradient(circle at 25% 35%, #f0f0f0, #a08060 50%, #403020 80%)",
    subtitle: "The Yin-Yang Moon",
    facts: [
      { icon: "☯️", text: "Iapetus is two-toned: one hemisphere is dark as coal, the other bright as snow." },
      { icon: "🏔️", text: "A mysterious equatorial ridge up to 20 km high runs around Iapetus like a walnut seam." },
      { icon: "🔭", text: "Giovanni Cassini discovered Iapetus in 1671 and noticed he could only see it on one side of Saturn." }
    ]
  },
  {
    name: "Hyperion",
    size: 22,
    color: "#c8b8a0",
    gradient: "radial-gradient(circle at 35% 35%, #e8d8c0, #c8b8a0 40%, #a89880 70%, #887860)",
    subtitle: "The Sponge Moon",
    facts: [
      { icon: "🧽", text: "Hyperion looks like a giant sponge or wasp nest, with deep craters giving it a porous appearance." },
      { icon: "🔄", text: "Hyperion tumbles chaotically — its rotation is unpredictable and changes constantly." },
      { icon: "📏", text: "At 270 km across, Hyperion is the largest irregularly shaped moon in the solar system." }
    ]
  },
  {
    name: "Phoebe",
    size: 21,
    color: "#505050",
    gradient: "radial-gradient(circle at 35% 35%, #707070, #505050 40%, #303030 70%, #101010)",
    subtitle: "The Captured Centaur",
    facts: [
      { icon: "🔄", text: "Phoebe orbits Saturn backwards (retrograde), suggesting it's a captured Kuiper Belt object." },
      { icon: "🪨", text: "Unlike Saturn's icy moons, Phoebe is rich in carbon compounds and may be a primitive body." },
      { icon: "💍", text: "Phoebe is the source of Saturn's enormous, faint Phoebe ring." }
    ]
  },
  // === SMALL INNER MOONS (Ring shepherds and co-orbitals) ===
  {
    name: "Pan",
    size: 16,
    color: "#d0d0d0",
    gradient: "radial-gradient(circle at 35% 35%, #f0f0f0, #d0d0d0 40%, #b0b0b0 70%, #909090)",
    subtitle: "The Ravioli Moon",
    facts: [
      { icon: "🥟", text: "Pan is shaped like a ravioli or flying saucer due to ring material accumulating around its equator." },
      { icon: "💍", text: "Pan orbits within the Encke Gap in Saturn's A ring, keeping the gap clear." }
    ]
  },
  {
    name: "Atlas",
    size: 15,
    color: "#c8c8c8",
    gradient: "radial-gradient(circle at 35% 35%, #e8e8e8, #c8c8c8 40%, #a8a8a8 70%, #888888)",
    subtitle: "The Flying Saucer",
    facts: [
      { icon: "🛸", text: "Atlas has a pronounced equatorial ridge giving it a UFO-like shape." },
      { icon: "💍", text: "Atlas shepherds the outer edge of Saturn's A ring." }
    ]
  },
  {
    name: "Prometheus",
    size: 18,
    color: "#c0c0c0",
    gradient: "radial-gradient(circle at 35% 35%, #e0e0e0, #c0c0c0 40%, #a0a0a0 70%, #808080)",
    subtitle: "The Ring Shepherd",
    facts: [
      { icon: "💍", text: "Prometheus shepherds the inner edge of Saturn's F ring, creating beautiful streamers and channels." },
      { icon: "📏", text: "Prometheus is about 136 km long and potato-shaped." }
    ]
  },
  {
    name: "Pandora",
    size: 17,
    color: "#b8b8b8",
    gradient: "radial-gradient(circle at 35% 35%, #d8d8d8, #b8b8b8 40%, #989898 70%, #787878)",
    subtitle: "Outer F Ring Shepherd",
    facts: [
      { icon: "💍", text: "Pandora shepherds the outer edge of Saturn's F ring." },
      { icon: "📏", text: "About 84 km across, Pandora is heavily cratered." }
    ]
  },
  {
    name: "Epimetheus",
    size: 19,
    color: "#b0b0b0",
    gradient: "radial-gradient(circle at 35% 35%, #d0d0d0, #b0b0b0 40%, #909090 70%, #707070)",
    subtitle: "The Orbit Swapper",
    facts: [
      { icon: "🔄", text: "Epimetheus and Janus swap orbits every 4 years in a unique gravitational dance." },
      { icon: "📏", text: "About 116 km across, Epimetheus is irregularly shaped." }
    ]
  },
  {
    name: "Janus",
    size: 20,
    color: "#a8a8a8",
    gradient: "radial-gradient(circle at 35% 35%, #c8c8c8, #a8a8a8 40%, #888888 70%, #686868)",
    subtitle: "The Co-Orbital Moon",
    facts: [
      { icon: "🔄", text: "Janus shares its orbit with Epimetheus, swapping positions every 4 years." },
      { icon: "📏", text: "At 179 km across, Janus is slightly larger than its orbital partner." }
    ]
  },
  // === TROJAN MOONS (Share orbits with larger moons) ===
  {
    name: "Telesto",
    size: 14,
    color: "#e0e0e8",
    gradient: "radial-gradient(circle at 35% 35%, #ffffff, #e0e0e8 40%, #c0c0c8 70%, #a0a0a8)",
    subtitle: "Tethys Trojan",
    facts: [
      { icon: "🔺", text: "Telesto leads Tethys by 60° in the same orbit (L4 Lagrange point)." },
      { icon: "❄️", text: "Telesto has an unusually smooth surface, possibly covered in fine ice particles." }
    ]
  },
  {
    name: "Calypso",
    size: 13,
    color: "#d8d8e0",
    gradient: "radial-gradient(circle at 35% 35%, #f8f8ff, #d8d8e0 40%, #b8b8c0 70%, #9898a0)",
    subtitle: "Trailing Tethys Trojan",
    facts: [
      { icon: "🔻", text: "Calypso trails Tethys by 60° in the same orbit (L5 Lagrange point)." },
      { icon: "📏", text: "Only about 21 km across." }
    ]
  },
  {
    name: "Helene",
    size: 15,
    color: "#d0d0d8",
    gradient: "radial-gradient(circle at 35% 35%, #f0f0f8, #d0d0d8 40%, #b0b0b8 70%, #909098)",
    subtitle: "Dione Trojan",
    facts: [
      { icon: "🔺", text: "Helene leads Dione by 60° at the L4 Lagrange point." },
      { icon: "📏", text: "About 36 km across, one of the larger Trojan moons." }
    ]
  },
  {
    name: "Polydeuces",
    size: 12,
    color: "#c8c8d0",
    gradient: "radial-gradient(circle at 35% 35%, #e8e8f0, #c8c8d0 40%, #a8a8b0 70%, #888890)",
    subtitle: "Trailing Dione Trojan",
    facts: [
      { icon: "🔻", text: "Polydeuces trails Dione at the L5 point but wanders significantly." },
      { icon: "📏", text: "Only about 3 km across — one of Saturn's smallest moons." }
    ]
  },
  // === ALKYONIDES GROUP (Small moons between Mimas and Enceladus) ===
  {
    name: "Methone",
    size: 12,
    color: "#f0f0f0",
    gradient: "radial-gradient(circle at 35% 35%, #ffffff, #f0f0f0 40%, #d0d0d0 70%, #b0b0b0)",
    subtitle: "The Egg Moon",
    facts: [
      { icon: "🥚", text: "Methone is almost perfectly egg-shaped with an incredibly smooth surface." },
      { icon: "📏", text: "Only about 3 km across." }
    ]
  },
  {
    name: "Anthe",
    size: 11,
    color: "#e8e8e8",
    gradient: "radial-gradient(circle at 35% 35%, #ffffff, #e8e8e8 40%, #c8c8c8 70%, #a8a8a8)",
    subtitle: "Tiny Ring Arc Moon",
    facts: [
      { icon: "💍", text: "Anthe is associated with a faint ring arc." },
      { icon: "📏", text: "Only about 2 km across." }
    ]
  },
  {
    name: "Pallene",
    size: 12,
    color: "#e0e0e0",
    gradient: "radial-gradient(circle at 35% 35%, #ffffff, #e0e0e0 40%, #c0c0c0 70%, #a0a0a0)",
    subtitle: "Alkyonides Member",
    facts: [
      { icon: "💍", text: "Pallene has its own faint dust ring." },
      { icon: "📏", text: "About 5 km across." }
    ]
  },
  // === INUIT GROUP (Prograde irregular moons) ===
  {
    name: "Kiviuq",
    size: 15,
    color: "#a09080",
    gradient: "radial-gradient(circle at 35% 35%, #c0b0a0, #a09080 40%, #807060 70%, #605040)",
    subtitle: "Inuit Group Leader",
    facts: [
      { icon: "🔭", text: "Discovered in 2000, named after an Inuit giant." },
      { icon: "📏", text: "About 16 km in diameter." }
    ]
  },
  {
    name: "Ijiraq",
    size: 14,
    color: "#988878",
    gradient: "radial-gradient(circle at 35% 35%, #b8a898, #988878 40%, #786858 70%, #584838)",
    subtitle: "Inuit Group Member",
    facts: [
      { icon: "🔭", text: "Named after a creature from Inuit mythology." },
      { icon: "📏", text: "About 12 km in diameter." }
    ]
  },
  {
    name: "Paaliaq",
    size: 16,
    color: "#908070",
    gradient: "radial-gradient(circle at 35% 35%, #b0a090, #908070 40%, #706050 70%, #504030)",
    subtitle: "Largest Inuit Moon",
    facts: [
      { icon: "📏", text: "About 22 km in diameter, the largest of the Inuit group." },
      { icon: "🔭", text: "Discovered in 2000." }
    ]
  },
  {
    name: "Siarnaq",
    size: 17,
    color: "#887868",
    gradient: "radial-gradient(circle at 35% 35%, #a89888, #887868 40%, #685848 70%, #483828)",
    subtitle: "Inuit Giant",
    facts: [
      { icon: "📏", text: "About 40 km in diameter — one of the larger irregular moons." },
      { icon: "🔴", text: "Has a reddish color suggesting organic compounds." }
    ]
  },
  {
    name: "Tarqeq",
    size: 13,
    color: "#807060",
    gradient: "radial-gradient(circle at 35% 35%, #a09080, #807060 40%, #605040 70%, #403020)",
    subtitle: "Inuit Moon",
    facts: [
      { icon: "🔭", text: "Discovered in 2007." },
      { icon: "📏", text: "About 7 km in diameter." }
    ]
  },
  // === NORSE GROUP (Retrograde irregular moons) ===
  {
    name: "Ymir",
    size: 16,
    color: "#686868",
    gradient: "radial-gradient(circle at 35% 35%, #888888, #686868 40%, #484848 70%, #282828)",
    subtitle: "Norse Group Giant",
    facts: [
      { icon: "📏", text: "About 18 km in diameter." },
      { icon: "🔄", text: "Orbits Saturn in a retrograde direction." }
    ]
  },
  {
    name: "Skathi",
    size: 14,
    color: "#606060",
    gradient: "radial-gradient(circle at 35% 35%, #808080, #606060 40%, #404040 70%, #202020)",
    subtitle: "Norse Goddess Moon",
    facts: [
      { icon: "🔭", text: "Named after the Norse goddess of winter." },
      { icon: "📏", text: "About 8 km in diameter." }
    ]
  },
  {
    name: "Mundilfari",
    size: 13,
    color: "#585858",
    gradient: "radial-gradient(circle at 35% 35%, #787878, #585858 40%, #383838 70%, #181818)",
    subtitle: "Norse Group Member",
    facts: [
      { icon: "🔭", text: "Named after the father of the Sun and Moon in Norse mythology." },
      { icon: "📏", text: "About 7 km in diameter." }
    ]
  },
  {
    name: "Narvi",
    size: 13,
    color: "#505050",
    gradient: "radial-gradient(circle at 35% 35%, #707070, #505050 40%, #303030 70%, #101010)",
    subtitle: "Distant Norse Moon",
    facts: [
      { icon: "📏", text: "About 7 km in diameter." },
      { icon: "⏱️", text: "Takes over 1,000 days to orbit Saturn." }
    ]
  },
  {
    name: "Suttungr",
    size: 13,
    color: "#484848",
    gradient: "radial-gradient(circle at 35% 35%, #686868, #484848 40%, #282828 70%, #080808)",
    subtitle: "Norse Giant Moon",
    facts: [
      { icon: "🔭", text: "Named after a giant in Norse mythology." },
      { icon: "📏", text: "About 7 km in diameter." }
    ]
  },
  {
    name: "Thrymr",
    size: 13,
    color: "#404040",
    gradient: "radial-gradient(circle at 35% 35%, #606060, #404040 40%, #202020 70%, #000000)",
    subtitle: "Norse Frost Giant",
    facts: [
      { icon: "🔭", text: "Named after the king of frost giants." },
      { icon: "📏", text: "About 7 km in diameter." }
    ]
  },
  {
    name: "Aegir",
    size: 12,
    color: "#585868",
    gradient: "radial-gradient(circle at 35% 35%, #787888, #585868 40%, #383848 70%, #181828)",
    subtitle: "Norse Sea God Moon",
    facts: [
      { icon: "🔭", text: "Named after the Norse god of the sea." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Bergelmir",
    size: 12,
    color: "#505060",
    gradient: "radial-gradient(circle at 35% 35%, #707080, #505060 40%, #303040 70%, #101020)",
    subtitle: "Norse Ancestor Moon",
    facts: [
      { icon: "🔭", text: "Named after a frost giant ancestor." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Bestla",
    size: 13,
    color: "#484858",
    gradient: "radial-gradient(circle at 35% 35%, #686878, #484858 40%, #282838 70%, #080818)",
    subtitle: "Mother of Odin",
    facts: [
      { icon: "🔭", text: "Named after the mother of Odin in Norse mythology." },
      { icon: "📏", text: "About 7 km in diameter." }
    ]
  },
  {
    name: "Farbauti",
    size: 12,
    color: "#404050",
    gradient: "radial-gradient(circle at 35% 35%, #606070, #404050 40%, #202030 70%, #000010)",
    subtitle: "Father of Loki",
    facts: [
      { icon: "🔭", text: "Named after Loki's father in Norse mythology." },
      { icon: "📏", text: "About 5 km in diameter." }
    ]
  },
  {
    name: "Fenrir",
    size: 12,
    color: "#383848",
    gradient: "radial-gradient(circle at 35% 35%, #585868, #383848 40%, #181828 70%, #000008)",
    subtitle: "The Wolf Moon",
    facts: [
      { icon: "🐺", text: "Named after the monstrous wolf of Norse mythology." },
      { icon: "📏", text: "About 4 km in diameter." }
    ]
  },
  {
    name: "Fornjot",
    size: 12,
    color: "#303040",
    gradient: "radial-gradient(circle at 35% 35%, #505060, #303040 40%, #101020 70%, #000000)",
    subtitle: "Ancient Norse Giant",
    facts: [
      { icon: "🔭", text: "Named after an ancient Norse giant." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Hati",
    size: 11,
    color: "#282838",
    gradient: "radial-gradient(circle at 35% 35%, #484858, #282838 40%, #080818 70%, #000000)",
    subtitle: "Moon-Chasing Wolf",
    facts: [
      { icon: "🐺", text: "Named after the wolf that chases the Moon in Norse mythology." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Hyrrokkin",
    size: 14,
    color: "#606068",
    gradient: "radial-gradient(circle at 35% 35%, #808088, #606068 40%, #404048 70%, #202028)",
    subtitle: "Norse Giantess",
    facts: [
      { icon: "🔭", text: "Named after a giantess who launched Baldr's funeral ship." },
      { icon: "📏", text: "About 8 km in diameter." }
    ]
  },
  {
    name: "Kari",
    size: 13,
    color: "#585860",
    gradient: "radial-gradient(circle at 35% 35%, #787880, #585860 40%, #383840 70%, #181820)",
    subtitle: "Norse Wind God",
    facts: [
      { icon: "💨", text: "Named after the Norse god of wind." },
      { icon: "📏", text: "About 7 km in diameter." }
    ]
  },
  {
    name: "Loge",
    size: 12,
    color: "#505058",
    gradient: "radial-gradient(circle at 35% 35%, #707078, #505058 40%, #303038 70%, #101018)",
    subtitle: "Norse Fire Giant",
    facts: [
      { icon: "🔥", text: "Named after a fire giant in Norse mythology." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Skoll",
    size: 12,
    color: "#484850",
    gradient: "radial-gradient(circle at 35% 35%, #686870, #484850 40%, #282830 70%, #080810)",
    subtitle: "Sun-Chasing Wolf",
    facts: [
      { icon: "🐺", text: "Named after the wolf that chases the Sun in Norse mythology." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Surtur",
    size: 12,
    color: "#604040",
    gradient: "radial-gradient(circle at 35% 35%, #806060, #604040 40%, #402020 70%, #200000)",
    subtitle: "Fire Giant Leader",
    facts: [
      { icon: "🔥", text: "Named after the leader of the fire giants who brings Ragnarök." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Jarnsaxa",
    size: 12,
    color: "#585050",
    gradient: "radial-gradient(circle at 35% 35%, #787070, #585050 40%, #383030 70%, #181010)",
    subtitle: "Thor's Giantess",
    facts: [
      { icon: "🔭", text: "Named after a giantess and mother of one of Thor's sons." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  },
  {
    name: "Greip",
    size: 12,
    color: "#504848",
    gradient: "radial-gradient(circle at 35% 35%, #706868, #504848 40%, #302828 70%, #100808)",
    subtitle: "Norse Giantess",
    facts: [
      { icon: "🔭", text: "Named after a giantess in Norse mythology." },
      { icon: "📏", text: "About 6 km in diameter." }
    ]
  }
];


// ===== URANUS'S 27 MOONS =====
const URANUS_MOONS = [
  // === MAJOR MOONS (5 large moons) ===
  {
    name: "Miranda",
    size: 28,
    color: "#b0b8c0",
    gradient: "radial-gradient(circle at 35% 35%, #d0d8e0, #b0b8c0 40%, #909098 70%, #707078)",
    subtitle: "The Frankenstein Moon",
    facts: [
      { icon: "🧩", text: "Miranda looks like it was shattered and reassembled — with canyons 12 times deeper than the Grand Canyon." },
      { icon: "🏔️", text: "Verona Rupes is a 20 km high cliff — the tallest known cliff in the solar system." },
      { icon: "📏", text: "Miranda is only 472 km across, the smallest of Uranus's major moons." }
    ]
  },
  {
    name: "Ariel",
    size: 30,
    color: "#c0c8d0",
    gradient: "radial-gradient(circle at 35% 35%, #e0e8f0, #c0c8d0 40%, #a0a8b0 70%, #808890)",
    subtitle: "The Brightest Uranian",
    facts: [
      { icon: "✨", text: "Ariel is the brightest of Uranus's moons, reflecting about 50% of sunlight." },
      { icon: "🕳️", text: "Ariel has extensive canyon systems and signs of past geological activity." },
      { icon: "📏", text: "At 1,158 km diameter, Ariel is Uranus's fourth-largest moon." }
    ]
  },
  {
    name: "Umbriel",
    size: 29,
    color: "#606068",
    gradient: "radial-gradient(circle at 35% 35%, #808088, #606068 40%, #404048 70%, #202028)",
    subtitle: "The Dark Moon",
    facts: [
      { icon: "🌑", text: "Umbriel is the darkest of Uranus's major moons, reflecting only 16% of light." },
      { icon: "💍", text: "A bright ring called Wunda crater stands out on its dark surface." },
      { icon: "📏", text: "Umbriel is 1,169 km in diameter." }
    ]
  },
  {
    name: "Titania",
    size: 32,
    color: "#a8b0b8",
    gradient: "radial-gradient(circle at 35% 35%, #c8d0d8, #a8b0b8 40%, #889098 70%, #687078)",
    subtitle: "Queen of the Fairies",
    facts: [
      { icon: "👑", text: "Titania is Uranus's largest moon at 1,578 km diameter." },
      { icon: "🕳️", text: "Messina Chasma is a massive canyon system stretching 1,500 km." },
      { icon: "❄️", text: "Titania is composed of roughly equal parts ice and rock." }
    ]
  },
  {
    name: "Oberon",
    size: 31,
    color: "#909098",
    gradient: "radial-gradient(circle at 35% 35%, #b0b0b8, #909098 40%, #707078 70%, #505058)",
    subtitle: "The Outermost Major Moon",
    facts: [
      { icon: "📏", text: "Oberon is Uranus's second-largest moon at 1,523 km diameter." },
      { icon: "💥", text: "Oberon is heavily cratered with a large mountain on its limb." },
      { icon: "🔭", text: "Discovered by William Herschel in 1787, the same year as Titania." }
    ]
  },
  // === INNER MOONS (13 small moons) ===
  {
    name: "Cordelia",
    size: 14,
    color: "#a0a0a8",
    gradient: "radial-gradient(circle at 35% 35%, #c0c0c8, #a0a0a8 40%, #808088 70%, #606068)",
    subtitle: "Inner Ring Shepherd",
    facts: [
      { icon: "💍", text: "Cordelia shepherds the inner edge of Uranus's epsilon ring." },
      { icon: "📏", text: "About 40 km in diameter." }
    ]
  },
  {
    name: "Ophelia",
    size: 14,
    color: "#989898",
    gradient: "radial-gradient(circle at 35% 35%, #b8b8b8, #989898 40%, #787878 70%, #585858)",
    subtitle: "Outer Ring Shepherd",
    facts: [
      { icon: "💍", text: "Ophelia shepherds the outer edge of Uranus's epsilon ring." },
      { icon: "📏", text: "About 43 km in diameter." }
    ]
  },
  {
    name: "Bianca",
    size: 13,
    color: "#909090",
    gradient: "radial-gradient(circle at 35% 35%, #b0b0b0, #909090 40%, #707070 70%, #505050)",
    subtitle: "Portia Group Member",
    facts: [
      { icon: "📏", text: "About 51 km in diameter." },
      { icon: "🔭", text: "Discovered by Voyager 2 in 1986." }
    ]
  },
  {
    name: "Cressida",
    size: 15,
    color: "#888888",
    gradient: "radial-gradient(circle at 35% 35%, #a8a8a8, #888888 40%, #686868 70%, #484848)",
    subtitle: "Portia Group Moon",
    facts: [
      { icon: "📏", text: "About 80 km in diameter." },
      { icon: "⚠️", text: "Cressida may collide with Desdemona in about 100 million years." }
    ]
  },
  {
    name: "Desdemona",
    size: 14,
    color: "#808080",
    gradient: "radial-gradient(circle at 35% 35%, #a0a0a0, #808080 40%, #606060 70%, #404040)",
    subtitle: "Collision Course Moon",
    facts: [
      { icon: "📏", text: "About 64 km in diameter." },
      { icon: "⚠️", text: "On a potential collision course with Cressida." }
    ]
  },
  {
    name: "Juliet",
    size: 15,
    color: "#787878",
    gradient: "radial-gradient(circle at 35% 35%, #989898, #787878 40%, #585858 70%, #383838)",
    subtitle: "Portia Group Member",
    facts: [
      { icon: "📏", text: "About 94 km in diameter." },
      { icon: "🔭", text: "Named after the heroine of Shakespeare's Romeo and Juliet." }
    ]
  },
  {
    name: "Portia",
    size: 16,
    color: "#707070",
    gradient: "radial-gradient(circle at 35% 35%, #909090, #707070 40%, #505050 70%, #303030)",
    subtitle: "Group Leader",
    facts: [
      { icon: "📏", text: "About 135 km in diameter, largest of the inner moons." },
      { icon: "👑", text: "Leads the Portia group of inner moons." }
    ]
  },
  {
    name: "Rosalind",
    size: 14,
    color: "#686868",
    gradient: "radial-gradient(circle at 35% 35%, #888888, #686868 40%, #484848 70%, #282828)",
    subtitle: "Inner Moon",
    facts: [
      { icon: "📏", text: "About 72 km in diameter." },
      { icon: "🔭", text: "Discovered by Voyager 2 in 1986." }
    ]
  },
  {
    name: "Cupid",
    size: 11,
    color: "#a8a8b0",
    gradient: "radial-gradient(circle at 35% 35%, #c8c8d0, #a8a8b0 40%, #888890 70%, #686870)",
    subtitle: "Tiny Inner Moon",
    facts: [
      { icon: "📏", text: "Only about 18 km in diameter." },
      { icon: "🔭", text: "Discovered in 2003 using Hubble." }
    ]
  },
  {
    name: "Belinda",
    size: 15,
    color: "#606060",
    gradient: "radial-gradient(circle at 35% 35%, #808080, #606060 40%, #404040 70%, #202020)",
    subtitle: "Portia Group Moon",
    facts: [
      { icon: "📏", text: "About 90 km in diameter." },
      { icon: "🔭", text: "Discovered by Voyager 2." }
    ]
  },
  {
    name: "Perdita",
    size: 12,
    color: "#989898",
    gradient: "radial-gradient(circle at 35% 35%, #b8b8b8, #989898 40%, #787878 70%, #585858)",
    subtitle: "Lost and Found Moon",
    facts: [
      { icon: "🔭", text: "Discovered in Voyager 2 images in 1999, 13 years after the flyby." },
      { icon: "📏", text: "About 30 km in diameter." }
    ]
  },
  {
    name: "Puck",
    size: 17,
    color: "#585858",
    gradient: "radial-gradient(circle at 35% 35%, #787878, #585858 40%, #383838 70%, #181818)",
    subtitle: "The Mischievous Moon",
    facts: [
      { icon: "📏", text: "About 162 km in diameter, largest inner moon discovered by Voyager." },
      { icon: "💥", text: "Heavily cratered surface." }
    ]
  },
  {
    name: "Mab",
    size: 12,
    color: "#b0b0b8",
    gradient: "radial-gradient(circle at 35% 35%, #d0d0d8, #b0b0b8 40%, #909098 70%, #707078)",
    subtitle: "Ring Source Moon",
    facts: [
      { icon: "💍", text: "Mab is the source of Uranus's outermost ring (mu ring)." },
      { icon: "📏", text: "About 25 km in diameter." }
    ]
  },
  // === IRREGULAR MOONS (9 outer moons) ===
  {
    name: "Francisco",
    size: 12,
    color: "#706860",
    gradient: "radial-gradient(circle at 35% 35%, #908880, #706860 40%, #504840 70%, #302820)",
    subtitle: "Retrograde Moon",
    facts: [
      { icon: "🔄", text: "Francisco orbits Uranus backwards (retrograde)." },
      { icon: "📏", text: "About 22 km in diameter." }
    ]
  },
  {
    name: "Caliban",
    size: 16,
    color: "#685850",
    gradient: "radial-gradient(circle at 35% 35%, #887870, #685850 40%, #483830 70%, #281810)",
    subtitle: "Largest Irregular Moon",
    facts: [
      { icon: "📏", text: "About 72 km in diameter, largest irregular moon of Uranus." },
      { icon: "🔄", text: "Retrograde orbit." }
    ]
  },
  {
    name: "Stephano",
    size: 13,
    color: "#605048",
    gradient: "radial-gradient(circle at 35% 35%, #807068, #605048 40%, #403028 70%, #201008)",
    subtitle: "Outer Irregular Moon",
    facts: [
      { icon: "📏", text: "About 32 km in diameter." },
      { icon: "🔭", text: "Discovered in 1999." }
    ]
  },
  {
    name: "Trinculo",
    size: 11,
    color: "#584840",
    gradient: "radial-gradient(circle at 35% 35%, #786860, #584840 40%, #382820 70%, #180800)",
    subtitle: "Tiny Irregular Moon",
    facts: [
      { icon: "📏", text: "About 18 km in diameter." },
      { icon: "🔭", text: "Discovered in 2001." }
    ]
  },
  {
    name: "Sycorax",
    size: 17,
    color: "#806050",
    gradient: "radial-gradient(circle at 35% 35%, #a08070, #806050 40%, #604030 70%, #402010)",
    subtitle: "Red Irregular Moon",
    facts: [
      { icon: "🔴", text: "Sycorax has a reddish color, unusual for Uranian moons." },
      { icon: "📏", text: "About 150 km in diameter." }
    ]
  },
  {
    name: "Margaret",
    size: 12,
    color: "#787068",
    gradient: "radial-gradient(circle at 35% 35%, #989088, #787068 40%, #585048 70%, #383028)",
    subtitle: "Only Prograde Irregular",
    facts: [
      { icon: "🔄", text: "Margaret is the only prograde irregular moon of Uranus." },
      { icon: "📏", text: "About 20 km in diameter." }
    ]
  },
  {
    name: "Prospero",
    size: 14,
    color: "#706058",
    gradient: "radial-gradient(circle at 35% 35%, #908078, #706058 40%, #504038 70%, #302018)",
    subtitle: "Outer Retrograde Moon",
    facts: [
      { icon: "📏", text: "About 50 km in diameter." },
      { icon: "🔭", text: "Discovered in 1999." }
    ]
  },
  {
    name: "Setebos",
    size: 14,
    color: "#685850",
    gradient: "radial-gradient(circle at 35% 35%, #887870, #685850 40%, #483830 70%, #281810)",
    subtitle: "Distant Irregular Moon",
    facts: [
      { icon: "📏", text: "About 48 km in diameter." },
      { icon: "⏱️", text: "Takes about 17 years to orbit Uranus." }
    ]
  },
  {
    name: "Ferdinand",
    size: 12,
    color: "#605048",
    gradient: "radial-gradient(circle at 35% 35%, #807068, #605048 40%, #403028 70%, #201008)",
    subtitle: "Outermost Moon",
    facts: [
      { icon: "📏", text: "About 20 km in diameter." },
      { icon: "⏱️", text: "Takes about 8 years to orbit Uranus." }
    ]
  }
];

// ===== NEPTUNE'S 16 MOONS =====
const NEPTUNE_MOONS = [
  // === MAJOR MOONS ===
  {
    name: "Triton",
    size: 34,
    color: "#c8b8a8",
    gradient: "radial-gradient(circle at 35% 35%, #e8d8c8, #c8b8a8 40%, #a89888 70%, #887868)",
    subtitle: "The Captured World",
    facts: [
      { icon: "🔄", text: "Triton orbits Neptune backwards — it's a captured Kuiper Belt object, not a native moon." },
      { icon: "🌋", text: "Triton has active geysers that shoot nitrogen gas 8 km into the sky." },
      { icon: "🥶", text: "At -235°C, Triton's surface is one of the coldest in the solar system." },
      { icon: "📏", text: "Triton is the seventh-largest moon in the solar system at 2,707 km diameter." }
    ]
  },
  {
    name: "Proteus",
    size: 22,
    color: "#606068",
    gradient: "radial-gradient(circle at 35% 35%, #808088, #606068 40%, #404048 70%, #202028)",
    subtitle: "The Dark Giant",
    facts: [
      { icon: "📏", text: "Proteus is Neptune's second-largest moon at 420 km diameter." },
      { icon: "🌑", text: "One of the darkest objects in the solar system, reflecting only 6% of light." },
      { icon: "🔭", text: "Too dark to be seen from Earth; discovered by Voyager 2." }
    ]
  },
  {
    name: "Nereid",
    size: 18,
    color: "#a0a0a8",
    gradient: "radial-gradient(circle at 35% 35%, #c0c0c8, #a0a0a8 40%, #808088 70%, #606068)",
    subtitle: "The Eccentric Moon",
    facts: [
      { icon: "🔭", text: "Nereid has the most eccentric orbit of any known moon." },
      { icon: "📏", text: "About 340 km in diameter." },
      { icon: "⏱️", text: "Takes 360 days to orbit Neptune." }
    ]
  },
  // === INNER MOONS ===
  {
    name: "Naiad",
    size: 13,
    color: "#909098",
    gradient: "radial-gradient(circle at 35% 35%, #b0b0b8, #909098 40%, #707078 70%, #505058)",
    subtitle: "Innermost Moon",
    facts: [
      { icon: "⚡", text: "Naiad orbits Neptune in just 7 hours." },
      { icon: "📏", text: "About 66 km in diameter." }
    ]
  },
  {
    name: "Thalassa",
    size: 14,
    color: "#888890",
    gradient: "radial-gradient(circle at 35% 35%, #a8a8b0, #888890 40%, #686870 70%, #484850)",
    subtitle: "Sea Goddess Moon",
    facts: [
      { icon: "📏", text: "About 82 km in diameter." },
      { icon: "🔭", text: "Discovered by Voyager 2 in 1989." }
    ]
  },
  {
    name: "Despina",
    size: 15,
    color: "#808088",
    gradient: "radial-gradient(circle at 35% 35%, #a0a0a8, #808088 40%, #606068 70%, #404048)",
    subtitle: "Ring Shepherd",
    facts: [
      { icon: "💍", text: "Despina shepherds Neptune's Le Verrier ring." },
      { icon: "📏", text: "About 150 km in diameter." }
    ]
  },
  {
    name: "Galatea",
    size: 16,
    color: "#787880",
    gradient: "radial-gradient(circle at 35% 35%, #9898a0, #787880 40%, #585860 70%, #383840)",
    subtitle: "Adams Ring Shepherd",
    facts: [
      { icon: "💍", text: "Galatea shepherds Neptune's Adams ring." },
      { icon: "📏", text: "About 176 km in diameter." }
    ]
  },
  {
    name: "Larissa",
    size: 17,
    color: "#707078",
    gradient: "radial-gradient(circle at 35% 35%, #909098, #707078 40%, #505058 70%, #303038)",
    subtitle: "Cratered Inner Moon",
    facts: [
      { icon: "📏", text: "About 194 km in diameter." },
      { icon: "💥", text: "Heavily cratered surface." }
    ]
  },
  {
    name: "Hippocamp",
    size: 11,
    color: "#a0a0a8",
    gradient: "radial-gradient(circle at 35% 35%, #c0c0c8, #a0a0a8 40%, #808088 70%, #606068)",
    subtitle: "The Tiny Moon",
    facts: [
      { icon: "📏", text: "Only about 35 km in diameter — Neptune's smallest known moon." },
      { icon: "🔭", text: "Discovered in 2013 using Hubble." }
    ]
  },
  // === IRREGULAR MOONS ===
  {
    name: "Halimede",
    size: 13,
    color: "#706860",
    gradient: "radial-gradient(circle at 35% 35%, #908880, #706860 40%, #504840 70%, #302820)",
    subtitle: "Retrograde Irregular",
    facts: [
      { icon: "🔄", text: "Halimede orbits Neptune backwards." },
      { icon: "📏", text: "About 62 km in diameter." }
    ]
  },
  {
    name: "Psamathe",
    size: 12,
    color: "#685850",
    gradient: "radial-gradient(circle at 35% 35%, #887870, #685850 40%, #483830 70%, #281810)",
    subtitle: "Distant Irregular Moon",
    facts: [
      { icon: "⏱️", text: "Takes about 25 years to orbit Neptune." },
      { icon: "📏", text: "About 40 km in diameter." }
    ]
  },
  {
    name: "Sao",
    size: 12,
    color: "#787068",
    gradient: "radial-gradient(circle at 35% 35%, #989088, #787068 40%, #585048 70%, #383028)",
    subtitle: "Prograde Irregular",
    facts: [
      { icon: "🔄", text: "Sao orbits Neptune in the prograde direction." },
      { icon: "📏", text: "About 44 km in diameter." }
    ]
  },
  {
    name: "Laomedeia",
    size: 12,
    color: "#706058",
    gradient: "radial-gradient(circle at 35% 35%, #908078, #706058 40%, #504038 70%, #302018)",
    subtitle: "Prograde Irregular",
    facts: [
      { icon: "🔄", text: "Prograde orbit like Sao." },
      { icon: "📏", text: "About 42 km in diameter." }
    ]
  },
  {
    name: "Neso",
    size: 13,
    color: "#605048",
    gradient: "radial-gradient(circle at 35% 35%, #807068, #605048 40%, #403028 70%, #201008)",
    subtitle: "Most Distant Moon",
    facts: [
      { icon: "🏆", text: "Neso is the most distant known moon of any planet — 48 million km from Neptune." },
      { icon: "⏱️", text: "Takes about 27 years to complete one orbit." }
    ]
  }
];

// ===== PLUTO'S 5 MOONS =====
const PLUTO_MOONS = [
  {
    name: "Charon",
    size: 32,
    color: "#a8a0a0",
    gradient: "radial-gradient(circle at 35% 35%, #c8c0c0, #a8a0a0 40%, #888080 70%, #686060)",
    subtitle: "The Binary Partner",
    facts: [
      { icon: "⚖️", text: "Charon is so large relative to Pluto that they orbit a point in space between them — a true binary system." },
      { icon: "📏", text: "At 1,212 km diameter, Charon is half the size of Pluto." },
      { icon: "🔒", text: "Pluto and Charon are mutually tidally locked — they always show the same face to each other." },
      { icon: "🔴", text: "Charon has a reddish polar cap made of tholins — organic compounds from Pluto's escaping atmosphere." }
    ]
  },
  {
    name: "Nix",
    size: 16,
    color: "#c0c0c8",
    gradient: "radial-gradient(circle at 35% 35%, #e0e0e8, #c0c0c8 40%, #a0a0a8 70%, #808088)",
    subtitle: "The Tumbling Moon",
    facts: [
      { icon: "🔄", text: "Nix tumbles chaotically due to the gravitational influence of Pluto and Charon." },
      { icon: "📏", text: "About 50 km across." },
      { icon: "🔭", text: "Discovered in 2005 using Hubble." }
    ]
  },
  {
    name: "Hydra",
    size: 17,
    color: "#b8b8c0",
    gradient: "radial-gradient(circle at 35% 35%, #d8d8e0, #b8b8c0 40%, #9898a0 70%, #787880)",
    subtitle: "The Outer Moon",
    facts: [
      { icon: "📏", text: "About 51 km across, slightly larger than Nix." },
      { icon: "🔄", text: "Hydra also tumbles chaotically like Nix." },
      { icon: "🔭", text: "Discovered alongside Nix in 2005." }
    ]
  },
  {
    name: "Kerberos",
    size: 13,
    color: "#909098",
    gradient: "radial-gradient(circle at 35% 35%, #b0b0b8, #909098 40%, #707078 70%, #505058)",
    subtitle: "The Dark Moon",
    facts: [
      { icon: "🌑", text: "Kerberos is surprisingly dark, unlike Pluto's other small moons." },
      { icon: "📏", text: "About 12 km across." },
      { icon: "🔭", text: "Discovered in 2011." }
    ]
  },
  {
    name: "Styx",
    size: 12,
    color: "#a8a8b0",
    gradient: "radial-gradient(circle at 35% 35%, #c8c8d0, #a8a8b0 40%, #888890 70%, #686870)",
    subtitle: "The Smallest Moon",
    facts: [
      { icon: "📏", text: "Only about 10 km across — Pluto's smallest known moon." },
      { icon: "🔭", text: "Discovered in 2012, the last of Pluto's moons to be found." },
      { icon: "🔄", text: "Orbits in resonance with Charon." }
    ]
  }
];

// ===== MARS'S 2 MOONS =====
const MARS_MOONS = [
  {
    name: "Phobos",
    size: 22,
    color: "#8a7a6a",
    gradient: "radial-gradient(circle at 35% 35%, #aa9a8a, #8a7a6a 40%, #6a5a4a 70%, #4a3a2a)",
    subtitle: "The Doomed Moon",
    facts: [
      { icon: "💀", text: "Phobos is slowly spiraling toward Mars and will crash into the planet or break apart in about 50 million years." },
      { icon: "⚡", text: "Phobos orbits Mars faster than Mars rotates — it rises in the west and sets in the east." },
      { icon: "🕳️", text: "The Stickney crater is 9 km wide — nearly half of Phobos's diameter. The impact almost shattered the moon." },
      { icon: "📏", text: "Phobos is only 27 km across — you could drive around it in about an hour." }
    ]
  },
  {
    name: "Deimos",
    size: 18,
    color: "#9a8a7a",
    gradient: "radial-gradient(circle at 35% 35%, #baaa9a, #9a8a7a 40%, #7a6a5a 70%, #5a4a3a)",
    subtitle: "The Smooth Moon",
    facts: [
      { icon: "✨", text: "Deimos has a smoother surface than Phobos, covered in a thick layer of regolith." },
      { icon: "📏", text: "Deimos is only 15 km across — the smaller of Mars's two moons." },
      { icon: "🔭", text: "Both moons were discovered in 1877 by Asaph Hall." },
      { icon: "🪨", text: "Deimos and Phobos are likely captured asteroids from the nearby asteroid belt." }
    ]
  }
];

// ===== EARTH'S MOON =====
const EARTH_MOONS = [
  {
    name: "The Moon (Luna)",
    size: 35,
    color: "#c8c8c8",
    gradient: "radial-gradient(circle at 35% 35%, #e8e8e8, #c8c8c8 40%, #a8a8a8 70%, #888888)",
    subtitle: "Our Celestial Companion",
    facts: [
      { icon: "🌍", text: "The Moon is the fifth-largest moon in the solar system and the largest relative to its planet." },
      { icon: "👣", text: "12 humans have walked on the Moon between 1969 and 1972 during NASA's Apollo program." },
      { icon: "🌊", text: "The Moon's gravity causes Earth's tides and has slowed Earth's rotation over billions of years." },
      { icon: "🔒", text: "The Moon is tidally locked — we always see the same face from Earth." },
      { icon: "💥", text: "The Moon likely formed when a Mars-sized object collided with early Earth 4.5 billion years ago." }
    ]
  }
];


// Apply the expanded moon data to the PLANETS array
if (typeof applyExpandedMoonData === 'function') {
    applyExpandedMoonData();
}
