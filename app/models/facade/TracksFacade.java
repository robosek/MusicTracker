package models.facade;

import com.mongodb.client.MongoCollection;
import org.bson.Document;

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
        return _dbFacade.getDocumentsOrderdBy("listeners",true,tracksNumber);
    }

    private DatabaseFacade _dbFacade;

}
