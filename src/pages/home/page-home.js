/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-destinations-grid.js";
import "../../components/app-list-destinations.js";
import "../../components/app-tickets-sales-locations.js";
import "../../components/app-other-services.js";
import "../../components/app-blog.js";
import "../../components/app-img-shop-left.js";
import "../../components/app-section-title.js";

class PageHome extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/global/banner/banner-3-pasos-web.webp","mediumImage": "../src/assets/img/global/banner/tablet/banner-3-pasos-tablet.webp", "smallImage": "../src/assets/img/global/banner/mobile/banner-3-pasos-mobile.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/global/banner/banner-doters-web.webp", "mediumImage": "../src/assets/img/global/banner/tablet/banner-doters-tablet.webp","smallImage": "../src/assets/img/global/banner/mobile/banner-doters-mobile.webp", "link": "#index.html/banner2"}                ]'
            >
            </app-banner-slider>
            <app-payments></app-payments>
            <br><br><br>
            <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "¿Aún no sabes a dónde viajar?", "text": "Conoce nuestros destinos Autovías La Línea y elige tu lugar favorito"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Ciudad de México", "content": "Sumérgete en la esencia vibrante y cultural de la Ciudad de México.", "image": "./src/assets/img/destinos-img/cdmx/lugares/palacio-de-bellas-artes-2.webp", "link": "../guia-viaje/viajar-a-ciudad-de-mexico.html"},
        
                {"id": "destination2", "title": "Colima", "content": "Explora la serenidad y riqueza natural de Colima.", "image": "./src/assets/img/destinos-img/colima/lugares/comala.webp", "link": "../guia-viaje/viajar-a-colima.html"},
        
                {"id": "destination3", "title": "Guadalajara", "content": "Déjate envolver por la energía y el sabor vibrante de Guadalajara.", "image": "./src/assets/img/destinos-img/guadalajara/lugares/centrohistorico1.webp", "link": "../guia-viaje/viajar-a-guadalajara.html"},
                
                {"id": "destination5", "title": "Morelia", "content": "Descubre el encanto colonial y la riqueza histórica de Morelia.", "image": "./src/assets/img/destinos-img/morelia/lugares/aqueducto-morelia.webp", "link": "../guia-viaje/viajar-a-morelia.html"},
        
                {"id": "destination4", "title": "Zitácuaro", "content": "Descubre la esencia natural y cultural de Zitácuaro.", "image": "./src/assets/img/destinos-img/zitacuaro/lugares/centro-historico.webp", "link": "../guia-viaje/viajar-a-zitacuaro.html"}
                ]'
            >
            </app-destinations-grid>
<br><br>
            
            <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "Destinos Autovías La Línea", "text": "Para los amantes de destinos cálidos"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Uruapan", "content": "Déjate llevar por la magia natural de Uruapan.", "image": "./src/assets/img/destinos-img/uruapan/lugares/centro-historico-uruapan.webp", "link": "../guia-viaje/viajar-a-uruapan.html"},

                {"id": "destination2", "title": "Ixtapa", "content": "Descubre la esencia tropical de Ixtapa, Guerrero.", "image": "./src/assets/img/destinos-img/ixtapa/lugares/isla-ixtapa.webp", "link": "../guia-viaje/viajar-a-ixtapa.html"},

                {"id": "destination3", "title": "Atlacomulco", "content": "Explora la esencia histórica y natural de Atlacomulco.", "image": "./src/assets/img/destinos-img/atlacomulco/lugares/plaza-civica.webp", "link": "../guia-viaje/viajar-a-atlacomulco.html"},

                {"id": "destination4", "title": "Querétaro", "content": "Déjate sorprender por la historia y el encanto de Querétaro.", "image": "./src/assets/img/destinos-img/queretaro/lugares/acueducto-queretaro.webp", "link": "../guia-viaje/viajar-a-queretaro.html"},

                {"id": "destination5", "title": "Maravatío", "content": "Descubre los maravillosos lugares de Maravatío.", "image": "./src/assets/img/destinos-img/maravatio/lugares/torre-mirador-3.webp", "link": "../guia-viaje/viajar-a-maravatio.html"}
                ]'
            >
            </app-destinations-grid>
            
            <app-other-services
                section-title-id="other-programs-section"
                title-data-src="../src/data/other-services-loyalty-titles.json"
                cards-data-src="../src/data/other-services-loyalty-cards.json"
            >
            </app-other-services>
            <app-other-services
                title-data-src="../src/data/other-services-general-titles.json"
                cards-data-src="../src/data/other-services-general-cards.json"
        >
            </app-other-services>
            <app-blog></app-blog>
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
        `;
	}
}
customElements.define("page-home", PageHome);
