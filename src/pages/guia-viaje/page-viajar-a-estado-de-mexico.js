/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.0.1";
import "../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
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

class AppViajarEstadoDeMexico extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
			<app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/global/banner/Atlacomulco_Banner_web.webp","mediumImage": "../src/assets/img/global/banner/tablet/Atlacomulco_tablet.webp", "smallImage": "./src/assets/img/global/banner/mobile/Atlacomulco_mobile.webp", "link": "#index.html/banner1"}]'
			>
			</app-banner-slider>
			<app-payments></app-payments>
			
			<!-- Components for page -->

			<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwRaNTXjC4hzOr7ORLU-a3-j_UGbsvK7KtPHMWzlMIR7xRNvcNaGo5GljsW9D44Ws7OgfDXE9ZPKBCpsr_uf_g_-ztpdGzfFPThxKuqb2hzD5nT362Mv4oP93kRGTkAx9UnO_P23Y8b_Zh0Kzt0FfD8RNTp80XvDNVvgy3PM5RpC3-DSI9e35zvy0R7kCRBq5Q6i4QAZYrBVNatDorVIR8azyZFtazNR6phcIv6Whute_reg49odo8zdG3_O3E2MSzmGst9hwG-0A");'>
					<div class="hero__content">
							<h1 class="hero__title">Autobús a Morelia</h1>
							<p class="hero__subtitle">Descubre la belleza de Morelia viajando en autobús desde la Ciudad de México. Disfruta de un viaje cómodo, seguro y económico.</p>
							<a href="../destinos/autobus-a-estado-de-mexico.html" class="btn btn--primary btn--large" target="_blank" aria-label="Comprar boletos" tabindex="0">Conoce más</a>
					</div>
			</section>

			<section class="features">
					<div class="container">
							<h2 class="section-title">¿Por qué viajar en autobús a Morelia?</h2>
							<div class="features__grid">
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-armchair material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Comodidad</h3>
											<p class="feature-card__description">Viaja en autobuses modernos con asientos reclinables, aire acondicionado y entretenimiento a bordo.</p>
									</div>
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-pig material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Ahorro</h3>
											<p class="feature-card__description">Disfruta de tarifas competitivas y promociones especiales para que tu viaje sea más accesible.</p>
									</div>
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-travel-security material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Viaje sin complicaciones</h3>
											<p class="feature-card__description">Olvídate del tráfico y el estrés de conducir. Relájate y disfruta del paisaje.</p>
									</div>
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-montain material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Paisajes inolvidables</h3>
											<p class="feature-card__description">Admira la belleza de los paisajes mexicanos durante tu trayecto a Morelia.</p>
									</div>
							</div>
					</div>
			</section>

			<section class="route-info">
					<div class="container route-info__container">
							<h2 class="section-title">Trayecto destacado CDMX → Morelia</h2>
							<div class="route-info__card">
									<div class="route-info__timeline">
											<div class="route-info__line"></div>
											<div class="route-info__stops">
													<div class="route-info__stop">
															<div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
															<span class="route-info__stop-name">Ciudad de México</span>
													</div>
													<div class="route-info__stop">
															<span class="route-info__stop-name">Morelia</span>
															<div class="route-info__stop-icon"><span class="icon-place" material-symbols-outlined"></span></div>
													</div>
											</div>
									</div>
									<div class="route-info__details-grid">
											<div class="detail-item">
													<p class="detail-item__label">Duración</p>
													<p class="detail-item__value">4.5 horas</p>
											</div>
											<div class="detail-item">
													<p class="detail-item__label">Frecuencia</p>
													<p class="detail-item__value">Diaria</p>
											</div>
											<div class="detail-item">
													<p class="detail-item__label">Tipo de autobús</p>
													<p class="detail-item__value">Doble piso, Ejecutivo</p>
											</div>
									</div>
							</div>
					</div>
			</section>

			<section class="attractions">
					<div class="container">
							<h2 class="section-title">Atracciones cerca de la terminal</h2>
							<div class="attractions__grid">
									<div class="attraction-card">
											<div class="attraction-card__image" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjRxud9AgXCbEuWBhciwCg-2_V_cucbSOLteunuqBydjl-LArm90RXflRQrkPGOjFA4Lva97g9liAZbTOAtoxjYR_KmTMlC_6JgYjUoOXpXgCNRDlktZ-5t04roVs4n27fliWl0fmmxv23CowdMSC23l55PV3iF3cMxFR_uZmQO3rfOXWoss8pMIjMryH7mrSHUzzX25-q9Yja2_sRFz8p1k3PmhP_NINRILMUn5G6kFm1W_TX3m1wE4C2wqYu3Q4lxf6MDqOA2Zc")'></div>
											<div class="attraction-card__content">
													<h3 class="attraction-card__title">Palacio de Gobierno</h3>
											</div>
									</div>
									<div class="attraction-card">
											<div class="attraction-card__image" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjRxud9AgXCbEuWBhciwCg-2_V_cucbSOLteunuqBydjl-LArm90RXflRQrkPGOjFA4Lva97g9liAZbTOAtoxjYR_KmTMlC_6JgYjUoOXpXgCNRDlktZ-5t04roVs4n27fliWl0fmmxv23CowdMSC23l55PV3iF3cMxFR_uZmQO3rfOXWoss8pMIjMryH7mrSHUzzX25-q9Yja2_sRFz8p1k3PmhP_NINRILMUn5G6kFm1W_TX3m1wE4C2wqYu3Q4lxf6MDqOA2Zc")'></div>
											<div class="attraction-card__content">
													<h3 class="attraction-card__title">La Soterraña</h3>
											</div>
									</div>
									<div class="attraction-card">
											<div class="attraction-card__image" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjRxud9AgXCbEuWBhciwCg-2_V_cucbSOLteunuqBydjl-LArm90RXflRQrkPGOjFA4Lva97g9liAZbTOAtoxjYR_KmTMlC_6JgYjUoOXpXgCNRDlktZ-5t04roVs4n27fliWl0fmmxv23CowdMSC23l55PV3iF3cMxFR_uZmQO3rfOXWoss8pMIjMryH7mrSHUzzX25-q9Yja2_sRFz8p1k3PmhP_NINRILMUn5G6kFm1W_TX3m1wE4C2wqYu3Q4lxf6MDqOA2Zc")'></div>
											<div class="attraction-card__content">
													<h3 class="attraction-card__title">Mercado Independencia</h3>
											</div>
									</div>
							</div>
					</div>
			</section>

			<section class="faq">
					<div class="container faq__container">
							<h2 class="section-title">Preguntas frecuentes</h2>
							<div class="faq__list">
									<details class="faq-item">
											<summary class="faq-item__summary">
													<span class="faq-item__question">¿Cuál es el precio del boleto de autobús de CDMX a Morelia?</span>
													<span class="faq-item__icon">
															<span class="material-symbols-outlined">expand_more</span>
													</span>
											</summary>
											<p class="faq-item__answer">Los precios varían según la temporada, la línea de autobús y el tipo de servicio. Te recomendamos consultar los precios actualizados en nuestra sección de compra de boletos.</p>
									</details>
									<details class="faq-item">
											<summary class="faq-item__summary">
													<span class="faq-item__question">¿Cuáles son los horarios de salida de los autobuses?</span>
													<span class="faq-item__icon">
															<span class="material-symbols-outlined">expand_more</span>
													</span>
											</summary>
											<p class="faq-item__answer">Contamos con salidas diarias y frecuentes. Puedes ver todos los horarios disponibles al momento de seleccionar tu fecha de viaje en el portal de compra.</p>
									</details>
									<details class="faq-item">
											<summary class="faq-item__summary">
													<span class="faq-item__question">¿Qué servicios incluyen los autobuses ejecutivos?</span>
													<span class="faq-item__icon">
															<span class="material-symbols-outlined">expand_more</span>
													</span>
											</summary>
											<p class="faq-item__answer">Nuestros autobuses ejecutivos ofrecen asientos más amplios y cómodos, pantallas individuales, conexión Wi-Fi, sanitarios y un refrigerio de cortesía para hacer tu viaje más placentero.</p>
									</details>
							</div>
					</div>
			</section>

			<section class="cta">
					<div class="container">
							<h2 class="cta__title">¡Viaja a Morelia con Autovías La Línea!</h2>
							<p class="cta__subtitle">No esperes más para descubrir una de las ciudades más bellas de México. Tu aventura está a solo un clic de distancia.</p>
							<a href="../destinos/autobus-a-estado-de-mexico.html" class="btn btn--primary btn--large" target="_blank" aria-label="Comprar boletos" tabindex="0" >Consulta horarios y compra tu boleto</a>
					</div>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define(
	"page-viajar-a-estado-de-mexico",
	AppViajarEstadoDeMexico,
);
