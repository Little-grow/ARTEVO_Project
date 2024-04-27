using api.Models.Users;
using api.Models;

namespace api.Repo
{
    public class ArtistsRepository : IArtistsRepository
    {
        private readonly AppDbContext _context;

        public ArtistsRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Artist?> GetAllArtists()
        {
            return _context.Artists;
        }

        public async Task<Artist?> GetArtistById(int id)
        {
            return await _context.Artists.FindAsync(id);
        }

        public async Task UpdateArtistAsync(Artist artist)
        {
            _context.Update(artist);
            await _context.SaveChangesAsync();
        }
    }

}
