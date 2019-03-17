import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule, NgbModule.forRoot()]
})
export class SharedModule {}
