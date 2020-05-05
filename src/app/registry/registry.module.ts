import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { RegistryComponent } from './registry.component';


@NgModule({
  declarations: [RegistryComponent],
  imports: [
    CommonModule,
    RegistryRoutingModule
  ]
})
export class RegistryModule { }
