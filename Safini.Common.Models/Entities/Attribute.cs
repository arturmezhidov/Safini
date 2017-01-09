namespace Safini.Common.Models.Entities
{
	public class Attribute : BaseEntity, IOrderable
	{
		public string Name { get; set; }

		public string Value { get; set; }

		public int OrderNumber { get; set; }

		public virtual Furniture Furniture { get; set; }
	}
}