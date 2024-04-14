import { Component } from '@angular/core';
import { Step } from '../model/step.interface';
import { STEPS_DATA } from '../data/steps-data';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';

@Component({
	selector: 'app-stepper',
	standalone: true,
	imports: [Step1Component, Step2Component, Step3Component, Step4Component],
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.sass'
})
export class StepperComponent {

	private readonly _steps!: Step[];
	private _activeStep!: number;

	constructor() {
		this._steps = STEPS_DATA;
		this._activeStep = 1;
	}

	public get steps(): Step[] {
		return this._steps;
	}

	public get activeStep(): number {
		return this._activeStep;
	}
	
}
