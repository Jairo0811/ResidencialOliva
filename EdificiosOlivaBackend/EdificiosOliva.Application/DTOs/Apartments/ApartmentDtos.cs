using System.ComponentModel.DataAnnotations;
using EdificiosOliva.Domain.Enums;

namespace EdificiosOliva.Application.DTOs.Apartments;

public sealed record ApartmentResponse(
    Guid Id,
    string Name,
    string Description,
    decimal PricePerNight,
    int GuestCapacity,
    int Bedrooms,
    int Bathrooms,
    string Location,
    ApartmentStatus Status,
    DateTime CreatedAtUtc,
    DateTime? UpdatedAtUtc);

public sealed class CreateApartmentRequest
{
    [Required, StringLength(150)]
    public string Name { get; init; } = string.Empty;

    [Required, StringLength(2000)]
    public string Description { get; init; } = string.Empty;

    [Range(0.01, double.MaxValue)]
    public decimal PricePerNight { get; init; }

    [Range(1, 50)]
    public int GuestCapacity { get; init; }

    [Range(0, 20)]
    public int Bedrooms { get; init; }

    [Range(0, 20)]
    public int Bathrooms { get; init; }

    [Required, StringLength(250)]
    public string Location { get; init; } = string.Empty;

    public ApartmentStatus Status { get; init; } = ApartmentStatus.Available;
}

public sealed class UpdateApartmentRequest
{
    [Required, StringLength(150)]
    public string Name { get; init; } = string.Empty;

    [Required, StringLength(2000)]
    public string Description { get; init; } = string.Empty;

    [Range(0.01, double.MaxValue)]
    public decimal PricePerNight { get; init; }

    [Range(1, 50)]
    public int GuestCapacity { get; init; }

    [Range(0, 20)]
    public int Bedrooms { get; init; }

    [Range(0, 20)]
    public int Bathrooms { get; init; }

    [Required, StringLength(250)]
    public string Location { get; init; } = string.Empty;

    public ApartmentStatus Status { get; init; }
}
