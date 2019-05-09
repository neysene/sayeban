import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  userListRef;
  userList;
  user;

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) {
    this.auth.user$.subscribe(user => this.user = user)
  }

  ngOnInit() {
    this.userListRef = this.afs.collection('users')
    this.userList = this.userListRef.valueChanges()
  }

  subscriberStatus(uid, roleStatus) {
    this.afs.doc('users/' + uid)
      .update({ 'roles.subscriber': roleStatus })
  }

  editorStatus(uid, roleStatus) {
    this.afs.doc('users/' + uid)
      .update({ 'roles.editor': roleStatus })
  }

  adminStatus(uid, roleStatus) {
    this.afs.doc('users/' + uid)
      .update({ 'roles.admin': roleStatus })
  }

}
