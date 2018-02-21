using Microsoft.EntityFrameworkCore;

namespace webapi2.Models
{
    public class EntityContext: DbContext
    {
        public EntityContext(DbContextOptions<EntityContext> options)
            : base(options)
        {
        }

        public DbSet<Entity> Entities { get; set; }
    }
}


