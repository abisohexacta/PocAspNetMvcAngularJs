using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PocAspNetMvc.Startup))]
namespace PocAspNetMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
