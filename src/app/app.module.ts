import {TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import {BlogComponent} from "./blog/blog.component";
import {TuiAvatarModule, TuiBreadcrumbsModule, TuiComboBoxModule, TuiInputModule, TuiRatingModule} from "@taiga-ui/kit";
import {TuiAutoFocusModule} from "@taiga-ui/cdk";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        TuiRootModule,
        TuiAlertModule,
        TuiDialogModule,
        TuiSvgModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'cart', component: CartComponent},
            {path: 'blog', component: BlogComponent},
            {path: 'post/:slug', component: BlogDetailComponent},
        ]),
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiAvatarModule,
        TuiBreadcrumbsModule,
        TuiButtonModule,
        TuiInputModule,
        TuiAutoFocusModule,
        FormsModule,
        TuiRatingModule,
        TuiComboBoxModule
    ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    BlogComponent,
      BlogDetailComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
