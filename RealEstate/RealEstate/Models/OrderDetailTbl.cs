using System;
using System.Collections.Generic;

#nullable disable

namespace RealEstate.Models
{
    public partial class OrderDetailTbl
    {
        public int Id { get; set; }
        public string HouseName { get; set; }
        public string HouseDescription { get; set; }
        public int? OrderId { get; set; }
        public string VendorName { get; set; }
        public string VendorEmail { get; set; }
        public decimal? HousePrize { get; set; }
    }
}
