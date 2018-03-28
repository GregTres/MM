import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface resultat {
  title: string;
  author: string;
  date: number;
  image: string;

}

const fauxresultats: resultat[] = [
  { title: 'Star Wars 1', author: 'George lucas', date: 1950, image: 'https://www.bedetheque.com/media/Couvertures/StarWarsEpisode1_23052002.jpg' },
  { title: 'Star Wars 2', author: 'George lucas', date: 1960, image: 'http://www.filmspourenfants.net/video/images/starwars2.jpg' },
  { title: 'Star Wars 3', author: 'George lucas', date: 1970, image: 'https://vignette.wikia.nocookie.net/thegamingfamily/images/1/1f/Star-Wars-3-Revenge-of-the-Sith-%E0%B8%8B%E0%B8%B4%E0%B8%98%E0%B8%8A%E0%B8%B3%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B9%89%E0%B8%99.jpg/revision/latest?cb=20140922193631' }
]

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: resultat[];
  constructor(public navCtrl: NavController) {
    this.result = [];
  }
  onInput(event: any): void {
    const query: string = event.target.value;
    this.result = query ? fauxresultats : [];
  }
}
