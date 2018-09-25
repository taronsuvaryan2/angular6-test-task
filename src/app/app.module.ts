import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';

const appRoutes: Routes = [
    { path: '', component: FirstPageComponent },
    { path: 'second-page', component: SecondPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
    ),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
