const API_URL = "http://127.0.0.1:8000/api/pizzas/";

const list = document.getElementById("pizza-list");

async function loadPizzas() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }

    const pizzas = await response.json();
    const cards = pizzas.map(
      (pizza) => `
    <div class="col-md-4">
        <div class="card h-100">
            <img
                src="${pizza.image_url}"
                alt="${pizza.name}"
                class="card-img-top"
                style="height: 220px; object-fit: cover;"
            >
            <div class="card-body">
                <h2 class="card-title h5">${pizza.name}</h2>
                <a href="pizza.html?id=${pizza.id}"
                   class="btn btn-primary">
                    View Details →
                </a>
            </div>
        </div>
    </div>
`,
    );

    list.innerHTML = cards.join("");
  } catch (error) {
    const message = document.createElement("p");
    message.textContent = "Impossible de charger les pizzas.";
    list.append(message);
    console.error(error);
  }
}

loadPizzas();


// const API_URL = "http://127.0.0.1:8000/api/pizzas/";

// const list = document.getElementById("pizza-list");

// async function loadPizzas() {
//   try {
//     const response = await fetch(API_URL);

//     if (!response.ok) {
//       throw new Error("Erreur HTTP : " + response.status);
//     }

//     const pizzas = await response.json();

//     pizzas.forEach((pizza) => {
//       const column = document.createElement("div");
//       column.className = "col-md-4";

//       const card = document.createElement("div");
//       card.className = "card h-100";

//       const image = document.createElement("img");
//       image.src = pizza.image_url;
//       image.alt = pizza.name;
//       image.className = "card-img-top";
//       image.style.height = "220px";
//       image.style.objectFit = "cover";

//       const body = document.createElement("div");
//       body.className = "card-body";

//       const title = document.createElement("h2");
//       title.className = "card-title h5";
//       title.textContent = pizza.name;

//       const link = document.createElement("a");
//       link.href = `pizza.html?id=${pizza.id}`;
//       link.className = "btn btn-primary";
//       link.textContent = "View Details →";

//       body.append(title, link);
//       card.append(image, body);
//       column.append(card);
//       list.append(column);
//     });
//   } catch (error) {
//     const message = document.createElement("p");
//     message.textContent = "Impossible de charger les pizzas.";
//     list.append(message);
//     console.error(error);
//   }
// }

// loadPizzas();
