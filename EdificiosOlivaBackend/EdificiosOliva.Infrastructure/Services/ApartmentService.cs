using EdificiosOliva.Application.DTOs.Apartments;
using EdificiosOliva.Application.Interfaces;
using EdificiosOliva.Domain.Entities;
using EdificiosOliva.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace EdificiosOliva.Infrastructure.Services;

public sealed class ApartmentService(ApplicationDbContext dbContext) : IApartmentService
{
    public async Task<IReadOnlyList<ApartmentResponse>> GetAllAsync(
        CancellationToken cancellationToken = default)
    {
        return await dbContext.Apartments
            .AsNoTracking()
            .Where(apartment => !apartment.IsDeleted)
            .OrderBy(apartment => apartment.Name)
            .Select(apartment => Map(apartment))
            .ToListAsync(cancellationToken);
    }

    public async Task<ApartmentResponse?> GetByIdAsync(
        Guid id,
        CancellationToken cancellationToken = default)
    {
        return await dbContext.Apartments
            .AsNoTracking()
            .Where(apartment => apartment.Id == id && !apartment.IsDeleted)
            .Select(apartment => Map(apartment))
            .SingleOrDefaultAsync(cancellationToken);
    }

    public async Task<ApartmentResponse> CreateAsync(
        CreateApartmentRequest request,
        CancellationToken cancellationToken = default)
    {
        var apartment = new Apartment
        {
            Name = request.Name.Trim(),
            Description = request.Description.Trim(),
            PricePerNight = request.PricePerNight,
            GuestCapacity = request.GuestCapacity,
            Bedrooms = request.Bedrooms,
            Bathrooms = request.Bathrooms,
            Location = request.Location.Trim(),
            Status = request.Status
        };

        dbContext.Apartments.Add(apartment);
        await dbContext.SaveChangesAsync(cancellationToken);

        return Map(apartment);
    }

    public async Task<bool> UpdateAsync(
        Guid id,
        UpdateApartmentRequest request,
        CancellationToken cancellationToken = default)
    {
        var apartment = await dbContext.Apartments
            .SingleOrDefaultAsync(
                item => item.Id == id && !item.IsDeleted,
                cancellationToken);

        if (apartment is null)
        {
            return false;
        }

        apartment.Name = request.Name.Trim();
        apartment.Description = request.Description.Trim();
        apartment.PricePerNight = request.PricePerNight;
        apartment.GuestCapacity = request.GuestCapacity;
        apartment.Bedrooms = request.Bedrooms;
        apartment.Bathrooms = request.Bathrooms;
        apartment.Location = request.Location.Trim();
        apartment.Status = request.Status;
        apartment.UpdatedAtUtc = DateTime.UtcNow;

        await dbContext.SaveChangesAsync(cancellationToken);
        return true;
    }

    public async Task<bool> DeleteAsync(
        Guid id,
        CancellationToken cancellationToken = default)
    {
        var apartment = await dbContext.Apartments
            .SingleOrDefaultAsync(
                item => item.Id == id && !item.IsDeleted,
                cancellationToken);

        if (apartment is null)
        {
            return false;
        }

        apartment.IsDeleted = true;
        apartment.UpdatedAtUtc = DateTime.UtcNow;

        await dbContext.SaveChangesAsync(cancellationToken);
        return true;
    }

    private static ApartmentResponse Map(Apartment apartment) =>
        new(
            apartment.Id,
            apartment.Name,
            apartment.Description,
            apartment.PricePerNight,
            apartment.GuestCapacity,
            apartment.Bedrooms,
            apartment.Bathrooms,
            apartment.Location,
            apartment.Status,
            apartment.CreatedAtUtc,
            apartment.UpdatedAtUtc);
}
