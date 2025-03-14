document.addEventListener("DOMContentLoaded", function () {
    let texts = [
        "{name}, tu es unique et précieuse 🫶🏻", 
        "Tu es l'étoile qui illumine ma vie chaque jour", 
        "{name}, il n'y a personne comme toi, et c'est ce qui te rend si spéciale", 
        "Tu es un trésor rare et inestimable que j’ai la chance d’avoir", 
        "{name}, ta présence dans ma vie fait toute la différence", 
        "Tu es ma source de bonheur et mon inspiration quotidienne", 
        "{name}, tu mérites tout l’amour et la douceur du monde", 
        "Ta gentillesse et ta lumière rayonnent comme le soleil", 
        "{name}, tu es une perle rare, un véritable bijou que je chéris", 
        "Tu es la lumière qui éclaire mes jours les plus sombres 💖"
    ];
    
    let index = 0;
    let name = ""; // Pas de nom par défaut

    function updateMessage() {
        let message = texts[index].replace("{name}", name);
        document.getElementById("message").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("message").innerText = message;
            document.getElementById("message").style.opacity = 1;
        }, 300);
    }

    document.getElementById("btn").addEventListener("click", function () {
        index = (index + 1) % texts.length;
        updateMessage();
    });

    document.getElementById("nameInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            setName();
        }
    });

    window.setName = function () {
        let newName = document.getElementById("nameInput").value.trim();
        if (newName !== "") {
            name = newName;
            document.getElementById("nameDisplay").innerText = name;
            updateMessage();

            // Afficher le reste du contenu et cacher l'input après validation
            document.querySelector(".input-container").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
            document.querySelector("h1").style.visibility = "visible";
        }
    };
});
