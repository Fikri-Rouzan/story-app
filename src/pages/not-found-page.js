import { LitElement, html, css } from "lit";
import { bootstrapIconsSheet } from "../styles/shared-styles.js";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class NotFoundPage extends LitElement {
  static styles = [
    bootstrapIconsSheet,
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
        margin-top: 3rem;
      }

      .status-code {
        color: var(--primary-color);
        font-size: var(--font-size-display);
        font-weight: var(--font-weight-bold);
        margin: 0;
        line-height: 1.2;
      }

      .status-message {
        color: var(--text-color-dark);
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-medium);
        margin-top: 0.5rem;
      }

      .description {
        color: var(--text-color-light);
        font-size: var(--font-size-sm);
        max-width: 450px;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }

      .home-link {
        color: var(--text-color-white);
        background-color: var(--primary-color);
        font-weight: var(--font-weight-medium);
        border-radius: 50px;
        display: inline-block;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }

      .home-link:hover {
        background-color: var(--primary-color-dark);
      }

      .home-link i {
        margin-right: 0.5rem;
      }
    `,
  ];

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div>
        <h1 class="status-code">404</h1>
        <h2 class="status-message">${msg("Page Not Found")}</h2>
        <p class="description">
          ${msg(
            "Oops! The page you are looking for does not exist, has been removed, or is temporarily unavailable."
          )}
        </p>
        <a href="/#/" class="home-link">
          <i class="bi bi-house-door-fill"></i> ${msg("Go to Dashboard")}
        </a>
      </div>
    `;
  }
}

window.customElements.define("not-found-page", NotFoundPage);
