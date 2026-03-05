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

class PageViajarACiudadDeMexico extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>


<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-ciudad-de-mexico.webp");' data-alt="Vista panorámica del Zócalo de la Ciudad de México al atardecer">
  <div class="hero__content">
    <h1 class="hero__title">
      Descubre la Grandeza de la Ciudad de México
    </h1>
    <h2 class="hero__subtitle">
      Viaja cómodamente con Autovías La Línea y explora una de las metrópolis más vibrantes del mundo: historia, cultura, gastronomía y modernidad en un solo destino.
    </h2>
    <a href="../destinos/autobus-a-ciudad-de-mexico.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>

  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      La Ciudad de México, capital del país y una de las urbes más fascinantes de América Latina, combina historia prehispánica, arquitectura colonial y vida cosmopolita. Desde los vestigios de Tenochtitlán hasta sus museos de clase mundial, parques y gastronomía incomparable, cada rincón cuenta una historia que te invita a explorar. 
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en la CDMX</h2>

    <div class="place-list">
      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ciudad-de-mexico/zocalo-cdmx.webp");' data-alt="Catedral Metropolitana en el Zócalo de la CDMX"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Zócalo y Catedral Metropolitana</p>
            <p class="place-card__description">
              El corazón histórico de la ciudad. Aquí se fusionan los restos del Templo Mayor mexica con la majestuosa Catedral Metropolitana, símbolo del México colonial. Disfruta el ambiente del Centro Histórico y sus museos, tiendas y cafés emblemáticos.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ciudad-de-mexico/chapultepec.webp");' data-alt="Castillo de Chapultepec sobre el Bosque de Chapultepec"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Bosque y Castillo de Chapultepec</p>
            <p class="place-card__description">
              El pulmón verde de la ciudad alberga uno de los castillos más emblemáticos del país. Desde su mirador disfrutarás una vista panorámica inigualable del Paseo de la Reforma. A su alrededor encontrarás museos, lagos, zoológico y zonas para descansar.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ciudad-de-mexico/xochimilco.webp");' data-alt="Canales de Xochimilco con trajineras coloridas"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Xochimilco</p>
            <p class="place-card__description">
              Navega por los canales de Xochimilco en coloridas trajineras mientras disfrutas de música en vivo, flores, gastronomía y ambiente festivo. Es una experiencia única que conserva la herencia prehispánica del Valle de México.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ciudad-de-mexico/museo-soumaya.webp");' data-alt="Museo Soumaya en Polanco, CDMX"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Museo Soumaya y Plaza Carso</p>
            <p class="place-card__description">
              Una joya arquitectónica moderna que alberga más de 60,000 obras de arte, desde Rodin hasta Dalí. A su alrededor, Polanco ofrece boutiques, restaurantes y centros comerciales exclusivos que muestran la faceta cosmopolita de la ciudad.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ciudad-de-mexico/mural.webp");' data-alt="Murales de Diego Rivera en el Palacio Nacional"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Palacio Nacional y Murales de Diego Rivera</p>
            <p class="place-card__description">
              Entra en el corazón del poder mexicano y admira los murales de Diego Rivera que narran la historia del país. Una parada imprescindible para los amantes del arte y la historia mexicana.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
  <h2 class="section-title">Sabores de la Ciudad de México</h2>
  <div class="food-grid">
    <div class="food-card">
      <img alt="Tacos al pastor con piña" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/ciudad-de-mexico/tacos-pastor.webp">
      <h3 class="food-card__title">Tacos al Pastor</h3>
      <p class="food-card__description">Símbolo gastronómico de la CDMX. Carne de cerdo marinada con achiote y piña asada en trompo, servida en tortilla de maíz con cilantro, cebolla y salsa.</p>
    </div>

    <div class="food-card">
      <img alt="Tlacoyos con nopales y queso fresco" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/ciudad-de-mexico/tlacoyos.webp"> 
      <h3 class="food-card__title">Tlacoyos</h3>
      <p class="food-card__description">Antojito prehispánico hecho de maíz azul o blanco, relleno de frijol, haba o requesón. Se sirve con nopales, queso fresco y salsa. Un clásico de los mercados y tianguis de la ciudad.</p>
    </div>

    <div class="food-card">
      <img alt="Churros con chocolate en San Ángel" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/ciudad-de-mexico/churros.webp">
      <h3 class="food-card__title">Churros y Chocolate</h3>
      <p class="food-card__description">Una tradición dulce que no puede faltar. Las churrerías del Centro y San Ángel ofrecen el mejor acompañamiento para una tarde de paseo.</p>
    </div>
  </div>
</div>

</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para CDMX</h2>
    <div class="faq-list">
      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          De marzo a mayo, el clima es templado y los jacarandás florecen, tiñendo la ciudad de violeta. Octubre y noviembre destacan por eventos culturales como el Desfile de Día de Muertos y el Festival Internacional Cervantino (en Guanajuato, a pocas horas).
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por la ciudad?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          El Metro es el medio más rápido y económico. También puedes usar Metrobús, Cablebús o Ecobici. Para trayectos turísticos, los autobuses Turibús son una gran opción para recorrer la ciudad de forma cómoda.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Las zonas más recomendadas son Reforma, Polanco, Condesa, Roma y Coyoacán, por su seguridad, oferta gastronómica y conexión con los principales atractivos.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué precauciones tomar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Evita llevar objetos de valor a la vista y usa transporte autorizado. En caso de emergencia, marca el 911 o utiliza la App “Mi Policía” para reportes inmediatos.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué souvenirs llevar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          En los mercados de artesanías como La Ciudadela encontrarás alebrijes, textiles, joyería de plata y productos gastronómicos como café de altura y chocolate artesanal.
        </p>
      </details>
    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Aventura en la Ciudad de México?</h2>
  <p class="cta-section__text">Viaja con comodidad, lujo y puntualidad con Autovías La Línea. Descubre la historia, cultura y modernidad de una ciudad única. ¡Compra tus boletos y vive la experiencia capitalina!</p>
  <a href="../destinos/autobus-a-ciudad-de-mexico.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>

</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define(
	"page-viajar-a-ciudad-de-mexico",
	PageViajarACiudadDeMexico,
);
