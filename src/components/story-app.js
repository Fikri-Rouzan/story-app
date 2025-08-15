import { LitElement, html } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";
import { getLocale } from "../index.js";

import "./nav-bar.js";
import "./app-footer.js";
import "../pages/dashboard-page.js";
import "../pages/add-story-page.js";
import "../pages/profile-page.js";
import "../pages/not-found-page.js";

class StoryApp extends LitElement {
  static properties = {
    route: { type: String },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);

    this.route = window.location.hash.slice(1) || "/";
    window.addEventListener("hashchange", this.handleHashChange.bind(this));
  }

  createRenderRoot() {
    return this;
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.handleHashChange.bind(this));
    super.disconnectedCallback();
  }

  handleHashChange() {
    this.route = window.location.hash.slice(1) || "/";
  }

  _renderPage() {
    switch (this.route) {
      case "/":
        return html`<dashboard-page></dashboard-page>`;
      case "/add":
        return html`<add-story-page></add-story-page>`;
      case "/profile":
        return html`<profile-page></profile-page>`;
      default:
        return html`<not-found-page></not-found-page>`;
    }
  }

  render() {
    return html`
      <header>
        <nav-bar .locale=${getLocale()}></nav-bar>
      </header>

      <main class="container px-4 py-5 mt-5">${this._renderPage()}</main>

      <app-footer .locale=${getLocale()}></app-footer>
    `;
  }
}

window.customElements.define("story-app", StoryApp);
