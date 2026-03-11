/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/sliders/app-destiny-slider.js";
import "../../../components/english/banners/app-banner-multi-image.js";
import "../../../components/english/cards/app-card-image-tag-text.js";
import "../../../components/app-section-title.js";
import "../../../components/english/banners/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";

class PageBoletosAutobusGuadalajaraEnglish extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/guadalajara/banner/guadalajara.webp"
          image-alt="Promotional banner for guadalajara"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Guadalajara is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/guadalajara/overflow-images/parade-ground.webp", "alt": "Plaza de Armas"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/guadalajara/overflow-images/catedral.webp", "alt": "Guadalajara Cathedral"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/guadalajara/overflow-images/teatro-degollado.webp", "alt": "Teatro Degollado"}
          ]'
          paragraph-text="Guadalajara is the cultural heartbeat of western Mexico. Known as the birthplace of mariachi and tequila, this city blends colonial elegance with modern energy. From its historic plazas and cathedrals to its thriving arts scene and culinary traditions, Guadalajara offers a rich and authentic experience. Whether you're exploring its iconic architecture or enjoying local festivals, this destination invites you to discover the soul of Jalisco — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Guadalajara"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Guadalajara’s cuisine is bold, comforting, and deeply rooted in tradition. From street food to family recipes, every dish reflects the warmth and pride of the Tapatío culture. It’s a city where flavor tells stories — and every bite feels like home.
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/guadalajara/food.json"></app-card-image-tag-text>
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
        <app-section-title section-title="Explore more destinations with Autovías Mexico is waiting for you."></app-section-title>
        <app-destiny-slider src="../../src/data/english/destinations/guadalajara/grid-text-data.json"></app-destiny-slider>
      </section>
		<app-cookies-policy-english></app-cookies-policy-english>
		<app-button-whats></app-button-whats>
		<app-button-eva-trip-english></app-button-eva-trip-english>
    `;
    this._loadExploreSectionData();
  }

  async _loadExploreSectionData() {
    try {
      const response = await fetch(
        "../../src/data/english/destinations/guadalajara/cards-explore-section.json",
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
  "page-boletos-de-autobus-guadalajara-english",
  PageBoletosAutobusGuadalajaraEnglish,
);
