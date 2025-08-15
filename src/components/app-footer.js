import { LitElement, html } from "lit";
import { msg, str, updateWhenLocaleChanges } from "@lit/localize";

class AppFooter extends LitElement {
  static properties = {
    locale: { type: String },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer class="text-center py-3">
        <p class="mb-0">
          ${msg(
            str`© ${new Date().getFullYear()} Muhammad Fikri Rouzan Ash Shidik`
          )}
        </p>
      </footer>
    `;
  }
}

window.customElements.define("app-footer", AppFooter);
