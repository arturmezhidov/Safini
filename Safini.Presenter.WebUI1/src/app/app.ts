import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Navbar } from './ui/common';

@Component({
    selector: 'app',
    directives: [
        Navbar,
        ROUTER_DIRECTIVES
    ],
    templateUrl: '/src/app/app.html'
})
export class App {

}