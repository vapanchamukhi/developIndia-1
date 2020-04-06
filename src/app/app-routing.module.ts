import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/events/add-event/add-event.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'events/add-new-events', component: AddEventComponent},
  {path: 'events', component: EventsComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
