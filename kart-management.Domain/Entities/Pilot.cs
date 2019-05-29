using System;

namespace kart_management.Domain.Entities
{
    public class Pilot
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public Category Category { get; set; }
    }
}
