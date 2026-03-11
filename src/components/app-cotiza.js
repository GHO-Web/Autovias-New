class AppCotiza extends HTMLElement {
  static get observedAttributes() {
    return ["lang"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "lang" && oldValue !== newValue) {
      // rebuild with new language
      this.connectedCallback();
    }
  }

  addPageSpacingAfterCotiza() {
    // Usamos un timeout para permitir que el DOM se renderice completamente, asegurando que otros componentes estén disponibles para su selección.
    setTimeout(() => {
      // Si el carrusel de banners existe, este manejará su propio espaciado, por lo que no hacemos nada.
      const bannerExists = document.querySelector("app-banner-slider");
      if (bannerExists) {
        return;
      }

      // Si no hay banner, buscamos el primer elemento de contenido que sigue a app-cotiza.
      let nextElement = this.nextElementSibling;
      while (nextElement) {
        // Ignoramos etiquetas de script u otros elementos no visibles.
        const tagName = nextElement.tagName.toLowerCase();
        if (tagName !== "script" && tagName !== "style") {
          break; // Encontramos un elemento de contenido.
        }
        nextElement = nextElement.nextElementSibling;
      }

      // Agregamos una clase a este elemento para poder estilizarlo con CSS.
      if (nextElement) {
        nextElement.classList.add("content-after-cotiza");
      }
    }, 10);
  }

  connectedCallback() {
    // determine language; default to Spanish
    const lang = (this.getAttribute("lang") || "es").toLowerCase();
    const isEn = lang.startsWith("en");

    const titleText = isEn
      ? "Your new adventure starts here! 🚍 Buy your bus tickets"
      : "¡Tu nueva aventura comienza aquí! 🚍 Compra tus boletos de autobús";

    this.innerHTML = `
      <div class="cotiza">
      <p class="titulo-widget">${titleText}</p>
        <!-- Widget Ventas Reservamos -->
        <div class="espaciado-widget"
          style="display: flex; background-color: #eee; justify-content:center; margin: 10px 0 10px 0; border-radius: 12px;">
          <div style="max-width: 1430px; margin: 0; width: 100%; padding: 10px 15px"
            data-prop-widget-title="Nos hemos renovado para ti, conoce nuestra nueva experiencia de compra"
            data-widget-host="habitat" 
            data-prop-source-url="one-api.costaline.com.mx/api/v2/places"
            data-prop-funnel-url="viajes.costaline.com.mx" 
            data-prop-primary-color="#0087ca"
            data-prop-accent-color="#003b73" 
            data-prop-max-days-search="360" 
            data-prop-show-open-ticket="false"
            data-prop-autocomplete-type="select" 
            data-prop-display-type="state" 
            data-prop-multi-open-ticket="true"
            class="funnel_reservamos" 
            data-prop-allow-hybrid-trip="true" 
            data-prop-calendar-open="true"
            data-prop-growthbook="https://api-growthbook.reservamos.tech/api/features/prod_bSAl41VNFv0FE1NMDLSPR0i7wo9VZXPqWV1XEE9czk?project=prj_405gzo1olcq7g1af"
            data-prop-growthbook-standalone="true" 
            data-prop-growthbook-dev="false"
            data-prop-growthbook-features="show_open_ticket_cta"
            data-prop-departure-date-picker-text="Compra tu boleto de regreso con hasta 5% de descuento"
            data-prop-return-date-picker-text="Compra tu boleto de regreso con hasta 5% de descuento"
            data-prop-opt-in-return="false" 
            data-prop-profile-url="https://core-api.reservamossaas.com/api/v1"
            data-prop-profile-enabled="true" 
            data-prop-profile-autocomplete="true" 
            data-prop-group-places="true"
            data-prop-compact-height="false" 
            data-prop-interest-event="Interest In Home" 
            data-prop-brand="costaline"
            data-prop-passengers-dropdown="true"
            data-prop-passengers-options="general,minor,older,wheelchair_handicap,pet_friendly,student,teacher"
            data-prop-max-passengers="10" 
            data-prop-allow-fetch="true">

          </div>
        </div>
        <!-- Fin Widget Ventas Reservamos -->

      </div>
            `;

    // Si quieres aplicar el espaciado específico (tu método existía pero no se llamaba)
    this.addPageSpacingAfterCotiza();

    const buy = this.querySelector(".cotiza");
    if (!buy) return;

    // Crear botón flotante (si no existe ya)
    const existingBtn = document.querySelector(".search-button");
    if (existingBtn) existingBtn.remove();

    const searchButton = document.createElement("button");
    searchButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 250 250" fill="currentColor">
        <path class="bbvaicn" d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"></path>
      </svg>
    `;
    searchButton.setAttribute("role", "button");
    searchButton.setAttribute(
      "aria-label",
      isEn ? "Go to ticket search" : "Ir al cotizador",
    );
    searchButton.setAttribute("tabindex", "0");
    searchButton.classList.add("search-button");

    // Estilos del botón
    searchButton.style.display = "none";
    searchButton.style.position = "fixed";
    searchButton.style.bottom = "5.45rem";
    searchButton.style.right = "1.25rem";
    searchButton.style.zIndex = "9999";
    searchButton.style.padding = "0.9125rem";
    searchButton.style.backgroundImage =
      "radial-gradient(#3a6ea5 40%, #15395a 100%)";
    searchButton.style.color = "#fff";
    searchButton.style.border = "none";
    searchButton.style.borderRadius = "100%";
    searchButton.style.cursor = "pointer";
    searchButton.style.transform = "translateY(-6.25rem) scale(0.5)";
    searchButton.style.opacity = "0";
    searchButton.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    searchButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

    document.body.appendChild(searchButton);

    const onBtnClick = () => {
      buy.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    searchButton.addEventListener("click", onBtnClick);

    // IntersectionObserver para mostrar/ocultar el botón
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            searchButton.style.display = "block";
            setTimeout(() => {
              searchButton.style.transform = "translateY(0) scale(1)";
              searchButton.style.opacity = "1";
            }, 10);
          } else {
            searchButton.style.transform = "translateY(-5.25rem) scale(0.5)";
            searchButton.style.opacity = "0";
            setTimeout(() => {
              searchButton.style.display = "none";
            }, 800);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(buy);

    // Scroll listener para header (en tu caso, es .cotiza)
    const header = buy;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (window.innerWidth > 1024) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          header.classList.remove("visible");
          header.classList.add("hidden");
        } else {
          header.classList.remove("hidden");
          header.classList.add("visible");
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup para evitar duplicar observers/listeners al re-render
    this._cleanup = () => {
      try {
        observer.disconnect();
      } catch (_) {}

      try {
        window.removeEventListener("scroll", onScroll);
      } catch (_) {}

      try {
        searchButton.removeEventListener("click", onBtnClick);
      } catch (_) {}

      try {
        if (searchButton && searchButton.parentNode) searchButton.remove();
      } catch (_) {}

      this._cleanup = null;
    };
  }

  disconnectedCallback() {
    if (this._cleanup) this._cleanup();
  }
}

customElements.define("app-cotiza", AppCotiza);

/**
 * Lógica global para gestionar el espaciado de la página.
 * Se asegura de que el contenido principal no quede oculto debajo de elementos fijos como el header,
 * especialmente en páginas que no incluyen `app-cotiza` o `app-banner-slider`.
 */
function addPageSpacingForHeader() {
  const hasCotiza = document.querySelector("app-cotiza");
  const hasBanner = document.querySelector("app-banner-slider");

  // Solo aplica si NO hay cotiza NI banner
  if (!hasCotiza && !hasBanner) {
    const header = document.querySelector("header");
    if (!header) return;

    let nextElement = header.nextElementSibling;
    while (nextElement) {
      const tagName = nextElement.tagName.toLowerCase();
      if (tagName !== "script" && tagName !== "style") break;
      nextElement = nextElement.nextElementSibling;
    }

    if (nextElement) {
      nextElement.classList.add("content-after-header");
    }
  }
}

// Se ejecuta después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(addPageSpacingForHeader, 100);
});
