package controllers;

import helpers.DatabaseContext;
import models.facade.DatabaseFacade;
import models.facade.TracksFacade;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Application(){
    }

    public Result index() {
        return ok(index.apply());
    }

    public Result statistics(){
        return ok(statistics.apply());
    }

    public Result artistInfo(String artistIMDBid){
        return ok(artist.render(artistIMDBid));
    }


}
