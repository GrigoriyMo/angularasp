using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace project_me.controllers 
{
    [Route("api/methods")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            string[] methods = { "GetUsersPage", "GetAvailCity","CreateAccount" };
            return Json(methods);
        }
    }
    
}