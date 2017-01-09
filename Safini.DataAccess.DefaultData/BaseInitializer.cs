using System.Collections.Generic;
using Safini.DataAccess.DataContracts;

namespace Safini.DataAccess.DefaultData
{
    public abstract class BaseInitializer<TEntity> : IInitializer<TEntity> where TEntity : class
    {
        private IEnumerable<TEntity> entities;

        protected abstract IEnumerable<TEntity> GetEntities();

        public IEnumerable<TEntity> Get()
        {
            if (entities == null)
            {
                entities = GetEntities();
            }

            return entities;
        }
    }
}