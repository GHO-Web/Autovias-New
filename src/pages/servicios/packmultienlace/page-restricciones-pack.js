/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/packmultienlace/app-cotiza-pack.js";
import "../../../components/app-section-title.js";

import "../../../components/packmultienlace/app-card-bg-primary.js";
import "../../../components/packmultienlace/app-card-small-list.js";
import "../../../components/packmultienlace/app-header-pack-multienlace.js";
import "../../../components/packmultienlace/app-footer-pack-multienlace.js";
import "../../../components/cards/app-card-circle.js";

class PageRestriccionesPack extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>
            <div class="cotiza-pack-space"></div>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/paqueteria/banner/pack-banner-restricciones.webp","mediumImage": "../../../src/assets/img/global/banner/Tablet-1.png", "smallImage": "../../../src/assets/img/global/banner/Movil-1.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>
            <section class="__section__pack-services">
                <app-section-title section-title="Pack Multienlace"></app-section-title>
                <h3 class="__subtitle">Tu Paquetería Más Rápida y Confiable</h3>
                <app-card-circle cards-data-src="../../../src/data/pack-multienlace/restricciones.json"></app-card-circle>
                <article class="__section-note">
                    <div class="__note">
                        En general cualquier envío que requiera de declaración aduanal o permiso de importación. (insumos para la salud, alimentos y sus materias primas, suplementos, productos cosméticos y aditivos, plaguicidas, nutrientes vegetales y sustancias tóxicas y tabaco).
                    </div>
                    <hr>
                    <div class="__note">
                        Lo que establece el reverso de la carta porte y la establecida por la organización por necesidad o contingencia.
                    </div>
                    <hr>
                    <div class="__note">
                        No se pueden documentar ni enviar paquetes que excedan los 50 kg de peso, salvo en excepciones autorizadas por el gerente de oficina, jefe de turno o coordinador de paquetería (para los paquetes mayores a 35 kg se debe de tener comunicación con la oficina destino para conocer si están en posibilidad de recibir el paquete con el personal suficiente).
                    </div>
                    <hr>
                </article>
            </section>



        `;
  }
}
customElements.define("page-restricciones-pack", PageRestriccionesPack);
