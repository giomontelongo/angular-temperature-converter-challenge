import { Component, Input, OnInit } from "@angular/core";
import { Temperature } from './temperature';

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {

  public temperature: Temperature;

  constructor() {
    this.temperature = {
      celsius : null,
      fahrenheit : null
    };
  }

  toConvert(tipo){

    if(tipo){
      if(this.temperature.celsius == null){
        this.temperature.fahrenheit = null;
      }
      else{
        this.temperature.fahrenheit =   Math.round( (this.temperature.celsius * 9 / 5 + 32) * 10 ) / 10;
      }
    }
    else{
      if(this.temperature.fahrenheit == null){
        this.temperature.celsius = null;
      }
      else{
        this.temperature.celsius =  Math.round( ( (this.temperature.fahrenheit - 32) * 5/9 ) * 10 ) / 10;
      }
    }
  }

  ngOnInit() {}


}
