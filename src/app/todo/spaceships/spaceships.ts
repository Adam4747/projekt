import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-spaceships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spaceships.html',
  styleUrl: './spaceships.css',
})
export class SpaceshipsComponent {

  spaceships: any;
  loading = true;
  apiId: number | null = null;
  routeId: string | null = null;

  descriptions: Record<string, string> = {
    'arc-170': 'ARC-170 to ciężki myśliwiec Republiki, używany głównie przez pilotów klonów podczas wojen klonów. Maszyna wyróżnia się trzema miejscami w kokpicie, składanymi skrzydłami typu S-foils oraz dużym zasięgiem. Uzbrojona w lasery i torpedy protonowe, była skuteczna w walce z myśliwcami Separatystów. Jej solidna konstrukcja zapewniała wytrzymałość, ale kosztem zwrotności w starciach kosmicznych. Często współpracowała z innymi jednostkami, pełniąc rolę wsparcia i patrolu w trudnych misjach bojowych różnorodnych.',
    'devastator': 'Devastator to potężny Gwiezdny Niszczyciel Imperium, dowodzony przez Dartha Vadera. Okręt klasy Imperial I słynie z ogromnej siły ognia, zdolności projekcji mocy oraz zastraszającej obecności. Uczestniczył w pościgu za Tantive IV na początku Nowej Nadziei. Wyposażony w liczne baterie turbolaserów i hangary, pełnił rolę flagowego symbolu dominacji Imperium oraz kontroli nad galaktyką. Jego załoga liczyła tysiące żołnierzy, a systemy sensorów umożliwiały wykrywanie wrogów z dużych odległości.',
    'death-star': 'Gwiazda Śmierci to ogromna stacja bojowa Imperium, zdolna do niszczenia całych planet jednym strzałem. Jej budowa była tajnym projektem, nadzorowanym przez Dartha Vadera i Imperatora. Uzbrojona w superlaser oraz liczne działa, stanowiła symbol absolutnej władzy i terroru. Mimo potęgi miała słaby punkt, który Rebelianci wykorzystali do jej zniszczenia w bitwie pod Yavin. Jej rozmiary pozwalały pomieścić tysiące żołnierzy oraz statków bojowych wewnątrz.',
    'millennium-falcon': 'Sokół Millennium to legendarny frachtowiec, pilotowany przez Han Solo i Chewbacca. Choć wygląda na zniszczony, jest niezwykle szybki dzięki zmodyfikowanemu napędowi nadświetlnemu. Brał udział w wielu kluczowych bitwach, wspierając Rebelię przeciw Imperium. Uzbrojony w działka laserowe i osłony, potrafił uciec nawet z najtrudniejszych sytuacji. Jego charakterystyczny kształt i historia czynią go jednym z najbardziej rozpoznawalnych statków w galaktyce. Często ukrywał się przed wrogami dzięki sprytowi załogi.',
    'tie-advanced': 'TIE Advanced x1 to prototypowy myśliwiec Imperium, którym osobiście latał Darth Vader. Maszyna ta znacznie przewyższała standardowe jednostki liniowe pod względem technologicznym. Wyposażono ją w osłony energetyczne oraz hipernapęd, co pozwalało na samodzielne operowanie bez wsparcia niszczycieli. Charakterystyczne, zakrzywione panele słoneczne zapewniały lepszą manewrowość i stabilność podczas walki kołowej. Uzbrojony w podwójne działka laserowe, pojazd ten stał się symbolem potęgi ciemnej strony mocy i elitarnym narzędziem w rękach lorda Sithów.',
    'x-wing': 'X-wing to wszechstronny myśliwiec Rebelii, znany z charakterystycznych skrzydeł w układzie X. Używany przez pilotów takich jak Luke Skywalker, odegrał kluczową rolę w walce przeciw Imperium. Wyposażony w lasery i torpedy protonowe, łączył siłę ognia z dobrą zwrotnością. Dzięki hipernapędowi mógł działać samodzielnie na dużych dystansach. Stał się symbolem nadziei oraz odwagi Rebelii w walce o wolność galaktyki.'
  };

  images: Record<string, string> = {
      'arc-170': '/assets/img/spaceships/arc-170.png',
      'devastator': '/assets/img/spaceships/devastator.png',
      'death-star': '/assets/img/spaceships/death-star.png',
      'millennium-falcon': '/assets/img/spaceships/millennium-falcon.png',
      'tie-advanced': '/assets/img/spaceships/tie-advanced-x1.png',
      'x-wing': '/assets/img/spaceships/x-wing.png'
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.routeId = id;
    console.log(this.loading, "1");
    const map: any = {
      'arc-170': 66,
      'devastator': 3,
      'death-star': 9,
      'millennium-falcon': 10,
      'tie-advanced': 13,
      'x-wing': 12 
    };

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`https://swapi.info/api/starships/${this.apiId}`)
      .subscribe(data => {
        this.spaceships = data;
        console.log("test", data);
        console.log(this.loading, "3a");
        this.loading = false;
        this.cdr.detectChanges();
        console.log(this.loading, "3b");
      });

      console.log(this.loading, "4");
  }
}