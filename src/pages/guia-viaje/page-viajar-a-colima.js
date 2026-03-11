/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/sliders/app-banner-slider.js";
import "../../components/carousel/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/cards/app-card-open-modal.js";
import "../../components/dropdown/app-dropdown.js";
import "../../components/cards/app-card-destination-opacity.js";
import "../../components/sliders/app-slider-opacity.js";
import "../../components/modal/app-modal-multi-image.js";
import "../../components/modal/app-modal-image.js";

class PageViajarAColima extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>

<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-colima.webp");' data-alt="Vista panorámica de Colima al atardecer">
  <div class="hero__content">
    <h1 class="hero__title">
      Descubre la Belleza de Colima
    </h1>
    <h2 class="hero__subtitle">
      Viaja cómodamente con Autovías La Línea y explora Colima: historia, cultura, naturaleza y gastronomía en un solo destino.
    </h2>
    <a href="../destinos/autobus-a-colima.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre Colima" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Colima, uno de los estados más pequeños de México, combina historia, tradiciones, cultura, naturaleza y playas en un solo destino. Desde la ciudad capital hasta Manzanillo y Comala, cada rincón ofrece experiencias únicas del Pacífico mexicano.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Colima</h2>

    <div class="place-list">
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/colima/catedral-colima.webp");' data-alt="Catedral Basílica de Colima"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Catedral Basílica de Colima</p>
            <p class="place-card__description">
              Principal iglesia del centro histórico, de estilo colonial y declarada Basílica Menor. Ideal para comenzar un recorrido por la ciudad, admirando arquitectura y plazas.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/colima/comala.webp");' data-alt="Comala, Pueblo Mágico"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Comala, Pueblo Mágico</p>
            <p class="place-card__description">
              Conocido como "Pueblo Blanco", famoso por sus calles empedradas, arquitectura colonial y vistas al Volcán de Colima. Ideal para cultura, historia y gastronomía local.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/colima/nevado-colima.webp");' data-alt="Nevado de Colima"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Nevado de Colima</p>
            <p class="place-card__description">
              Zona montañosa con clima fresco, perfecta para excursionismo y naturaleza. Permite observar panorámicas únicas y explorar flora y fauna locales.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/colima/manzanillo.webp");' data-alt="Manzanillo, playa y puerto"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Manzanillo</p>
            <p class="place-card__description">
              Destino costero famoso por sus playas, puerto y actividades acuáticas. Ideal para descanso, deportes de mar y gastronomía a base de mariscos.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/colima/centro-colima.webp");' data-alt="Centro histórico de Colima"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Centro Histórico de Colima</p>
            <p class="place-card__description">
              Explora plazas, calles coloniales y mercados locales. Descubre la cultura viva de la ciudad, con artesanías, gastronomía y vida cotidiana colimense.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
  <h2 class="section-title">Sabores de Colima</h2>
  <div class="food-grid">
    <div class="food-card">
      <img alt="Tacos de pescado" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/colima/tacos-pescado.webp">
      <h3 class="food-card__title">Tacos de Pescado</h3>
      <p class="food-card__description">Especialidad costera de Colima, con pescado fresco, salsas locales y tortillas recién hechas.</p>
    </div>

    <div class="food-card">
      <img alt="Sopa de almejas" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/colima/sopa-almejas.webp"> 
      <h3 class="food-card__title">Sopa de Almejas</h3>
      <p class="food-card__description">Platillo tradicional del Pacífico mexicano, fresco y reconfortante.</p>
    </div>

    <div class="food-card">
      <img alt="Ceviche colimense" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/colima/ceviche.webp">
      <h3 class="food-card__title">Ceviche Colimense</h3>
      <p class="food-card__description">Fresco y ligero, preparado con mariscos locales, jugo de limón y especias típicas de la región.</p>
    </div>
  </div>
</div>

</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Colima</h2>
    <div class="faq-list">
      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          De noviembre a abril, clima cálido y seco. En verano hay lluvias, pero los paisajes se vuelven verdes y frescos.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por la ciudad?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Transporte urbano y taxis locales son económicos. Para playas y excursiones, vehículo propio o tours organizados.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Mejor en centro de Colima, Malecón o Manzanillo para playas. Hoteles, cabañas y eco-alojamientos disponibles.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué precauciones tomar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Protector solar, ropa ligera y agua. Evita zonas desconocidas de noche y sigue indicaciones locales.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué souvenirs llevar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Artesanías de palma, cerámica, textiles y productos locales como café, miel y dulces típicos de Colima.
        </p>
      </details>
    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Aventura en Colima?</h2>
  <p class="cta-section__text">Viaja con comodidad y puntualidad con Autovías La Línea. Descubre historia, cultura, naturaleza y sabores únicos de Colima. ¡Compra tus boletos y vive la experiencia!</p>
  <a href="../destinos/autobus-a-colima.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>
    `;
  }
}
customElements.define("page-viajar-a-colima", PageViajarAColima);
