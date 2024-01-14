import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllocationPageRoutingModule } from './allocation-routing.module';

import { AllocationPage } from './allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllocationPageRoutingModule
  ],
  declarations: [AllocationPage]
})
export class AllocationPageModule {}
