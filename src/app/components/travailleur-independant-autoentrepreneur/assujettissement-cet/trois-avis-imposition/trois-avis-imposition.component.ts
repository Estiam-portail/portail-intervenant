import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } 
from 'src/app/models/travaillleur-independant/file-upload-avis-imposition';
import { GetDocumentsTravailleurIndependantService } from 'src/app/services/get-documents-travailleur-independant.service';
import { TroisAvisImpositionService } 
from 'src/app/services/travailleur-independant-autoentrepreneur/assujettissement-cet/trois-avis-imposition.service';

@Component({
  selector: 'app-trois-avis-imposition',
  templateUrl: './trois-avis-imposition.component.html',
  styleUrls: ['./trois-avis-imposition.component.css']
})
export class TroisAvisImpositionComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private TroisAvisImposition:TroisAvisImpositionService,
    private getDocumentsTravailleurIndependantService :GetDocumentsTravailleurIndependantService,
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
    this.TroisAvisImposition.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      // this.router.navigate(['travailleurIndependant/AssujettissementCet'])
      console.log("ready to insert ...");
      
      
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }
}
