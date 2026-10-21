const API_URL = "http://127.0.0.1:8000/api/pizzas/";

const title = document.getElementById("pizza-name");
const image = document.getElementById("pizza-image");
const ingredientsList = document.getElementById("pizza-ingredients");
const message = document.getElementById("message");

function isValidImageUrl(value) {
    try {
        const url = new URL(value);

        return url.protocol === "https:"
            && url.hostname === "images.unsplash.com";
    } catch {
        return false;
    }
}

async function loadPizza() {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        if (!id || !/^\d+$/.test(id)) {
            throw new Error("Identifiant de pizza invalide.");
        }

        const response = await fetch(`${API_URL}${id}/`);

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const pizza = await response.json();

        // Afficher le nom de la pizza
        title.textContent = pizza.name;

        // Afficher l'image si son URL est autorisée
        if (isValidImageUrl(pizza.image_url)) {
            image.src = pizza.image_url;
            image.alt = pizza.name;
        } else {
            image.remove();
        }

        // Afficher les ingrédients sans interpréter leur contenu comme du HTML
        ingredientsList.replaceChildren();

        pizza.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

    } catch (error) {
        message.textContent = "Impossible de charger cette pizza.";
        console.error(error);
    }
}

loadPizza();