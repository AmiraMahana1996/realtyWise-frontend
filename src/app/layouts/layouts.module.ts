import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

import { TranslateModule } from '@ngx-translate/core';

// Component pages
import { LayoutComponent } from './layout.component';

import { TopbarComponent } from './topbar/topbar.component';

import { FooterComponent } from './footer/footer.component';

import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontalTopbarComponent } from './horizontal-topbar/horizontal-topbar.component';
import { LanguageService } from '../core/services/language.service';




@NgModule({
  declarations: [
    LayoutComponent,

    TopbarComponent,

    FooterComponent,

    HorizontalComponent,
    HorizontalTopbarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    TranslateModule,
  ],
  providers: [LanguageService]
})
export class LayoutsModule { }
