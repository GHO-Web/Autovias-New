/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
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

class AppAutobusMaravatio extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>
			<app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/global/banner/Atlacomulco_Banner_web.webp","mediumImage": "./src/assets/img/global/banner/tablet/Atlacomulco_tablet.webp", "smallImage": "./src/assets/img/global/banner/mobile/Atlacomulco_mobile.webp", "link": "#index.html/banner1"}]'
			>
			</app-banner-slider>
			<app-payments></app-payments>
			
			<!-- Components for page -->

			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define("page-autobus-a-maravatio", AppAutobusMaravatio);
