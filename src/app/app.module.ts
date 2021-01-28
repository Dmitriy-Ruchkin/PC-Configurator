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
import { pcConfiguratorCurrencyPipe } from  './shared/pipes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsListComponent,
    IconsComponent,
    ConfiguratorComponent,
    pcConfiguratorCurrencyPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DialogsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

