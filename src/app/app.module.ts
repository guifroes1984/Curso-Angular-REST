import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisições Ajax*/
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'



export const appRouters: Routes = [

  { path: 'home', component : HomeComponent },
  { path: 'login', component : LoginComponent },
  { path: '', component : LoginComponent }

];

export const routes : ModuleWithProviders<any> = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
