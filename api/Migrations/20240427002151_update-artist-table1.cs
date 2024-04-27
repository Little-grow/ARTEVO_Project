using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class updateartisttable1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Portoflios_ArtistId",
                table: "Portoflios");

            migrationBuilder.CreateIndex(
                name: "IX_Portoflios_ArtistId",
                table: "Portoflios",
                column: "ArtistId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Portoflios_ArtistId",
                table: "Portoflios");

            migrationBuilder.CreateIndex(
                name: "IX_Portoflios_ArtistId",
                table: "Portoflios",
                column: "ArtistId",
                unique: true);
        }
    }
}
