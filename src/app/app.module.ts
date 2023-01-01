import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { UrlsComponent } from './urls/urls.component';
import { DataComponent } from './data/data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PreprocessorPipe } from './services/preprocessor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UrlsComponent,
    DataComponent,
    PreprocessorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
