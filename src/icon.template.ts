import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { Icon } from './icon.component';

export default function template(this: Icon) {
    const fullContent =
        `<svg
            class="spectrum-Icon ${this.size ? `spectrum-Icon--size${this.size}` : ''} spectrum-UIIcon-${this.name}"
            focusable="false" aria-hidden="true">${this._svg}</svg>`;
    return html`${unsafeHTML(fullContent)}`;
}
