/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";

class PageViajarAMaravatio extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("../src/assets/img/guia-viaje/banners/banner-guia-viaje-maravatio.webp");' data-alt="Centro histórico de Maravatío al atardecer">
  <div class="hero__content">
    <h1 class="hero__title">Escápate a Maravatío</h1>
    <h2 class="hero__subtitle">
      Descubre la tranquilidad, historia y encanto colonial de uno de los destinos más acogedores de Michoacán. Viaja con Autovías La Línea y vive Maravatío como nunca.
    </h2>
    <a href="../destinos/autobus-a-maravatio.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Maravatío, ubicado al oriente de Michoacán, es un destino ideal para quienes buscan paz, arquitectura histórica y un toque auténtico de provincia mexicana. Sus parques, templos, gastronomía típica y un ambiente tranquilo lo convierten en un lugar perfecto para un viaje relajado.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imprescindibles en Maravatío</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/maravatio/plaza-principal.webp");' data-alt="Plaza principal de Maravatío"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Plaza Principal</p>
            <p class="place-card__description">
              El corazón de Maravatío: kiosco, jardines y arquitectura clásica que invita a caminar y disfrutar su ambiente tranquilo y familiar.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/maravatio/templo-santiago.webp");' data-alt="Templo de Santiago Apóstol en Maravatío"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Templo de Santiago Apóstol</p>
            <p class="place-card__description">
              Una joya arquitectónica del siglo XVI con detalles coloniales únicos. Es uno de los puntos más representativos de la ciudad.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
		<div class="place-card">
			<div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/maravatio/grutas-tziranda.webp");' data-alt="Grutas de Tziranda en Maravatío, Michoacán"></div>
			<div class="place-card__content">
			<p class="place-card__title">1. Grutas de Tziranda</p>
			<p class="place-card__description">
				Un impresionante sistema de cavernas naturales ubicado cerca de Maravatío. Las Grutas de Tziranda destacan por sus formaciones rocosas, pasajes iluminados y un ambiente ideal para los amantes de la aventura y la naturaleza.
			</p>
			</div>
		</div>
	   </div>


      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/maravatio/casa-cultural.webp");' data-alt="Casa de la Cultura Maravatío"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Casa de la Cultura</p>
            <p class="place-card__description">
              Espacio donde se promueve el arte local: exposiciones, talleres y eventos culturales que muestran la riqueza de la región.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viaje/destinos/maravatio/artesanias-maravatio.webp");' data-alt="Artesanías locales de Maravatío"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mercado de Artesanías</p>
            <p class="place-card__description">
              El mejor lugar para encontrar textiles, cerámica, dulces típicos y piezas hechas a mano por artesanos locales.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores Típicos de Maravatío</h2>
    <div class="food-grid">
      <div class="food-card">
        <img alt="Carnitas estilo Michoacán en Maravatío" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/maravatio/carnitas.webp">
        <h3 class="food-card__title">Carnitas estilo Michoacán</h3>
        <p class="food-card__description">
          Una de las especialidades del estado: suaves, jugosas y con un sabor tradicional irresistible en el centro de Maravatío.
        </p>
      </div>

      <div class="food-card">
        <img alt="Atole y pan tradicional de Maravatío" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/maravatio/atole-pan.webp">
        <h3 class="food-card__title">Atole con pan artesanal</h3>
        <p class="food-card__description">
          Una combinación clásica y reconfortante, perfecta para las mañanas frescas de la región.
        </p>
      </div>

      <div class="food-card">
        <img alt="Platillos típicos de Michoacán servidos en Maravatío" class="food-card__image" src="../src/assets/img/guia-viaje/platillos/maravatio/antojitos.webp">
        <h3 class="food-card__title">Antojitos michoacanos</h3>
        <p class="food-card__description">
          Enchiladas, corundas, tacos dorados y más sabores locales que puedes disfrutar en mercados y fondas tradicionales.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje para Maravatío</h2>
    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Maravatío?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          La primavera y el otoño tienen el clima más agradable. El invierno ofrece paisajes frescos y cielos despejados.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué actividades puedo hacer?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Caminar por el centro histórico, visitar templos, probar la comida local y pasear por la Presa Santa María son actividades imperdibles.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Es un destino familiar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Sí, Maravatío es un destino tranquilo, seguro y perfecto para viajes en familia o escapadas de descanso.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué llevar en el equipaje?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">
          Ropa cómoda, una chamarra ligera (especialmente en invierno), calzado para caminar y protector solar.
        </p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Maravatío?</h2>
  <p class="cta-section__text">
    Vive un destino lleno de cultura, serenidad y tradición. Viaja con Autovías La Línea y disfruta comodidad y seguridad en tu recorrido.
  </p>
     <a href="../destinos/autobus-a-maravatio.html" class="btn btn--light btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>

</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define("page-viajar-a-maravatio", PageViajarAMaravatio);
