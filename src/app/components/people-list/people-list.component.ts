import { Component } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';
import { Person } from '../../models/person.model';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers: [PersonService]
})
export class PeopleListComponent {
  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {
    this.people = this.personService.getPeople();
  }

  viewDetails(person: Person) {
    this.router.navigate(['/person', person.id]);
  }
}
