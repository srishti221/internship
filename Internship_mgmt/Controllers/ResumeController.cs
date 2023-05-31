using Internship_mgmt.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Web;
using System.Net.Http;
using Microsoft.EntityFrameworkCore;

namespace Internship_mgmt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResumeController : ControllerBase
    {
        private readonly ResumeDbContext _resumeDbContext;

        public ResumeController(ResumeDbContext resumeDbContext)
        {
            _resumeDbContext = resumeDbContext;
        }

        [HttpGet]
        [Route("GetResume")]
        public async Task <IEnumerable<Resume>> GetResumes()
        {
            return await _resumeDbContext.Resume.ToListAsync();
        }
       /* public ActionResult<Resume> GetResume()
        {
            string query = "select Sno,Name,Age,Course,College,Skills from dbo.dummy";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InternshipmgmtCon");
            // SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, mycon))
                {
                    // myReader = myCommand.ExecuteReader();
                    // table.Load(myReader);
                    //myReader.Close();
                    mycon.Close();
                }
            } */

            // Request.CreateResponse(HttpStatusCode.OK,query);
            //return Request.CreateResponse(HttpStatusCode.OK);

        /*public List<Resume> GetResume()
        {
            var query = @"Select Sno,Name,Age,Course,College,Skills from dbo.dummy";
                        
                        
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InternshipmgmtCon");
            // SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, mycon))
                {
                    // myReader = myCommand.ExecuteReader();
                    // table.Load(myReader);
                    //myReader.Close();
                    mycon.Close();
                }

            }

            return new List<Resume>();



        }
        [HttpPost]
        public List <Resume> Post(Resume r )
        {
            var query = @"Insert into dbo.dummy values ('" + r.Name +@"' ,'" + r.Age+ @"', '" + r.Course+@"','" + r.College+@"','" + r.Skills+@"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InternshipmgmtCon");
            // SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, mycon))
                {
                    // myReader = myCommand.ExecuteReader();
                    // table.Load(myReader);
                    //myReader.Close();
                    mycon.Close();
                }

            }

            return new List<Resume> { r };
            
        }

        [HttpPut]

        public List<Resume> Put(Resume r)
        {
            string query = @"Update dbo.dummy set Name='" + r.Name + @"', Age= '" + r.Age + @"',Course = '" + r.Course + @"', College='" + r.College + @"',Skills='" + r.Skills + @"' where Sno='" + r.Sno + "'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InternshipmgmtCon");
            // SqlDataReader myReader;
            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, mycon))
                {
                    // myReader = myCommand.ExecuteReader();
                    // table.Load(myReader);
                    //myReader.Close();
                    mycon.Close();
                }

            }

            return new List<Resume> { r };

        }*/


           

    }   
}
