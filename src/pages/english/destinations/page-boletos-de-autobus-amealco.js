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

class PageBoletosAutobusAmealcoEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/amealco/banner/amealco.webp"
          image-alt="Promotional banner for Amealco"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Amealco is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/amealco/overflow-images/fuente.webp", "alt": "Muñeca Museum"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/amealco/overflow-images/chupicuaro.webp", "alt": "Cerro de los Gallos Park"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/amealco/overflow-images/solis.webp", "alt": "San Ildefonso Artisan Workshops"}
          ]'
          paragraph-text="Amealco is a highland town rich in Otomí tradition, nestled among pine forests and rolling hills. Known for its handmade dolls, vibrant markets, and cultural depth, this Pueblo Mágico offers a peaceful yet colorful escape. From its scenic parks and artisan workshops to its community museums and indigenous heritage, Amealco invites travelers to explore a quieter, more authentic side of Mexico — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Acámbaro"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Amealco’s cuisine is rooted in indigenous flavors and seasonal ingredients. From smoky stews to vibrant street snacks, every dish reflects the creativity and warmth of its people — offering a taste of tradition with every bite.
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/amealco/food.json"></app-card-image-tag-text>
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
        <app-section-title section-title="Explore more destinations with ETN Turistar Mexico is waiting for you."></app-section-title>
        <app-destiny-slider src="../../src/data/english/destinations/amealco/grid-text-data.json"></app-destiny-slider>
      </section>
    `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/amealco/cards-explore-section.json"
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
	"page-boletos-de-autobus-amealco-english",
	PageBoletosAutobusAmealcoEnglish
);
