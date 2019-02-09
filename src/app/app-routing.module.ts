import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildOneComponent } from './child-one/child-one.component';


const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: CompOneComponent },
  { path: 'component-two', component: CompTwoComponent,
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
