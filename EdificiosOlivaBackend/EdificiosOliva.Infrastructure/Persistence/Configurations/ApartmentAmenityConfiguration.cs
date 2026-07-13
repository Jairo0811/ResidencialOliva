using EdificiosOliva.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EdificiosOliva.Infrastructure.Persistence.Configurations;

public sealed class ApartmentAmenityConfiguration
    : IEntityTypeConfiguration<ApartmentAmenity>
{
    public void Configure(EntityTypeBuilder<ApartmentAmenity> builder)
    {
        builder.ToTable("ApartmentAmenities");

        builder.HasKey(item => new
        {
            item.ApartmentId,
            item.AmenityId
        });

        builder.HasOne(item => item.Apartment)
            .WithMany(apartment => apartment.ApartmentAmenities)
            .HasForeignKey(item => item.ApartmentId);

        builder.HasOne(item => item.Amenity)
            .WithMany(amenity => amenity.ApartmentAmenities)
            .HasForeignKey(item => item.AmenityId);
    }
}