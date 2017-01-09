using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using Safini.DataAccess.DataContracts;

namespace Safini.DataAccess.SqlDataAccess
{
	public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
	{
		protected readonly DbContext Context;
		protected readonly DbSet<TEntity> Items;

		public Repository(DbContext context)
		{
			Context = context;
			Items = context.Set<TEntity>();
		}

		public virtual TEntity Create(TEntity entity)
		{
			Items.Add(entity);
			return entity;
		}

		public virtual TEntity Update(TEntity entity)
		{
			Context.Entry(entity).State = EntityState.Modified;
			return entity;
		}

		public virtual TEntity Delete(TEntity entity)
		{
			Items.Remove(entity);
			return entity;
		}

		public virtual TEntity GetById(object id)
		{
			TEntity result = Items.Find(id);
			return result;
		}

		public virtual IQueryable<TEntity> GetAll()
		{
			IQueryable<TEntity> items = Items.AsNoTracking();
			return items;
		}

		public virtual IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
		{
			IQueryable<TEntity> result = Items.AsNoTracking().Where(predicate);
			return result;
		}
	}
}