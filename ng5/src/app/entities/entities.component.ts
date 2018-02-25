import { Component, OnInit, OnChanges } from '@angular/core';

import { Entity } from '../classes/entity';
import { EntityService } from '../entity.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit, OnChanges {
  entities: Entity[];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.getEntities();

    
  }

  ngOnChanges() {
  }


  getEntities(): void {
    this.entityService.getEntities()
    .subscribe(entities => {this.entities = entities; this.entityService.nextId = entities.length + 1;})
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.entityService.addEntity({ name } as Entity)
      .subscribe(entity => {
        this.entities.push(entity);
      });
  }

  delete(entity: Entity): void {
    this.entities = this.entities.filter(h => h !== entity);
    this.entityService.deleteEntity(entity).subscribe();
  }

}
