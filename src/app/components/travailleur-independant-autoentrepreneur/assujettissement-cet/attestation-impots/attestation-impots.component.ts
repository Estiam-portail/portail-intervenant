import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } 
from 'src/app/models/travaillleur-independant/file-upload-attestation-impots';
import { AttestationImpotsService } 
from 'src/app/services/travailleur-independant-autoentrepreneur/assujettissement-cet/attestation-impots.service';

@Component({
  selector: 'app-attestation-impots',
  templateUrl: './attestation-impots.component.html',
  styleUrls: ['./attestation-impots.component.css']
})
export class AttestationImpotsComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private attestationImpotsService:AttestationImpotsService,
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
    this.attestationImpotsService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/TroisAvisImposition'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
