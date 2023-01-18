import { Component, ViewChild } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  @ViewChild('pivot') pivot!: FlexmonsterPivot;

  onPivotReady(pivot: Flexmonster.Pivot): void {
    console.log('[ready] FlexmonsterPivot', this.pivot);
  }
}
