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

class PageViajarAAtlacomulco extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>

<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-atlacomulco.webp");' data-alt="Paisaje montañoso de Atlacomulco al amanecer">
  <div class="hero__content">
    <h1 class="hero__title">
      Descubre Atlacomulco, corazón del norte del Estado de México
    </h1>
    <h2 class="hero__subtitle">
      Viaja cómodamente con Autovías La Línea y explora este destino lleno de paisajes, historia, sabores tradicionales y sitios naturales únicos.
    </h2>
    <a href="../destinos/autobus-a-atlacomulco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ver más sobre Atlacomulco" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Atlacomulco es un destino ideal para quienes buscan tranquilidad, naturaleza y tradiciones auténticas. Rodeado de montañas y con un ambiente típico del Estado de México, combina zonas naturales, gastronomía tradicional y puntos históricos que vale la pena conocer.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Atlacomulco</h2>

    <div class="place-list">

      <!-- 1. La Colina de Atlacomulco -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/atlacomulco/colina.webp");' data-alt="La Colina de Atlacomulco"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. La Colina de Atlacomulco</p>
            <p class="place-card__description">
              Un punto icónico del municipio que ofrece vistas panorámicas espectaculares. Ideal para caminar, tomar fotos y disfrutar del paisaje natural.
            </p>
          </div>
        </div>
      </div>

      <!-- 2. Museo Histórico de Atlacomulco -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/atlacomulco/museo-historico.webp");' data-alt="Museo Histórico de Atlacomulco"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Museo Histórico de Atlacomulco</p>
            <p class="place-card__description">
              Aquí puedes conocer más sobre la historia del municipio a través de fotografías, documentos y piezas culturales que muestran su evolución.
            </p>
          </div>
        </div>
      </div>

      <!-- 3. Parque Recreativo Las Fuentes -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/atlacomulco/las-fuentes.webp");' data-alt="Parque Recreativo Las Fuentes"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Parque Recreativo Las Fuentes</p>
            <p class="place-card__description">
              Un entorno ideal para disfrutar entre árboles, senderos y áreas verdes. Perfecto para caminar, convivir y descansar.
            </p>
          </div>
        </div>
      </div>

      <!-- 4. Parroquia del Municipio -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/atlacomulco/parroquia.webp");' data-alt="Parroquia del Municipio"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Parroquia del Municipio</p>
            <p class="place-card__description">
              Un templo tradicional con arquitectura destacada y gran importancia cultural. Su plaza es un punto central de convivencia.
            </p>
          </div>
        </div>
      </div>

      <!-- 5. Centro de Atlacomulco -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/atlacomulco/centro.webp");' data-alt="Centro de Atlacomulco"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Centro de Atlacomulco</p>
            <p class="place-card__description">
              El corazón del municipio: comercio, gastronomía, cultura y vida cotidiana. Ideal para caminar, comprar y disfrutar de la esencia local.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
  <h2 class="section-title">Sabores de Atlacomulco</h2>
  <div class="food-grid">

    <div class="food-card">
      <img alt="Plato de barbacoa tradicional" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/atlacomulco/barbacoa.webp">
      <h3 class="food-card__title">Barbacoa Tradicional</h3>
      <p class="food-card__description">Uno de los platillos más representativos de la región, preparada al estilo mexiquense con horno de tierra. Se acompaña con consomé, tortillas hechas a mano y salsas frescas.</p>
    </div>

    <div class="food-card">
      <img alt="Tortitas de haba" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/atlacomulco/tortitas-haba.webp"> 
      <h3 class="food-card__title">Tortitas de Haba</h3>
      <p class="food-card__description">Un clásico de la zona: masa de haba molida mezclada con especias, frita y servida con caldillo rojo. Sabor casero y auténticamente mexiquense.</p>
    </div>

    <div class="food-card">
      <img alt="Atole de guayaba" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/atlacomulco/atole.webp">
      <h3 class="food-card__title">Atole de Frutas</h3>
      <p class="food-card__description">Perfecto para las mañanas frías. Los más populares son de guayaba, ciruela y zarzamora, preparados de forma tradicional.</p>
    </div>

  </div>
</div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Atlacomulco</h2>
    <div class="faq-list">
      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          De noviembre a marzo el clima es fresco y agradable. En verano las lluvias son frecuentes, pero los paisajes se vuelven más verdes y hermosos.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por el municipio?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El transporte local es económico, pero para visitar zonas naturales cerca del municipio lo mejor es usar taxi autorizado o vehículo particular.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El centro de Atlacomulco ofrece hoteles cómodos y bien ubicados. También hay eco-hoteles y cabañas en los alrededores para una experiencia más natural.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué precauciones tomar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Lleva ropa abrigadora, especialmente por la noche, y evita caminos rurales sin señalización si viajas por tu cuenta.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué souvenirs llevar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Dulces regionales, artesanías otomíes, quesos locales y productos agrícolas de la región, como avena o frutos rojos.
        </p>
      </details>
    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu viaje a Atlacomulco?</h2>
  <p class="cta-section__text">Viaja con comodidad y puntualidad con Autovías La Línea. Descubre paisajes naturales, tradiciones y sabores únicos del norte del Estado de México.</p>
  <a href="../destinos/autobus-a-atlacomulco.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ver más sobre Atlacomulco" tabindex="0">Ver más sobre el destino</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
  }
}
customElements.define("page-viajar-a-atlacomulco", PageViajarAAtlacomulco);
