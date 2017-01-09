import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navbar',
    directives: [
        ...ROUTER_DIRECTIVES
    ],
    templateUrl: '/src/app/user-interface/components/navbar/navbar.template.html'
})

export class Navbar {

    constructor() {

    }

}