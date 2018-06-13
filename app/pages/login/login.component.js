"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = 'dan@test.test';
        this.user.password = 'test';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        this.isLoggingIn
            ? this.login()
            : this.signUp();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService
            .login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function () { return alert("Failed to login"); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created");
            _this.toggleDisplay();
        }, function () {
            alert("you account failed to create");
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        var _this = this;
        var container = this.container.nativeElement;
        var originalX = container.originX;
        var originalY = container.originY;
        container.animate({
            translate: {
                x: originalX,
                y: -600
            },
            scale: {
                x: 0.01,
                y: 0.01
            },
            duration: 200
        }).then(function () {
            _this.isLoggingIn = !_this.isLoggingIn;
            _this.setTextFieldColors();
            return container.animate({
                backgroundColor: _this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#341f97"),
                duration: 0
            });
        }).then(function () {
            container.animate({
                translate: {
                    x: originalX,
                    y: originalY
                },
                scale: {
                    x: 1,
                    y: 1
                },
                duration: 200
            });
        });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQiwrQkFBOEI7QUFFOUIsbURBQXFEO0FBU3JEO0lBT0Usd0JBQ1ksTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLElBQVU7UUFGVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVRmLGdCQUFXLEdBQVksSUFBSSxDQUFBO1FBSTNCLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFBO1FBTTVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQTtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUE7SUFDN0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNFLElBQUksY0FBYyxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksaUJBQWlCLEdBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFFL0QsSUFBSSxhQUFhLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxjQUFjLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsYUFB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Q0FBQztpQkFDUDtnQkFDRCxRQUFRLEVBQUUsR0FBRzthQUNoQixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUE5RnVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLGlCQUFVO3FEQUFDO0lBQzFCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO2lEQUFDO0lBQ2Y7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7b0RBQUM7SUFKakMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHlCQUF5QixDQUFDO1NBQ3pFLENBQUM7eUNBU29CLGVBQU07WUFDRCwwQkFBVztZQUNsQixXQUFJO09BVlgsY0FBYyxDQWlHMUI7SUFBRCxxQkFBQztDQUFBLEFBakdELElBaUdDO0FBakdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgc2V0SGludENvbG9yIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hpbnQtdXRpbFwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9wYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgaXNMb2dnaW5nSW46IGJvb2xlYW4gPSB0cnVlXHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImVtYWlsXCIpIGVtYWlsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICBwdWJsaWMgdXNlcjogVXNlciA9IG5ldyBVc2VyKClcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMudXNlci5lbWFpbCA9ICdkYW5AdGVzdC50ZXN0J1xyXG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gJ3Rlc3QnXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcclxuICB9XHJcblxyXG4gIHNldFRleHRGaWVsZENvbG9ycygpIHtcclxuICAgIGxldCBlbWFpbFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHBhc3N3b3JkVGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgbGV0IG1haW5UZXh0Q29sb3IgPSBuZXcgQ29sb3IodGhpcy5pc0xvZ2dpbmdJbiA/IFwiYmxhY2tcIiA6IFwiI0M0QUZCNFwiKTtcclxuICAgIGVtYWlsVGV4dEZpZWxkLmNvbG9yID0gbWFpblRleHRDb2xvcjtcclxuICAgIHBhc3N3b3JkVGV4dEZpZWxkLmNvbG9yID0gbWFpblRleHRDb2xvcjtcclxuXHJcbiAgICBsZXQgaGludENvbG9yID0gbmV3IENvbG9yKHRoaXMuaXNMb2dnaW5nSW4gPyBcIiNBQ0E2QTdcIiA6IFwiI0M0QUZCNFwiKTtcclxuICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IGVtYWlsVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xyXG4gICAgc2V0SGludENvbG9yKHsgdmlldzogcGFzc3dvcmRUZXh0RmllbGQsIGNvbG9yOiBoaW50Q29sb3IgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VibWl0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnVzZXIuaXNWYWxpZEVtYWlsKCkpIHtcclxuICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNMb2dnaW5nSW5cclxuICAgICAgPyB0aGlzLmxvZ2luKClcclxuICAgICAgOiB0aGlzLnNpZ25VcCgpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvZ2luKCk6IHZvaWQge1xyXG4gICAgdGhpcy51c2VyU2VydmljZVxyXG4gICAgICAgIC5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSksXHJcbiAgICAgICAgICAgICgpID0+IGFsZXJ0KFwiRmFpbGVkIHRvIGxvZ2luXCIpKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaWduVXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpXHJcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KClcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwieW91IGFjY291bnQgZmFpbGVkIHRvIGNyZWF0ZVwiKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURpc3BsYXkoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IG9yaWdpbmFsWCA9IGNvbnRhaW5lci5vcmlnaW5YXHJcbiAgICBjb25zdCBvcmlnaW5hbFkgPSBjb250YWluZXIub3JpZ2luWVxyXG4gICAgY29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgICAgICB4OiBvcmlnaW5hbFgsXHJcbiAgICAgICAgICAgIHk6IC02MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgIHg6IDAuMDEsXHJcbiAgICAgICAgICAgIHk6IDAuMDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDBcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgICAgICB0aGlzLnNldFRleHRGaWVsZENvbG9ycygpO1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiIzM0MWY5N1wiKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHtcclxuICAgICAgICAgICAgICAgIHg6IG9yaWdpbmFsWCxcclxuICAgICAgICAgICAgICAgIHk6IG9yaWdpbmFsWVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICAgIHk6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICB9XHJcbn0iXX0=