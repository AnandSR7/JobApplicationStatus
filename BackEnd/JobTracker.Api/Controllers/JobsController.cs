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

    [HttpPost]
    public IActionResult AddJob(JobApplication job)
    {
        Jobs.Add(job);
        return Ok(job);
    }
}
