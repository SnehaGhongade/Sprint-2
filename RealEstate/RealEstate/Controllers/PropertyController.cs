using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RealEstate.Models;
using Microsoft.AspNetCore.Http;
using RealEstate.ViewModels;

namespace RealEstate.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        RealEstateDbContext db = new RealEstateDbContext();
        [HttpGet]
        public List<TblProperty> Get()
        {
            return db.TblProperties.ToList();
        }


        [HttpPost]
        public string Post([FromBody] TblProperty property)
        {

            db.TblProperties.Add(property);
            db.SaveChanges();
            return "success";
        }

        [HttpPost]
        [Route("ApproveProperty")]
        public IActionResult ApproveProperty([FromBody] ApproveViewModel approveViewModel)
        {
            var data = db.TblVenderProperties.Where(x => x.Id == approveViewModel.Id).FirstOrDefault();
            data.IsApproved = 1;
            db.TblVenderProperties.Update(data);
            db.SaveChanges();
            var tblproperty = new TblProperty();
            tblproperty.PropertyDescription = data.PropertyDescription;
            tblproperty.PropertyName = data.PropertyName;
            tblproperty.PropertySize = data.PropertySize;
            tblproperty.PropertyImage = data.PropertyImage;
            tblproperty.Propertylocation = data.Propertylocation;
            tblproperty.PropertyPrice = data.PropertyPrice;
            tblproperty.Discount = data.Discount;
            db.TblProperties.Add(tblproperty);
            db.SaveChanges();
            return Ok();
        }
        [HttpPut]
        public string Put([FromBody] TblProperty tblpropty)
        {

            var tblsampleObj = db.TblProperties.Where(x => x.Id == tblpropty.Id);
            if (tblsampleObj != null)
            {
                db.TblProperties.Update(tblpropty);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }

        [HttpDelete]
        public string Delete([FromBody] int Id)
        {

            var tblsampleObj = db.TblProperties.Where(x => x.Id == Id).FirstOrDefault();
            if (tblsampleObj != null)
            {
                db.TblProperties.Remove(tblsampleObj);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }


    }
}