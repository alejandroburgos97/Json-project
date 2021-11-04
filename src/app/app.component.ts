import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Infosys stock value"
    },
    xAxis: {

    },
    yAxis: {
      title: {
        text: "Infosys Stock value in dollar"
      }
    },
    series: [{
      data: [12, 8, 43, 35, 20, 90, 100, 110],
      type: 'line'
    }]
  }



}
