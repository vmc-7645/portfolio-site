import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathematicsComponent } from './mathematics/mathematics.component'
import { ComputerScienceComponent } from './computer-science/computer-science.component'
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  {
    path: "math",
    component: MathematicsComponent
  },
  {
    path: "csci",
    component: ComputerScienceComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
