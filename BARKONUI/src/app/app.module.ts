import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { LayoutModule } from "./modules/layout/layout.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./modules/shared/shared.module";
import { IndexModule } from "./modules/index/index.module";
import { NavbarComponent } from "./modules/layout/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    LayoutModule,
    AppRoutingModule,
    SharedModule,
    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
