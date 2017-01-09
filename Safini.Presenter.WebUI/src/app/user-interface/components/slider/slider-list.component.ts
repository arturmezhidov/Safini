import { Component, ViewChildren, QueryList, Input, AfterViewInit } from '@angular/core';
import { SliderItem } from './slider-item.component'
import { Slide } from "../../../common/entities/Slide";

@Component({
    selector: 'slider-list',
    directives: [
        SliderItem
    ],
    templateUrl: '/src/app/user-interface/components/slider/slider-list.template.html'
})
export class SliderList implements AfterViewInit {

    @Input() slides: Array<Slide>;
    @ViewChildren(SliderItem) children: QueryList<SliderItem>;

    private currentIndex: number;
    private viewSlides: Array<SliderItem>;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.currentIndex = -1;
    }

    next(): void {
        this.disactivateByIndex(this.currentIndex);
        this.currentIndex++;
        if (this.currentIndex >= this.viewSlides.length) {
            this.currentIndex = 0;
        }
        this.activateByIndex(this.currentIndex);
    }

    last(): void {
        this.disactivateByIndex(this.currentIndex);
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.viewSlides.length - 1;
        }
        this.activateByIndex(this.currentIndex);
    }

    activateByIndex(index: number): void {
        if (0 <= index && index < this.viewSlides.length) {
            this.viewSlides[index].activate();
        }
    }

    disactivateByIndex(index: number): void {
        if (0 <= index && index < this.viewSlides.length) {
            this.viewSlides[index].disactivate();
        }
    }

    ngAfterViewInit() {
        this.viewSlides = this.children == null
            ? []
            : this.children.toArray();
    }
}