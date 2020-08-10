import { Component } from '@angular/core';
import { FotoService, Foto } from '../services/foto.service';
import { ActionSheetController } from '@ionic/angular';
import { PopoverComponent } from './../popover/popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotoService: FotoService, public actionSheetController: ActionSheetController, 
              public popoverController: PopoverController) { }

  async presentActionSheet(i : number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'O que deseja fazer?',
      buttons: [{
        text: 'Deletar',
        icon: 'trash',
        handler: () => {
          this.fotoService.deleteFoto(i);
        }
        }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
    } 

    async presentPopover(ev: any) {
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }

}
