/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupTwo extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"Guadalajara a México Norte",
			"México Norte a Guadalajara",
			"Guadalajara a México Poniente",
			"México Poniente a Guadalajara",
			"Guadalajara a Terminal Pri Toluca",
			"México Norte a Puruarán",
			"Puruarán a México Norte",
			"México Poniente a Puruarán",
			"Puruarán a México Poniente",
			"México Poniente a Zamora",
			"Zamora a México Poniente",
			"Atlacomulco a Lázaro Cárdenas",
			"Lázaro Cárdenas a Atlacomulco",
			"Guadalajara a Tuxpan Mich.",
			"Tuxpan Mich. a Guadalajara",
			"Guadalajara a Toluca",
			"Toluca a Guadalajara",
			"México Poniente a Uruapan",
			"Uruapan a México Poniente",
			"México Norte a Uruapan",
			"Uruapan a México Norte",
			"Guadalajara a Cd. Hidalgo",
			"Cd. Hidalgo a Guadalajara",
			"Maravatío a Guadalajara",
			"Guadalajara a Maravatío",
			"Apatzingán a Colima",
			"Colima a Apatzingán",
			"México Norte a Ario De Rosales",
			"Ario De Rosales a México Norte",
			"México Poniente a Ario De Rosales",
			"Ario De Rosales a México Poniente",
			"México Poniente a Paracho",
			"Paracho a México Poniente",
			"México Poniente a Tacámbaro",
			"Tacámbaro a México Poniente",
			"México Norte a Tacámbaro",
			"Tacámbaro a México Norte",
			"4 Caminos a Tecomán",
			"Tecomán a 4 Caminos",
			"Maravatío a Lázaro Cárdenas",
			"Lázaro Cárdenas a Maravatío",
			"Zacapu a México Poniente",
			"México Poniente a Zacapu",
			"Guadalajara a Tepalcatepec",
			"Tepalcatepec a Guadalajara",
			"Maravatío a Zihuatanejo",
			"Zihuatanejo a Maravatío",
			"Toluca a Uruapan",
			"Uruapan a Toluca",
			"Tecomán a Uruapan",
			"Uruapan a Tecomán",
			"Tepotzotlán a Uruapan",
			"Uruapan a Tepotzotlán",
			"Uruapan a Terminal Pri Toluca",
			"Apatzingán a Aeropuerto Guadalajara",
			"Morelia a Colima",
			"Colima a Morelia",
			"México Poniente a Cherán",
			"Cherán a México Poniente",
			"Guadalajara a Atlacomulco",
			"Atlacomulco a Guadalajara",
			"Colima a Uruapan",
			"Uruapan a Colima",
			"Guadalajara a Apatzingán",
			"Apatzingán a Guadalajara",
			"Huacana a Terminal Pri Toluca",
			"Huacana a Toluca",
			"Toluca a Huacana",
			"4 Caminos a Colima",
			"Colima a 4 Caminos",
			"Guadalajara a Puruarán",
			"Puruarán a Guadalajara",
			"Guadalajara a Buenavista",
			"México Poniente a Nahuatzen",
			"Nahuatzen a México Poniente",
			"Zamora a Ixtapa",
			"Ixtapa a Zamora",
			"Zamora a Zihuatanejo",
			"Zihuatanejo a Zamora",
			"Ario De Rosales a Terminal Pri Toluca",
			"Ario De Rosales a Toluca",
			"Toluca a Ario De Rosales",
			"Lázaro Cárdenas a Zamora",
			"Zamora a Lázaro Cárdenas",
			"México Poniente a Quiroga",
			"Quiroga a México Poniente",
			"Puruarán a Terminal Pri Toluca",
			"Guadalajara a Tacámbaro",
			"Tacámbaro a Guadalajara",
			"Río Tíber a Uruapan",
			"Uruapan a Río Tíber",
			"4 Caminos a Aeropuerto Guadalajara",
			"Guadalajara a Queréndaro",
			"Queréndaro a Guadalajara",
			"Tacámbaro a Terminal Pri Toluca",
			"Tacámbaro a Toluca",
			"Toluca a Tacámbaro",
			"México Norte a Pátzcuaro",
			"Pátzcuaro a México Norte",
			"México Poniente a Pátzcuaro",
			"Pátzcuaro a México Poniente",
			"Guadalajara a 4 Caminos",
			"4 Caminos a Guadalajara",
			"Morelia a Ixtapa",
			"Ixtapa a Morelia",
			"Morelia a Zihuatanejo",
			"Zihuatanejo a Morelia",
			"Manzanillo a Aeropuerto Guadalajara",
			"Aeropuerto Guadalajara a Manzanillo",
			"Lázaro Cárdenas a Morelia",
			"Morelia a Lázaro Cárdenas",
			"Pátzcuaro a Tepotzotlán",
			"Tepotzotlán a Pátzcuaro",
			"Morelia a Aeropuerto Guadalajara",
			"Guadalajara a Manzanillo",
			"Manzanillo a Guadalajara",
			"Tren Ligero a Manzanillo",
			"Manzanillo a Tren Ligero",
			"México Norte a San Felipe Guanajuato",
			"San Felipe Guanajuato a México Norte",
			"México Poniente a Tizapán",
			"Tizapán a México Poniente",
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
            <h1>Grupo 2 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 2.</p>
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
customElements.define("page-group-two", PageGroupTwo);
