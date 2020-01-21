import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { FlexmonsterPivotModule } from 'ng-flexmonster';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    FlexmonsterPivotModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: []
})
export class AppModule {}
