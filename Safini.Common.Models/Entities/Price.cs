using System;

namespace Safini.Common.Models.Entities
{
	public class Price : BaseEntity
	{
		public double Value { get; set; }

		public double NewValue { get; set; }

		public bool IsNewvalue { get; set; }

		public DateTime LastUpdateDate { get; set; }

		public virtual Currency Currency { get; set; }

		public virtual Furniture Furniture { get; set; }
	}
}