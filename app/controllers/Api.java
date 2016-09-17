package controllers;

import helpers.DatabaseContext;
import models.facade.ArtistFacade;
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
        _artistFacade = new ArtistFacade(dbContext.getDatabase().getCollection("artists"));
    }

    public Result tracks(int number){
        String tracks = _tracksFacade.getTracks(number);
        return ok(tracks);
    }

    public Result topTracks(int number){
        String tracks = _tracksFacade.getTopTracks(number);
        return ok(tracks);
    }

    public Result tracksByName(String name){
        String tracks = _tracksFacade.getTracksByNameAndArtistName(name);
        return ok(tracks);
    }

    public Result artistInfoJson(String imdbId){
        String artist = _artistFacade.getArtist(imdbId);
        return ok(artist);
    }


    private static TracksFacade _tracksFacade;
    private  static ArtistFacade _artistFacade;

}
