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

class PageViajarAMonterrey extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>


<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/monterrey/banner/banner-guia-viaje-monterrey.webp");' data-alt="Vista panorámica de Monterrey con el Cerro de la Silla al fondo">
  <div class="hero__content">
    <h1 class="hero__title">Explora la Sultana del Norte</h1>
    <h2 class="hero__subtitle">
      Viaja con Autovías La Línea hacia Monterrey, una ciudad moderna rodeada de montañas, donde la innovación, la cultura y la gastronomía regia te esperan con los brazos abiertos.
    </h2>
    <a href="../destinos/autobus-a-monterrey.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Monterrey, capital de Nuevo León, es una metrópoli vibrante y cosmopolita reconocida por su espíritu industrial, su imponente entorno natural y su excelente calidad de vida. 
      Es un destino ideal tanto para viajes de negocios como para escapadas culturales, gastronómicas o de aventura.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Monterrey</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/monterrey/destinos/paseo-santa-lucia.webp");' data-alt="Paseo Santa Lucía en Monterrey"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Paseo Santa Lucía</p>
            <p class="place-card__description">
              Un canal artificial rodeado de jardines, fuentes y murales que conecta el Parque Fundidora con el centro de Monterrey. Ideal para recorrer en lancha o a pie y disfrutar del ambiente urbano.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/monterrey/destinos/parque-fundidora.webp");' data-alt="Parque Fundidora Monterrey"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Parque Fundidora</p>
            <p class="place-card__description">
              Un ícono de Monterrey: antiguas estructuras industriales convertidas en espacios verdes, museos, centros culturales y el famoso Horno3. Ideal para caminar, andar en bicicleta o asistir a eventos.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/monterrey/destinos/cerro-de-la-silla.webp");' data-alt="Cerro de la Silla Monterrey"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Cerro de la Silla</p>
            <p class="place-card__description">
              El símbolo natural de Monterrey. Un reto para los amantes del senderismo, ofrece una vista panorámica impresionante de la ciudad desde sus miradores.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/monterrey/destinos/macroplaza.webp");' data-alt="Macroplaza de Monterrey"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Macroplaza</p>
            <p class="place-card__description">
              Una de las plazas más grandes del mundo, rodeada de museos, edificios históricos y jardines. En su corazón se encuentra el Faro del Comercio, símbolo moderno de la ciudad.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/monterrey/destinos/grutas-garcia.webp");' data-alt="Grutas de García Monterrey"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Grutas de García</p>
            <p class="place-card__description">
              Un conjunto de cavernas naturales formadas hace más de 60 millones de años. Se accede en teleférico y ofrecen una experiencia única entre formaciones rocosas y luz natural.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores Típicos de Monterrey</h2>
    <div class="food-grid">
      <div class="food-card">
        <img alt="Cabrito asado típico de Monterrey" class="food-card__image" src="../src/assets/img/guia-viaje/monterrey/platillos/cabrito-asado.webp">
        <h3 class="food-card__title">Cabrito Asado</h3>
        <p class="food-card__description">
          El platillo más representativo de Monterrey. Preparado al carbón con condimentos tradicionales, ofrece un sabor intenso y único. Perfecto para acompañar con frijoles y tortillas de harina.
        </p>
      </div>

      <div class="food-card">
        <img alt="Machacado con huevo típico de Monterrey" class="food-card__image" src="../src/assets/img/guia-viaje/monterrey/platillos/machacado-con-huevo.webp">
        <h3 class="food-card__title">Machacado con Huevo</h3>
        <p class="food-card__description">
          Tradicional desayuno norteño preparado con carne seca desmenuzada, huevo, jitomate, cebolla y chile. Energético, sabroso y 100% regio.
        </p>
      </div>

      <div class="food-card">
        <img alt="Glorias de Linares dulces típicos" class="food-card__image" src="../src/assets/img/guia-viaje/monterrey/platillos/glorias-linares.webp">
        <h3 class="food-card__title">Glorias de Linares</h3>
        <p class="food-card__description">
          Dulce típico elaborado con leche quemada y nuez. Originarias del municipio de Linares, son un orgullo culinario de Nuevo León y un regalo imperdible.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Monterrey</h2>
    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuándo es mejor visitar Monterrey?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          La mejor época para visitar Monterrey es de noviembre a marzo, cuando el clima es más templado y agradable para actividades al aire libre.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué eventos destacan en la ciudad?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Destacan el Festival Internacional de Santa Lucía, el Pal Norte, el Machaca Fest y las Fiestas de la Fundación de Monterrey, con conciertos y arte al aire libre.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Dónde hospedarse?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Las mejores zonas son el centro, San Pedro Garza García y la zona del Parque Fundidora, con hoteles modernos, restaurantes y fácil acceso a las principales atracciones.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué comprar en Monterrey?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Lleva contigo carne seca, dulces regionales, artesanías de cuero y productos locales como queso de cabra o glorias de Linares.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo moverse por la ciudad?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Monterrey cuenta con un sistema de metro eficiente, taxis, aplicaciones de movilidad y avenidas modernas que facilitan los desplazamientos rápidos.
        </p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu viaje a Monterrey?</h2>
  <p class="cta-section__text">
    Viaja con Autovías La Línea y disfruta la comodidad y elegancia en cada kilómetro. Descubre la modernidad, los sabores y la energía de la Sultana del Norte. ¡Compra tus boletos hoy!
  </p>
  <a href="../destinos/autobus-a-monterrey.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define("page-viajar-a-monterrey", PageViajarAMonterrey);
