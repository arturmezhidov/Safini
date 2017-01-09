using System;
using System.Linq;
using System.Linq.Expressions;

namespace Safini.DataAccess.DataContracts
{
	public interface IRepository<TEntity>
	{
		TEntity Create(TEntity entity);

		TEntity Update(TEntity entity);

		TEntity Delete(TEntity entity);

		TEntity GetById(object id);

		IQueryable<TEntity> GetAll();

		IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
	}
}