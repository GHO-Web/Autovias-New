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

class PageQueretaro extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../../../src/assets/img/english/bus-tickets/queretaro/overflow-images/queretaro.webp",
      "mediumImage":"../../../src/assets/img/english/bus-tickets/queretaro/overflow-images/queretaro.webp",
      "smallImage":"../../../src/assets/img/english/bus-tickets/queretaro/overflow-images/queretaro.webp",
      "captionTitle":"Travel to Querétaro: Enjoy comfort, safety, and the best prices with Autovías",
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
					<h1 class="hero__title">Bus to Querétaro</h1>
					<p class="hero__subtitle">Discover Querétaro: the colonial jewel of the Bajío, a city that enchants with its rich history and impressive architecture.</p>
				</div>
			</section>
			
			<section class="features">
				<div class="container">
					<h2 class="section-title">Why travel by bus to Querétaro?</h2>
					<div class="features__grid">
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-armchair material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Premium Comfort</h3>
							<p class="feature-card__description">Autovías is your best option for a comfortable and safe trip to this fascinating colonial destination.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-pig material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Savings</h3>
							<p class="feature-card__description">Take advantage of online discounts (5% one-way, 10% round trip), the Early Traveler fare, and 10% on round trips at the ticket office.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-travel-security material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Hassle-free travel</h3>
							<p class="feature-card__description">Travel with the luxury bus line Autovías and arrive at your destination without any setbacks.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-montain material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Unforgettable landscapes</h3>
							<p class="feature-card__description">Explore cobblestone streets, the Aqueduct, museums and enjoy its vibrant gastronomic offer.</p>
						</div>
					</div>
				</div>
			</section>
			
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured route Mexico City Central North → Querétaro</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div> <span class="route-info__stop-name">Ciudad de México Central Norte</span>
								</div>
								<div class="route-info__stop"> <span class="route-info__stop-name">Querétaro</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">3 hours</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily (19 runs)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Double decker / One floor</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured route Monterrey Central → Querétaro</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div> <span class="route-info__stop-name">Monterrey Central</span>
								</div>
								<div class="route-info__stop"> <span class="route-info__stop-name">Querétaro</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">9 hours 20 minutes</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily (7 runs)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Double decker / One floor</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured route Acapulco → Querétaro</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div> <span class="route-info__stop-name">Acapulco</span>
								</div>
								<div class="route-info__stop"> <span class="route-info__stop-name">Querétaro</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">8 hours</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily (3 runs)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Double decker / One floor</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured route Aguascalientes → Querétaro</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div> <span class="route-info__stop-name">Aguascalientes</span>
								</div>
								<div class="route-info__stop"> <span class="route-info__stop-name">Querétaro</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">4 hours</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily (5 runs)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Luxury bus</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Featured route Puebla → Querétaro</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div> <span class="route-info__stop-name">Puebla</span>
								</div>
								<div class="route-info__stop"> <span class="route-info__stop-name">Querétaro</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">4 hours 15 minutes</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily (13 runs)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus type</p>
								<p class="detail-item__value">Luxury bus</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Discover in Queretaro</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/queretaro/lugares/centro-historico-queretaro.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Historic Center of Queretaro</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/queretaro/lugares/acueducto-queretaro.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Aqueduct Queretaro</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/queretaro/lugares/pena-de-bernal.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Peña de Bernal</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Frequently asked questions</h2>
					<div class="faq__list">
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">How much is the bus ticket from Mexico City Central North to Queretaro?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">The cheap bus ticket is from $405.00 MXN*. The trip lasts 2 hours and 46 minutes. Fares subject to availability.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">How much is the bus ticket from Monterrey Central to Queretaro?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">The cheap bus ticket costs $1,005.00 MXN. The trip lasts 9 hours and 20 minutes. *Fares subject to availability.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">What services do the buses include?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Our buses have individual screens, individual seats, leg rests, restrooms, electrical outlets and a cafeteria.</p>
						</details>
					</div>
				</div>
			</section>
			
			<section class="cta">
				<div class="container">
					<h2 class="cta__title">Travel to Queretaro with Autovias!</h2>
					<p class="cta__subtitle">Pack your bags and discover everything this wonderful city has to offer. Your adventure is just a click away.</p> <a href="../destinos/autobus-a-queretaro.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Go see more about the destination" tabindex="0">See more about the destination</a>
				</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
        `;
  }
}
customElements.define("page-queretaro", PageQueretaro);
