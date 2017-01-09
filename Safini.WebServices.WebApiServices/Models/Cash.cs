using System.Collections.Generic;

namespace Safini.WebServices.WebApiServices.Models
{
	public static class Cash
	{
		public static List<Note> Notes = new List<Note>();

		static Cash()
		{
			Notes.Add(new Note
			{
				id = 1,
				color = "lightblue",
				title = "title",
				value = "value"
			});
		}
	}
}