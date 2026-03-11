/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/english/app-header.js?v=1.0.1";
import "../../../components/english/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

import "../../../components/app-cotiza.js";
import "../../../components/cards/app-cards-text-list.js";
import "../../../components/app-section-title.js";

class PageBoletosDeAutobus extends HTMLElement {
  async connectedCallback() {
    // Establecer la estructura HTML base del componente.
    // El contenido de __boletos-de-autobus__scrollbar se llenará dinámicamente.
    this.innerHTML = `
      <app-cotiza></app-cotiza>

			<section class="section__boletos-de-autobus">
					<app-section-title section-title="Autovías La Línea Bus Tickets: Your best option for traveling"></app-section-title>
					<article class="__boletos-de-autobus__text">
							<p class="__text__paragraph"><b class="__text__bold">Traveling with Autovías La Línea means comfort, safety, and punctuality. Don't wait any longer and get your bus tickets today to enjoy a superior travel experience. If you're wondering where to buy Autovías La Línea bus tickets, remember that you can easily do so through our website, by phone, or at our ticket offices.</b></p>
							<div class="__boletos-de-autobus__scrollbar">
									<p>Cargando tipos de boletos...</p> 
							</div>
					</article>
			</section>
						
			<app-cookies-policy></app-cookies-policy>
			<app-button-whats></app-button-whats>
			<app-button-eva-trip></app-button-eva-trip>
		`;
    // Cargar y renderizar las tarjetas dinámicamente
    await this.loadAndRenderBusTicketCards();
  }

  // Helper para escapar atributos HTML (especialmente comillas)
  escapeAttr(str) {
    if (typeof str !== "string") {
      console.warn("escapeAttr recibió un valor no string:", str);
      return ""; // o alguna otra forma de manejo de errores/fallback
    }
    return str
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/&/g, "&amp;");
  }

  async loadAndRenderBusTicketCards() {
    const cardsContainer = this.querySelector(
      ".__boletos-de-autobus__scrollbar",
    );
    if (!cardsContainer) {
      console.error(
        "El contenedor '__boletos-de-autobus__scrollbar' no fue encontrado.",
      );
      return;
    }

    try {
      const response = await fetch(
        "../../../src/data/english/bus-tickets/cards-boletos-de-autobus-data.json",
      );
      if (!response.ok) {
        throw new Error(
          `Error al cargar datos de tarjetas: ${response.status} ${response.statusText}`,
        );
      }
      const data = await response.json();

      if (
        !data.cards ||
        !Array.isArray(data.cards) ||
        data.cards.length === 0
      ) {
        cardsContainer.innerHTML =
          "<p>No hay tipos de boletos disponibles en este momento.</p>";
        return;
      }

      cardsContainer.innerHTML = "";

      data.cards.forEach((cardData) => {
        const cardElement = document.createElement("app-cards-text-list");
        cardElement.setAttribute("card-title", this.escapeAttr(cardData.title));
        cardElement.setAttribute(
          "main-text",
          this.escapeAttr(cardData.mainText),
        );
        cardElement.setAttribute(
          "secondary-text",
          this.escapeAttr(cardData.secondaryText),
        );
        cardElement.setAttribute("list-items", JSON.stringify(cardData.items)); // No escapar el string JSON
        cardsContainer.appendChild(cardElement);
      });
    } catch (error) {
      console.error(
        "Error al cargar o renderizar las tarjetas de boletos de autobús:",
        error,
      );
      cardsContainer.innerHTML =
        "<p>Error al cargar la información de los tipos de boleto. Por favor, intente más tarde.</p>";
    }
  }
}
customElements.define("page-boletos-de-autobus", PageBoletosDeAutobus);
