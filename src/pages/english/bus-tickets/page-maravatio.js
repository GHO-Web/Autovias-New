/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/sliders/app-banner-slider.js";
import "../../../components/sliders/app-banner-slider-caption.js";
import "../../../components/carousel/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/cards/app-card-open-modal.js";
import "../../../components/dropdown/app-dropdown.js";
import "../../../components/cards/app-card-destination-opacity.js";
import "../../../components/sliders/app-slider-opacity.js";
import "../../../components/modal/app-modal-multi-image.js";
import "../../../components/modal/app-modal-image.js";

class PageMaravatio extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>

			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../../../src/assets/img/english/bus-tickets/maravatio/overflow-images/maravatio.webp",
      "mediumImage":"../../../src/assets/img/english/bus-tickets/maravatio/overflow-images/maravatio.webp",
      "smallImage":"../../../src/assets/img/english/bus-tickets/maravatio/overflow-images/maravatio.webp",
      "captionTitle":"Travel to Maravatio: Comfort, Safety, and the Best Prices with Autovías",
      "captionText":"Live a new experience traveling with Autovías La Línea. Your adventure starts here.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>

			<app-payments></app-payments>

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Bus from Maravatío</h1>
					<p class="hero__subtitle">
						Connect Maravatío with other destinations by road by bus with comfort, flexible schedules, and reliable services.
					</p>
				</div>
			</section>

			<section class="features">
				<div class="container">
					<h2 class="section-title">Why travel by bus from Maravatío?</h2>
					<div class="features__grid">

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Comfort</h3>
							<p class="feature-card__description">
								Comfortable units with space to rest throughout the journey.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Safety</h3>
							<p class="feature-card__description">
								Professional drivers and units undergoing rigorous maintenance.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Affordable Prices</h3>
							<p class="feature-card__description">
								Competitive rates and various purchase options online or at the ticket office.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-clock material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Flexible schedules</h3>
							<p class="feature-card__description">
								Departures throughout the day so you can choose the one that best suits you.
							</p>
						</div>

					</div>
				</div>
			</section>

			<!-- DESTACADOS -->

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured Route Maravatío → Mexico City (Poniente)</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Maravatío / Terminal</span>
								</div>

								<div class="route-info__stop">
									<span class="route-info__stop-name">Mexico City Central Poniente</span>
									<div class="route-info__stop-icon">
										<span class="icon-place material-symbols-outlined"></span>
									</div>
								</div>
							</div>
						</div>

						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">~3 hours approx.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily (several departures)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Executive service</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured Route Maravatío → Guadalajara</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Maravatío / Terminal</span>
								</div>

								<div class="route-info__stop">
									<span class="route-info__stop-name">Guadalajara – Central</span>
									<div class="route-info__stop-icon">
										<span class="icon-place material-symbols-outlined"></span>
									</div>
								</div>
							</div>
						</div>

						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">~4 h 30 min approx.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Regular departures</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Executive service / First</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Lugares -->
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Discover in Maravatío and its surroundings</h2>
					<div class="attractions__grid">

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/maravatio/lugares/centro-historico.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Historic Center of Maravatío</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/maravatio/lugares/santuario-mariposa.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Monarch Butterfly Sanctuary (nearby)</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/maravatio/lugares/laguna.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Lagoon / Natural Spot</h3>
							</div>
						</div>

					</div>
				</div>
			</section>

			<!-- FAQ -->
			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Frequently asked questions</h2>
					<div class="faq__list">

						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">From where do the buses depart in Maravatío?</span> <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span></summary>
							<p class="faq-item__answer">Departures are from the Maravatío Bus Terminal, with several runs a day.</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">How long is the trip to Mexico City?</span> <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span></summary>
							<p class="faq-item__answer">The trip takes approximately 3 hours, depending on traffic and intermediate stops.*</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">Can I buy my tickets online?</span> <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span></summary>
							<p class="faq-item__answer">Yes, you can buy your tickets online from the Autovías search engine or at the ticket office.</p>
						</details>

					</div>
				</div>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">Travel from Maravatío!</h2>
					<p class="cta__subtitle">Quote your trip and choose the schedules and services that best suit your plans.</p>
					<a href="../destinos/autobus-a-maravatio.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">See more about the destination</a>
				</div>
			</section>

			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
		`;
  }
}
customElements.define("page-maravatio", PageMaravatio);
