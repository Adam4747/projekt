import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.html',
  styleUrl: './species.css',
})
export class SpeciesComponent {

  species: any;
  loading = true; 
  apiId: number | null = null;
  routeId: string | null = null;

  descriptions: Record<string, string> = {
    'human':          'Najbardziej rozpowszechniony i elastyczny gatunek w galaktyce, stanowiący trzon struktur politycznych, od Republiki po Imperium. Ludzie słyną z ogromnej różnorodności kulturowej, ambicji oraz zdolności adaptacji do niemal każdych warunków. Choć nie posiadają wyjątkowych cech biologicznych, ich wszechstronność pozwoliła im zdominować galaktyczną historię, naukę i sztukę. Znajdziesz ich w każdej profesji, od szlachetnych rycerzy Jedi, przez bezwzględnych polityków, aż po przemytników.',
    'ewok':           'Niewielkie, pierwotne istoty zamieszkujące zalesiony księżyc Endor. Choć na pierwszy rzut oka mogą wydawać się bezbronne, są niezwykle sprytnymi myśliwymi i wojownikami, którzy potrafią perfekcyjnie wykorzystać swoje leśne środowisko. Żyją w zorganizowanych plemionach wysoko w koronach drzew. Ich prymitywna technologia, oparta na kamieniu i drewnie, okazała się kluczowa podczas bitwy o Endor, gdzie pomogli Rebelii pokonać zaawansowane technologicznie siły Imperium.',
    'gungan':         'Amfibijny gatunek pochodzący z bagiennych rejonów planety Naboo. Żyją w unikalnej harmonii z naturą, budując imponujące, podwodne miasta z bąbli hydrostatycznych. Gunganie wykształcili unikalną technologię opartą na biologii i plazmie, w tym charakterystyczne tarcze energetyczne. Choć przez innych bywają postrzegani jako niezdarni, to dumni i lojalni wojownicy, dysponujący zorganizowaną armią, która odegrała kluczową rolę w wyzwoleniu ich rodzinnej planety.',
    'hutt':           'Potężne, długowieczne istoty, które stworzyły jedno z największych imperiów przestępczych w galaktyce. Zamiast siły militarnej, Huttowie polegają na manipulacji, ogromnych zasobach finansowych i bezwzględności. Kontrolują Zewnętrzne Rubieże, rządząc kartelem, który czerpie zyski z przemytu, hazardu i niewolnictwa. Ich kultura opiera się na klanach, a status społeczny mierzy się wpływami i bogactwem. Słyną z ogromnego sprytu oraz odporności na sztuczki umysłowe Jedi.',
    'trandoshan':     'Jaszczuropodobne, dumne istoty z planety Trandosha, których kultura kręci się wokół polowań i walki. Czczą bóstwo znane jako Władczyni Liczb, zdobywając u niej punkty za chwytanie niewolników lub eliminowanie celów. Z tego powodu wielu z nich zostaje bezwzględnymi łowcami nagród. Posiadają unikalną zdolność regeneracji straconych kończyn. Ich brutalna filozofia życia sprawia, że od wieków toczą krwawy, głęboko zakorzeniony konflikt z sąsiednim gatunkiem Wookieech.',
    'wookiee':        'Lojalne i honorowe istoty pochodzące z leśnej planety Kashyyyk. Choć słyną z porywczości i ogromnej siły, są również niezwykle inteligentni i biegli w zaawansowanej mechanice. Żyją w głębokim szacunku do natury, budując domy na gigantycznych drzewach wroshyr. Ich kultura mocno opiera się na więzach rodzinnych i długu wdzięczności. Przez lata cierpieli z powodu niewolnictwa, co uczyniło ich zaciekłymi wrogami Imperium i Trandoshan.'
  };

  images: Record<string, string> = {
    'human': '/assets/img/species/human.png',
    'ewok': '/assets/img/species/ewoki.png',
    'gungan': '/assets/img/species/gungan.png',
    'hutt': '/assets/img/species/hutt.png',
    'trandoshan': '/assets/img/species/trandoshan.png',
    'wookiee': '/assets/img/species/wookie.png'
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) 
  
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.routeId = id;
    console.log(this.loading, "1");
    const map: any = {
      'human': 1,
      'ewok': 2,
      'gungan': 3,
      'hutt': 4,
      'trandoshan': 5,
      'wookiee': 6
    };
    

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`http://localhost:8080/api/species/${this.apiId}`)
      .subscribe(data => {
        this.species = data;
        console.log("test", data);
        console.log(this.loading, "3a");
        this.loading = false;
        this.cdr.detectChanges();
        console.log(this.loading, "3b");
      });

      console.log(this.loading, "4");
  }
  
}