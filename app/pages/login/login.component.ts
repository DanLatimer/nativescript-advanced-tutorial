import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})
export class LoginComponent implements OnInit {
  public isLoggingIn: boolean = true
  @ViewChild("container") container: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;
  public user: User = new User()

  constructor(
      private router: Router,
      private userService: UserService,
      private page: Page) {
    this.user.email = 'dan@test.test'
    this.user.password = 'test'
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  setTextFieldColors() {
    let emailTextField = <TextField>this.email.nativeElement;
    let passwordTextField = <TextField>this.password.nativeElement;

    let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color = mainTextColor;
    passwordTextField.color = mainTextColor;

    let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
    setHintColor({ view: emailTextField, color: hintColor });
    setHintColor({ view: passwordTextField, color: hintColor });
  }

  public submit(): void {
    if (!this.user.isValidEmail()) {
        alert("Enter a valid email address.");
        return;
    }

    this.isLoggingIn
      ? this.login()
      : this.signUp()
  }

  private login(): void {
    this.userService
        .login(this.user)
        .subscribe(() => this.router.navigate(["/list"]),
            () => alert("Failed to login"))
  }

  private signUp(): void {
    this.userService.register(this.user)
      .subscribe(() => {
        alert("Your account was successfully created")
        this.toggleDisplay()
      }, () => {
        alert("you account failed to create")
      })
  }

  public toggleDisplay(): void {
    let container = <View>this.container.nativeElement;
    const originalX = container.originX
    const originalY = container.originY
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
    }).then(() => {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        return container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#341f97"),
            duration: 0
          })
        }).then(() => {
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
        })
    })

  }
}