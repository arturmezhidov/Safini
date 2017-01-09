using System.Collections.Generic;
using System.Data.Entity;
using Safini.DataAccess.DataContracts;
using Safini.DataAccess.DefaultData;

namespace Safini.DataAccess.SqlDataAccess
{
    internal class DataContextInitializer : CreateDatabaseIfNotExists<DataContext>
    {
        protected DataContext Context;

        protected override void Seed(DataContext db)
        {
            Context = db;
            Init();
        }

        protected virtual void Init()
        {
            setData(new SlideInitializer());
        }

        private void setData<TEntity>(IInitializer<TEntity> initializer) where TEntity : class
        {
            DbSet<TEntity> dbSet = Context.Set<TEntity>();

            if (dbSet != null)
            {
                IEnumerable<TEntity> items = initializer.Get();
                dbSet.AddRange(items);
            }
        }
    }
}
