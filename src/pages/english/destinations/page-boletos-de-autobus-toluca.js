/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-destiny-slider.js";
import "../../../components/english/app-banner-multi-image.js";
import "../../../components/english/app-card-image-tag-text.js";
import "../../../components/app-section-title.js";
import "../../../components/english/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";
import "../../../js/slick.js?v=1.0.2";

class PageBoletosAutobusTolucaEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/toluca/banner/Toluca.webp"
          image-alt="Promotional banner for Toluca"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Toluca is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/toluca/overflow-images/center.webp", "alt": "Cosmovitral Botanical Garden"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/tolcua/overflow-images/aqueduct.webp", "alt": "Nevado de Toluca National Park"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/toluca/overflow-images/tarascas.webp", "alt": "Plaza de los Mártires"}
          ]'
          paragraph-text="Toluca is a high-altitude capital with a bold personality and rich cultural legacy. Known for its dramatic landscapes, vibrant markets, and artistic flair, this city blends colonial elegance with modern energy. From its iconic botanical glass murals and volcanic peaks to its bustling civic squares and artisan traditions, Toluca invites travelers to explore a destination full of contrast, creativity, and color — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Toluca"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Hungry for México? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Toluca’s cuisine is bold, rustic, and deeply rooted in regional tradition. From spicy sausages to sweet confections and seasonal drinks, every dish reflects the city’s agricultural heritage and culinary pride.
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/toluca/food.json"></app-card-image-tag-text>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Travel Mexico in style with Autovías La Línea — comfort and reliability from start to finish"></app-section-title>
        <p class="text-description-list">Traveling through Mexico doesn’t have to be complicated. With Autovías La Línea, every journey becomes part of the experience.</p>

        <ul class="text-list">
          <li class="item-list">🛋️ Luxury comfort: unwind in reclining seats, enjoy onboard entertainment, and stay connected with free Wi-Fi.</li>
          <li class="item-list">🛡️ Superior safety: our drivers are certified, and every vehicle is monitored in real time.</li>
          <li class="item-list">⏱️ Reliability and punctuality: frequent departures, accurate schedules, and service that delivers on its promise.</li>
          <li class="item-list">🧳 Hassle-free luggage: generous onboard allowance and spacious storage compartments.</li>
        </ul>
      </section>
        
      <section class="__section">
        <app-section-title section-title="Explore more destinations with Autovías La Línea — Mexico is waiting for you."></app-section-title>
        <app-destiny-slider src="../../src/data/english/destinations/toluca/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/toluca/cards-explore-section.json"
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const cardsData = await response.json();
			const exploreSection = this.querySelector("app-explore-section");
			if (exploreSection) {
				exploreSection.setAttribute("cards-data", JSON.stringify(cardsData));
			}
		} catch (error) {
			console.error("Could not load explore section data:", error);
		}
	}
}
customElements.define(
	"page-boletos-de-autobus-toluca-english",
	PageBoletosAutobusTolucaEnglish
);
