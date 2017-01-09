using System.Collections.Generic;
using Safini.Common.Models.Entities;

namespace Safini.DataAccess.DefaultData
{
    public class SlideInitializer : BaseInitializer<Slide>
    {
        protected override IEnumerable<Slide> GetEntities()
        {
            List<Slide> slides = new List<Slide>
            {
                new Slide
                {
                    Title = "World-renowned expertise, developed over three centuries.",
                    ImagePath = "/src/resources/images/slider/slide1.png",
                    OrderNumber = 1,
                    IsDeleted = false,
                    IsShow = true
                },
                                new Slide
                {
                    Title = "World-renowned expertise, developed over three centuries.",
                    ImagePath = "/src/resources/images/slider/slide2.png",
                    OrderNumber = 1,
                    IsDeleted = false,
                    IsShow = true
                },
                                                new Slide
                {
                    Title = "World-renowned expertise, developed over three centuries.",
                    ImagePath = "/src/resources/images/slider/slide3.png",
                    OrderNumber = 1,
                    IsDeleted = false,
                    IsShow = true
                }
            };

            return slides;
        }
    }
}
