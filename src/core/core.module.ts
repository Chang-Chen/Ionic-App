import {ModuleWithProviders, NgModule} from "@angular/core";
import {ServiceModule} from "./service.module";

@NgModule({
  imports: [
    ServiceModule
  ],
  exports: [],
  providers: []
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootCoreModule,
      providers: []
    }
  }
}

@NgModule({
  imports:[CoreModule]
})

export class RootCoreModule {
}
