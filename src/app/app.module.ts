import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/events/add-event/add-event.component';
import { AddNewComponent } from './components/blog/add-new/add-new.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminBlogsComponent } from './components/admin/admin-blogs/admin-blogs.component';
import { AdminEventsComponent } from './components/admin/admin-events/admin-events.component';
import { AdminContactusComponent } from './components/admin/admin-contactus/admin-contactus.component';
import { AuthComponent } from './components/auth/auth.component';
import { BlogDeatilsComponent } from './components/blog/blog-deatils/blog-deatils.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatConfirmDialogComponent } from './admin/mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactComponent,
    BlogComponent,
    EventsComponent,
    AddEventComponent,
    AddNewComponent,
    AdminComponent,
    AdminBlogsComponent,
    AdminEventsComponent,
    AdminContactusComponent,
    AuthComponent,
    BlogDeatilsComponent,
    MainNavComponent,
    MatConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
