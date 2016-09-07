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
        return ok(index.apply());
    }
    
    public Result tracks(int number){
         String tracks = _tracksFacade.getTopTracks(number);
        return ok(tracks);
    }

    public Result tracksByName(String name){
        String tracks = _tracksFacade.getTracksByNameAndArtistName(name);
        return ok(tracks);
    }

    private static TracksFacade _tracksFacade;

}
