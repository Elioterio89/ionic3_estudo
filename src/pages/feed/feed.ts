import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  public lista_videos = new Array<any>();
  public NomeUsuario:string ="Kendy";
  public Refresher;
  public isRefreshing:boolean = false;
  public loader;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider:MoovieProvider,
              public loadingCtrl: LoadingController 
            ) {
  }

  openLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando.",
      duration: 3000
    });
    this.loader.present();
  }

  closeLoading(){
    this.loader.dismiss();
  }


  public somaDoisNum(n1:number,n2:number):void
  {
    alert(n1+n2);
  }

  doRefresh(refresher) {
    this.Refresher = refresher;
    this.isRefreshing =true;

    this.carregarFilmes();
 }

  openDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage, {id :filme.id});
  }



  ionViewDidEnter() {    
    this.carregarFilmes();
    //console.log('ionViewDidLoad FeedPage');
  }


  carregarFilmes(){

    this.openLoading();    
    this.movieProvider.getLastMovies().subscribe(
      data=>{
        const response = (data as any);
        const  obj_retorno = JSON.parse(response._body); 
        this.lista_videos = obj_retorno.results;
        console.log(obj_retorno);
        this.closeLoading();

        if(this.isRefreshing){
          this.Refresher.complete();
          this.isRefreshing = false;
        }
      },
      error=>{
        console.log(error);
        this.closeLoading();
        if(this.isRefreshing){
          this.Refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }
}
