import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from '../hero/form';
import { HeroListComponent } from '../hero/list';

const routes: Routes = [
  { path: 'character/Edit/:id', component: HeroFormComponent },
  { path: 'character/:id', component: HeroFormComponent },
  { path: ':search', component: HeroListComponent },
  { path: '', component: HeroListComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
