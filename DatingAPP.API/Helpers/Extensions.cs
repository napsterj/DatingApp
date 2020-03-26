using Microsoft.AspNetCore.Http;
using System;

namespace DatingAPP.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message) {
            response.Headers.Add("Application-error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static int CalculateAge(this DateTime date)
        {
            var age = DateTime.Today.Year - date.Year;
            if(date.AddYears(age) > DateTime.Today)
            {
                age--;
            }
            return age;
        }
    }
}
