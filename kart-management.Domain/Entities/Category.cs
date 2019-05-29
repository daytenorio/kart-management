using System;
using System.Collections.Generic;
using System.Text;

namespace kart_management.Domain.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Pilot> Pilot { get; set; }
    }
}
