namespace EdificiosOliva.Domain.Entities;

public sealed class ApartmentAmenity
{
    public Guid ApartmentId { get; set; }

    public Guid AmenityId { get; set; }

    public Apartment Apartment { get; set; } = null!;

    public Amenity Amenity { get; set; } = null!;
}