/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../../components/app-button-whats.js?v=1.0.2";
import "../../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupNine extends HTMLElement {
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
            <h1>Grupo 9 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 9.</p>
        </div>
        
        <section class="content-section">
            <div class="routes-grid">
                ${routesHtml}
            </div>
        </section>

        <div class="footer-nav">
            <a href="../" class="btn-route btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Regresar
            </a>
        </div>
      </div>
    `;
	}
}
customElements.define("page-group-nine", PageGroupNine);
