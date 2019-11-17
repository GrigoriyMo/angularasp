using System.IO;
using System.Linq;
using Dapper;
using System;
using System.Collections.Generic;
using project_me.Models;

namespace project_me.Data
{
    public class SqLiteCityRepository : SqLiteBaseRepository, ICityRepository {
        public void CreateCityData()
        {
            string[] cities = new string[10] { "Moscow", "London", "New York", "Paris", "Tokyo", "Pyongyang", "Kabul", "Yerevan", "Canberra", "Praia" };
            foreach (string value in cities)
            {
                using (var cnn = SimpleDbConnection())
                {
                    cnn.Open();
                    cnn.Query<long>("INSERT INTO cities(  NAME ) VALUES (  @Name );", new { Name = value });
                }
            }
        }

        public List <City> GetCitiesByUserId(long uid) {
            if (!File.Exists(DbFile)) return null;
            using (var cnn = SimpleDbConnection())
            {
                cnn.Open();
                var resultdbcity = cnn.Query<City>(@"SELECT users.NAME, cities.NAME  
                                                    FROM cities, citieslink, users  
                                                    WHERE users.ID=citieslink.USER_ID 
                                                    AND users.ID = @uid
                                                    AND citieslink.CITY_ID = cities.ID; ",
                                                    new { uid }
                                                   ).ToList();
                return resultdbcity;
            }
        }
        public List <City> GetCities() {
            if (!File.Exists(DbFile)) return null;
            using (var cnn = SimpleDbConnection())
            {
                cnn.Open();
                var resultdbcity = cnn.Query<City>(@"SELECT ID, NAME FROM cities").ToList();
                return resultdbcity;
            }
        }
    }
}