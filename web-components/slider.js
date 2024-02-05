class MiComponente extends HTMLElement {
    constructor() {
        super();
        this.imgs = [];
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                @import 'slidercss.css';
            </style>
            <body>
                <slider>
                </slider>
                <section>
                    <button id="prev">
                    <slot name="button-prev"></slot>
                    </button>
                    <button id="next">
                    <slot name="button-next"></slot>
                    </button>
                </section>       
            </body>
        `;
        const slider = this.shadowRoot.querySelector('slider');

        let next = shadow.getElementById("next");
        let prev = shadow.getElementById("prev");

        next.addEventListener("click", () => {
            let slides = slider.querySelectorAll("slides");
            slider.appendChild(slides[0]);
        });

        prev.addEventListener("click", () => {
            let slides = slider.querySelectorAll("slides");
            slider.prepend(slides[slides.length - 1]);
        });

    }

    static get observedAttributes() {
        return ["images", "height", "width"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "images") {
            this.updateImg(newValue);
        }
        if (name === "height") {
            this.shadowRoot.querySelector('slider').style.height = newValue
        }
        if (name === "width") {
            this.shadowRoot.querySelector('slider').style.width = newValue

        }
    }

    updateImg(newValue) {
        this.imgs = JSON.parse(newValue);
        const slider = this.shadowRoot.querySelector('slider');

        slider.innerHTML = '';

        this.imgs.forEach((img, index) => {
            const slides = document.createElement("slides");
            slides.style.backgroundImage = `url(${img})`;
            slider.appendChild(slides);
        });
    }
}

customElements.define('slider-fun', MiComponente);
