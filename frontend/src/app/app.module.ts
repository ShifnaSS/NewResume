import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OnetempComponent } from './onetemp/onetemp.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilehomeComponent } from './profilehome/profilehome.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { TemplatehomeComponent } from './templatehome/templatehome.component';
import { TwotempComponent } from './twotemp/twotemp.component';
import { ThreetempComponent } from './threetemp/threetemp.component';
import { UserslistComponent } from './userslist/userslist.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FourtempComponent } from './fourtemp/fourtemp.component';
import { HtmlComponent } from './html/html.component';
import { FivetempComponent } from './fivetemp/fivetemp.component';
import { SixtempComponent } from './sixtemp/sixtemp.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { NotificationsComponent } from './notifications/notifications.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    OnetempComponent,
    FormComponent,
    ProfileComponent,
    ProfilehomeComponent,
    SampleformComponent,
    TemplatehomeComponent,
    TwotempComponent,
    ThreetempComponent,
    UserslistComponent,
    EditprofileComponent,
    FourtempComponent,
    HtmlComponent,
    FivetempComponent,
    SixtempComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
