using System.Collections.Generic;

namespace Safini.Common.Models.Entities
{
	public class Category : BaseEntity, IOrderable
	{
		public string Title { get; set; }

		public string Description { get; set; }

		public string IconPath { get; set; }

		public int OrderNumber { get; set; }

		public virtual ICollection<Furniture> Furnitures { get; set; } = new HashSet<Furniture>();
	}
}