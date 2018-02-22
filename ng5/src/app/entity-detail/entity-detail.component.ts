import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Entity }         from '../entity';
import { EntityService }  from '../entity.service';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: [ './entity-detail.component.css' ]
})
export class EntityDetailComponent implements OnInit {
  @Input() entity: Entity;

  constructor(
    private route: ActivatedRoute,
    private entityService: EntityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEntity();
  }

  getEntity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entityService.getEntity(id)
      .subscribe(entity => this.entity = entity);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.entityService.updateEntity(this.entity)
      .subscribe(() => this.goBack());
  }
}
