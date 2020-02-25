import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LivroComponent } from './livro/livro.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro', component: LivroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    ROUTES,
    { enableTracing: true } // <-- debugging purposes only) 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
