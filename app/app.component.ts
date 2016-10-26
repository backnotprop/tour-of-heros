import { Component } from '@angular/core';
import { Hero } from './hero';

// advantages of typescript
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// <input [(ngModel)]="hero.name" placeholder="name">
// this is the two-way databinding, formmodule must be included in root modules
// https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel
// The ngModel directive also propagates changes to every other binding of the hero.name
// (ngModelChange) allows you to perform functions on the changing values
@Component({
    selector: 'my-app',

    // styling wont 'leak' to other html or components
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],

    // - Data binds to properties described below
    // - The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
    // - The ngFor directive iterates over the heroes array returned by the AppComponent.heroes property and 
    //     stamps out instances of this template.
    // - Take each hero in the heroes array, store it in the local hero variable, and make it 
    //     available to the corresponding template instance”.
    // - ngIf and ngFor are called “structural directives” because they can change the structure of 
    //   portions of the DOM. In other words, they give structure to the way Angular displays content in the DOM. (similar to A.1)
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li 
                *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)"   
            >
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        `
})

// component refers to this parent class
// you may create subclasses (like Hero), that can be used as properties of the parent
export class AppComponent {
    title = 'Tour of Heros';
    selectedHero: Hero;
    // do not have to define the heroes type. 
    // TypeScript can infer it from the HEROES array.
    heroes = HEROES;
    
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}