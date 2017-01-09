using System;

namespace Safini.Common.Models.Entities
{
	public class Callback : BaseEntity
	{
		public string CustomerName { get; set; }

		public string Phone { get; set; }

		public bool IsApprove { get; set; }

		public DateTime ApprovedDate { get; set; }

		public DateTime CreatedDate { get; set; }
	}
}