import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartOptions } from 'canvasjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    title: {

    },
    data: []
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];



  public points: number[] = [];

  private accuracy: number = 10;
  private numberOfPoints: number = 1000

  public ngOnInit() {
    for (let i = 0; i < this.numberOfPoints; i++) {
      let point = this.getCantor();

    }
  }

  private getCantor() {
    let rand = Math.random();
    let randInt = Math.floor(rand * Math.pow(10, this.accuracy));
    let randInt2Str = randInt.toString(2);
    return Number.parseInt(randInt2Str, 3);
  }
}
