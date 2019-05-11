import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.sass']
})
export class AddTipComponent {
  tipForm = this.fb.group({
    sportsbook: ['', Validators.required],
    pick: ['', Validators.required],
    odd: ['', Validators.required],
    comment: [''],
    tags: this.fb.array([
      this.fb.control('')
    ])
  });

  get tags() {
    return this.tipForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.tipForm.patchValue({
      sportsbook: 'Nancy',
      odd: 2.50,
      pick: 'Balkes Kazanır'
    });
  }

  addTags() {
    this.tags.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.tipForm.value);
  }

}
