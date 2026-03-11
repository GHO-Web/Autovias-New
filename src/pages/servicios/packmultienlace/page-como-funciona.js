
/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "/src/components/packmultienlace/app-cotiza-pack.js";
import "/src/components/app-banner-slider.js";
import "/src/components/app-section-title.js";
import "/src/components/packmultienlace/app-dropdown-quest-services.js";
import "/src/components/packmultienlace/app-header-pack-multienlace.js";
import "/src/components/packmultienlace/app-footer-pack-multienlace.js";
import "/src/components/packmultienlace/app-time-line-packm.js";

class LayoutComoFunciona extends HTMLElement {
  async connectedCallback() {
    // Make connectedCallback async
    this.innerHTML = `
        <app-cotiza-pack></app-cotiza-pack>
        <div class="cotiza-pack-space"></div>
        <app-banner-slider
            slides-data='[
              {"id": "slide1", "title": "Banner 1", "image": "/src/assets/img/paqueteria/banner/web/pack-como-web.webp","mediumImage": "/src/assets/img/paqueteria/banner/tablet/pack-como-tablet.webp", "smallImage": "/src/assets/img/paqueteria/banner/movil/pack-como-mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
        
        <app-section-title section-title="¿Cómo funciona el servicio?"></app-section-title>
        
        <section class="__como-funciona__container">
          <app-dropdown-quest-services></app-dropdown-quest-services>
        </section>
      `;

    // Fetch data and pass it to the custom element
    const dropdownQuestServicesElement = this.querySelector(
      "app-dropdown-quest-services",
    );
    if (dropdownQuestServicesElement) {
      try {
        const response = await fetch("/src/data/dropdown-quest-services.json"); // Path to the new JSON file
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dropdownData = await response.json();
        dropdownQuestServicesElement.setDropdownData(dropdownData);
      } catch (error) {
        console.error("Error loading dropdown data:", error);
        // Optionally display an error message in the component
        dropdownQuestServicesElement.innerHTML =
          "<p>Error al cargar las preguntas frecuentes.</p>";
      }
    }
  }
}

customElements.define("page-como-funciona", LayoutComoFunciona);
