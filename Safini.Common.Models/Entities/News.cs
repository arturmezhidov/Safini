using System;
using System.Collections.Generic;

namespace Safini.Common.Models.Entities
{
	public class News : BaseEntity
	{
		public string Title { get; set; }

		public string Label { get; set; }

		public string HtmlContent { get; set; }

		public string ImagePath { get; set; }

		public DateTime CreatedDate { get; set; }

		public virtual NewsCategory Category { get; set; }

		public virtual ICollection<NewsComment> Comments { get; set; } = new HashSet<NewsComment>();
	}
}