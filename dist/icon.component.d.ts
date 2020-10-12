import { Base } from '@spectrum/sp-base';
export declare class Icon extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    name: string;
    size: string;
    protected _svg: string;
    shouldUpdate(): boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-icon': Icon;
    }
}
