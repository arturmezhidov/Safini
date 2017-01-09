using System.Collections.Generic;

namespace Safini.Common.Models.Entities
{
	public class NewsCategory : BaseEntity, IOrderable
	{
		public string Title { get; set; }

		public string Description { get; set; }

		public int OrderNumber { get; set; }

		public virtual ICollection<News> News { get; set; } = new HashSet<News>();
	}
}