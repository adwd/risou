import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServiceService } from './my-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MyServiceService]
})
export class DomainModule { }
