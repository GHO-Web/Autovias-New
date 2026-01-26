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
import "../../js/slick.js?v=1.0.0";

class PageViajarAGuadalajara extends HTMLElement {
	async connectedCallback() {
    this.innerHTML = `
    <app-modal-travelpass></app-modal-travelpass>
      <app-modal-doters></app-modal-doters>
      <app-cotiza></app-cotiza>


<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-guadalajara.webp");' data-alt="Vista panorámica de Guadalajara, Jalisco al atardecer">
  <div class="hero__content">
    <h1 class="hero__title">Descubre la Esencia de Guadalajara</h1>
    <h2 class="hero__subtitle">
      Viaja cómodamente con Autovías La Línea hacia Guadalajara y explora una de las ciudades más emblemáticas del occidente de México: tradición, arquitectura, música, tequila y modernidad en un solo destino.
    </h2>
    <a href="../destinos/autobus-a-guadalajara.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Guadalajara, capital del estado de Jalisco y centro cultural del occidente mexicano, combina un rico patrimonio histórico, espacios urbanos vibrantes y una oferta gastronómica reconocida internacionalmente. A sólo unas horas de la Ciudad de México por carretera o vía aérea, es un destino ideal para escapadas activas o estancias más largas.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Guadalajara</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/guadalajara/catedral-guadalajara.webp");' data-alt="Catedral Metropolitana de Guadalajara"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Catedral Metropolitana de Guadalajara</p>
            <p class="place-card__description">
              Uno de los símbolos arquitectónicos de la ciudad, esta catedral de estilo neogótico con torres puntiagudas se encuentra en el corazón del centro histórico. Un imprescindible para entender la historia urbana de Guadalajara.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/guadalajara/teatro-degollado-guadalajara.webp");' data-alt="Teatro Degollado en Guadalajara"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Teatro Degollado</p>
            <p class="place-card__description">
              Este majestuoso teatro de estilo neoclásico es sede de la filarmónica y del ballet de Jalisco. Es una joya arquitectónica donde se puede vivir la cultura local en su máxima expresión.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/guadalajara/basilica-zapopan-guadalajara.webp");' data-alt="Basílica de Zapopan cerca de Guadalajara"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Basílica de Zapopan</p>
            <p class="place-card__description">
              Ubicada en el municipio de Zapopan, esta basílica alberga la venerada imagen de la Virgen de Zapopan y es un punto clave de peregrinación y patrimonio cultural del estado de Jalisco.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/guadalajara/tequila-ruta-agave-jalisco.webp");' data-alt="Campos de agave y Ruta del Tequila desde Guadalajara"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Ruta del Tequila y campos de agave</p>
            <p class="place-card__description">
              A poca distancia de Guadalajara se encuentra la famosa región productora del tequila. Explora los campos de agave azul, visita destilerías y conoce una tradición mexicana reconocida mundialmente.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/guadalajara/la-minerva-guadalajara.webp");' data-alt="Glorieta La Minerva en Guadalajara"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Glorieta La Minerva</p>
            <p class="place-card__description">
              Este emblemático monumento es un punto de encuentro urbano por excelencia en Guadalajara. Ideal para una foto de recuerdo y para entender la identidad de la ciudad.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores Típicos de Guadalajara</h2>
    <div class="food-grid">
      <div class="food-card">
        <img alt="Birria tapatía de Guadalajara" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/guadalajara/birria-guadalajara.webp">
        <h3 class="food-card__title">Birria tapatía</h3>
        <p class="food-card__description">
          Este emblemático guiso de carne de res o chivo acompañado de consomé es una de las delicias de la gastronomía de Guadalajara y del estado de Jalisco.
        </p>
      </div>

      <div class="food-card">
        <img alt="Torta ahogada de Guadalajara" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/guadalajara/torta-ahogada.webp">
        <h3 class="food-card__title">Torta ahogada</h3>
        <p class="food-card__description">
          Hecha con pan especial (“birote”), rellena de carnitas y bañada en salsa de jitomate picante. Un clásico que no puedes dejar de probar en tu visita a Guadalajara.
        </p>
      </div>

      <div class="food-card">
        <img alt="Tequila artesanal de Jalisco" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/guadalajara/tequila-copas.webp">
        <h3 class="food-card__title">Tequila y degustaciones</h3>
        <p class="food-card__description">
          En la región de Guadalajara y sus alrededores puedes participar en tours de degustación de tequila, aprender sobre su elaboración y celebrar esta tradición jalisciense.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Guadalajara</h2>
    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Guadalajara?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Los meses de noviembre a abril ofrecen clima más templado y seco, ideales para recorrer la ciudad y sus alrededores sin tantas lluvias. Aprovecha para disfrutar actividades al aire libre.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por la ciudad?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          En Guadalajara puedes usar el transporte público (tren ligero, buses) para moverte por el centro histórico. Para excursiones hacia Tequila o zonas rurales, considera rentar auto o un tour organizado.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Las zonas recomendadas son el centro histórico, el barrio de Chapultepec o la zona de Zapopan, que ofrecen buen acceso a restaurantes, vida nocturna y transporte.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué precauciones tomar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Como en cualquier ciudad grande, evita portar objetos de valor a la vista, usa transporte seguro y consulta con tu hospedaje sobre zonas recomendadas para la noche.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué souvenirs llevar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Lleva artesanías de barro de Tonalá, textiles bordados del estado de Jalisco o botellas de tequila de producción local.
        </p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Aventura en Guadalajara?</h2>
  <p class="cta-section__text">
    Viaja con comodidad, lujo y puntualidad con Autovías La Línea. Descubre la historia, cultura, sabores y modernidad de Guadalajara. ¡Compra tus boletos y vive la experiencia tapatía auténtica!
  </p>
     <a href="../destinos/autobus-a-guadalajara.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>

</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>


    `;
	}
}
customElements.define("page-viajar-a-guadalajara", PageViajarAGuadalajara);
