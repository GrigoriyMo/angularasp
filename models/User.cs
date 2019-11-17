using System;
using System.Collections;
using System.Collections.Generic;

namespace project_me.Models
{
    public class User
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public List <string> Cities { get; set; }
    }
}