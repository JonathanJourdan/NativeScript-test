import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls:["./home.component.css"]
})
export class HomeComponent implements OnInit {
    titre:string = "Donald Trump";
    imageEntete:string = "";
    imageEnteteDPI = "res://logo";
    imageEnteteLocale="~/adresseduneimage.png";

    sousTitre:string = "Coin Coin";
    informations:string = "viens decouvrir mon monde";

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    //Méthode coincoin
    coincoin() {
        console.log("coin coin");
    }
}
