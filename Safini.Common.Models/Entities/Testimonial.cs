namespace Safini.Common.Models.Entities
{
	public class Testimonial : BaseEntity
	{
		public string Author { get; set; }

		public string Text { get; set; }

		public string AuthorImagePath { get; set; }
	}
}