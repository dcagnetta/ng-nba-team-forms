import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { TeamFormService } from './team-form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nba-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  teamForm: FormGroup;
  teamFormSub: Subscription;
  formInvalid = false;
  players: FormArray;

  constructor(private teamFormService: TeamFormService, private fb: FormBuilder) { }

  ngOnInit(): void {
   /* this.teamFormSub = this.teamFormService.teamForm$
      .subscribe(team => {
          this.teamForm = team;
          this.players = this.teamForm.get('players') as FormArray;
        });*/

    this.teamForm = this.teamFormService.form;
    this.players = this.teamFormService.players;
  }

  ngOnDestroy(): void  {
    this.teamFormSub.unsubscribe();
  }

  addPlayer(): void  {
    this.teamFormService.addPlayer();
  }

  deletePlayer(index: number): void  {
    this.teamFormService.deletePlayer(index);
  }

  saveTeam(): void  {
    console.log('team saved!');
    console.log(this.teamForm.value);
  }
}

