namespace Safini.Common.Models.Entities
{
	public class Slide : BaseEntity, IOrderable
	{
		public string Title { get; set; }

		public string ImagePath { get; set; }

		public bool IsShow { get; set; }

		public int OrderNumber { get; set; }
	}
}