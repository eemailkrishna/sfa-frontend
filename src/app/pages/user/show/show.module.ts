import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [ShowComponent],
  imports: [CommonModule, ShowRoutingModule, DataTablesModule],
})
export class ShowModule {}
