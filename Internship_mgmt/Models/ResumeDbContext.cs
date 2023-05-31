using Microsoft.EntityFrameworkCore;

namespace Internship_mgmt.Models
{
    public class ResumeDbContext : DbContext
    {
        public ResumeDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Resume> Resume { get; set; }

       // public DbSet<Resume> LogIn { get; set; }

       // public DbSet<Register> Register { get; set; }  
    }
}
