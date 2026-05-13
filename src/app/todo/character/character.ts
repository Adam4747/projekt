import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.html',
})
export class CharacterComponent {

  id: string | null = null;

  characters: any = {
    'dark-vader': {
      name: 'Darth Vader',
      description: 'Sith Lord, ojciec Lukea Skywalkera'
      
    },
    'luke-skywalker': {
      name: 'Luke Skywalker',
      description: 'Jedi, syn Vadera'
    },
    'yoda': {
      name: 'Yoda',
      description: 'Mistrz Jedi'
    },
    'c-3-po': {
      name: 'C-3PO',
      description: 'Protokolarny droid'
    },
    'han-solo': {
      name: 'Han Solo',
      description: 'Słynny przemytnik'
    },
    'leia-organa': {
      name: 'Leia Organa',
      description: 'Księżniczka, siostra Lukea'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  get character() {
    return this.characters[this.id || ''];
  }
}