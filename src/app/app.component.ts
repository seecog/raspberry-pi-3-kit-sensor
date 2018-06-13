import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public records: any[] = [];
  public map : any;
  data: any;
  interval: any;
  lat: number;
  lng: number;
  currentPageHistory: Number;
  searchResultsPerPage: Number;

  constructor(private http: Http) {
    this.currentPageHistory = 1;
    this.searchResultsPerPage = 4;
  }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 2000);
  }

  refreshData() {
    this.http.get('http://pankajagarwal.in/sensor/logistics/loop.php').subscribe(
      (res) => {
        this.records = res.json();
        //start map
        this.http.get('http://pankajagarwal.in/sensor/logistics/map.php').subscribe(
          (resMap) => {
            console.log('The map data is ',this.map)
            this.map = resMap.json();
            this.lat = parseFloat(this.map[0].lat);
            this.lng = parseFloat(this.map[0].lon);
          },
          (error) => {
            console.log('The eror is ', error)
          },
          () => {
    
          }
    
        )
        //end map
      },
      (error) => {
        console.log('The eror is ', error)
      },
      () => {

      }

    )
  }


}
