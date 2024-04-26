using api.Models.Dto.Users;
using Microsoft.AspNetCore.Mvc;

namespace api.Services
{
    public interface IAuthService
    {
        Task<string> Register(RegisterDto model);
        Task<string> GetTokenAsync(TokenRequestDto model);
    }
}
