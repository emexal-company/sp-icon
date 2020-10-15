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
import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import { Spectrum } from '@spectrum/sp-config';
import iconStyles from './icon.styles';
import template from './icon.template';
let Icon = class Icon extends Base {
    constructor() {
        super(...arguments);
        this.name = '';
        this.size = 'S';
        this._svg = undefined;
    }
    shouldUpdate() {
        if ((!this._svg) && this.size && this.name) {
            import(`./${Spectrum.size}/${this.name}`)
                .then((value) => {
                this._svg = (value.default) ? value.default : value;
                this.requestUpdate();
            });
        }
        return (this._svg !== undefined);
    }
    render() {
        return template.call(this);
    }
};
Icon.componentStyles = [iconStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Icon.prototype, "name", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Icon.prototype, "size", void 0);
Icon = __decorate([
    customElement('sp-icon')
], Icon);
export { Icon };
//# sourceMappingURL=icon.component.js.map