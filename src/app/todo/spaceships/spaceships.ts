import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.html',
  styleUrls: ['./spaceships.css']
})
export class SpaceshipsComponent {

  spaceshipsId: string | null = null;

  spaceships: any = {
    'arc-170': {
      name: 'ARC-170',
      model: 'Aggressive Reconnaissance-170 Starfighter',
      manufacturer: 'Kuat Systems Engineering',
      starship_class: 'Starfighter',
      max_atmosphering_speed: '100',
      crew: '3',
      passengers: '2',
      length: '14.5',
      description: 'ARC-170 to trzymiejscowy myśliwiec szturmowy używany przez Republikę Galaktyczną podczas wojen klonów. Łączy w sobie rolę myśliwca, bombowca i małego transportu, dzięki czemu jest wszechstronny na polu bitwy.',
    },
    'devastator': {
      name: 'Devastator',
      model: 'Imperial I-class Star Destroyer',
      manufacturer: 'Kuat Drive Yards',
      starship_class: 'Star Destroyer',
      max_atmosphering_speed: '60',
      crew: '47060',
      passengers: '0',
      length: '1600',
      description: 'Devastator to potężny niszczyciel gwiezdny Imperium, o masywnych możliwościach bojowych i wielkiej obecności nad systemami planetarnymi.',
    },
    'death-star': {
      name: 'Gwiazda śmierci',
      model: 'Death Star',
      manufacturer: 'Imperial Military Research',
      starship_class: 'Battle station',
      max_atmosphering_speed: '10 ',
      crew: '342953',
      passengers: '843342',
      length: '120000',
      description: 'Gwiazda śmierci to stacja bojowa zdolna do zniszczenia całej planety jednym strzałem. To najbardziej przerażająca superbroń Imperium.',
    },
    'millennium-falcon': {
      name: 'Sokół Millennium',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      starship_class: 'Light freighter',
      max_atmosphering_speed: '75',
      crew: '2',
      passengers: '6',
      length: '34.75',
      description: 'Sokół Millennium to szybki i zwrotny frachtowiec z najlepszym w galaktyce hypernapędem. Idealny do przemytniczych misji i ucieczek przed Imperium.',
    },
    'tie-whisper': {
      name: 'TIE Whisper',
      model: 'TIE/IN interceptor',
      manufacturer: 'Sienar Fleet Systems',
      starship_class: 'Interceptor',
      max_atmosphering_speed: '125',
      crew: '1',
      passengers: '0',
      length: '9.7',
      description: 'TIE Whisper to szybki przechwytujący myśliwiec Imperium o wysokiej zwrotności i agresywnym profilu bojowym.',
    },
    'x-wing': {
      name: 'X-wing',
      model: 'T-65 X-wing starfighter',
      manufacturer: 'Incom Corporation',
      starship_class: 'Starfighter',
      max_atmosphering_speed: '100',
      crew: '1',
      passengers: '0',
      length: '12.5',
      description: 'X-wing to legendarny myśliwiec Rebelii, łączący szybkość, zwrotność i siłę ognia. Sprawdza się zarówno w dogfightach, jak i w atakach na większe cele.',
    }
  };

  constructor(private route: ActivatedRoute) {
    this.spaceshipsId = this.route.snapshot.paramMap.get('id');
  }
  get Spaceship() {
    return this.spaceships[this.spaceshipsId || ''];
  }
}