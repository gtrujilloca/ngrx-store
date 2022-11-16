import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BaseAuthComponent } from './base-auth/base-auth.component';
import { BaseLoggedComponent } from './base-logged/base-logged.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    LogoComponent,
    MenuComponent,
    NavbarComponent,
    BaseAuthComponent,
    BaseLoggedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
