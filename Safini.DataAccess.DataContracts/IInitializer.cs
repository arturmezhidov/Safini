using System.Collections.Generic;

namespace Safini.DataAccess.DataContracts
{
    public interface IInitializer<out TEntity> where TEntity : class
    {
        IEnumerable<TEntity> Get();
    }
}