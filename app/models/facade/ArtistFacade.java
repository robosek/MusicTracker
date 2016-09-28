package models.facade;

import com.mongodb.client.MongoCollection;
import org.bson.Document;

/**
 * Created by robert on 17.09.16.
 */
public class ArtistFacade {

    public ArtistFacade(MongoCollection<Document> collection){
        _dbFacade = new DatabaseFacade(collection);
    }

    public String getArtist(String imdbId){
        return _dbFacade.getDocumentsBy("mbid",imdbId);
    }

    public String getArtistsOnTourStatistics(){
        return _dbFacade.getAggregateDocumentsByFiled("ontour");
    }

    private DatabaseFacade _dbFacade;
}
