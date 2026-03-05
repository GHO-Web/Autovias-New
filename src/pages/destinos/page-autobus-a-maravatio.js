/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-modal-doters.js";
import "../components/app-modal-travelpass.js";
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
import "../../js/slick.js?v=1.0.0";

class AppAutobusMaravatio extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>

			<app-banner-slider
				slides-data='[
				{"id":"slide1","title":"Maravatío","image":"../src/assets/img/destinos-img/maravatio/banner/maravatio-banner-web.webp","mediumImage":"../src/assets/img/destinos-img/maravatio/banner/maravatio-banner-tablet.webp","smallImage":"../src/assets/img/destinos-img/maravatio/banner/maravatio-banner-mobile.webp","link":"#"}
				]'
			></app-banner-slider>

			<app-payments></app-payments>

			<section class="__section __section__destination">
				<app-section-title section-title="Viaja a Maravatío en autobús con Autovías La Línea"></app-section-title>
				<p class="__subtitle__destinos">Maravatío, Michoacán</p>
				<p class="__paragraph">Maravatío es una joya histórica del oriente de Michoacán, reconocida por su arquitectura colonial, clima templado y ambiente tranquilo. Viajar a Maravatío con Autovías La Línea es disfrutar de un trayecto cómodo, seguro y confiable hacia un destino lleno de tradición.</p>
				<p class="__paragraph">Camina por su centro histórico, admira templos emblemáticos como la Parroquia de San Juan Bautista y déjate sorprender por sus paisajes rurales. Maravatío también es famoso por su herencia cultural, su cercanía con zonas naturales y su papel histórico en la región. Un lugar ideal para viajar sin prisas y conectar con la esencia de Michoacán.</p>
			</section>

			<section class="__section __section__grid" id="maravatio-grid-section">
				<article class="grid-container"></article>
			</section>

			<p class="__subtitle__destinos">Gastronomía</p>
			<section class="__section __section__food">
				<p class="__paragraph__xl">La gastronomía de Maravatío refleja la tradición michoacana con platillos llenos de sabor. Destacan las carnitas, las enchiladas, los tamales y el pan tradicional que se disfruta en familia. Cada bocado es una muestra de la cocina casera que caracteriza a la región.</p>
				<article class="container-cards__food"></article>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Maravatío con Autovías!</h2>
					<p class="cta__subtitle">Consulta horarios, elige tu asiento y prepárate para un viaje cómodo y seguro.</p>
					<a href="../boletos-autobus/maravatio.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Consulta horarios y compra tu boleto</a>
				</div>
			</section>

			<section class="__section __section__faq">
				<app-section-title section-title="Preguntas Frecuentes"></app-section-title>
				<article class="__grid-cards-container__dropdown" id="dropdowns-container"></article>
			</section>

			<section class="__section __section__other">
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
			"#maravatio-grid-section .grid-container",
		);
		if (!gridContainer) return;

		try {
			const response = await fetch(
				"../../src/data/destinos/maravatio/lugares.json",
			);
			const items = await response.json();

			items.forEach((item) => {
				const card = document.createElement("div");
				card.className = `card ${item.className || ""}`;
				card.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.4)), url('${item.backgroundImage}')`;
				card.innerHTML = `<span>${item.text}</span>`;
				card.addEventListener("click", () => this.openMultiImageModal(item));
				gridContainer.appendChild(card);
			});
		} catch (e) {
			gridContainer.innerHTML =
				"<p>Error al cargar los lugares de Maravatío.</p>";
		}
	}

	async loadAndRenderFoodCards() {
		const container = this.querySelector(".container-cards__food");
		if (!container) return;
		container.innerHTML = "";

		try {
			const response = await fetch(
				"../../src/data/destinos/maravatio/platillos.json",
			);
			const data = await response.json();

			data.forEach((food) => {
				const card = document.createElement("app-card-open-modal");
				card.setAttribute("card-title", food.title);
				card.setAttribute("card-modal-description", food.description);
				card.setAttribute("card-image", food.imageSrc);
				card.setAttribute("card-modal-image", food.imageModal || food.imageSrc);
				card.setAttribute("card-alt", food.altText || food.title);
				container.appendChild(card);
			});
		} catch (e) {
			container.innerHTML = "<p>No se pudo cargar la gastronomía.</p>";
		}
	}

	async loadAndRenderDropdowns() {
		try {
			const response = await fetch(
				"../../src/data/destinos/maravatio/dropdown-preguntas-frecuentes.json",
			);
			const data = await response.json();
			this.renderDropdowns(data);
		} catch (e) {
			const container = this.querySelector("#dropdowns-container");
			if (container)
				container.innerHTML = "<p>Error al cargar preguntas frecuentes.</p>";
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

		try {
			const response = await fetch(
				"../../src/data/destinos/card-opacity-destinations.json",
			);
			const data = await response.json();
			slider.setAttribute("destinations-data", JSON.stringify(data));
		} catch (e) {
			slider.innerHTML = "<p>Error al cargar destinos.</p>";
		}
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

customElements.define("page-autobus-a-maravatio", AppAutobusMaravatio);
