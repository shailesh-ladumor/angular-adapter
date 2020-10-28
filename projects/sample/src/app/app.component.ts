import { Component } from '@angular/core';
import { IDataHookResponse } from '@flatfile/adapter/build/main/obj.validation-response';
import FlatfileResults from '@flatfile/adapter/build/main/results';
import { FieldHookCallback, FlatfileMethods, ScalarDictionaryWithCustom } from 'projects/angular-adapter/src/public-api';

@Component({
  selector: 'app-root',
  template: `
    <h1>Flatfile Angular button sample</h1>

    <flatfile-button
      [settings]="settings"
      [customer]="customer"
      [licenseKey]="licenseKey"
      [fieldHooks]="fieldHooks"
      [(data)]="onData"
      [(recordInit)]="onRecordInit"
      [(recordChange)]="onRecordChange"
      (cancel)="onCancel()">
      This text is coming from the end-user of this component
    </flatfile-button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements FlatfileMethods {
  customer = { userId: '12345' };
  licenseKey = '4171f0b4-5f5c-4b32-a008-356ebb813e4e';
  settings = {
    type: 'test import',
    fields: [
      { label: 'Name', key: 'name' },
      { label: 'Email', key: 'email' },
    ],
  };

  /*
   * @Input()'s
   */
  public fieldHooks: Record<string, FieldHookCallback> = {
    email: (values) => {
      return values.map(([item, index]) => [
        { value: item + '@', info: [{message: 'added @ after the email', level: 'warning'}] },
        index
      ]);
    }
  };

  /*
   * 2-way binding handlers
   */
  onData(results: FlatfileResults): Promise<string> {
    let errorState = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (errorState) {
          reject('rejected - this text is controlled by the end-user');
          errorState = false;
        } else {
          resolve('Flatfile upload successful - this text is controlled by the end-user');
        }
      }, 3000);
    });
  }

  onRecordInit(record: ScalarDictionaryWithCustom, index: number): IDataHookResponse | Promise<IDataHookResponse> {
    return {
      email: {
        value: record.email + '@',
        info: [{ message: 'added @ on init', level: 'info' }]
      }
    };
  }

  onRecordChange(record: ScalarDictionaryWithCustom, index: number): IDataHookResponse | Promise<IDataHookResponse> {
    return {
      email: {
        value: record.email + '#',
        info: [{ message: 'added # on change', level: 'warning' }]
      }
    };
  }

  /*
   * @Output() handlers
   */
  onCancel(): void {
    console.log('canceled!');
  }

}
