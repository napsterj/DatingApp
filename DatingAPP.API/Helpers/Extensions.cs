using Microsoft.AspNetCore.Http;

namespace DatingAPP.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message) {
            response.Headers.Add("Application-error", message);
            response.Headers.Add("Expose Headers", "Application-error");
            response.Headers.Add("Cors Headers", "*");
        }
    }
}
