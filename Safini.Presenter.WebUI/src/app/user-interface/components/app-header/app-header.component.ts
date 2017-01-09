import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-header',
    directives: [
        ...ROUTER_DIRECTIVES
    ],
    templateUrl: '/src/app/user-interface/components/app-header/app-header.template.html'
})

export class AppHeader {

    constructor() {

    }

}