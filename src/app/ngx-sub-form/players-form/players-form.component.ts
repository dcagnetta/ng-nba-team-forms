import { Component, OnInit } from '@angular/core';
import { IPlayer, Player } from '../../team/player';
import {
  ArrayPropertyKey,
  ArrayPropertyValue,
  Controls,
  NgxFormWithArrayControls,
  NgxSubFormRemapComponent,
  subformComponentProviders
} from 'ngx-sub-form';
import { FormArray, FormControl, Validators } from '@angular/forms';

interface PlayersForm {
  players: IPlayer[];
}

@Component({
  selector: 'ngx-sub-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.scss'],
  providers: subformComponentProviders(PlayersFormComponent),
})
export class PlayersFormComponent extends NgxSubFormRemapComponent<IPlayer[], PlayersForm>
  implements NgxFormWithArrayControls<PlayersForm>, OnInit {

  ngOnInit(): void {
  }

  protected getFormControls(): Controls<PlayersForm> {
    return {
      players: new FormArray([]),
    };
  }

  protected transformToFormGroup(obj: IPlayer[], defaultValues: Partial<PlayersForm>): PlayersForm {
    return {
      players: !obj ? [] : obj,
    };
  }
  protected transformFromFormGroup(formValue: PlayersForm): IPlayer[] {
    return formValue.players;
  }

  createFormArrayControl( key: ArrayPropertyKey<PlayersForm>, value: ArrayPropertyValue<PlayersForm> ): FormControl {
    return new FormControl(value, [Validators.required]);
  }


  public removePlayer(index: number): void {
    this.formGroupControls.players.removeAt(index);
  }

  public addPlayer(): void {
    this.formGroupControls.players.push(
      new FormControl(new Player('', '', 0, ''), [Validators.required])
    );
  }

}
