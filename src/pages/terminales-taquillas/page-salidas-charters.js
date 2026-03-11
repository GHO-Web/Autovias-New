/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.0.1";
import "../../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/sliders/app-banner-slider.js";
import "../../components/carousel/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/cards/app-card-text-bg-white.js";

class PageSalidasCharters extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>

			<app-banner-slider
				slides-data='[
					{
						"id": "slide1", 
						"title": "Banner 1", 
						"image": "../src/assets/img/global/banner/web/banner-semana-santa-compra-en-tres-pasos-desc-5-mas-10.webp",
						"mediumImage": "../src/assets/img/global/banner/tablet/banner-semana-santa-compra-en-tres-pasos-desc-5-mas-10.webp", 
						"smallImage": "../src/assets/img/global/banner/mobile/banner-semana-santa-compra-en-tres-pasos-desc-5-mas-10.webp", 
						"link": "/"
					},
					{
						"id": "slide2", 
						"title": "Banner 2", 
						"image": "../src/assets/img/global/banner/web/banner-viajero-anticipado-semana-santa-30-descuento.webp", 
						"mediumImage": "../src/assets/img/global/banner/tablet/banner-viajero-anticipado-semana-santa-30-descuento.webp",
						"smallImage": "../src/assets/img/global/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso.webp", 
						"link": "/doters"
					},
					{
						"id": "slide3", 
						"title": "Banner 3", 
						"image": "../src/assets/img/global/banner/web/banner-compra-en-internet-descuento-10-de-regreso.webp", 
						"mediumImage":  "../src/assets/img/global/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso.webp",
						"smallImage":  "../src/assets/img/global/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso.webp",
						"link": "/doters"
					}
				]'
      >
      </app-banner-slider>


			<app-payments></app-payments>

			<section class="__section __section--salidas-charters">
					<app-section-title section-title="Salidas Charters"></app-section-title>
					<article class="__article-grid">
							<p class="__paragraph">Para tu comodidad Autovías te ofrece un servicio de autobuses de lujo con salidas exclusivas en hoteles y centros comerciales de la Ciudad de México y Guadalajara.</p>
							<div class="__grid-container" id="grid-cards-container"></div>
					</article>
			</section>
		`;

    await this.loadCharterCards();
  }

  async loadCharterCards() {
    try {
      // Construye la URL al archivo JSON de forma robusta usando import.meta.url
      const jsonFileUrl = new URL(
        "../../data/cards-salidas-charters-data.json",
        import.meta.url,
      );
      const response = await fetch(jsonFileUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();

      const container = this.querySelector("#grid-cards-container");
      if (container) {
        cardsData.forEach((cardInfo) => {
          const cardElement = document.createElement("app-card-text-bg-white");
          cardElement.setAttribute("card-title", cardInfo.title);
          cardElement.setAttribute("card-description", cardInfo.description);
          container.appendChild(cardElement);
        });
      } else {
        console.error("El contenedor #grid-cards-container no fue encontrado.");
      }
    } catch (error) {
      console.error(
        "Error al cargar los datos de las tarjetas de salidas charters:",
        error,
      );
    }
  }
}
customElements.define("page-salidas-charters", PageSalidasCharters);
