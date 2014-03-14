using System.Web;

namespace NgTypeScript.NgHtmlHelper
{
    public class NgHelper<TModel>
    {
        public IHtmlString Input()
        {
            return new HtmlString("test");
        }
    }
}
