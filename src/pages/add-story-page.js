import { LitElement, html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import Swal from "sweetalert2";

class AddStoryPage extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    const form = this.querySelector("#addStoryForm");
    const photoInput = this.querySelector("#photoInput");
    const imagePreview = this.querySelector("#imagePreview");

    photoInput.addEventListener("change", () => {
      const file = photoInput.files[0];

      if (file) {
        imagePreview.src = URL.createObjectURL(file);
        imagePreview.style.display = "block";
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.classList.add("was-validated");

      if (form.checkValidity()) {
        console.log("Form is valid! Ready to submit.");
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: msg("Form Valid!"),
          text: msg("Your story is ready to be uploaded."),
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      } else {
        console.log("Form is invalid.");
      }
    });
  }

  render() {
    return html`
      <div class="w-100 mt-5">
        <div class="card shadow-sm bg-light">
          <div class="card-body p-4 p-md-5">
            <h2 class="card-title text-center mb-4">
              ${msg("Create New Story")}
            </h2>
            <form id="addStoryForm" novalidate>
              <div class="mb-3">
                <label for="photoInput" class="form-label"
                  >${msg("Photo")}</label
                >
                <input
                  type="file"
                  class="form-control"
                  id="photoInput"
                  accept="image/*"
                  required
                />
                <div class="invalid-feedback">
                  ${msg("Please choose a photo for your story.")}
                </div>
              </div>

              <div class="mb-4 text-center mt-4">
                <img
                  id="imagePreview"
                  class="img-fluid rounded"
                  alt="Image Preview"
                />
              </div>

              <div class="mb-3">
                <label for="descriptionInput" class="form-label"
                  >${msg("Description")}</label
                >
                <textarea
                  class="form-control"
                  id="descriptionInput"
                  placeholder="${msg("Write your story description here...")}"
                  rows="4"
                  required
                ></textarea>
                <div class="invalid-feedback">
                  ${msg("Please enter a description.")}
                </div>
              </div>

              <div class="d-grid mt-4">
                <button
                  class="btn btn-add btn-lg text-light mt-2"
                  type="submit"
                >
                  <i class="bi bi-upload me-2"></i>${msg("Upload Story")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("add-story-page", AddStoryPage);
