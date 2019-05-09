import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AdminGuard } from './admin.guard';
import { CanReadGuard } from './can-read.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, AdminGuard, CanReadGuard]
})
export class CoreModule { }
