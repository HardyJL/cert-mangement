import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomainsComponent } from './components/domains/domains.component';
import { HosterComponent } from './components/hoster/hoster.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { TargethostsComponent } from './components/targethosts/targethosts.component';
import { TargetsComponent } from './components/targets/targets.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'domains', component: DomainsComponent },
  { path: 'targethosts', component: TargethostsComponent },
  { path: 'hoster', component: HosterComponent },
  { path: 'targets', component: TargetsComponent },
  { path: 'jobs', component: JobsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
