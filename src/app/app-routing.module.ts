import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ResumeComponent } from './Components/resume/resume.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: HomeComponent

  },
  {
    path:'Home',redirectTo:'',
  },
  {
    path:'Contact',
    component: ContactComponent
  },
  {
    path:'About',
    component: AboutComponent
  },
  {
    path:'Project',
    component: ProjectsComponent
  },
  {
    path:'Resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
