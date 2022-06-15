import { Component, ViewChild } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('pivot') pivot: FlexmonsterPivot;

  onPivotReady(pivot: Flexmonster.Pivot): void {
    console.log('[ready] FlexmonsterPivot', this.pivot);
  }
}
