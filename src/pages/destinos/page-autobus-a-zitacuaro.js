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

class AppBoletosAutobusZitacuaro extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-cotiza></app-cotiza>
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>
			<app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/global/banner/Atlacomulco_Banner_web.webp","mediumImage": "../src/assets/img/global/banner/tablet/Atlacomulco_tablet.webp", "smallImage": "./src/assets/img/global/banner/mobile/Atlacomulco_mobile.webp", "link": "#index.html/banner1"}]'
			>
			</app-banner-slider>
			<app-payments></app-payments>
			
			<!-- Components for page -->

			<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDns_0shPK-2nErpAPYDUpUxwqTxQVi6CYtKnLzNyg9WpnR_5K29L7w55xX7sLqFL-0N3v61AKpQnDjNlHpQsyvKIgfSMnzP8FcS9y_wjwtn-LTdYvhQ47thgPx25OYK1av2aLqgYXlaJb5LZXR1cp4D8Ev4fJGJ2Ydi-tnuU8LNazUU767S-2Tr2I4oXHST8jXrWC9aBNw-nM0-GIwb2csgmYqHBk-Sd0KW8cJf1sCD9xcCSBjqzhdXdBR5gCuqyCF6dGTI34kgB0x");'>
        <article class="container hero__content">
            <h1 class="hero__title">Autobús a Morelia</h1>
            <p class="hero__subtitle">
                Viaja desde CDMX a Morelia con la máxima comodidad y seguridad. Disfruta de un viaje sin preocupaciones y llega a tu destino listo para explorar.
            </p>
            <a href="../boletos-autobus/zitacuaro.html" class="btn btn--primary" target="_blank" aria-label="Comprar boletos" tabindex="0">
                Comprar boletos
            </a>
        </article>
			</section>

			<section class="features">
					<div class="container">
							<div class="section-header">
									<h2 class="section-title">¿Por qué viajar en autobús a Morelia?</h2>
									<p class="section-subtitle">Descubre los beneficios que hacen de tu viaje una experiencia única.</p>
							</div>
							<article class="features__grid">
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-armchair material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Comodidad garantizada</h3>
											<p class="feature-card__description">Asientos reclinables, aire acondicionado y entretenimiento a bordo para un viaje placentero.</p>
									</div>
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-pig material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Ahorro inteligente</h3>
											<p class="feature-card__description">Precios accesibles y promociones especiales para que tu viaje sea económico.</p>
									</div>
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-car material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Viaje sin complicaciones</h3>
											<p class="feature-card__description">Olvídate del tráfico y el estacionamiento. Relájate y disfruta del camino.</p>
									</div>
									<div class="feature-card">
											<div class="feature-card__icon-wrapper">
													<span class="icon-camera material-symbols-outlined"></span>
											</div>
											<h3 class="feature-card__title">Paisajes inolvidables</h3>
											<p class="feature-card__description">Admira la belleza de los paisajes mexicanos mientras te diriges a tu destino.</p>
									</div>
							</article>
					</div>
			</section>

			<section class="route-info">
					<div class="container">
							<div class="section-header">
									<h2 class="section-title">Trayecto CDMX → Morelia</h2>
							</div>
							<article class="route-info__table-container">
									<div class="table-wrapper">
											<table class="data-table">
													<thead>
															<tr>
																	<th>Característica</th>
																	<th>Detalle</th>
															</tr>
													</thead>
													<tbody>
															<tr>
																	<td>Duración</td>
																	<td>Aproximadamente 4 horas</td>
															</tr>
															<tr>
																	<td>Frecuencia</td>
																	<td>Salidas cada hora</td>
															</tr>
															<tr>
																	<td>Tipo de autobús</td>
																	<td>Ejecutivo y de lujo</td>
															</tr>
													</tbody>
											</table>
									</div>
							</article>
					</div>
			</section>

			<section class="attractions">
					<div class="container">
							<div class="section-header">
									<h2 class="section-title">Atracciones cerca de la terminal</h2>
									<p class="section-subtitle">Aprovecha al máximo tu llegada a Morelia.</p>
							</div>
							<article class="attractions__grid">
									<div class="attraction-card">
											<img alt="Palacio de Gobierno de Morelia" class="attraction-card__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClcDGRROURk5mV6h5ozmbtxsdPrxtSJ1AK6JhHYDKFujrHBEg9yHxzGTGW2ygDKDQ-M2V7ARuevMoA0iL3ndJbxgvg0OCVwIJgKlgri-x-hox-JJTVLMRpsy6riyc-27Yib7zY6aR3NFeO3zoWIqOlPRnKhxyDGfmrDOPhnfoX0K6zbH_7QpF66eVaIemziMmB7WyEWb_G57ZVEZn8haKDyBirf5XJljj8Kwx0oMYTNHU6wyqjwxxkTMuqJc-_p3V6at78V1m6rAii"/>
											<div>
													<h3 class="attraction-card__title">Palacio de Gobierno</h3>
													<p class="attraction-card__description">Admira la arquitectura colonial y la historia de este emblemático edificio.</p>
											</div>
									</div>
									<div class="attraction-card">
											<img alt="La Soterraña, acueducto subterráneo en Morelia" class="attraction-card__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS60Wogx2Dqx5br7MKZIYdbYxmpzZeYviADMhei5eWnewxllDRu3hBt1KyxBtJQ5v3OuU-ffL6QTdR44BIJYulYnYNr5F9aaegoIxgSZTt8RqfCEJvXapjPGUc3ZJtkTEB8ogiRScJr8pM9arChBVOOvGZsGyBeK7VTp0EvXZVxuANKHYR3MorKM3p-Dazz8LoWCxssPGwvc_4ahmjSIklU9sK1mywUWT22X1RKvI7kbe_EF26FdnWVQxVEc7S3ASfXM2JYO8J49ab"/>
											<div>
													<h3 class="attraction-card__title">La Soterraña</h3>
													<p class="attraction-card__description">Explora este antiguo acueducto subterráneo y descubre su fascinante pasado.</p>
											</div>
									</div>
									<div class="attraction-card">
											<img alt="Mercado Independencia en Morelia" class="attraction-card__image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBfcdADlt1nRTjF2I21lukvtJDe7H4EgsWA6l3amfrx8jHXJevrlsM2ZfRY5eQd6RvTZcdNEpEyV8djjEFbbJMyEQzbBjS83s9vspJ4nSNugMcTLzQKc_rsvbbmDoHw7XRatFHULsolj29D6x-8b8JvltVGjySScb6sIjGY4_u0qLJ2SfbL241Mlr_aVHqExfqte56PNdZV0brgqunRkqzV8id4qd0SS16NW6JThJLIALgsTzFIlWyxMxMp5edDCISKfxY4gzxUDH_"/>
											<div>
													<h3 class="attraction-card__title">Mercado Independencia</h3>
													<p class="attraction-card__description">Sumérgete en la cultura local y disfruta de la gastronomía moreliana.</p>
											</div>
									</div>
							</article>
					</div>
			</section>

			<section class="faq">
					<div class="container">
							<article class="faq__content">
									<h2 class="section-title">Preguntas Frecuentes</h2>
									<div class="faq__list">
											<details class="faq-item" open>
													<summary class="faq-item__summary">
															<h3 class="faq-item__question">¿Cuál es el costo del boleto?</h3>
															<div class="faq-item__icon">
																	<svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
															</div>
													</summary>
													<p class="faq-item__answer">El costo del boleto varía según la temporada y el tipo de autobús. Consulta nuestros precios en línea o en taquilla.</p>
											</details>
											<details class="faq-item">
													<summary class="faq-item__summary">
															<h3 class="faq-item__question">¿Qué servicios incluye el viaje?</h3>
															<div class="faq-item__icon">
																	<svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
															</div>
													</summary>
													<p class="faq-item__answer">Nuestros autobuses cuentan con Wi-Fi, conexiones eléctricas, baño y asientos cómodos para garantizar un viaje placentero.</p>
											</details>
											<details class="faq-item">
													<summary class="faq-item__summary">
															<h3 class="faq-item__question">¿Cómo puedo comprar mis boletos?</h3>
															<div class="faq-item__icon">
																	<svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
															</div>
													</summary>
													<p class="faq-item__answer">Puedes comprar tus boletos fácilmente a través de nuestra página web, nuestra aplicación móvil, o directamente en las taquillas de la terminal.</p>
											</details>
									</div>
							</artile>
					</div>
			</section>

			<section class="cta">
					<article class="container cta__content">
							<h2 class="cta__title">¡Viaja a Morelia con Autovías La Línea!</h2>
							<p class="cta__subtitle">No esperes más, reserva tu asiento ahora y prepárate para una experiencia inolvidable.</p>
							<div class="cta__action">
									<a href="../boletos-autobus/zitacuaro.html" class="btn btn--primary" aria-label="Comprar boletos" tabindex="0">
											Comprar boletos ahora
									</a>
							</div>
					</article>
			</section>
			
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define("page-autobus-a-zitacuaro", AppBoletosAutobusZitacuaro);
