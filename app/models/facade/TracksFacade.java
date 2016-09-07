package models.facade;

import com.mongodb.client.MongoCollection;
import org.bson.Document;

import java.util.Arrays;
import java.util.regex.Pattern;

/**
 * Created by robert on 06.09.16.
 */
public class TracksFacade {

    public TracksFacade(MongoCollection<Document> collection){
        _dbFacade = new DatabaseFacade(collection);
    }

    public String getAllTracks(){
        return _dbFacade.getAllDocumentsJson();
    }

    public String getTracks(int number){
        return _dbFacade.getDocumentsJson(number);
    }

    public String getTracksByName(String name){
        return _dbFacade.getDocumentsBy("name",name);
    }

    public String getFirstTrack(){
        return _dbFacade.getFirstDocumentJson();
    }

    public String getTopTracks(int tracksNumber){
        return _dbFacade.getDocumentsOrderedBy("listeners",true,tracksNumber);
    }

    public String getTracksByNameAndArtistName(String name){
       Document document = new Document("$or", Arrays.asList(new Document("name", Pattern.compile(name)),
                new Document("artist.name", Pattern.compile(name))));
        return _dbFacade.getDocumentsBy(document);
    }

    private DatabaseFacade _dbFacade;

}
