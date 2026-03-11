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

class PageQueretaro extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../src/assets/img/boletos-autobus/acambaro/overflow-images/queretaro.webp",
      "mediumImage":"../src/assets/img/boletos-autobus/acambaro/overflow-images/queretaro.webp",
      "smallImage":"../src/assets/img/boletos-autobus/acambaro/overflow-images/queretaro.webp",
      "captionTitle":"Viaja a Querétaro: Disfruta de comodidad, seguridad y mejores precios con Autovías",
      "captionText":"Vive una nueva experiencia viajando. Tu aventura comienza aquí.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Autobús a Querétaro</h1>
					<p class="hero__subtitle">Descubre Querétaro: la joya colonial del Bajío, una ciudad que encanta con su rica historia y arquitectura impresionante.</p>
				</div>
			</section>
			
			<section class="features">
				<div class="container">
					<h2 class="section-title">¿Por qué viajar en autobús a Querétaro?</h2>
					<div class="features__grid">
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-armchair material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Comodidad Premium</h3>
							<p class="feature-card__description">Autovías es tu mejor opción para un viaje cómodo y seguro a este fascinante destino colonial.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-pig material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Ahorro</h3>
							<p class="feature-card__description">Aprovecha descuentos online (5% ida, 10% regreso), la tarifa de Viajero Anticipado y 10% en viaje redondo en taquilla.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-travel-security material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Viaje sin complicaciones</h3>
							<p class="feature-card__description">Viaja con la línea de autobuses de lujo Autovías y llega sin contratiempos a tu destino.</p>
						</div>
						<div class="feature-card">
							<div class="feature-card__icon-wrapper"> <span class="icon-montain material-symbols-outlined"></span> </div>
							<h3 class="feature-card__title">Paisajes inolvidables</h3>
							<p class="feature-card__description">Explora calles empedradas, el Acueducto, museos y disfruta su vibrante oferta gastronómica.</p>
						</div>
					</div>
				</div>
			</section>
			
			<section class="route-info">
				<div class="container route-info__container">
					<h2 class="section-title">Trayecto destacado Ciudad de México Central Norte → Querétaro</h2>
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">3 horas</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (19 corridas)</p>
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
					<h2 class="section-title">Trayecto destacado Monterrey Central → Querétaro</h2>
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">9 horas 20 minutos</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (7 corridas)</p>
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
					<h2 class="section-title">Trayecto destacado Acapulco → Querétaro</h2>
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">8 Horas</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (3 corridas)</p>
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
					<h2 class="section-title">Trayecto destacado Aguascalientes → Querétaro</h2>
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">4 horas</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (5 corridas)</p>
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
					<h2 class="section-title">Trayecto destacado Puebla → Querétaro</h2>
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
								<p class="detail-item__label">Duración</p>
								<p class="detail-item__value">4 horas 15 minutos</p>
							</div>
							<div class="detail-item">
								<p class="detail-item__label">Frecuencia</p>
								<p class="detail-item__value">Diaria (13 corridas)</p>
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
					<h2 class="section-title">Descubre en Querétaro</h2>
					<div class="attractions__grid">
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/queretaro/lugares/centro-historico-queretaro.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Centro Histórico de Querétaro</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/queretaro/lugares/acueducto-queretaro.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Acueducto Querétaro</h3>
							</div>
						</div>
						<div class="attraction-card">
							<div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/queretaro/lugares/pena-de-bernal.webp")'></div>
							<div class="attraction-card__content">
								<h3 class="attraction-card__title">Peña de Bernal</h3>
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
							<summary class="faq-item__summary"><span class="faq-item__question">¿Cuánto cuesta el boleto de autobús de la Ciudad de México Central Norte a Querétaro?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
							<p class="faq-item__answer">El boleto de autobús barato es desde $405.00 MXN*. El viaje dura 2 horas 46 minutos. Tarifas sujetas a disponibilidad.</p>
						</details>
						<details class="faq-item">
							<summary class="faq-item__summary"><span class="faq-item__question">¿Cuánto cuesta el boleto de autobús de Monterrey Central a Querétaro?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
							<p class="faq-item__answer">El boleto de autobús barato tiene un costo de $1,005.00 MXN . El viaje dura 9 horas 20 minutos. *Las tarifas sujetas a disponibilidad.</p>
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
					<h2 class="cta__title">¡Viaja a Querétaro con Autovías!</h2>
					<p class="cta__subtitle">Prepara tus maletas y descubre todo lo que esta maravillosa ciudad tiene para ofrecer. Tu aventura está a solo un clic.</p> <a href="../destinos/autobus-a-queretaro.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
				</div>
			</section>
			
			
        `;
  }
}
customElements.define("page-queretaro", PageQueretaro);
