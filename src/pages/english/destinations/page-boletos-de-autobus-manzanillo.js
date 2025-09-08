/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-modal-doters.js";
import "../../../components/english/app-modal-travelpass.js";
import "../../../components/english/app-destiny-slider.js";
import "../../../components/english/app-banner-multi-image.js";
import "../../../components/english/app-card-image-tag-text.js";
import "../../../components/app-section-title.js";
import "../../../components/english/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";
import "../../../js/slick.js?v=1.0.2";

class PageBoletosAutobusManzanilloEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/manzanillo/banner/Manzanillo.webp"
          image-alt="Promotional banner for Manzanillo"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Manzanillo is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/manzanillo/overflow-images/balsas.webp", "alt": "Miramar Beach"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/manzanillo/overflow-images/jilotepec.webp", "alt": "Las Hadas Marina"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/manzanillo/overflow-images/recreational.webp", "alt": "Espíritu Santo Promenade"}
          ]'
          paragraph-text="Manzanillo is a coastal paradise on Mexico’s Pacific shore, known for its golden beaches, vibrant marine life, and laid-back charm. As one of the country’s busiest ports and a favorite vacation spot, this destination blends adventure and relaxation in equal measure. From its scenic promenades and luxury marinas to its surf-friendly beaches and tropical sunsets, Manzanillo invites travelers to unwind, explore, and enjoy the rhythm of the ocean — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Manzanillo"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for México? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Manzanillo’s cuisine is a celebration of the sea — fresh, bold, and full of flavor. From spicy seafood stews to tropical desserts, every dish reflects the coastal lifestyle and culinary creativity of Colima’s Pacific frontier
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/manzanillo/food.json"></app-card-image-tag-text>
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
        <app-destiny-slider src="../../src/data/english/destinations/manzanillo/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/manzanillo/cards-explore-section.json"
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
	"page-boletos-de-autobus-manzanillo-english",
	PageBoletosAutobusManzanilloEnglish
);
