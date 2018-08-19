import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './components/app-component/app.component';
import { HeroDetailComponent } from './components/hero-detail-component/hero-detail.component';
import { HeroesComponent } from './components/heroes-component/heroes.component';
import { DashboardComponent } from './components/dashboard-component/dashboard.component';
import { ApplicantFieldComponent } from './components/applicant-form-component/applicant-field.component';
import { LoginComponent } from './components/login-component/login.component';
import { TodoComponent } from './components/todo-firebase-component/todo.component';
import { DataService } from './core/data.service';
import { FirebaseLoginService } from './core/firebase.login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';
import { LoginRouteGuard } from './core/login-route-guard';
import { AlertDialogComponent } from './modals/dialog/alert-dialog.component';
import { UserInfoModalComponent } from './modals/user-info-modal/user-info-modal.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { TextBox } from './components/ui-form-field-components/text-box/text-box.component';
import { SelectBox } from './components/ui-form-field-components/select-box/select-box.component';
import { ShellComponent } from './components/shell-component/shell.component';
export const firebaseConfig = {
  apiKey: "AIzaSyBu4vtqAO8iH8Bs-Jeak50DfeqT5NgkH8E",
  authDomain: "angular-project-5cb99.firebaseapp.com",
  databaseURL: "https://angular-project-5cb99.firebaseio.com",
  storageBucket: "angular-project-5cb99.appspot.com",
  messagingSenderId: "103586939904"
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  declarations: [AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    ApplicantFieldComponent,
    LoginComponent,
    TodoComponent,
    AlertDialogComponent,
    UserInfoModalComponent,
    TextBox,
    SelectBox,
    ShellComponent],
  providers: [DataService, FirebaseLoginService, LoginRouteGuard],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent, UserInfoModalComponent]
})
export class AppModule { }
