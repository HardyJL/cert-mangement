import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardItemComponent } from './components/dashboard/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomainsComponent } from './components/domains/domains.component';
import { HeaderComponent } from './components/header/header.component';
import { HosterComponent } from './components/hoster/hoster.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { TargethostsComponent } from './components/targethosts/targethosts.component';
import { TargetsComponent } from './components/targets/targets.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificatesComponent,
    DashboardComponent,
    DashboardItemComponent,
    DomainsComponent,
    HeaderComponent,
    HosterComponent,
    JobsComponent,
    TargethostsComponent,
    TargetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
