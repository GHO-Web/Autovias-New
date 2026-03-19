/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.0.1";
import "../../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/sliders/app-banner-slider.js";
import "../../components/carousel/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/cards/app-card-open-modal.js";
import "../../components/dropdown/app-dropdown.js";
import "../../components/cards/app-card-destination-opacity.js";
import "../../components/sliders/app-slider-opacity.js";
import "../../components/modal/app-modal-multi-image.js";
import "../../components/modal/app-modal-image.js";

class AutobusAIxtapaZihuatanejo extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-banner-slider
				slides-data='[
					{
						"id": "slide1",
						"title": "Ixtapa Zihuatanejo",
						"image": "../src/assets/img/destinos-img/ixtapa/banner/ixtapa-banner-web.webp",
						"mediumImage": "../src/assets/img/destinos-img/ixtapa/banner/ixtapa-banner-tablet.webp",
						"smallImage": "../src/assets/img/destinos-img/ixtapa/banner/ixtapa-banner-mobile.webp",
						"link": "#index.html/banner1"
					}
				]'
			></app-banner-slider>

			<app-payments></app-payments>

			<section class="__section __section__grid" id="monterrey-grid-section">
				<article class="grid-container">
					<!-- Los elementos del grid se cargarán aquí -->
				</article>
			</section>

			<p class="__subtitle__destinos">Gastronomía</p>

			<section class="__section __section__monterrey__food">
				<p class="__paragraph__xl">
					Ixtapa Zihuatanejo es un paraíso gastronómico frente al Pacífico.
					Su cocina se distingue por la frescura de los mariscos y recetas
					tradicionales de la Costa Grande de Guerrero. Disfruta del icónico
					pescado a la talla, ceviches frescos, camarones al coco, tacos de
					mariscos y el tradicional pozole guerrerense. Cada platillo se
					acompaña con vistas espectaculares al mar y un ambiente relajado
					que convierte cada comida en una experiencia inolvidable.
				</p>

				<article class="container-cards__food">
					<!-- Las tarjetas de comida se cargarán aquí dinámicamente -->
				</article>
			</section>
            
			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Ixtapa Zihuatanejo con Autovías!</h2>
					<p class="cta__subtitle">
						Disfruta sol, playa y descanso total. Tu próxima aventura comienza aquí.
					</p>
					<a
						href="../boletos-autobus/ixtapa-zihuatanejo.html"
						class="btn btn--primary btn--large"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Comprar boletos"
						tabindex="0"
					>
						Consulta horarios y compra tu boleto
					</a>
				</div>
			</section>

			<section class="__section __section__monterrey__ask">
				<app-section-title section-title="Preguntas Frecuentes"></app-section-title>
				<article class="__grid-cards-container__dropdown" id="dropdowns-container">
					<!-- Contenedor para los dropdowns -->
				</article>
			</section>

			<section class="__section __section__monterrey__other">
				<app-section-title section-title="Otros destinos"></app-section-title>
				<article class="container-slider-other">
					<app-slider-opacity></app-slider-opacity>
				</article>
			</section>

			<app-modal-multi-image></app-modal-multi-image>
			<app-modal-image></app-modal-image>

			
		`;

    await this.loadAndRenderGridItems();
    await this.loadAndRenderFoodCards();
    await this.loadAndRenderDropdowns();
    await this._configureDestinationSlider();
  }

  /* ===== LUGARES ===== */
  async loadAndRenderGridItems() {
    const gridContainer = this.querySelector(
      "#monterrey-grid-section .grid-container",
    );

    if (!gridContainer) return;

    try {
      const response = await fetch(
        "../../src/data/destinos/ixtapa/lugares.json",
      );
      const items = await response.json();

      items.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `card ${item.className || ""}`.trim();

        cardDiv.style.backgroundImage = `
					linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.4)),
					url('${item.backgroundImage}')
				`;

        cardDiv.innerHTML = `<span>${item.text}</span>`;
        cardDiv.addEventListener("click", () => this.openMultiImageModal(item));

        gridContainer.appendChild(cardDiv);
      });
    } catch (error) {
      gridContainer.innerHTML =
        "<p>Error al cargar los lugares turísticos.</p>";
    }
  }

  /* ===== GASTRONOMÍA ===== */
  async loadAndRenderFoodCards() {
    const foodContainer = this.querySelector(".container-cards__food");
    if (!foodContainer) return;

    foodContainer.innerHTML = "";

    try {
      const response = await fetch(
        "../../src/data/destinos/ixtapa/platillos.json",
      );
      const foodData = await response.json();

      foodData.forEach((foodItem) => {
        const card = document.createElement("app-card-open-modal");

        card.setAttribute("card-title", foodItem.title);
        card.setAttribute("card-modal-description", foodItem.description);
        card.setAttribute("card-image", foodItem.imageSrc);
        card.setAttribute(
          "card-modal-image",
          foodItem.imageModal || foodItem.imageSrc,
        );
        card.setAttribute("card-alt", foodItem.altText);
        card.setAttribute("card-link-text", foodItem.linkText || "Ver más...");

        foodContainer.appendChild(card);
      });
    } catch (error) {
      foodContainer.innerHTML =
        "<p>Error al cargar la información de los platillos.</p>";
    }
  }

  /* ===== FAQ ===== */
  async loadAndRenderDropdowns() {
    try {
      const response = await fetch(
        "../../src/data/destinos/ixtapa/dropdown-preguntas-frecuentes.json",
      );
      const data = await response.json();

      const container = this.querySelector("#dropdowns-container");
      container.innerHTML = "";

      data.forEach((item) => {
        const dropdown = document.createElement("app-dropdown");
        dropdown.setAttribute("title-dropdown", item["title-dropdown"]);
        dropdown.setAttribute("content-dropdown", item["content-dropdown"]);
        container.appendChild(dropdown);
      });
    } catch (error) {
      this.querySelector("#dropdowns-container").innerHTML =
        "<p>Error al cargar las preguntas frecuentes.</p>";
    }
  }

  /* ===== SLIDER OTROS DESTINOS ===== */
  async _configureDestinationSlider() {
    const sliderElement = this.querySelector("app-slider-opacity");
    if (!sliderElement) return;

    try {
      const response = await fetch(
        "../../src/data/destinos/card-opacity-destinations.json",
      );
      const destinationsData = await response.json();

      sliderElement.setAttribute(
        "destinations-data",
        JSON.stringify(destinationsData),
      );
    } catch (error) {
      sliderElement.innerHTML = "<p>Error al cargar otros destinos.</p>";
    }
  }

  /* ===== MODAL ===== */
  openMultiImageModal(itemData) {
    const modal = this.querySelector("app-modal-multi-image");
    if (!modal) return;

    modal.setAttribute("modal-title", itemData.text);
    modal.setAttribute("content-title", itemData.title || "");
    modal.setAttribute("content-description", itemData.description || "");
    modal.setAttribute("image-1", itemData.backgroundImage || "");
    modal.setAttribute("image-2", itemData.image2 || "");
    modal.setAttribute("image-3", itemData.image3 || "");
    modal.setAttribute("image-4", itemData.image4 || "");

    modal.openModal?.();
  }
}

customElements.define("page-autobus-a-ixtapa", AutobusAIxtapaZihuatanejo);
