import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        HomeComponent,
        AppRoutingModule
    ],
    declarations: [
    AppComponent
],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
