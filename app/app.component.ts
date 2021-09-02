import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Type, VERSION } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public constructor(
    private readonly changeDetector: ChangeDetectorRef
  ) {
  }

  version = 'Angular: v' + VERSION.full;
}
