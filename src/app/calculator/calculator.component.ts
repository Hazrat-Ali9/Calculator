import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currValue = '';
  ans = '0';
  getNumber(v: string){
    this.currValue += v;
    this.ans = this.currValue;
  }
  getDecimal(){
    if(!this.currValue.includes('.')){
      this.currValue += '.';
    }
    this.ans = this.currValue;
  }
  getOperation(s: string){
    this.currValue += s;
    this.ans = this.currValue;
  }
  equal(){
    this.ans = eval(this.currValue);
    this.currValue = this.ans;
  }
  clear(){
    this.currValue = '';
    this.ans = '';
  }
}
