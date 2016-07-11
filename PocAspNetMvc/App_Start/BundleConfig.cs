using System.Web;
using System.Web.Optimization;

namespace PocAspNetMvc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.min.js",
                        "~/Scripts/angular-animate.min.js",
                        "~/Scripts/angular-ui-router.min.js",
                        "~/Scripts/angular-ui/ui-bootstrap-tpls.min.js",
                        "~/Scripts/croppie.js",
                        "~/Scripts/ng-croppie.js",
                        "~/ngApp/app/app-module.js",
                        "~/ngApp/index-routes.js",
                        "~/ngApp/app/app-config.js",
                        "~/ngApp/app/app-run.js",
                        "~/ngApp/app/constants.js",
                        "~/ngApp/app/core/core-module.js",
                        "~/ngApp/app/core/core-services/core-project-service.js",
                        "~/ngApp/app/core/core-controller.js",
                        "~/ngApp/app/core/core-routes.js",
                        "~/ngApp/app/home/home-module.js",
                        "~/ngApp/app/home/home-services/home-project-service.js",
                        "~/ngApp/app/home/home-controller.js",
                        "~/ngApp/app/home/home-routes.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/angular-css").Include(
                "~/ngApp/styles/css/main.css"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/croppie.css",
                      "~/Content/ng-croppie.css"
                      ));
        }
    }
}
