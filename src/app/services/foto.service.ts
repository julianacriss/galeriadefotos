import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  public fotos: Foto[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
    });
    this.fotos.unshift({
      webviewPath: capturedPhoto.webPath
    });     
  }

  public deleteFoto(index : number) {
    this.fotos.splice(index, 1);
  }
   
}

export interface Foto {
  webviewPath: string;
  base64?: string;
}
