import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Entity }         from '../entity';
import { Stockholder }         from '../stockholder';
import { Director} from '../director';
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

    if (id > 0){
      this.entityService.getEntity(id)
      .subscribe(entity => this.entity = entity);

    }else {
      this.entity = new Entity(this.entityService.nextId);
    }

    
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.entityService.updateEntity(this.entity)
      .subscribe(() => this.goBack());
  }


  addStockholder() {

   this.entity.stockholders.push(new Stockholder((this.entity.stockholders.length+1)));
  }


  delStockholder(id: number) {
    this.entity.stockholders.splice(id, 1);
  }



  addDirector() {

    this.entity.directors.push(new Director((this.entity.directors.length+1)));
   }
 
 
   delDirector(id: number) {
     this.entity.directors.splice(id, 1);
   }
 


}
