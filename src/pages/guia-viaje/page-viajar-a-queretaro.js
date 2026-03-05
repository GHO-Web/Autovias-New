/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
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

class PageViajarAQueretaro extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
			
			
			<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-queretaro.webp");' data-alt="Acueducto de Querétaro iluminado de noche">
  <div class="hero__content">
    <h1 class="hero__title">Descubre la Historia y el Encanto de Querétaro</h1>
    <h2 class="hero__subtitle">
      Viaja con Autovías La Línea hacia Querétaro, una ciudad donde el pasado colonial se mezcla con la modernidad, rodeada de viñedos, historia y cultura.
    </h2>
    <a href="../destinos/autobus-a-queretaro.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Santiago de Querétaro es una joya colonial declarada Patrimonio de la Humanidad por la UNESCO. Su centro histórico conserva templos, plazas y casonas que cuentan la historia de México, mientras que sus alrededores ofrecen rutas de vino, naturaleza y pueblos mágicos por descubrir.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Querétaro</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/queretaro/acueducto-queretaro.webp");' data-alt="Acueducto de Querétaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Acueducto de Querétaro</p>
            <p class="place-card__description">
              Uno de los símbolos más icónicos del estado, con 74 arcos que se elevan majestuosamente sobre la ciudad. Al atardecer, su iluminación lo convierte en una postal inolvidable.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/queretaro/centro-historico-queretaro.webp");' data-alt="Centro Histórico de Querétaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Centro Histórico</p>
            <p class="place-card__description">
              Un recorrido por sus calles empedradas revela templos barrocos, museos, cafés y plazas llenas de vida. Ideal para caminar y disfrutar de su ambiente tranquilo y cultural.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/queretaro/pena-de-bernal.webp");' data-alt="Peña de Bernal Querétaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Peña de Bernal</p>
            <p class="place-card__description">
              Uno de los monolitos más grandes del mundo y emblema natural de Querétaro. Perfecto para los amantes del senderismo, la aventura y las vistas panorámicas.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/queretaro/ruta-del-vino-queso.webp");' data-alt="Ruta del Vino y Queso Querétaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Ruta del Vino y Queso</p>
            <p class="place-card__description">
              Una experiencia sensorial entre viñedos, queserías y paisajes espectaculares. Disfruta catas, recorridos guiados y maridajes con productos locales.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/queretaro/tequisquiapan.webp");' data-alt="Tequisquiapan Querétaro"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Tequisquiapan</p>
            <p class="place-card__description">
              Pueblo Mágico lleno de color y tradición. Famoso por sus artesanías, su plaza central y su cercanía a los viñedos queretanos. Ideal para descansar y disfrutar del ambiente local.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores Típicos de Querétaro</h2>
    <div class="food-grid">
      <div class="food-card">
        <img alt="Enchiladas queretanas" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/queretaro/enchiladas-queretanas.webp">
        <h3 class="food-card__title">Enchiladas Queretanas</h3>
        <p class="food-card__description">
          Un clásico local preparado con tortillas bañadas en salsa roja, rellenas de pollo y servidas con papas, zanahorias y queso fresco.
        </p>
      </div>

      <div class="food-card">
        <img alt="Gorditas de maíz quebrado" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/queretaro/gorditas-maiz.webp">
        <h3 class="food-card__title">Gorditas de Maíz Quebrado</h3>
        <p class="food-card__description">
          Preparadas con maíz quebrado y rellenas de guisos tradicionales como chicharrón, nopales o frijoles. Una delicia típica de los mercados locales.
        </p>
      </div>

      <div class="food-card">
        <img alt="Vinos queretanos" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/queretaro/vinos-queretanos.webp">
        <h3 class="food-card__title">Vinos Queretanos</h3>
        <p class="food-card__description">
          Los vinos locales destacan por su calidad y variedad. Recorre las bodegas y disfruta de catas acompañadas con quesos artesanales de la región.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Querétaro</h2>
    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Querétaro?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          De noviembre a abril, cuando el clima es templado y seco. Es ideal para recorrer sus pueblos mágicos y la ruta del vino y queso.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué eventos destacan en Querétaro?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          La Feria Internacional del Queso y el Vino en Tequisquiapan, las Fiestas de la Fundación de Querétaro y la Noche de Museos son algunas de las más populares.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El centro histórico ofrece hoteles boutique con arquitectura colonial, mientras que las afueras cuentan con haciendas y viñedos con alojamiento temático.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué comprar en Querétaro?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Artesanías en cantera, textiles, vino local, quesos y dulces típicos como las charamuscas o el ate de membrillo.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por la ciudad?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El centro puede recorrerse fácilmente a pie. También hay transporte público eficiente, taxis y aplicaciones de movilidad para desplazamientos más largos.
        </p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu viaje a Querétaro?</h2>
  <p class="cta-section__text">
    Viaja con Autovías La Línea y explora una de las ciudades más bellas y seguras de México. Vive su historia, su cultura y su sabor en cada rincón. ¡Compra tus boletos hoy!
  </p>
  <a href="../destinos/autobus-a-queretaro.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define("page-viajar-a-queretaro", PageViajarAQueretaro);
