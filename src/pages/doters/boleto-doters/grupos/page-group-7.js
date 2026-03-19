/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupSeven extends HTMLElement {
  connectedCallback() {
    // 1. Definimos todas las rutas en un array de strings.
    const routes = [
      "México Norte a Jilotepec",
      "Jilotepec a México Norte",
      "Tequesquinahuac a Jilotepec",
      "Jilotepec a Tequesquinahuac",
      "Tepalcatepec a Apatzingán",
      "Apatzingán a Tepalcatepec",
      "Atlacomulco a Terminal Pri Toluca",
      "Terminal Pri Toluca a Atlacomulco",
      "Atlacomulco a Toluca",
      "Toluca a Atlacomulco",
      "Colima a Tecomán",
      "Tecomán a Colima",
      "Cd. Hidalgo a Queréndaro",
      "Queréndaro a Cd. Hidalgo",
      "Progreso a Jilotepec",
      "Jilotepec a Progreso",
      "Tepalcatepec a Buenavista",
      "Ario De Rosales a Huacana",
      "Huacana a Ario De Rosales",
      "Ario De Rosales a Pátzcuaro",
      "Pátzcuaro a Ario De Rosales",
      "4 Caminos a Buenavista",
      "Cd. Guzmán a Tamazula",
      "Tamazula a Cd. Guzmán",
      "Huetamo a Tiquicheo",
      "Tiquicheo a Huetamo",
      "Pátzcuaro a Tacámbaro",
      "Tacámbaro a Pátzcuaro",
      "Pátzcuaro a Uruapan",
      "Uruapan a Pátzcuaro",
      "Zitácuaro a Tuzantla",
      "Tuzantla a Zitácuaro",
      "Tepotzotlán a Jilotepec",
      "Jilotepec a Tepotzotlán",
      "Uruapan a Paracho",
      "Paracho a Uruapan",
      "Morelia a Pátzcuaro",
      "Pátzcuaro a Morelia",
      "Jilotepec a Aeropuerto Santa Lucía",
      "Aeropuerto Santa Lucía a Jilotepec",
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
            <h1>Grupo 7 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 7.</p>
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
customElements.define("page-group-seven", PageGroupSeven);
