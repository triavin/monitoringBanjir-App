import { Component } from '@angular/core';
import { MonitoringService } from '../services/monitoring.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  dataHistory:any = [];

  constructor(
    private monitoringService: MonitoringService
  ) {}

  intervalCall(){
    this.monitoringService.getDataHistory().subscribe(res => {
      console.log(res);
      this.dataHistory = res;
      console.log(this.dataHistory)
    });
  }

  ionViewDidEnter(){
    setInterval(()=>{
      this.intervalCall()
    }, 2000)
  }

}
