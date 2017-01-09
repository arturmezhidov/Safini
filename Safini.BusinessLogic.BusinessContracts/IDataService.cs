using System;
using System.Linq;
using System.Linq.Expressions;

namespace Safini.BusinessLogic.BusinessContracts
{
    public interface IDataService<TEntity> : IDisposable
    {
        TEntity Create(TEntity entity);

        TEntity Update(TEntity entity);

        TEntity Delete(TEntity entity);

        TEntity DeleteFromDb(TEntity entity);

        TEntity GetById(object id);

        TEntity GetByIdWithDeleted(object id);

        IQueryable<TEntity> GetAll();

        IQueryable<TEntity> GetAllWithDeleted();

        IQueryable<TEntity> GetAllDeleted();

        IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
    }
}
