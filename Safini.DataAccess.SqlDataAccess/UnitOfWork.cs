using System;
using System.Collections.Generic;
using System.Data.Entity;
using Safini.DataAccess.DataContracts;

namespace Safini.DataAccess.SqlDataAccess
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly DbContext context;
	    private readonly Dictionary<string, object> repositories;
		private bool disposed;

		public UnitOfWork(string connectionString)
		{
            context = new DataContext(connectionString);
            repositories = new Dictionary<string, object>();
        }

		public void Save()
		{
			context.SaveChanges();
		}

		public IRepository<TEntity> GetRepository<TEntity>() where TEntity : class
		{
		    string key = typeof(TEntity).Name;

		    if (!repositories.ContainsKey(key))
		    {
                IRepository<TEntity> newRepository = new Repository<TEntity>(context);
                repositories.Add(key, newRepository);
            }

            IRepository<TEntity> repository = (IRepository<TEntity>)repositories[key];
            return repository;
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		protected virtual void Dispose(bool disposing)
		{
			if (!disposed)
			{
				if (disposing)
				{
					context.Dispose();
				}
				disposed = true;
			}
		}
	}
}