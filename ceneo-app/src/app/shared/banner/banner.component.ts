import { Component, OnInit, Input } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'ce-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() title: string
  @Input() content: string
  clickCounter: number

  constructor(private clickService: ClickService) {
    this.clickCounter = this.clickService.clickCounter
  }

  ngOnInit(): void {
  }

  clickBanner() {
    this.clickService.click()
    this.clickCounter = this.clickService.clickCounter // ALE RAK xDDDDDD KURWA SRANGULAR
  }

}
