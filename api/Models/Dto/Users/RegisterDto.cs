using System.ComponentModel.DataAnnotations;

namespace api.Models.Dto.Users
{
    public class RegisterDto
    {

        public required string UserName { get; set; }

        [EmailAddress]
        public required string Email { get; set; }

        public required string Password { get; set; }
    }
}