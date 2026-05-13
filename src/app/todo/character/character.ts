import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.html',
  styleUrl: './character.css'
})
export class CharacterComponent {

  id: string | null = null;

  characters: any = {
    'darth-vader': {
      name: 'Darth Vader',
      description: 'Darth Vader, znany wcześniej jako Anakin Skywalker, to postać fikcyjna z sagi filmowej Gwiezdne wojny. Urodził się w 41 BBY na planecie Tatooine, gdzie był niewolnikiem dla handlarza Watto. Jego matka, Shmi Skywalker, nie powiedziała nic o ojcu Anakina, co sugeruje, że został poczęty przez Moc. Anakin był rycerzem Jedi, a następnie przeszedł na ciemną stronę Mocy pod wpływem Dartha Sidiousa, przyjąwszy tytuł „Darth Vader”. W swoim życiu, Darth Vader był prawa ręka Imperatora, a następnie powrócił na jasną stronę mocy, ratując swojego syna Lukea Skywalkera. Darth Vader jest jedną z najbardziej rozpoznawalnych postaci filmowych i symbolizuje ciemną stronę Mocy w Gwiezdnych Wojnach.',
      image: '/assets/img/characters/Darth Vader.png'
    },
    'luke-skywalker': {
      name: 'Luke Skywalker',
      description: 'Luke Skywalker to centralna postać sagi, która przeszła drogę od prostego farmera do najpotężniejszego Mistrza Jedi. Jego historia to uosobienie heroizmu i niezłomnej wiary w dobro. Jako syn Dartha Vadera, musiał zmierzyć się z mrocznym dziedzictwem swojej rodziny, co stało się jego największą próbą charakteru. Wykazał się jednak niezwykłą siłą ducha, odrzucając nienawiść na rzecz współczucia. Luke był wybitnym pilotem i zręcznym szermierzem, władającym zielonym mieczem świetlnym. Jego największym osiągnięciem nie było jednak militarne zwycięstwo, lecz doprowadzenie do odkupienia ojca. Dzięki swojej odwadze przywrócił równowagę Mocy, stając się legendarnym symbolem nadziei i odnowicielem Zakonu Jedi w galaktyce.',
      image: '/assets/img/characters/Luke Skywalker.png'
    },
    'yoda': {
      name: 'Yoda',
      description: 'Yoda to legendarny Wielki Mistrz Jedi, który przez ponad osiemset lat szkolił kolejne pokolenia strażników pokoju. Mimo drobnej postury i sędziwego wieku, posiadał potężną więź z Mocą, udowadniając, że prawdziwa siła nie zależy od fizycznych rozmiarów. Słynął z niezwykłej mądrości, spokoju oraz unikalnego sposobu mówienia.Jako cierpliwy mentor, uczył opanowania i przestrzegał przed zgubnym wpływem strachu. W walce stawał się jednak niezwykle zwinnym wojownikiem, mistrzowsko władającym zielonym mieczem świetlnym. Po upadku Zakonu stał się ostatnim powiernikiem pradawnej wiedzy, przekazując ją następcom. Yoda to uosobienie duchowej głębi, cierpliwości i niezłomnej wiary w światło, które drzemie w każdej żywej istocie.',
      image: '/assets/img/characters/yoda.png'
    },
    'c-3-po': {
      name: 'C-3PO',
      description: 'C-3PO, znany również jako Threepio, to droid protokolarny stworzony przez Anakina Skywalkera na planecie Tatooine. Posiada moduł komunikacyjny TranLang III, który umożliwia mu mówienie ponad sześć milionów języków i dialekty. C-3PO jest przyjacielem droida nawigacyjno-naprawczego R2-D2 i często występuje w filmach Gwiezdnych Wojen, gdzie pełni rolę tłumacza i doradcy dla bohaterów. Jego unikalna osobowość i zdolność do komunikacji sprawiają, że zdobył serca fanów na całym świecie.',
      image: '/assets/img/characters/c-3po.png'
    },
    'han-solo': {
      name: 'Han Solo',
      description: 'Han Solo to charyzmatyczny przemytnik i genialny pilot, który z cynicznego samotnika stał się generałem Rebelii. Razem z wiernym Chewbaccą przemierzał galaktykę za sterami Sokoła Millennium, słynąc z brawury, sprytu i celnego oka. Choć początkowo motywowany zyskiem, jego lojalność wobec przyjaciół i ukryty heroizm uczyniły go kluczowym liderem walki z tyranii.',
      image: '/assets/img/characters/han solo.png'
    },
    'leia-organa': {
      name: 'Leia Organa',
      description: 'Leia Organa to niezłomna przywódczyni, dyplomatka i jedna z najważniejszych postaci w walce o wolność galaktyki. Wychowana jako księżniczka Alderaanu, szybko porzuciła dworskie wygody, by stać się kluczową postacią Rebelii. Cechowała ją niezwykła odwaga, błyskotliwa inteligencja oraz bezkompromisowość w obliczu tyranii. Mimo braku formalnego wyszkolenia Jedi, posiadała silną więź z Mocą, która dawała jej intuicję i hart ducha. Jako genialna strateżka i charyzmatyczna liderka, potrafiła zjednoczyć rozproszone siły oporu przeciwko Imperium. Leia to symbol nadziei i determinacji – kobieta, która z równą gracją prowadziła negocjacje polityczne, co walczyła na pierwszej linii frontu z blasterem w ręku.',
      image: '/assets/img/characters/leia organa.png'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  get character() {
    return this.characters[this.id || ''];
  }
}