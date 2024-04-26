
using api.Models.Portoflios;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models.Users
{
    public class Artist : IUser
    {
        public int Id { get; set; }

        public Guid Uid { get; set; } = Guid.NewGuid();

        public required string Name { get; set; } 

        public required string UserName { get; set; }

        [NotMapped]
        public IFormFile? Image { get; set; }

        public Portoflio? Portoflio { get; set; }
        public string Bio { get;  set; } = "";
        public Uri? Facebook { get;  set; }
        public Uri? Twitter { get;  set; }

        [EmailAddress]
        public string Email { get;  set; } = "";
        [Phone]
        public string PhoneNumber { get;  set; } = "";
     
        public int Followers { get; set; }
        public int Following { get; set; }

        public int[] FollowersArray { get; set; }
        public int[] FollowingArray { get; set; }

        public bool IsVerified { get; set; }

        public string Password { get; set; }

        public string PasswordHash { get; set; }
    }
}
