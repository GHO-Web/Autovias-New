/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.0.1";
import "../../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/sliders/app-banner-slider.js";
import "../../components/sliders/app-banner-slider-caption.js";
import "../../components/carousel/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/cards/app-card-open-modal.js";
import "../../components/dropdown/app-dropdown.js";
import "../../components/cards/app-card-destination-opacity.js";
import "../../components/sliders/app-slider-opacity.js";
import "../../components/modal/app-modal-multi-image.js";
import "../../components/modal/app-modal-image.js";

class PageZitacuaro extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>

			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../src/assets/img/boletos-autobus/zitacuaro/overflow-images/zitacuaro.webp",
      "mediumImage":"../src/assets/img/boletos-autobus/zitacuaro/overflow-images/zitacuaro.webp",
      "smallImage":"../src/assets/img/boletos-autobus/zitacuaro/overflow-images/zitacuaro.webp",
      "captionTitle":"Viaja a Zitacuaro: Descubre la magia de este destino",
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
					<h1 class="hero__title">Autobús de Zitácuaro</h1>
					<p class="hero__subtitle">
						Viaja desde Zitácuaro en autobús con comodidad, seguridad y múltiples horarios diarios.
					</p>
				</div>
			</section>

			<!-- FEATURES -->
			<section class="features">
				<div class="container">
					<h2 class="section-title">¿Por qué viajar en autobús desde Zitácuaro?</h2>
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
								Salidas hacia distintos puntos del país desde la terminal de Zitácuaro.
							</p>
						</div>

					</div>
				</div>
			</section>

			<!-- ROUTE CDMX PONIENTE -->
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">
						Trayecto destacado Zitácuaro → Ciudad de México Central Poniente
					</h2>

					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Zitácuaro Central</span>
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
								<p class="detail-item__value">4 h 30 min aprox.</p>
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
						Trayecto destacado Zitácuaro → Ciudad de México Central Norte
					</h2>

					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Zitácuaro Central</span>
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
								<p class="detail-item__value">5 horas aprox.</p>
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
					<h2 class="section-title">Descubre en Zitácuaro</h2>

					<div class="attractions__grid">

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../src/assets/img/destinos-img/zitacuaro/lugares/cerro-cacique.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Cerro del Cacique</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../src/assets/img/destinos-img/zitacuaro/lugares/santuario-mariposa.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Santuario de la Mariposa Monarca</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../src/assets/img/destinos-img/zitacuaro/lugares/centro-historico.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Centro Histórico</h3>
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
						¿Desde dónde salen los autobuses en Zitácuaro?
					</span>
					<span class="faq-item__icon">
						<span class="icon-arrow-down material-symbols-outlined"></span>
					</span>
					</summary>
					<p class="faq-item__answer">
					Las salidas se realizan desde la Central de Autobuses de Zitácuaro.
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


			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja a Zitacuaro con Autovías!</h2>
					<p class="cta__subtitle">Prepara tus maletas y descubre todo lo que esta maravillosa ciudad tiene para ofrecer. Tu aventura está a solo un clic.</p> <a href="../destinos/autobus-a-zitacuaro.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
				</div>
			</section>


			
    `;
  }
}

customElements.define("page-zitacuaro", PageZitacuaro);
