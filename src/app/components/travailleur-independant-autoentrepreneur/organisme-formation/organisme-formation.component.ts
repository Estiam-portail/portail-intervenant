import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-organisme-formation';
import { OrganismeFormationService } from 'src/app/services/travailleur-independant-autoentrepreneur/organisme-formation.service';

@Component({
  selector: 'app-organisme-formation',
  templateUrl: './organisme-formation.component.html',
  styleUrls: ['./organisme-formation.component.css']
})
export class OrganismeFormationComponent implements OnInit {


  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private organismeFormationService:OrganismeFormationService,
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
    this.organismeFormationService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/CarteVitale'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
