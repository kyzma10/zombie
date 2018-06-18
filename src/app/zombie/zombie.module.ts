import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthBarComponent } from './shared/health-bar/health-bar.component';
import { ZombieComponent } from './zombie.component';
import { ZombieRoutingModule } from './zombie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ZombieRoutingModule
  ],
  declarations: [
    HealthBarComponent,
    ZombieComponent
  ]
})
export class ZombieModule {
}
