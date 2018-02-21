using System;
using System.Collections.Generic;
using System.Linq;
namespace webapi2.Models
{
    public class Entity
    {

        public long Id { get; set; }
        public string Name { get; set; }
        public bool Is_ { get; set; }
        public string Activities { get; set; }
        public string DateCreation { get; set; }
        public string DateFinal { get; set; }

        public List<Stockholder> Stockholders { get; set; }
        public List<Director> Directors { get; set; }


        public Entity()
        {
        }
    }
}
