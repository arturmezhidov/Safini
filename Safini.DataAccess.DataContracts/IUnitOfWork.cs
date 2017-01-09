namespace Safini.DataAccess.DataContracts
{
	public interface IUnitOfWork : System.IDisposable
	{
        IRepository<TEntity> GetRepository<TEntity>() where TEntity : class;

        void Save();
	}
}