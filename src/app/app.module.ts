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
import { TeamFormComponent } from './ngx-sub-form/team-form/team-form.component';
import { PlayersFormComponent } from './ngx-sub-form/players-form/players-form.component';
import { PlayerFormComponent } from './ngx-sub-form/player-form/player-form.component';
import { MatIconModule } from '@angular/material/icon';
import { NbaTeamContainerComponent } from './ngx-sub-form/nba-team-container/nba-team-container.component';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { AutocompleteFilterExampleComponent } from './autocomplete-filter-example/autocomplete-filter-example.component';

@NgModule({
  declarations: [
    AppComponent,
    // ng form builder
    TeamComponent,
    PlayerComponent,

    // ngx-sub-form
    TeamFormComponent,
    PlayersFormComponent,
    PlayerFormComponent,
    NbaTeamContainerComponent,

    // Autocomplete reusable component
    InputAutocompleteComponent,
    AutocompleteFilterExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [TeamFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
