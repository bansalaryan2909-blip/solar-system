// ===== PAN & ZOOM WITH MOMENTUM =====
let panX = 0, panY = 0, zoomLevel = 1;
let isDragging = false, dragStartX = 0, dragStartY = 0, panStartX = 0, panStartY = 0;
let velocityX = 0, velocityY = 0;
let lastMoveX = 0, lastMoveY = 0, lastMoveTime = 0;
let didDrag = false;
let momentumId = null;
const MIN_ZOOM = 0.3, MAX_ZOOM = 4;
const FRICTION = 0.92;
const VELOCITY_SCALE = 0.3;

function applyTransform() {
    const container = document.getElementById('system-container');
    container.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
}

function startMomentum() {
    if (momentumId) cancelAnimationFrame(momentumId);
    
    function animate() {
        if (Math.abs(velocityX) < 0.1 && Math.abs(velocityY) < 0.1) {
            velocityX = 0; velocityY = 0;
            return;
        }
        panX += velocityX;
        panY += velocityY;
        velocityX *= FRICTION;
        velocityY *= FRICTION;
        applyTransform();
        momentumId = requestAnimationFrame(animate);
    }
    animate();
}

function initPanZoom() {
    const viewport = document.getElementById('system-viewport');

    viewport.addEventListener('mousedown', (e) => {
        if (momentumId) cancelAnimationFrame(momentumId);
        isDragging = true;
        didDrag = false;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        panStartX = panX;
        panStartY = panY;
        lastMoveX = e.clientX;
        lastMoveY = e.clientY;
        lastMoveTime = Date.now();
        velocityX = 0; velocityY = 0;
        viewport.classList.add('dragging');
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag = true;
        
        panX = panStartX + dx;
        panY = panStartY + dy;
        
        const now = Date.now();
        const dt = now - lastMoveTime;
        if (dt > 0) {
            velocityX = (e.clientX - lastMoveX) * VELOCITY_SCALE;
            velocityY = (e.clientY - lastMoveY) * VELOCITY_SCALE;
        }
        lastMoveX = e.clientX;
        lastMoveY = e.clientY;
        lastMoveTime = now;
        
        applyTransform();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging && didDrag) startMomentum();
        isDragging = false;
        viewport.classList.remove('dragging');
    });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = viewport.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        
        const oldZoom = zoomLevel;
        const delta = e.deltaY > 0 ? 0.9 : 1.12;
        zoomLevel = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoomLevel * delta));
        
        const zoomRatio = zoomLevel / oldZoom;
        panX = mouseX - (mouseX - panX) * zoomRatio;
        panY = mouseY - (mouseY - panY) * zoomRatio;
        
        applyTransform();
        const hint = document.getElementById('pan-hint');
        if (hint) hint.style.opacity = '0';
    }, { passive: false });

    // Touch support
    let lastTouchDist = 0;
    viewport.addEventListener('touchstart', (e) => {
        if (momentumId) cancelAnimationFrame(momentumId);
        if (e.touches.length === 1) {
            isDragging = true;
            didDrag = false;
            dragStartX = e.touches[0].clientX;
            dragStartY = e.touches[0].clientY;
            panStartX = panX;
            panStartY = panY;
            lastMoveX = e.touches[0].clientX;
            lastMoveY = e.touches[0].clientY;
            lastMoveTime = Date.now();
            velocityX = 0; velocityY = 0;
        } else if (e.touches.length === 2) {
            isDragging = false;
            lastTouchDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && isDragging) {
            const dx = e.touches[0].clientX - dragStartX;
            const dy = e.touches[0].clientY - dragStartY;
            if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag = true;
            panX = panStartX + dx;
            panY = panStartY + dy;
            const now = Date.now();
            const dt = now - lastMoveTime;
            if (dt > 0) {
                velocityX = (e.touches[0].clientX - lastMoveX) * VELOCITY_SCALE;
                velocityY = (e.touches[0].clientY - lastMoveY) * VELOCITY_SCALE;
            }
            lastMoveX = e.touches[0].clientX;
            lastMoveY = e.touches[0].clientY;
            lastMoveTime = now;
            applyTransform();
        } else if (e.touches.length === 2) {
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            if (lastTouchDist > 0) {
                zoomLevel = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoomLevel * (dist / lastTouchDist)));
                applyTransform();
            }
            lastTouchDist = dist;
        }
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            if (isDragging && didDrag) startMomentum();
            isDragging = false;
            lastTouchDist = 0;
        }
    });

    // Zoom buttons
    document.getElementById('zoom-in').addEventListener('click', () => {
        zoomLevel = Math.min(MAX_ZOOM, zoomLevel * 1.3);
        applyTransform();
    });
    document.getElementById('zoom-out').addEventListener('click', () => {
        zoomLevel = Math.max(MIN_ZOOM, zoomLevel * 0.7);
        applyTransform();
    });
    document.getElementById('zoom-reset').addEventListener('click', () => {
        if (momentumId) cancelAnimationFrame(momentumId);
        panX = 0; panY = 0; zoomLevel = 1;
        velocityX = 0; velocityY = 0;
        applyTransform();
    });
}

// ===== STAR FIELD =====
function createStars(containerId) {
    const container = containerId ? document.getElementById(containerId) : document.getElementById('stars-container');
    if (!container) return;
    const count = containerId ? 150 : 800;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        const isBright = Math.random() > 0.94;
        star.className = isBright ? 'star star-bright' : 'star';
        const size = isBright ? (Math.random() * 2.5 + 1.5) : (Math.random() * 1.5 + 0.3);
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--twinkle-duration', (Math.random() * 5 + 2) + 's');
        star.style.setProperty('--twinkle-min', (Math.random() * 0.15 + 0.05).toString());
        star.style.setProperty('--twinkle-max', (Math.random() * 0.4 + 0.55).toString());
        star.style.animationDelay = (Math.random() * 8) + 's';
        container.appendChild(star);
    }
}

function createNebulae() {
    const container = document.getElementById('stars-container');
    const nebulae = [
        { x: '10%', y: '20%', w: 400, h: 300, color: 'rgba(25, 40, 80, 0.035)' },
        { x: '70%', y: '55%', w: 350, h: 450, color: 'rgba(50, 25, 60, 0.025)' },
        { x: '40%', y: '75%', w: 500, h: 250, color: 'rgba(15, 35, 55, 0.03)' },
    ];
    nebulae.forEach(n => {
        const el = document.createElement('div');
        el.className = 'nebula';
        el.style.left = n.x; el.style.top = n.y;
        el.style.width = n.w + 'px'; el.style.height = n.h + 'px';
        el.style.background = `radial-gradient(ellipse, ${n.color} 0%, transparent 70%)`;
        container.appendChild(el);
    });
}

// ===== CLOCK =====
function updateClock() {
    const now = new Date();
    const utc = now.toISOString().replace('T', '  ').substring(0, 21) + ' UTC';
    const el = document.getElementById('clock');
    if (el) el.textContent = utc;
}


// ===== FAMOUS ASTEROIDS DATA =====
const ASTEROIDS = [
    {
        name: "Ceres",
        subtitle: "The Dwarf Planet Asteroid",
        classification: ["Dwarf Planet", "Largest Asteroid", "Main Belt"],
        shape: "spherical",
        color: "#a0a098",
        gradient: "radial-gradient(circle at 35% 35%, #c8c8c0, #a0a098 30%, #787870 55%, #505048 75%, #303028)",
        facts: [
            { icon: "👑", text: "Ceres is the largest object in the asteroid belt, containing about one-third of the belt's total mass." },
            { icon: "📏", text: "With a diameter of 940 km, Ceres is large enough to be spherical and was reclassified as a dwarf planet in 2006." },
            { icon: "💧", text: "Ceres may have more fresh water than all of Earth's fresh water combined, locked as ice beneath its surface." },
            { icon: "✨", text: "Bright spots in Occator Crater are salt deposits from ancient water that seeped to the surface and evaporated." },
            { icon: "🚀", text: "NASA's Dawn spacecraft orbited Ceres from 2015-2018, revealing a geologically complex world." },
            { icon: "🌋", text: "Ahuna Mons is a 5 km tall cryovolcano on Ceres — it erupts salty water and mud instead of lava." }
        ]
    },
    {
        name: "Vesta",
        subtitle: "The Brightest Asteroid",
        classification: ["Protoplanet", "V-Type", "Main Belt"],
        shape: "irregular",
        color: "#c8c0b0",
        gradient: "radial-gradient(ellipse at 35% 35%, #e0d8c8, #c8c0b0 30%, #a09888 55%, #706858 75%, #403830)",
        facts: [
            { icon: "⭐", text: "Vesta is the brightest asteroid visible from Earth and can occasionally be seen with the naked eye." },
            { icon: "📏", text: "At 525 km in diameter, Vesta is the second-largest asteroid and accounts for 9% of the asteroid belt's mass." },
            { icon: "💥", text: "A massive impact created the 500 km wide Rheasilvia crater and blasted 1% of Vesta into space — some landed on Earth as meteorites." },
            { icon: "🏔️", text: "Rheasilvia's central peak is 22 km tall — more than twice the height of Mount Everest." },
            { icon: "🔬", text: "Vesta has a differentiated interior with an iron core, making it a surviving protoplanet from the solar system's formation." },
            { icon: "🚀", text: "Dawn spacecraft orbited Vesta for 14 months (2011-2012) before continuing to Ceres." }
        ]
    },
    {
        name: "Pallas",
        subtitle: "The Tilted Giant",
        classification: ["B-Type", "Main Belt", "3rd Largest"],
        shape: "irregular",
        color: "#707880",
        gradient: "radial-gradient(ellipse at 35% 35%, #909aa0, #707880 30%, #505860 55%, #303840 75%, #101820)",
        facts: [
            { icon: "📏", text: "Pallas is the third-largest asteroid at 512 km in diameter, slightly smaller than Vesta." },
            { icon: "🔄", text: "Pallas has an extreme orbital tilt of 34.8° — the highest of any known asteroid, making it hard to visit." },
            { icon: "❓", text: "Pallas remains one of the least-explored large asteroids because its tilted orbit makes spacecraft missions difficult." },
            { icon: "🌑", text: "Its surface is very dark, reflecting only about 10% of sunlight — darker than asphalt." },
            { icon: "💥", text: "Pallas has two large impact craters visible from Earth-based telescopes, each over 80 km wide." },
            { icon: "📅", text: "Discovered in 1802 by Heinrich Olbers, Pallas was the second asteroid ever found." }
        ]
    },
    {
        name: "Hygiea",
        subtitle: "The Dark Fourth",
        classification: ["C-Type", "Main Belt", "4th Largest"],
        shape: "spherical",
        color: "#404040",
        gradient: "radial-gradient(circle at 35% 35%, #606060, #404040 30%, #282828 55%, #181818 75%, #080808)",
        facts: [
            { icon: "📏", text: "Hygiea is the fourth-largest asteroid at 430 km diameter and may qualify as a dwarf planet due to its spherical shape." },
            { icon: "🌑", text: "Hygiea is extremely dark, with a surface as black as coal, reflecting only 5-7% of sunlight." },
            { icon: "👨‍👩‍👧‍👦", text: "Hygiea is the largest member of its own asteroid family — over 6,800 asteroids share similar orbits from an ancient collision." },
            { icon: "💥", text: "A massive impact 2 billion years ago completely shattered and reformed Hygiea, creating its family of fragments." },
            { icon: "🔭", text: "2019 observations revealed Hygiea is surprisingly spherical, reigniting debate about its dwarf planet status." },
            { icon: "📅", text: "Discovered in 1849 by Annibale de Gasparis and named after the Greek goddess of health." }
        ]
    },
    {
        name: "Eros",
        subtitle: "The Peanut Asteroid",
        classification: ["S-Type", "Near-Earth", "First Landed"],
        shape: "elongated",
        color: "#c8a080",
        gradient: "radial-gradient(ellipse 70% 100% at 35% 35%, #e0c0a0, #c8a080 30%, #a08060 55%, #705840 75%, #403020)",
        facts: [
            { icon: "🥜", text: "Eros is shaped like a peanut or potato, measuring 34 × 11 × 11 km — you could walk around it in a few hours." },
            { icon: "🏆", text: "In 2001, NEAR Shoemaker became the first spacecraft to orbit and land on an asteroid when it touched down on Eros." },
            { icon: "🌍", text: "Eros is a Near-Earth asteroid that occasionally comes within 22 million km of Earth." },
            { icon: "💰", text: "Eros contains more gold, platinum, and rare metals than have ever been mined in human history." },
            { icon: "🕳️", text: "Eros is covered in a thick layer of regolith (loose rock) and has a 5.5 km wide crater called Psyche." },
            { icon: "📅", text: "Discovered in 1898, Eros was the first known Near-Earth asteroid." }
        ]
    },
    {
        name: "Bennu",
        subtitle: "The Sample Return Target",
        classification: ["B-Type", "Near-Earth", "Potentially Hazardous"],
        shape: "diamond",
        color: "#383838",
        gradient: "radial-gradient(circle at 35% 35%, #585858, #383838 30%, #202020 55%, #101010 75%, #000000)",
        facts: [
            { icon: "🚀", text: "NASA's OSIRIS-REx collected samples from Bennu in 2020 and returned them to Earth in September 2023." },
            { icon: "💎", text: "Bennu is shaped like a spinning top or diamond, only 500 meters wide — about the size of the Empire State Building." },
            { icon: "⚠️", text: "Bennu has a 1-in-2,700 chance of impacting Earth between 2175-2199, making it one of the most hazardous known asteroids." },
            { icon: "🏛️", text: "Bennu is a pristine remnant from the early solar system, containing organic molecules and water-bearing minerals." },
            { icon: "🌋", text: "Bennu actively ejects particles from its surface — a surprising discovery that puzzled scientists." },
            { icon: "🔄", text: "Bennu rotates once every 4.3 hours and is slowly spinning faster due to uneven solar heating." }
        ]
    },
    {
        name: "Ryugu",
        subtitle: "The Diamond in the Dark",
        classification: ["C-Type", "Near-Earth", "Sample Returned"],
        shape: "diamond",
        color: "#282828",
        gradient: "radial-gradient(circle at 35% 35%, #484848, #282828 30%, #181818 55%, #080808 75%, #000000)",
        facts: [
            { icon: "🇯🇵", text: "Japan's Hayabusa2 spacecraft collected samples from Ryugu and returned them to Earth in December 2020." },
            { icon: "💎", text: "Ryugu is shaped like a spinning top, about 900 meters wide, and is one of the darkest objects in the solar system." },
            { icon: "💧", text: "Ryugu samples contained amino acids, the building blocks of life, supporting theories that asteroids seeded Earth with organic materials." },
            { icon: "🧱", text: "Ryugu is a 'rubble pile' — a loose collection of rocks held together by weak gravity, not a solid body." },
            { icon: "🌡️", text: "Surface temperatures on Ryugu range from -43°C at night to 100°C during the day." },
            { icon: "📅", text: "Ryugu is named after a magical underwater palace in Japanese folklore." }
        ]
    },
    {
        name: "Psyche",
        subtitle: "The Metal World",
        classification: ["M-Type", "Main Belt", "Metal-Rich"],
        shape: "irregular",
        color: "#a8a0b0",
        gradient: "radial-gradient(ellipse at 35% 35%, #c8c0d0, #a8a0b0 30%, #888090 55%, #585060 75%, #282030)",
        facts: [
            { icon: "🪙", text: "Psyche is made almost entirely of iron and nickel — it may be the exposed core of a destroyed protoplanet." },
            { icon: "💰", text: "If Psyche's metals could be mined, they'd be worth an estimated $10 quintillion — enough to crash the world economy." },
            { icon: "📏", text: "Psyche is 226 km wide, making it one of the ten most massive asteroids in the belt." },
            { icon: "🚀", text: "NASA's Psyche spacecraft launched in October 2023 and will arrive at the asteroid in 2029." },
            { icon: "🧲", text: "Psyche may have its own magnetic field, remnant from when it was a molten planetary core billions of years ago." },
            { icon: "❓", text: "Studying Psyche will give us our first direct look at a planetary core — something we can never see on Earth." }
        ]
    },
    {
        name: "Ida",
        subtitle: "The First with a Moon",
        classification: ["S-Type", "Main Belt", "Has Moon"],
        shape: "irregular",
        color: "#a09080",
        gradient: "radial-gradient(ellipse at 35% 35%, #c0b0a0, #a09080 30%, #807060 55%, #504030 75%, #302010)",
        facts: [
            { icon: "🌙", text: "Ida was the first asteroid discovered to have its own moon — tiny Dactyl, only 1.4 km wide." },
            { icon: "📏", text: "Ida is 56 km long and shaped like a croissant or crescent, heavily cratered from billions of years of impacts." },
            { icon: "🚀", text: "Galileo spacecraft flew past Ida in 1993 on its way to Jupiter, discovering Dactyl in the images." },
            { icon: "👨‍👩‍👧‍👦", text: "Ida is a member of the Koronis family — asteroids that formed from a larger body's destruction 2 billion years ago." },
            { icon: "🕳️", text: "Ida is covered in craters, with the largest (Lascaux) being 12 km wide." },
            { icon: "🔬", text: "Ida's composition is similar to ordinary chondrite meteorites that commonly fall to Earth." }
        ]
    },
    {
        name: "Itokawa",
        subtitle: "The Rubble Pile",
        classification: ["S-Type", "Near-Earth", "First Sample"],
        shape: "elongated",
        color: "#b8a890",
        gradient: "radial-gradient(ellipse 70% 100% at 35% 35%, #d8c8b0, #b8a890 30%, #988870 55%, #685840 75%, #382810)",
        facts: [
            { icon: "🏆", text: "Itokawa was the first asteroid from which samples were returned to Earth, by Japan's Hayabusa in 2010." },
            { icon: "🥔", text: "Itokawa is shaped like a sea otter or peanut, only 535 meters long — small enough to walk across in 20 minutes." },
            { icon: "🧱", text: "Itokawa is a 'rubble pile' of loose rocks barely held together by gravity — it has almost no solid interior." },
            { icon: "⚖️", text: "Itokawa's density is only 1.9 g/cm³, meaning about 40% of its interior is empty space between rocks." },
            { icon: "🔬", text: "Samples revealed Itokawa is 4.5 billion years old and was once part of a larger asteroid that was destroyed." },
            { icon: "📅", text: "Named after Hideo Itokawa, the father of Japanese rocketry." }
        ]
    }
];

// ===== ORBIT RADII - Well spaced =====
const BASE_ORBITS = {
    Mercury: 60,
    Venus: 95,
    Earth: 130,
    Mars: 175,
    Jupiter: 280,
    Saturn: 380,
    Uranus: 480,
    Neptune: 580,
    Pluto: 700
};

// Planet sizes - realistic relative sizes
const SIZE_SCALE = {
    Mercury: 6,
    Venus: 12,
    Earth: 13,
    Mars: 9,
    Jupiter: 42,
    Saturn: 36,
    Uranus: 20,
    Neptune: 19,
    Pluto: 5
};

// Orbital periods
const ORBITAL_PERIOD = {
    Mercury: 0.24, Venus: 0.62, Earth: 1, Mars: 1.88,
    Jupiter: 11.86, Saturn: 29.46, Uranus: 84.01, Neptune: 164.8,
    Pluto: 248
};

// ===== PLANET TEXTURES =====
function getPlanetCSS(name, size) {
    const s = size || 280;
    const textures = {
        Mercury: {
            bg: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.1) 0%, transparent 25%),
                 radial-gradient(circle at 70% 65%, rgba(0,0,0,0.2) 0%, transparent 20%),
                 radial-gradient(circle at 35% 35%, #c4c4c4, #a8a8a8 25%, #888 50%, #666 75%, #444)`,
            shadow: `0 0 ${s*0.15}px rgba(150,150,150,0.25), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.6)`
        },
        Venus: {
            bg: `radial-gradient(ellipse at 35% 30%, rgba(255,245,220,0.2) 0%, transparent 45%),
                 radial-gradient(circle at 35% 35%, #f5e8c8, #e0c890 20%, #cca850 45%, #b08830 65%, #8a6820)`,
            shadow: `0 0 ${s*0.2}px rgba(230,200,100,0.2), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.5)`
        },
        Earth: {
            bg: `radial-gradient(circle at 60% 30%, rgba(100,200,100,0.2) 0%, transparent 25%),
                 radial-gradient(circle at 30% 60%, rgba(50,150,50,0.15) 0%, transparent 20%),
                 radial-gradient(circle at 35% 35%, #7ec8f0, #4a9dd8 20%, #2d8a50 38%, #1a6835 52%, #1a5070 68%, #0d3050)`,
            shadow: `0 0 ${s*0.18}px rgba(80,150,230,0.3), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.5)`
        },
        Mars: {
            bg: `radial-gradient(circle at 50% 35%, rgba(220,140,80,0.15) 0%, transparent 25%),
                 radial-gradient(circle at 35% 35%, #e8b088, #d07848 22%, #b85428 48%, #8a3018 70%, #501808)`,
            shadow: `0 0 ${s*0.15}px rgba(200,80,30,0.3), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.55)`
        },
        Jupiter: {
            bg: `repeating-linear-gradient(178deg,
                    rgba(220,180,130,0.95) 0px, rgba(200,155,100,0.95) 10px,
                    rgba(180,130,80,0.9) 10px, rgba(160,105,65,0.9) 16px,
                    rgba(215,175,125,0.95) 16px, rgba(205,160,110,0.95) 26px,
                    rgba(195,120,65,0.85) 26px, rgba(175,95,50,0.85) 32px,
                    rgba(220,180,130,0.95) 32px),
                 radial-gradient(circle at 35% 35%, #f0d8a8, #d8b878 25%, #b89050 50%, #906830 72%, #604018)`,
            shadow: `0 0 ${s*0.25}px rgba(210,160,80,0.25), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.45)`
        },
        Saturn: {
            bg: `repeating-linear-gradient(177deg,
                    rgba(235,210,165,0.9) 0px, rgba(220,195,150,0.9) 12px,
                    rgba(210,185,140,0.85) 12px, rgba(200,175,130,0.85) 20px,
                    rgba(230,205,160,0.9) 20px, rgba(220,195,150,0.9) 32px),
                 radial-gradient(circle at 35% 35%, #f8ecc8, #e8d4a0 22%, #d4b870 48%, #c0a050 68%, #907830)`,
            shadow: `0 0 ${s*0.2}px rgba(220,190,100,0.22), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.45)`
        },
        Uranus: {
            bg: `radial-gradient(ellipse at 45% 48%, rgba(170,230,240,0.12) 0%, transparent 45%),
                 radial-gradient(circle at 35% 35%, #b8e8f0, #88c8d8 22%, #68b0c0 48%, #4898a8 68%, #307888)`,
            shadow: `0 0 ${s*0.2}px rgba(120,200,220,0.22), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.45)`
        },
        Neptune: {
            bg: `radial-gradient(ellipse at 48% 45%, rgba(90,130,210,0.15) 0%, transparent 40%),
                 radial-gradient(circle at 35% 35%, #6890d0, #4870b8 22%, #3058a0 48%, #204080 68%, #102860)`,
            shadow: `0 0 ${s*0.2}px rgba(60,100,180,0.28), inset -${s*0.15}px -${s*0.1}px ${s*0.25}px rgba(0,0,0,0.5)`
        },
        Pluto: {
            bg: `radial-gradient(circle at 35% 35%, #d8c8b8, #b8a898 25%, #988878 50%, #786858 75%, #584838)`,
            shadow: `0 0 ${s*0.15}px rgba(180,160,140,0.2), inset -${s*0.12}px -${s*0.08}px ${s*0.2}px rgba(0,0,0,0.5)`
        }
    };
    return textures[name] || { bg: '#888', shadow: '0 0 20px rgba(100,100,100,0.2)' };
}

function getGlowColor(name) {
    const glows = {
        Mercury: 'rgba(150,150,150,0.04)', Venus: 'rgba(230,200,100,0.05)',
        Earth: 'rgba(80,150,230,0.06)', Mars: 'rgba(200,80,30,0.05)',
        Jupiter: 'rgba(210,160,80,0.06)', Saturn: 'rgba(220,190,100,0.05)',
        Uranus: 'rgba(120,200,220,0.05)', Neptune: 'rgba(60,100,180,0.06)',
        Pluto: 'rgba(180,160,140,0.04)'
    };
    return glows[name] || 'rgba(100,150,255,0.04)';
}

// ===== ASTEROID BELT =====
function createAsteroidBelt(container, centerX, centerY) {
    const beltInner = 210;
    const beltOuter = 265;
    
    // Large asteroids (few, very visible)
    for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = beltInner + Math.random() * (beltOuter - beltInner);
        
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid asteroid-large';
        const size = Math.random() * 4 + 3;
        asteroid.style.width = size + 'px';
        asteroid.style.height = size * (0.7 + Math.random() * 0.3) + 'px';
        asteroid.style.borderRadius = '40%';
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        asteroid.style.left = x + 'px';
        asteroid.style.top = y + 'px';
        asteroid.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(asteroid);
    }
    
    // Medium asteroids
    for (let i = 0; i < 120; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = beltInner + Math.random() * (beltOuter - beltInner);
        
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid asteroid-medium';
        const size = Math.random() * 2.5 + 1.5;
        asteroid.style.width = size + 'px';
        asteroid.style.height = size + 'px';
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        asteroid.style.left = x + 'px';
        asteroid.style.top = y + 'px';
        container.appendChild(asteroid);
    }
    
    // Small asteroids (dust)
    for (let i = 0; i < 400; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = beltInner + Math.random() * (beltOuter - beltInner);
        
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid asteroid-small';
        const size = Math.random() * 1.2 + 0.4;
        asteroid.style.width = size + 'px';
        asteroid.style.height = size + 'px';
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        asteroid.style.left = x + 'px';
        asteroid.style.top = y + 'px';
        asteroid.style.opacity = (Math.random() * 0.5 + 0.3).toString();
        container.appendChild(asteroid);
    }
}

// ===== KUIPER BELT =====
function createKuiperBelt(container, centerX, centerY) {
    const beltInner = 620;
    const beltOuter = 1100;
    
    // Large Kuiper Belt Objects (like Makemake, Haumea, Eris, Quaoar, etc.)
    for (let i = 0; i < 60; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = beltInner + Math.random() * (beltOuter - beltInner);
        
        const obj = document.createElement('div');
        obj.className = 'kuiper-object kuiper-large';
        const size = Math.random() * 5 + 3;
        obj.style.width = size + 'px';
        obj.style.height = size * (0.7 + Math.random() * 0.3) + 'px';
        obj.style.borderRadius = '45%';
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        obj.style.left = x + 'px';
        obj.style.top = y + 'px';
        obj.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(obj);
    }
    
    // Medium objects
    for (let i = 0; i < 300; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = beltInner + Math.random() * (beltOuter - beltInner);
        
        const obj = document.createElement('div');
        obj.className = 'kuiper-object kuiper-medium';
        const size = Math.random() * 2.5 + 1.2;
        obj.style.width = size + 'px';
        obj.style.height = size + 'px';
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        obj.style.left = x + 'px';
        obj.style.top = y + 'px';
        container.appendChild(obj);
    }
    
    // Small icy bodies - dense field
    for (let i = 0; i < 1500; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = beltInner + Math.random() * (beltOuter - beltInner);
        
        const obj = document.createElement('div');
        obj.className = 'kuiper-object kuiper-small';
        const size = Math.random() * 1.3 + 0.4;
        obj.style.width = size + 'px';
        obj.style.height = size + 'px';
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        obj.style.left = x + 'px';
        obj.style.top = y + 'px';
        obj.style.opacity = (Math.random() * 0.5 + 0.25).toString();
        container.appendChild(obj);
    }
    
    // Scattered disc objects (beyond main belt, more sparse)
    for (let i = 0; i < 200; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = beltOuter + Math.random() * 300; // extends further out
        
        const obj = document.createElement('div');
        obj.className = 'kuiper-object kuiper-small';
        const size = Math.random() * 1 + 0.3;
        obj.style.width = size + 'px';
        obj.style.height = size + 'px';
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        obj.style.left = x + 'px';
        obj.style.top = y + 'px';
        obj.style.opacity = (Math.random() * 0.3 + 0.15).toString();
        container.appendChild(obj);
    }
}


// ===== BUILD SOLAR SYSTEM =====
let planetAngles = [];
let planetWrappers = [];
let animationId = null;
let centerX = 0, centerY = 0;

function buildSolarSystem() {
    const container = document.getElementById('system-container');
    const viewport = document.getElementById('system-viewport');
    
    centerX = viewport.offsetWidth / 2;
    centerY = viewport.offsetHeight / 2;

    // Create orbits
    PLANETS.forEach((planet) => {
        const orbitRadius = BASE_ORBITS[planet.name];
        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        orbit.style.width = orbitRadius * 2 + 'px';
        orbit.style.height = orbitRadius * 2 + 'px';
        orbit.style.left = centerX + 'px';
        orbit.style.top = centerY + 'px';
        container.appendChild(orbit);
    });

    // Asteroid belt
    createAsteroidBelt(container, centerX, centerY);
    
    // Kuiper Belt
    createKuiperBelt(container, centerX, centerY);

    // Sun
    const sun = document.getElementById('sun');
    sun.style.left = centerX + 'px';
    sun.style.top = centerY + 'px';
    
    if (!sun.hasAttribute('data-listener')) {
        sun.setAttribute('data-listener', 'true');
        sun.addEventListener('click', (e) => {
            if (didDrag) return;
            e.stopPropagation();
            openSunDetail();
        });
    }

    // Create planets
    planetWrappers = [];
    PLANETS.forEach((planet, index) => {
        if (planetAngles[index] === undefined) {
            planetAngles[index] = Math.random() * Math.PI * 2;
        }
        
        const size = SIZE_SCALE[planet.name];
        const orbitRadius = BASE_ORBITS[planet.name];

        const wrapper = document.createElement('div');
        wrapper.className = 'planet-wrapper';

        const planetEl = document.createElement('div');
        planetEl.className = 'planet';
        planetEl.style.width = size + 'px';
        planetEl.style.height = size + 'px';

        const tex = getPlanetCSS(planet.name, size);
        planetEl.style.background = tex.bg;
        planetEl.style.boxShadow = tex.shadow;

        // Saturn's rings
        if (planet.name === 'Saturn') {
            const ring = document.createElement('div');
            ring.className = 'saturn-ring';
            ring.style.width = size * 2.4 + 'px';
            ring.style.height = size * 2.4 + 'px';
            planetEl.appendChild(ring);
            const ring2 = document.createElement('div');
            ring2.className = 'saturn-ring-inner';
            ring2.style.width = size * 1.9 + 'px';
            ring2.style.height = size * 1.9 + 'px';
            planetEl.appendChild(ring2);
        }

        // Uranus's rings
        if (planet.name === 'Uranus') {
            const ring = document.createElement('div');
            ring.className = 'uranus-ring';
            ring.style.width = size * 2.1 + 'px';
            ring.style.height = size * 2.1 + 'px';
            planetEl.appendChild(ring);
        }

        planetEl.addEventListener('click', (e) => {
            if (didDrag) return;
            e.stopPropagation();
            openPlanetDetail(index);
        });

        const label = document.createElement('div');
        label.className = 'planet-label';
        label.textContent = planet.name.toUpperCase();
        label.style.top = (size / 2 + 10) + 'px';

        wrapper.appendChild(planetEl);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
        planetWrappers.push(wrapper);
    });

    if (!animationId) animateOrbits();
}

function rebuildSolarSystem() {
    const container = document.getElementById('system-container');
    const sun = document.getElementById('sun');
    container.innerHTML = '';
    container.appendChild(sun);
    
    planetWrappers = [];
    buildSolarSystem();
}

function animateOrbits() {
    function animate() {
        PLANETS.forEach((planet, index) => {
            const speed = 0.002 / ORBITAL_PERIOD[planet.name];
            planetAngles[index] += speed;
            
            const orbitRadius = BASE_ORBITS[planet.name];
            const x = centerX + Math.cos(planetAngles[index]) * orbitRadius;
            const y = centerY + Math.sin(planetAngles[index]) * orbitRadius;
            
            if (planetWrappers[index]) {
                planetWrappers[index].style.left = x + 'px';
                planetWrappers[index].style.top = y + 'px';
            }
        });
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

// ===== STATE =====
let currentPlanetIndex = 0;
let currentMoonIndex = 0;
let currentHistorySlide = 0;
let currentACHistorySlide = 0;
let viewingTarget = 'planet';

// ===== SUN DETAIL =====
function openSunDetail() {
    viewingTarget = 'sun';
    document.getElementById('solar-system').classList.add('hidden');
    document.getElementById('planet-detail').classList.remove('hidden');

    const detailStars = document.getElementById('detail-stars');
    detailStars.innerHTML = '';
    detailStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('detail-stars');

    const zoom = document.getElementById('planet-zoom');
    zoom.style.background = 'radial-gradient(circle at 38% 38%, #fffef0, #ffe855 12%, #ffcc00 28%, #ff9500 48%, #e06800 65%, #a04000 82%, #602800)';
    zoom.style.boxShadow = '0 0 50px 20px rgba(255,200,50,0.3), 0 0 100px 40px rgba(255,150,0,0.15), 0 0 200px 80px rgba(255,100,0,0.06), inset -35px -25px 70px rgba(0,0,0,0.15)';

    document.getElementById('planet-display-area').style.setProperty('--planet-glow', 'rgba(255,200,50,0.1)');

    const existingRings = zoom.querySelectorAll('.detail-ring');
    existingRings.forEach(r => r.remove());

    document.getElementById('planet-name-label').textContent = 'THE SUN';
    document.getElementById('info-title').textContent = SUN_DATA.name;
    document.getElementById('info-subtitle').textContent = SUN_DATA.subtitle;

    const classEl = document.getElementById('info-classification');
    classEl.innerHTML = '';
    SUN_DATA.classification.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'info-tag';
        t.textContent = tag;
        classEl.appendChild(t);
    });

    const factsList = document.getElementById('facts-list');
    factsList.innerHTML = '';
    SUN_DATA.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });

    document.getElementById('btn-show-moons').style.opacity = '0.3';
}


// ===== PLANET DETAIL =====
function openPlanetDetail(index) {
    viewingTarget = 'planet';
    const planet = PLANETS[index];
    currentPlanetIndex = index;

    document.getElementById('solar-system').classList.add('hidden');
    document.getElementById('planet-detail').classList.remove('hidden');

    const detailStars = document.getElementById('detail-stars');
    detailStars.innerHTML = '';
    detailStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('detail-stars');

    const zoom = document.getElementById('planet-zoom');
    const tex = getPlanetCSS(planet.name, 280);
    zoom.style.background = tex.bg;
    zoom.style.boxShadow = tex.shadow;

    document.getElementById('planet-display-area').style.setProperty('--planet-glow', getGlowColor(planet.name));

    const existingRings = zoom.querySelectorAll('.detail-ring');
    existingRings.forEach(r => r.remove());

    if (planet.name === 'Saturn') {
        const ring = document.createElement('div');
        ring.className = 'detail-ring';
        ring.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:480px;height:480px;border-radius:50%;border:6px solid rgba(210,185,140,0.25);box-shadow:0 0 20px rgba(210,185,140,0.1);pointer-events:none;z-index:4;';
        zoom.appendChild(ring);
        const ring2 = document.createElement('div');
        ring2.className = 'detail-ring';
        ring2.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;height:420px;border-radius:50%;border:14px solid rgba(210,185,140,0.15);pointer-events:none;z-index:4;';
        zoom.appendChild(ring2);
    }

    if (planet.name === 'Uranus') {
        const ring = document.createElement('div');
        ring.className = 'detail-ring';
        ring.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;height:420px;border-radius:50%;border:3px solid rgba(160,210,220,0.22);pointer-events:none;z-index:4;';
        zoom.appendChild(ring);
    }

    document.getElementById('planet-name-label').textContent = planet.name.toUpperCase();
    document.getElementById('info-title').textContent = planet.name;
    document.getElementById('info-subtitle').textContent = planet.subtitle;

    const classEl = document.getElementById('info-classification');
    classEl.innerHTML = '';
    const tags = getClassificationTags(planet.name);
    tags.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'info-tag';
        t.textContent = tag;
        classEl.appendChild(t);
    });

    const factsList = document.getElementById('facts-list');
    factsList.innerHTML = '';
    planet.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });

    document.getElementById('btn-show-moons').style.opacity = planet.moons.length === 0 ? '0.3' : '1';
}

function getClassificationTags(name) {
    const tags = {
        Mercury: ['Terrestrial', 'Inner Planet', 'No Moons'],
        Venus: ['Terrestrial', 'Inner Planet', 'No Moons'],
        Earth: ['Terrestrial', 'Inner Planet', 'Habitable'],
        Mars: ['Terrestrial', 'Inner Planet', '2 Moons'],
        Jupiter: ['Gas Giant', 'Outer Planet', '95+ Moons'],
        Saturn: ['Gas Giant', 'Outer Planet', '146+ Moons'],
        Uranus: ['Ice Giant', 'Outer Planet', '27+ Moons'],
        Neptune: ['Ice Giant', 'Outer Planet', '16+ Moons'],
        Pluto: ['Dwarf Planet', 'Kuiper Belt', '5 Moons']
    };
    return tags[name] || [];
}

// ===== NAVIGATION =====
document.getElementById('btn-back-system').addEventListener('click', () => {
    document.getElementById('planet-detail').classList.add('hidden');
    document.getElementById('solar-system').classList.remove('hidden');
});

// ===== MOONS =====
document.getElementById('btn-show-moons').addEventListener('click', () => {
    if (viewingTarget === 'sun') {
        document.getElementById('no-moons-text').textContent = 'The Sun is a star, not a planet. It has no natural satellites — instead, everything in the solar system orbits it.';
        document.getElementById('no-moons-modal').classList.remove('hidden');
        return;
    }
    const planet = PLANETS[currentPlanetIndex];
    if (planet.moons.length === 0) {
        document.getElementById('no-moons-text').textContent = `${planet.name} has no known natural satellites. It orbits the Sun in solitude.`;
        document.getElementById('no-moons-modal').classList.remove('hidden');
        return;
    }
    currentMoonIndex = 0;
    document.getElementById('planet-detail').classList.add('hidden');
    document.getElementById('moon-viewer').classList.remove('hidden');

    const moonStars = document.getElementById('moon-stars');
    moonStars.innerHTML = '';
    moonStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('moon-stars');
    showMoon();
});

document.getElementById('btn-close-modal').addEventListener('click', () => {
    document.getElementById('no-moons-modal').classList.add('hidden');
});

function showMoon() {
    const planet = PLANETS[currentPlanetIndex];
    const moon = planet.moons[currentMoonIndex];

    const zoom = document.getElementById('moon-zoom');
    zoom.style.background = moon.gradient;
    zoom.style.boxShadow = '0 0 40px rgba(200,210,230,0.08), 0 0 80px rgba(200,210,230,0.03), inset -28px -22px 55px rgba(0,0,0,0.55)';

    document.getElementById('moon-display-area').style.setProperty('--planet-glow', 'rgba(180,190,210,0.04)');
    document.getElementById('moon-name-label').textContent = moon.name.toUpperCase();
    document.getElementById('moon-info-title').textContent = moon.name;
    document.getElementById('moon-info-subtitle').textContent = moon.subtitle;

    const factsList = document.getElementById('moon-facts-list');
    factsList.innerHTML = '';
    moon.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });

    document.getElementById('moon-counter').textContent = `${currentMoonIndex + 1} / ${planet.moons.length}`;
    document.getElementById('btn-moon-prev').disabled = currentMoonIndex === 0;
    document.getElementById('btn-moon-next').disabled = currentMoonIndex === planet.moons.length - 1;
}

document.getElementById('btn-moon-prev').addEventListener('click', () => {
    if (currentMoonIndex > 0) { currentMoonIndex--; showMoon(); }
});
document.getElementById('btn-moon-next').addEventListener('click', () => {
    const planet = PLANETS[currentPlanetIndex];
    if (currentMoonIndex < planet.moons.length - 1) { currentMoonIndex++; showMoon(); }
});
document.getElementById('btn-exit-moons').addEventListener('click', () => {
    document.getElementById('moon-viewer').classList.add('hidden');
    document.getElementById('planet-detail').classList.remove('hidden');
});


// ===== HISTORY =====
document.getElementById('btn-see-history').addEventListener('click', () => {
    currentHistorySlide = 0;
    document.getElementById('planet-detail').classList.add('hidden');
    document.getElementById('history-viewer').classList.remove('hidden');

    const histStars = document.getElementById('history-stars');
    histStars.innerHTML = '';
    histStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('history-stars');
    showHistorySlide();
});

function showHistorySlide() {
    // Handle AC star history
    if (viewingTarget === 'ac-star') {
        const star = ALPHA_CENTAURI_STARS[currentACStarIndex];
        const slide = star.history[currentACHistorySlide];

        const icon = document.getElementById('history-planet-icon');
        icon.style.background = star.gradient;
        
        if (star.id === 'alpha-a') {
            icon.style.boxShadow = '0 0 30px rgba(255,210,80,0.4)';
        } else if (star.id === 'alpha-b') {
            icon.style.boxShadow = '0 0 25px rgba(255,160,60,0.4)';
        } else {
            icon.style.boxShadow = '0 0 20px rgba(255,80,50,0.4)';
        }

        document.getElementById('history-title').textContent = `History of ${star.name}`;
        document.getElementById('history-slide').innerHTML = `<div class="history-slide-heading">${slide.heading}</div><p>${slide.text}</p>`;
        document.getElementById('history-counter').textContent = `${currentACHistorySlide + 1} / ${star.history.length}`;
        document.getElementById('btn-history-prev').disabled = currentACHistorySlide === 0;
        document.getElementById('btn-history-next').disabled = currentACHistorySlide === star.history.length - 1;
        return;
    }

    const data = viewingTarget === 'sun' ? SUN_DATA : PLANETS[currentPlanetIndex];
    const slide = data.history[currentHistorySlide];

    const icon = document.getElementById('history-planet-icon');
    if (viewingTarget === 'sun') {
        icon.style.background = 'radial-gradient(circle at 38% 38%, #fffef0, #ffe855 15%, #ffcc00 35%, #ff9500 55%, #e06800 75%, #a04000)';
        icon.style.boxShadow = '0 0 30px rgba(255,200,50,0.35)';
    } else {
        const tex = getPlanetCSS(data.name, 60);
        icon.style.background = tex.bg;
        icon.style.boxShadow = `0 0 20px ${data.shadowColor || 'rgba(100,150,255,0.15)'}`;
    }

    document.getElementById('history-title').textContent = `History of ${data.name}`;
    document.getElementById('history-slide').innerHTML = `<div class="history-slide-heading">${slide.heading}</div><p>${slide.text}</p>`;
    document.getElementById('history-counter').textContent = `${currentHistorySlide + 1} / ${data.history.length}`;
    document.getElementById('btn-history-prev').disabled = currentHistorySlide === 0;
    document.getElementById('btn-history-next').disabled = currentHistorySlide === data.history.length - 1;
}

document.getElementById('btn-history-prev').addEventListener('click', () => {
    if (viewingTarget === 'ac-star') {
        if (currentACHistorySlide > 0) { currentACHistorySlide--; showHistorySlide(); }
    } else {
        if (currentHistorySlide > 0) { currentHistorySlide--; showHistorySlide(); }
    }
});
document.getElementById('btn-history-next').addEventListener('click', () => {
    if (viewingTarget === 'ac-star') {
        const star = ALPHA_CENTAURI_STARS[currentACStarIndex];
        if (currentACHistorySlide < star.history.length - 1) { currentACHistorySlide++; showHistorySlide(); }
    } else {
        const data = viewingTarget === 'sun' ? SUN_DATA : PLANETS[currentPlanetIndex];
        if (currentHistorySlide < data.history.length - 1) { currentHistorySlide++; showHistorySlide(); }
    }
});
document.getElementById('btn-exit-history').addEventListener('click', () => {
    document.getElementById('history-viewer').classList.add('hidden');
    if (viewingTarget === 'ac-star') {
        document.getElementById('ac-star-detail').classList.remove('hidden');
    } else {
        document.getElementById('planet-detail').classList.remove('hidden');
    }
});

// ===== KEYBOARD NAV =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!document.getElementById('no-moons-modal').classList.contains('hidden')) {
            document.getElementById('no-moons-modal').classList.add('hidden');
        } else if (!document.getElementById('trappist-planet-detail').classList.contains('hidden')) {
            document.getElementById('btn-back-trappist-system').click();
        } else if (!document.getElementById('trappist-system').classList.contains('hidden')) {
            document.getElementById('btn-back-landing-trappist').click();
        } else if (!document.getElementById('proxima-b-detail').classList.contains('hidden')) {
            document.getElementById('btn-back-from-proxima').click();
        } else if (!document.getElementById('ac-star-detail').classList.contains('hidden')) {
            document.getElementById('btn-back-ac-system').click();
        } else if (!document.getElementById('asteroid-viewer').classList.contains('hidden')) {
            document.getElementById('btn-exit-asteroids').click();
        } else if (!document.getElementById('moon-viewer').classList.contains('hidden')) {
            document.getElementById('btn-exit-moons').click();
        } else if (!document.getElementById('history-viewer').classList.contains('hidden')) {
            document.getElementById('btn-exit-history').click();
        } else if (!document.getElementById('planet-detail').classList.contains('hidden')) {
            document.getElementById('btn-back-system').click();
        } else if (!document.getElementById('alpha-centauri-system').classList.contains('hidden')) {
            document.getElementById('btn-back-landing-ac').click();
        } else if (!document.getElementById('solar-system').classList.contains('hidden')) {
            document.getElementById('btn-back-landing-solar').click();
        }
    }
    if (e.key === 'ArrowLeft') {
        if (!document.getElementById('trappist-planet-detail').classList.contains('hidden') && viewingTarget === 'trappist-planet') {
            document.getElementById('btn-trappist-prev').click();
        } else if (!document.getElementById('asteroid-viewer').classList.contains('hidden')) {
            document.getElementById('btn-asteroid-prev').click();
        } else if (!document.getElementById('moon-viewer').classList.contains('hidden')) {
            document.getElementById('btn-moon-prev').click();
        } else if (!document.getElementById('history-viewer').classList.contains('hidden')) {
            document.getElementById('btn-history-prev').click();
        }
    }
    if (e.key === 'ArrowRight') {
        if (!document.getElementById('trappist-planet-detail').classList.contains('hidden') && viewingTarget === 'trappist-planet') {
            document.getElementById('btn-trappist-next').click();
        } else if (!document.getElementById('asteroid-viewer').classList.contains('hidden')) {
            document.getElementById('btn-asteroid-next').click();
        } else if (!document.getElementById('moon-viewer').classList.contains('hidden')) {
            document.getElementById('btn-moon-next').click();
        } else if (!document.getElementById('history-viewer').classList.contains('hidden')) {
            document.getElementById('btn-history-next').click();
        }
    }
});

// ===== INIT =====
createStars();
createNebulae();
buildSolarSystem();
initPanZoom();
initAsteroidExplorer();
updateClock();
setInterval(updateClock, 1000);

// Show landing screen by default (solar system is hidden initially)
document.getElementById('solar-system').classList.add('hidden');
document.getElementById('landing-screen').classList.remove('hidden');

// Handle resize
window.addEventListener('resize', () => {
    rebuildSolarSystem();
});

// ===== ASTEROID EXPLORER =====
let currentAsteroidIndex = 0;

function initAsteroidExplorer() {
    document.getElementById('btn-explore-asteroids').addEventListener('click', () => {
        currentAsteroidIndex = 0;
        document.getElementById('solar-system').classList.add('hidden');
        document.getElementById('asteroid-viewer').classList.remove('hidden');
        
        const asteroidStars = document.getElementById('asteroid-stars');
        asteroidStars.innerHTML = '';
        asteroidStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
        createStars('asteroid-stars');
        
        showAsteroid();
    });
    
    document.getElementById('btn-exit-asteroids').addEventListener('click', () => {
        document.getElementById('asteroid-viewer').classList.add('hidden');
        document.getElementById('solar-system').classList.remove('hidden');
    });
    
    document.getElementById('btn-asteroid-prev').addEventListener('click', () => {
        if (currentAsteroidIndex > 0) {
            currentAsteroidIndex--;
            showAsteroid();
        }
    });
    
    document.getElementById('btn-asteroid-next').addEventListener('click', () => {
        if (currentAsteroidIndex < ASTEROIDS.length - 1) {
            currentAsteroidIndex++;
            showAsteroid();
        }
    });
}

function showAsteroid() {
    const asteroid = ASTEROIDS[currentAsteroidIndex];
    
    const zoom = document.getElementById('asteroid-zoom');
    zoom.style.background = asteroid.gradient;
    
    // Reset transform first
    zoom.style.transform = 'none';
    
    // Shape the asteroid based on its type
    switch (asteroid.shape) {
        case 'spherical':
            zoom.style.borderRadius = '50%';
            zoom.style.width = '200px';
            zoom.style.height = '200px';
            break;
        case 'elongated':
            zoom.style.borderRadius = '45%';
            zoom.style.width = '240px';
            zoom.style.height = '140px';
            break;
        case 'diamond':
            zoom.style.borderRadius = '15%';
            zoom.style.width = '180px';
            zoom.style.height = '200px';
            zoom.style.transform = 'rotate(45deg)';
            break;
        case 'irregular':
        default:
            zoom.style.borderRadius = '40% 50% 45% 55%';
            zoom.style.width = '220px';
            zoom.style.height = '180px';
            zoom.style.transform = 'rotate(-5deg)';
            break;
    }
    
    zoom.style.boxShadow = `0 0 30px rgba(150,140,130,0.15), inset -25px -20px 50px rgba(0,0,0,0.5)`;
    
    document.getElementById('asteroid-display-area').style.setProperty('--planet-glow', 'rgba(150,140,130,0.05)');
    document.getElementById('asteroid-name-label').textContent = asteroid.name.toUpperCase();
    document.getElementById('asteroid-info-title').textContent = asteroid.name;
    document.getElementById('asteroid-info-subtitle').textContent = asteroid.subtitle;
    
    const classEl = document.getElementById('asteroid-classification');
    classEl.innerHTML = '';
    asteroid.classification.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'info-tag';
        t.textContent = tag;
        classEl.appendChild(t);
    });
    
    const factsList = document.getElementById('asteroid-facts-list');
    factsList.innerHTML = '';
    asteroid.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });
    
    document.getElementById('asteroid-counter').textContent = `${currentAsteroidIndex + 1} / ${ASTEROIDS.length}`;
    document.getElementById('btn-asteroid-prev').disabled = currentAsteroidIndex === 0;
    document.getElementById('btn-asteroid-next').disabled = currentAsteroidIndex === ASTEROIDS.length - 1;
}


// ===== LANDING SCREEN =====
function initLandingScreen() {
    // Create stars for landing screen
    const landingStars = document.getElementById('landing-stars');
    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        const isBright = Math.random() > 0.92;
        star.className = isBright ? 'star star-bright' : 'star';
        const size = isBright ? (Math.random() * 2 + 1) : (Math.random() * 1.2 + 0.3);
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--twinkle-duration', (Math.random() * 5 + 2) + 's');
        star.style.setProperty('--twinkle-min', (Math.random() * 0.15 + 0.05).toString());
        star.style.setProperty('--twinkle-max', (Math.random() * 0.4 + 0.55).toString());
        star.style.animationDelay = (Math.random() * 8) + 's';
        landingStars.appendChild(star);
    }

    // Solar System card click
    document.getElementById('card-solar-system').addEventListener('click', () => {
        startWormholeTransition('solar-system', 'OUR SOLAR SYSTEM');
    });

    // Alpha Centauri card click
    document.getElementById('card-alpha-centauri').addEventListener('click', () => {
        startWormholeTransition('alpha-centauri', 'ALPHA CENTAURI');
    });

    // Back to landing from Solar System
    document.getElementById('btn-back-landing-solar').addEventListener('click', () => {
        document.getElementById('solar-system').classList.add('hidden');
        document.getElementById('landing-screen').classList.remove('hidden');
        // Reset pan/zoom state
        if (momentumId) cancelAnimationFrame(momentumId);
        panX = 0; panY = 0; zoomLevel = 1;
        velocityX = 0; velocityY = 0;
        applyTransform();
    });

    // Back to landing from Alpha Centauri
    document.getElementById('btn-back-landing-ac').addEventListener('click', () => {
        document.getElementById('alpha-centauri-system').classList.add('hidden');
        document.getElementById('landing-screen').classList.remove('hidden');
        // Reset AC pan/zoom state
        if (acMomentumId) cancelAnimationFrame(acMomentumId);
        acPanX = 0; acPanY = 0; acZoomLevel = 1;
        acVelocityX = 0; acVelocityY = 0;
        applyACTransform();
    });
}

// ===== QUANTUM REALM TRANSITION =====
let quantumParticleInterval = null;
let shuttleAnimationId = null;

function startWormholeTransition(destination, destinationName) {
    // Cancel any existing animation
    if (shuttleAnimationId) {
        cancelAnimationFrame(shuttleAnimationId);
        shuttleAnimationId = null;
    }
    if (quantumParticleInterval) {
        clearInterval(quantumParticleInterval);
        quantumParticleInterval = null;
    }
    
    const wormhole = document.getElementById('wormhole-transition');
    const shuttleApproach = document.getElementById('shuttle-approach');
    const quantumRealm = document.getElementById('quantum-realm');
    const quantumText = document.getElementById('quantum-text');
    const shuttle = shuttleApproach.querySelector('.shuttle-craft');
    
    // Get the clicked card's position
    let cardId;
    if (destination === 'solar-system') {
        cardId = 'card-solar-system';
    } else if (destination === 'alpha-centauri') {
        cardId = 'card-alpha-centauri';
    } else if (destination === 'trappist') {
        cardId = 'card-trappist';
    }
    const card = document.getElementById(cardId);
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    // Highlight the target card
    card.classList.add('shuttle-target');
    
    // Show wormhole container (but keep quantum realm hidden)
    wormhole.classList.remove('hidden');
    shuttleApproach.classList.remove('hidden');
    quantumRealm.classList.add('hidden');
    
    // Reset shuttle approach layer z-index
    shuttleApproach.style.zIndex = '';
    
    // Remove any leftover quantum glow from previous transitions
    shuttle.classList.remove('quantum-glow');
    
    // Add approach glow effect
    shuttle.classList.add('approaching');
    
    // Reset quantum realm
    quantumRealm.classList.remove('active');
    quantumText.classList.remove('visible');
    quantumText.textContent = 'INITIATING WARP DRIVE';
    
    // Clear any existing particles
    const existingParticles = quantumRealm.querySelectorAll('.q-particle');
    existingParticles.forEach(p => p.remove());
    
    // ===== PHASE 1: Shuttle appears and flies INTO the card =====
    // Start from below the screen, centered
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight + 120;
    let currentX = startX;
    let currentY = startY;
    let currentScale = 1;
    let currentRotation = 0;
    
    shuttle.style.left = currentX + 'px';
    shuttle.style.top = currentY + 'px';
    shuttle.style.transform = `translate(-50%, -50%) scale(${currentScale}) rotate(${currentRotation}deg)`;
    shuttle.style.opacity = '1';
    
    const phase1Duration = 2000; // 2 seconds for shuttle to reach card
    const phase1Start = Date.now();
    
    function animateShuttleToCard() {
        const elapsed = Date.now() - phase1Start;
        const progress = Math.min(elapsed / phase1Duration, 1);
        
        // Easing functions
        const easeOutQuad = 1 - Math.pow(1 - progress, 2);
        const easeInCubic = progress * progress * progress;
        
        // Fly directly toward the card center
        currentX = startX + (cardCenterX - startX) * easeOutQuad;
        currentY = startY + (cardCenterY - startY) * easeOutQuad;
        
        // Scale DOWN as it flies INTO the card (getting smaller = going into the distance/card)
        if (progress < 0.6) {
            currentScale = 1 - (progress * 0.3); // Slight shrink
        } else {
            // Rapidly shrink as it enters the card
            const enterProgress = (progress - 0.6) / 0.4;
            currentScale = 0.7 - (enterProgress * 0.65);
        }
        currentScale = Math.max(0.05, currentScale);
        
        // Point toward the card
        const angle = Math.atan2(cardCenterY - currentY, cardCenterX - currentX) * 180 / Math.PI + 90;
        currentRotation = angle;
        
        shuttle.style.left = currentX + 'px';
        shuttle.style.top = currentY + 'px';
        shuttle.style.transform = `translate(-50%, -50%) scale(${currentScale}) rotate(${currentRotation}deg)`;
        
        // Fade out as it enters the card
        if (progress > 0.75) {
            shuttle.style.opacity = (1 - (progress - 0.75) / 0.25).toString();
        }
        
        if (progress < 1) {
            shuttleAnimationId = requestAnimationFrame(animateShuttleToCard);
        } else {
            // Phase 1 complete - start Phase 2
            startQuantumRealmPhase(destination, destinationName, card);
        }
    }
    
    shuttleAnimationId = requestAnimationFrame(animateShuttleToCard);
}

function startQuantumRealmPhase(destination, destinationName, card) {
    const wormhole = document.getElementById('wormhole-transition');
    const shuttleApproach = document.getElementById('shuttle-approach');
    const quantumRealm = document.getElementById('quantum-realm');
    const quantumText = document.getElementById('quantum-text');
    const quantumFlash = quantumRealm.querySelector('.quantum-flash');
    const particlesContainer = quantumRealm.querySelector('.quantum-particles');
    const shuttle = shuttleApproach.querySelector('.shuttle-craft');
    const warpSpeed = document.getElementById('warp-speed');
    const warpDistance = document.getElementById('warp-distance');
    
    // Determine distance based on destination
    let totalDistance;
    if (destination === 'alpha-centauri') {
        totalDistance = 4.37; // light-years
    } else if (destination === 'trappist') {
        totalDistance = 40.7; // light-years
    } else {
        totalDistance = 0; // solar system
    }
    
    // NOW hide landing screen and show black background (after shuttle has entered the card)
    document.getElementById('landing-screen').classList.add('hidden');
    wormhole.classList.add('warp-active');
    card.classList.remove('shuttle-target');
    
    // Remove approach glow, add quantum glow
    shuttle.classList.remove('approaching');
    
    // Move shuttle to center and reset for quantum travel
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    shuttle.style.left = centerX + 'px';
    shuttle.style.top = centerY + 'px';
    shuttle.style.opacity = '1';
    shuttle.style.transform = 'translate(-50%, -50%) scale(0.8)';
    
    // Keep shuttle approach layer visible but move it above quantum realm
    shuttleApproach.style.zIndex = '100';
    
    // Add quantum glow effect to shuttle
    shuttle.classList.add('quantum-glow');
    
    // Show quantum realm
    quantumRealm.classList.remove('hidden');
    
    // Small delay then activate the swirling effect
    setTimeout(() => {
        quantumRealm.classList.add('active');
    }, 100);
    
    // Show text
    setTimeout(() => {
        quantumText.classList.add('visible');
    }, 500);
    
    // Show warp speed indicator with animation
    setTimeout(() => {
        warpSpeed.classList.add('visible');
        animateWarpSpeed(warpSpeed);
    }, 800);
    
    // Show distance indicator with countdown
    setTimeout(() => {
        warpDistance.classList.add('visible');
        animateWarpDistance(warpDistance, totalDistance, destination);
    }, 1000);
    
    // Start star streak particles (warp speed effect)
    quantumParticleInterval = setInterval(() => {
        createQuantumParticle(particlesContainer);
        createQuantumParticle(particlesContainer); // Double the streaks
    }, 25);
    
    // Animate shuttle flying through quantum realm
    animateShuttleThroughQuantum(shuttle);
    
    // Text phases during warp travel
    setTimeout(() => {
        quantumText.textContent = 'WARP SPEED ENGAGED';
    }, 1200);
    
    setTimeout(() => {
        quantumText.textContent = 'DESTINATION: ' + destinationName;
    }, 2500);
    
    setTimeout(() => {
        quantumText.textContent = 'DECELERATING...';
    }, 3800);
    
    // Flash and exit at 4.5 seconds (total 6.5s with phase 1)
    setTimeout(() => {
        clearInterval(quantumParticleInterval);
        quantumFlash.style.animation = 'quantum-exit-flash 0.8s ease-out forwards';
    }, 4500);
    
    // Complete transition at 5 seconds (total 7s with phase 1)
    setTimeout(() => {
        wormhole.classList.add('hidden');
        wormhole.classList.remove('warp-active'); // Remove black background for next transition
        quantumRealm.classList.remove('active');
        quantumText.classList.remove('visible');
        warpSpeed.classList.remove('visible');
        quantumFlash.style.animation = '';
        
        // Reset shuttle approach layer
        shuttleApproach.classList.add('hidden');
        shuttleApproach.style.zIndex = '';
        shuttle.style.transform = '';
        shuttle.style.opacity = '';
        shuttle.classList.remove('quantum-glow');
        shuttle.classList.remove('approaching');
        
        // Hide distance indicator
        const warpDistanceEl = document.getElementById('warp-distance');
        if (warpDistanceEl) warpDistanceEl.classList.remove('visible');
        
        // Clean up particles
        const particles = particlesContainer.querySelectorAll('.q-particle');
        particles.forEach(p => p.remove());
        
        // Show destination
        if (destination === 'solar-system') {
            document.getElementById('solar-system').classList.remove('hidden');
        } else if (destination === 'alpha-centauri') {
            document.getElementById('alpha-centauri-system').classList.remove('hidden');
            buildAlphaCentauriSystem();
        } else if (destination === 'trappist') {
            document.getElementById('trappist-system').classList.remove('hidden');
            buildTrappistSystem();
        }
    }, 5000);
}

// Animate warp distance countdown
function animateWarpDistance(element, totalDistance, destination) {
    const duration = 3800; // Slightly longer than warp speed animation
    const startTime = Date.now();
    
    // For solar system (0 distance), show AU instead
    const isSolarSystem = destination === 'solar-system';
    const displayDistance = isSolarSystem ? 30 : totalDistance; // 30 AU for solar system (Neptune distance)
    const unit = isSolarSystem ? 'AU' : 'LIGHT-YEARS';
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out - starts fast, slows down at end
        const easeOut = 1 - Math.pow(1 - progress, 2);
        
        // Calculate remaining distance
        let remaining = displayDistance * (1 - easeOut);
        
        // Format the display
        let displayText;
        if (remaining < 0.01) {
            displayText = 'ARRIVING AT DESTINATION';
        } else if (isSolarSystem) {
            // Show in AU for solar system
            displayText = `${remaining.toFixed(1)} ${unit} REMAINING`;
        } else {
            // Show in light-years for Alpha Centauri
            if (remaining >= 1) {
                displayText = `${remaining.toFixed(2)} ${unit} REMAINING`;
            } else {
                // Convert to trillion km when under 1 light-year
                const trillionKm = remaining * 9.461; // 1 light-year = 9.461 trillion km
                displayText = `${trillionKm.toFixed(2)} TRILLION KM REMAINING`;
            }
        }
        
        element.textContent = displayText;
        
        if (progress < 1 && element.classList.contains('visible')) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Animate warp speed indicator
function animateWarpSpeed(element) {
    let speed = 1.0;
    const maxSpeed = 9.9;
    const duration = 3500;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (progress < 0.7) {
            // Accelerating
            speed = 1.0 + (progress / 0.7) * (maxSpeed - 1.0);
        } else {
            // Cruising at max
            speed = maxSpeed;
        }
        
        element.textContent = `WARP ${speed.toFixed(1)}`;
        
        if (progress < 1 && element.classList.contains('visible')) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Animate shuttle flying through warp space
function animateShuttleThroughQuantum(shuttle) {
    const duration = 4500; // Match the warp duration
    const startTime = Date.now();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
            // Final state
            shuttle.style.transform = 'translate(-50%, -50%) scale(2.5)';
            shuttle.style.opacity = '0';
            return;
        }
        
        const time = elapsed / 1000;
        
        // Subtle vibration (like engine rumble)
        const vibeX = Math.sin(time * 25) * 2;
        const vibeY = Math.cos(time * 30) * 1.5;
        
        // Very slight drift
        const driftX = Math.sin(time * 0.8) * 5;
        const driftY = Math.cos(time * 0.6) * 3;
        
        // Scale progression - steady then accelerate at end
        let scale;
        let opacity = 1;
        
        if (progress < 0.75) {
            // Steady cruising phase
            scale = 0.8 + (progress * 0.15);
        } else {
            // Deceleration/arrival - ship appears to come toward viewer
            const exitProgress = (progress - 0.75) / 0.25;
            scale = 0.92 + (exitProgress * 1.8);
            opacity = 1 - (exitProgress * 0.9);
        }
        
        const x = centerX + vibeX + driftX;
        const y = centerY + vibeY + driftY - (progress * 20);
        
        shuttle.style.left = x + 'px';
        shuttle.style.top = y + 'px';
        shuttle.style.transform = `translate(-50%, -50%) scale(${scale})`;
        shuttle.style.opacity = opacity.toString();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function createQuantumParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'q-particle';
    
    // Star streaks come from center and fly outward
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Random angle for the streak direction
    const angle = Math.random() * Math.PI * 2;
    
    // Start position - slightly offset from center
    const startOffset = 20 + Math.random() * 30;
    const startX = centerX + Math.cos(angle) * startOffset;
    const startY = centerY + Math.sin(angle) * startOffset;
    
    // Distance to travel
    const distance = 400 + Math.random() * 600;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    
    // Streak dimensions - long and thin
    const length = 30 + Math.random() * 80;
    const width = 1 + Math.random() * 2;
    
    // Slight blue-white color variation
    const brightness = 180 + Math.floor(Math.random() * 75);
    const blueShift = 200 + Math.floor(Math.random() * 55);
    
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    particle.style.width = length + 'px';
    particle.style.height = width + 'px';
    particle.style.background = `linear-gradient(90deg, transparent 0%, rgba(${brightness}, ${brightness + 20}, ${blueShift}, 0.9) 30%, rgba(255, 255, 255, 1) 50%, rgba(${brightness}, ${brightness + 20}, ${blueShift}, 0.9) 70%, transparent 100%)`;
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = `0 0 ${width * 2}px rgba(${brightness}, ${brightness + 20}, ${blueShift}, 0.5)`;
    
    // Rotate to point in direction of travel
    const rotationDeg = (angle * 180 / Math.PI);
    particle.style.transform = `rotate(${rotationDeg}deg)`;
    particle.style.transformOrigin = 'center center';
    
    particle.style.setProperty('--dx', dx + 'px');
    
    const duration = 0.3 + Math.random() * 0.4;
    particle.style.animationDuration = duration + 's';
    
    container.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// ===== ALPHA CENTAURI SYSTEM =====
let acPanX = 0, acPanY = 0, acZoomLevel = 1;
let acIsDragging = false, acDragStartX = 0, acDragStartY = 0, acPanStartX = 0, acPanStartY = 0;
let acVelocityX = 0, acVelocityY = 0;
let acLastMoveX = 0, acLastMoveY = 0, acLastMoveTime = 0;
let acDidDrag = false;
let acMomentumId = null;
let acCenterX = 0, acCenterY = 0;
let acBuilt = false;

function applyACTransform() {
    const container = document.getElementById('ac-system-container');
    container.style.transform = `translate(${acPanX}px, ${acPanY}px) scale(${acZoomLevel})`;
}

function startACMomentum() {
    if (acMomentumId) cancelAnimationFrame(acMomentumId);
    
    function animate() {
        if (Math.abs(acVelocityX) < 0.1 && Math.abs(acVelocityY) < 0.1) {
            acVelocityX = 0; acVelocityY = 0;
            return;
        }
        acPanX += acVelocityX;
        acPanY += acVelocityY;
        acVelocityX *= FRICTION;
        acVelocityY *= FRICTION;
        applyACTransform();
        acMomentumId = requestAnimationFrame(animate);
    }
    animate();
}

function initACPanZoom() {
    const viewport = document.getElementById('ac-system-viewport');

    viewport.addEventListener('mousedown', (e) => {
        if (acMomentumId) cancelAnimationFrame(acMomentumId);
        acIsDragging = true;
        acDidDrag = false;
        acDragStartX = e.clientX;
        acDragStartY = e.clientY;
        acPanStartX = acPanX;
        acPanStartY = acPanY;
        acLastMoveX = e.clientX;
        acLastMoveY = e.clientY;
        acLastMoveTime = Date.now();
        acVelocityX = 0; acVelocityY = 0;
        viewport.classList.add('dragging');
    });

    window.addEventListener('mousemove', (e) => {
        if (!acIsDragging) return;
        const dx = e.clientX - acDragStartX;
        const dy = e.clientY - acDragStartY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) acDidDrag = true;
        
        acPanX = acPanStartX + dx;
        acPanY = acPanStartY + dy;
        
        const now = Date.now();
        const dt = now - acLastMoveTime;
        if (dt > 0) {
            acVelocityX = (e.clientX - acLastMoveX) * VELOCITY_SCALE;
            acVelocityY = (e.clientY - acLastMoveY) * VELOCITY_SCALE;
        }
        acLastMoveX = e.clientX;
        acLastMoveY = e.clientY;
        acLastMoveTime = now;
        
        applyACTransform();
    });

    window.addEventListener('mouseup', () => {
        if (acIsDragging && acDidDrag) startACMomentum();
        acIsDragging = false;
        const viewport = document.getElementById('ac-system-viewport');
        if (viewport) viewport.classList.remove('dragging');
    });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = viewport.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        
        const oldZoom = acZoomLevel;
        const delta = e.deltaY > 0 ? 0.9 : 1.12;
        acZoomLevel = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, acZoomLevel * delta));
        
        const zoomRatio = acZoomLevel / oldZoom;
        acPanX = mouseX - (mouseX - acPanX) * zoomRatio;
        acPanY = mouseY - (mouseY - acPanY) * zoomRatio;
        
        applyACTransform();
        const hint = document.getElementById('ac-pan-hint');
        if (hint) hint.style.opacity = '0';
    }, { passive: false });

    // Zoom buttons
    document.getElementById('ac-zoom-in').addEventListener('click', () => {
        acZoomLevel = Math.min(MAX_ZOOM, acZoomLevel * 1.3);
        applyACTransform();
    });
    document.getElementById('ac-zoom-out').addEventListener('click', () => {
        acZoomLevel = Math.max(MIN_ZOOM, acZoomLevel * 0.7);
        applyACTransform();
    });
    document.getElementById('ac-zoom-reset').addEventListener('click', () => {
        if (acMomentumId) cancelAnimationFrame(acMomentumId);
        acPanX = 0; acPanY = 0; acZoomLevel = 1;
        acVelocityX = 0; acVelocityY = 0;
        applyACTransform();
    });
}

function buildAlphaCentauriSystem() {
    if (acBuilt) return;
    acBuilt = true;

    const container = document.getElementById('ac-system-container');
    const viewport = document.getElementById('ac-system-viewport');
    
    acCenterX = viewport.offsetWidth / 2;
    acCenterY = viewport.offsetHeight / 2;

    // Create stars background for AC system
    const acStarsContainer = document.getElementById('ac-stars-container');
    for (let i = 0; i < 600; i++) {
        const star = document.createElement('div');
        const isBright = Math.random() > 0.94;
        star.className = isBright ? 'star star-bright' : 'star';
        const size = isBright ? (Math.random() * 2.5 + 1.5) : (Math.random() * 1.5 + 0.3);
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--twinkle-duration', (Math.random() * 5 + 2) + 's');
        star.style.setProperty('--twinkle-min', (Math.random() * 0.15 + 0.05).toString());
        star.style.setProperty('--twinkle-max', (Math.random() * 0.4 + 0.55).toString());
        star.style.animationDelay = (Math.random() * 8) + 's';
        acStarsContainer.appendChild(star);
    }

    // Binary orbit for A and B (elliptical)
    const binaryOrbit = document.createElement('div');
    binaryOrbit.className = 'ac-orbit ac-orbit-ab';
    binaryOrbit.style.width = '300px';
    binaryOrbit.style.height = '180px';
    binaryOrbit.style.left = acCenterX + 'px';
    binaryOrbit.style.top = acCenterY + 'px';
    binaryOrbit.style.transform = 'translate(-50%, -50%) rotate(-15deg)';
    container.appendChild(binaryOrbit);

    // Position Alpha Centauri A (center-left of binary)
    const starA = document.getElementById('star-alpha-a');
    starA.style.left = (acCenterX - 60) + 'px';
    starA.style.top = acCenterY + 'px';
    
    // Add label for A
    const labelA = document.createElement('div');
    labelA.className = 'ac-star-label';
    labelA.textContent = 'ALPHA CENTAURI A';
    labelA.style.left = (acCenterX - 60) + 'px';
    labelA.style.top = (acCenterY + 65) + 'px';
    container.appendChild(labelA);

    starA.addEventListener('click', (e) => {
        if (acDidDrag) return;
        e.stopPropagation();
        openACStarDetail(0);
    });
    starA.addEventListener('mouseenter', () => labelA.classList.add('visible'));
    starA.addEventListener('mouseleave', () => labelA.classList.remove('visible'));

    // Position Alpha Centauri B (center-right of binary)
    const starB = document.getElementById('star-alpha-b');
    starB.style.left = (acCenterX + 80) + 'px';
    starB.style.top = (acCenterY - 30) + 'px';
    
    // Add label for B
    const labelB = document.createElement('div');
    labelB.className = 'ac-star-label';
    labelB.textContent = 'ALPHA CENTAURI B';
    labelB.style.left = (acCenterX + 80) + 'px';
    labelB.style.top = (acCenterY + 30) + 'px';
    container.appendChild(labelB);

    starB.addEventListener('click', (e) => {
        if (acDidDrag) return;
        e.stopPropagation();
        openACStarDetail(1);
    });
    starB.addEventListener('mouseenter', () => labelB.classList.add('visible'));
    starB.addEventListener('mouseleave', () => labelB.classList.remove('visible'));

    // Proxima Centauri orbit (very distant)
    const proximaOrbitRadius = 400;
    const proximaOrbit = document.createElement('div');
    proximaOrbit.className = 'ac-orbit';
    proximaOrbit.style.width = (proximaOrbitRadius * 2) + 'px';
    proximaOrbit.style.height = (proximaOrbitRadius * 2) + 'px';
    proximaOrbit.style.left = acCenterX + 'px';
    proximaOrbit.style.top = acCenterY + 'px';
    proximaOrbit.style.borderStyle = 'dotted';
    proximaOrbit.style.borderColor = 'rgba(255, 80, 50, 0.08)';
    container.appendChild(proximaOrbit);

    // Position Proxima Centauri
    const starProxima = document.getElementById('star-proxima');
    const proximaAngle = Math.PI * 0.7; // Position at angle
    const proximaX = acCenterX + Math.cos(proximaAngle) * proximaOrbitRadius;
    const proximaY = acCenterY + Math.sin(proximaAngle) * proximaOrbitRadius;
    starProxima.style.left = proximaX + 'px';
    starProxima.style.top = proximaY + 'px';
    
    // Add label for Proxima
    const labelProxima = document.createElement('div');
    labelProxima.className = 'ac-star-label';
    labelProxima.textContent = 'PROXIMA CENTAURI';
    labelProxima.style.left = proximaX + 'px';
    labelProxima.style.top = (proximaY + 30) + 'px';
    labelProxima.style.color = 'rgba(255, 120, 100, 0.4)';
    container.appendChild(labelProxima);

    starProxima.addEventListener('click', (e) => {
        if (acDidDrag) return;
        e.stopPropagation();
        openACStarDetail(2);
    });
    starProxima.addEventListener('mouseenter', () => labelProxima.classList.add('visible'));
    starProxima.addEventListener('mouseleave', () => labelProxima.classList.remove('visible'));

    // Proxima b orbit around Proxima
    const proximaBOrbitRadius = 35;
    const proximaBOrbit = document.createElement('div');
    proximaBOrbit.className = 'ac-orbit';
    proximaBOrbit.style.width = (proximaBOrbitRadius * 2) + 'px';
    proximaBOrbit.style.height = (proximaBOrbitRadius * 2) + 'px';
    proximaBOrbit.style.left = proximaX + 'px';
    proximaBOrbit.style.top = proximaY + 'px';
    proximaBOrbit.style.borderColor = 'rgba(80, 150, 200, 0.15)';
    container.appendChild(proximaBOrbit);

    // Proxima b planet
    const proximaB = document.createElement('div');
    proximaB.className = 'ac-planet-proxima-b';
    proximaB.id = 'proxima-b-planet';
    const proximaBAngle = Math.PI * 0.3;
    proximaB.style.left = (proximaX + Math.cos(proximaBAngle) * proximaBOrbitRadius) + 'px';
    proximaB.style.top = (proximaY + Math.sin(proximaBAngle) * proximaBOrbitRadius) + 'px';
    container.appendChild(proximaB);

    // Proxima b label
    const labelProximaB = document.createElement('div');
    labelProximaB.className = 'ac-planet-label';
    labelProximaB.textContent = 'PROXIMA B';
    labelProximaB.style.left = (proximaX + Math.cos(proximaBAngle) * proximaBOrbitRadius) + 'px';
    labelProximaB.style.top = (proximaY + Math.sin(proximaBAngle) * proximaBOrbitRadius + 15) + 'px';
    labelProximaB.style.opacity = '0';
    labelProximaB.style.transition = 'opacity 0.3s';
    container.appendChild(labelProximaB);

    proximaB.addEventListener('click', (e) => {
        if (acDidDrag) return;
        e.stopPropagation();
        showProximaB();
    });
    proximaB.addEventListener('mouseenter', () => labelProximaB.style.opacity = '1');
    proximaB.addEventListener('mouseleave', () => labelProximaB.style.opacity = '0');

    // Distance indicator
    const distanceLabel = document.createElement('div');
    distanceLabel.className = 'ac-distance-label';
    distanceLabel.textContent = '~13,000 AU TO PROXIMA';
    distanceLabel.style.left = (acCenterX + 150) + 'px';
    distanceLabel.style.top = (acCenterY + 180) + 'px';
    container.appendChild(distanceLabel);

    // Initialize pan/zoom
    initACPanZoom();

    // AC Clock
    function updateACClock() {
        const now = new Date();
        const utc = now.toISOString().replace('T', '  ').substring(0, 21) + ' UTC';
        const el = document.getElementById('ac-clock');
        if (el) el.textContent = utc;
    }
    updateACClock();
    setInterval(updateACClock, 1000);
}

// ===== ALPHA CENTAURI STAR DETAIL =====
let currentACStarIndex = 0;

function openACStarDetail(index) {
    currentACStarIndex = index;
    const star = ALPHA_CENTAURI_STARS[index];

    document.getElementById('alpha-centauri-system').classList.add('hidden');
    document.getElementById('ac-star-detail').classList.remove('hidden');

    // Create stars background
    const detailStars = document.getElementById('ac-detail-stars');
    detailStars.innerHTML = '';
    detailStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('ac-detail-stars');

    // Star display
    const zoom = document.getElementById('ac-star-zoom');
    zoom.style.background = star.gradient;
    
    // Different sizes for different stars
    if (star.id === 'alpha-a') {
        zoom.style.width = '280px';
        zoom.style.height = '280px';
        zoom.style.boxShadow = '0 0 60px 25px rgba(255,210,80,0.35), 0 0 120px 50px rgba(255,180,50,0.18), 0 0 200px 80px rgba(255,150,0,0.08)';
    } else if (star.id === 'alpha-b') {
        zoom.style.width = '240px';
        zoom.style.height = '240px';
        zoom.style.boxShadow = '0 0 50px 20px rgba(255,160,60,0.35), 0 0 100px 40px rgba(255,130,40,0.18), 0 0 180px 70px rgba(230,100,20,0.08)';
    } else {
        zoom.style.width = '160px';
        zoom.style.height = '160px';
        zoom.style.boxShadow = '0 0 35px 15px rgba(255,80,50,0.4), 0 0 70px 30px rgba(220,60,30,0.2), 0 0 140px 60px rgba(180,40,20,0.1)';
    }

    document.getElementById('ac-star-display-area').style.setProperty('--planet-glow', star.glow);
    document.getElementById('ac-star-name-label').textContent = star.name.toUpperCase();
    document.getElementById('ac-star-info-title').textContent = star.name;
    document.getElementById('ac-star-info-subtitle').textContent = star.subtitle;

    // Classification tags
    const classEl = document.getElementById('ac-star-classification');
    classEl.innerHTML = '';
    star.classification.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'info-tag';
        t.textContent = tag;
        classEl.appendChild(t);
    });

    // Facts
    const factsList = document.getElementById('ac-star-facts-list');
    factsList.innerHTML = '';
    star.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });

    // Actions
    const actionsEl = document.getElementById('ac-star-actions');
    actionsEl.innerHTML = '';
    
    // History button
    const historyBtn = document.createElement('button');
    historyBtn.className = 'btn-action btn-action-alt';
    historyBtn.innerHTML = '<span class="btn-action-icon">◷</span> Star History';
    historyBtn.addEventListener('click', () => {
        showACStarHistory();
    });
    actionsEl.appendChild(historyBtn);

    // Proxima b button (only for Proxima)
    if (star.hasProximaB) {
        const proximaBBtn = document.createElement('button');
        proximaBBtn.className = 'btn-action';
        proximaBBtn.innerHTML = '<span class="btn-action-icon">🌍</span> Explore Proxima b';
        proximaBBtn.addEventListener('click', () => {
            showProximaB();
        });
        actionsEl.appendChild(proximaBBtn);
    }
}

// Back from AC star detail to system
document.getElementById('btn-back-ac-system').addEventListener('click', () => {
    document.getElementById('ac-star-detail').classList.add('hidden');
    document.getElementById('alpha-centauri-system').classList.remove('hidden');
});

// ===== AC STAR HISTORY =====
function showACStarHistory() {
    currentACHistorySlide = 0;
    document.getElementById('ac-star-detail').classList.add('hidden');
    document.getElementById('history-viewer').classList.remove('hidden');

    const histStars = document.getElementById('history-stars');
    histStars.innerHTML = '';
    histStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('history-stars');
    
    viewingTarget = 'ac-star';
    showHistorySlide();
}

// ===== PROXIMA B DETAIL =====
function showProximaB() {
    document.getElementById('ac-star-detail').classList.add('hidden');
    document.getElementById('alpha-centauri-system').classList.add('hidden');
    document.getElementById('proxima-b-detail').classList.remove('hidden');

    // Create stars background
    const proximaBStars = document.getElementById('proxima-b-stars');
    proximaBStars.innerHTML = '';
    proximaBStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('proxima-b-stars');

    // Facts
    const factsList = document.getElementById('proxima-b-facts-list');
    factsList.innerHTML = '';
    PROXIMA_B_DATA.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });
}

// Back from Proxima b to Proxima star detail
document.getElementById('btn-back-from-proxima').addEventListener('click', () => {
    document.getElementById('proxima-b-detail').classList.add('hidden');
    document.getElementById('ac-star-detail').classList.remove('hidden');
    openACStarDetail(2); // Proxima is index 2
});

// Initialize landing screen
initLandingScreen();


// ===== TRAPPIST-1 SYSTEM =====
let trappistPanX = 0, trappistPanY = 0, trappistZoomLevel = 1;
let trappistIsDragging = false, trappistDragStartX = 0, trappistDragStartY = 0, trappistPanStartX = 0, trappistPanStartY = 0;
let trappistVelocityX = 0, trappistVelocityY = 0;
let trappistLastMoveX = 0, trappistLastMoveY = 0, trappistLastMoveTime = 0;
let trappistDidDrag = false;
let trappistMomentumId = null;
let trappistCenterX = 0, trappistCenterY = 0;
let trappistBuilt = false;
let trappistPlanetWrappers = [];
let trappistPlanetAngles = [];
let trappistAnimationId = null;

function applyTrappistTransform() {
    const container = document.getElementById('trappist-system-container');
    container.style.transform = `translate(${trappistPanX}px, ${trappistPanY}px) scale(${trappistZoomLevel})`;
}

function startTrappistMomentum() {
    if (trappistMomentumId) cancelAnimationFrame(trappistMomentumId);
    
    function animate() {
        if (Math.abs(trappistVelocityX) < 0.1 && Math.abs(trappistVelocityY) < 0.1) {
            trappistVelocityX = 0; trappistVelocityY = 0;
            return;
        }
        trappistPanX += trappistVelocityX;
        trappistPanY += trappistVelocityY;
        trappistVelocityX *= FRICTION;
        trappistVelocityY *= FRICTION;
        applyTrappistTransform();
        trappistMomentumId = requestAnimationFrame(animate);
    }
    animate();
}

function initTrappistPanZoom() {
    const viewport = document.getElementById('trappist-system-viewport');

    viewport.addEventListener('mousedown', (e) => {
        if (trappistMomentumId) cancelAnimationFrame(trappistMomentumId);
        trappistIsDragging = true;
        trappistDidDrag = false;
        trappistDragStartX = e.clientX;
        trappistDragStartY = e.clientY;
        trappistPanStartX = trappistPanX;
        trappistPanStartY = trappistPanY;
        trappistLastMoveX = e.clientX;
        trappistLastMoveY = e.clientY;
        trappistLastMoveTime = Date.now();
        trappistVelocityX = 0; trappistVelocityY = 0;
        viewport.classList.add('dragging');
    });

    window.addEventListener('mousemove', (e) => {
        if (!trappistIsDragging) return;
        const dx = e.clientX - trappistDragStartX;
        const dy = e.clientY - trappistDragStartY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) trappistDidDrag = true;
        
        trappistPanX = trappistPanStartX + dx;
        trappistPanY = trappistPanStartY + dy;
        
        const now = Date.now();
        const dt = now - trappistLastMoveTime;
        if (dt > 0) {
            trappistVelocityX = (e.clientX - trappistLastMoveX) * VELOCITY_SCALE;
            trappistVelocityY = (e.clientY - trappistLastMoveY) * VELOCITY_SCALE;
        }
        trappistLastMoveX = e.clientX;
        trappistLastMoveY = e.clientY;
        trappistLastMoveTime = now;
        
        applyTrappistTransform();
    });

    window.addEventListener('mouseup', () => {
        if (trappistIsDragging && trappistDidDrag) startTrappistMomentum();
        trappistIsDragging = false;
        const viewport = document.getElementById('trappist-system-viewport');
        if (viewport) viewport.classList.remove('dragging');
    });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = viewport.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        
        const oldZoom = trappistZoomLevel;
        const delta = e.deltaY > 0 ? 0.9 : 1.12;
        trappistZoomLevel = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, trappistZoomLevel * delta));
        
        const zoomRatio = trappistZoomLevel / oldZoom;
        trappistPanX = mouseX - (mouseX - trappistPanX) * zoomRatio;
        trappistPanY = mouseY - (mouseY - trappistPanY) * zoomRatio;
        
        applyTrappistTransform();
        const hint = document.getElementById('trappist-pan-hint');
        if (hint) hint.style.opacity = '0';
    }, { passive: false });

    // Zoom buttons
    document.getElementById('trappist-zoom-in').addEventListener('click', () => {
        trappistZoomLevel = Math.min(MAX_ZOOM, trappistZoomLevel * 1.3);
        applyTrappistTransform();
    });
    document.getElementById('trappist-zoom-out').addEventListener('click', () => {
        trappistZoomLevel = Math.max(MIN_ZOOM, trappistZoomLevel * 0.7);
        applyTrappistTransform();
    });
    document.getElementById('trappist-zoom-reset').addEventListener('click', () => {
        if (trappistMomentumId) cancelAnimationFrame(trappistMomentumId);
        trappistPanX = 0; trappistPanY = 0; trappistZoomLevel = 1;
        trappistVelocityX = 0; trappistVelocityY = 0;
        applyTrappistTransform();
    });
}

function buildTrappistSystem() {
    if (trappistBuilt) return;
    trappistBuilt = true;

    const container = document.getElementById('trappist-system-container');
    const viewport = document.getElementById('trappist-system-viewport');
    
    trappistCenterX = viewport.offsetWidth / 2;
    trappistCenterY = viewport.offsetHeight / 2;

    // Create stars background for TRAPPIST-1 system
    const trappistStarsContainer = document.getElementById('trappist-stars-container');
    for (let i = 0; i < 600; i++) {
        const star = document.createElement('div');
        const isBright = Math.random() > 0.94;
        star.className = isBright ? 'star star-bright' : 'star';
        const size = isBright ? (Math.random() * 2.5 + 1.5) : (Math.random() * 1.5 + 0.3);
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--twinkle-duration', (Math.random() * 5 + 2) + 's');
        star.style.setProperty('--twinkle-min', (Math.random() * 0.15 + 0.05).toString());
        star.style.setProperty('--twinkle-max', (Math.random() * 0.4 + 0.55).toString());
        star.style.animationDelay = (Math.random() * 8) + 's';
        trappistStarsContainer.appendChild(star);
    }

    // Position the TRAPPIST-1 star
    const trappistStar = document.getElementById('trappist-star');
    trappistStar.style.left = trappistCenterX + 'px';
    trappistStar.style.top = trappistCenterY + 'px';
    
    // Make star clickable
    trappistStar.addEventListener('click', (e) => {
        if (trappistDidDrag) return;
        e.stopPropagation();
        openTrappistStarDetail();
    });

    // Create orbits and planets
    trappistPlanetWrappers = [];
    TRAPPIST_1_PLANETS.forEach((planet, index) => {
        // Initialize angle
        if (trappistPlanetAngles[index] === undefined) {
            trappistPlanetAngles[index] = (index / TRAPPIST_1_PLANETS.length) * Math.PI * 2;
        }

        // Create orbit
        const orbit = document.createElement('div');
        orbit.className = 'trappist-orbit';
        orbit.style.width = planet.orbitRadius * 2 + 'px';
        orbit.style.height = planet.orbitRadius * 2 + 'px';
        orbit.style.left = trappistCenterX + 'px';
        orbit.style.top = trappistCenterY + 'px';
        container.appendChild(orbit);

        // Create planet wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'trappist-planet-wrapper';

        // Create planet
        const planetEl = document.createElement('div');
        planetEl.className = 'trappist-planet';
        planetEl.style.width = planet.size + 'px';
        planetEl.style.height = planet.size + 'px';
        planetEl.style.background = planet.gradient;
        planetEl.style.boxShadow = `0 0 ${planet.size * 0.5}px ${planet.glow}, inset -${planet.size * 0.15}px -${planet.size * 0.1}px ${planet.size * 0.3}px rgba(0,0,0,0.5)`;

        planetEl.addEventListener('click', (e) => {
            if (trappistDidDrag) return;
            e.stopPropagation();
            openTrappistPlanetDetail(index);
        });

        // Create label
        const label = document.createElement('div');
        label.className = 'trappist-planet-label';
        label.textContent = planet.name.replace('TRAPPIST-1 ', '');
        label.style.top = (planet.size / 2 + 8) + 'px';

        wrapper.appendChild(planetEl);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
        trappistPlanetWrappers.push(wrapper);
    });

    // Start orbital animation
    if (!trappistAnimationId) animateTrappistOrbits();

    // Initialize pan/zoom
    initTrappistPanZoom();

    // TRAPPIST-1 Clock
    function updateTrappistClock() {
        const now = new Date();
        const utc = now.toISOString().replace('T', '  ').substring(0, 21) + ' UTC';
        const el = document.getElementById('trappist-clock');
        if (el) el.textContent = utc;
    }
    updateTrappistClock();
    setInterval(updateTrappistClock, 1000);
}

function animateTrappistOrbits() {
    function animate() {
        TRAPPIST_1_PLANETS.forEach((planet, index) => {
            // Faster orbits for inner planets (realistic for TRAPPIST-1's compact system)
            const baseSpeed = 0.008;
            const speed = baseSpeed / (index + 1);
            trappistPlanetAngles[index] += speed;
            
            const x = trappistCenterX + Math.cos(trappistPlanetAngles[index]) * planet.orbitRadius;
            const y = trappistCenterY + Math.sin(trappistPlanetAngles[index]) * planet.orbitRadius;
            
            if (trappistPlanetWrappers[index]) {
                trappistPlanetWrappers[index].style.left = x + 'px';
                trappistPlanetWrappers[index].style.top = y + 'px';
            }
        });
        trappistAnimationId = requestAnimationFrame(animate);
    }
    animate();
}

// ===== TRAPPIST-1 STAR DETAIL =====
function openTrappistStarDetail() {
    viewingTarget = 'trappist-star';
    
    document.getElementById('trappist-system').classList.add('hidden');
    document.getElementById('trappist-planet-detail').classList.remove('hidden');

    // Create stars background
    const detailStars = document.getElementById('trappist-detail-stars');
    detailStars.innerHTML = '';
    detailStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('trappist-detail-stars');

    // Star display
    const zoom = document.getElementById('trappist-planet-zoom');
    zoom.style.background = TRAPPIST_1_STAR.gradient;
    zoom.style.width = '200px';
    zoom.style.height = '200px';
    zoom.style.boxShadow = '0 0 40px 18px rgba(200,80,60,0.4), 0 0 80px 35px rgba(180,60,40,0.2), 0 0 150px 60px rgba(150,40,30,0.1)';

    document.getElementById('trappist-planet-display-area').style.setProperty('--planet-glow', TRAPPIST_1_STAR.glow);
    document.getElementById('trappist-planet-name-label').textContent = 'TRAPPIST-1';
    document.getElementById('trappist-planet-info-title').textContent = TRAPPIST_1_STAR.name;
    document.getElementById('trappist-planet-info-subtitle').textContent = TRAPPIST_1_STAR.subtitle;

    // Classification tags
    const classEl = document.getElementById('trappist-planet-classification');
    classEl.innerHTML = '';
    TRAPPIST_1_STAR.classification.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'info-tag';
        t.textContent = tag;
        classEl.appendChild(t);
    });

    // Facts
    const factsList = document.getElementById('trappist-planet-facts-list');
    factsList.innerHTML = '';
    TRAPPIST_1_STAR.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });

    // Hide navigation for star view
    document.getElementById('trappist-planet-counter').textContent = 'STAR';
    document.getElementById('btn-trappist-prev').style.visibility = 'hidden';
    document.getElementById('btn-trappist-next').style.visibility = 'hidden';
}

// ===== TRAPPIST-1 PLANET DETAIL =====
let currentTrappistPlanetIndex = 0;

function openTrappistPlanetDetail(index) {
    viewingTarget = 'trappist-planet';
    currentTrappistPlanetIndex = index;
    const planet = TRAPPIST_1_PLANETS[index];

    document.getElementById('trappist-system').classList.add('hidden');
    document.getElementById('trappist-planet-detail').classList.remove('hidden');

    // Create stars background
    const detailStars = document.getElementById('trappist-detail-stars');
    detailStars.innerHTML = '';
    detailStars.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    createStars('trappist-detail-stars');

    // Planet display
    const zoom = document.getElementById('trappist-planet-zoom');
    zoom.style.background = planet.gradient;
    zoom.style.width = '280px';
    zoom.style.height = '280px';
    zoom.style.boxShadow = `0 0 40px ${planet.glow}, 0 0 80px ${planet.glow}, inset -35px -25px 70px rgba(0,0,0,0.5)`;

    document.getElementById('trappist-planet-display-area').style.setProperty('--planet-glow', planet.glow);
    document.getElementById('trappist-planet-name-label').textContent = planet.name.toUpperCase();
    document.getElementById('trappist-planet-info-title').textContent = planet.name;
    document.getElementById('trappist-planet-info-subtitle').textContent = planet.subtitle;

    // Classification tags
    const classEl = document.getElementById('trappist-planet-classification');
    classEl.innerHTML = '';
    planet.classification.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'info-tag';
        t.textContent = tag;
        classEl.appendChild(t);
    });

    // Facts
    const factsList = document.getElementById('trappist-planet-facts-list');
    factsList.innerHTML = '';
    planet.facts.forEach((fact, i) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.style.animationDelay = (i * 0.06) + 's';
        item.innerHTML = `<span class="fact-icon">${fact.icon}</span>${fact.text}`;
        factsList.appendChild(item);
    });

    // Navigation
    document.getElementById('trappist-planet-counter').textContent = `${index + 1} / ${TRAPPIST_1_PLANETS.length}`;
    document.getElementById('btn-trappist-prev').style.visibility = 'visible';
    document.getElementById('btn-trappist-next').style.visibility = 'visible';
    document.getElementById('btn-trappist-prev').disabled = index === 0;
    document.getElementById('btn-trappist-next').disabled = index === TRAPPIST_1_PLANETS.length - 1;
}

// TRAPPIST-1 planet navigation
document.getElementById('btn-trappist-prev').addEventListener('click', () => {
    if (currentTrappistPlanetIndex > 0) {
        currentTrappistPlanetIndex--;
        openTrappistPlanetDetail(currentTrappistPlanetIndex);
    }
});

document.getElementById('btn-trappist-next').addEventListener('click', () => {
    if (currentTrappistPlanetIndex < TRAPPIST_1_PLANETS.length - 1) {
        currentTrappistPlanetIndex++;
        openTrappistPlanetDetail(currentTrappistPlanetIndex);
    }
});

// Back from TRAPPIST-1 planet detail to system
document.getElementById('btn-back-trappist-system').addEventListener('click', () => {
    document.getElementById('trappist-planet-detail').classList.add('hidden');
    document.getElementById('trappist-system').classList.remove('hidden');
});

// Back to landing from TRAPPIST-1
document.getElementById('btn-back-landing-trappist').addEventListener('click', () => {
    document.getElementById('trappist-system').classList.add('hidden');
    document.getElementById('landing-screen').classList.remove('hidden');
    // Reset TRAPPIST-1 pan/zoom state
    if (trappistMomentumId) cancelAnimationFrame(trappistMomentumId);
    trappistPanX = 0; trappistPanY = 0; trappistZoomLevel = 1;
    trappistVelocityX = 0; trappistVelocityY = 0;
    applyTrappistTransform();
});

// TRAPPIST-1 card click handler
document.getElementById('card-trappist').addEventListener('click', () => {
    startWormholeTransition('trappist', 'TRAPPIST-1 SYSTEM');
});
