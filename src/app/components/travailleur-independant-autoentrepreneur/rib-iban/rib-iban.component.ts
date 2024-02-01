import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-organisme-formation';
import { RibIbanService } from 'src/app/services/travailleur-independant-autoentrepreneur/rib-iban.service';

@Component({
  selector: 'app-rib-iban',
  templateUrl: './rib-iban.component.html',
  styleUrls: ['./rib-iban.component.css']
})
export class RibIbanComponent implements OnInit {


  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private ribIbanService:RibIbanService,
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
    this.ribIbanService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/OrdreProfessionnel'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
