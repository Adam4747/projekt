import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-species',
  templateUrl: './species.html',
})
export class SpeciesComponent {

  speciesId: string | null = null;

  specie: any = {
    'Aqualish': {
      name: 'Aqualish',
      description: 'Aqualish to gatunek wodny, który zamieszkuje planety z dużą ilością wody. Są znani z ich zdolności do oddychania pod wodą i poruszania się w środowisku wodnym.'
    },
    'Czlowiek': {
      name: 'Czlowiek',
      description: 'Ludzie to gatunek inteligentny i adaptacyjny, który rozwija się w różnych środowiskach galaktyki.'
    },
    'Ewoki': {
      name: 'Ewoki',
      description: 'Ewoki to małe, futrzaste stworzenia zamieszkujące lasy Endoru. Są znane z ich sprytu i umiejętności przetrwania.'
    },
    'Gungan': {
      name: 'Gungan',
      description: 'Gungan to gatunek wodny zamieszkujący planetę Naboo. Są znani z ich zdolności do oddychania pod wodą i poruszania się w środowisku wodnym.'
    },
    'Hutt': {
      name: 'Hutt',
      description: 'Hutty to duże, oślizgłe stworzenia, które często zajmują się przestępczością i handlem w galaktyce.'
    },
    'Wookie': {
      name: 'Wookie',
      description: 'Wookiee to duże, futrzaste stworzenia zamieszkujące planetę Kashyyyk. Są znani z их siły i lojalności.'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.speciesId = this.route.snapshot.paramMap.get('id');
  }
  get species() {
    return this.specie[this.speciesId || ''];
  }
}