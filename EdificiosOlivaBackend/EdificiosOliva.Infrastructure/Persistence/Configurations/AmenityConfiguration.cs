using EdificiosOliva.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EdificiosOliva.Infrastructure.Persistence.Configurations;

public sealed class AmenityConfiguration
    : IEntityTypeConfiguration<Amenity>
{
    public void Configure(EntityTypeBuilder<Amenity> builder)
    {
        builder.ToTable("Amenities");

        builder.HasKey(amenity => amenity.Id);

        builder.Property(amenity => amenity.Name)
            .HasMaxLength(100)
            .IsRequired();

        builder.HasIndex(amenity => amenity.Name)
            .IsUnique();
    }
}