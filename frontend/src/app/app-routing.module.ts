import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {OnetempComponent } from './onetemp/onetemp.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { ProfilehomeComponent } from './profilehome/profilehome.component';
import { TemplatehomeComponent } from './templatehome/templatehome.component';
import { TwotempComponent } from './twotemp/twotemp.component';
import { ThreetempComponent } from './threetemp/threetemp.component';
import { UserslistComponent } from './userslist/userslist.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FourtempComponent } from './fourtemp/fourtemp.component';
import { FivetempComponent } from './fivetemp/fivetemp.component';
import { SixtempComponent } from './sixtemp/sixtemp.component';
import { HtmlComponent } from './html/html.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'onetemp/:userid',component:OnetempComponent},
{path:'profile',component:ProfileComponent},
{path:'form',component:FormComponent},
{path:'sampleform',component:SampleformComponent},
{path:'profilehome',component:ProfilehomeComponent},
{path:'templatehome',component:TemplatehomeComponent},
{path:'twotemp/:userid',component:TwotempComponent},
{path:'userlist',component:UserslistComponent},
{path:'threetemp/:userid',component:ThreetempComponent},
{path:'editform',component:EditprofileComponent},
{path:'fourtemp/:userid',component:FourtempComponent},
{path:'fivetemp/:userid',component:FivetempComponent},
{path:'sixtemp/:userid',component:SixtempComponent},
{path:'viewprofile',component:FormComponent},
{path:'html',component:HtmlComponent},
{path:'notification',component:NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
