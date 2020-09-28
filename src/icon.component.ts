import { customElement, property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import { Spectrum } from '@spectrum/sp-config';

import iconStyles from './icon.styles';
import template from './icon.template';

@customElement('sp-icon')
export class Icon extends Base {
  public static componentStyles = [ iconStyles ];

  @property({ type: String }) public name: string = '';
  @property({ type: String }) public size: string = 'S';

  protected _svg: string = undefined;

  public shouldUpdate() {
    if((!this._svg) && this.size && this.name) {
      import(`./${Spectrum.size}/${this.name}`)
        .then((value: any) => {
          this._svg = (value.default) ? value.default : value;
          this.requestUpdate();
        });
    }
    return (this._svg !== undefined);
  }

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-icon': Icon;
  }
}
