using api.Models;
using Microsoft.AspNetCore.Mvc;
using api.Models.Dto.Users;
using api.Services;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers.Users.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly AppDbContext _context;

        public AuthController(IAuthService authService, AppDbContext context)
        {
            _authService = authService;
            _context = context;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] TokenRequestDto model)
        {

            var user = await _context.Artists
                .FirstOrDefaultAsync(x => x.Email == model.Email && x.Password == model.Password);

            if (user is null)
            {
                return Unauthorized();
            }

            var token = await _authService.GetTokenAsync(model);
            return Ok(token);
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _context.Artists.AnyAsync(x => x.Email == model.Email))
            {
                return BadRequest("Email already in use");
            }

            var token = await _authService.Register(model);
            return Ok(token);
        }
    }
}
