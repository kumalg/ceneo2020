import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ClickService } from '../click.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ce-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy, OnChanges {

  _title: string
  @Input()
  set title(val: string) {
    this._title = val.toUpperCase()
  }

  @Input() content: string

  click$
  // clickCounter
  // subscription: Subscription
  // click$: Observable<number>

  constructor(private clickService: ClickService) {
    this.click$ = this.clickService.click$
    // this.clickService.click$.subscribe(val => {
    //   console.log(`clicks in banner: ${val}`)
    //   this.clickCounter = val
    // })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  clickBanner() {
    this.clickService.click()
    // this.clickCounter = this.clickService.clickCounter // ALE RAK xDDDDDD KURWA SRANGULAR
  }

}
