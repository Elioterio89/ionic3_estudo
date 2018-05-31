import { Injectable } from '@angular/core';

let config_key_name="config";

@Injectable()
export class ConfigProvider {

 private config={
   showSlide: false,
   userName:"",
   nome:""
 }
  constructor() {
   
  }
 
  getConfigData():any{
    return localStorage.getItem(config_key_name ) || {};
  }

  setConfigData(pShowSlide?:boolean,pNome?:string,pUserName?:string)
  {
    let config={
      showSlide: false,
      userName:"",
      nome:""
    };

    if(pShowSlide)
    {
      config.showSlide=pShowSlide;
    }
    if(pUserName)
    {
      config.userName=pUserName;
    }
    if(pNome)
    {
      config.nome=pNome;
    }

localStorage.setItem(config_key_name,JSON.stringify(config));

  }
}
