import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Slide } from "../../../common/entities/Slide"

@Component({
    selector: 'slide',
    animations: [
        trigger('toggling', [
            state('active', style({ opacity: 1 })),
            state('inactive', style({ opacity: 0 })),
            transition('inactive => active', animate('2s ease-in')),
            transition('active => inactive', animate('1.5s ease-out'))
        ])
    ],
    templateUrl: '/src/app/user-interface/components/slider/slider-item.template.html'
})

export class SliderItem {

    state: string;

    @Input() slide: Slide;

    constructor() {
        this.state = "inactive";
    }

    activate(): void {
        this.state = "active";
    }

    disactivate(): void {
        this.state = "inactive";
    }

    toggle(): void {
        this.state = (this.state == "active") ? "inactive" : "active";
    }
}