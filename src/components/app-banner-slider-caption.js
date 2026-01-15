class AppBannerSliderCaption extends HTMLElement {
  connectedCallback() {
    const slidesData = JSON.parse(this.getAttribute("slides-data") || "[]");

    // Helper: escape básico para evitar romper el HTML si viene texto con comillas
    const esc = (v = "") =>
      String(v)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const slidesHTML = slidesData
      .map((slide) => {
        const title = slide.captionTitle || slide.title || "";
        const text = slide.captionText || "";
        const cta = slide.captionCta || "";
        const align = slide.captionAlign || "left"; // left | center | right
        const theme = slide.captionTheme || "dark"; // dark | light (solo para clases)

        return `
          <div class="slide" aria-label="${esc(slide.title || title)}" role="group">
            <a href="${esc(slide.link)}" target="_blank" rel="noopener noreferrer"
               class="banner-slider-link"
               aria-label="Enlace del banner ${esc(slide.title || title)}">

              <div class="slide-media">
                <picture>
                  <source srcset="${esc(slide.mediumImage)}" media="(min-width: 30.125rem) and (max-width: 61.875rem)">
                  <source srcset="${esc(slide.smallImage)}" media="(max-width: 30rem)">
                  <img src="${esc(slide.image)}" alt="${esc(slide.title || title)}">
                </picture>

                <div class="slide-caption caption--${esc(align)} caption-theme--${esc(theme)}">
                  <div class="slide-caption__inner">
                    ${title ? `<h1 class="slide-caption__title">${esc(title)}</h1>` : ""}
                    ${text ? `<p class="slide-caption__text">${esc(text)}</p>` : ""}
                    ${cta ? `<span class="slide-caption__cta" aria-hidden="true">${esc(cta)}</span>` : ""}
                  </div>
                </div>
              </div>

            </a>
          </div>
        `;
      })
      .join("");

    let prevButtonHTML = "";
    let nextButtonHTML = "";
    let indicatorsContainerHTML = "";
    let ariaLiveValue = "off";

    if (slidesData.length > 1) {
      ariaLiveValue = "polite";

      const indicatorsHTML = slidesData
        .map(
          (_, index) => `
            <div class="indicator" data-index="${index}" role="button" tabindex="0"
                 aria-label="Ir a la diapositiva ${index + 1}"></div>
          `
        )
        .join("");

      prevButtonHTML = `
        <div class="muesca__prev">
          <button class="prev-slide" title="Anterior" aria-label="Ir a la imagen anterior" role="button" tabindex="0">
            <svg height="10.5rem" width="5rem" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 168V0c0 47.41 24 47.41 24 84S0 120.59 0 168z" fill="#fff" fill-rule="evenodd" />
            </svg>
            <div class="arrow__prev">&#10094;</div>
          </button>
        </div>`;

      nextButtonHTML = `
        <div class="muesca__next">
          <button class="next-slide" title="Siguiente" aria-label="Ir a la imagen siguiente" role="button" tabindex="0">
            <svg height="10.5rem" width="5rem" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 168V0c0 47.41 24 47.41 24 84S0 120.59 0 168z" fill="#fff" fill-rule="evenodd" />
            </svg>
            <div class="arrow__next">&#10094;</div>
          </button>
        </div>`;

      indicatorsContainerHTML = `
        <div class="indicators" role="group" aria-label="Indicadores de la imagen actual">
          ${indicatorsHTML}
        </div>`;
    }

    this.innerHTML = `
      <div class="container__carousel">
        <div class="carousel" aria-live="${ariaLiveValue}" role="region" aria-label="Carrusel de promociones">
          <div class="carousel-container">
            ${slidesHTML}
          </div>
          ${prevButtonHTML}
          ${nextButtonHTML}
        </div>
        ${indicatorsContainerHTML}
      </div>
    `;

    // --- lógica del carrusel (igual que el tuyo) ---
    if (slidesData.length > 1) {
      let currentIndex = 0;
      const slides = this.querySelectorAll(".slide");
      const indicators = this.querySelectorAll(".indicator");
      const carouselContainer = this.querySelector(".carousel-container");
      let autoSlideInterval;

      const updateCarousel = () => {
        if (carouselContainer) {
          carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentIndex);
        });
      };

      const moveSlide = (direction) => {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        else if (currentIndex >= slides.length) currentIndex = 0;
        updateCarousel();
        resetAutoSlide();
      };

      const setSlide = (index) => {
        currentIndex = index;
        updateCarousel();
        resetAutoSlide();
      };

      const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => moveSlide(1), 4000);
      };

      const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
      };

      const prevMuesca = this.querySelector(".muesca__prev");
      const nextMuesca = this.querySelector(".muesca__next");

      if (prevMuesca) prevMuesca.addEventListener("click", () => moveSlide(-1));
      if (nextMuesca) nextMuesca.addEventListener("click", () => moveSlide(1));

      indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
          const index = parseInt(indicator.getAttribute("data-index"), 10);
          setSlide(index);
        });
      });

      updateCarousel();
      startAutoSlide();
    } else if (slidesData.length === 1) {
      const carouselContainer = this.querySelector(".carousel-container");
      if (carouselContainer) carouselContainer.style.transform = "translateX(0%)";

      const mainContainer = this.querySelector(".container__carousel");
      if (mainContainer) {
        mainContainer.style.marginBottom = "2rem";
        mainContainer.style.cursor = "normal";
      }

      const singleBannerLink = this.querySelector(".banner-slider-link");
      if (singleBannerLink) {
        singleBannerLink.style.cursor = "default";
        singleBannerLink.addEventListener("click", (event) => event.preventDefault());
      }
    }

    // --- scroll hide/show (igual que el tuyo) ---
    const carouselWrapper = this.querySelector(".container__carousel");
    if (carouselWrapper) {
      let lastScrollY = window.scrollY;

      window.addEventListener("scroll", () => {
        if (window.innerWidth >= 990) {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY) {
            carouselWrapper.classList.remove("visible");
            carouselWrapper.classList.add("hidden");
          } else {
            carouselWrapper.classList.remove("hidden");
            carouselWrapper.classList.add("visible");
          }
          lastScrollY = currentScrollY;
        }
      });
    }
  }
}

customElements.define("app-banner-slider-caption", AppBannerSliderCaption);
