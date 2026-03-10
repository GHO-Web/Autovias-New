/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupFive extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"Morelia a Nahuatzen",
			"Nahuatzen a Morelia",
			"Terminal Pri Toluca a Maravatío",
			"Maravatío a Terminal Pri Toluca",
			"Toluca a Maravatío",
			"Maravatío a Toluca",
			"Guadalajara a Cd. Guzmán",
			"Cd. Guzmán a Guadalajara",
			"Tepalcatepec a Los Reyes",
			"Morelia a Uruapan",
			"Uruapan a Morelia",
			"Huetamo a Zitácuaro",
			"Zitácuaro a Huetamo",
			"Cd. Hidalgo a Zamora",
			"Zamora a Cd. Hidalgo",
			"Maravatío a Pátzcuaro",
			"Pátzcuaro a Maravatío",
			"Atlacomulco a Crucero Ucareo",
			"Crucero Ucareo a Atlacomulco",
			"Atlacomulco a Jeráhuaro",
			"Jeráhuaro a Atlacomulco",
			"Atlacomulco a Ucareo",
			"Ucareo a Atlacomulco",
			"Uruapan a Buenavista",
			"Morelia a Huacana",
			"Huacana a Morelia",
			"Morelia a Maravatío",
			"Maravatío a Morelia",
			"Morelia a Puruarán",
			"Puruarán a Morelia",
			"Zitácuaro a C. Eréndira",
			"C. Eréndira a Zitácuaro",
			"Apatzingán a Uruapan",
			"Uruapan a Apatzingán",
			"Tuxpan Mich. a Toluca",
			"Toluca a Tuxpan Mich.",
			"Tacámbaro a Morelia",
			"Morelia a Tacámbaro",
			"Atlacomulco a Querétaro",
			"Querétaro a Atlacomulco",
			"Cd. Guzmán a Colima",
			"Colima a Cd. Guzmán",
			"México Poniente a Atlacomulco",
			"Atlacomulco a México Poniente",
			"Uruapan a Zamora",
			"Zamora a Uruapan",
			"Colima a Manzanillo",
			"Manzanillo a Colima",
			"Morelia a Zitácuaro",
			"Zitácuaro a Morelia",
			"Atlacomulco a Tequesquinahuac",
			"Tequesquinahuac a Atlacomulco",
			"México Norte a Atlacomulco",
			"Atlacomulco a México Norte",
			"Atlacomulco a Tepotzotlán",
			"Tepotzotlán a Atlacomulco",
			"Zitácuaro a Crucero de Charo",
			"Crucero de Charo a Zitácuaro",
			"Morelia a Zacapu",
			"Zacapu a Morelia",
			"Pátzcuaro a Puruarán",
			"Puruarán a Pátzcuaro",
			"Huetamo a Tuzantla",
			"Tuzantla a Huetamo",
			"Maravatío a Atlacomulco",
			"Atlacomulco a Maravatío",
			"Pátzcuaro a Huacana",
			"Huacana a Pátzcuaro",
			"Progreso a Querétaro",
			"Querétaro a Progreso",
			"México Norte a Progreso",
			"Progreso a México Norte",
			"Progreso a México Poniente",
			"México Poniente a Progreso",
			"Río Tíber a Atlacomulco",
			"Atlacomulco a Río Tíber",
			"Zitácuaro a Queréndaro",
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
            <h1>Grupo 5 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 5.</p>
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
customElements.define("page-group-five", PageGroupFive);
