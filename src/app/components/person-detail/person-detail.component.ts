import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  providers: [PersonService]
})
export class PersonDetailComponent {
  person: Person | undefined;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.personService.getPerson(id);
  }
}
