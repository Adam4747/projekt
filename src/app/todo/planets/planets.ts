import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planets.html',
  styleUrl: './planets.css',
})
export class PlanetsComponent {

  planet: any;
  loading = true;
  apiId: number | null = null;
  routeId: string | null = null;

  descriptions: Record<string, string> = {
  'alderaan': 'Alderaan to prawdziwy klejnot Galaktyki, słynący z zapierających dech w piersiach alpejskich krajobrazów, głębokich oceanów oraz lśniących metropolii harmonijnie wkomponowanych w naturę. Jako oaza pokoju, kultury i zaawansowanej nauki, planeta ta była rządzona przez szlachetny ród Organa. Niestety, ze względu na silne wsparcie dla Sojuszu Rebeliantów, stała się pierwszą ofiarą niszczycielskiej potęgi Gwiazdy Śmierci. Jej tragiczna destrukcja na zawsze zmieniła losy galaktycznego konfliktu.',
  'coruscant': 'Coruscant to tętniące życiem serce Galaktyki, będące gigantycznym ekumenopolis, gdzie całą powierzchnię globu pokrywają monumentalne wieżowce i wielopoziomowe dzielnice. Przez tysiąclecia planeta pełniła funkcję stolicy Republiki oraz Imperium, goszcząc zarówno galaktyczny Senat, jak i majestatyczną Świątynię Jedi. Pod błyszczącą, luksusową powierzchnią najwyższych pięter kryją się jednak mroczne, niebezpieczne i zapomniane poziomy podziemia, w których kwitnie przestępczość oraz ubóstwo.',
  'dagobah': 'Dagobah to odległy, niezbadany świat położony na Zewnętrznych Rubieżach, niemal w całości pokryty gęstymi, mrocznymi bagnami oraz potężnymi rozlewiskami. Ta tajemnicza planeta tętni prymitywnym życiem, będąc jednocześnie niezwykle silnym skupiskiem Mocy. To właśnie to odizolowanie i surowy klimat sprawiły, że Dagobah stało się idealnym miejscem wygnania dla Mistrza Yody. W tym surowym środowisku legendarny Jedi szkolił Lukea Skywalkera na nowego obrońcę galaktycznego pokoju.',
  'hoth': 'Hoth to surowa, lodowa planeta położona na skraju znanej przestrzeni kosmicznej, charakteryzująca się wiecznymi zamieciami oraz ekstremalnie niskimi temperaturami. Ten niegościnny glob, zamieszkany przez drapieżne wampy i udomowione tauntauny, stał się idealną kryjówką dla Rebeliantów, którzy założyli tu tajną Bazę Echo. Spokój nie trwał jednak długo, gdyż siły Imperium szybko wykryły obecność rebeliantów, doprowadzając do widowiskowej i niezwykle dramatycznej bitwy pośród śnieżnych pustkowi.',
  'naboo': 'Naboo to malownicza, tętniąca życiem planeta położona na Środkowych Rubieżach, znana z zielonych wzgórz, rozległych równin oraz podwodnych głębin. Powierzchnię dzielą dwie unikalne cywilizacje: dumni Ludzie, budujący eleganckie miasta pełne klasycznej architektury, oraz żyjący w głębinach Gunganie. Naboo odegrało kluczową rolę w historii Galaktyki, będąc miejscem narodzin Padmé Amidale oraz Palpatine’a, którego polityczne intrygi i blokada Handlowej doprowadziły do upadku dawnej Republiki.',
  'tatooine': 'Tatooine to surowa, pustynna planeta krążąca wokół dwóch słońc, położona na marginalnych Zewnętrznych Rubieżach, gdzie brakuje prawa i porządku. Rządzona przez bezwzględny kartel Huttów, jest domem dla farmerów wilgoci, Ludzi Pustyni oraz niebezpiecznych Jawów. Mimo swojej pozornej nieistotności i skrajnie trudnych warunków do życia, to właśnie ten piaszczysty świat ukształtował historię całej Galaktyki, będąc miejscem narodzin Anakina Skywalkera oraz wychowania jego syna, Lukea.'
};

  images: Record<string, string> = {
    'alderaan': '/assets/img/planets/alderaan.png',
    'coruscant': '/assets/img/planets/coruscant.png',
    'dagobah': '/assets/img/planets/dagobah.png',
    'hoth': '/assets/img/planets/hoth.png',
    'naboo': '/assets/img/planets/naboo.png',
    'tatooine': '/assets/img/planets/tatooine.png'
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
      'alderaan': 1,
      'coruscant': 2,
      'dagobah': 3,
      'hoth': 4,
      'naboo': 5,
      'tatooine': 6
    };

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`http://localhost:8080/api/planets/${this.apiId}`)
      .subscribe(data => {
        this.planet = data;
        console.log("test", data);
        console.log(this.loading, "3a");
        this.loading = false;
        this.cdr.detectChanges();
        console.log(this.loading, "3b");
      });

      console.log(this.loading, "4");
  }
}