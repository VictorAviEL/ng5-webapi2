import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntityDetailComponent }  from './entity-detail/entity-detail.component';
import {EntitiesComponent}      from './entities/entities.component';

const routes: Routes = [
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
  { path: 'detail/:id', component: EntityDetailComponent },
  { path: 'nouvelle', component: EntitiesComponent },
  { path: 'liste', component: EntitiesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
