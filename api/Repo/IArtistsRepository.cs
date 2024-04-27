using api.Models.Users;

namespace api.Repo
{
    public interface IArtistsRepository
    {
        IEnumerable<Artist?> GetAllArtists();

        Task<Artist?> GetArtistById(int id);

        Task UpdateArtistAsync(Artist artist);
    }
}
