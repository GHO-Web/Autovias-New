/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../../../components/english/app-header.js?v=1.0.2";
import "../../../../../components/english/app-footer.js?v=1.0.2";
import "../../../../../components/english/banners/app-banner-multi-image.js?v=1.0.2";
import "../../../../../components/english/cards/app-card-image-tag-text.js?v=1.0.2";
import "../../../../../components/english/sliders/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

class PageGroupSixEnglish extends HTMLElement {
  connectedCallback() {
    // 1. Definimos todas las rutas en un array de strings.
    const routes = [
      "Lázaro Cárdenas a Ixtapa",
      "Ixtapa a Lázaro Cárdenas",
      "Huetamo a Melchor Ocampo",
      "Melchor Ocampo a Huetamo",
      "Zamora a Zacapu",
      "Zacapu a Zamora",
      "Tuxpan Mich. a Crucero de Charo",
      "Crucero de Charo a Tuxpan Mich.",
      "Crucero Ucareo a Morelia",
      "Morelia a Crucero Ucareo",
      "Morelia a Tuxpan Mich.",
      "Tuxpan Mich. a Morelia",
      "Zihuatanejo a Lázaro Cárdenas",
      "Lázaro Cárdenas a Zihuatanejo",
      "Zitácuaro a Terminal Pri Toluca",
      "Terminal Pri Toluca a Zitácuaro",
      "Tepalcatepec a 4 Caminos",
      "4 Caminos a Tepalcatepec",
      "Zitácuaro a Toluca",
      "Toluca a Zitácuaro",
      "Cd. Hidalgo a Crucero de Charo",
      "Crucero de Charo a Cd. Hidalgo",
      "Morelia a Cd. Hidalgo",
      "Cd. Hidalgo a Morelia",
      "Tepotzotlán a Progreso",
      "Progreso a Tepotzotlán",
      "Zamora a Los Reyes",
      "Zitácuaro a Crucero Limón",
      "Crucero Limón a Zitácuaro",
      "Huetamo a Crucero Limón",
      "Crucero Limón a Huetamo",
      "Morelia a Ario De Rosales",
      "Ario De Rosales a Morelia",
      "Morelia a Quiroga",
      "Quiroga a Morelia",
      "Tuxpan Mich. a Queréndaro",
      "Queréndaro a Tuxpan Mich.",
      "Zamora a Jiquilpan Mich.",
      "Jiquilpan Mich. a Zamora",
      "Zamora a Sahuayo",
      "Sahuayo a Zamora",
      "Atlacomulco a Aeropuerto Santa Lucía",
      "Aeropuerto Santa Lucía a Atlacomulco",
      "Uruapan a 4 Caminos",
      "4 Caminos a Uruapan",
      "Manzanillo a Tecomán",
      "Tecomán a Manzanillo",
      "Maravatío a Queréndaro",
      "Queréndaro a Maravatío",
      "Morelia a Acámbaro",
      "Acámbaro a Morelia",
      "Zitácuaro a Melchor Ocampo",
      "Melchor Ocampo a Zitácuaro",
      "Zitácuaro a Las Juntas",
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
            <h1>Group Six Doters Tickets</h1>
            <p class="subtitle">These are the routes available for redeeming points in Group Six.</p>
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

customElements.define("page-group-six-english", PageGroupSixEnglish);
