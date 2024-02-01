import { Component, OnInit } from '@angular/core';

import { FileUpload } from '../../../models/file-upload-copie-extrait';
import { Router } from '@angular/router';
import { CopieExtraitService } from 'src/app/services/personne-morale/copie-extrait.service';
@Component({
  selector: 'app-copie-extrait',
  templateUrl: './copie-extrait.component.html',
  styleUrls: ['./copie-extrait.component.css']
})
export class CopieExtraitComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private copieExtraitService:CopieExtraitService,
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
    this.copieExtraitService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['RibIbanBicComponent'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }
}
