import { Component } from '@angular/core';
import {PurchaseReviewComponent} from '../../components/purchase-review/purchase-review.component';
import {PaymentSelectionComponent} from '../../components/payment-selection/payment-selection.component';

@Component({
  selector: 'app-payment-plan',
  standalone: true,
  imports: [
    PurchaseReviewComponent,
    PaymentSelectionComponent
  ],
  templateUrl: './payment-plan.component.html',
  styleUrl: './payment-plan.component.scss'
})
export class PaymentPlanComponent {

}
