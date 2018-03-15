import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HomeModule } from "./home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  RouterModule,
  Route,
  Routes,
  PreloadingStrategy
} from "@angular/router";
import { AppComponent } from "./app.component";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

export class HackagesStragModules implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.load ? fn() : Observable.of(null);
  }
}

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  }
];

@NgModule({
  declarations: [AppComponent, UserComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
