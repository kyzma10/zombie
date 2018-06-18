import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'zombie'},
  {path: 'zombie', loadChildren: './zombie/zombie.module#ZombieModule'},
  {path: '**', redirectTo: 'zombie'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
