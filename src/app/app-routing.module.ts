import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminGuard } from './core/admin.guard';
import { CanReadGuard } from './core/can-read.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanReadGuard] },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
