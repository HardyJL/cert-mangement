import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
