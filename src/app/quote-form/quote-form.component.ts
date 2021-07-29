import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  public submitted:boolean = false;
  public quoteForm = this.formBuilder.group({
    name: new FormControl('',
      [Validators.required]
    ),
    phoneNumber: new FormControl('',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]
    ),
    emailAddress: new FormControl('',
      [
        Validators.required,
        Validators.email
      ]
    )
  });

  get name() {
    return this.quoteForm.get('name');
  }

  get phoneNumber() {
    return this.quoteForm.get('phoneNumber');
  }

  get emailAddress() {
    return this.quoteForm.get('emailAddress');
  }

  constructor(
    private formBuilder: FormBuilder,
    ) {}

  onSubmit(): void {
    if (this.quoteForm.status === "VALID") {
      this.quoteForm.reset();
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  }

  ngOnInit(): void {
  }

}
