import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.css']
})
export class VehiclesComponent {

  vehiclesId: string | null = null;

  vehicle: any = {
    'AT-AT': {
      name: 'AT-AT',
      model: 'All Terrain Armored Transport',
      manufacturer: 'Kuat Drive Yards',
      vehicle_class: 'walker',
      cost_in_credits: 'unknown',
      length: '20',
      max_atmosphering_speed: '60',
      crew: '5',
      passengers: '40',
      cargo_capacity: '1000',
      consumables: 'unknown',
      description: 'AT-AT to ogromny, czteronożny pojazd kroczący używany przez Imperium Galaktyczne. Jest uzbrojony w potężne działa laserowe i jest wykorzystywany głównie do transportu wojsk i wsparcia ogniowego na polu bitwy.',
      image: 'assets/img/vehicles/at-at.png'
    },
    'AT-ST': {
      name: 'AT-ST',
      model: 'All Terrain Scout Transport',
      manufacturer: 'Kuat Drive Yards',
      vehicle_class: 'walker',
      cost_in_credits: 'unknown',
      length: '2',
      max_atmosphering_speed: '90',
      crew: '2',
      passengers: '0',
      cargo_capacity: '200',
      consumables: 'none',
      description: 'AT-ST to mniejszy, dwunożny pojazd kroczący używany przez Imperium Galaktyczne. Jest uzbrojony w działka laserowe i jest wykorzystywany głównie do patrolowania i wsparcia piechoty na polu bitwy.',
      image: 'https://starwars-visualguide.com/assets/img/vehicles/7.jpg'
    },
    'Juggernaut': {
      name: 'Juggernaut',
      model: 'Juggernaut',
      manufacturer: 'Huppla Pasa Tisc Shipwrights Collective',
      vehicle_class: 'walker',
      cost_in_credits: 'unknown',
      length: '49.4',
      max_atmosphering_speed: '30',
      crew: '200',
      passengers: '0',
      cargo_capacity: 'unknown',
      consumables: 'unknown',
      description: 'Juggernaut to potężny pojazd kroczący używany przez Separatystów podczas Wojen Klonów. Jest uzbrojony w ciężkie działa i jest wykorzystywany głównie do transportu wojsk i wsparcia ogniowego na polu bitwy.',
      image: 'https://starwars-visualguide.com/assets/img/vehicles/17.jpg'
    },
    'MTT': {
      name: 'MTT',
      model: 'Multi-Troop Transport',
      manufacturer: 'Baktoid Armor Workshop',
      vehicle_class: 'walker',
      cost_in_credits: 'unknown',
      length: '31',
      max_atmosphering_speed: '35',
      crew: '5',
      passengers: '112',
      cargo_capacity: '12000',
      consumables: 'unknown',
      description: 'MTT to duży pojazd transportowy używany przez Separatystów podczas Wojen Klonów. Jest uzbrojony w działka laserowe i jest wykorzystywany głównie do transportu dużej liczby żołnierzy na pole bitwy.',
      image: 'https://starwars-visualguide.com/assets/img/vehicles/18.jpg'
    },
    'Sandcrawler': {
      name: 'Sandcrawler',
      model: 'Sandcrawler',
      manufacturer: 'Z-Gon Corporation',
      vehicle_class: 'crawler',
      cost_in_credits: '150000',
      length: '36.8',
      max_atmosphering_speed: '30',
      crew: '46',
      passengers: '30',
      cargo_capacity: '50000',
      consumables: '2 months',
      description: 'Sandcrawler to ogromny pojazd kroczący używany przez Jawów na pustynnej planecie Tatooine. Jest wykorzystywany głównie do transportu i handlu różnymi towarami, a także do zbierania złomu i części z wraków statków kosmicznych.',
      image: 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg'
    },
    '74-Z Speeder Bike': {
      name: '74-Z Speeder Bike',
      model: '74-Z Speeder Bike',
      manufacturer: 'Aratech Repulsor Company',
      vehicle_class: 'speeder',
      cost_in_credits: '8000',
      length: '3.68',
      max_atmosphering_speed: '485',
      crew: '1',
      passengers: '1',
      cargo_capacity: '4',
      consumables: '1 day',
      description: '74-Z Speeder Bike to szybki, jednoosobowy pojazd używany przez Imperium Galaktyczne. Jest wykorzystywany głównie do patrolowania i szybkiego przemieszczania się po różnych terenach, zwłaszcza w lasach Endoru.',
      image: 'https://starwars-visualguide.com/assets/img/vehicles/30.jpg'
     }
  };

  constructor(private route: ActivatedRoute, private location: Location) {
    this.vehiclesId = this.route.snapshot.paramMap.get('id');
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      window.location.href = '/';
    }
  }

  get vehicles() {
    return this.vehicle[this.vehiclesId || ''];
  }
}