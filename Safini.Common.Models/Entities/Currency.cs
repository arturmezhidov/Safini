using System;
using System.Collections.Generic;

namespace Safini.Common.Models.Entities
{
	public class Currency : BaseEntity
	{
		public string Name { get; set; }

		public string ShortName { get; set; }

		public double Rate { get; set; }

		public DateTime RateLastUpdateDate { get; set; }

		public virtual ICollection<Price> Prices { get; set; } = new HashSet<Price>();
	}
}