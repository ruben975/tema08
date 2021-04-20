using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tema08.Model
{
    public class Movie
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public int ReleaseYear { get; set; }
    }
}
