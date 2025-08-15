import { LitElement, html, css } from "lit";
import { bootstrapIconsSheet } from "../styles/shared-styles.js";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class ProfilePage extends LitElement {
  static styles = [
    bootstrapIconsSheet,
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin-top: 3rem;
      }

      .profile-card {
        background: var(--surface-color);
        border-radius: var(--card-border-radius);
        box-shadow: var(--shadow-lg);
        max-width: 600px;
        width: 100%;
        text-align: center;
        padding: 2.5rem 2rem;
      }

      .profile-picture {
        border: 4px solid var(--primary-color);
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
      }

      .profile-name {
        color: var(--text-color-dark);
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        margin: 0;
      }

      .social-links a {
        color: var(--text-color-dark);
        font-size: var(--font-size-lg);
        margin: 0 0.75rem;
        transition: color 0.3s ease;
      }

      .social-links a:hover {
        color: var(--primary-color-dark);
      }
    `,
  ];

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="profile-card">
        <img
          src="/src/assets/img.jpg"
          alt="Profile Picture"
          class="profile-picture"
        />
        <h2 class="profile-name">${msg("Muhammad Fikri Rouzan Ash Shidik")}</h2>
        <p class="profile-title">${msg("Web Developer")}</p>
        <p class="profile-bio">
          ${msg(
            "Passionate web developer dedicated to building intuitive and user-friendly web experiences."
          )}
        </p>
        <div class="social-links">
          <a
            href="https://github.com/Fikri-Rouzan"
            target="_blank"
            aria-label="GitHub Profile"
            ><i class="bi bi-github"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/fikrirouzan"
            target="_blank"
            aria-label="LinkedIn Profile"
            ><i class="bi bi-linkedin"></i
          ></a>
        </div>
      </div>
    `;
  }
}

window.customElements.define("profile-page", ProfilePage);
