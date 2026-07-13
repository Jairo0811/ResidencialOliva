using EdificiosOliva.Domain.Common;

namespace EdificiosOliva.Domain.Entities;

public sealed class ApartmentImage : BaseEntity
{
    public Guid ApartmentId { get; set; }

    public string Url { get; set; } = string.Empty;

    public string PublicId { get; set; } = string.Empty;

    public bool IsCover { get; set; }

    public int SortOrder { get; set; }

    public Apartment Apartment { get; set; } = null!;
}