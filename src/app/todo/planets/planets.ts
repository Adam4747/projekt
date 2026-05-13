import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.html',
})
export class PlanetsComponent {

  planetId: string | null = null;

  planets: any = {
    'Alderaan': {
      name: 'Alderaan',
      description: 'Planeta zniszczona przez Gwiazdę Śmierci'
    },
    'Coruscant': {
      name: 'Coruscant',
      description: 'Stolica galaktyki, planeta-miasto'
    },
    'Dagobah': {
      name: 'Dagobah',
      description: 'Bagienna planeta, miejsce ukrycia Yody'
    },
    'Hath': {
      name: 'Hath',     
      description: 'Planeta zimna, miejsce operacji Clone'
    },
    'Naboo': {
      name: 'Naboo',
      description: 'Planeta o bujnej przyrodzie, miejsce pochodzenia Padmé Amidali'
    },
    'Tatooine': {
      name: 'Tatooine',
      description: 'Pustynna planeta, miejsce urodzenia Lukea Skywalkera'
    } 
  };

  constructor(private route: ActivatedRoute) {
    this.planetId = this.route.snapshot.paramMap.get('id');
  }

  get planet() {
    return this.planets[this.planetId || ''];
  }
}