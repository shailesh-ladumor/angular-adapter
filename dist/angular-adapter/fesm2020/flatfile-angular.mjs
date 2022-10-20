import { flatfileImporter } from '@flatfile/sdk';
export { flatfileImporter } from '@flatfile/sdk';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, ElementRef, Component, Input, Output, ViewChild, NgModule } from '@angular/core';

const _c0 = ["ref"];
function FlatfileButtonComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\uD83D\uDD3C Upload with Flatfile");
    i0.ɵɵelementEnd();
} }
function FlatfileButtonComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " \uD83C\uDD67 Failed to Load Flatfile Importer ");
    i0.ɵɵelementEnd();
} }
const _c1 = ["*"];
class FlatfileButtonComponent {
    constructor() {
        this.onInit = new EventEmitter();
        this.onUpload = new EventEmitter();
        this.onLaunch = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onComplete = new EventEmitter();
        this.onError = new EventEmitter();
        this.isImporterLoaded = true;
    }
    ngOnInit() {
        if (!this.token) {
            console.error('📥 Flatfile Importer ERROR - "token" missing via @Input()');
            this.isImporterLoaded = false;
            return;
        }
        if (typeof flatfileImporter === 'undefined') {
            console.log('📥 Flatfile Importer ERROR - importer failed to load');
            this.isImporterLoaded = false;
            return;
        }
        this.flatfileImporter = flatfileImporter(this.token, {
            ...(this.mountUrl ? { mountUrl: this.mountUrl } : {}),
            ...(this.apiUrl ? { apiUrl: this.apiUrl } : {}),
        });
        this.flatfileImporter.on('init', (res) => this.onInit.next(res));
        this.flatfileImporter.on('upload', (res) => this.onUpload.next(res));
        this.flatfileImporter.on('launch', (res) => this.onLaunch.next(res));
        this.flatfileImporter.on('close', (res) => this.onClose.next(res));
        this.flatfileImporter.on('complete', (res) => this.onComplete.next(res));
    }
    ngOnDestroy() {
        this.flatfileImporter.close();
    }
    launch() {
        this.flatfileImporter.launch().catch((e) => {
            this.onError.next({ error: e });
        });
    }
}
FlatfileButtonComponent.ɵfac = function FlatfileButtonComponent_Factory(t) { return new (t || FlatfileButtonComponent)(); };
FlatfileButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FlatfileButtonComponent, selectors: [["flatfile-button"]], viewQuery: function FlatfileButtonComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ref = _t.first);
    } }, inputs: { token: "token", mountUrl: "mountUrl", apiUrl: "apiUrl" }, outputs: { onInit: "onInit", onUpload: "onUpload", onLaunch: "onLaunch", onClose: "onClose", onComplete: "onComplete", onError: "onError" }, ngContentSelectors: _c1, decls: 6, vars: 5, consts: [[3, "disabled", "click"], ["ref", ""], [4, "ngIf"]], template: function FlatfileButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function FlatfileButtonComponent_Template_button_click_0_listener() { return ctx.launch(); });
        i0.ɵɵelementStart(1, "div", null, 1);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FlatfileButtonComponent_span_4_Template, 2, 0, "span", 2);
        i0.ɵɵtemplate(5, FlatfileButtonComponent_span_5_Template, 2, 0, "span", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("disabled", !ctx.isImporterLoaded);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hide", !ctx.isImporterLoaded);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !_r0 && !_r0.innerHTML.trim() && ctx.isImporterLoaded);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isImporterLoaded);
    } }, dependencies: [i1.NgIf], styles: [".hide[_ngcontent-%COMP%]{display:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlatfileButtonComponent, [{
        type: Component,
        args: [{ selector: 'flatfile-button', template: `
    <button (click)="launch()" [disabled]="!isImporterLoaded">
      <div #ref [class.hide]="!isImporterLoaded">
        <ng-content></ng-content>
      </div>
      <span *ngIf="!ref && !ref.innerHTML.trim() && isImporterLoaded"
        >🔼 Upload with Flatfile</span
      >
      <span *ngIf="!isImporterLoaded">
        🅧 Failed to Load Flatfile Importer
      </span>
    </button>
  `, styles: [".hide{display:none}\n"] }]
    }], null, { token: [{
            type: Input
        }], mountUrl: [{
            type: Input
        }], apiUrl: [{
            type: Input
        }], onInit: [{
            type: Output
        }], onUpload: [{
            type: Output
        }], onLaunch: [{
            type: Output
        }], onClose: [{
            type: Output
        }], onComplete: [{
            type: Output
        }], onError: [{
            type: Output
        }], ref: [{
            type: ViewChild,
            args: ['ref', { read: ElementRef, static: true }]
        }] }); })();

class FlatfileAdapterModule {
}
FlatfileAdapterModule.ɵfac = function FlatfileAdapterModule_Factory(t) { return new (t || FlatfileAdapterModule)(); };
FlatfileAdapterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FlatfileAdapterModule });
FlatfileAdapterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlatfileAdapterModule, [{
        type: NgModule,
        args: [{
                declarations: [FlatfileButtonComponent],
                imports: [CommonModule],
                exports: [FlatfileButtonComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FlatfileAdapterModule, { declarations: [FlatfileButtonComponent], imports: [CommonModule], exports: [FlatfileButtonComponent] }); })();

/**
 * @note Public API Surface of angular-adapter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FlatfileAdapterModule, FlatfileButtonComponent };
//# sourceMappingURL=flatfile-angular.mjs.map
