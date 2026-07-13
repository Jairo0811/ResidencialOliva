using EdificiosOliva.Domain.Common;

namespace EdificiosOliva.Domain.Entities;

public sealed class Amenity : BaseEntity
{
    public string Name { get; set; } = string.Empty;

    public ICollection<ApartmentAmenity> ApartmentAmenities { get; set; } = [];
}