/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovieFavoritesComponent } from './movie-favorites/movie-favorites.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'moviedetails', component: MoviedetailsComponent},
    {path: 'favorites', component: MovieFavoritesComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
