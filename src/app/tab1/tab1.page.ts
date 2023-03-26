import { Component } from '@angular/core';
import { MonitoringService } from '../services/monitoring.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private monitoringService: MonitoringService
  ) {}

  Status:any = [];

  ionViewWillEnter(){
    this.monitoringService.getDataStatus().subscribe(res=>{
      console.log(res);
      this.Status = res
    })    
  }

}
