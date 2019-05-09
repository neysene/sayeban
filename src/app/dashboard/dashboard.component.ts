import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  postRef;
  post$;
  user;
  tipsRef;
  tips;

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
    ) {
    this.auth.user$.subscribe(user => this.user = user)
  }

  ngOnInit() {
    this.postRef = this.afs.doc('posts/test-post')
    this.post$ = this.postRef.valueChanges()
    this.tipsRef = this.afs.collection('posts')
    this.tips = this.tipsRef.valueChanges()
  }

  editPost() {
    this.postRef.update({ title: 'Edited Title!' })
  }

  deletePost() {
    this.postRef.delete()
  }

}
