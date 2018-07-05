"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.titre = "Donald Trump";
        this.imageEntete = "";
        this.imageEnteteDPI = "res://logo";
        this.imageEnteteLocale = "~/adresseduneimage.png";
        this.sousTitre = "Coin Coin";
        this.informations = "viens decouvrir mon monde";
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    //Méthode coincoin
    HomeComponent.prototype.coincoin = function () {
        console.log("coin coin");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVFsRDtJQVNJO1FBUkEsVUFBSyxHQUFVLGNBQWMsQ0FBQztRQUM5QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM5QixzQkFBaUIsR0FBQyx3QkFBd0IsQ0FBQztRQUUzQyxjQUFTLEdBQVUsV0FBVyxDQUFDO1FBQy9CLGlCQUFZLEdBQVUsMkJBQTJCLENBQUM7UUFHOUMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFDRCxrQkFBa0I7SUFDbEIsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQW5CUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNyQyxDQUFDOztPQUNXLGFBQWEsQ0FvQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOltcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRpdHJlOnN0cmluZyA9IFwiRG9uYWxkIFRydW1wXCI7XG4gICAgaW1hZ2VFbnRldGU6c3RyaW5nID0gXCJcIjtcbiAgICBpbWFnZUVudGV0ZURQSSA9IFwicmVzOi8vbG9nb1wiO1xuICAgIGltYWdlRW50ZXRlTG9jYWxlPVwifi9hZHJlc3NlZHVuZWltYWdlLnBuZ1wiO1xuXG4gICAgc291c1RpdHJlOnN0cmluZyA9IFwiQ29pbiBDb2luXCI7XG4gICAgaW5mb3JtYXRpb25zOnN0cmluZyA9IFwidmllbnMgZGVjb3V2cmlyIG1vbiBtb25kZVwiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cbiAgICAvL03DqXRob2RlIGNvaW5jb2luXG4gICAgY29pbmNvaW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29pbiBjb2luXCIpO1xuICAgIH1cbn1cbiJdfQ==