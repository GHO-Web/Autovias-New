/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";
import "../../js/slick.js?v=1.0.0";

class AppAutobusAtlacomulco extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>

			<app-banner-slider
				slides-data='[
					{
						"id": "slide1",
						"title": "Atlacomulco",
						"image": "../src/assets/img/destinos-img/atlacomulco/banner/atlacomulco-banner-web.webp",
						"mediumImage": "../src/assets/img/destinos-img/atlacomulco/banner/atlacomulco-banner-tablet.webp",
						"smallImage": "../src/assets/img/destinos-img/atlacomulco/banner/atlacomulco-banner-mobile.webp",
						"link": "#"
					}
				]'
			></app-banner-slider>

			<app-payments></app-payments>

			<!-- Lugares -->
			<section class="__section __section__grid" id="atlacomulco-grid-section">
				<article class="grid-container"></article>
			</section>

			<p class="__subtitle__destinos">Gastronomía</p>

			<section class="__section __section__atlacomulco__food">
				<p class="__paragraph__xl">
					Atlacomulco, ubicado al norte del Estado de México, destaca por su rica tradición
					gastronómica heredada de la cultura mazahua. Sus platillos combinan ingredientes
					locales, técnicas ancestrales y sabores auténticos que reflejan la identidad de la región.
					Desde las famosas carnitas y barbacoa hasta las tortillas hechas a mano y salsas
					artesanales, la cocina de Atlacomulco es una experiencia que conecta historia y sabor.
				</p>

				<article class="container-cards__food"></article>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Atlacomulco en autobús!</h2>
					<p class="cta__subtitle">
						Descubre la historia, cultura y tradiciones de uno de los destinos más emblemáticos
						del Estado de México.
					</p>
					<a
						href="../boletos-autobus/atlacomulco.html"
						class="btn btn--primary btn--large"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Comprar boletos a Atlacomulco"
					>
						Consulta horarios y compra tu boleto
					</a>
				</div>
			</section>

			<section class="__section __section__atlacomulco__ask">
				<app-section-title section-title="Preguntas Frecuentes"></app-section-title>
				<article class="__grid-cards-container__dropdown" id="dropdowns-container"></article>
			</section>

			<section class="__section __section__atlacomulco__other">
				<app-section-title section-title="Otros destinos"></app-section-title>
				<article class="container-slider-other">
					<app-slider-opacity></app-slider-opacity>
				</article>
			</section>

			<app-modal-multi-image></app-modal-multi-image>
			<app-modal-image></app-modal-image>

			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
		`;

    await this.loadAndRenderGridItems();
    await this.loadAndRenderFoodCards();
    await this.loadAndRenderDropdowns();
    await this._configureDestinationSlider();
  }

  async loadAndRenderGridItems() {
    const gridContainer = this.querySelector(
      "#atlacomulco-grid-section .grid-container"
    );
    if (!gridContainer) return;

    try {
      const response = await fetch(
        "../../src/data/destinos/atlacomulco/lugares.json"
      );
      const items = await response.json();

      items.forEach((item) => {
        const card = document.createElement("div");
        card.className = `card ${item.className || ""}`.trim();

        if (item.backgroundImage) {
          card.style.backgroundImage = `linear-gradient(
						rgba(0,0,0,.3),
						rgba(0,0,0,.4)
					), url('${item.backgroundImage}')`;
        }

        card.innerHTML = `<span>${item.text}</span>`;
        card.addEventListener("click", () => this.openMultiImageModal(item));

        gridContainer.appendChild(card);
      });
    } catch (e) {
      gridContainer.innerHTML =
        "<p>Error al cargar los lugares de Atlacomulco.</p>";
    }
  }

  async loadAndRenderFoodCards() {
    const container = this.querySelector(".container-cards__food");
    if (!container) return;

    try {
      const response = await fetch(
        "../../src/data/destinos/atlacomulco/platillos.json"
      );
      const foodData = await response.json();

      foodData.forEach((food) => {
        const card = document.createElement("app-card-open-modal");

        card.setAttribute("card-title", food.title);
        card.setAttribute("card-modal-description", food.description);
        card.setAttribute("card-image", food.imageSrc);
        card.setAttribute("card-modal-image", food.imageModal || food.imageSrc);
        card.setAttribute("card-alt", food.altText || food.title);
        card.setAttribute("card-link-text", "Ver más");

        container.appendChild(card);
      });
    } catch (e) {
      container.innerHTML =
        "<p>Error al cargar la gastronomía de Atlacomulco.</p>";
    }
  }

  async loadAndRenderDropdowns() {
    try {
      const response = await fetch(
        "../../src/data/destinos/atlacomulco/dropdown-preguntas-frecuentes.json"
      );
      const data = await response.json();
      this.renderDropdowns(data);
    } catch (e) {
      const container = this.querySelector("#dropdowns-container");
      if (container) {
        container.innerHTML =
          "<p>Error al cargar las preguntas frecuentes.</p>";
      }
    }
  }

  renderDropdowns(data) {
    const container = this.querySelector("#dropdowns-container");
    if (!container) return;

    container.innerHTML = "";
    data.forEach((item) => {
      const dropdown = document.createElement("app-dropdown");
      dropdown.setAttribute("title-dropdown", item["title-dropdown"]);
      dropdown.setAttribute("content-dropdown", item["content-dropdown"]);
      container.appendChild(dropdown);
    });
  }

  async _configureDestinationSlider() {
    const slider = this.querySelector("app-slider-opacity");
    if (!slider) return;

    const response = await fetch(
      "../../src/data/destinos/card-opacity-destinations.json"
    );
    const data = await response.json();

    slider.setAttribute("destinations-data", JSON.stringify(data));
  }

  openMultiImageModal(item) {
    const modal = this.querySelector("app-modal-multi-image");
    if (!modal) return;

    modal.setAttribute("modal-title", item.text);
    modal.setAttribute("content-title", item.title || "");
    modal.setAttribute("content-description", item.description || "");
    modal.setAttribute("image-1", item.backgroundImage || "");
    modal.setAttribute("image-2", item.image2 || "");
    modal.setAttribute("image-3", item.image3 || "");
    modal.setAttribute("image-4", item.image4 || "");

    modal.openModal?.();
  }
}

customElements.define("page-autobus-a-atlacomulco", AppAutobusAtlacomulco);
