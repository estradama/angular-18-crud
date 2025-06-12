import {Routes} from '@angular/router';
const contactRoute: Routes =[
    {path:'',
    loadComponent: () => import('./list/list.component').then(m=>m.ListComponent),
}
];

export default contactRoute;