import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NeeButtonComponent {
    buttonClass: 'primary' | 'secondary' | 'danger';
    disabled: boolean;
    click: EventEmitter<MouseEvent>;
    handleClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NeeButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NeeButtonComponent, "lib-nee-button", never, { "buttonClass": { "alias": "buttonClass"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "click": "click"; }, never, ["*"], true, never>;
}
