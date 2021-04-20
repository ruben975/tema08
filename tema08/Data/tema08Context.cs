using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using tema08.Model;

namespace tema08.Data
{
    public class tema08Context : DbContext
    {
        public tema08Context (DbContextOptions<tema08Context> options)
            : base(options)
        {
        }

        public DbSet<tema08.Model.Movie> Movie { get; set; }
    }
}
