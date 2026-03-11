/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/english/app-destiny-slider.js";
import "../../../components/english/app-banner-multi-image.js";
import "../../../components/english/app-card-image-tag-text.js";
import "../../../components/app-section-title.js";
import "../../../components/english/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";

class PageBoletosAutobusMoreliaEnglish extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-travelpass-english></app-modal-travelpass-english>
      <app-modal-doters-english></app-modal-doters-english>
      <div class="__first-section">
        <app-banner-image
          image-src="../../src/assets/img/english/destinations/morelia/banner/Morelia.webp"
          image-alt="Promotional banner for Morelia"
        ></app-banner-image>
      </div>
      <section class="__section">
        <app-description-destination
          title-text="Morelia is waiting. Autovías La Línea will take you there."
          image-data='[
            {"id": "1", "src": "../../src/assets/img/english/destinations/morelia/overflow-images/center.webp", "alt": "Clavijero Cultural Center"},
            {"id": "2", "src": "../../src/assets/img/english/destinations/morelia/overflow-images/aqueduct.webp", "alt": "Morelia Aqueduct"},
            {"id": "3", "src": "../../src/assets/img/english/destinations/morelia/overflow-images/tarascas.webp", "alt": "Tarascas Fountain"}
          ]'
          paragraph-text="Morelia is a colonial masterpiece and the cultural capital of Michoacán. With its pink stone architecture, UNESCO-listed historic center, and vibrant arts scene, this city blends elegance and authenticity. From its iconic aqueduct and leafy boulevards to its museums, plazas, and artisan markets, Morelia invites travelers to explore a refined yet welcoming side of Mexico — with style and peace of mind."
        ></app-description-destination>
      </section>
      <section class="__section">
        <app-section-title section-title="Explore the Highlights of Morelia"></app-section-title>
        <app-explore-section></app-explore-section>
      </section>
        
        
      <section class="__section">
        <app-section-title section-title="Hungry for México? Start here."></app-section-title>
        <app-banner-multi-image></app-banner-multi-image>
        <p class="text-description">
          Savor the essence of Mexico in every bite.</br>
          Morelia’s cuisine is a fusion of Purépecha heritage and colonial influence. From slow-cooked meats to delicate tamales and rich desserts, every dish reflects the city’s depth, warmth, and culinary pride.
        </p>
        <app-card-image-tag-text data-src="../../src/data/english/destinations/morelia/food.json"></app-card-image-tag-text>
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
        <app-destiny-slider src="../../src/data/english/destinations/morelia/grid-text-data.json"></app-destiny-slider>
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
        "../../src/data/english/destinations/morelia/cards-explore-section.json",
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
  "page-boletos-de-autobus-morelia-english",
  PageBoletosAutobusMoreliaEnglish,
);
