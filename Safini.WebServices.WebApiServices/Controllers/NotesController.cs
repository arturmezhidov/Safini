using System.Linq;
using System.Web.Http;
using Safini.WebServices.WebApiServices.Models;

namespace Safini.WebServices.WebApiServices.Controllers
{
    public class NotesController : ApiController
    {
		[HttpGet]
	    public IHttpActionResult Get()
		{
			return Ok(Cash.Notes);
		}

		[HttpGet]
		public IHttpActionResult Get(int id)
		{
			return Ok(Cash.Notes.FirstOrDefault(i => i.id == id));
		}

		[HttpPost]
		public IHttpActionResult Create(Note note)
		{
			note.id = Cash.Notes.Count == 0 ? 0 : Cash.Notes.Max(i => i.id) + 1;

			Cash.Notes.Add(note);

			return Ok(note);
		}

		[HttpPut]
		public IHttpActionResult Update(Note note)
		{
			if (note == null)
			{
				return BadRequest();
			}

			var tmp = Cash.Notes.FirstOrDefault(i => i.id == note.id);

			if (tmp == null)
			{
				return BadRequest();
			}

			tmp.color = note.color;
			tmp.title = note.title;
			tmp.value = note.value;

			return Ok(tmp);
		}

		[HttpDelete]
		public IHttpActionResult Delete(int id)
		{
			var note = Cash.Notes.FirstOrDefault(i => i.id == id);

			if (note == null)
			{
				return BadRequest();
			}

			Cash.Notes.Remove(note);

			return Ok(Cash.Notes);
		}
	}
}
