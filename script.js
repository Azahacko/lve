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
    let urlParams = new URLSearchParams(window.location.search);
    let name = urlParams.get("name") || ""; 

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

    window.setName = function () {
        let newName = document.getElementById("nameInput").value.trim();
        if (newName !== "") {
            name = newName;
            document.getElementById("nameDisplay").innerText = name;
            document.getElementById("nameInLink").innerText = name;

            // Générer un lien unique
            let shareLink = window.location.origin + window.location.pathname + "?name=" + encodeURIComponent(name);
            document.getElementById("linkInput").value = shareLink;

            // Afficher les éléments
            document.getElementById("sendButton").classList.remove("hidden");
            document.getElementById("resetButton").classList.remove("hidden");
            document.getElementById("shareLink").classList.remove("hidden");

            // Cacher l'input après validation
            document.querySelector(".input-container").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
        }
    };

    window.copyLink = function () {
        let linkInput = document.getElementById("linkInput");
        linkInput.select();
        document.execCommand("copy");

        let copyMessage = document.getElementById("copyMessage");
        copyMessage.classList.remove("hidden");
        setTimeout(() => copyMessage.classList.add("hidden"), 2000);
    };
});
