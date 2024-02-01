import { Component, OnInit } from '@angular/core';

import { FileUpload } from '../../../models/file.upload-attestation-URSSAF-RSI-MSA';
import { AttestationURSSAFRSIMSAService } from 'src/app/services/personne-morale/attestation-urssaf-rsi-msa.service';
import { GestionDocumentsService } from 'src/app/services/personne-morale/gestion-documents.service';
@Component({
  selector: 'app-attestation-urssaf-rsi-msa',
  templateUrl: './attestation-urssaf-rsi-msa.component.html',
  styleUrls: ['./attestation-urssaf-rsi-msa.component.css']
})
export class AttestationURSSAFRSIMSAComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private attestationURSSAFRSIMSA: AttestationURSSAFRSIMSAService
    , private gestionDocumentsService : GestionDocumentsService
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
    this.attestationURSSAFRSIMSA.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }


// **************************************

  sendDocumentToEstiam(){
    this.gestionDocumentsService.saveDocuments()
  }
}


