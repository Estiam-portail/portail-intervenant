import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-attestation-precisant';
import { GetDocumentsTravailleurIndependantService } from 'src/app/services/get-documents-travailleur-independant.service';
import { AttestationPrecisantService } from 'src/app/services/travailleur-independant-autoentrepreneur/attestation-precisant.service';

@Component({
  selector: 'app-attestation-precisant',
  templateUrl: './attestation-precisant.component.html',
  styleUrls: ['./attestation-precisant.component.css']
})
export class AttestationPrecisantComponent implements OnInit {


  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private attestationPrecisantService:AttestationPrecisantService,
    private getDocumentsTravailleurIndependantService : GetDocumentsTravailleurIndependantService,
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
    this.attestationPrecisantService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      // this.router.navigate(['travailleurIndependant/CopiecetAuto'])
      this.getDocumentsTravailleurIndependantService.saveDocuments()
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
