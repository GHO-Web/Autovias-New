/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";

class PageQuienesSomosEnglish extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-travelpass-english></app-modal-travelpass-english>
            <app-modal-doters-english></app-modal-doters-english>

            <app-banner-slider
        slides-data='[
          {
            "id": "slide1", 
            "title": "Banner 1", 
            "image": "../../src/assets/img/global/banner/banner-semana-santa-compra-en-tres-pasos-desc-5-mas-10.webp",
            "mediumImage": "../../src/assets/img/global/banner/tablet/banner-semana-santa-compra-en-tres-pasos-desc-5-mas-10.webp", 
            "smallImage": "../../src/assets/img/global/banner/mobile/banner-semana-santa-compra-en-tres-pasos-desc-5-mas-10.webp", 
            "link": "/"
          },
          {
            "id": "slide2", 
            "title": "Banner 2", 
            "image": "../../src/assets/img/global/banner/banner-doters-web.webp", 
            "mediumImage": "../../src/assets/img/global/banner/tablet/banner-doters-tablet.webp",
            "smallImage": "../../src/assets/img/global/banner/mobile/banner-doters-mobile.webp", 
            "link": "/doters"
          }
        ]'
      >
      </app-banner-slider>

            <app-payments></app-payments>
            
            <section class="__section">
                <app-section-title section-title="Who We Are"></app-section-title>
                <h3 class="__subtitle">We are a 100% Mexican company, dedicated to passenger transportation with over 68 years of experience and service.</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Mission</h3>

                    <p class="__terms-purchase-text">
                        To meet our customers’ transportation needs by providing reliable service with added value.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Vision</h3>

                    <p class="__terms-purchase-text">
                        To be leaders in the transportation industry by offering services that wisely use environmental resources, with a commitment to society and the environment.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Values</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>Commitment:</b> We deliver on our promises flawlessly.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>Integrity:</b> We are transparent and truthful, fostering trust and confidence in our actions.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text"><b>Loyalty:</b> We cultivate a strong sense of belonging and pride in our company among our team members.</p>
                        </li>
                    </ul>
                </article>
            </section>
		<app-cookies-policy-english></app-cookies-policy-english>
		<app-button-whats></app-button-whats>
		<app-button-eva-trip-english></app-button-eva-trip-english>
        `;
  }
}
customElements.define("page-quienes-somos-english", PageQuienesSomosEnglish);
