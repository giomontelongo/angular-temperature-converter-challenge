import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss'],
})
export class TemperatureConverter {
  celsius: any //Declare my variables with type Any.
  farenh: any

  ngOnInit() {
    // Celsius = (F − 32) × 5/9
    // Farenheit = C*9/5 + 32
  }
  changed(value: any, type: any) {
    // Create the changemodel to accept the event and the value from the input
    if (value) {
      //If value has data will be true and will enter to the statement / if vale is empty will go to the else statement to empty the inputs.
      if (type === 'celsius') {
        //Create if/else statement and implement the given formula.
        let farenheit = (value * 9) / 5 + 32
        this.farenh = farenheit.toFixed(1)
      } else {
        let cels = (value - 32) * (5 / 9)
        this.celsius = cels.toFixed(1)
      }
    } else {
      this.celsius = null
      this.farenh = null
    }
  }
}
