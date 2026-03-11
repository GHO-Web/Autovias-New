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
import "../../../components/faqs/app-dropdown.js";
import "../../../components/cards/app-card-destination-opacity.js";
import "../../../components/sliders/app-slider-opacity.js";
import "../../../components/modal/app-modal-multi-image.js";
import "../../../components/modal/app-modal-image.js";

class PageIxtapa extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../../../src/assets/img/english/bus-tickets/ixtapa/overflow-images/ixtapa.webp",
      "mediumImage":"../../../src/assets/img/english/bus-tickets/ixtapa/overflow-images/ixtapa.webp",
      "smallImage":"../../../src/assets/img/english/bus-tickets/ixtapa/overflow-images/ixtapa.webp",
      "captionTitle":"Travel to Ixtapa Zihuatanejo: Comfort, Safety, and the Best Prices with Autovías",
      "captionText":"Discover this paradise with the leading bus service. Your adventure starts here.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Bus to Ixtapa Zihuatanejo</h1>
					<p class="hero__subtitle">Discover the hidden treasure of the Pacific coast, a destination that offers the perfect balance between traditional charm and modern luxury.</p>
				</div>
			</section>
			<section class="features">
				<div class="container">
					<h2 class="section-title">Why travel by bus to Ixtapa Zihuatanejo?</h2>
					<div class="features__grid">
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Premium Comfort</h3>
							<p class="feature-card__description">Autovías offers you a first-class service, ensuring your trip is as comfortable as it is pleasant.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Savings</h3>
							<p class="feature-card__description">Take advantage of online discounts (10% one-way, 15% round-trip), the Early Bird fare, and 10% on round-trip tickets at the ticket office.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Hassle-free Travel</h3>
							<p class="feature-card__description">Travel smoothly with frequent departures from Mexico City, Guadalajara, and other points in the Bajío region.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-montain material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Unforgettable Landscapes</h3>
							<p class="feature-card__description">Explore the jewel of the Pacific coast, from the serenity of Zihuatanejo to the sophisticated facilities of Ixtapa.</p>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured Route Mexico City → Ixtapa (via Acapulco)</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Mexico City</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Ixtapa Zihuatanejo</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">Check schedules</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Frequent departures</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus Type</p>
								<p class="detail-item__value">Luxury bus</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured Route Guadalajara → Ixtapa (via Acapulco)</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Guadalajara</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Ixtapa Zihuatanejo</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">Check schedules</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Frequent departures</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus Type</p>
								<p class="detail-item__value">Luxury bus</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Discover Ixtapa Zihuatanejo</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/ixtapa/lugares/playa-la-ropa.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">La Ropa Beach</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/ixtapa/lugares/isla-ixtapa.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Snorkeling in Ixtapa Island</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/ixtapa/lugares/playa-el-palmar-2.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">El Palmar Beach</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Frequently Asked Questions</h2>
					<div class="faq__list">
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">How do I get to Ixtapa Zihuatanejo from Mexico City?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">One of the most popular routes is with Autovías, taking a bus to Acapulco Terminal Diamante and connecting from there. We recommend booking in advance.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">What can I do in Ixtapa Zihuatanejo?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">You can enjoy La Ropa Beach, go snorkeling in Ixtapa Island, visit the Archaeological Museum, or stroll along the bike path.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">What services do the buses include?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Our buses feature individual screens, individual seats, leg rests, restrooms, electrical outlets, and a cafeteria.</p>
						</details>
					</div>
				</div>
			</section>
			<section class="cta">
				<div class="container">
					<h2 class="cta__title">Travel to Ixtapa Zihuatanejo with Autovías!</h2>
					<p class="cta__subtitle">Your adventure on the Pacific coast awaits. Don't wait any longer and plan your trip today.</p>
					<a href="../destinos/autobus-a-ixtapa-zihuatanejo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Go to see more about the destination" tabindex="0">See more about the destination</a>
				</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
    `;
  }
}
customElements.define("page-ixtapa", PageIxtapa);
