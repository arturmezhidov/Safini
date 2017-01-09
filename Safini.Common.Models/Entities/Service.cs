namespace Safini.Common.Models.Entities
{
	public class Service : BaseEntity, IOrderable
	{
		public string Title { get; set; }

		public string Description { get; set; }

		public string IconPath { get; set; }

		public int OrderNumber { get; set; }

		public ServiceType Type { get; set; }
	}
}