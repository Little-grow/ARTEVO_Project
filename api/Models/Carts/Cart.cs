using api.Models.Portoflios;
using api.Models.Users;

namespace api.Models.Carts
{
    public class Cart
    {
        public int Id { get; set; }

        public int ArtistId { get; set; }
        public required List<PortoflioMedia> Items { get; set; }
        public int TotalAmount { get; set; }
    }
}
