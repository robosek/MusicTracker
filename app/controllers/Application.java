package controllers;

import helpers.DatabaseContext;
import models.facade.DatabaseFacade;
import models.facade.TracksFacade;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Application(){
        DatabaseContext dbContext = new DatabaseContext
                .DbContextBuilder("music")
                .collectionName("tracks")
                .build();

        _tracksFacade = new TracksFacade(dbContext.getDbCollection());
    }

    public Result index() {
        String tracks = _tracksFacade.getTracks(10);
        return ok(index.apply(tracks));
    }

    private static TracksFacade _tracksFacade;

}
