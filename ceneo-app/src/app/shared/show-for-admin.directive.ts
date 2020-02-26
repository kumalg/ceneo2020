import { Directive, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ceShowForAdmin]'
})
export class ShowForAdminDirective implements OnDestroy {

  private subscription: Subscription
  constructor(
    private template: TemplateRef<any>,
    private vc: ViewContainerRef,
    private authService: AuthService
  ) {
    this.subscription = authService.isAdmin$.subscribe(isAdmin => {
      isAdmin ? vc.createEmbeddedView(template) : vc.clear()
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
