:root {
    --bg-color: #faf9f6; /* Off-white */
    --accent-color: #d4af37; /* Gold */
    --text-color: #2c2c2c;
    --beige: #f5f5dc;
    --soft-gold: #e5c07b;
    --white: #ffffff;
    --shadow: 0 20px 50px rgba(0,0,0,0.1);
    --glass: rgba(255, 255, 255, 0.7);
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cairo', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
    text-align: center;
}

h1, h2, h3, .date-display {
    font-family: 'Amiri', serif;
}

.hidden {
    display: none !important;
}

/* Loading Screen */
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader {
    text-align: center;
}

.gold-ring {
    width: 50px;
    height: 50px;
    border: 3px solid var(--beige);
    border-top: 3px solid var(--accent-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Music Toggle */
#music-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid var(--accent-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    box-shadow: var(--shadow);
}

/* Envelope Section */
#envelope-section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
}

.envelope-wrapper {
    position: relative;
    width: 300px;
    height: 200px;
    cursor: pointer;
}

.envelope {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--beige);
    box-shadow: var(--shadow);
    transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
}

.envelope-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-top: 100px solid var(--soft-gold);
    z-index: 3;
    transform-origin: top;
    transition: transform 0.4s ease 0.4s;
}

.envelope-front {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 100px solid var(--beige);
    z-index: 4;
}

.envelope-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--beige);
    z-index: 1;
}

.letter {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 280px;
    height: 180px;
    background: white;
    z-index: 2;
    transition: transform 0.6s ease;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.letter-content h2 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: var(--accent-color);
}

#open-btn {
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
}

.envelope.open .envelope-top {
    transform: rotateX(180deg);
    z-index: 1;
}

.envelope.open .letter {
    transform: translateY(-120px) translateZ(20px);
    z-index: 5;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.envelope.open {
    transform: rotateX(10deg) scale(1.05);
}

/* Main Content Styles */
#main-content {
    padding: 40px 20px;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
}

.hero {
    margin-bottom: 60px;
}

.hero h1 {
    font-size: 3.5rem;
    margin: 20px 0;
    color: var(--accent-color);
}

.heart {
    color: #e74c3c;
    font-size: 2.5rem;
    display: inline-block;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.invite-msg {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.date-display {
    font-size: 1.8rem;
    border-top: 1px solid var(--accent-color);
    border-bottom: 1px solid var(--accent-color);
    display: inline-block;
    padding: 10px 30px;
    margin-top: 20px;
}

/* Countdown */
.countdown-section {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: var(--shadow);
}

#countdown {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.time-unit {
    display: flex;
    flex-direction: column;
    min-width: 60px;
}

.time-unit span {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--accent-color);
}

.time-unit label {
    font-size: 0.8rem;
}

/* Venue Section */
.venue-card {
    background: var(--white);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid var(--beige);
    box-shadow: var(--shadow);
    margin-bottom: 40px;
}

.venue-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
}

.btn-gold {
    display: inline-block;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    padding: 12px 30px;
    border-radius: 30px;
    margin-top: 20px;
    transition: transform 0.3s ease;
}

.btn-gold:hover {
    transform: scale(1.05);
}

/* QR Section */
.qr-section {
    margin: 40px 0;
}

#qr-code img {
    margin: 20px auto;
    border: 5px solid white;
    box-shadow: var(--shadow);
}

/* Buttons */
.btn-outline {
    background: transparent;
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
    padding: 10px 25px;
    border-radius: 25px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
}

.btn-whatsapp {
    background: #25D366;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    margin-top: 20px;
}

/* Particles */
.particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.particle {
    position: absolute;
    background: var(--accent-color);
    border-radius: 50%;
    opacity: 0.3;
    animation: float linear infinite;
}

@keyframes float {
    from { transform: translateY(100vh) rotate(0deg); }
    to { transform: translateY(-10vh) rotate(360deg); }
}

/* Animations */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

footer {
    margin-top: 60px;
    padding-bottom: 40px;
}

.footer-msg {
    font-family: 'Amiri', serif;
    font-size: 1.5rem;
    color: var(--accent-color);
}
