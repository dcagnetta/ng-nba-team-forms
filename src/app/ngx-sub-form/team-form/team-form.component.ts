import { Component, EventEmitter, OnInit } from '@angular/core';
import { Team } from '../../team/_models';
import { Controls, NgxAutomaticRootFormComponent, NgxRootFormComponent } from 'ngx-sub-form';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent extends NgxRootFormComponent<Team> implements OnInit {

  dataInput: Required<Team> | null | undefined;
  dataOutput: EventEmitter<Team>;

  ngOnInit(): void {
  }

  protected getFormControls(): Controls<Team> {
    return {
      name: new FormControl(null, { validators: [Validators.required] }),
      players: new FormControl(null, { validators: [Validators.required] }),
    };
  }

}
