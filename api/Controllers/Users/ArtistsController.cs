using api.Controllers.Portoflios;
using api.Models;
using api.Models.Dto.PortofliosDto;
using api.Models.Dto.Users;
using api.Models.Users;
using api.Repo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly IArtistsRepository _repo;

        public ArtistsController(IArtistsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("profile")]
        public async Task<IActionResult> ViewProfile(int ArtistId)
        {
            var artist = _repo.GetArtistById(ArtistId);
            if (artist is null)
            {
                return NotFound();
            }

            return Ok(artist);
        }

        [HttpPut("profile")]
        public async Task<IActionResult> EditProfile(int ArtistId, [FromBody] ArtistDto artistDto)
        {
            var artist =await _repo.GetArtistById(ArtistId);

            if (artist is null)
            {
                return NotFound();
            }

            artist.Name = artistDto.Name;
            artist.Bio = artistDto.Bio;
            artist.Facebook = artistDto.Facebook;
            artist.Twitter = artistDto.Twitter;
            artist.Email = artistDto.Email;
            artist.PhoneNumber = artistDto.PhoneNumber;

            await _repo.UpdateArtistAsync(artist);

            return NoContent();
        }

        // just for testing
        //[HttpPost("Artist")]
        //public async Task<IActionResult> AddArtist(ArtistDto artistDto)
        //{
        //    var artist = new Artist
        //    {
        //        Bio = artistDto.Bio,
        //        Email = artistDto.Email,

        //        Facebook = artistDto.Facebook,
        //        Name = artistDto.Name,

        //        UserName = artistDto.UserName,

        //        PhoneNumber = artistDto.PhoneNumber,
        //        Twitter = artistDto.Twitter
        //    };

        //    _context.Artists.Add(artist);
        //    await _context.SaveChangesAsync();
        //    return Created();
        //}

        [HttpGet("AllArtists")]
        public IActionResult AllArtists()
        {
            var artists = _repo.GetAllArtists();
            return artists is null ? NotFound() : Ok(artists);
        }

        [HttpPost("FollowArtist")]
        public async Task<IActionResult> FollowArtist(int ArtistId, int UserId)
        {
            var artist = await _repo.GetArtistById(ArtistId);

            if (artist is null)
            {
                return NotFound();
            }

            var user = await _repo.GetArtistById(UserId);

            if (user is null)
            {
                return NotFound();
            }


            artist.FollowersArray![++artist.Followers] = user.Id;
            user.FollowingArray![++user.Following] = artist.Id;

            return Ok();
        }
    }
}
