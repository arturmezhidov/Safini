import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navbar-item',
    directives: [
        ...ROUTER_DIRECTIVES
    ],
    templateUrl: '/src/app/user-interface/components/navbar/navbar-item.template.html'
})
export class NavbarItem {

    @Input() link: Array<string>;
    @Input() text: string;
    @Input() isActive: boolean;

    @Output() selected = new EventEmitter<NavbarItem>();

    onSelected(): void {
        this.selected.next(this);
    }

    activate(): void {
        this.isActive = true;
    }

    disactivate(): void {
        this.isActive = false;
    }
}