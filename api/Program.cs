using api.Models;
using api.Models.Helpers;
using api.Repo;
using api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
    options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
});

var connectionString = builder.Configuration["ConnectionStrings:DefaultConnection"];
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

var jwtOptions = builder.Services.Configure<Jwt>(builder.Configuration.GetSection("Jwt"));
builder.Services.AddSingleton(jwtOptions);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["JWT:Key"]!)),
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:Audience"],
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero 
    };
});

builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IArtistsRepository, ArtistsRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();
