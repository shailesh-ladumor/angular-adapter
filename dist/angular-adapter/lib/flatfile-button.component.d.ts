import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FlatfileButtonComponent implements OnInit, OnDestroy {
    token: string;
    mountUrl?: string;
    apiUrl?: string;
    onInit: EventEmitter<{
        batchId: string;
        schemas: {
            id: string;
        }[];
        workspaceId: string;
    }>;
    onUpload: EventEmitter<{
        uploadId: string;
    }>;
    onLaunch: EventEmitter<{
        batchId: string;
    }>;
    onClose: EventEmitter<void>;
    onComplete: EventEmitter<{
        batchId: string;
        data: (sample?: boolean) => Promise<{
            rows: import("@flatfile/sdk/dist/graphql/queries/GET_FINAL_DATABASE_VIEW").GetFinalDatabaseViewResponse__rows[];
            totalRows: number;
        }>;
    }>;
    onError: EventEmitter<{
        error: Error;
    }>;
    ref: ElementRef;
    isImporterLoaded: boolean;
    private flatfileImporter;
    ngOnInit(): void;
    ngOnDestroy(): void;
    launch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlatfileButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlatfileButtonComponent, "flatfile-button", never, { "token": "token"; "mountUrl": "mountUrl"; "apiUrl": "apiUrl"; }, { "onInit": "onInit"; "onUpload": "onUpload"; "onLaunch": "onLaunch"; "onClose": "onClose"; "onComplete": "onComplete"; "onError": "onError"; }, never, ["*"], false>;
}
//# sourceMappingURL=flatfile-button.component.d.ts.map