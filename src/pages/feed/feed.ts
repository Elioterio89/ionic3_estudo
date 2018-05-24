import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]

})
export class FeedPage {


  public objetoFeed=
  {
    titulo:"Eslei Elioterio",
    data:" 10 de fevereiro de 2018"  ,
    descricao:"kendynho no carnaval",
    qtdLIkes:23,
    qtdComents:5,
    tmpComent:"6hrs atras"
  }
  public NomeUsuario:string ="Kendy";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider:MoovieProvider
            ) {
  }

  public somaDoisNum(n1:number,n2:number):void
  {
    alert(n1+n2);

  }

  ionViewDidLoad() {    
    //this.somaDoisNum(6,2);
    this.movieProvider.getLastMovies().subscribe(
      data=>{
        const response = (data as any);
        const  obj_retorno = JSON.parse(response._body); 
        console.log(obj_retorno);
      },
      error=>{
        console.log(error);
      }
    )
    //console.log('ionViewDidLoad FeedPage');
  }

}
