using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using project_me.Models;
using project_me.Data;
using Newtonsoft.Json;
using System.Diagnostics;
using NLog;
using NLog.Targets;
using NLog.Config;
using Microsoft.Extensions.Logging;

namespace project_me.controllers
{

    [Route("/api/cities")]
    public class CityController : Controller
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        [HttpPost]
        public IActionResult Post([FromBody] UserId userId)
        {
            logger.Debug("city controller receive {0}", userId.Id);
            ICityRepository crp = new SqLiteCityRepository();
            List<City> granted_cities = crp.GetCitiesByUserId(userId.Id);
            string data = JsonConvert.SerializeObject(granted_cities);
            return Json(data); 
        }
    }
}