import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ce-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.scss']
})
export class ContactReactiveFormComponent implements OnInit {

  contactForm: FormGroup

  constructor() {
    this.contactForm = new FormGroup({
      email: new FormControl('zenek@oczyzielone.pl', [ Validators.required, Validators.email ]),
      message: new FormControl('', [Validators.maxLength(10), this.dupaValidator])
    }, {
      updateOn: 'submit'
    })

    // this.contactForm.valueChanges
    //   .pipe(debounceTime(300))
    //   .subscribe(val => {
    //     console.log(val)
    //   })

    this.contactForm.get('email').statusChanges
      .subscribe(status => {
        if (status === 'INVALID') {
          this.contactForm.get('message').disable()
        }
        else {
          this.contactForm.get('message').enable()
        }
      })
  }

  ngOnInit(): void {
  }

  dupaValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.includes('angular')
      ? { dupaError: 'proszę nie korzystać' }
      : null
  }

  handleSubmit() {
    console.log(this.contactForm.getRawValue())
    if (this.contactForm.valid) {
      console.log(this.contactForm)
    }
    else {
      console.error('jest błąd')
    }
  }

}
