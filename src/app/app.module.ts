import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminModule } from './admin/admin.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Custom
import { FypTemplateModule } from './fyp-template/fyp-template.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FypCategorieComponent } from './fyp-categorie/fyp-categorie.component';
// e6447ab970454075acf54ec8b19718d5

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotfoundComponent,
    AuthenticationComponent,
    HomepageComponent,
    FooterComponent,
    FypCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    FypTemplateModule,
    DashboardModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
