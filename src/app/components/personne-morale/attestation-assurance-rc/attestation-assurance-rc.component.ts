import { Component, OnInit } from '@angular/core';

import { FileUpload } from '../../../models/file-upload-attestation-assurance';
import { Router } from '@angular/router';
import { AttestationAssuranceRCService } from 'src/app/services/personne-morale/attestation-assurance-rc.service';
@Component({
  selector: 'app-attestation-assurance-rc',
  templateUrl: './attestation-assurance-rc.component.html',
  styleUrls: ['./attestation-assurance-rc.component.css']
})
export class AttestationAssuranceRCComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private attestationAssuranceRC: AttestationAssuranceRCService,
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
    this.attestationAssuranceRC.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
        if(percentage == 100){
          this.router.navigate(['AttestationURSSAFRSIMSA'])
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
