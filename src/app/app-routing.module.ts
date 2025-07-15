import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: '**', component: AboutComponent } //ERROR 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
