using System;

namespace Safini.Common.Models.Entities
{
	public class Feedback : BaseEntity
	{
		public string UserName { get; set; }

		public string Contacts { get; set; }

		public string Message { get; set; }

		public DateTime CreatedDate { get; set; }

		public bool IsApprove { get; set; }

		public DateTime ApprovedDate { get; set; }
	}
}