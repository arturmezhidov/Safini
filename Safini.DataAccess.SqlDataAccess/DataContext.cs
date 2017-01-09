using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using Safini.Common.Models.Entities;

namespace Safini.DataAccess.SqlDataAccess
{
	public class DataContext : IdentityDbContext<User>
	{
		public virtual DbSet<Category> Categories { get; set; }

		public virtual DbSet<Furniture> Furnitures { get; set; }

		public virtual DbSet<Attribute> Attributes { get; set; }

		public virtual DbSet<Currency> Currencies { get; set; }

		public virtual DbSet<Price> Prices { get; set; }

		public virtual DbSet<NewsCategory> NewsCategories { get; set; }

		public virtual DbSet<News> News { get; set; }

		public virtual DbSet<Slide> Slides { get; set; }

		public virtual DbSet<Setting> Settings { get; set; }

		public virtual DbSet<Service> Services { get; set; }

		public virtual DbSet<Feedback> Feedbacks { get; set; }

		public virtual DbSet<Testimonial> Testimonials { get; set; }

		public DataContext(string connectionString) : base(connectionString)
		{
		}

        static DataContext()
        {
            Database.SetInitializer(new DataContextInitializer());
        }
    }
}