/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
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

class AppAtlacomulco extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>
      <app-cotiza></app-cotiza>
			<app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/global/banner/metodos_pago_web.webp","mediumImage": "../src/assets/img/global/banner/tablet/metodos_pago_tablet.webp", "smallImage": "../src/assets/img/global/banner/mobile/metodos_pago_mobile.webp", "link": "#index.html/banner1"},
					{"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/promociones/doters/Doters_web.webp", "mediumImage": "../src/assets/img/global/banner/tablet/doters_tablet.webp","smallImage": "../src/assets/img/global/banner/mobile/Doters_mobile.webp", "link": "#index.html/banner2"},
					{"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/global/banner/verano_web.webp", "mediumImage": "../src/assets/img/global/banner/tablet/verano_tablet.webp","smallImage": "../src/assets/img/global/banner/mobile/Verano_mobile.webp", "link": "#index.html/banner3"}
					]'
			>
			</app-banner-slider>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Viaja a Atlacomulco: Conecta con el Corazón del Estado de México</h1>
					<p class="hero__subtitle">Descubre la esencia de Atlacomulco con el servicio de autobús líder. Tu viaje seguro y cómodo comienza aquí.</p>
				</div>
			</section>

			<section class="features">
				<div class="container">
					<h2 class="section-title">Autovías: Tu Mejor Opción para un Viaje Confiable a Atlacomulco</h2>
					<div class="features__grid">
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Máxima Comodidad</h3>
							<p class="feature-card__description">Asientos reclinables, amplio espacio y un ambiente ideal para relajarte durante todo el trayecto.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Seguridad Garantizada</h3>
							<p class="feature-card__description">Flota moderna, mantenimientos rigurosos y conductores profesionales para tu tranquilidad.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Precios Justos</h3>
							<p class="feature-card__description">Encuentra tarifas competitivas y acceso a promociones exclusivas para tu bolsillo.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-clock material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Horarios Flexibles</h3>
							<p class="feature-card__description">Gran variedad de horarios para que tu viaje se ajuste perfectamente a tu agenda.</p>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Ciudad de México → Atlacomulco</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Ciudad de México (Terminal Poniente / Norte)</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Atlacomulco</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">2 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Frecuente</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Primera Clase</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Morelia → Atlacomulco</h2>
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
									<span class="route-info__stop-name">Atlacomulco</span>
									<div class="route-info__stop-icon">
										<span class="icon-place" material-symbols-outlined></span>
									</div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">2.5 hrs</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Lujo / Primera</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Toluca → Atlacomulco</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
									<span class="route-info__stop-name">Toluca</span>
								</div>
								<div class="route-info__stop">
									<span class="route-info__stop-name">Atlacomulco</span>
									<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined></span></div>
								</div>
							</div>
						</div>
						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">1 hr</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Muy Frecuente</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Económico / Primera</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Imperdibles en Atlacomulco: Tradición y Desarrollo en el Estado de México</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/atlacomulco/lugares/parroquia-guadalupe.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Parroquia de Nuestra Señora de Guadalupe</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/atlacomulco/lugares/parque-estatal.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Parque de la Cultura y la Identidad</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/atlacomulco/lugares/mercado-municipal.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Mercado Municipal</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Preguntas Frecuentes sobre tu Viaje a Atlacomulco</h2>
					<div class="faq__list">
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Cuáles son las principales rutas de autobús a Atlacomulco con Autovías?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Autovías ofrece rutas directas a Atlacomulco desde ciudades importantes como Ciudad de México (Terminal Poniente y Norte), Morelia, Querétaro, y otras localidades del Estado de México, garantizando conexiones cómodas y seguras.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Qué servicios ofrecen los autobuses de Autovías a Atlacomulco?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">Nuestros autobuses cuentan con asientos reclinables, aire acondicionado, sanitarios, pantallas individuales y, en algunos servicios, Wi-Fi. Nos enfocamos en tu comodidad y seguridad durante todo el trayecto.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">¿Cómo puedo comprar mis boletos de autobús a Atlacomulco en línea?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Es muy fácil. Solo ingresa tu ciudad de origen, Atlacomulco como destino y la fecha de tu viaje en nuestro buscador. Selecciona el horario y asiento que prefieras, y finaliza tu compra con tarjeta de crédito/débito o en puntos de venta autorizados.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">¿Hay descuentos disponibles para boletos de autobús a Atlacomulco?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">Constantemente ofrecemos promociones y descuentos especiales. Te invitamos a revisar nuestra sección de ofertas o suscribirte a nuestro newsletter para recibir las últimas novedades y viajar a Atlacomulco al mejor precio.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"> <span class="faq-item__question">¿Cuál es la Terminal de Autobuses en Atlacomulco?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">La Central de Autobuses de Atlacomulco se encuentra convenientemente ubicada para facilitar tu acceso a la ciudad y sus alrededores. Es un punto clave para la conectividad en la región.</p>
						</details>
					</div>
				</div>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Aprovecha Nuestras Promociones Especiales a Atlacomulco!</h2>
					<p class="cta__subtitle">¡No te pierdas nuestra promoción! Hasta 5% de descuento en tu viaje de ida + 10% de descuento en tu regreso. Consulta términos y condiciones.</p>
					<a href="../promociones/atlacomulco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ver todas las promociones a Atlacomulco" tabindex="0">Ver Todas las Promociones</a>
				</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
		`;
	}
}
customElements.define("page-atlacomulco", AppAtlacomulco);
