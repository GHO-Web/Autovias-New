/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.0.1";
import "../../components/app-footer.js?v=1.0.0";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageQuienesSomos extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>
    
            <div class="__panthom_space"></div>

            
            <section class="__section">
                <app-section-title section-title="¿Quiénes somos?"></app-section-title>
                <h3 class="__subtitle">Somos una empresa 100% mexicana, dedicada al autotransporte de pasajeros con más de 68 años de experiencia y servicio.</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Misión</h3>

                    <p class="__terms-purchase-text">Satisfacer las necesidades de transportación de nuestros clientes, asegurando un servicio confiable y con valores agregados.</p>
                    
                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Visión</h3>

                    <p class="__terms-purchase-text">Ser líderes en la industria del transporte al ofrecer servicios que usen los recursos del entorno con sabiduría, comprometidos con la sociedad y con el medio ambiete.</p>
                    
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Valores</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Compromiso: </b>Cumplimos lo prometido de manera impecable.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Integridad: </b>Somos transparentes y respetuosos con la verdad para transmitir seguridad y confianza en nuestras acciones.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text"><b>Lealtad: </b>Generamos y fomentamos un sólido sentido de pertenencia y orgullo hacia la empresa, por parte de nuestros colaboradores.</p></li>
                    </ul>
                </article>
            </section>
			
        `;
	}
}
customElements.define("page-quienes-somos", PageQuienesSomos);
