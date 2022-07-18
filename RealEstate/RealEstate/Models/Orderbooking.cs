using System;
using System.Collections.Generic;

#nullable disable

namespace RealEstate.Models
{
    public partial class Orderbooking
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
    }
}
