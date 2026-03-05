/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.0.1";
import "../../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-banner-slider-caption.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";

class PageIxtapa extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../src/assets/img/img-landing/guadalajara.webp",
      "mediumImage":"../src/assets/img/img-landing/guadalajara.webp",
      "smallImage":"../src/assets/img/img-landing/guadalajara.webp",
      "captionTitle":"Viaja a Ixtapa Zihuatanejo: Confort, Seguridad y los Mejores Precios con Autovías",
      "captionText":"Descubre este paraiso con el servicio de autobús líder. Tu aventura comienza aquí.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Autobús a Ixtapa Zihuatanejo</h1>
					<p class="hero__subtitle">Descubre el tesoro escondido de la costa del Pacífico, un destino que ofrece el equilibrio perfecto entre el encanto tradicional y el lujo moderno.</p>
				</div>
			</section>
			<section class="features">
				<div class="container">
					<h2 class="section-title">¿Por qué viajar en autobús a Ixtapa Zihuatanejo?</h2>
					<div class="features__grid">
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Comodidad Premium</h3>
							<p class="feature-card__description">Autovías te ofrece un servicio de primera clase, garantizando que tu viaje sea tan cómodo como placentero.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Ahorro</h3>
							<p class="feature-card__description">Aprovecha descuentos online (10% ida, 15% regreso), la tarifa de Viajero Anticipado y 10% en viaje redondo en taquilla.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Viaje sin complicaciones</h3>
							<p class="feature-card__description">Viaja sin contratiempos con salidas frecuentes desde la Ciudad de México, Guadalajara y otros puntos del Bajío.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-montain material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Paisajes inolvidables</h3>
							<p class="feature-card__description">Explora la joya de la costa del Pacífico, desde la serenidad de Zihuatanejo hasta las sofisticadas instalaciones de Ixtapa.</p>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Ciudad de México → Ixtapa (vía Acapulco)</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Ciudad de México</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Ixtapa Zihuatanejo</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">Consulta horarios</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Salidas frecuentes</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Autobús de lujo</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Guadalajara → Ixtapa (vía Acapulco)</h2>
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">Consulta horarios</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Salidas frecuentes</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Autobús de lujo</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Descubre en Ixtapa Zihuatanejo</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/ixtapa/lugares/playa-la-ropa.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Playa La Ropa</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/ixtapa/lugares/isla-ixtapa.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Snorkel en Isla Ixtapa</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/ixtapa/lugares/playa-el-palmar-2.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Playa El Palmar</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Preguntas frecuentes</h2>
					<div class="faq__list">
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Cómo llego a Ixtapa Zihuatanejo desde Ciudad de México?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Una de las rutas más populares es con Autovías, tomando un autobús a Acapulco Terminal Diamante y conectando desde allí. Te recomendamos reservar con anticipación.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Qué puedo hacer en Ixtapa Zihuatanejo?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">Puedes disfrutar de Playa La Ropa, practicar snorkel en Isla Ixtapa, visitar el Museo Arqueológico o pasear por la ciclopista.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">¿Qué servicios incluyen los autobuses?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Nuestros autobuses cuentan con pantallas individuales, asientos individuales, descanso para piernas, sanitarios, conexiones eléctricas y cafetería.</p>
						</details>
					</div>
				</div>
			</section>
			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Ixtapa Zihuatanejo con Autovías!</h2>
					<p class="cta__subtitle">Tu aventura en la costa del Pacífico te espera. No esperes más y planifica tu viaje hoy mismo.</p>
					<a href="../destinos/autobus-a-ixtapa-zihuatanejo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
				</div>
			</section>
			
			
    `;
	}
}
customElements.define("page-ixtapa", PageIxtapa);
