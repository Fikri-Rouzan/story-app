import { LitElement, html } from "lit";
import { Offcanvas } from "bootstrap";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

import "./language-switcher.js";

class NavBar extends LitElement {
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

  firstUpdated() {
    const offcanvasElement = this.querySelector("#offcanvasNavbar");
    const offcanvas = new Offcanvas(offcanvasElement);

    this.addEventListener("close-offcanvas", () => {
      offcanvas.hide();
    });

    this.querySelectorAll(".offcanvas-body a.nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        offcanvas.hide();
      });
    });
  }

  render() {
    return html`
      <nav class="navbar bg-primary shadow-sm fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold ps-3 text-white" href="#/">
            <i class="bi bi-journal-richtext me-2"></i>${msg("Story App")}
          </a>
          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title ms-2" id="offcanvasNavbarLabel">
                ${msg("Menu")}
              </h5>
              <button
                type="button"
                class="btn-close me-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" href="#/">
                    <i class="bi bi-house-door me-3 ms-2"></i>${msg(
                      "Dashboard"
                    )}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/add">
                    <i class="bi bi-plus-square me-3 ms-2"></i>${msg(
                      "Add Story"
                    )}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/profile">
                    <i class="bi bi-person-circle me-3 ms-2"></i>${msg(
                      "Profile"
                    )}
                  </a>
                </li>
                <language-switcher .locale=${this.locale}></language-switcher>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

window.customElements.define("nav-bar", NavBar);
