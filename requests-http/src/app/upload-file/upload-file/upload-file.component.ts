import { Component } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { take } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { filterReponse, uploadProgress } from '../../shared/rxjs-operators';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {

  files!: Set<File>;
  progress = 0;

  constructor(private service: UploadFileService) {

  }

  onChange(event: any) {
    const selectFiles = <FileList>event?.target?.files;
    const element = document.getElementById('customFileLabel');
    if (element) {
      this.files = new Set();
      const fileNames = [];
      for (let i = 0; i < selectFiles.length; i++) {
        fileNames.push(selectFiles[i].name);
        this.files.add(selectFiles[i])
      }
      element.innerHTML = fileNames.join(', ');
      this.progress
    }
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, '/api/upload')
      .pipe(
        uploadProgress(progress => {
          console.log()
          this.progress = progress;
        }),
        filterReponse()
      )
      .subscribe(response => console.log('upload concluído'))
      // .subscribe((event: HttpEvent<Object>) =>{
      //   if (event.type === HttpEventType.Response){
      //   } else if (event.type === HttpEventType.UploadProgress){
      //     const percentDone = Math.round((event.loaded * 100) / event.total!);
      //     this.progress = percentDone;
      //   }
      //   console.log(event)
      //   })
    }
  }

  onDownloadExcel(){
    this.service.download(environment.BASE_URL + '/downloadExcel')
      .subscribe((res: any) => {
        this.service.handleFile(res, 'report.xlsx');
      });
  }

  onDownloadPdf(){
        this.service.download(environment.BASE_URL + '/downloadPdf')
      .subscribe((res: any) => {
        this.service.handleFile(res, 'report.pdf');
      });
  }

}
