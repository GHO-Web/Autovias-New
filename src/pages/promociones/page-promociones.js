/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-modal-doters.js";
import "../components/app-modal-travelpass.js";
import "../components/app-cookies-policy.js?v=1.0.0";
import "../components/app-button-whats.js?v=1.0.0";
import "../components/app-button-eva-trip.js?v=1.0.0";
import "../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-banner-slider-caption.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-forms.js";

class PagePromociones extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

           <app-banner-slider-caption
          slides-data='[
    {
      "title":"Promo 1",
      "link":"https://example.com",
      "image":"../src/assets/img/img-landing/promociones.webp",
      "mediumImage":"../src/assets/img/img-landing/promociones.webp",
      "smallImage":"../src/assets/img/img-landing/promociones.webp",
      "captionTitle":"¡Viaja por menos con las Promociones de Autovías!",
      "captionText":"Descubre las mejores ofertas y descuentos para hacer tu próximo viaje en autobús más económico y placentero.",
      "captionAlign":"left",
      "captionTheme":"dark"
    }
  ]'>
      </app-banner-slider-caption>

            <app-payments></app-payments>

            <section class="__section __section__promo">
                <app-section-title section-title="Conoce nuestras promociones que tenemos para ti"></app-section-title>
                  <div class="__grid-container">
                    <article class="__article__promo">
                        <h3 class="__article-title">Compra con descuento </h3>
                       <a class="__article-link" href="../../../promociones/ofertas-en-1-click.html">  <img src="../src/assets/img/promociones/programs/5_10_descuento.webp" alt="Atencion a clientes"> </a>
                    </article>
                    <article class="__article__promo">
                        <h3 class="__article-title">Acumula Puntos Doters</h3>
                       <a class="__article-link" href="https://autovias.com.mx/doters/"> <img src="../src/assets/img/promociones/programs/Autovias-Doters-Promociones.webp" alt="Atencion a clientes">  </a>
                    </article>
                </div>
              <app-section-title section-title="Descuentos de Temporadas"></app-section-title>
                  <article class="__article__banner">
                      <h3 class="__article-title">Buen fin </h3>
                      <a class="__article-banner-link" href="../../../promociones/buen-fin/">  <img src="../src/assets/img/promociones/buen-fin/Buen_fin_web.webp" alt="Atencion a clientes"> </a>
                  </article>
              <app-section-title section-title="Convenios"></app-section-title>
                  <article class="__article__guide">
                      <h3 class="__article-title">Guía de Descuentos</h3>
                      <div class="__article-guide"></div>
                  </article>
            </section>
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
        `;
	}
}
customElements.define("page-promociones", PagePromociones);
