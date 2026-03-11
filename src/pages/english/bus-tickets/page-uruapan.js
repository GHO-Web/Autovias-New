/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-banner-slider-caption.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-card-open-modal.js";
import "../../../components/app-dropdown.js";
import "../../../components/app-card-destination-opacity.js";
import "../../../components/app-slider-opacity.js";
import "../../../components/app-modal-multi-image.js";
import "../../../components/app-modal-image.js";

class PageUruapan extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>

			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../../../src/assets/img/english/bus-tickets/uruapan/overflow-images/uruapan.webp",
      "mediumImage":"../../../src/assets/img/english/bus-tickets/uruapan/overflow-images/uruapan.webp",
      "smallImage":"../../../src/assets/img/english/bus-tickets/uruapan/overflow-images/uruapan.webp",
      "captionTitle":"Travel to Uruapan: Discover the magic of this destination",
      "captionText":"Travel with Autovías La Línea and live the best experience. Your adventure starts here.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>

			<app-payments></app-payments>

			<!-- HERO -->
			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Bus from Uruapan</h1>
					<p class="hero__subtitle">
						Travel from Uruapan by bus with comfort, safety, and multiple daily schedules.
					</p>
				</div>
			</section>

			<!-- FEATURES -->
			<section class="features">
				<div class="container">
					<h2 class="section-title">Why travel by bus from Uruapan?</h2>
					<div class="features__grid">

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Comfort</h3>
							<p class="feature-card__description">
								Modern buses with reclining seats and more space for a comfortable trip.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Savings</h3>
							<p class="feature-card__description">
								Buy online and take advantage of preferential rates, discounts, and special promotions.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Safe trip</h3>
							<p class="feature-card__description">
								Certified drivers and monitored units throughout the journey.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-montain material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Connect destinations</h3>
							<p class="feature-card__description">
								Departures to different parts of the country from the Uruapan terminal.
							</p>
						</div>

					</div>
				</div>
			</section>

			<!-- ROUTE CDMX PONIENTE -->
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">
						Featured Route Uruapan → Mexico City Central Poniente
					</h2>

					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Uruapan Central</span>
								</div>

								<div class="route-info__stop">
									<span class="route-info__stop-name">CDMX Central Poniente</span>
									<div class="route-info__stop-icon">
										<span class="icon-place material-symbols-outlined"></span>
									</div>
								</div>
							</div>
						</div>

						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">6 hours approx.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Executive service</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- ROUTE CDMX NORTE -->
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">
						Featured Route Uruapan → Mexico City Central Norte
					</h2>

					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Uruapan Central</span>
								</div>

								<div class="route-info__stop">
									<span class="route-info__stop-name">CDMX Central Norte</span>
									<div class="route-info__stop-icon">
										<span class="icon-place material-symbols-outlined"></span>
									</div>
								</div>
							</div>
						</div>

						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">6 h 30 min approx.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Executive service</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- ATTRACTIONS -->
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Discover in Uruapan</h2>

					<div class="attractions__grid">

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/uruapan/lugares/cupatitzio.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Barranca del Cupatitzio National Park</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/uruapan/lugares/tingambato.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Tingambato Archaeological Zone</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/uruapan/lugares/tzararacua.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Tzaráracua Waterfall</h3>
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
							<summary class="faq-item__summary">
								<span class="faq-item__question">
									From where do the buses depart in Uruapan?
								</span>
								<span class="faq-item__icon">
									<span class="icon-arrow-down material-symbols-outlined"></span>
								</span>
							</summary>
							<p class="faq-item__answer">
								Departures are from the Uruapan Bus Terminal.
							</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary">
								<span class="faq-item__question">
									Are there runs every day?
								</span>
								<span class="faq-item__icon">
									<span class="icon-arrow-down material-symbols-outlined"></span>
								</span>
							</summary>
							<p class="faq-item__answer">
								Yes, there are daily runs with different schedules depending on the destination.
							</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary">
								<span class="faq-item__question">
									Can I buy my tickets online?
								</span>
								<span class="faq-item__icon">
									<span class="icon-arrow-down material-symbols-outlined"></span>
								</span>
							</summary>
							<p class="faq-item__answer">
								Yes, you can buy your tickets online safely and choose the schedule that best suits you.
							</p>
						</details>

					</div>
				</div>
			</section>

			<!-- CTA -->
			<section class="cta">
				<div class="container">
					<h2 class="cta__title">Travel to Uruapan with Autovías!</h2>
					<p class="cta__subtitle">
						Pack your bags and discover everything this city has to offer.
					</p>
					<a href="../destinos/autobus-a-uruapan.html"
						class="btn btn--primary btn--large"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Go to see more about the destination">
						See more about the destination
					</a>
				</div>
			</section>

			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
    `;
  }
}

customElements.define("page-uruapan", PageUruapan);
