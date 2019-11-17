using System.Collections.Generic;
using project_me.Models;

namespace project_me.Data
{
    public interface ICityRepository
    {
        List <City> GetCities ();
        List <City> GetCitiesByUserId(long id);
        void CreateCityData();
    }
}
