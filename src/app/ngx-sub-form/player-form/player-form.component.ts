import { Component, OnInit } from '@angular/core';
import { IPlayer, Player } from '../../team/player';
import { Controls, NgxSubFormComponent, subformComponentProviders } from 'ngx-sub-form';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-sub-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
  providers: subformComponentProviders(PlayerFormComponent),

})
export class PlayerFormComponent extends NgxSubFormComponent<IPlayer> {
  protected getFormControls(): Controls<IPlayer> {
    return {
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
    };
  }
}
