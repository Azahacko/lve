let texts = [
    "Françoise, tu es unique et précieuse 🫶🏻", 
    "Tu es l'étoile qui illumine ma vie chaque jour", 
    "Il n'y a personne comme toi, et c'est ce qui te rend si spéciale", 
    "Tu es un trésor rare et inestimable que j’ai la chance d’avoir", 
    "Ta présence dans ma vie fait toute la différence", 
    "Tu es ma source de bonheur et mon inspiration quotidienne", 
    "Tu mérites tout l’amour et la douceur du monde", 
    "Ta gentillesse et ta lumière rayonnent comme le soleil", 
    "Tu es une perle rare, un véritable bijou que je chéris", 
    "Tu es la lumière qui éclaire mes jours les plus sombres 💖"
];
let index = 0;

function changeText() {
    document.getElementById("message").innerText = texts[index];
    index = (index + 1) % texts.length;
}
