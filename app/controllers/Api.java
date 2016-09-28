package controllers;

import helpers.CustomConfiguration;
import helpers.DatabaseContext;
import models.facade.ArtistFacade;
import models.facade.TracksFacade;
import play.Configuration;
import play.Play;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;

/**
 * Created by robert on 10.09.16.
 */
public class Api extends Controller {

    @Inject
    public Api(CustomConfiguration configuration){
        _dbContext = new DatabaseContext
                .DbContextBuilder("music")
                .address(configuration.getMongoHost(),configuration.getMongoPort())
                .credentials(configuration.getMongoUsername(),
                        configuration.getMongoPassword().toCharArray())
                .collectionName("tracks")
                .build();

        _tracksFacade = new TracksFacade(_dbContext.getDbCollection());
        _artistFacade = new ArtistFacade(_dbContext.getDatabase().getCollection("artists"));
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

    public Result onTour(){
        String artistsOnTour = _artistFacade.getArtistsOnTourStatistics();
        return ok(artistsOnTour);
    }

    @Override
    protected void finalize() throws Exception{
        if(_dbContext!=null) _dbContext.closeConnection();
    }

    private DatabaseContext _dbContext;
    private TracksFacade _tracksFacade;
    private ArtistFacade _artistFacade;

}
