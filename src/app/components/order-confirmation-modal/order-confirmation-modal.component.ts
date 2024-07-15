import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation-modal.component.html',
  styleUrl: './order-confirmation-modal.component.scss'
})
export class OrderConfirmationModalComponent implements AfterViewChecked {
  @ViewChild('orderConfirmationDialog') orderConfirmationModal!: ElementRef<HTMLDialogElement>;

  constructor(public cartService: CartService) {}

  ngAfterViewChecked(): void {
    this.orderConfirmationModal.nativeElement.showModal();
  }

  closeOrderConfirmation(): void {
    this.cartService.resetCart();
    this.cartService.orderConfirmed = false;
  }
}