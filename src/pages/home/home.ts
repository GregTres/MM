import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

export interface resultat {
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average : number;
}

const fauxresultats: resultat[] = [
  { original_title: 'Star Wars 1', vote_average: 5.8, release_date: "1950", poster_path: 'https://www.bedetheque.com/media/Couvertures/StarWarsEpisode1_23052002.jpg' },
  { original_title: 'Star Wars 2', vote_average: 5.8, release_date: "1960", poster_path: 'http://www.filmspourenfants.net/video/images/starwars2.jpg' },
  { original_title: 'Star Wars 3', vote_average: 5.8, release_date: "1970", poster_path: 'https://vignette.wikia.nocookie.net/thegamingfamily/images/1/1f/Star-Wars-3-Revenge-of-the-Sith-%E0%B8%8B%E0%B8%B4%E0%B8%98%E0%B8%8A%E0%B8%B3%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%89%E0%B8%99.jpg/revision/latest?cb=20140922193631' }
]

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: resultat[];
  pushPage: any;
  constructor(public navCtrl: NavController) {
    this.result = [];
    this.pushPage = DetailsPage;
  }
  onInput(event: any): void {
    const query: string = event.target.value;
    this.result = query ? fauxresultats : [];
  }
}
