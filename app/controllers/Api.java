package controllers;

import helpers.DatabaseContext;
import models.facade.TracksFacade;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by robert on 10.09.16.
 */
public class Api extends Controller {

    public Api(){
        DatabaseContext dbContext = new DatabaseContext
                .DbContextBuilder("music")
                .address("",0)
                .credentials("","".toCharArray())
                .collectionName("tracks")
                .build();

        _tracksFacade = new TracksFacade(dbContext.getDbCollection());
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
