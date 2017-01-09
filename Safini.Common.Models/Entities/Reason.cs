namespace Safini.Common.Models.Entities
{
	public class Reason : BaseEntity, IOrderable
	{
		public string Head { get; set; }

		public string Text { get; set; }

		public int OrderNumber { get; set; }
	}
}
