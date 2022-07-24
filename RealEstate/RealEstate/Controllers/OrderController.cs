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
    public class OrderController : ControllerBase
    {
        RealEstateDbContext db = new RealEstateDbContext();
        [HttpGet]
        public List<TblOrder> Get()
        {
            return db.TblOrders.ToList();
        }



        [HttpPost]
        public string Post([FromBody] TblOrder order)
        {

            db.TblOrders.Add(order);
            db.SaveChanges();
            return "success";
        }

       
        


    }
}
