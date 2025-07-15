import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/payment-plan/payment-plan.component').then(m => m.PaymentPlanComponent),
  },
];
