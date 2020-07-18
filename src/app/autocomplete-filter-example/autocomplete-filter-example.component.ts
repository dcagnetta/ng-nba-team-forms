import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { map, startWith, delay, switchMap } from 'rxjs/operators';
import { pokemons, swCharacters } from '../input-autocomplete/data';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: './autocomplete-filter-example.component.html',
  styleUrls: ['./autocomplete-filter-example.component.scss'],
})
export class AutocompleteFilterExampleComponent implements OnInit {
  form = new FormGroup({
    pokemon: new FormControl(),
    swCharacter: new FormControl(),
  });

  pokemons$ = this.form.get('pokemon').valueChanges.pipe(
    startWith(null),
    switchMap(name => {
      if (typeof name === 'string') {
        return of(pokemons).pipe(
          delay(800),
          map(response =>
            response.filter(p => p.label.toUpperCase().includes(name))
          )
        );
      }
      return of([]);
    })
  );

  swCharacters$ = this.form.get('swCharacter').valueChanges.pipe(
    startWith(null),
    switchMap(name => {
      if (typeof name === 'string') {
        return of(swCharacters).pipe(
          delay(800),
          map(response =>
            response.filter(p => p.label.toUpperCase().includes(name))
          )
        );
      }
      return of([]);
    })
  );

  ngOnInit() {}

  submit() {
    console.log(this.form.value);
  }
}
