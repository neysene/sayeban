import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin-test';

  constructor(public auth: AuthService) { }

  ngOnInit() { }
}
