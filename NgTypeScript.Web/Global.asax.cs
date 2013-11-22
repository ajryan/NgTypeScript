using System;
using System.Web.Optimization;

namespace NgTypeScript.Web
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            BundleTable.Bundles.Add(new ScriptBundle("~/bundles/app")
                .Include(
                    "~/scripts/angular.js",
                    "~/scripts/angular-resource.js",
                    "~/scripts/angular-route.js",
                    "~/app/app.js",
                    "~/app/models/*.js",
                    "~/app/services/*.js",
                    "~/app/controllers/*.js",
                    "~/app/directives/*.js"));

            BundleTable.Bundles.Add(new StyleBundle("~/bundles/css")
                .Include(
                    "~/content/reset.css",
                    "~/content/site.css"));
        }
    }
}