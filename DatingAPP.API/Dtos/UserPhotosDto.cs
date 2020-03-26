using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingAPP.API.Dtos
{
    public class UserPhotosDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }
        public bool IsMain { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
