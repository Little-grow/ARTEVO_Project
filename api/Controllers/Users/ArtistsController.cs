﻿using api.Controllers.Portoflios;
using api.Models;
using api.Models.Dto.PortofliosDto;
using api.Models.Dto.Users;
using api.Models.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ArtistsController(AppDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
            _context = context;
        }

        [HttpGet("profile")]
        public async Task<IActionResult> ViewProfile(int ArtistId)
        {
            var artist = await _context.Artists
                     //.Include(a => a.Portoflio)
                     .FirstOrDefaultAsync(a => a.Id == ArtistId);

            if (artist is null)
            {
                return NotFound();
            }

            return Ok(artist);
        }

        [HttpPut("profile")]
        public async Task<IActionResult> EditProfile(int ArtistId, [FromBody] ArtistDto artistDto)
        {
            var artist = await _context.Artists
                .FirstOrDefaultAsync(a => a.Id == ArtistId);

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

            _context.Artists.Update(artist);
            await _context.SaveChangesAsync();

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
        public async Task<IActionResult> AllArtists()
        {
            var artists = await _context.Artists.ToListAsync();
            return artists is null ? NotFound() : Ok(artists);
        }
            

        public async Task<IActionResult> FollowArtist(int ArtistId, int UserId)
        {
            // implement this function 
            var artist = await _context.Artists.FirstOrDefaultAsync(a => a.Id == ArtistId);

            if (artist is null)
            {
                return NotFound();
            }

            var user = await _context.Artists.FirstOrDefaultAsync(u => u.Id == UserId);

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
