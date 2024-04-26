using api.Models;
using api.Models.Dto.Users;
using api.Models.Helpers;
using api.Models.Users;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace api.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;
        public AuthService(AppDbContext context, IConfiguration config)
        {
            _config = config;
            _context = context;
        }

        public async Task<string> GetTokenAsync(TokenRequestDto model)
        {
            var user = await _context.Artists.FirstOrDefaultAsync(x => x.Email == model.Email);

            if (user is null || !BCrypt.Net.BCrypt.Verify(model.Password, user.PasswordHash))
            {
                return null!;
            } 
            
            var token = GenerateJwtToken(model);
            return token;
        }

        public async Task<string> Register(RegisterDto model)
        {
            // Hash the password using a secure algorithm (e.g., bcrypt)
            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(model.Password);

            var user = new Artist
            {
                Email = model.Email,
                UserName = model.UserName,
                Name = model.UserName,
                Password = model.Password,
                PasswordHash = hashedPassword
            };

            await _context.Artists.AddAsync(user);
            await _context.SaveChangesAsync();

            var tokenRequestDto = new TokenRequestDto { Email = model.Email, Password = model.Password };

            // Generate a JWT token with appropriate claims
            var token = GenerateJwtToken(tokenRequestDto);

            return token;
        }

        private string GenerateJwtToken(TokenRequestDto user)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
            var credientials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                 new Claim(ClaimTypes.Email, user.Email),
            };

            var expires = DateTime.Now.AddDays(60);
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Issuer"],
                claims: claims,
                expires: expires,
                signingCredentials: credientials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
