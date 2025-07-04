import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Gifts } from '../gifts';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-gifts',
  imports: [ ReactiveFormsModule ],
  templateUrl: './add-gifts.html',
  styleUrl: './add-gifts.scss'
})
export class AddGifts {
    giftForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private giftService: Gifts,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.giftForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.giftForm.invalid) return;

    this.giftService.addGift(this.giftForm.value).subscribe({
      next: () => {
        this.toastr.success('Gift added successfully!', 'Success 🎁');
        this.giftForm.reset();
      },
      error: (err) => {
        const message = err.error?.error || 'Failed to add gift';
        this.toastr.error(message, 'Error');
      }
    });
  }
}