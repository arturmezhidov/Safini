﻿import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Note {
    color: string,
    title: string,
    value: string,
    id?: string | number,
    createdAt?: string,
    updatedAt?: string,
    userId?: string
}

export interface State {
    notes: Array<Note>,
    user: {}
}

const defaultState = {
    notes: [],
    user: {}
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private _store = _store;
    changes = this._store.asObservable().distinctUntilChanged()

    setState(state: State) {
        this._store.next(state);
        console.log('set state', state);
    }

    getState(): State {
        console.log('get state', this._store.value);
        return this._store.value;
    }

    purge() {
        console.log('purge');
        this._store.next(defaultState);
    }
}