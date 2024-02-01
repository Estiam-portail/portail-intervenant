import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectEmploisService } from 'src/app/services/offre-emplois/select-emplois.service';

@Component({
  selector: 'app-save-emplois',
  templateUrl: './save-emplois.component.html',
  styleUrls: ['./save-emplois.component.css']
})
export class SaveEmploisComponent implements OnInit {
  snapForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private se:SelectEmploisService) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
        title: [null],
        datesModel: [null],
        description: [null],
        duree: [null],
        programme: [null],
    });
}


onSubmitForm() {
  console.log(this.snapForm.value);
  this.se.saveEmplois(this.snapForm.value).then(() => {
    console.log('Created new item successfully!');
  });
}

}
