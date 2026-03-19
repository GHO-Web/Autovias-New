/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupFour extends HTMLElement {
  connectedCallback() {
    // 1. Definimos todas las rutas en un array de strings.
    const routes = [
      "México Poniente a Crucero Limón",
      "Crucero Limón a México Poniente",
      "Morelia a Atlacomulco",
      "Atlacomulco a Morelia",
      "Lázaro Cárdenas a 4 Caminos",
      "4 Caminos a Lázaro Cárdenas",
      "Morelia a 4 Caminos",
      "4 Caminos a Morelia",
      "Morelia a Jiquilpan Mich.",
      "Jiquilpan Mich. a Morelia",
      "Zamora a Aeropuerto Guadalajara",
      "Aeropuerto Guadalajara a Zamora",
      "Cd. Guzmán a Manzanillo",
      "Manzanillo a Cd. Guzmán",
      "México Poniente a Las Juntas",
      "Las Juntas a México Poniente",
      "Morelia a Sahuayo",
      "Sahuayo a Morelia",
      "Guadalajara a Purépero",
      "Purépero a Guadalajara",
      "Toluca a Queréndaro",
      "Queréndaro a Toluca",
      "Morelia a Zamora",
      "Zamora a Morelia",
      "Tamazula a Aeropuerto Guadalajara",
      "Aeropuerto Guadalajara a Tamazula",
      "México Poniente a Cd. Hidalgo",
      "Cd. Hidalgo a México Poniente",
      "Tepalcatepec a Zamora",
      "Zamora a Tepalcatepec",
      "Río Tíber a Cd. Hidalgo",
      "Cd. Hidalgo a Río Tíber",
      "Apatzingán a Zamora",
      "Zamora a Apatzingán",
      "Guadalajara a Zamora",
      "Zamora a Guadalajara",
      "Tamazula a Guadalajara",
      "Guadalajara a Tamazula",
      "Tamazula a Tlaquepaque",
      "Tlaquepaque a Tamazula",
      "México Poniente a Tuxpan Mich.",
      "Tuxpan Mich. a México Poniente",
      "México Poniente a Maravatío",
      "Maravatío a México Poniente",
      "México Poniente a Parícuaro",
      "Parícuaro a México Poniente",
      "México Poniente a Benito Juárez",
      "Benito Juárez a México Poniente",
      "Atlacomulco a Acámbaro",
      "Acámbaro a Atlacomulco",
      "Huetamo a El Monumento",
      "El Monumento a Huetamo",
      "Río Tíber a Maravatío",
      "Maravatío a Río Tíber",
      "Purépero a Apatzingán",
      "Apatzingán a Purépero",
      "México Poniente a Zitácuaro",
      "Zitácuaro a México Poniente",
      "Río Tíber a Zitácuaro",
      "Zitácuaro a Río Tíber",
      "Zamora a Tuxpan Mich.",
      "Tuxpan Mich. a Zamora",
      "Zamora a Buenavista",
      "Cd. Guzmán a Aeropuerto Guadalajara",
      "Aeropuerto Guadalajara a Cd. Guzmán",
      "Querétaro a Terminal Pri Toluca",
      "Terminal Pri Toluca a Querétaro",
      "Querétaro a Toluca",
      "Toluca a Querétaro",
      "Tecomán a Cd. Guzmán",
      "Cd. Guzmán a Tecomán",
      "Tren Ligero a Cd. Guzmán",
      "Cd. Guzmán a Tren Ligero",
      "4 Caminos a Zamora",
      "Zamora a 4 Caminos",
      "Concepción a Aeropuerto Guadalajara",
      "Uruapan a Tepalcatepec",
      "Atlacomulco a Queréndaro",
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
            <h1>Grupo 4 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 4.</p>
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
customElements.define("page-group-four", PageGroupFour);
