import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService {
  server: string = 'http://monitoringbanjirunpam01.000webhostapp.com/api/';
  constructor(public http: HttpClient) {}

  getDataHistory() {
    return this.http.get(this.server + 'data_history.php/');
  }

  getDataStatus() {
    return this.http.get(this.server + 'data_status.php');
  }
}
