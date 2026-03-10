/*--------------IMPORT COMPONENTS FROM DOTERS PAGE -----------------*/

import "../../../components/app-banner-slider.js";
import "../../../components/cards/doters/app-card-doters.js";
import "../../../components/cards/app-card-left-description.js";
import "../../../components/cards/app-card-right-description.js";
import "../../../components/carousel/app-carousel-banners.js";

/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */
import "../../../components/english/app-header.js?v=1.0.2";
import "../../../components/english/app-footer.js?v=1.0.2";
import "../../../components/english/app-banner-multi-image.js?v=1.0.2";
import "../../../components/english/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/english/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageDotersEnglish extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            
            <app-banner-slider
                slides-data='[
                    {
                        "id": "slide1", 
                        "title": "Banner 2", 
                        "image": "../../src/assets/img/global/banner/banner-doters-web.webp", 
                        "mediumImage": "../../src/assets/img/global/banner/tablet/banner-doters-tablet.webp",
                        "smallImage": "../../src/assets/img/global/banner/mobile/banner-doters-mobile.webp", 
                        "link": "/doters"
                    }
                ]'
			>
			</app-banner-slider>
            <section class="__section__taquilla-exclusiva__ask">
              <h2 class="__section__taquilla-exclusiva__title">How to use your Doters points, hassle-free? </br> Just follow these 3 simple steps:</h2>
               
            </section>
            
            
            <section class="__section__taquilla-exclusiva__cards">
                <div class="__section__taquilla-exclusiva__cards__items">
                <app-card-doters card-doters-src="../../src/data/english/doters/card-doters-data.json"></app-card-doters>
                </div>
                <div class="__section__taquilla-exclusiva__cards__bg"></div>
            </section>

            <section class="__sections__cards">
                <app-card-left-description cards='[
                {
                    "imageSrc": "../../src/assets/img/doters/doter-autobus.webp",
                    "imageAlt": "Reclining bus seats",
                    "title": "Turn every point into an unforgettable journey",
                    "description": "Turn your <strong>Doters Points</strong> into unforgettable adventures that will lead you to discover new destinations, live unique experiences, and create memories that will last a lifetime. Every point you earn is a chance to get closer to your next trip, the getaway you have been dreaming of, or the experience you have always wanted.",
                    "buttonText": "Boleto Doters",
                    "buttonLink": "./doters-ticket/",
                    "buttonIcon": "../../src/assets/img/doters/doter-green.webp"
                }
                ]'></app-card-left-description>
            </section>
            <section class="__sections__cards">
                <app-card-right-description cards='[
                {
                    "imageSrc": "../../../src/assets/img/doters/doter-pareja.webp",
                    "imageAlt": "Couple enjoying Doters benefits",
                    "title": "Level up with Doters and unlock exclusive rewards",
                    "description": "Level up with Doters and discover a world designed just for you: exclusive benefits, priority access, and surprises that make every step more exciting. Turn your travels and daily life into memorable experiences where every moment counts. Because with Doters, a point is more than just a number—it is the key to a universe of possibilities, rewards, and emotions that are always with you.",
                    "buttonText": "Log In",
                    "buttonLink": "https://auth.doters.com/v2/login",
                    "buttonIcon": "../../src/assets/img/doters/doter-green.webp"
                }
                ]'></app-card-right-description>
            </section>

            <section class="__section__taquilla-exclusiva__ask">
              <h2 class="__section__taquilla-exclusiva__title">Earn Doters Points on every trip you take</h2>
                <p class="__paragraph__xl">
                     Enjoy many unique benefits with</br>
                   Autovías.
                </p>
            </section>

            <section class="__sections__cards">
              <app-carousel-banners
                cards='[
                    {
                    "level": "Green Level",
                    "pointsTitle": "Points per trip",
                    "pointsText": "1 Doters Point for every $1 MXN spent.",
                    "benefits": [
                        "Access to Reward Tickets.",
                        "10% off on parcel services.",
                        "Priority Boarding."
                    ],
                    "avatar": "../../src/assets/img/doters/doter-verde.webp"
                    },
                    {
                    "level": "Silver Level",
                    "pointsTitle": "Points per trip",
                    "pointsText": "4 Doters Points for every $1 MXN spent.",
                    "benefits": [
                        "Access to Reward Tickets.",
                        "15% off on parcel services.",
                        "Priority Boarding.",
                        "Up to 10kg of additional luggage."
                    ],
                    "avatar": "../../src/assets/img/doters/doter-plata.webp"
                    },
                    {
                    "level": "Gold Level",
                    "pointsTitle": "Points per trip",
                    "pointsText": "6 Doters Points for every $1 MXN spent.",
                    "benefits": [
                        "Access to Reward Tickets.",
                        "20% off on parcel services.",
                        "Priority Boarding.",
                        "Up to 20kg of additional luggage."
                    ],
                    "avatar": "../../src/assets/img/doters/doter-oro.webp"
                    }
                ]'>
                </app-carousel-banners>
            </section>

            


             <section class="__section__taquilla-exclusiva__explication">
                <p class="__section__taquilla-exclusiva__explication__text">
                  Being part of Doters is about more than just collecting points. 
                  It means traveling with exclusive perks, receiving personalized assistance, 
                  and enjoying special fares. Our exclusive ticket counter is here to make 
                  every journey easier, faster, and more rewarding.
                </p>
                <img class="__section__taquilla-exclusiva__explication__img" src="../../src/assets/img/doters/doter-mujer-maleta.webp" alt="Woman with a suitcase at a Doters counter"/>

            </section>
            
            
    
        `;
  }
}
customElements.define("page-doters-english", PageDotersEnglish);
