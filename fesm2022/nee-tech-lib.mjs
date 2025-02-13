import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class NeeTechLibService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeTechLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeTechLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeTechLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NeeTechLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeTechLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.6", type: NeeTechLibComponent, isStandalone: true, selector: "lib-nee-tech-lib", ngImport: i0, template: `
    <p>
      nee-tech-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeTechLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-nee-tech-lib', imports: [], template: `
    <p>
      nee-tech-lib works!
    </p>
  ` }]
        }] });

class NeeButtonComponent {
    buttonClass = 'primary';
    click = new EventEmitter();
    handleClick(event) {
        this.click.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.6", type: NeeButtonComponent, isStandalone: true, selector: "lib-nee-button", inputs: { buttonClass: "buttonClass" }, outputs: { click: "click" }, ngImport: i0, template: "<button [ngClass]=\"buttonClass\" (click)=\"handleClick($event)\">\r\n  <ng-content></ng-content>\r\n</button>\r\n", styles: ["button{padding:10px 20px;font-size:16px;cursor:pointer;border:none;border-radius:5px}.primary{background-color:#007bff;color:#fff}.secondary{background-color:#6c757d;color:#fff}.danger{background-color:#dc3545;color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-nee-button', imports: [CommonModule], template: "<button [ngClass]=\"buttonClass\" (click)=\"handleClick($event)\">\r\n  <ng-content></ng-content>\r\n</button>\r\n", styles: ["button{padding:10px 20px;font-size:16px;cursor:pointer;border:none;border-radius:5px}.primary{background-color:#007bff;color:#fff}.secondary{background-color:#6c757d;color:#fff}.danger{background-color:#dc3545;color:#fff}\n"] }]
        }], propDecorators: { buttonClass: [{
                type: Input
            }], click: [{
                type: Output
            }] } });

class NeeCardComponent {
    header = null;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.6", type: NeeCardComponent, isStandalone: true, selector: "lib-nee-card", inputs: { header: "header" }, ngImport: i0, template: "<div class=\"card\">\r\n  <div class=\"card-header\" *ngIf=\"header\">{{ header }}</div>\r\n  <div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [".card{border:1px solid #ddd;border-radius:8px;overflow:hidden;margin:20px 0;box-shadow:0 4px 6px #0000001a}.card-header{background-color:#f7f7f7;padding:10px;font-weight:700}.card-body{padding:15px;background-color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: i0, type: NeeCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-nee-card', imports: [CommonModule], template: "<div class=\"card\">\r\n  <div class=\"card-header\" *ngIf=\"header\">{{ header }}</div>\r\n  <div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [".card{border:1px solid #ddd;border-radius:8px;overflow:hidden;margin:20px 0;box-shadow:0 4px 6px #0000001a}.card-header{background-color:#f7f7f7;padding:10px;font-weight:700}.card-body{padding:15px;background-color:#fff}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }] } });

/*
 * Public API Surface of nee-tech-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NeeButtonComponent, NeeCardComponent, NeeTechLibComponent, NeeTechLibService };
//# sourceMappingURL=nee-tech-lib.mjs.map
