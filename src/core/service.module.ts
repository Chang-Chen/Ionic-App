/**
 * 集合service
 */
import {NgModule} from '@angular/core';
import {HttpService} from './services/http.service';

@NgModule({
  providers: [
    {provide: 'httpService', useClass: HttpService}]
})

export class ServiceModule {
}
