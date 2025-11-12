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

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/ixtapa/banner/banner-guia-viaje-ixtapa-zihuatanejo.webp");' data-alt="Vista aérea de Ixtapa Zihuatanejo, Guerrero con playas y mar turquesa">
  <div class="hero__content">
    <h1 class="hero__title">Escápate a Ixtapa Zihuatanejo</h1>
    <h2 class="hero__subtitle">
      Viaja cómodamente con ETN Turistar Lujo hacia Ixtapa Zihuatanejo y disfruta un paraíso de playas doradas, naturaleza tropical y un ambiente relajado en la Costa Grande de Guerrero.
    </h2>
    <a href="../destinos/autobus-a-ixtapa-zihuatanejo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Ixtapa Zihuatanejo combina lo mejor de dos mundos: el encanto pesquero y tradicional de Zihuatanejo, con la modernidad y el confort turístico de Ixtapa. Su clima cálido todo el año, playas de ensueño y una gastronomía que fusiona mar y tierra lo convierten en uno de los destinos más amados del Pacífico mexicano.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Ixtapa Zihuatanejo</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/ixtapa/destinos/playa-la-rope.webp");' data-alt="Playa La Ropa en Zihuatanejo, Guerrero"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Playa La Ropa</p>
            <p class="place-card__description">
              Considerada una de las playas más bellas del Pacífico mexicano, Playa La Ropa es perfecta para nadar, practicar deportes acuáticos o disfrutar un atardecer desde sus restaurantes frente al mar.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/ixtapa/destinos/isla-ixtapa.webp");' data-alt="Isla Ixtapa vista desde lancha turística"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Isla Ixtapa</p>
            <p class="place-card__description">
              Un paraíso natural a pocos minutos en lancha, con playas tranquilas ideales para snorkel, descanso y platillos frescos de mariscos. Ideal para pasar un día completo desconectado.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/ixtapa/destinos/muelle-zihuatanejo.webp");' data-alt="Muelle principal de Zihuatanejo con vista al mar y embarcaciones"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Muelle Principal de Zihuatanejo</p>
            <p class="place-card__description">
              Punto icónico para paseos al amanecer o al atardecer. Desde aquí parten tours de pesca deportiva y recorridos por la bahía. Un espacio ideal para fotos y caminatas junto al malecón.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/ixtapa/destinos/ciclopista-ixtapa.webp");' data-alt="Ciclopista ecológica de Ixtapa entre palmeras y selva"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Ciclopista Ecológica de Ixtapa</p>
            <p class="place-card__description">
              Una ruta de más de 10 km que conecta Ixtapa con Playa Linda, rodeada de vegetación tropical y fauna local. Perfecta para quienes disfrutan de recorrer en bicicleta o caminando entre naturaleza.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/ixtapa/destinos/museo-arqueologico-zihuatanejo.webp");' data-alt="Museo Arqueológico de la Costa Grande, Zihuatanejo"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Museo Arqueológico de la Costa Grande</p>
            <p class="place-card__description">
              Este pequeño pero interesante museo en el centro de Zihuatanejo ofrece una mirada al pasado prehispánico de la región y las culturas que habitaron la costa guerrerense.
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
        <img alt="Pescado a la talla" class="food-card__image" src="../src/assets/img/guia-viaje/ixtapa/platillos/pescado-a-la-talla.webp">
        <h3 class="food-card__title">Pescado a la talla</h3>
        <p class="food-card__description">
          Platillo emblema del Pacífico: pescado asado al carbón y bañado en salsa roja o verde, acompañado de arroz, frijoles y tortillas hechas a mano.
        </p>
      </div>

      <div class="food-card">
        <img alt="Tiritas de pescado" class="food-card__image" src="../src/assets/img/guia-viaje/ixtapa/platillos/tiritas-de-pescado.webp">
        <h3 class="food-card__title">Tiritas de pescado</h3>
        <p class="food-card__description">
          Preparación tradicional de Zihuatanejo: pescado fresco cortado en tiras, marinado con limón, cebolla morada y chile. Refrescante y ligera, ideal para la playa.
        </p>
      </div>

      <div class="food-card">
        <img alt="Camarones al coco" class="food-card__image" src="../src/assets/img/guia-viaje/ixtapa/platillos/camarones-al-coco.webp">
        <h3 class="food-card__title">Camarones al coco</h3>
        <p class="food-card__description">
          Camarones empanizados en coco rallado, dorados a la perfección y servidos con salsa de mango o tamarindo. Un clásico de la cocina guerrerense costera.
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
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Ixtapa Zihuatanejo?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          La temporada ideal va de noviembre a mayo, cuando el clima es seco, soleado y perfecto para disfrutar las playas. Durante junio a octubre hay lluvias, pero también paisajes más verdes y tarifas más bajas.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por la zona?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Puedes usar taxis, transporte local o rentar una bicicleta para recorrer la ciclopista. Las distancias entre Ixtapa y Zihuatanejo son cortas y muy accesibles.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Ixtapa ofrece hoteles de lujo y resorts todo incluido, mientras que Zihuatanejo es ideal para hospedajes boutique frente al mar o cabañas ecológicas con vista a la bahía.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué actividades no debo perderme?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Snorkel en Isla Ixtapa, paseos en lancha por la bahía, visitas a Playa Las Gatas, y recorridos en bicicleta por la ciclopista ecológica son imperdibles.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué souvenirs llevar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Artesanías de coco, textiles guerrerenses, joyería hecha con conchas marinas y productos locales como café o mezcal de la región son recuerdos típicos de este destino.
        </p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Aventura en Ixtapa Zihuatanejo?</h2>
  <p class="cta-section__text">
    Viaja con comodidad, lujo y puntualidad con ETN Turistar Lujo. Vive el equilibrio perfecto entre relax y naturaleza en uno de los destinos más hermosos del Pacífico mexicano. ¡Compra tus boletos y disfruta la experiencia costera más auténtica!
  </p>
  <a href="../destinos/autobus-a-ixtapa-zihuatanejo.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>

</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define("page-viajar-a-ixtapa", PageViajarAIxtapa);
