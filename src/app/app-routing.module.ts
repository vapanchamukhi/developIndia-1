import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CausesComponent } from './components/causes/causes.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'causes', component: CausesComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
