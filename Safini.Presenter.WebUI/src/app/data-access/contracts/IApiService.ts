import { Observable } from 'rxjs/Observable';
import { BaseEntity } from '../../common/entities';

export interface IApiService<TEntity extends BaseEntity> {
    getAll(): Observable<Array<TEntity>>;
    getById(entityId: any): Observable<TEntity>;
    create(entity: TEntity): Observable<TEntity>;
    update(entity: TEntity): Observable<TEntity>;
    delete(entity: TEntity): Observable<TEntity>;
}