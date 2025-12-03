/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";
import "../../js/slick.js?v=1.0.0";

class PageGuadalajara extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
			<app-banner-slider
					slides-data='[
						{"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/banner/web/bw-boleto-electronico-etn.webp","mediumImage": "../../../src/assets/img/banner/tablet/home-doters.webp", "smallImage": "../../../src/assets/img/banner/movil/home-doters.webp", "link": "#index.html/banner1"},
						{"id": "slide2", "title": "Banner 2", "image": "../../../src/assets/img/banner/web/bw-metodos-de-pago-etn.webp", "mediumImage": "../../../src/assets/img/banner/tablet/home-pago.webp","smallImage": "../../../src/assets/img/banner/movil/home-pago.webp", "link": "#index.html/banner2"},
						{"id": "slide3", "title": "Banner 3", "image": "../../../src/assets/img/banner/web/bw-sorteo-doters-aniversario-etn.webp", "mediumImage": "../../../src/assets/img/banner/tablet/home-verano.webp","smallImage": "../../../src/assets/img/banner/movil/home-verano.webp", "link": "#index.html/banner3"}
					]'
			>
			</app-banner-slider>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Autobús a Guadalajara</h1>
					<p class="hero__subtitle">Guadalajara, la Perla de Occidente, es un destino vibrante lleno de historia, cultura y entretenimiento.</p>
				</div>
			</section>
			<section class="features">
				<div class="container">
					<h2 class="section-title">¿Por qué viajar en autobús a Guadalajara?</h2>
					<div class="features__grid">
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Comodidad Premium</h3>
							<p class="feature-card__description">Viaja en autobuses equipados con todas las comodidades, asientos reclinables y un servicio de primera.</p>
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
							<p class="feature-card__description">Llega a la Central Nueva Guadalajara, ubicada estratégicamente para ofrecerte fácil acceso a los principales puntos de la ciudad.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-montain material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Paisajes inolvidables</h3>
							<p class="feature-card__description">Disfruta del Teatro Degollado, el Instituto Cultural Cabañas y la famosa Plaza de los Mariachis.</p>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Ciudad de México Central Norte → Guadalajara</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Ciudad de México Central Norte</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Guadalajara</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">7 horas</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (13 corridas)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Doble piso</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Querétaro → Guadalajara</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Querétaro</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Guadalajara</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">4 horas 30 minutos</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (11 corridas)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Doble piso</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado León Guanajuato → Guadalajara</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">León Guanajuato</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Guadalajara</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">3 horas</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (11 corridas)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Doble piso / Un piso</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Aguascalientes → Guadalajara</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Aguascalientes</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Guadalajara</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">3 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria</p>
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
					<h2 class="section-title">Trayecto destacado Morelia → Guadalajara</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Morelia</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Guadalajara</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">4 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria</p>
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
					<h2 class="section-title">Descubre en Guadalajara</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/guadalajara/centrohistorico1.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Centro Histórico</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/guadalajara/mercadolibertad3.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Mercado Libertad</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/guadalajara/zoologicogdl4.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Zoológico de Guadalajara</h3>
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
							<summary class="faq-item__summary"><span class="faq-item__question">¿Cuánto cuesta el boleto de autobús de la Ciudad de México Central Norte a Guadalajara?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">El boleto de autobús barato es desde $1,021.50 MXN*. El viaje dura 7 horas. Tarifas sujetas a disponibilidad.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Cuánto cuesta el boleto de autobús de Querétaro a Guadalajara?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">El boleto de autobús barato tiene un costo de $747.00 MXN . El viaje dura 4 horas 30 minutos. *Las tarifas sujetas a disponibilidad.</p>
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
					<h2 class="cta__title">¡Viaja a Guadalajara con Autovías!</h2>
					<p class="cta__subtitle">No esperes más y planifica tu viaje hoy mismo. Tu aventura en la Perla de Occidente está a solo un clic.</p>
					<a href="../destinos/autobus-a-guadalajara.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
				</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
    `;
	}
}
customElements.define("page-guadalajara", PageGuadalajara);
