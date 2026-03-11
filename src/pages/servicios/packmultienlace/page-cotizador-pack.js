/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/packmultienlace/app-header-pack-multienlace.js";
import "../../../components/packmultienlace/app-cotiza-pack.js";
import "../../../components/sliders/app-banner-slider.js";
import "../../../components/app-section-title.js";
import "../../../components/packmultienlace/app-cotizador-pack.js";
import "../../../components/packmultienlace/app-footer-pack-multienlace.js";

class PageCotizadorPack extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>
            <div class="cotiza-pack-space"></div>

        
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "/src/assets/img/paqueteria/banner/web/pack-cotizador-web.webp","mediumImage": "/src/assets/img/paqueteria/banner/tablet/pack-cotizador-tablet.webp", "smallImage": "/src/assets/img/paqueteria/banner/movil/pack-cotizador-mobile.webp", "link": "#index.html/banner1"}

                ]'
            >
            </app-banner-slider>
            <app-section-title section-title="Cotiza tu paquete"></app-section-title>

            <app-cotizador-pack></app-cotizador-pack>
            
        `;
  }
}

customElements.define("page-cotizador-pack", PageCotizadorPack);
