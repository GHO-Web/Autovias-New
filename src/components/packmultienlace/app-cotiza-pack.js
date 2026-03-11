class AppCotizaPack extends HTMLElement {
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
          style="display: flex; background-color: #eeeeee; justify-content:center; ; border-radius: 12px; width: 100%; margin: auto; margin-top: 3px; margin-bottom: 3px;">
          <div style="max-width: 1430px; margin: 0; width: 100%; padding: 10px;"
            data-prop-widget-title="Nos hemos renovado para ti, conoce nuestra nueva experiencia de compra"
            data-widget-host="habitat" 
             data-prop-source-url="one-api.etn.com.mx/api/v2/places"
             data-prop-funnel-url="viajes.etn.com.mx" 
             data-prop-primary-color="#0C3D5C" 
             data-prop-accent-color="#7BA7AE" data-prop-max-days-search="90" 
             data-prop-show-open-ticket="false" data-prop-autocomplete-type="select" 
             data-prop-display-type="state" 
             data-prop-allow-hybrid-trip="true" 
             data-prop-calendar-open="true" 
             data-prop-growthbook="https://api-growthbook.reservamos.tech/api/features/prod_bSAl41VNFv0FE1NMDLSPR0i7wo9VZXPqWV1XEE9czk?project=prj_405gzo1olcq7frcp" 
             data-prop-growthbook-standalone="true" 
             data-prop-growthbook-dev="false" 
             data-prop-departure-date-picker-text="Compra tu boleto de regreso con hasta 10% de descuento" 
             data-prop-return-date-picker-text="Compra tu boleto de regreso con hasta 10% de descuento" 
             data-prop-growthbook-features="show_open_ticket_cta" class="funnel_reservamos" 
             data-prop-contrast="true"
             data-prop-opt-in-return="false"
             data-prop-profile-url="https://core-api.reservamossaas.com/api/v1"
             data-prop-profile-enabled="true"
             data-prop-profile-autocomplete="true"
             data-prop-group-places="true"
             data-prop-compact-height="false"
             data-prop-interest-event="Interest In Home"
             data-prop-brand="etn"
             data-prop-passengers-dropdown="true"
             data-prop-passengers-options="general,minor,older,wheelchair_handicap,pet_friendly,student,teacher"
             data-prop-max-passengers="10"
             data-prop-allow-fetch="true">
            </div>
           </div>
        </div>
           
    `;

    const buy = this.querySelector(".cotiza");
    if (!buy) return;

    // Crear botón flotante (si no existe ya)
    const existingBtn = document.querySelector(".search-button-pack");
    if (existingBtn) existingBtn.remove();

    const searchButton = document.createElement("button");
    searchButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 250 250" fill="currentColor">
                  <path class="bbvaicn" d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"></path>
                </svg>
              `;
    searchButton.setAttribute("role", "button");
    searchButton.setAttribute("aria-label", "Ir al cotizador de paquetería");
    searchButton.setAttribute("tabindex", "0");
    searchButton.classList.add("search-button", "search-button-pack");
    searchButton.style.display = "none";
    searchButton.style.position = "fixed";
    searchButton.style.bottom = "5.45rem";
    searchButton.style.right = "1.25rem";
    searchButton.style.zIndex = "9999";
    searchButton.style.padding = "0.2125rem";
    searchButton.style.backgroundImage =
      "radial-gradient( #3a6ea5 40%, #15395a 100%)";
    searchButton.style.color = "#fff";
    searchButton.style.border = "none";
    searchButton.style.borderRadius = "100%";
    searchButton.style.cursor = "pointer";
    searchButton.style.transform = "translateY(-6.25rem) scale(0.5)";
    searchButton.style.opacity = "0";
    searchButton.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    document.body.appendChild(searchButton);

    const onBtnClick = () => {
      buy.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    searchButton.addEventListener("click", onBtnClick);

    // Detectar cuando "buy" sale de la vista
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Si "buy" no está visible, mostrar el botón con animación
            searchButton.style.display = "block";
            setTimeout(() => {
              searchButton.style.transform = "translateY(0) scale(1)";
              searchButton.style.opacity = "1";
            }, 10);
          } else {
            // Si "buy" está visible, ocultar el botón con animación
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

    const header = buy;
    let lastScrollY = window.scrollY;

    // Evento para manejar el scroll
    const onScroll = () => {
      if (window.innerWidth >= 990) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          // Scroll hacia abajo: ocultar el header
          header.classList.remove("visible");
          header.classList.add("hidden");
        } else {
          // Scroll hacia arriba: mostrar el header
          header.classList.remove("hidden");
          header.classList.add("visible");
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup para evitar duplicar observers/listeners al re-render
    this._cleanup = () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      searchButton.removeEventListener("click", onBtnClick);
      if (searchButton && searchButton.parentNode) searchButton.remove();
      this._cleanup = null;
    };
  }
}
customElements.define("app-cotiza-pack", AppCotizaPack);
