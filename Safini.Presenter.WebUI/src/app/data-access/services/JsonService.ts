import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { IApiService } from '../contracts/IApiService';
import { BaseEntity } from '../../common/entities';

export class JsonService<TEntity extends BaseEntity> implements IApiService<TEntity> {

    private baseUrl: string;
    private http: Http;
    private headers: Headers;

    constructor(baseUrl: string, http: Http) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.headers = new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    }

    getAll(): Observable<TEntity[]> {
        let result: Observable<TEntity[]> = this.http.get(this.baseUrl, { headers: this.headers })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map<TEntity[]>(this.getJson);
        return result;
    }

    getById(entityId): Observable<TEntity> {
        let result: Observable<TEntity> = this.http.get(`${this.baseUrl}/${entityId}`, { headers: this.headers })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map<TEntity>(this.getJson);
        return result;
    }

    create(entity: TEntity): Observable<TEntity> {
        let result: Observable<TEntity> = this.http.post(this.baseUrl, JSON.stringify(entity), { headers: this.headers })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map<TEntity>(this.getJson)
        return result;
    }

    update(entity: TEntity): Observable<TEntity> {
        let result: Observable<TEntity> = this.http.put(this.baseUrl, JSON.stringify(entity), { headers: this.headers })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map<TEntity>(this.getJson)
        return result;
    }

    delete(entity: TEntity): Observable<TEntity> {
        let result: Observable<TEntity> = this.http.delete(`${this.baseUrl}${entity.id}`, { headers: this.headers })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map<TEntity>(this.getJson);
        return result;
    }

    private getJson(response: Response) {
        return response.json();
    }

    private checkForError(response: Response): Response {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText)
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }
}