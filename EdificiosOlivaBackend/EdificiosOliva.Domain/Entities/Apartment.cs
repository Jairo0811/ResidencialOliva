using EdificiosOliva.Domain.Common;
using EdificiosOliva.Domain.Enums;

namespace EdificiosOliva.Domain.Entities;

public sealed class Apartment : BaseEntity
{
    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public decimal PricePerNight { get; set; }

    public int GuestCapacity { get; set; }

    public int Bedrooms { get; set; }

    public int Bathrooms { get; set; }

    public string Location { get; set; } = string.Empty;

    public ApartmentStatus Status { get; set; } = ApartmentStatus.Available;

    public ICollection<ApartmentImage> Images { get; set; } = [];

    public ICollection<ApartmentAmenity> ApartmentAmenities { get; set; } = [];
}