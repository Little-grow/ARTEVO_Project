namespace ARTEVO_Tests
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using api.Controllers.Users;
    using api.Models;
    using api.Models.Users;
    using api.Repo;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http.HttpResults;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Moq;

    public class ArtistsControllerTests
    {


        [Fact]
        public void GetAllArtists_ShouldReturnOk_WhenArtistsExist()
        {
            // Arrange
            var mockRepo = new Mock<IArtistsRepository>();
            var mockData = new List<Artist>()
            {
                new Artist{ UserName = "Test", Name = "Test" },
                new Artist{ UserName = "Test2", Name = "Test2" }
            }; // Sample artist data

            mockRepo.Setup(repo => repo.GetAllArtists()).Returns(mockData); // Return sample data

            var controller = new ArtistsController(mockRepo.Object); // Inject the mock

            // Act
            var actionResult = controller.AllArtists();

            // Assert
            Assert.IsType<OkObjectResult>(actionResult);
            var okResult = actionResult as OkObjectResult;
            Assert.NotNull(okResult);

            var artists = okResult.Value as IEnumerable<Artist>;
            Assert.Equal(2, artists?.Count()); // Assert the number of returned artists
        }

        [Fact]
        public void GetAllArtists_ShouldReturnNotFound_WhenNoArtistsExist()
        {
            // Arrange
            var mockRepo = new Mock<IArtistsRepository>();


            // mockRepo.Setup(null!); // Return empty data
            mockRepo.Setup(repo => repo.GetAllArtists()).Returns<IEnumerable<Artist>>(null!); // Return null

            var controller = new ArtistsController(mockRepo.Object); // Inject the mock

            // Act
            var actionResult = controller.AllArtists();

            // Assert
            Assert.IsType<NotFoundResult>(actionResult);
        }


    }

}