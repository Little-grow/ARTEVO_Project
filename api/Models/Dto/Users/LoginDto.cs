using System.ComponentModel.DataAnnotations;

namespace api.Models.Dto.Users
{
    public class TokenRequestDto
    {
        [EmailAddress]
        public required string Email { get; set; }

        public required string Password { get; set; }
    }
}