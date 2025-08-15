import { LitElement, html, css } from "lit";
import { bootstrapSheet } from "../styles/shared-styles.js";

class StoryCard extends LitElement {
  static styles = [
    bootstrapSheet,
    css`
      .card {
        border: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-radius: var(--card-border-radius);
        box-shadow: var(--shadow-md);
      }

      .card:hover {
        transform: scale(1.05);
        box-shadow: var(--shadow-hover);
      }

      .card-img-top {
        max-height: 250px;
        object-fit: cover;
        border-top-left-radius: var(--card-border-radius);
        border-top-right-radius: var(--card-border-radius);
      }
    `,
  ];

  static properties = {
    story: { type: Object },
  };

  constructor() {
    super();
    this.story = {};
  }

  _formatDate(isoDate) {
    if (!isoDate) return "";
    const date = new Date(isoDate);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  }

  render() {
    return html`
      <div class="card h-100">
        <img
          src="${this.story.photoUrl}"
          class="card-img-top"
          alt="Story image for ${this.story.name}"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${this.story.name}</h5>
          <p class="card-text flex-grow-1">${this.story.description}</p>
          <small class="text-muted">
            Posted on ${this._formatDate(this.story.createdAt)}
          </small>
        </div>
      </div>
    `;
  }
}

window.customElements.define("story-card", StoryCard);
