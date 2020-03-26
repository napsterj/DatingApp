using DatingAPP.API.models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingAPP.API.Data
{
    public static class SeedData
    {
        public static void SeedSampleData(DataContext context)
        {
            if (!context.Users.Any())
            {
                var jsonData = System.IO.File.ReadAllText("Data\\SeedJsonData.json");
                var users = JsonConvert.DeserializeObject<IEnumerable<User>>(jsonData);
                foreach (var user in users)
                {
                    byte[] passwordHash = null;
                    byte[] passwordSalt = null;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    context.Users.Add(user);
                }
                context.SaveChanges();
            }
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));                
            }
        }
    }
}
