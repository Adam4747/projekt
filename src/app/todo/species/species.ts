import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.html',
  styleUrls: ['./species.css']
})
export class SpeciesComponent {

  speciesId: string | null = null;

  specie: any = {
    'aqualish': {
      name: 'Aqualish',
      classification: 'Amphibian',
      designation: 'Sentient',
      average_height: '190',
      skin_colors: 'Grey, Blue',
      hair_colors: 'None',
      eye_colors: 'Black',
      average_lifespan: 'Unknown',
      homeworld: 'Ando',
      language: 'Aqualish',
      description: 'Aqualish to gatunek wodny z długimi mackami i charakterystycznym wyrazem twarzy. Często spotykany na mokrych, tropikalnych planetach.',
      image: 'assets/img/species/aqualish.png'
    },
    'human': {
      name: 'Człowiek',
      classification: 'Mammal',
      designation: 'Sentient',
      average_height: '180',
      skin_colors: 'Fair, Brown, Black, White',
      hair_colors: 'Blonde, Brown, Black, Red',
      eye_colors: 'Brown, Blue, Green, Hazel',
      average_lifespan: '120',
      homeworld: 'Coruscant',
      language: 'Galactic Basic',
      description: 'Ludzie to gatunek inteligentny i niezwykle adaptacyjny, obecny na wielu światach galaktyki.',
      image: 'assets/img/species/human.png'
    },
    'ewok': {
      name: 'Ewoki',
      classification: 'Mammal',
      designation: 'Sentient',
      average_height: '100',
      skin_colors: 'Brown',
      hair_colors: 'Brown, Black', 
      eye_colors: 'Orange, Brown',
      average_lifespan: 'Unknown',
      homeworld: 'Endor',
      language: 'Ewokese',
      description: 'Ewoki to małe, futrzaste stworzenia z Endoru. Są zwinne i żyją w silnych społecznościach leśnych.',
      image: 'assets/img/species/ewoki.png'
    },
    'gungan': {
      name: 'Gungan',
      classification: 'Amphibian',
      designation: 'Sentient',
      average_height: '190',
      skin_colors: 'Green, Brown',
      hair_colors: 'None',
      eye_colors: 'Orange',
      average_lifespan: 'Unknown',
      homeworld: 'Naboo',
      language: 'Gungan Basic',
      description: 'Gungan to wodny gatunek, który doskonale porusza się zarówno w powietrzu, jak i pod powierzchnią wody.',
      image: 'assets/img/species/gungan.png'
    },
    'hutt': {
      name: 'Hutt',
      classification: 'Gastropod',
      designation: 'Sentient',
      average_height: '300',
      skin_colors: 'Green, Brown, Tan',
      hair_colors: 'None',
      eye_colors: 'Yellow, Red',
      average_lifespan: '1000',
      homeworld: 'Nal Hutta',
      language: 'Huttese',
      description: 'Hutty to władczy i długowieczny gatunek, znany z roli przywódców i bossów podziemia.',
      image: 'assets/img/species/hutt.png'
    },
    'wookiee': {
      name: 'Wookiee',
      classification: 'Mammal',
      designation: 'Sentient',
      average_height: '210',
      skin_colors: 'Gray',
      hair_colors: 'Black, Brown',
      eye_colors: 'Blue, Green, Yellow, Brown, Golden, Red',
      average_lifespan: '400',
      homeworld: 'Kashyyyk',
      language: 'Shyriiwook',
      description: 'Wookiee to silny, futrzasty gatunek znany z odwagi i oddania swoim przyjaciołom.',
      image: 'assets/img/species/wookie.png'
    },
  };

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
    this.speciesId = this.normalizeId(this.route.snapshot.paramMap.get('id'));
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

  get species() {
    return this.specie[this.speciesId || ''];
  }
}