import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";

import { LoginModule } from "./components/Login/login.module";
import { AboutModule } from "./components/About/about.module";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    LoginModule,
    AboutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
