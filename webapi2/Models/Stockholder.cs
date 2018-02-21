using System;
namespace webapi2.Models
{
    public class Stockholder
    {

        public long Id { get; set; }
        public string Name { get; set; }
        public string Percent { get; set; }


        public Stockholder()
        {
        }
    }
}
