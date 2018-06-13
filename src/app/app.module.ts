import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { Ng2PaginationModule } from 'ng2-pagination';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBh-D_IZxPdFRoV4FLLAPg8ViEzJ_jmqhA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
