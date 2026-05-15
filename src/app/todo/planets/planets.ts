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
  'alderaan': 'Alderaan to spokojna planeta znana z wysokiego poziomu kultury i dyplomacji. Została zniszczona przez Gwiazdę Śmierci.',
  'coruscant': 'Coruscant to planetarne miasto będące centrum politycznym galaktyki i siedzibą Senatu Republiki oraz Zakonu Jedi.',
  'dagobah': 'Dagobah to dzika, bagienna planeta pełna gęstej roślinności, znana jako miejsce wygnania Yody.',
  'hutt': 'Hutt to planeta zamieszkiwana przez przestępcze syndykaty Huttów, znana z nielegalnych interesów i mafijnej kontroli.',
  'naboo': 'Naboo to malownicza planeta o bujnej naturze i rozwiniętej cywilizacji, znana z Pałacu królewskiego w Theed.',
  'tatooine': 'Tatooine to pustynna planeta na obrzeżach galaktyki, znana z podwójnych słońc i ciężkich warunków życia.'
};

  images: Record<string, string> = {
    'alderaan': '/assets/img/planets/alderaan.png',
    'coruscant': '/assets/img/planets/coruscant.png',
    'dagobah': '/assets/img/planets/dagobah.png',
    'hutt': '/assets/img/planets/hutt.png',
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
      'alderaan': 2,
      'coruscant': 9,
      'dagobah': 5,
      'hutt': 4,
      'naboo': 8,
      'tatooine': 1
    };

    this.apiId = map[id!];
    console.log(this.loading, "2");
    this.http.get(`https://swapi.info/api/planets/${this.apiId}`)
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