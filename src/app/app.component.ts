import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from "./components/cart/cart.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { OrderConfirmationModalComponent } from "./components/order-confirmation-modal/order-confirmation-modal.component";
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CartComponent, ProductListComponent, OrderConfirmationModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public cartService: CartService) {}
}
