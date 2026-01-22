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

class AppAutobusColima extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>

			<app-banner-slider
				slides-data='[
					{
						"id": "slide1",
						"title": "Colima",
						"image": "../src/assets/img/destinos-img/colima/banner/colima-banner-web.webp",
						"mediumImage": "../src/assets/img/destinos-img/colima/banner/colima-banner-tablet.webp",
						"smallImage": "../src/assets/img/destinos-img/colima/banner/colima-banner-mobile.webp",
						"link": "#"
					}
				]'
			></app-banner-slider>

			<app-payments></app-payments>

			<!-- Intro destino -->
			<section class="__section __section__monterrey__destinations">
				<app-section-title section-title="Viaja a Colima en autobús con Autovías La Línea"></app-section-title>

				<p class="__subtitle__destinos">Colima</p>
				<p class="__paragraph">
					Colima, uno de los estados más pequeños de México, sorprende por su riqueza natural,
					cultural y gastronómica. Rodeado de volcanes, playas y pueblos llenos de tradición,
					es un destino ideal para quienes buscan tranquilidad, naturaleza y autenticidad.
					Autovías La Línea te lleva a Colima con un servicio cómodo, seguro y confiable.
				</p>

				<p class="__subtitle__destinos">¿Qué lugares visitar en Colima?</p>
				<p class="__paragraph">
					Explora el centro histórico de Colima con sus jardines y portales, visita el
					Jardín Libertad y la Catedral Basílica Menor. Descubre la Zona Arqueológica de
					La Campana, uno de los asentamientos prehispánicos más importantes del occidente
					de México. Relájate en Comala, Pueblo Mágico rodeado de cafetales, o disfruta de
					las playas de Manzanillo. Colima combina historia, naturaleza y descanso en un
					solo destino.
				</p>
			</section>

			<!-- Grid lugares -->
			<section class="__section __section__grid" id="colima-grid-section">
				<article class="grid-container"></article>
			</section>

			<p class="__subtitle__destinos">Gastronomía</p>

			<section class="__section __section__monterrey__food">
				<p class="__paragraph__xl">
					La gastronomía de Colima destaca por sabores intensos y recetas tradicionales.
					Prueba el tatemado, la birria colimense, el pozole seco y los famosos sopitos.
					Acompaña tu comida con una refrescante tuba o un ponche artesanal.
					Cada platillo refleja la identidad y hospitalidad colimense.
				</p>

				<article class="container-cards__food"></article>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Colima en autobús!</h2>
					<p class="cta__subtitle">
						Disfruta de paisajes, tradición y gastronomía en un solo viaje.
					</p>
					<a
						href="../boletos-autobus/colima.html"
						class="btn btn--primary btn--large"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Comprar boletos a Colima"
					>
						Consulta horarios y compra tu boleto
					</a>
				</div>
			</section>

			<section class="__section __section__monterrey__ask">
				<app-section-title section-title="Preguntas Frecuentes"></app-section-title>
				<article class="__grid-cards-container__dropdown" id="dropdowns-container"></article>
			</section>

			<section class="__section __section__monterrey__other">
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
      "#colima-grid-section .grid-container"
    );
    if (!gridContainer) return;

    const response = await fetch("../../src/data/destinos/colima/lugares.json");
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
  }

  async loadAndRenderFoodCards() {
    const container = this.querySelector(".container-cards__food");
    if (!container) return;

    const response = await fetch(
      "../../src/data/destinos/colima/platillos.json"
    );
    const foodData = await response.json();

    foodData.forEach((food) => {
      const card = document.createElement("app-card-open-modal");

      card.setAttribute("card-title", food.title);
      card.setAttribute("card-modal-description", food.description);
      card.setAttribute("card-image", food.imageSrc);
      card.setAttribute("card-modal-image", food.imageModal || food.imageSrc);
      card.setAttribute("card-alt", food.altText || food.title);
      card.setAttribute("card-link-text", food.linkText || "Ver...");

      container.appendChild(card);
    });
  }

  async loadAndRenderDropdowns() {
    const response = await fetch(
      "../../src/data/destinos/colima/dropdown-preguntas-frecuentes.json"
    );
    const data = await response.json();
    this.renderDropdowns(data);
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

customElements.define("page-autobus-a-colima", AppAutobusColima);
