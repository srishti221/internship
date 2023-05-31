using Microsoft.AspNetCore.Authentication;
using System.ComponentModel.DataAnnotations;

namespace Internship_mgmt.Models
{
    public class Resume
    {
        [Key]
        public  int Sno { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Course { get; set; }
        public string College { get; set; }
        public string Skills { get; set; }
    }
}
