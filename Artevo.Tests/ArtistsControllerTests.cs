using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace Artevo.Tests
{
    [TestClass]
    public class ArtistsControllerTests
    {
        [TestMethod]
        public void TestMethod1()
        {
            [Fact]
            public async Task GetAllArtists_ShouldReturnOk_WhenArtistsExist()
            {
                // Arrange
                var mockContext = new Mock<AppDbContext>();
                var expectedArtists = new List<Artist>() { new Artist { Id = 1, Name = "Test Artist" } };
                mockContext.Setup(context => context.Artists.ToListAsync()).Returns(Task.FromResult(expectedArtists));
                var controller = new ArtistsController(mockContext.Object);

                // Act
                var actionResult = await controller.AllArtists();

                // Assert
                var okObjectResult = actionResult as OkObjectResult;
                Assert.NotNull(okObjectResult);
                Assert.Equal(200, okObjectResult.StatusCode);
                var artists = okObjectResult.Value as List<Artist>;
                Assert.NotNull(artists);
                Assert.Equal(expectedArtists, artists);
            }

            [Fact]
            public async Task GetAllArtists_ShouldReturnNotFound_WhenNoArtistsExist()
            {
                // Arrange
                var mockContext = new Mock<AppDbContext>();
                mockContext.Setup(context => context.Artists.ToListAsync()).Returns(Task.FromResult(Enumerable.Empty<Artist>()));
                var controller = new ArtistsController(mockContext.Object);

                // Act
                var actionResult = await controller.AllArtists();

                // Assert
                Assert.IsType<NotFoundResult>(actionResult);
            }
        }
    }
}
