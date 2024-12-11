import { Routes } from '@angular/router';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { SeekerHomeComponent } from './pages/seeker/seeker-home/seeker-home.component';
import { SeekerApplicationComponent } from './pages/seeker/seeker-application/seeker-application.component';
import { EmployerHomeComponent } from './pages/employer/employer-home/employer-home.component';
import { EmployerApplicationComponent } from './pages/employer/employer-application/employer-application.component';
import { EmployerProfileComponent } from './pages/employer/employer-profile/employer-profile.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { NotFoundComponent } from './pages/NotFound/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'auth/login'
    },
    {
        path:'auth/login',
        component:LoginComponent
    },
    {
        path:'auth/signup',
        component:SignupComponent
    },
    {
        path:'',
        component:SingleLayoutComponent,
        children:[
            {
                path:'seeker/home',
                component:SeekerHomeComponent
            },
            {
                path:'seeker/application',
                component:SeekerApplicationComponent
            },
            {
                path:'seeker/userProfile',
                component:SeekerApplicationComponent
            },
            {
                path:'employer/home',
                component:EmployerHomeComponent
            },
            {
                path:'employer/application',
                component:EmployerApplicationComponent
            },
            {
                path:'employer/userProfile',
                component:EmployerProfileComponent
            }
        ]
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
