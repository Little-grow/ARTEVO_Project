using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers.Store
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoreController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StoreController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("store")]
        public async Task<IActionResult> GetStore(int Page, int PageSize = 3)
        {
            var products = await _context.PortoflioMedia
                                 .Skip((Page - 1) * PageSize)
                                 .Take(PageSize)
                                 .Where(p => p.ForSale == true)
                                 .ToListAsync();

            return Ok(products);
        }


    }
}
