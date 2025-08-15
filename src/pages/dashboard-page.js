import { LitElement, html } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

import "../components/story-card.js";

class DashboardPage extends LitElement {
  static properties = {
    stories: { type: Array },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.stories = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetchData();
  }

  async _fetchData() {
    try {
      const response = await import("../data/data.json");
      this.stories = response.default.listStory;
    } catch (error) {
      console.error("Failed to fetch stories:", error);
    }
  }

  render() {
    return html`
      <div class="row g-4">
        ${this.stories.map(
          (story) => html`
            <div class="col-md-6 col-lg-4">
              <story-card .story=${story}></story-card>
            </div>
          `
        )}
      </div>
    `;
  }
}

window.customElements.define("dashboard-page", DashboardPage);
