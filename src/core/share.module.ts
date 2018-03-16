import {NgModule} from "@angular/core";
import {HttpModule, JsonpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    JsonpModule,
  ],
  declarations:[
  ],
  exports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
  ],

})

export class ShareModule {
}
