/*
 * RestaurantCard web component
 */

class RestaurantCard extends HTMLElement {
  constructor() {
    super();
  }

  render(title, imageSrc, content, id) {
    const layout = this.getAttribute("layout");
    if (layout === "vertical") {
      this.innerHTML = `
        <div style="border-radius: 8px; width: 80%; box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.1); padding: 15px; margin-top: 30px;">
          <div style="background-image: url(${imageSrc}); height: 300px; background-size: cover; border-radius: 8px;"></div>
          <div style="display: flex; flex-direction: column;">
            <h2 style="font-size: 2rem; font-weight: bold; margin: 15px 0;">${title}</h2>
            <p style="color: #808080">${content}</p>
            <p style="color: rgb(124, 59, 237); text-align: right; cursor: pointer;" class="c-${id}">Continue »</p>
          </div>
        </div>
      `;
    } else if (layout === "horizontal") {
      this.innerHTML = `
      <div style="border-radius: 8px; width: 80%; box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.1); padding: 10px; margin-top: 30px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h2 style="font-size: 1.5rem; font-weight: bold;">${title}</h2>
          <p style="color: rgb(124, 59, 237); text-align: right; cursor: pointer;" class="c-${id}">Continue »</p>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 15px;">
          <div style="background-image: url(${imageSrc}); height: 200px; background-size: cover; border-radius: 8px; width: 48%; background-position: center;"></div>
          <p style="color: #808080; width: 48%;">${content}</p>
        </div>
    </div>
      `;
    }

    const event = new Event("select");
    document.querySelector(`.c-${id}`).addEventListener("click", () => {
      document.querySelector(`.c-${id}`).dispatchEvent(event);
    });
    document.querySelector(`.c-${id}`).addEventListener("select", (e) => {
      console.log(content.trim());
    });
  }

  connectedCallback() {
    setTimeout(() => {
      this.setAttribute(
        "layout",
        document.querySelector("input[name='layout']:checked").value
      );
      const title = this.getAttribute("title");
      const imageSrc = this.getAttribute("imageSrc");
      const id = this.getAttribute("id");
      const content = this.innerHTML;

      this.innerHTML = "";

      document.querySelectorAll("label")[0].addEventListener("click", () => {
        this.setAttribute("layout", "vertical");
        this.render(title, imageSrc, content);
      });

      document.querySelectorAll("label")[1].addEventListener("click", () => {
        this.setAttribute("layout", "horizontal");
        this.render(title, imageSrc, content, id);
      });
      this.render(title, imageSrc, content, id);
    }, 1);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.connectedCallback();
    }
  }
}

customElements.define("restaurant-card", RestaurantCard);
