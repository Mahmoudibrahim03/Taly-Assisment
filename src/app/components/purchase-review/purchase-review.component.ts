import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-purchase-review',
  standalone: true,
  imports: [],
  templateUrl: './purchase-review.component.html',
  styleUrl: './purchase-review.component.scss'
})
export class PurchaseReviewComponent implements OnInit {
  public innerWidth: number = 0;
  public mobileBreakPoint = 425;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
