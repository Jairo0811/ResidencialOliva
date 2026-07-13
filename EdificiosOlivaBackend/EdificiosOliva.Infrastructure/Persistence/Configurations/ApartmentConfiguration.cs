using EdificiosOliva.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EdificiosOliva.Infrastructure.Persistence.Configurations;

public sealed class ApartmentConfiguration
    : IEntityTypeConfiguration<Apartment>
{
    public void Configure(EntityTypeBuilder<Apartment> builder)
    {
        builder.ToTable("Apartments");

        builder.HasKey(apartment => apartment.Id);

        builder.Property(apartment => apartment.Name)
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(apartment => apartment.Description)
            .HasMaxLength(2000)
            .IsRequired();

        builder.Property(apartment => apartment.PricePerNight)
            .HasPrecision(18, 2);

        builder.Property(apartment => apartment.Location)
            .HasMaxLength(250)
            .IsRequired();

        builder.Property(apartment => apartment.Status)
            .HasConversion<int>();

        builder.HasMany(apartment => apartment.Images)
            .WithOne(image => image.Apartment)
            .HasForeignKey(image => image.ApartmentId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}