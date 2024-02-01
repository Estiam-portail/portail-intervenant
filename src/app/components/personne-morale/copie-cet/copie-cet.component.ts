import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../models/file-upload-copie-cet';
import { Router } from '@angular/router';
import { CopieCetService } from 'src/app/services/personne-morale/copie-cet.service';
@Component({
  selector: 'app-copie-cet',
  templateUrl: './copie-cet.component.html',
  styleUrls: ['./copie-cet.component.css']
})
export class CopieCetComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private copieCet: CopieCetService
    , private router: Router
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
    this.copieCet.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
        if(percentage == 100){
          this.router.navigate(['AttestationAssuranceRC'])
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
