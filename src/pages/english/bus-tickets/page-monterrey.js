/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider-caption.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-card-open-modal.js";
import "../../../components/app-dropdown.js";
import "../../../components/app-card-destination-opacity.js";
import "../../../components/app-slider-opacity.js";
import "../../../components/app-modal-multi-image.js";
import "../../../components/app-modal-image.js";

class PageMonterrey extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../../../src/assets/img/english/bus-tickets/monterrey/overflow-images/monterrey.webp",
      "mediumImage":"../../../src/assets/img/english/bus-tickets/monterrey/overflow-images/monterrey.webp",
      "smallImage":"../../../src/assets/img/english/bus-tickets/monterrey/overflow-images/monterrey.webp",
      "captionTitle":"Travel to Monterrey: The Industrial Heart of Mexico",
      "captionText":"Discover the 'Sultan of the North' with the leading bus service. Your adventure starts here.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Bus Tickets to Monterrey</h1>
					<p class="hero__subtitle">Discover the 'Sultan of the North', a city that blends modernity, industry, and spectacular natural landscapes.</p>
				</div>
			</section>

			<section class="features">
				<div class="container">
					<h2 class="section-title">Autovías: Your Best Option for an Unforgettable Trip to Monterrey</h2>
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
					<h2 class="section-title">Mexico City → Monterrey</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Mexico City (North Terminal)</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Monterrey</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">~12 hrs</p>
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
					<h2 class="section-title">Guadalajara → Monterrey</h2>
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
									<span class="route-info__stop-name">Monterrey</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">~12 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Daily</p>
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
					<h2 class="section-title">Querétaro → Monterrey</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Querétaro</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Monterrey</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duration</p>
								<p class="detail-item__value">~9 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frequency</p>
								<p class="detail-item__value">Frequent</p>
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
					<h2 class="section-title">Monterrey Awaits: Discover the City of Mountains</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/monterrey/lugares/parque-fundidora.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Parque Fundidora</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/monterrey/lugares/paseo-santa-lucia.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Paseo Santa Lucía</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../../../src/assets/img/destinos-img/monterrey/lugares/cerro-de-la-silla.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Cerro de la Silla</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Frequently Asked Questions about your Trip to Monterrey</h2>
					<div class="faq__list">
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">What are the main bus routes to Monterrey with Autovías?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Autovías offers direct routes to Monterrey from major cities such as Mexico City, Guadalajara, and Querétaro, ensuring comfortable and safe connections.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">What services do Autovías buses to Monterrey offer?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">Nuestros autobuses cuentan con asientos reclinables, aire acondicionado, sanitarios, pantallas individuales y, en algunos servicios, Wi-Fi. Nos enfocamos en tu comodidad y seguridad durante todo el trayecto.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">How can I buy my bus tickets to Monterrey online?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">It's very easy. Just enter your city of origin, Monterrey as your destination, and your travel date in our search engine. Select the schedule and seat you prefer, and complete your purchase with a credit/debit card or at authorized points of sale.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">Are there discounts available for bus tickets to Monterrey?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">We constantly offer special promotions and discounts. We invite you to check our offers section or subscribe to our newsletter to receive the latest news and travel to Monterrey at the best price.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">What is the main Bus Terminal in Monterrey?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">The main Bus Terminal (Central de Autobuses) is located on Av. Cristóbal Colón. From there, you can easily connect to the city center and other points of interest.</p>
						</details>
					</div>
				</div>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">Take Advantage of Our Special Promotions to Monterrey!</h2>
					<p class="cta__subtitle">¡No te pierdas nuestra promoción! Hasta 5% de descuento en tu viaje de ida + 10% de descuento en tu regreso. Consulta términos y condiciones.</p>
					<a href="../promociones/monterrey.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="See all promotions to Monterrey" tabindex="0">See All Promotions</a>
				</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
    `;
  }
}
customElements.define("page-monterrey", PageMonterrey);
