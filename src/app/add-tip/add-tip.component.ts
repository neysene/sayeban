import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.sass']
})
export class AddTipComponent {

  user;

  tipForm = this.fb.group({
    tipID: [''],
    userID: [''],
    sportsbook: ['', Validators.required],
    pick: ['', Validators.required],
    odd: ['', Validators.required],
    comment: [''],
    voteCount: [''],
    playAt: [''],
    tags: this.fb.array([
      this.fb.control('')
    ])
  });

  get tags() {
    return this.tipForm.get('tags') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    public auth: AuthService
    ) {
    this.auth.user$.subscribe(user => this.user = user)
     }

/** Fill form for test purposes (assure validity) */
  updateProfile() {
    this.tipForm.patchValue({
      sportsbook: 'Rota',
      pick: "Madrid to Score",
      odd: 1.75,
      voteCount: [5, 2],
      playAt: new Date(),
    });
  }

  enterValues() {
    this.tipForm.patchValue({
      userID: this.user.uid,
      voteCount: [0, 0],
      playAt: new Date(),
    });
  }

  addTags() {
    this.tags.push(this.fb.control(''));
  }

  async submitHandler() {
    this.enterValues()
    const formValue = this.tipForm.value;

    try {
      await this.afs.collection('tips').add(formValue).then(ref => {
        this.afs.doc('tips/' + ref.id).update({ tipID: ref.id })
        console.log('Added the document with ID: ', ref.id);
      })
    } catch (err) {
      console.error(err)
    }
  }

  async altSubmitHandler() {
    this.enterValues()
    const formValue = this.tipForm.value;
    //var newTipRef = this.afs.collection('testBed').doc();
    //var setValue = newTipRef.set({
    //  formValue.tipID = newTipRef.id,
    //});

  }

/** alternative way for submitting */
  onSubmit() {
    console.warn(this.tipForm.value);

    var addDoc = this.afs.collection('tips').add({
      userID: this.user.uid,
      sportsbook: this.tipForm.get('sportsbook').value,
      pick: this.tipForm.get('pick').value,
      odd: this.tipForm.get('odd').value,
      comment: this.tipForm.get('comment').value,
      tags: this.tipForm.get('tags').value,
      voteCount: [0, 0],
      playAt: new Date(),
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
  }

}
