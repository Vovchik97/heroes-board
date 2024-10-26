import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PeopleListComponent} from './components/people-list/people-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeopleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heroes_board';
}
