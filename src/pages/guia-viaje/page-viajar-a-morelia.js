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

class AppViajarMorelia extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>


<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-morelia.webp");' data-alt="Catedral de Morelia iluminada de noche">
  <div class="hero__content">
    <h1 class="hero__title">Descubre la Joya Colonial de Michoacán</h1>
    <h2 class="hero__subtitle">
      Viaja con Autovías La Línea hacia Morelia, una ciudad Patrimonio de la Humanidad que combina historia, arquitectura majestuosa y una gastronomía llena de tradición.
    </h2>
    <a href="../destinos/autobus-a-morelia.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Morelia, capital de Michoacán, es una de las ciudades coloniales más hermosas de México. Sus calles empedradas, monumentos de cantera rosa y su ambiente cultural la convierten en un destino ideal para los amantes de la historia, el arte y la buena comida.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Morelia</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/morelia/catedral-morelia.webp");' data-alt="Catedral de Morelia Michoacán"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Catedral de Morelia</p>
            <p class="place-card__description">
              Símbolo de la ciudad, construida con cantera rosa en estilo barroco. Su iluminación nocturna y los fuegos artificiales de los fines de semana son un espectáculo imperdible.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/morelia/aqueducto-morelia.webp");' data-alt="Acueducto de Morelia"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Acueducto de Morelia</p>
            <p class="place-card__description">
              Una majestuosa obra arquitectónica con más de 250 arcos que data del siglo XVIII. Es uno de los paseos más pintorescos para caminar y admirar la historia viva de la ciudad.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/morelia/callejon-del-romance.webp");' data-alt="Callejón del Romance Morelia"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Callejón del Romance</p>
            <p class="place-card__description">
              Un rincón encantador adornado con bugambilias y fuentes, ideal para una caminata romántica. Sus muros están decorados con versos del poeta Lucas Ortiz.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/morelia/museo-del-dulce.webp");' data-alt="Museo del Dulce de Morelia"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Museo del Dulce</p>
            <p class="place-card__description">
              Dedicado a preservar la tradición de los dulces típicos morelianos. Aquí podrás probar las famosas Morelianas, ates y cocadas artesanales elaboradas al momento.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/morelia/zoologico-morelia.webp");' data-alt="Zoológico Benito Juárez Morelia"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Zoológico Benito Juárez</p>
            <p class="place-card__description">
              Uno de los zoológicos más grandes y completos de México. Ideal para visitar en familia y conocer especies de todo el mundo rodeadas de naturaleza.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores Típicos de Morelia</h2>
    <div class="food-grid">
      <div class="food-card">
        <img alt="Carnitas michoacanas típicas de Morelia" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/morelia/carnitas-michoacanas.webp">
        <h3 class="food-card__title">Carnitas Michoacanas</h3>
        <p class="food-card__description">
          Preparadas en su punto con carne de cerdo dorada lentamente. Un clásico infaltable acompañado de salsa verde, tortillas calientes y limón.
        </p>
      </div>

      <div class="food-card">
        <img alt="Corundas michoacanas con crema y salsa" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/morelia/corundas.webp">
        <h3 class="food-card__title">Corundas</h3>
        <p class="food-card__description">
          Tamales triangulares envueltos en hojas de milpa, servidos con crema, queso y salsa. Son uno de los platillos más representativos de Michoacán.
        </p>
      </div>

      <div class="food-card">
        <img alt="Ate con queso típico de Morelia" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/morelia/ate-con-queso.webp">
        <h3 class="food-card__title">Ate con Queso</h3>
        <p class="food-card__description">
          Postre tradicional que combina lo dulce del ate de frutas con el sabor salado del queso fresco. Un contraste delicioso y típico de la región.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Morelia</h2>
    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Morelia?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          De octubre a marzo, cuando el clima es fresco y agradable. Además, durante noviembre se celebra el Día de Muertos, una de las tradiciones más emblemáticas del estado.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué eventos destacan en Morelia?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Destacan el Festival Internacional de Cine de Morelia, el Festival de Música de Morelia y las celebraciones de Semana Santa con procesiones históricas.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El centro histórico ofrece hoteles boutique en edificios coloniales, mientras que las zonas modernas brindan opciones con todas las comodidades.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué comprar en Morelia?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Dulces típicos, artesanías de cobre de Santa Clara del Cobre, textiles de Uruapan y rebozos de Patamban son recuerdos perfectos para llevar a casa.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por la ciudad?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El centro se recorre fácilmente a pie. También hay taxis, transporte público y servicios de aplicaciones móviles para distancias más largas.
        </p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu viaje a Morelia?</h2>
  <p class="cta-section__text">
    Viaja con Autovías La Línea y conoce el corazón colonial de Michoacán. Disfruta la arquitectura, la historia y los sabores únicos de Morelia. ¡Compra tus boletos hoy!
  </p>
  <a href="../destinos/autobus-a-morelia.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
  }
}
customElements.define("page-viajar-a-morelia", AppViajarMorelia);
