using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RealEstate.Models;
using RealEstate.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        RealEstateDbContext db = new RealEstateDbContext();
        [HttpGet]
        public List<OrderTbl> Get()
        {
            return db.OrderTbls.ToList();
        }


        [HttpPost]
        public IActionResult Post([FromBody] OrderTbl order)
        {

            db.OrderTbls.Add(order);
            db.SaveChanges();
            return Ok();
        }




    }
}
