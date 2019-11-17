using System.Collections.Generic;
using project_me.Models;
namespace project_me.Data
{
    public interface IUserRepository
    {
        User GetUser(long id);
        long SaveUser(User User);
        List<User> GetUsersFrom();
        void CreateUsersDefault();
        void AssignUsersToCitiesDefault(int id);
    }

}