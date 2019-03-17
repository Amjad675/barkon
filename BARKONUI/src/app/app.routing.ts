import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./modules/index/landing/landing.component";

const routes: Routes = [
  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  // { path: 'index',                component: ComponentsComponent },
  // { path: 'nucleoicons',          component: NucleoiconsComponent },
  // { path: 'examples/landing',     component: LandingComponent },
  // { path: 'examples/login',       component: LoginComponent },
  // { path: 'examples/profile',     component: ProfileComponent }
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  { path: "index", component: LandingComponent }
  // {
  //     path: '',
  //     component: LayoutComponent,
  //     children: [
  //       {
  //         path: 'index',
  //         loadChildren: './modules/broker/broker.module#BrokerModule',
  //       }
  //     ]
  //   }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
