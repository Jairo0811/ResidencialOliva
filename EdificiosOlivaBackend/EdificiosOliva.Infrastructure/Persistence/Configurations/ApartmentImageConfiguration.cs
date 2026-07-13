using EdificiosOliva.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EdificiosOliva.Infrastructure.Persistence.Configurations;

public sealed class ApartmentImageConfiguration
    : IEntityTypeConfiguration<ApartmentImage>
{
    public void Configure(EntityTypeBuilder<ApartmentImage> builder)
    {
        builder.ToTable("ApartmentImages");

        builder.HasKey(image => image.Id);

        builder.Property(image => image.Url)
            .HasMaxLength(1000)
            .IsRequired();

        builder.Property(image => image.PublicId)
            .HasMaxLength(300)
            .IsRequired();

        builder.HasIndex(image => new
        {
            image.ApartmentId,
            image.SortOrder
        })
        .IsUnique();
    }
}