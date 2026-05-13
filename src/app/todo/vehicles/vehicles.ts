import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.css']
})
export class VehiclesComponent {

  vehiclesId: string | null = null;

  vehicle: any = {
    'at-at': {
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
      image: '/assets/img/vehicles/at-at.png'
    },
    'at-st': {
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
      image: '/assets/img/vehicles/at-st.png'
    },
    'juggernaut': {
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
      image: '/assets/img/vehicles/juggernaut.png'
    },
    'mtt': {
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
      image: '/assets/img/vehicles/mtt.png'
    },
    'sandcrawler': {
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
      image: '/assets/img/vehicles/sandcrawler.png'
    },
    'speeder-bike': {
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
      image: '/assets/img/vehicles/speeder.png'
     },
    '74-z-speeder-bike': {
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
      image: '/assets/img/vehicles/speeder.png'
     }
  };

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) {
    this.vehiclesId = this.normalizeId(this.route.snapshot.paramMap.get('id'));
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  normalizeId(id: string | null): string | null {
    return id
      ? id
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
      : null;
  }

  get vehicles() {
    return this.vehicle[this.vehiclesId || ''];
  }
}