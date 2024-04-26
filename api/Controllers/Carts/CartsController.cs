using api.Controllers.Portoflios;
using api.Models.Carts;
using api.Models.Portoflios;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers.Carts
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;


        public CartsController(AppDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpPost]
        public async Task<IActionResult> AddToCart(int ItemId, int ArtistId, int? CartId)
        {
            var product = await _context.PortoflioMedia.FirstOrDefaultAsync(i => i.Id == ItemId);

            if (product is null)
            {
                return NotFound();
            }

            var cart = _context.Carts.Include(c => c.Items).FirstOrDefault(c => c.Id == CartId);
            if (cart is null)
            {
                cart = new Cart
                {
                    ArtistId = ArtistId,
                    Items = new List<PortoflioMedia>(),
                    TotalAmount = 0
                };

                await _context.Carts.AddAsync(cart);
                await _context.SaveChangesAsync();
            }

            cart.Items.Add(product);
            cart.TotalAmount += product.Price;

            _context.Carts.Update(cart);
            await _context.SaveChangesAsync();

            return Ok();
        }
 
        [HttpDelete("DeleteCart")]
        public async Task<IActionResult> DeleteCart(int CartId)
        {

            var cart = await _context.Carts.FirstOrDefaultAsync(c => c.Id == CartId);
                
            if (cart is null)
            {
                return NotFound();
            }

            var mediacontroller = new MediaController(_context, _webHostEnvironment);

            // if the items has been Purchased
            foreach (var item in cart.Items)
            {
                await mediacontroller.DeleteFile(item.Id);
            }

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("Getcart")]
        public async Task<IActionResult> Getcart(int CartId)
        {

            var cart = await _context.Carts.FirstOrDefaultAsync(c => c.Id == CartId);

            if (cart is null)
            {
                return NotFound();
            }

            var Items = cart.Items.ToList();
            return Ok(Items);
        }
    }
}
