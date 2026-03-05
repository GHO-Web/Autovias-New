/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-cookies-policy.js?v=1.0.0";
import "../components/app-button-whats.js?v=1.0.0";
import "../components/app-button-eva-trip.js?v=1.0.0";
import "../components/app-footer.js?v=1.0.0";

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

class AppBoletosAutobusZitacuaro extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
			<app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner Zitácuaro", "image": "../src/assets/img/destinos-img/zitacuaro/banner/zitacuaro-banner-web.webp","mediumImage": "../src/assets/img/destinos-img/zitacuaro/banner/zitacuaro-banner-tablet.webp", "smallImage": "../src/assets/img/destinos-img/zitacuaro/banner/zitacuaro-banner-mobile.webp", "link": "#index.html/banner1"}]'
			>
			</app-banner-slider>
			<app-payments></app-payments>

			<section class="__section __section__monterrey__destinations">
				<app-section-title section-title="Viaja a Zitácuaro en autobús con Autovías La Línea"></app-section-title>
				<p class="__subtitle__destinos">Zitácuaro</p>
				<p class="__paragraph">Zitácuaro, ubicado al oriente de Michoacán, es un destino rodeado de montañas, bosques y tradiciones profundas. Reconocido como cuna de la Suprema Junta Nacional Americana, combina historia, naturaleza y una identidad cultural que se vive en cada calle. Con Autovías La Línea, tu viaje a Zitácuaro es cómodo, seguro y confiable.</p>
				<p class="__paragraph">Descubre Zitácuaro, una ciudad que equilibra su legado histórico con paisajes naturales imponentes. Visita la Presa del Bosque, explora senderos entre pinos y encinos, y conoce el Santuario de la Mariposa Monarca en temporada. Recorre su centro histórico, disfruta de su gastronomía local y vive la hospitalidad de un pueblo orgulloso de su historia.</p>
			</section>

			<section class="__section __section__grid" id="zitacuaro-grid-section">
				<article class="grid-container">
					<!-- Los elementos del grid se cargarán aquí -->
				</article>
			</section>

			<p class="__subtitle__destinos">Gastronomía</p>
			<section class="__section __section__monterrey__food">
				<p class="__paragraph__xl">La gastronomía de Zitácuaro refleja la tradición michoacana con sabores caseros y recetas transmitidas por generaciones. Disfruta platillos típicos como carnitas, atole, tamales, enchiladas y antojitos regionales que encontrarás en mercados y fondas locales.</p>
				<article class="container-cards__food">
					<!-- Las tarjetas de comida se cargarán aquí dinámicamente -->
				</article>
			</section>
			
			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Zitácuaro con Autovías!</h2>
					<p class="cta__subtitle">Planea tu próximo viaje y descubre uno de los destinos con mayor riqueza natural e histórica de Michoacán.</p>
					<a href="../boletos-autobus/zitacuaro.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
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
			"#zitacuaro-grid-section .grid-container",
		);
		if (!gridContainer) return;

		try {
			const response = await fetch(
				"../../src/data/destinos/zitacuaro/lugares.json",
			);
			const items = await response.json();

			items.forEach((item) => {
				const cardDiv = document.createElement("div");
				cardDiv.className = `card ${item.className || ""}`.trim();
				cardDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.4)), url('${item.backgroundImage}')`;
				cardDiv.innerHTML = `<span>${item.text}</span>`;
				gridContainer.appendChild(cardDiv);
				cardDiv.addEventListener("click", () => this.openMultiImageModal(item));
			});
		} catch (e) {
			gridContainer.innerHTML = "<p>Error al cargar los lugares.</p>";
		}
	}

	async loadAndRenderFoodCards() {
		const foodContainer = this.querySelector(".container-cards__food");
		if (!foodContainer) return;
		foodContainer.innerHTML = "";

		try {
			const response = await fetch(
				"../../src/data/destinos/zitacuaro/platillos.json",
			);
			const foodData = await response.json();

			foodData.forEach((foodItem) => {
				const cardElement = document.createElement("app-card-open-modal");
				cardElement.setAttribute("card-title", foodItem.title);
				cardElement.setAttribute(
					"card-modal-description",
					foodItem.description,
				);
				cardElement.setAttribute("card-image", foodItem.imageSrc);
				cardElement.setAttribute("card-modal-image", foodItem.imageModal);
				cardElement.setAttribute("card-alt", foodItem.altText);
				cardElement.setAttribute(
					"card-link-text",
					foodItem.linkText || "Ver...",
				);
				foodContainer.appendChild(cardElement);
			});
		} catch (e) {
			foodContainer.innerHTML = "<p>Error al cargar los platillos.</p>";
		}
	}

	async loadAndRenderDropdowns() {
		try {
			const response = await fetch(
				"../../src/data/destinos/zitacuaro/dropdown-preguntas-frecuentes.json",
			);
			const dropdownsData = await response.json();
			this.renderDropdowns(dropdownsData);
		} catch (e) {
			const container = this.querySelector("#dropdowns-container");
			if (container)
				container.innerHTML =
					"<p>Error al cargar las preguntas frecuentes.</p>";
		}
	}

	renderDropdowns(dropdownsData) {
		const container = this.querySelector("#dropdowns-container");
		if (!container) return;
		container.innerHTML = "";

		dropdownsData.forEach((data) => {
			const dropdownElement = document.createElement("app-dropdown");
			dropdownElement.setAttribute("title-dropdown", data["title-dropdown"]);
			dropdownElement.setAttribute(
				"content-dropdown",
				data["content-dropdown"],
			);
			container.appendChild(dropdownElement);
		});
	}

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
		} catch (e) {
			sliderElement.innerHTML =
				'<p style="color:red">No se pudo cargar el slider.</p>';
		}
	}

	openMultiImageModal(itemData) {
		const modal = this.querySelector("app-modal-multi-image");
		if (!modal) return;

		modal.setAttribute("modal-title", itemData.text);
		modal.setAttribute("content-title", itemData.title);
		modal.setAttribute("content-description", itemData.description);
		modal.setAttribute("image-1", itemData.backgroundImage);
		modal.setAttribute("image-2", itemData.image2);
		modal.setAttribute("image-3", itemData.image3);
		modal.setAttribute("image-4", itemData.image4);

		modal.openModal?.();
	}
}

customElements.define("page-autobus-a-zitacuaro", AppBoletosAutobusZitacuaro);
