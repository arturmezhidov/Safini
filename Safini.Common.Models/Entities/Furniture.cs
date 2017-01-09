using System.Collections.Generic;

namespace Safini.Common.Models.Entities
{
	public class Furniture : BaseEntity, IOrderable
	{
		public string Name { get; set; }

		public string Description { get; set; }

		public string ImagePath { get; set; }

		public int OrderNumber { get; set; }

		public bool IsNew { get; set; }

		public bool IsShow { get; set; }

		public bool IsShowPrice { get; set; }

		public virtual ICollection<Attribute> Attributes { get; set; } = new HashSet<Attribute>();

		public virtual ICollection<Price> Prices { get; set; } = new HashSet<Price>();
	}
}