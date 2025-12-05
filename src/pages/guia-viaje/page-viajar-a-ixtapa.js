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

class PageViajarAIxtapa extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>

<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-ixtapa-zihuatanejo.webp");' data-alt="Playa de Ixtapa al atardecer con palmeras">
  <div class="hero__content">
    <h1 class="hero__title">Escápate a Ixtapa Zihuatanejo</h1>
    <h2 class="hero__subtitle">
      Relájate entre playas de arena dorada, atardeceres espectaculares y la auténtica gastronomía del Pacífico. Viaja con Autovías La Línea y descubre lo mejor de Ixtapa y Zihuatanejo.
    </h2>
    <a href="../destinos/autobus-a-ixtapa.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Ixtapa Zihuatanejo, en la costa de Guerrero, ofrece una combinación entre el estilo resort de Ixtapa y el encanto pesquero de Zihuatanejo. Playas, actividades acuáticas y una oferta gastronómica basada en mariscos hacen de este destino una elección ideal para unas vacaciones relajadas.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Ixtapa Zihuatanejo</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ixtapa/playa-el-palmar-ixtapa.webp");' data-alt="Playa El Palmar en Ixtapa"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Playa El Palmar</p>
            <p class="place-card__description">
              Una de las playas más amplias y populares de Ixtapa, ideal para nadar, caminar y disfrutar del sol. Perfecta para familias y para quienes buscan comodidades y servicios cercanos.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ixtapa/islote-ixtapa.webp");' data-alt="Isla Ixtapa y zonas de snorkel"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Islas y snorkel (Isla Ixtapa)</p>
            <p class="place-card__description">
              Excursiones en barco te llevan a zonas de snorkel y pequeñas islas donde puedes nadar entre peces tropicales y disfrutar paisajes marinos espectaculares.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ixtapa/plaza-marina-ixtapa.webp");' data-alt="Marina Ixtapa y zona comercial"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Marina y centro de Zihuatanejo</p>
            <p class="place-card__description">
              El malecón y la marina en Zihuatanejo conservan un ambiente pesquero y relajado: restaurantes frente al mar, artesanías locales y vida nocturna tranquila.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ixtapa/la-ropa-ixtapa.webp");' data-alt="Mirador y la playa de La Ropa en Zihuatanejo"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Playa La Ropa</p>
            <p class="place-card__description">
              Una de las playas más famosas de Zihuatanejo: aguas tranquilas, ideal para deportes acuáticos, paseos en kayak y cenar en restaurantes sobre la arena.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/ixtapa/artesanias.webp");' data-alt="Mercado de Artesanías Ixtapa"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mercado de Artesanías Ixtapa</p>
            <p class="place-card__description">
              Un lugar ideal para comprar recuerdos y artesanías locales, desde textiles hasta joyería y objetos decorativos hechos por artesanos de la región.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores Típicos de Ixtapa Zihuatanejo</h2>
    <div class="food-grid">
      <div class="food-card">
        <img alt="Pescado a la talla de Ixtapa" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/ixtapa/pescado-a-la-talla.webp">
        <h3 class="food-card__title">Pescado a la talla</h3>
        <p class="food-card__description">
          Preparado en la costa del Pacífico, el pescado a la talla es uno de los platillos más representativos: filetes marinados y asados con salsas locales.
        </p>
      </div>

      <div class="food-card">
        <img alt="Ceviche fresco de Ixtapa" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/ixtapa/ceviche-ixtapa.webp">
        <h3 class="food-card__title">Ceviche y mariscos</h3>
        <p class="food-card__description">
          Fresco y cítrico, el ceviche local y otros platillos de mar ofrecen una experiencia gastronómica perfecta junto al mar.
        </p>
      </div>

      <div class="food-card">
        <img alt="Cocina tradicional guerrerense en Ixtapa" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/ixtapa/antojitos-ixtapa.webp">
        <h3 class="food-card__title">Guisos y antojitos guerrerenses</h3>
        <p class="food-card__description">
          Prueba tacos de mariscos, sopas de la región y las especialidades locales en los mercados y fondas de Zihuatanejo.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Ixtapa Zihuatanejo</h2>
    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Ixtapa?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          La temporada seca (noviembre a mayo) ofrece clima cálido y menos lluvias; sin embargo, los meses de otoño y primavera son ideales para evitar multitudes y aún disfrutar buen clima.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué actividades acuáticas puedo hacer?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Buceo, snorkel, paseos en lancha, kayak y pesca deportiva son actividades habituales. Verifica operadores turísticos certificados para garantizar seguridad.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse entre Ixtapa y Zihuatanejo?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Hay transporte local (colectivos y taxis) y servicios privados entre ambos núcleos; la distancia es corta y el traslado es rápido.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué precauciones tomar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Mantén objetos de valor seguros, evita caminar en zonas poco iluminadas por la noche y respeta indicaciones de salvavidas en playas con bandera de advertencia.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué llevar en el equipaje?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Protector solar, repelente, ropa ligera, traje de baño, calzado cómodo y una chaqueta ligera para la noche si planeas salir al malecón.
        </p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Escapada a Ixtapa?</h2>
  <p class="cta-section__text">
    Disfruta de playas, actividades al aire libre y la mejor experiencia costera con Autovías La Línea. Compra tus boletos ahora y viaja con seguridad y comodidad.
  </p>
     <a href="../destinos/autobus-a-ixtapa.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>

</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
  }
}
customElements.define("page-viajar-a-ixtapa", PageViajarAIxtapa);
