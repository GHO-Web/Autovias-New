/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/sliders/app-banner-slider-caption.js";
import "../../../components/carousel/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/cards/app-card-open-modal.js";
import "../../../components/dropdown/app-dropdown.js";
import "../../../components/cards/app-card-destination-opacity.js";
import "../../../components/sliders/app-slider-opacity.js";
import "../../../components/modal/app-modal-multi-image.js";
import "../../../components/modal/app-modal-image.js";

class PageMorelia extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../../../src/assets/img/english/bus-tickets/morelia/overflow-images/morelia.webp",
      "mediumImage":"../../../src/assets/img/english/bus-tickets/morelia/overflow-images/morelia.webp",
      "smallImage":"../../../src/assets/img/english/bus-tickets/morelia/overflow-images/morelia.webp",
      "captionTitle":"Travel to Morelia: Enjoy comfort, safety, and the best prices with Autovías",
      "captionText":"Live a new travel experience. Your adventure starts here.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>
			<app-payments></app-payments>
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Bus Tickets to Morelia</h1>
					<p class="hero__subtitle">Discover the charm of the Michoacan capital with the leading bus service. Your adventure starts here.</p>
				</div>
			</section>

			<section class="features">
				<div class="container">
					<h2 class="section-title">Autovías: Your Best Option for an Unforgettable Trip to Morelia</h2>
					<div class="features__grid">
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Maximum Comfort</h3>
							<p class="feature-card__description">Reclining seats, ample space, and an ideal environment to relax throughout the journey.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Guaranteed Safety</h3>
							<p class="feature-card__description">Modern fleet, rigorous maintenance, and professional drivers for your peace of mind.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Fair Prices</h3>
							<p class="feature-card__description">Find competitive rates and access to exclusive promotions for your budget.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-clock material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Flexible Schedules</h3>
							<p class="feature-card__description">A wide variety of schedules so that your trip fits perfectly into your agenda.</p>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Mexico City → Morelia</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Mexico City (West / North Terminal)</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Morelia</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">4.5 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Frequent</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus Type</p>
								<p class="detail-item__value">Luxury / First Class</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Guadalajara → Morelia</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Guadalajara</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Morelia</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">3.5 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily (Fast and comfortable)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus Type</p>
								<p class="detail-item__value">First Class</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Querétaro → Morelia</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Querétaro</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Morelia</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">2.5 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Very Frequent</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus Type</p>
								<p class="detail-item__value">First Class</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Morelia Awaits: Discover the City of Pink Quarry</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/morelia/lugares/catedral.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Morelia Cathedral (Pink Quarry)</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/morelia/lugares/acueducto3.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Morelia Aqueduct</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/morelia/lugares/callejon3.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Candy Museum and Romance Alley</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Frequently Asked Questions about your Trip to Morelia</h2>
					<div class="faq__list">
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">What are the main bus routes to Morelia with Autovías?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Autovías offers direct routes to Morelia from major cities such as Mexico City (West and North Terminals), Guadalajara, Querétaro, and many more, ensuring comfortable and safe connections.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">What services do Autovías buses to Morelia offer?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">Our buses have reclining seats, air conditioning, restrooms, individual screens, and, on some services, Wi-Fi. We focus on your comfort and safety throughout the journey.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">How can I buy my bus tickets to Morelia online?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">It's very easy. Just enter your city of origin, Morelia as your destination, and your travel date in our search engine. Select the schedule and seat you prefer, and complete your purchase with a credit/debit card or at authorized points of sale.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">Are there discounts available for bus tickets to Morelia?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">We constantly offer special promotions and discounts. We invite you to check our offers section or subscribe to our newsletter to receive the latest news and travel to Morelia at the best price.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">What is the Bus Terminal in Morelia?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">The main Bus Terminal in Morelia is located at Periférico Paseo de la República 5555, Félix Ireta. From there, you can easily access the Historic Center and other points of interest.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">How far in advance should I buy my tickets to Morelia?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">We recommend buying your tickets as far in advance as possible, especially during high seasons or holidays, to secure your spot and, sometimes, get better prices.</p>
						</details>
					</div>
				</div>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">Take Advantage of Our Special Promotions to Morelia!</h2>
					<p class="cta__subtitle">Don't miss our promotion! Up to 5% discount on your one-way trip + 10% discount on your return. Check terms and conditions.</p>
					<a href="../promociones/morelia.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="See all promotions to Morelia" tabindex="0">See All Promotions</a>
				</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>

    `;
  }
}
customElements.define("page-morelia", PageMorelia);
