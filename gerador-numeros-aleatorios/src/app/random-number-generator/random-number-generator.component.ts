import { Component } from '@angular/core';

@Component({
  selector: 'app-random-number-generator',
  templateUrl: './random-number-generator.component.html',
 // styleUrls: ['./random-number-generator.component.css']
})
export class RandomNumberGeneratorComponent {
  min: any;
  max: any;
  randomNumber: number | null = null;

  generateRandomNumber(): void {
    const minNumber = Number(this.min);
    const maxNumber = Number(this.max);

    if (!isNaN(minNumber) && !isNaN(maxNumber) && minNumber < maxNumber) {
      this.randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    } else {
      this.randomNumber = null;
    }
  }
}
