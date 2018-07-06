import { Component, OnInit } from "@angular/core";
import { News } from "../modele/newsModele";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "FakeListe", loadChildren: "./FakeListe/FakeListe.module#FakeListeModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "FakeListe",
    moduleId: module.id,
    templateUrl: "./FakeListe.component.html"
})
export class FakeListeComponent implements OnInit {

    listeNews:Array<News>;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
       this.listeNews = [
        {text:"Fake news", img:"res://donald", descr:"Wow! The NSA has deleted 685 million phone calls and text messages. Privacy violations? They blame technical irregularities. Such a disgrace. The Witch Hunt continues!"},
        {text:"News", img:"res://donald", descr:"Now that Harley-Davidson is moving part of its operation out of the U.S., my Administration is working with other Motor Cycle companies who want to move into the U.S. Harley customers are not happy with their move - sales are down 7% in 2017. The U.S. is where the Action is!"},
        {text:"News", img:"res://donald", descr:"Many good conversations with North Korea-it is going well! In the meantime, no Rocket Launches or Nuclear Testing in 8 months. All of Asia is thrilled. Only the Opposition Party, which includes the Fake News, is complaining. If not for me, we would now be at War with North Korea!"},
        {text:"News", img:"res://donald", descr:""}];
    }
}
