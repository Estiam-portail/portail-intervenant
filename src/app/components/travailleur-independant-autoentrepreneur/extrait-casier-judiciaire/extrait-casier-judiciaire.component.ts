import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-extrait-casier-judiciaire';
import { ExtraitCasierJudiciaireService } from 'src/app/services/travailleur-independant-autoentrepreneur/extrait-casier-judiciaire.service';

@Component({
  selector: 'app-extrait-casier-judiciaire',
  templateUrl: './extrait-casier-judiciaire.component.html',
  styleUrls: ['./extrait-casier-judiciaire.component.css']
})
export class ExtraitCasierJudiciaireComponent implements OnInit {


  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private extraitCasierJudiciaireService:ExtraitCasierJudiciaireService,
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
    this.extraitCasierJudiciaireService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/AttestationUrsafRsi'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
