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
      description: 'ARC-170 to ciężki myśliwiec Republiki, używany głównie przez pilotów klonów podczas wojen klonów. Maszyna wyróżnia się trzema miejscami w kokpicie, składanymi skrzydłami typu S-foils oraz dużym zasięgiem. Uzbrojona w lasery i torpedy protonowe, była skuteczna w walce z myśliwcami Separatystów. Jej solidna konstrukcja zapewniała wytrzymałość, ale kosztem zwrotności w starciach kosmicznych. Często współpracowała z innymi jednostkami, pełniąc rolę wsparcia i patrolu w trudnych misjach bojowych różnorodnych.',
      image: '/assets/img/spaceships/arc-170.png',
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
      description: 'Devastator to potężny Gwiezdny Niszczyciel Imperium, dowodzony przez Dartha Vadera. Okręt klasy Imperial I słynie z ogromnej siły ognia, zdolności projekcji mocy oraz zastraszającej obecności. Uczestniczył w pościgu za Tantive IV na początku Nowej Nadziei. Wyposażony w liczne baterie turbolaserów i hangary, pełnił rolę flagowego symbolu dominacji Imperium oraz kontroli nad galaktyką. Jego załoga liczyła tysiące żołnierzy, a systemy sensorów umożliwiały wykrywanie wrogów z dużych odległości.',
      image: '/assets/img/spaceships/devastator.png',
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
      description: 'Gwiazda Śmierci to ogromna stacja bojowa Imperium, zdolna do niszczenia całych planet jednym strzałem. Jej budowa była tajnym projektem, nadzorowanym przez Dartha Vadera i Imperatora. Uzbrojona w superlaser oraz liczne działa, stanowiła symbol absolutnej władzy i terroru. Mimo potęgi miała słaby punkt, który Rebelianci wykorzystali do jej zniszczenia w bitwie pod Yavin. Jej rozmiary pozwalały pomieścić tysiące żołnierzy oraz statków bojowych wewnątrz.',
      image: '/assets/img/spaceships/death-star.png',
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
      description: 'Sokół Millennium to legendarny frachtowiec, pilotowany przez Han Solo i Chewbacca. Choć wygląda na zniszczony, jest niezwykle szybki dzięki zmodyfikowanemu napędowi nadświetlnemu. Brał udział w wielu kluczowych bitwach, wspierając Rebelię przeciw Imperium. Uzbrojony w działka laserowe i osłony, potrafił uciec nawet z najtrudniejszych sytuacji. Jego charakterystyczny kształt i historia czynią go jednym z najbardziej rozpoznawalnych statków w galaktyce. Często ukrywał się przed wrogami dzięki sprytowi załogi.',
      image: '/assets/img/spaceships/millennium-falcon.png',
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
      description: 'TIE Whisper to zaawansowany myśliwiec, używany przez Najwyższy Porządek. Był osobistą maszyną Kylo Ren, zaprojektowaną z myślą o szybkości i skrytości. Wyposażony w nowoczesne systemy naprowadzania oraz potężne działka laserowe, przewyższał standardowe myśliwce TIE. Jego ciemny wygląd i ulepszone osłony czyniły go groźnym przeciwnikiem w walce kosmicznej. TIE Whisper symbolizował rosnącą potęgę i technologiczną przewagę Najwyższego Porządku.',
      image: '/assets/img/spaceships/tie-whisper.png',
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
      description: 'X-wing to wszechstronny myśliwiec Rebelii, znany z charakterystycznych skrzydeł w układzie X. Używany przez pilotów takich jak Luke Skywalker, odegrał kluczową rolę w walce przeciw Imperium. Wyposażony w lasery i torpedy protonowe, łączył siłę ognia z dobrą zwrotnością. Dzięki hipernapędowi mógł działać samodzielnie na dużych dystansach. Stał się symbolem nadziei oraz odwagi Rebelii w walce o wolność galaktyki.',
      image: '/assets/img/spaceships/x-wing.png',
    }
  };

  constructor(private route: ActivatedRoute) {
    this.spaceshipsId = this.route.snapshot.paramMap.get('id');
  }
  get Spaceship() {
    return this.spaceships[this.spaceshipsId || ''];
  }
}