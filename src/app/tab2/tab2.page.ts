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

  ionViewWillEnter() {
    this.monitoringService.getDataHistory().subscribe(res => {
      console.log(res);
      this.dataHistory = res;
      console.log(this.dataHistory)
    });
  }


  // async presentToast(a){
  //   const toast = await this.toasCtrl.create({
  //     message: a,
  //     duration: 1500
  //   });
  //   toast.present();
  // }
}
