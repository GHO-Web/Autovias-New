/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
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

class PageCiudadDeMexico extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-cotiza></app-cotiza>
      <app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../src/assets/img/img-landing/ciudad-de-mexico-chapultepec.webp",
      "mediumImage":"../src/assets/img/img-landing/ciudad-de-mexico-chapultepec.webp",
      "smallImage":"../src/assets/img/img-landing/ciudad-de-mexico-chapultepec.webp",
      "captionTitle":"Viaja a Ciudad de México: El Corazón de México con Autovías",
      "captionText":"Descubre la vibrante capital del país con el servicio de autobús líder. Tu aventura comienza aquí.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>
			<app-payments></app-payments>
			
			
			<!-- Components for page -->

			<section class="hero">
        <div class="hero__content">
          <h2 class="hero__title">Viaja a Ciudad de México: El Corazón de México con Autovías</h2>
          <p class="hero__subtitle">Descubre la vibrante capital del país con el servicio de autobús líder. Tu aventura comienza aquí.</p>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <h2 class="section-title">Autovías: Tu Mejor Opción para un Viaje Inolvidable a CDMX</h2>
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
          <h2 class="section-title">Morelia → Ciudad de México</h2>
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
                  <span class="route-info__stop-name">México Norte / Poniente</span>
                  <div class="route-info__stop-icon">
                    <span class="icon-place" material-symbols-outlined></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="route-info__details-grid">
              <div class="detail-item">
                <p class="detail-item__label">Duración</p>
                <p class="detail-item__value">4.5 hrs</p>
              </div>
              <div class="detail-item">
                <p class="detail-item__label">Frecuencia</p>
                <p class="detail-item__value">Frecuente</p>
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
          <h2 class="section-title">Guadalajara → Ciudad de México (Terminal Poniente)</h2>
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
                  <span class="route-info__stop-name">México Poniente (Observatorio)</span>
                  <div class="route-info__stop-icon">
                    <span class="icon-place" material-symbols-outlined></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="route-info__details-grid">
              <div class="detail-item">
                <p class="detail-item__label">Duración</p>
                <p class="detail-item__value">6 hrs</p>
              </div>
              <div class="detail-item">
                <p class="detail-item__label">Frecuencia</p>
                <p class="detail-item__value">Diaria (Ruta más demandada)</p>
              </div>
              <div class="detail-item">
                <p class="detail-item__label">Tipo de autobús</p>
                <p class="detail-item__value">Doble piso / Lujo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="route-info">
        <div class="container route-info__container">
          <h2 class="section-title">Querétaro → Ciudad de México (Terminal Norte)</h2>
          <div class="route-info__card">
            <div class="route-info__timeline">
              <div class="route-info__line"></div>
              <div class="route-info__stops">
                <div class="route-info__stop">
                  <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
                  <span class="route-info__stop-name">Querétaro</span>
                </div>
                <div class="route-info__stop">
                  <span class="route-info__stop-name">México Norte</span>
                  <div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined></span></div>
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
                <p class="detail-item__value">Muy frecuente</p>
              </div>
              <div class="detail-item">
                <p class="detail-item__label">Tipo de autobús</p>
                <p class="detail-item__value">Primera Clase</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="attractions">
        <div class="container">
          <h2 class="section-title">Imperdibles en Ciudad de México: Historia, Cultura y Metrópolis</h2>
          <div class="attractions__grid">
            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cdmx/lugares/cdmx-s.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Centro Histórico y Zócalo</h3>
              </div>
            </div>
            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cdmx/lugares/palacio-de-bellas-artes.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Palacio de Bellas Artes y Museos</h3>
              </div>
            </div>
            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cdmx/lugares/templo-mayor.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Templo mayor</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq">
        <div class="container faq__container">
          <h2 class="section-title">Preguntas Frecuentes sobre tu Viaje a Ciudad de México</h2>
          <div class="faq__list">
            <details class="faq-item">
              <summary class="faq-item__summary"><span class="faq-item__question">¿Cuáles son las principales rutas de autobús a Ciudad de México con Autovías?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
              <p class="faq-item__answer">Autovías ofrece rutas directas a Ciudad de México desde ciudades importantes como Morelia, Guadalajara, Querétaro, y muchas más, llegando a Terminal Poniente (Observatorio) y Terminal Norte.</p>
            </details>
            <details class="faq-item">
              <summary class="faq-item__summary"><span class="faq-item__question">¿Qué servicios ofrecen los autobuses de Autovías a Ciudad de México?</span> <span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span></span> </summary>
              <p class="faq-item__answer">Nuestros autobuses cuentan con asientos reclinables, aire acondicionado, sanitarios, pantallas individuales y, en algunos servicios, Wi-Fi. Nos enfocamos en tu comodidad y seguridad durante todo el trayecto.</p>
            </details>
            <details class="faq-item">
              <summary class="faq-item__summary"> <span class="faq-item__question">¿Cómo puedo comprar mis boletos de autobús a Ciudad de México en línea?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
              <p class="faq-item__answer">Es muy fácil. Solo ingresa tu ciudad de origen, Ciudad de México como destino y la fecha de tu viaje en nuestro buscador. Selecciona el horario y asiento que prefieras, y finaliza tu compra con tarjeta de crédito/débito o en puntos de venta autorizados.</p>
            </details>
            <details class="faq-item">
              <summary class="faq-item__summary"> <span class="faq-item__question">¿Hay descuentos disponibles para boletos de autobús a Ciudad de México?</span><span class="faq-item__icon"> <span class="icon-arrow-down material-symbols-outlined"></span> </span> </summary>
              <p class="faq-item__answer">Constantemente ofrecemos promociones y descuentos especiales. Te invitamos a revisar nuestra sección de ofertas o suscribirte a nuestro newsletter para recibir las últimas novedades y viajar a Ciudad de México al mejor precio.</p>
            </details>
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="container">
          <h2 class="cta__title">¡Aprovecha Nuestras Promociones Especiales a Ciudad de México!</h2>
          <p class="cta__subtitle">¡No te pierdas nuestra promoción! Hasta 5% de descuento en tu viaje de ida + 10% de descuento en tu regreso. Consulta términos y condiciones.</p>
          <a href="../promociones/" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ver todas las promociones a Ciudad de México" tabindex="0">Ver Todas las Promociones</a>
        </div>
      </section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
    `;
	}
}
customElements.define("page-ciudad-de-mexico", PageCiudadDeMexico);
