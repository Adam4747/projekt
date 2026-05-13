import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.html',
})
export class SpaceshipsComponent {

  spaceshipsId: string | null = null;

  spaceships: any = {
    'ARC-170': {
      name: 'ARC-170',
      model: 'Aggressive ReConnaissance-170 starfighte',
      description: 'ARC-170 to myśliwiec szturmowy używany przez Republikę Galaktyczną podczas wojen klonów. Jest to trzymiejscowy statek, który może pełnić funkcję myśliwca, bombowca i transportu. ARC-170 jest wyposażony w potężne uzbrojenie, w tym działka laserowe i torpedy protonowe, co czyni go skutecznym narzędziem w walce przeciwko Separatystom.'
    },
    'Devastator': {
      name: 'Devastator',
      model: 'Imperial I-class Star Destroyer',
      description: 'Devastator to niszczyciel gwiezdny klasy Imperial I, który służył Imperium Galaktycznemu. Jest to ogromny statek o długości ponad 1,6 kilometra, wyposażony w potężne uzbrojenie, w tym działka laserowe i torpedy protonowe. Devastator był jednym z pierwszych niszczycieli gwiezdnych używanych przez Imperium i odegrał kluczową rolę w bitwie o Yavin, gdzie został zniszczony przez Rebelów.'
    },
    'Gwiazda śmierci': {
      name: 'Gwiazda śmierci',
      model: 'Death Star',
      description: 'Gwiazda śmierci to ogromna stacja kosmiczna i superbroń stworzona przez Imperium Galaktyczne. Jest to jedna z największych i najbardziej przerażających konstrukcji w galaktyce, zdolna do zniszczenia całej planety jednym strzałem z potężnej superlasera. Gwiazda śmierci była używana przez Imperium do zastraszania i kontrolowania galaktyki, ale ostatecznie została zniszczona przez Rebelów podczas bitwy o Yavin.'
    },
    'Sokol Millennium': {
      name: 'Sokol Millennium',
      model: 'YT-1300 light freighter',
      description: 'Sokol Millennium to słynny frachtowiec klasy YT-1300, który stał się jednym z najbardziej rozpoznawalnych statków w galaktyce. Jest to statek o dużej prędkości i zwrotności, wyposażony w potężne uzbrojenie i zaawansowane systemy obronne. Sokol Millennium był używany przez Hana Solo i Chewbaccę do przemytu i walki przeciwko Imperium, a także odegrał kluczową rolę w bitwie o Yavin i bitwie o Endor.'
    },
    'TIE Whisper': {
      name: 'TIE Whisper',
      model: 'TIE/IN interceptor',
      description: 'TIE Whisper to myśliwiec przechwytujący używany przez Imperium Galaktyczne. Jest to ulepszona wersja standardowego myśliwca TIE, wyposażona w potężniejsze silniki i uzbrojenie. TIE Whisper jest znany z dużej prędkości i zwrotności, co czyni go skutecznym narzędziem do przechwytywania i niszczenia celów powietrznych.'
    },
    'X-wing': {
      name: 'X-wing',
      model: 'T-65 X-wing starfighter',
      description: 'X-wing to myśliwiec gwiezdny używany przez Rebelów i Nową Republikę. Jest to statek o dużej prędkości i zwrotności, wyposażony w potężne uzbrojenie, w tym działka laserowe i torpedy protonowe. X-wing jest znany z charakterystycznego układu skrzydeł, które mogą być rozkładane w trybie ataku, co zwiększa jego skuteczność w walce.'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.spaceshipsId = this.route.snapshot.paramMap.get('id');
  }
  get Spaceship() {
    return this.spaceships[this.spaceshipsId || ''];
  }
}