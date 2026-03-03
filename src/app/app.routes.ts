import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {Users} from './features/users/users';
import {Products} from './features/products/products';
import {About} from './features/about/about';
import {Contact} from './features/contact/contact';

export const routes: Routes = [
  {path:'',component:Home},
  {path:'',component:Users},
  {path:'',component:Products},
  {path:'',component:About},
  {path:'',component:Contact},
];
