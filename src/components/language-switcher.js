import { LitElement, html } from "lit";
import { setLocale } from "../index.js";
import { allLocales } from "../generated/locale-codes.js";

class LanguageSwitcher extends LitElement {
  static properties = {
    locale: { type: String },
    localeNames: { state: true },
  };

  constructor() {
    super();
    this.localeNames = {
      en: "English",
      id: "Bahasa Indonesia",
      ko: "한국어",
    };
  }

  createRenderRoot() {
    return this;
  }

  _localeChanged(newLocale) {
    if (newLocale !== this.locale) {
      const event = new CustomEvent("close-offcanvas", {
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(event);
      setLocale(newLocale);
    }
  }

  render() {
    return html`
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-translate me-3 ms-2"></i>${this.localeNames[
            this.locale
          ]}
        </a>
        <ul class="dropdown-menu">
          ${allLocales.map(
            (locale) => html`
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click=${() => this._localeChanged(locale)}
                >
                  ${this.localeNames[locale]}
                </a>
              </li>
            `
          )}
        </ul>
      </li>
    `;
  }
}

window.customElements.define("language-switcher", LanguageSwitcher);
