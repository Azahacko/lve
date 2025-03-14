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
            updateMessage();

            // Générer un lien avec le prénom
            let shareLink = window.location.origin + window.location.pathname + "?name=" + encodeURIComponent(name);
            document.getElementById("shareLink").innerHTML = `<p>Partage ce lien avec <b>${name}</b> :</p><input type="text" value="${shareLink}" readonly onclick="this.select()">`;

            // Afficher les boutons d'envoi et de réinitialisation
            document.getElementById("sendButton").classList.remove("hidden");
            document.getElementById("resetButton").classList.remove("hidden");

            // Afficher le reste du contenu et cacher l'input après validation
            document.querySelector(".input-container").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
        }
    };

    function copyLink() {
        let linkInput = document.getElementById("shareLink").querySelector("input");
        if (linkInput) {
            linkInput.select();
            document.execCommand("copy");
            document.getElementById("copyMessage").classList.remove("hidden");
        }
    }

    window.resetForm = function () {
        // Réafficher l'input et masquer les autres éléments
        document.querySelector(".input-container").style.display = "block";
        document.getElementById("content").classList.add("hidden");
        document.getElementById("sendButton").classList.add("hidden");
        document.getElementById("resetButton").classList.add("hidden");
        document.getElementById("copyMessage").classList.add("hidden");

        // Réinitialiser le champ de texte
        document.getElementById("nameInput").value = "";
    };

    if (name !== "") {
        document.querySelector(".input-container").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
        document.getElementById("nameDisplay").innerText = name;
        updateMessage();
    }
});
