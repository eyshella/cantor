import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPoint } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    scales: {
      xAxes: [{
        type: 'linear',
        ticks: {
          min: -0.1,
          max: 1.1,
          stepSize: 0.01,
        }
      }],
      yAxes: [{
        ticks: {
          min: -0.1,
          max: 1.1,
          stepSize: 0.1,
        }
      }]
    }
  }
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(66,12,232)',
      backgroundColor: 'rgba(0,255,251,0.5)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  private numberOfPoints: number = 5000

  public ngOnInit() {
    let values: number[] = [];
    for (let i = 0; i < this.numberOfPoints; i++) {
      let value = this.getCantor();
      values.push(value)
    }
    values = values.sort();
    let points: ChartPoint[] = [];
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      let point: ChartPoint = {
        x: value,
        y: (i) / values.length,
      }
      points.push(point);
    }
    this.lineChartData.push({
      data: points,
      label: 'Cantor distribution',
      pointRadius:1
    });
  }

  private getCantor() {
    let rand = Math.random();
    let randStr = this.convert10to2(rand);
    randStr = randStr.split('1').join('2');
    return this.convert3to10(randStr);
  }

  private convert10to2(v: number): string {
    let result = '0.';
    for (let j = 1; j <= 64; j++) {
      let c = v - Math.pow(0.5, j)
      if (c > 0) {
        v = c;
        result = result + '1'
      } else {
        result = result + '0';
      }
    }
    return result;
  }

  private convert3to10(v: string): number {
    let result = 0;
    for (let i = 2; i < v.length; i++) {
      result = result + Number.parseInt(v[i]) * Math.pow(3, -i + 1);
    }
    return result
  }
}
