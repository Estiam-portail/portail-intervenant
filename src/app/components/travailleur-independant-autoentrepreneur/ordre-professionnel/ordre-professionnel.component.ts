import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-ordere-professionnel';
import { OrdreProfessionnelService } from 'src/app/services/travailleur-independant-autoentrepreneur/ordre-professionnel.service';

@Component({
  selector: 'app-ordre-professionnel',
  templateUrl: './ordre-professionnel.component.html',
  styleUrls: ['./ordre-professionnel.component.css']
})
export class OrdreProfessionnelComponent implements OnInit {


  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private ordreProfessionnelService:OrdreProfessionnelService,
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
    this.ordreProfessionnelService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/AttestationPrecisant'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
