
import { MoovieProvider } from '../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[MoovieProvider]
})
export class FilmeDetalhesPage {

  public filme ;
  public filemId;
   
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mouvieProvider:MoovieProvider
  ) {
  }

  ionViewDidLoad() {
    this.filemId =this.navParams.get("id");
    this.mouvieProvider.getLastDatails(this.filemId).subscribe(data=>{
    let retorno = (data as any )._body;
    this.filme = JSON.parse(retorno);
    },error => {

    });
  }

}
