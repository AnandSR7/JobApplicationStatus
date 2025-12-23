using System.ComponentModel.DataAnnotations;

namespace JobTracker.Api.Models;

public enum JobStatus
{
    Applied,
    Interview,
    Offer,
    Rejected
}

public class JobApplication
{
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(100)]
    public required string Company { get; set; }

    [Required]
    [MaxLength(100)]
    public required string Role { get; set; }

    [Required]
    public JobStatus Status { get; set; }

    [MaxLength(500)]
    public string? Notes { get; set; }

    public DateTime AppliedDate { get; set; } = DateTime.UtcNow;
}
