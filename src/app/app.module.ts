import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';

import {
  OverlayPanelModule,
  TreeTableModule, SharedModule,
  GrowlModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutDialogComponent } from './components/dashboard/logout-dialog/logout-dialog.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { CaseStudyVersionComponent } from './components/case-study-version/case-study-version.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthService } from './providers/auth.service';
import { DataService } from './providers/data.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'case_studies', pathMatch: 'full' },
    { path: 'case_studies', component: CaseStudiesComponent },
    { path: 'case_studies/:case_study', component: CaseStudyComponent },
    { path: 'case_studies/versions/:version_resource', component: CaseStudyVersionComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'help', component: HelpComponent },
    { path: 'profile', component: ProfileComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

const fireConfig = {
  apiKey: 'AIzaSyB3vGlTygWAo2_jyupIjsSiMbkuNlQE8DY',
  authDomain: 'magic-nis.firebaseapp.com',
  databaseURL: 'https://magic-nis.firebaseio.com',
  projectId: 'magic-nis',
  storageBucket: 'magic-nis.appspot.com',
  messagingSenderId: '259794015810'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    HelpComponent,
    ProfileComponent,
    CaseStudiesComponent,
    CaseStudyComponent,
    CaseStudyVersionComponent,
    PageNotFoundComponent,
    LogoutDialogComponent
  ],
  entryComponents: [LogoutDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(fireConfig),
    AngularFireAuthModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    OverlayPanelModule,
    TreeTableModule, SharedModule,
    GrowlModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
