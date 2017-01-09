import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppHeader, Navbar, Slider } from './user-interface/components';

@Component({
    selector: 'app',
    directives: [
        AppHeader,
        Navbar,
        Slider,
        ROUTER_DIRECTIVES
    ],
    templateUrl: '/src/app/app.html'
})
export class App {

}