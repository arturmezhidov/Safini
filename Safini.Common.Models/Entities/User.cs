using System.Collections.Generic;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Safini.Common.Models.Entities
{
	public class User : IdentityUser
	{
		public virtual ICollection<NewsComment> Comments { get; set; } = new HashSet<NewsComment>();
	}
}