import { Component, OnInit ,ViewChild} from '@angular/core';
import SignaturePad from 'signature_pad';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-generate-contract',
  templateUrl: './generate-contract.component.html',
  styleUrls: ['./generate-contract.component.css']
})
export class GenerateContractComponent implements OnInit {
  title = 'Signature Pad by Rajesh Gami';
  signPad: any;
  @ViewChild('signPadCanvas', {static: false}) signaturePadElement:any;
  signImage:any;

  constructor() { }

  ngOnInit(): void {
  }



  onTelechargeContrat(){
    let DATA: any = document.getElementById('container');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      console.log("canvas taille : ", canvas.height);
      
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;

      PDF.setFontSize(40);
      // PDF.output('datauri');
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
 
      PDF.save('Estiam-contrat.pdf');
      
    });
  }


  OnsignatureContrat(){
    let canvas = document.getElementById("signature")
  }









  // *************************************    signature function **********************************




  ngAfterViewInit() {
    this.signPad = new SignaturePad(this.signaturePadElement.nativeElement);
  }
  /*It's work in devices*/
  startSignPadDrawing(event: Event) {
    console.log(event);
  }
  /*It's work in devices*/
  movedFinger(event: Event) {
  }
  /*Undo last step from the signature*/
  undoSign() {
    const data = this.signPad.toData();
    if (data) {
      data.pop(); // remove the last step
      this.signPad.fromData(data);
    }
  }
  /*Clean whole the signature*/
  clearSignPad() {
    this.signPad.clear();
  }
  /*Here you can save the signature as a Image*/
  saveSignPad() {
    const base64ImageData = this.signPad.toDataURL();
    this.signImage = base64ImageData;
    //Here you can save your signature image using your API call.
  }












  // fin signature function *********************************************************

}
