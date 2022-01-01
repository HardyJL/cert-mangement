import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardItemComponent } from './components/dashboard/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { DomainsComponent } from './components/domains/domains.component';
import { TargethostsComponent } from './components/targethosts/targethosts.component';
import { HosterComponent } from './components/hoster/hoster.component';
import { TargetsComponent } from './components/targets/targets.component';
import { JobsComponent } from './components/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardItemComponent,
    HeaderComponent,
    CertificatesComponent,
    DomainsComponent,
    TargethostsComponent,
    HosterComponent,
    TargetsComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
