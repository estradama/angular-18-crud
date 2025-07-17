import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput, MatDialogModule]
@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule, MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styles: ``
})
export class ModalComponent implements OnInit{
  
  contactForm!: FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this._builForm();
  }

  getTitle(): string {
    return this._matDialog.data ? 'Edit Contact' : 'Add Contact';
  }

  private _builForm(): void{
    this.contactForm = this._fb.nonNullable.group({
      name: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required]

    });
  }
}
