/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../../../components/english/app-header-english.js?v=1.0.2";
import "../../../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/


class PageGroupNineEnglish extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"Puruarán a Tacámbaro",
			"Tacámbaro a Puruarán",
			"Morelia a C. Charo",
			"C. Charo a Morelia",
			"Buenavista a Apatzingán",
			"Apatzingán a Buenavista",
			"Morelia a Crucero de Charo",
			"Crucero de Charo a Morelia",
			"Tuxpan Mich. a Cd. Hidalgo",
			"Cd. Hidalgo a Tuxpan Mich.",
			"Tuxpan Mich. a Zitácuaro",
			"Zitácuaro a Tuxpan Mich.",
			"Progreso a Atlacomulco",
			"Atlacomulco a Progreso",
		];

		// 2. Usamos .map() para transformar cada string del array en un bloque de HTML.
		//    .join('') une todos los bloques en un solo string.
		const routesHtml = routes
			.map(
				(route) => `
      <div class="route-item">
          <span>${route}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    `,
			)
			.join("");

		// 3. Inyectamos el HTML generado dinámicamente en la plantilla principal.
		this.innerHTML = `

      <div class="main-container">
        <div class="content-header">
            <h1>Group Nine Doters Tickets</h1>
            <p class="subtitle">These are the routes available for redeeming points in Group Nine.</p>
        </div>
        
        <section class="content-section">
            <div class="routes-grid">
                ${routesHtml}
            </div>
        </section>

        <div class="footer-nav">
            <a href="../" class="btn-route btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Go Back
            </a>
        </div>
      </div>
    `;
	}
}

customElements.define("page-group-nine-english", PageGroupNineEnglish);
