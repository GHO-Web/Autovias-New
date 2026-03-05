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
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";

class PageViajarAZitacuaro extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

<!-- HERO -->
<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-zitacuaro.webp");' data-alt="Zitácuaro Michoacán bosque y naturaleza">
  <div class="hero__content">
    <h1 class="hero__title">Vive la Naturaleza y Tradición de Zitácuaro</h1>
    <h2 class="hero__subtitle">
      Viaja con Autovías La Línea hacia Zitácuaro, un destino rodeado de montañas, bosques, historia y el espectacular Santuario de la Mariposa Monarca.
    </h2>
    <a href="../destinos/autobus-a-zitacuaro.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
  </div>
</section>

<!-- INTRO -->
<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Zitácuaro es una ciudad rodeada de bosques, montañas y ríos que forman parte del corazón natural de Michoacán. Es una zona clave para la migración de la Mariposa Monarca y un destino ideal para quienes aman la naturaleza, la tranquilidad y la historia regional.
    </p>
    <hr class="divider">

    <h2 class="section-title">Top 5 Lugares Imprescindibles en Zitácuaro</h2>

    <div class="place-list">

      <!-- 1 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/zitacuaro/santuario-mariposa-monarca.webp");' data-alt="Santuario Mariposa Monarca Zitácuaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Santuario de la Mariposa Monarca</p>
            <p class="place-card__description">
              Uno de los espectáculos naturales más impresionantes del mundo. Miles de mariposas llegan cada invierno para cubrir los árboles del bosque. Una visita obligada.
            </p>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/zitacuaro/presa-del-bosque.webp");' data-alt="Presa del Bosque Zitácuaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Presa del Bosque</p>
            <p class="place-card__description">
              Un lugar perfecto para relajarse, pescar, hacer picnic o disfrutar de paseos en lancha rodeado de naturaleza y tranquilidad.
            </p>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/zitacuaro/plaza-civica.webp");' data-alt="Plaza Civica Zitácuaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Plaza Civica de Zitácuaro</p>
            <p class="place-card__description">
              El corazón de la ciudad, un espacio abierto rodeado de arquitectura colonial, ideal para pasear, disfrutar de eventos culturales y conocer la vida local.
            </p>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/zitacuaro/cerro-cacique.webp");' data-alt="Cerro del Cacique Zitácuaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Cerro del Cacique</p>
            <p class="place-card__description">
              Un mirador natural con vistas espectaculares de Zitácuaro. Ideal para hacer ejercicio, caminar y disfrutar de panorámicas impresionantes.
            </p>
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/zitacuaro/cascada-curungueo.webp");' data-alt="Cascada de Curungueo Zitácuaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Cascada de Curungueo</p>
            <p class="place-card__description">
              Una hermosa caída de agua rodeada de vegetación. Un sitio perfecto para disfrutar de naturaleza, fotografía y senderismo.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- GASTRONOMÍA -->
<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores Típicos de Zitácuaro</h2>

    <div class="food-grid">

      <div class="food-card">
        <img alt="Corundas michoacanas" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/zitacuaro/corundas.webp">
        <h3 class="food-card__title">Corundas</h3>
        <p class="food-card__description">Tamalitos triangulares envueltos en hojas de milpa, servidos con crema, queso y salsa casera.</p>
      </div>

      <div class="food-card">
        <img alt="Cecina de Zitácuaro" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/zitacuaro/cecina-zitacuaro.webp">
        <h3 class="food-card__title">Cecina Zitacuarense</h3>
        <p class="food-card__description">Cecina suave y sazonada, famosa en la región y perfecta para tacos acompañados de nopales y queso.</p>
      </div>

      <div class="food-card">
        <img alt="Pan de fiesta" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/zitacuaro/pan-de-fiesta.webp">
        <h3 class="food-card__title">Pan de Fiesta</h3>
        <p class="food-card__description">
          Tradicional en las festividades locales, suave, aromático y preparado artesanalmente por panaderos de la región.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- TIPS -->
<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Zitácuaro</h2>

    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Zitácuaro?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          De noviembre a marzo, durante la temporada de la Mariposa Monarca y cuando el clima es más fresco.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué eventos destacan en Zitácuaro?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Las Fiestas Patrias, la llegada de la Mariposa Monarca y diversas ferias gastronómicas y culturales.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El centro de Zitácuaro ofrece hoteles cómodos, mientras que las zonas cercanas al bosque cuentan con cabañas y alojamientos ecológicos.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué comprar en Zitácuaro?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Artesanías, pan tradicional, miel, productos locales y textiles elaborados a mano.
        </p>
      </details>

    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu viaje a Zitácuaro?</h2>
  <p class="cta-section__text">
    Viaja con Autovías La Línea y descubre un destino lleno de naturaleza, frescura y cultura. ¡Zitácuaro te espera!
  </p>
  <a href="../destinos/autobus-a-zitacuaro.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}

customElements.define("page-viajar-a-zitacuaro", PageViajarAZitacuaro);
