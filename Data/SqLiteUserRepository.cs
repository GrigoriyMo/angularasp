using System.IO;
using System.Linq;
using Dapper;
using System;
using System.Collections.Generic;
using project_me.Models;

namespace project_me.Data
{
    public class SqLiteUserRepository : SqLiteBaseRepository, IUserRepository
    {
        public User GetUser(long id)
        {
            if (!File.Exists(DbFile)) return null;
            using (var cnn = SimpleDbConnection())
            {
                cnn.Open();
                User result = cnn.Query<User>(
                    @"SELECT ID, NAME, AGE, ADDRESS
                    FROM users
                    WHERE ID = @Id", new { id }).FirstOrDefault();
                return result;
            }
        }

        public long SaveUser(User user)
        {
            if (!File.Exists(DbFile))
            {
                CreateDatabase();
            }

            User checked_user = checkExistingUser(user);
            if (checked_user  is null )
            {
                using (var cnn = SimpleDbConnection())
                {
                    cnn.Open();
                    user.Id = cnn.Query<long>(
                        @"INSERT INTO users 
                    (  NAME, LASTNAME, AGE, ADDRESS, PHONE ) VALUES 
                    (  @Name, @LastName, @Age, @Address, @Phone );
                    select last_insert_rowid()", user).First();
                }
                AssignUsersToCitiesRegistration(user.Id, user.Cities);
                return user.Id;
            }
            else
            {
                return 0;
            }
        }


        public User checkExistingUser(User user) 
        {
            if (!File.Exists(DbFile)) return null;
            using (var cnn = SimpleDbConnection())
            {
                cnn.Open();
                User result = cnn.Query<User>(
                    @"SELECT ID, NAME, AGE, ADDRESS
                    FROM users
                    WHERE NAME = @Name and LASTNAME = @LastName and PHONE = @Phone", user ).FirstOrDefault();
                return result;
            }
        }

        public void CreateUsersDefault()
        {
            string[] names = new string[10] { "Peter", "Linda", "Sergey", "Valera", "Valeria", "Mahmud", "Trinky", "Jake", "Svetlana", "Dimon" };
            string[] last_names = new string[10] { "Johnsons", "Ashi", "Ivanov", "Petrov", "Krab", "Abuus", "Stinky", "Johnson", "Krasnaya", "Dimon" };
            string[] addresses = new string[10] { "HeloWorld street", "Space prospekt", "Wall street", "New Arbat", "Lesnaya street", "Square Maths", "101 avenue", "MKAD 100 km", "PKAD 25km", "Lake street" };
            String phone_template = "814414455";
            int age_template = 20;
            for(int i = 0; i < names.Length; i++)
            {
                SaveUser(
                    new User
                    {
                        Name = names[i],
                        LastName = last_names[i],
                        Address = addresses[i],
                        Age = age_template + i,
                        Phone = phone_template + new Random().Next(52)
                    }
                );
                AssignUsersToCitiesDefault(i+1);
            }
        }

        private static void CreateDatabase()
        {
            using (var cnn = SimpleDbConnection())
            {
                cnn.Open();
                cnn.Execute(
                    @"CREATE TABLE users(
                       ID INTEGER PRIMARY KEY     NOT NULL,
                       NAME           TEXT    NOT NULL,
                       LASTNAME       TEXT    NOT NULL,
                       AGE            INT     NOT NULL,
                       ADDRESS        CHAR(50),
                       PHONE TEXT
                    );
                    CREATE TABLE cities(
                     ID INTEGER PRIMARY KEY     NOT NULL,
                     NAME           TEXT    NOT NULL
                     );
                    CREATE TABLE citieslink(
                    ID INTEGER PRIMARY KEY     NOT NULL,
                    USER_ID      INT    NOT NULL,
                    CITY_ID INT NOT NULL
                    );
                    ");
            }
        }
        public List <User> GetUsersFrom()
        {
            if (!File.Exists(DbFile)) return null;
            using (var cnn = SimpleDbConnection())
            {
                cnn.Open();
                var result = cnn.Query<User>(@"SELECT ID, NAME, LASTNAME, AGE, ADDRESS, PHONE FROM users").ToList();
                return result;
            }
        }
        public void AssignUsersToCitiesDefault(int id)
        {
            using (var cnn = SimpleDbConnection())
            {
                cnn.Open();
                cnn.Query<long>("INSERT INTO citieslink(  USER_ID, CITY_ID ) VALUES (  @User_id , @City_id );", new { User_id = id, City_id = id });
            }
        }

        public void AssignUsersToCitiesRegistration(long id, List <string> city)
        {
            for(int i = 0; i < city.Count; i++)
            {
                using (var cnn = SimpleDbConnection())
                {
                    cnn.Open();
                    var newcityid = cnn.Query<long>(@"INSERT INTO cities(  NAME ) VALUES (  @City ); select last_insert_rowid();",
                        new { 
                            User_id = id, 
                            City = city[i] 
                            });
                    cnn.Query<long>(@"INSERT INTO citieslink(  USER_ID, CITY_ID ) VALUES (  @User_id, @City_id );",
                        new {
                            User_id = id, 
                            City_id = newcityid 
                            });
                }
            }

        }
    }
}
