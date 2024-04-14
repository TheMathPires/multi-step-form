import { Step } from "../model/step.interface";

export const STEPS_DATA = [
    { 
        label: 'Your info',
        isActive: false,
        isCompleted: false        
    },
    { 
        label: 'Select plan',
        isActive: false,
        isCompleted: false
    },
    { 
        label: 'Add-ons',
        isActive: false,
        isCompleted: false
    },
    { 
        label: 'Summary',
        isActive: false,
        isCompleted: false
    }
] as Step[];