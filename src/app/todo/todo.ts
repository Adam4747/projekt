import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  
})
export class Todo {constructor(private router: Router) {}

 characters = [
    { id: 'darth-vader', name: 'Darth Vader' },
    { id: 'c-3-po', name: 'C-3PO' },
    { id: 'han-solo', name: 'Han Solo' },
    { id: 'leia-organa', name: 'Leia Organa' },
    { id: 'luke-skywalker', name: 'Luke Skywalker' },
    { id: 'yoda', name: 'Yoda' }
  ];

  planets = [
    { id: 'alderaan', name: 'Alderaan' },
    { id: 'coruscant', name: 'Coruscant' },
    { id: 'dagobah', name: 'Dagobah' },
    { id: 'hoth', name: 'Hoth' },
    { id: 'naboo', name: 'Naboo' },
    { id: 'tatooine', name: 'Tatooine' }
  ];

  vehicles = [
    { id: 'at-at', name: 'AT-AT' },
    { id: 'at-st', name: 'AT-ST' },
    { id: 'juggernaut', name: 'Juggernaut' },
    { id: 'mtt', name: 'MTT' },
    { id: 'sandcrawler', name: 'Sandcrawler' },
    { id: 'speeder-bike', name: '74-Z Speeder Bike' }
  ];

  species = [
    { id: 'aqualish', name: 'Aqualish' },
    { id: 'human', name: 'Człowiek' },
    { id: 'ewok', name: 'Ewoki' },
    { id: 'gungan', name: 'Gungan' },
    { id: 'hutt', name: 'Hutt' },
    { id: 'wookiee', name: 'Wookie' }
  ];

  starships = [
    { id: 'arc-170', name: 'ARC-170' },
    { id: 'devastator', name: 'Devastator' },
    { id: 'death-star', name: 'Gwiazda śmierci' },
    { id: 'millennium-falcon', name: 'Sokół Millennium' },
    { id: 'tie-whisper', name: 'TIE Whisper' },
    { id: 'x-wing', name: 'X-wing' }
  ];
  openDropdown: string | null = null;

  toggleDropdown(name: string) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  goToCharacter(id: string) {
    this.router.navigate(['/character', id]);
  }

  goToPlanet(id: string) {
    this.router.navigate(['/planets', id]);
  }

  goToVehicles(id: string) {
    this.router.navigate(['/vehicles', id]);
  }

  goToSpecies(id: string) {
    this.router.navigate(['/species', id]);
  }

  goToSpaceships(id: string) {
    this.router.navigate(['/spaceships', id]);
  }
}





