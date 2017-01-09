using System;

namespace Safini.Common.Models.Entities
{
	public class NewsComment : BaseEntity
	{
		public string Message { get; set; }

		public DateTime CreatedDate { get; set; }

		public virtual User User { get; set; }

		public virtual News News { get; set; }
	}
}