import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';


import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';


import {EntitiesComponent}      from './entities/entities.component';
import { EntityDetailComponent }  from './entity-detail/entity-detail.component';
import { EntityService }          from './entity.service';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    EntitiesComponent,
    EntityDetailComponent
  ],
  providers: [  EntityService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
