class AppBannerImage extends HTMLElement {
  connectedCallback() {
    const imgSrc =
      this.getAttribute("image-src") ||
      "/src/assets/img/banner/banner-viajero-protegido.webp";
    const mediumImage = this.getAttribute("medium-image");
    const smallImage = this.getAttribute("small-image");
    const imgAlt = this.getAttribute("image-alt") || "Banner promocional";

    this.innerHTML = `
      <article class="__banner-container">
        <picture>
          ${mediumImage ? `<source srcset="${mediumImage}" media="(min-width: 30.125rem) and (max-width: 61.875rem)">` : ""}
          ${smallImage ? `<source srcset="${smallImage}" media="(max-width: 30rem)">` : ""}
          <img src="${imgSrc}" alt="${imgAlt}" title="${imgAlt}" class="__banner-img" width="1900" height="520" loading="lazy" />
        </picture>
      </article>
    `;
  }
}
customElements.define("app-banner-image", AppBannerImage);
