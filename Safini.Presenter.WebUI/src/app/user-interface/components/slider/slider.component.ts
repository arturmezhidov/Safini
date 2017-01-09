import { Component, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Subscription } from "rxjs";
import { SliderList } from './slider-list.component';
import { Slide } from '../../../common/entities/Slide';

@Component({
    selector: 'slider',
    directives: [
        SliderList
    ],
    templateUrl: '/src/app/user-interface/components/slider/slider.template.html'
})
export class Slider implements AfterViewInit, OnDestroy {

    @Input() interval: number;
    @ViewChild(SliderList) list: SliderList;

    private slides: Array<Slide>;
    private defaultInterval: number;
    private subscription: Subscription;

    constructor() {
        this.defaultInterval = 5000;
        let slide1 = new Slide();
        slide1.imagePath = "/src/resources/images/slider/slide1.png";
        let slide2 = new Slide();
        slide2.imagePath = "/src/resources/images/slider/slide2.png";
        let slide3 = new Slide();
        slide3.imagePath = "/src/resources/images/slider/slide3.png";
        this.slides = [slide1, slide2, slide3];
    }

    start(): void {
        this.interval = this.interval || this.defaultInterval;
        this.list.reset();
        let timer = TimerObservable.create(0, this.interval);
        this.subscription = timer.subscribe(() => {
            this.list.next();
        });
    }

    stop(): void {
        if (!this.subscription.isUnsubscribed) {
            this.subscription.unsubscribe();
        }
    }

    ngAfterViewInit() {
        this.start();
    }

    ngOnDestroy() {
        this.stop();
    }
}