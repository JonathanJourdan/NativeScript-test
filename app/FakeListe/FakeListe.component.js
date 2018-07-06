"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "FakeListe", loadChildren: "./FakeListe/FakeListe.module#FakeListeModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var FakeListeComponent = /** @class */ (function () {
    function FakeListeComponent() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }
    FakeListeComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
        this.listeNews = [
            { text: "Fake news", img: "res://donald", descr: "Wow! The NSA has deleted 685 million phone calls and text messages. Privacy violations? They blame technical irregularities. Such a disgrace. The Witch Hunt continues!" },
            { text: "News", img: "res://donald", descr: "Now that Harley-Davidson is moving part of its operation out of the U.S., my Administration is working with other Motor Cycle companies who want to move into the U.S. Harley customers are not happy with their move - sales are down 7% in 2017. The U.S. is where the Action is!" },
            { text: "News", img: "res://donald", descr: "Many good conversations with North Korea-it is going well! In the meantime, no Rocket Launches or Nuclear Testing in 8 months. All of Asia is thrilled. Only the Opposition Party, which includes the Fake News, is complaining. If not for me, we would now be at War with North Korea!" },
            { text: "News", img: "res://donald", descr: "" }
        ];
    };
    FakeListeComponent = __decorate([
        core_1.Component({
            selector: "FakeListe",
            moduleId: module.id,
            templateUrl: "./FakeListe.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], FakeListeComponent);
    return FakeListeComponent;
}());
exports.FakeListeComponent = FakeListeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFrZUxpc3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZha2VMaXN0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQ7Ozs7OzhEQUs4RDtBQU85RDtJQUlJO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJOztzRUFFOEQ7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNoQixFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUMseUtBQXlLLEVBQUM7WUFDdk4sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxjQUFjLEVBQUUsS0FBSyxFQUFDLHFSQUFxUixFQUFDO1lBQzlULEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsY0FBYyxFQUFFLEtBQUssRUFBQywwUkFBMFIsRUFBQztZQUNuVSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDO1NBQUMsQ0FBQztJQUNqRCxDQUFDO0lBbkJRLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FvQjlCO0lBQUQseUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZXdzIH0gZnJvbSBcIi4uL21vZGVsZS9uZXdzTW9kZWxlXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxuKiBnbG9iYWwgYXBwIHJvdXRlciBtb2R1bGUuIEFkZCB0aGUgZm9sbG93aW5nIG9iamVjdCB0byB0aGUgZ2xvYmFsIGFycmF5IG9mIHJvdXRlczpcbiogeyBwYXRoOiBcIkZha2VMaXN0ZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9GYWtlTGlzdGUvRmFrZUxpc3RlLm1vZHVsZSNGYWtlTGlzdGVNb2R1bGVcIiB9XG4qIE5vdGUgdGhhdCB0aGlzIHNpbXBseSBwb2ludHMgdGhlIHBhdGggdG8gdGhlIHBhZ2UgbW9kdWxlIGZpbGUuIElmIHlvdSBtb3ZlIHRoZSBwYWdlLCB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHJvdXRlIHRvby5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkZha2VMaXN0ZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9GYWtlTGlzdGUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBGYWtlTGlzdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbGlzdGVOZXdzOkFycmF5PE5ld3M+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3QgYXBwIHNlcnZpY2VzIHRoYXQgeW91IG5lZWQgaW4gdGhpcyBjb21wb25lbnQuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgIHRoaXMubGlzdGVOZXdzID0gW1xuICAgICAgICB7dGV4dDpcIkZha2UgbmV3c1wiLCBpbWc6XCJyZXM6Ly9kb25hbGRcIiwgZGVzY3I6XCJXb3chIFRoZSBOU0EgaGFzIGRlbGV0ZWQgNjg1IG1pbGxpb24gcGhvbmUgY2FsbHMgYW5kIHRleHQgbWVzc2FnZXMuIFByaXZhY3kgdmlvbGF0aW9ucz8gVGhleSBibGFtZSB0ZWNobmljYWwgaXJyZWd1bGFyaXRpZXMuIFN1Y2ggYSBkaXNncmFjZS4gVGhlIFdpdGNoIEh1bnQgY29udGludWVzIVwifSxcbiAgICAgICAge3RleHQ6XCJOZXdzXCIsIGltZzpcInJlczovL2RvbmFsZFwiLCBkZXNjcjpcIk5vdyB0aGF0IEhhcmxleS1EYXZpZHNvbiBpcyBtb3ZpbmcgcGFydCBvZiBpdHMgb3BlcmF0aW9uIG91dCBvZiB0aGUgVS5TLiwgbXkgQWRtaW5pc3RyYXRpb24gaXMgd29ya2luZyB3aXRoIG90aGVyIE1vdG9yIEN5Y2xlIGNvbXBhbmllcyB3aG8gd2FudCB0byBtb3ZlIGludG8gdGhlIFUuUy4gSGFybGV5IGN1c3RvbWVycyBhcmUgbm90IGhhcHB5IHdpdGggdGhlaXIgbW92ZSAtIHNhbGVzIGFyZSBkb3duIDclIGluIDIwMTcuIFRoZSBVLlMuIGlzIHdoZXJlIHRoZSBBY3Rpb24gaXMhXCJ9LFxuICAgICAgICB7dGV4dDpcIk5ld3NcIiwgaW1nOlwicmVzOi8vZG9uYWxkXCIsIGRlc2NyOlwiTWFueSBnb29kIGNvbnZlcnNhdGlvbnMgd2l0aCBOb3J0aCBLb3JlYS1pdCBpcyBnb2luZyB3ZWxsISBJbiB0aGUgbWVhbnRpbWUsIG5vIFJvY2tldCBMYXVuY2hlcyBvciBOdWNsZWFyIFRlc3RpbmcgaW4gOCBtb250aHMuIEFsbCBvZiBBc2lhIGlzIHRocmlsbGVkLiBPbmx5IHRoZSBPcHBvc2l0aW9uIFBhcnR5LCB3aGljaCBpbmNsdWRlcyB0aGUgRmFrZSBOZXdzLCBpcyBjb21wbGFpbmluZy4gSWYgbm90IGZvciBtZSwgd2Ugd291bGQgbm93IGJlIGF0IFdhciB3aXRoIE5vcnRoIEtvcmVhIVwifSxcbiAgICAgICAge3RleHQ6XCJOZXdzXCIsIGltZzpcInJlczovL2RvbmFsZFwiLCBkZXNjcjpcIlwifV07XG4gICAgfVxufVxuIl19