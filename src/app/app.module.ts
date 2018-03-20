import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {ContainerComponent} from "./container/container.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginService} from "./login.service";
import { AuthGuard } from "./auth.guard";
import {HttpClientModule} from "@angular/common/http";

const routes = [{path: "", component: ContainerComponent},
  {path: "home", canActivate: [AuthGuard], component: HomeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
