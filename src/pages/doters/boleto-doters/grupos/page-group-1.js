/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupOne extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"Manzanillo a México Poniente",
			"México Poniente a Manzanillo",
			"Toluca a Manzanillo",
			"Manzanillo a Toluca",
			"Tecomán a México Poniente",
			"México Poniente a Tecomán",
			"Manzanillo a Atlacomulco",
			"Atlacomulco a Manzanillo",
			"Toluca a Tecomán",
			"Tecomán a Toluca",
			"Colima a Atlacomulco",
			"Atlacomulco a Colima",
			"Colima a Terminal Pri Toluca",
			"Terminal Pri Toluca a Colima",
			"Colima a Toluca",
			"Toluca a Colima",
			"México Poniente a Cd. Guzmán",
			"Cd. Guzmán a México Poniente",
			"Colima a México Poniente",
			"México Poniente a Colima",
			"Tecomán a Atlacomulco",
			"Atlacomulco a Tecomán",
			"México Poniente a Lázaro Cárdenas",
			"Lázaro Cárdenas a México Poniente",
			"Zihuatanejo a Aeropuerto Guadalajara",
			"Aeropuerto Guadalajara a Zihuatanejo",
			"Río Tíber a Lázaro Cárdenas",
			"Lázaro Cárdenas a Río Tíber",
			"México Norte a 4 Caminos",
			"4 Caminos a México Norte",
			"México Poniente a 4 Caminos",
			"4 Caminos a México Poniente",
			"Tepotzotlán a Lázaro Cárdenas",
			"Lázaro Cárdenas a Tepotzotlán",
			"México Norte a Lázaro Cárdenas",
			"Lázaro Cárdenas a México Norte",
			"México Poniente a Ixtapa",
			"Ixtapa a México Poniente",
			"México Poniente a Zihuatanejo",
			"Zihuatanejo a México Poniente",
			"México Norte a Ixtapa",
			"Ixtapa a México Norte",
			"México Norte a Zihuatanejo",
			"Zihuatanejo a México Norte",
			"Tepotzotlán a Apatzingán",
			"Apatzingán a Tepotzotlán",
			"Apatzingán a Terminal Pri Toluca",
			"Terminal Pri Toluca a Apatzingán",
			"Toluca a Apatzingán",
			"Apatzingán a Toluca",
			"Guadalajara a Ixtapa",
			"Ixtapa a Guadalajara",
			"Guadalajara a Zihuatanejo",
			"Zihuatanejo a Guadalajara",
			"México Norte a Apatzingán",
			"Apatzingán a México Norte",
			"México Poniente a Apatzingán",
			"Apatzingán a México Poniente",
			"Río Tíber a Zihuatanejo",
			"Zihuatanejo a Río Tíber",
			"Tepotzotlán a Ixtapa",
			"Ixtapa a Tepotzotlán",
			"Tepotzotlán a Zihuatanejo",
			"Zihuatanejo a Tepotzotlán",
			"Zihuatanejo a Terminal Pri Toluca",
			"Ixtapa a Terminal Pri Toluca",
			"Terminal Pri Toluca a Ixtapa",
			"Toluca a Ixtapa",
			"Ixtapa a Toluca",
			"Toluca a Zihuatanejo",
			"Zihuatanejo a Toluca",
			"Lázaro Cárdenas a Aeropuerto Guadalajara",
			"Aeropuerto Guadalajara a Lázaro Cárdenas",
			"Lázaro Cárdenas a Terminal Pri Toluca",
			"Toluca a Lázaro Cárdenas",
			"Lázaro Cárdenas a Toluca",
			"Apatzingán a Manzanillo",
			"Manzanillo a Apatzingán",
			"Morelia a Tecomán",
			"Tecomán a Morelia",
			"Tepotzotlán a 4 Caminos",
			"4 Caminos a Tepotzotlán",
			"Morelia a Manzanillo",
			"Manzanillo a Morelia",
			"Manzanillo a Uruapan",
			"Uruapan a Manzanillo",
			"México Poniente a Huacana",
			"Huacana a México Poniente",
			"4 Caminos a Manzanillo",
			"Manzanillo a 4 Caminos",
			"Guadalajara a Lázaro Cárdenas",
			"Lázaro Cárdenas a Guadalajara",
			"México Norte a Huacana",
			"Huacana a México Norte",
			"4 Caminos a Terminal Pri Toluca",
			"Apatzingán a Tecomán",
			"Tecomán a Apatzingán",
			"Toluca a 4 Caminos",
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
            <h1>Grupo 1 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 1.</p>
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

customElements.define("page-group-one", PageGroupOne);
