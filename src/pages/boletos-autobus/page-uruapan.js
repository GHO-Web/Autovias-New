/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-modal-doters.js";
import "../components/app-modal-travelpass.js";
import "../components/app-cookies-policy.js?v=1.0.0";
import "../components/app-button-whats.js?v=1.0.0";
import "../components/app-button-eva-trip.js?v=1.0.0";
import "../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
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

class PageUruapan extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>
      <app-cotiza></app-cotiza>

			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../src/assets/img/img-landing/uruapan.webp",
      "mediumImage":"../src/assets/img/img-landing/uruapan.webp",
      "smallImage":"../src/assets/img/img-landing/uruapan.webp",
      "captionTitle":"Viaja a Uruapan: Descubre la magia de este destino",
      "captionText":"Viaja con Autovías La Línea y vive la mejor experiencia. Tu aventura comienza aquí.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>

			<app-payments></app-payments>

			<!-- HERO -->
			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Autobús de Uruapan</h1>
					<p class="hero__subtitle">
						Viaja desde Uruapan en autobús con comodidad, seguridad y múltiples horarios diarios.
					</p>
				</div>
			</section>

			<!-- FEATURES -->
			<section class="features">
				<div class="container">
					<h2 class="section-title">¿Por qué viajar en autobús desde Uruapan?</h2>
					<div class="features__grid">

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Comodidad</h3>
							<p class="feature-card__description">
								Autobuses modernos con asientos reclinables y mayor espacio para un viaje confortable.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Ahorro</h3>
							<p class="feature-card__description">
								Compra en línea y aprovecha tarifas preferenciales, descuentos y promociones especiales.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Viaje seguro</h3>
							<p class="feature-card__description">
								Conductores certificados y unidades monitoreadas durante todo el trayecto.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-montain material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Conecta destinos</h3>
							<p class="feature-card__description">
								Salidas hacia distintos puntos del país desde la terminal de Uruapan.
							</p>
						</div>

					</div>
				</div>
			</section>

			<!-- ROUTE CDMX PONIENTE -->
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">
						Trayecto destacado Uruapan → Ciudad de México Central Poniente
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">6 horas aprox.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Servicio ejecutivo</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- ROUTE CDMX NORTE -->
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">
						Trayecto destacado Uruapan → Ciudad de México Central Norte
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">6 h 30 min aprox.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Servicio ejecutivo</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- ATTRACTIONS -->
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Descubre en Uruapan</h2>

					<div class="attractions__grid">

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../src/assets/img/destinos-img/uruapan/lugares/cupatitzio.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Parque Nacional Barranca del Cupatitzio</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../src/assets/img/destinos-img/uruapan/lugares/tingambato.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Zona Arqueológica de Tingambato</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../src/assets/img/destinos-img/uruapan/lugares/tzararacua.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Cascada de Tzaráracua</h3>
							</div>
						</div>

					</div>
				</div>
			</section>

			<!-- FAQ -->
			<section class="faq">
				<div class="container faq__container">
					<h2 class="section-title">Preguntas frecuentes</h2>

					<div class="faq__list">

						<details class="faq-item">
							<summary class="faq-item__summary">
								<span class="faq-item__question">
									¿Desde dónde salen los autobuses en Uruapan?
								</span>
								<span class="faq-item__icon">
									<span class="icon-arrow-down material-symbols-outlined"></span>
								</span>
							</summary>
							<p class="faq-item__answer">
								Las salidas se realizan desde la Central de Autobuses de Uruapan.
							</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary">
								<span class="faq-item__question">
									¿Hay corridas todos los días?
								</span>
								<span class="faq-item__icon">
									<span class="icon-arrow-down material-symbols-outlined"></span>
								</span>
							</summary>
							<p class="faq-item__answer">
								Sí, existen corridas diarias con distintos horarios dependiendo del destino.
							</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary">
								<span class="faq-item__question">
									¿Puedo comprar mis boletos en línea?
								</span>
								<span class="faq-item__icon">
									<span class="icon-arrow-down material-symbols-outlined"></span>
								</span>
							</summary>
							<p class="faq-item__answer">
								Sí, puedes comprar tus boletos en línea de forma segura y elegir el horario que más te convenga.
							</p>
						</details>

					</div>
				</div>
			</section>

			<!-- CTA -->
			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Uruapan con Autovías!</h2>
					<p class="cta__subtitle">
						Prepara tus maletas y descubre todo lo que esta ciudad tiene para ofrecer.
					</p>
					<a href="../destinos/autobus-a-uruapan.html"
						class="btn btn--primary btn--large"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Ir a ver más sobre el destino">
						Ver más sobre el destino
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
