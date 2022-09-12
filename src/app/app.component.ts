import { Component } from '@angular/core';

import { CalcType } from 'pro-connection-services';

import { faProjectDiagram, faChartLine, faBullseye, faUnlock, faSpinner, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-prot-component-library-example';
  
  faProjectDiagram = faProjectDiagram;
  faChartLine = faChartLine;
  faBullseye = faBullseye;
  faUnlock = faUnlock;
  faSpinner = faSpinner;
  faArrowAltCircleDown = faArrowAltCircleDown;

  calcType = CalcType;
  value: number = 0;

  eingangNumber = 1;

  itemLabel1:string = $localize`Eingang ${this.eingangNumber}`;

  itemLablesM019:Array<string> = [
    $localize`Einzelsensor`,
    $localize`Durschnittswert`
  ]

  itemLablesMO230:Array<string> = [
    $localize`Aus`,
    $localize`Schließer`,
    $localize`Öffner`
  ]

  itemLablesMO130:Array<string> = [
    $localize`ausschalten`, 
    $localize`auf Minimum Dimm`
  ]

  constructor(){}
  
}
