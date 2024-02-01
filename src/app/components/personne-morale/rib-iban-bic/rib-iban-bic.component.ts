import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadRibIbanBic } from 'src/app/models/file-upload-rib-iban-bic';
import { RibIbanBicService } from 'src/app/services/personne-morale/rib-iban-bic.service';

@Component({
  selector: 'app-rib-iban-bic',
  templateUrl: './rib-iban-bic.component.html',
  styleUrls: ['./rib-iban-bic.component.css']
})
export class RibIbanBicComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUploadRibIbanBic: FileUploadRibIbanBic;
  percentage: number;

  constructor(private ribIbanBicService: RibIbanBicService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUploadRibIbanBic = new FileUploadRibIbanBic(file);
    this.ribIbanBicService.pushFileToStorage(this.currentFileUploadRibIbanBic).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
        if(percentage == 100){
          this.router.navigate(['copierContributionÉconomiqueTerritoriale'])
        }
      },
      error => {
        console.log(error);
      }
    );
}
}