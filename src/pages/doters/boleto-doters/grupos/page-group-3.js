/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupThree extends HTMLElement {
  connectedCallback() {
    // 1. Definimos todas las rutas en un array de strings.
    const routes = [
      "Guadalajara a Pátzcuaro",
      "Pátzcuaro a Guadalajara",
      "Purépero a Lázaro Cárdenas",
      "Lázaro Cárdenas a Purépero",
      "Uruapan a Atlacomulco",
      "Atlacomulco a Uruapan",
      "Pátzcuaro a Terminal Pri Toluca",
      "Terminal Pri Toluca a Pátzcuaro",
      "Pátzcuaro a Toluca",
      "Toluca a Pátzcuaro",
      "Guadalajara a Morelia",
      "Morelia a Guadalajara",
      "México Norte a Morelia",
      "Morelia a México Norte",
      "Tecomán a Aeropuerto Guadalajara",
      "Guadalajara a Tecomán",
      "Tecomán a Guadalajara",
      "México Poniente a Morelia",
      "Morelia a México Poniente",
      "Tren Ligero a Tecomán",
      "Tecomán a Tren Ligero",
      "México Norte a Dolores",
      "Dolores a México Norte",
      "Río Tíber a Morelia",
      "Morelia a Río Tíber",
      "Morelia a Tepotzotlán",
      "Tepotzotlán a Morelia",
      "Guadalajara a Uruapan",
      "Uruapan a Guadalajara",
      "Morelia a Terminal Pri Toluca",
      "Morelia a Toluca",
      "Toluca a Morelia",
      "México Poniente a Queréndaro",
      "Queréndaro a México Poniente",
      "Guadalajara a Los Reyes",
      "México Poniente a Ucareo",
      "Ucareo a México Poniente",
      "Jilotepec a Morelia",
      "Morelia a Jilotepec",
      "Pátzcuaro a Atlacomulco",
      "Atlacomulco a Pátzcuaro",
      "Uruapan a Ixtapa",
      "Ixtapa a Uruapan",
      "México Poniente a Crucero de Charo",
      "Crucero de Charo a México Poniente",
      "Uruapan a Zihuatanejo",
      "Zihuatanejo a Uruapan",
      "Lázaro Cárdenas a Uruapan",
      "Uruapan a Lázaro Cárdenas",
      "México Poniente a Jeráhuaro",
      "Jeráhuaro a México Poniente",
      "México Poniente a Huetamo",
      "Huetamo a México Poniente",
      "Huetamo a Río Tíber",
      "Río Tíber a Huetamo",
      "Apatzingán a Morelia",
      "Morelia a Apatzingán",
      "Ixtapa a 4 Caminos",
      "4 Caminos a Ixtapa",
      "Zihuatanejo a 4 Caminos",
      "4 Caminos a Zihuatanejo",
      "México Poniente a Acámbaro",
      "Acámbaro a México Poniente",
      "México Poniente a Quenchendio",
      "Quenchendio a México Poniente",
      "Colima a Aeropuerto Guadalajara",
      "Aeropuerto Santa Lucía a Morelia",
      "Morelia a Aeropuerto Santa Lucía",
      "Maravatío a Uruapan",
      "Uruapan a Maravatío",
      "México Poniente a Melchor Ocampo",
      "Melchor Ocampo a México Poniente",
      "México Poniente a Tiquicheo",
      "Tiquicheo a México Poniente",
      "México Poniente a Crucero Ucareo",
      "Crucero Ucareo a México Poniente",
      "Tepotzotlán a Dolores",
      "Dolores a Tepotzotlán",
      "Tren Ligero a Colima",
      "Colima a Tren Ligero",
      "Guadalajara a Colima",
      "Colima a Guadalajara",
      "Río Tíber a Acámbaro",
      "Acámbaro a Río Tíber",
      "México Poniente a Tuzantla",
      "Tuzantla a México Poniente",
      "Toluca a Nahuatzen",
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
            <h1>Grupo 3 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 3.</p>
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
customElements.define("page-group-three", PageGroupThree);
