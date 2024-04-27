namespace ARTEVO_Tests
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using api.Controllers.Users;
    using api.Models;
    using api.Models.Users;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Moq; 

    public class ArtistsControllerTests
    {
        [Fact]
        public  void GetAllArtists_ShouldReturnOk_WhenArtistsExist()
        {
            // Arrange
            var mockContext = new Mock<AppDbContext>(); 
          
            var expectedArtists = new List<Artist>() { new Artist { Id = 1, Name = "Test Artist", UserName = "Test Artist" } };
           
            mockContext.Setup(context => context.Artists.ToList()).Returns(expectedArtists);
           
            var controller = new ArtistsController(mockContext.Object);

            // Act
            var actionResult = controller.AllArtists();

            // Assert
            var okObjectResult = actionResult as OkObjectResult;
            Assert.NotNull(okObjectResult);
            Assert.Equal(200, okObjectResult.StatusCode);
            var artists = okObjectResult.Value as List<Artist>;
            Assert.NotNull(artists);
            Assert.Equal(expectedArtists, artists);
        }

        [Fact]
        public void GetAllArtists_ShouldReturnNotFound_WhenNoArtistsExist()
        {
            // Arrange
            var mockContext = new Mock<AppDbContext>();
            mockContext.Setup(context => context.Artists.ToList()).Returns(Enumerable.Empty<Artist>().ToList());

            var controller = new ArtistsController(mockContext.Object);

            // Act
            var actionResult = controller.AllArtists();

            // Assert
            Assert.IsType<NotFoundResult>(actionResult);
        }

        public static class MockData
        {
            public static IEnumerable<T> Empty<T>()
            {
                return Enumerable.Empty<T>();
            }
        }


    }

}