import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DialogsModule } from 'rl-dialogs'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { IconsComponent } from './shared/icons/icons.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { pcConfiguratorCurrencyPipe } from  './shared/pipes';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PcConfigFormControlComponent } from './forms/pc-config-form-control/pc-config-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsListComponent,
    IconsComponent,
    ConfiguratorComponent,
    pcConfiguratorCurrencyPipe,
    SignInComponent,
    SignUpComponent,
    PcConfigFormControlComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DialogsModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

