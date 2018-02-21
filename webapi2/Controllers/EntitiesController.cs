using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using webapi2.Models;


namespace webapi2.Controllers
{
    [Route("api/[controller]")]
    public class EntitiesController : Controller
    {
        readonly EntityContext _context;

        public EntitiesController(EntityContext context)
        {
            _context = context;

            if (_context.Entities.Count() == 0)
            {
                List<Stockholder> list_stockholders = new List<Stockholder>();
                list_stockholders.Add(new Stockholder{Name="Tony", Percent="75"});

                List<Director> list_directors = new List<Director>();
                list_directors.Add(new Director { Name = "Jhonny", Role = "CEO" });

                _context.Entities.Add(new Entity
                {
                    Name = "Java shop",
                    Is_ = true,
                    Activities = "LoremIpsum",
                    DateCreation = "2017",
                    DateFinal = "2019",
                    Stockholders = list_stockholders,
                    Directors = list_directors
                });


                _context.Entities.Add(new Entity  {
                    Name = "Chicory",
                    Is_ = true,
                    Activities = "LoremIpsum",
                    DateCreation = "2017",
                    DateFinal = "2019",
                    Stockholders = list_stockholders,
                    Directors = list_directors
                });

                _context.Entities.Add(new Entity  {
                    Name = "aromatic americano mazagran",
                    Is_ = true,
                    Activities = "LoremIpsum",
                    DateCreation = "2017",
                    DateFinal = "2019",
                    Stockholders = list_stockholders,
                    Directors = list_directors
                });

                _context.SaveChanges();
            }
        }  




        // GET api/entities
        [HttpGet]
        public IEnumerable<Entity> Get()
        {
            //return new string[] { "value1", "value2" };
            return _context.Entities.ToList();
        }

        // GET api/entities/5
        [HttpGet("{id}", Name = "GetEntity")]
        public IActionResult Get(long id)
        {

            var item = _context.Entities.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
}

        // POST api/entities
        [HttpPost]
        public IActionResult Post([FromBody] Entity item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.Entities.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetEntity", new { id = item.Id }, item);
        }

        // PUT api/entities/5
        [HttpPut("{id}")] //modify
        public IActionResult Put(long id, [FromBody] Entity item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            var entity = _context.Entities.FirstOrDefault(t => t.Id == id);
            if (entity == null)
            {
                return NotFound();
            }

            entity.Is_ = item.Is_;
            entity.Name = item.Name;
            //etc

            _context.Entities.Update(entity);
            _context.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/entities/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var entity = _context.Entities.FirstOrDefault(t => t.Id == id);
            if (entity == null)
            {
                return NotFound();
            }

            _context.Entities.Remove(entity);
            _context.SaveChanges();
            return new NoContentResult();
        }
    }
}
