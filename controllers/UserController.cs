using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using project_me.Models;
using project_me.Data;
using Newtonsoft.Json;

namespace project_me.controllers
{
    [Route("api/users")]
    public class UserController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            IUserRepository rep = new SqLiteUserRepository();
            long last_id = rep.SaveUser(user);
            if(last_id is 0)
            {
                string response = "user exist";
                return Json(response);
            }
            else
            {
                string response = $"user created with id {last_id}";
                return Json(response);
            }
        }
        [HttpGet]
        public IActionResult GetUsersFrom() {
            IUserRepository rep = new SqLiteUserRepository();
            List<User> allusers = rep.GetUsersFrom();
            string data = JsonConvert.SerializeObject(allusers);
            return Json(data);
        }
    }
}