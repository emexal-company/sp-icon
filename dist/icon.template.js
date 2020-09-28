import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
export default function template() {
    const fullContent = `<svg
            class="spectrum-Icon ${this.size ? `spectrum-Icon--size${this.size}` : ''} spectrum-UIIcon-${this.name}"
            focusable="false" aria-hidden="true">${this._svg}</svg>`;
    return html `${unsafeHTML(fullContent)}`;
}
//# sourceMappingURL=icon.template.js.map