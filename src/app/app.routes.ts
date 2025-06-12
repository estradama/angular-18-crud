import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'contact', pathMatch:'full'},
    {path: 'contact', loadChildren: ()=>import('./features/contact/contacts.routes')},
    {path:'**', redirectTo: '/contact'}
];
