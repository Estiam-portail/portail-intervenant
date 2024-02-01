import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-copie-cet';
import { CopieCetService } from 'src/app/services/travailleur-independant-autoentrepreneur/copie-cet.service';

@Component({
  selector: 'app-copiecet-auto',
  templateUrl: './copiecet-auto.component.html',
  styleUrls: ['./copiecet-auto.component.css']
})
export class CopiecetAutoComponent implements OnInit {



  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private CopieCet:CopieCetService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.CopieCet.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/AssujettissementCet'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
