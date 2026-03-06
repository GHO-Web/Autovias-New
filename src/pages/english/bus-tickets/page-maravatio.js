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

class PageMaravatio extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-cotiza></app-cotiza>

			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../../../src/assets/img/img-landing/maravatio.webp",
      "mediumImage":"../../../src/assets/img/img-landing/maravatio.webp",
      "smallImage":"../../../src/assets/img/img-landing/maravatio.webp",
      "captionTitle":"Viaja a Maravatio: Confort, Seguridad y los Mejores Precios con Autovías",
      "captionText":"Vive una nueva experiencia viajando con Autovías La Línea. Tu aventura comienza aquí.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>

			<app-payments></app-payments>

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Autobús de Maravatío</h1>
					<p class="hero__subtitle">
						Conecta Maravatío con otros destinos por carretera en autobús con comodidad, horarios flexibles y servicios confiables.
					</p>
				</div>
			</section>

			<section class="features">
				<div class="container">
					<h2 class="section-title">¿Por qué viajar en autobús desde Maravatío?</h2>
					<div class="features__grid">

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-armchair material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Comodidad</h3>
							<p class="feature-card__description">
								Unidades confortables con espacio para descansar durante todo el trayecto.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-travel-security material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Seguridad</h3>
							<p class="feature-card__description">
								Conductores profesionales y unidades sometidas a mantenimiento riguroso.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-pig material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Precios accesibles</h3>
							<p class="feature-card__description">
								Tarifas competitivas y diversas opciones de compra en línea o en taquilla.
							</p>
						</div>

						<div class="feature-card">
							<div class="feature-card__icon-wrapper">
								<span class="icon-clock material-symbols-outlined"></span>
							</div>
							<h3 class="feature-card__title">Horarios flexibles</h3>
							<p class="feature-card__description">
								Saliendo a lo largo del día para que elijas el que mejor se adapte a ti.
							</p>
						</div>

					</div>
				</div>
			</section>

			<!-- DESTACADOS -->

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Maravatío → Ciudad de México (Poniente)</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Maravatío / Terminal</span>
								</div>

								<div class="route-info__stop">
									<span class="route-info__stop-name">Ciudad de México Central Poniente</span>
									<div class="route-info__stop-icon">
										<span class="icon-place material-symbols-outlined"></span>
									</div>
								</div>
							</div>
						</div>

						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">~3 horas aprox.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diarias (varias salidas)</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Servicio ejecutivo</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Maravatío → Guadalajara</h2>
					<div class="route-info__card">
						<div class="route-info__timeline">
							<div class="route-info__line"></div>
							<div class="route-info__stops">
								<div class="route-info__stop">
									<div class="route-info__stop-icon">
										<span class="icon-bus material-symbols-outlined"></span>
									</div>
									<span class="route-info__stop-name">Maravatío / Terminal</span>
								</div>

								<div class="route-info__stop">
									<span class="route-info__stop-name">Guadalajara – Central</span>
									<div class="route-info__stop-icon">
										<span class="icon-place material-symbols-outlined"></span>
									</div>
								</div>
							</div>
						</div>

						<div class="route-info__details-grid">
							<div class="detail-item">
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">~4 h 30 min aprox.</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Salidas regulares</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Tipo de autobús</p>
								<p class="detail-item__value">Servicio ejecutivo / Primera</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Lugares -->
			<section class="attractions">
				<div class="container">
					<h2 class="section-title">Descubre en Maravatío y sus alrededores</h2>
					<div class="attractions__grid">

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/maravatio/lugares/centro-historico.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Centro Histórico de Maravatío</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/maravatio/lugares/santuario-mariposa.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Santuario de la Mariposa Monarca (cercano)</h3>
							</div>
						</div>

						<div class="attraction-card">
							<div class="attraction-card__image"
								style='background-image:url("../../../src/assets/img/destinos-img/maravatio/lugares/laguna.webp")'>
							</div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Laguna / Paraje Natural</h3>
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
							<summary class="faq-item__summary"><span class="faq-item__question">¿Desde dónde salen los autobuses en Maravatío?</span> <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span></summary>
							<p class="faq-item__answer">Las salidas se realizan desde la Central de Autobuses de Maravatío, con varias corridas al día.</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Cuánto dura el viaje a Ciudad de México?</span> <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span></summary>
							<p class="faq-item__answer">El viaje dura aproximadamente 3 horas, dependiendo de tráfico y paradas intermedias.*</p>
						</details>

						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Puedo comprar mis boletos en línea?</span> <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span></summary>
							<p class="faq-item__answer">Sí, puedes comprar tus boletos en línea desde el buscador de Autovías o en taquilla.</p>
						</details>

					</div>
				</div>
			</section>

			<section class="cta">
				<div class="container">
					<h2 class="cta__title">¡Viaja desde Maravatío!</h2>
					<p class="cta__subtitle">Cotiza tu viaje y elige los horarios y servicios que mejor se adapten a tus planes.</p>
					<a href="../destinos/autobus-a-maravatio.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
				</div>
			</section>

			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
		`;
	}
}
customElements.define("page-maravatio", PageMaravatio);
