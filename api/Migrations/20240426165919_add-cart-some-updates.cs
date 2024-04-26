using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class addcartsomeupdates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PortoflioMedia_Artists_ArtistId",
                table: "PortoflioMedia");

            migrationBuilder.DropForeignKey(
                name: "FK_PortoflioMedia_Portoflios_PortoflioId",
                table: "PortoflioMedia");

            migrationBuilder.RenameColumn(
                name: "NumberOfFollowing",
                table: "Artists",
                newName: "Following");

            migrationBuilder.RenameColumn(
                name: "NumberOfFollowers",
                table: "Artists",
                newName: "Followers");

            migrationBuilder.AlterColumn<int>(
                name: "PortoflioId",
                table: "PortoflioMedia",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ArtistId",
                table: "PortoflioMedia",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "CartId",
                table: "PortoflioMedia",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Reviews",
                table: "PortoflioMedia",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Stars",
                table: "PortoflioMedia",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "PortoflioMedia",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "Uid",
                table: "Artists",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "Carts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtistId = table.Column<int>(type: "int", nullable: false),
                    TotalAmount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carts", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PortoflioMedia_CartId",
                table: "PortoflioMedia",
                column: "CartId");

            migrationBuilder.AddForeignKey(
                name: "FK_PortoflioMedia_Artists_ArtistId",
                table: "PortoflioMedia",
                column: "ArtistId",
                principalTable: "Artists",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PortoflioMedia_Carts_CartId",
                table: "PortoflioMedia",
                column: "CartId",
                principalTable: "Carts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PortoflioMedia_Portoflios_PortoflioId",
                table: "PortoflioMedia",
                column: "PortoflioId",
                principalTable: "Portoflios",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PortoflioMedia_Artists_ArtistId",
                table: "PortoflioMedia");

            migrationBuilder.DropForeignKey(
                name: "FK_PortoflioMedia_Carts_CartId",
                table: "PortoflioMedia");

            migrationBuilder.DropForeignKey(
                name: "FK_PortoflioMedia_Portoflios_PortoflioId",
                table: "PortoflioMedia");

            migrationBuilder.DropTable(
                name: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_PortoflioMedia_CartId",
                table: "PortoflioMedia");

            migrationBuilder.DropColumn(
                name: "CartId",
                table: "PortoflioMedia");

            migrationBuilder.DropColumn(
                name: "Reviews",
                table: "PortoflioMedia");

            migrationBuilder.DropColumn(
                name: "Stars",
                table: "PortoflioMedia");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "PortoflioMedia");

            migrationBuilder.DropColumn(
                name: "Uid",
                table: "Artists");

            migrationBuilder.RenameColumn(
                name: "Following",
                table: "Artists",
                newName: "NumberOfFollowing");

            migrationBuilder.RenameColumn(
                name: "Followers",
                table: "Artists",
                newName: "NumberOfFollowers");

            migrationBuilder.AlterColumn<int>(
                name: "PortoflioId",
                table: "PortoflioMedia",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ArtistId",
                table: "PortoflioMedia",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PortoflioMedia_Artists_ArtistId",
                table: "PortoflioMedia",
                column: "ArtistId",
                principalTable: "Artists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PortoflioMedia_Portoflios_PortoflioId",
                table: "PortoflioMedia",
                column: "PortoflioId",
                principalTable: "Portoflios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
