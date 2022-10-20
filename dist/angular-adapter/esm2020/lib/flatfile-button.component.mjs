import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { flatfileImporter } from '@flatfile/sdk';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export class FlatfileButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdGZpbGUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItYWRhcHRlci9zcmMvbGliL2ZsYXRmaWxlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBOEIsTUFBTSxlQUFlLENBQUM7Ozs7O0lBU3ZFLDRCQUNHO0lBQUEsaURBQXVCO0lBQUEsaUJBQ3pCOzs7SUFDRCw0QkFBZ0M7SUFDOUIsK0RBQ0Y7SUFBQSxpQkFBTzs7O0FBV2IsTUFBTSxPQUFPLHVCQUF1QjtJQXZCcEM7UUEyQlksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzdDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNqRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDakQsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQy9DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUNyRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFJekQscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0tBd0N6QjtJQXBDUSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLENBQUMsS0FBSyxDQUNYLDJEQUEyRCxDQUM1RCxDQUFDO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixPQUFPO1NBQ1I7UUFFRCxJQUFJLE9BQU8sZ0JBQWdCLEtBQUssV0FBVyxFQUFFO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztZ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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZsYXRmaWxlSW1wb3J0ZXIsIElFdmVudHMsIElGbGF0ZmlsZUltcG9ydGVyIH0gZnJvbSAnQGZsYXRmaWxlL3Nkayc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZsYXRmaWxlLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwibGF1bmNoKClcIiBbZGlzYWJsZWRdPVwiIWlzSW1wb3J0ZXJMb2FkZWRcIj5cbiAgICAgIDxkaXYgI3JlZiBbY2xhc3MuaGlkZV09XCIhaXNJbXBvcnRlckxvYWRlZFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIXJlZiAmJiAhcmVmLmlubmVySFRNTC50cmltKCkgJiYgaXNJbXBvcnRlckxvYWRlZFwiXG4gICAgICAgID7wn5S8IFVwbG9hZCB3aXRoIEZsYXRmaWxlPC9zcGFuXG4gICAgICA+XG4gICAgICA8c3BhbiAqbmdJZj1cIiFpc0ltcG9ydGVyTG9hZGVkXCI+XG4gICAgICAgIPCfhacgRmFpbGVkIHRvIExvYWQgRmxhdGZpbGUgSW1wb3J0ZXJcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZsYXRmaWxlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB0b2tlbjogc3RyaW5nO1xuICBASW5wdXQoKSBtb3VudFVybD86IHN0cmluZztcbiAgQElucHV0KCkgYXBpVXJsPzogc3RyaW5nO1xuICBAT3V0cHV0KCkgb25Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxJRXZlbnRzWydpbml0J10+KCk7XG4gIEBPdXRwdXQoKSBvblVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUV2ZW50c1sndXBsb2FkJ10+KCk7XG4gIEBPdXRwdXQoKSBvbkxhdW5jaCA9IG5ldyBFdmVudEVtaXR0ZXI8SUV2ZW50c1snbGF1bmNoJ10+KCk7XG4gIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxJRXZlbnRzWydjbG9zZSddPigpO1xuICBAT3V0cHV0KCkgb25Db21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8SUV2ZW50c1snY29tcGxldGUnXT4oKTtcbiAgQE91dHB1dCgpIG9uRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPElFdmVudHNbJ2Vycm9yJ10+KCk7XG5cbiAgQFZpZXdDaGlsZCgncmVmJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgcmVmOiBFbGVtZW50UmVmO1xuXG4gIGlzSW1wb3J0ZXJMb2FkZWQgPSB0cnVlO1xuXG4gIHByaXZhdGUgZmxhdGZpbGVJbXBvcnRlcjogSUZsYXRmaWxlSW1wb3J0ZXI7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b2tlbikge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ/Cfk6UgRmxhdGZpbGUgSW1wb3J0ZXIgRVJST1IgLSBcInRva2VuXCIgbWlzc2luZyB2aWEgQElucHV0KCknXG4gICAgICApO1xuICAgICAgdGhpcy5pc0ltcG9ydGVyTG9hZGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmbGF0ZmlsZUltcG9ydGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5sb2coJ/Cfk6UgRmxhdGZpbGUgSW1wb3J0ZXIgRVJST1IgLSBpbXBvcnRlciBmYWlsZWQgdG8gbG9hZCcpO1xuICAgICAgdGhpcy5pc0ltcG9ydGVyTG9hZGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mbGF0ZmlsZUltcG9ydGVyID0gZmxhdGZpbGVJbXBvcnRlcih0aGlzLnRva2VuLCB7XG4gICAgICAuLi4odGhpcy5tb3VudFVybCA/IHsgbW91bnRVcmw6IHRoaXMubW91bnRVcmwgfSA6IHt9KSxcbiAgICAgIC4uLih0aGlzLmFwaVVybCA/IHsgYXBpVXJsOiB0aGlzLmFwaVVybCB9IDoge30pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5mbGF0ZmlsZUltcG9ydGVyLm9uKCdpbml0JywgKHJlcykgPT4gdGhpcy5vbkluaXQubmV4dChyZXMpKTtcbiAgICB0aGlzLmZsYXRmaWxlSW1wb3J0ZXIub24oJ3VwbG9hZCcsIChyZXMpID0+IHRoaXMub25VcGxvYWQubmV4dChyZXMpKTtcbiAgICB0aGlzLmZsYXRmaWxlSW1wb3J0ZXIub24oJ2xhdW5jaCcsIChyZXMpID0+IHRoaXMub25MYXVuY2gubmV4dChyZXMpKTtcbiAgICB0aGlzLmZsYXRmaWxlSW1wb3J0ZXIub24oJ2Nsb3NlJywgKHJlcykgPT4gdGhpcy5vbkNsb3NlLm5leHQocmVzKSk7XG4gICAgdGhpcy5mbGF0ZmlsZUltcG9ydGVyLm9uKCdjb21wbGV0ZScsIChyZXMpID0+IHRoaXMub25Db21wbGV0ZS5uZXh0KHJlcykpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZmxhdGZpbGVJbXBvcnRlci5jbG9zZSgpO1xuICB9XG5cbiAgcHVibGljIGxhdW5jaCgpOiB2b2lkIHtcbiAgICB0aGlzLmZsYXRmaWxlSW1wb3J0ZXIubGF1bmNoKCkuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IubmV4dCh7IGVycm9yOiBlIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=