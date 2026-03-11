/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/sliders/app-banner-slider.js";
import "../../../components/carousel/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/cards/app-card-open-modal.js";
import "../../../components/dropdown/app-dropdown.js";
import "../../../components/cards/app-card-destination-opacity.js";
import "../../../components/sliders/app-slider-opacity.js";
import "../../../components/modal/app-modal-multi-image.js";
import "../../../components/modal/app-modal-image.js";

class AppEstadoDeMexico extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/global/banner/Atlacomulco_Banner_web.webp","mediumImage": "../../../src/assets/img/global/banner/tablet/Atlacomulco_tablet.webp", "smallImage": "./src/assets/img/global/banner/mobile/Atlacomulco_mobile.webp", "link": "#index.html/banner1"}]'
			>
			</app-banner-slider>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Travel to the State of Mexico: The Cultural and Natural Heart of Mexico</h1>
					<p class="hero__subtitle">Discover the historical richness, mountainous landscapes, and magical towns of the State of Mexico with the leading bus service. Your adventure awaits!</p>
				</div>
			</section>

			<section class="features">
				<div class="container">
					<h2 class="section-title">Autovías: Your Best Option for an Unforgettable Trip to the State of Mexico</h2>
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
					<h2 class="section-title">Mexico City → Toluca</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Mexico City</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Toluca</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">1 hr</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Very Frequent</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus Type</p>
								<p class="detail-item__value">First Class / Economy</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Morelia → Toluca</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Morelia</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Toluca</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">3 hrs</p>
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
					<h2 class="section-title">Guadalajara → Toluca</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Guadalajara</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Toluca</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">5.5 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Bus Type</p>
								<p class="detail-item__value">Double-decker / Luxury</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Must-sees in the State of Mexico: Culture, Nature, and Adventure</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/estado-de-mexico/lugares/teotihuacan.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Teotihuacan Pyramids</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/estado-de-mexico/lugares/valle-de-bravo.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Valle de Bravo</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/estado-de-mexico/lugares/nevado-de-toluca.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Nevado de Toluca</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Frequently Asked Questions about your Trip to the State of Mexico</h2>
					<div class="faq__list">
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">What are the main bus routes to the State of Mexico with Autovías?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Autovías connects to key cities like Toluca, Atlacomulco, and Ixtapan de la Sal from origins such as Mexico City, Morelia, Guadalajara, and Querétaro.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">What services do Autovías buses to the State of Mexico offer?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">Our buses have reclining seats, air conditioning, restrooms, individual screens, and, on some services, Wi-Fi. We focus on your comfort and safety throughout the journey.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">How can I buy my bus tickets to the State of Mexico online?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">It's very easy. Just enter your city of origin, your destination in the State of Mexico, and your travel date in our search engine. Select the schedule and seat you prefer, and complete your purchase.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">Are there discounts available for bus tickets to the State of Mexico?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">We constantly offer special promotions and discounts. We invite you to check our offers section or subscribe to our newsletter to receive the latest news.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">What is the main terminal in the State of Mexico?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">The Toluca Bus Terminal is one of the most important and best-connected in the state, serving as a hub for travel throughout the region.</p>
						</details>
					</div>
				</div>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">Take Advantage of Our Special Promotions to the State of Mexico!</h2>
					<p class="cta__subtitle">¡No te pierdas nuestra promoción! Hasta 5% de descuento en tu viaje de ida + 10% de descuento en tu regreso. Consulta términos y condiciones.</p>
					<a href="../promociones/estado-de-mexico.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="See all promotions to the State of Mexico" tabindex="0">See All Promotions</a>
				</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
    `;
  }
}
customElements.define("page-estado-de-mexico", AppEstadoDeMexico);
