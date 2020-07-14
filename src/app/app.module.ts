import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
;
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TeamComponent } from './team/team.component'
import { PlayerComponent } from './team/player/player.component'
import { TeamFormService } from './team/team-form.service'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [TeamFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
