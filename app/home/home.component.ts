import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    description:string = "Ma description qui roule tourne terrible uf ufhuv hv vh befe f ssdjv dshvbd vfn f nfifnvnnf ivn ivn nfvfnvfd fdu bu fvyz fyv uzvy v ssvfsf";

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
