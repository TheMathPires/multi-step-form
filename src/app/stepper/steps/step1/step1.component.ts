import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.sass'
})
export class Step1Component implements OnInit {

  private _step1From!: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  public get step1From(): FormGroup {
    return this._step1From;
  }  

  ngOnInit(): void {
      this._step1From = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        phone: ['', Validators.required] // TODO: Phone number validator
      });
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

}
