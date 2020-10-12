/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

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
