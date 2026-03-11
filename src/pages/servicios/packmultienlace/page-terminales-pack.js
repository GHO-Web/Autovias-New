/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/packmultienlace/app-header-pack-multienlace.js";
import "../../../components/packmultienlace/app-cotiza-pack.js";
import "../../../components/sliders/app-banner-slider.js";
import "../../../components/app-section-title.js";
import "../../../components/packmultienlace/app-map-pack.js";
import "../../../components/packmultienlace/app-footer-pack-multienlace.js";

class PageTerminalesPack extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>
            <div class="cotiza-pack-space"></div>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "/src/assets/img/paqueteria/banner/web/pack-entrega-web.webp","mediumImage": "/src/assets/img/paqueteria/banner/tablet/pack-entrega-tablet.webp", "smallImage": "/src/assets/img/paqueteria/banner/movil/pack-entrega-mobile.webp", "link": "#index.html/banner1"}
               
                ]'
            >
            </app-banner-slider>
            <app-section-title section-title="Cotiza tu paquete"></app-section-title>

        <app-map-pack></app-map-pack>
    `;
  }
}

customElements.define("page-terminales-pack", PageTerminalesPack);
