using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RealEstate.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class orderbooking : ControllerBase
    {
        RealEstateDbContext db = new RealEstateDbContext();
        [HttpGet]
        public List<Orderbooking> Get()
        {
            return db.Orderbookings.ToList();
        }


        [HttpPost]
        public string Post([FromBody] Orderbooking order)
        {

            db.Orderbookings.Add(order);
            db.SaveChanges();
            return "success";
        }
    }
}
