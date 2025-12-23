using Microsoft.AspNetCore.Mvc;
using JobTracker.Api.Models;

namespace JobTracker.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JobsController : ControllerBase
{
    private static readonly List<JobApplication> Jobs = new();

    [HttpGet]
    public IActionResult GetJobs()
    {
        return Ok(Jobs);
    }

     [HttpGet("{id}")]
    public IActionResult GetJobDetails(Guid id)
    {
        var job = Jobs.FirstOrDefault(j => j.Id == id);
        if (job == null)
        {
            return NotFound();
        }
        return Ok(job);
    }

    [HttpPost]
    public IActionResult AddJob([FromBody]JobApplication job)
    {
        Jobs.Add(job);
        return Ok(job);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteJob(Guid id)
    {
        var job = Jobs.FirstOrDefault(j => j.Id == id);
        if (job == null)
        {
            return NotFound();
        }
        Jobs.Remove(job);
        return NoContent();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateJob(Guid id, [FromBody] JobApplication updatedJob)
    {
        var job = Jobs.FirstOrDefault(j => j.Id == id);
        if (job == null)
        {
            return NotFound();
        }

        job.Company = updatedJob.Company;
        job.Role = updatedJob.Role;
        job.Status = updatedJob.Status;
        job.Notes = updatedJob.Notes;
        job.AppliedDate = updatedJob.AppliedDate;

        return Ok(job);
    }
}
