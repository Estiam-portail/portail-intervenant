import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultatsService } from 'src/app/services/resultats.service';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto'


import { CandidatService } from 'src/app/services/candidat.service';
@Component({
    selector: 'app-resultat',
    templateUrl: './resultat.component.html',
    styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
    constructor(public resultService: ResultatsService, public candidatService: CandidatService) { }



    ngOnInit(): void {
        var chart = new Chart('myChart', {
            type: 'radar',
            data: {
                labels: ['CE', 'EE', 'CO', 'Calcul', 'EO', 'REspace', 'RTemps', 'Numerique'],
                datasets: [{
                    label: ' la presentation des notes !',
                    data: [this.resultService.CE,
                    this.resultService.EE,
                    this.resultService.CO,
                    this.resultService.Calcul,
                    this.resultService.EO,
                    this.resultService.REspace,
                    this.resultService.RTemps,
                    this.resultService.Numerique],
                    backgroundColor: '#a9d7c8',
                    borderColor: 'red',
                    borderWidth: 1,
                    fill: true,
                },
                {
                    label:' ' ,
                    data: [
                        
                    ].reverse(),
                    backgroundColor: '#a9d7c8',
                    borderColor: 'red',
                    borderWidth: 1,
                    fill: true,
                }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}
