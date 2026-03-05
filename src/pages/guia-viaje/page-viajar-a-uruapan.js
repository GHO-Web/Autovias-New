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

class PageViajarAUruapan extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

<!-- HERO -->
<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-uruapan.webp");' data-alt="Parque Nacional Barranca del Cupatitzio Uruapan">
  <div class="hero__content">
    <h1 class="hero__title">Explora la Naturaleza y Tradición de Uruapan</h1>
    <h2 class="hero__subtitle">
      Viaja con Autovías La Línea hacia Uruapan, una ciudad rodeada de agua, montañas, gastronomía y cultura purépecha.
    </h2>
    <a href="../destinos/autobus-a-uruapan.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
  </div>
</section>

<!-- INTRO -->
<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Uruapan, conocida como la “Capital Mundial del Aguacate”, es uno de los destinos naturales más espectaculares de Michoacán. Sus ríos, parques, historia y cultura la convierten en una ciudad ideal para quienes buscan naturaleza, gastronomía y tradición purépecha.
    </p>
    <hr class="divider">

    <h2 class="section-title">Top 5 Lugares Imprescindibles en Uruapan</h2>

    <div class="place-list">

      <!-- 1 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/uruapan/parque-nacional-cupatitzio.webp");' data-alt="Parque Nacional Barranca del Cupatitzio">
          </div>
          <div class="place-card__content">
            <p class="place-card__title">1. Parque Nacional Barranca del Cupatitzio</p>
            <p class="place-card__description">
              Uno de los parques más bellos de México, famoso por sus manantiales, cascadas y senderos rodeados de vegetación. Ideal para caminar y apreciar la naturaleza en su máximo esplendor.
            </p>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/uruapan/volcan-paricutin.webp");' data-alt="Volcán Paricutín">
          </div>
          <div class="place-card__content">
            <p class="place-card__title">2. Volcán Paricutín</p>
            <p class="place-card__description">
              Uno de los volcanes más jóvenes del mundo. Puedes explorar sus campos de lava y visitar la icónica iglesia sepultada de San Juan Parangaricutiro.
            </p>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/uruapan/tianguis-artesanal.webp");' data-alt="Tianguis Artesanal Uruapan">
          </div>
          <div class="place-card__content">
            <p class="place-card__title">3. Tianguis Artesanal de Domingo de Ramos</p>
            <p class="place-card__description">
              El tianguis artesanal más grande de Latinoamérica, donde artesanos purépechas exhiben textiles, madera, máscaras, cobre y más. Un espectáculo cultural único.
            </p>
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/uruapan/plaza-martires.webp");' data-alt="Plaza Mártires de Uruapan">
          </div>
          <div class="place-card__content">
            <p class="place-card__title">4. Plaza Mártires de Uruapan</p>
            <p class="place-card__description">
              El corazón de la ciudad, rodeado de cafeterías, comercios y arquitectura tradicional. Un punto perfecto para caminar y disfrutar del ambiente local.
            </p>
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/uruapan/cascada-tzararacua.webp");' data-alt="Cascada de la Tzaráracua">
          </div>
          <div class="place-card__content">
            <p class="place-card__title">5. Cascada de la Tzaráracua</p>
            <p class="place-card__description">
              Una majestuosa caída de agua rodeada de paisajes boscosos. Puedes llegar en caballo, teleférico o caminando por senderos naturales.
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
    <h2 class="section-title">Sabores Típicos de Uruapan</h2>

    <div class="food-grid">

      <div class="food-card">
        <img alt="Uchepos michoacanos" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/uruapan/uchepos.webp">
        <h3 class="food-card__title">Uchepos</h3>
        <p class="food-card__description">Elotes tiernos molidos, servidos con crema y queso. Un clásico de la gastronomía michoacana.</p>
      </div>

      <div class="food-card">
        <img alt="Carnitas de Michoacán" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/uruapan/carnitas.webp">
        <h3 class="food-card__title">Carnitas Estilo Michoacán</h3>
        <p class="food-card__description">Jugosas, doraditas y llenas de sabor. De las mejores que podrás probar en el país.</p>
      </div>

      <div class="food-card">
        <img alt="Aguacate de Uruapan" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/uruapan/aguacate.webp">
        <h3 class="food-card__title">Aguacate Uruapense</h3>
        <p class="food-card__description">
          Uruapan es la capital mundial del aguacate. Fresco, cremoso y de calidad insuperable.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- TIPS -->
<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Uruapan</h2>

    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Uruapan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Entre febrero y abril, durante el clima más agradable y el famoso Tianguis Artesanal de Domingo de Ramos.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué eventos destacan en Uruapan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El Tianguis Artesanal, Noche de Muertos, la Fiesta del Agua y el Festival del Aguacate.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El centro ofrece hoteles cómodos y accesibles, mientras que cerca del Parque Nacional hay opciones más naturales y tranquilas.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué comprar en Uruapan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Artesanías purépechas, madera tallada, textiles, cobre, máscaras y productos derivados del aguacate.
        </p>
      </details>

    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu viaje a Uruapan?</h2>
  <p class="cta-section__text">
    Viaja con Autovías La Línea y disfruta de una de las ciudades más hermosas de Michoacán. Naturaleza, cultura y tradición te esperan.
  </p>
  <a href="../destinos/autobus-a-uruapan.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>
    `;
	}
}
customElements.define("page-viajar-a-uruapan", PageViajarAUruapan);
