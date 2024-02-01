import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-ursaf-rsi';
import { UrsafRsiService } from 'src/app/services/travailleur-independant-autoentrepreneur/ursaf-rsi.service';

@Component({
  selector: 'app-attestation-ursaf-rsi',
  templateUrl: './attestation-ursaf-rsi.component.html',
  styleUrls: ['./attestation-ursaf-rsi.component.css']
})
export class AttestationUrsafRsiComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private CarteIdentitieService:UrsafRsiService,
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
    this.CarteIdentitieService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/RibIban'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }
}
