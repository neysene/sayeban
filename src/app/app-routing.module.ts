import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddTipComponent } from './add-tip/add-tip.component';
import { EditTipComponent } from './edit-tip/edit-tip.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminGuard } from './core/admin.guard';
import { CanReadGuard } from './core/can-read.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanReadGuard] },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-tip', component: AddTipComponent, canActivate: [AdminGuard] },
  { path: 'edit-tip/:id', component: EditTipComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
