import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import {
  NbMenuModule,
  NbInputModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarModule,
  NbIconModule,
} from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    NbMenuModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbEvaIconsModule,
  ]
})
export class NebularModule { }
