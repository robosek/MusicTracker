package models.facade;

import com.mongodb.Block;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.or;

/**
 * Created by robert on 06.09.16.
 */
public class DatabaseFacade {

    public DatabaseFacade(MongoCollection<Document> collection){
        _dbCollection = collection;
    }

    public String getAllDocumentsJson() {
        try {
            FindIterable<Document> iterable = _dbCollection.find();
            return processIterable(iterable);
        } catch (Exception ex) {
            return logExceptionAndReturnEmptyString(ex.getMessage());
        }
    }

    public String getFirstDocumentJson(){
        try{
            FindIterable<Document> iterable = _dbCollection.find().limit(1);
            return processIterable(iterable);
        }
        catch (Exception ex){
            return logExceptionAndReturnEmptyString(ex.getMessage());
        }
    }

    public String getDocumentsJson(int documentsNumber){
        try{
            FindIterable<Document> iterable = _dbCollection.find().limit(documentsNumber);
            return processIterable(iterable);
        }
        catch (Exception ex){
            return logExceptionAndReturnEmptyString(ex.getMessage());
        }
    }

    public String getDocumentsBy(String fieldName, String itemValue){
        FindIterable<Document> iterable = _dbCollection.find(eq(fieldName,itemValue));
        return processIterable(iterable);
    }

    public String getDocumentsOrderedBy(String filedName, Boolean descending, int limit){
        int order = descending ? -1 : 1;
        FindIterable<Document> iterable = _dbCollection.find().limit(limit).sort(new Document(filedName,order));
        return processIterable(iterable);
    }

    public String getDocumentsBy(Document document){
        FindIterable<Document> iterable = _dbCollection.find(document);
        return processIterable(iterable);
    }



    private MongoCollection<Document> _dbCollection;
    private String logExceptionAndReturnEmptyString(String message){
        System.out.println(message);
        return EMPTY_STRING;
    }
    private String processIterable(FindIterable<Document> iterable){
        try{
            final List<String> results = new ArrayList();
            iterable.forEach(new Block<Document>() {
                @Override
                public void apply(final Document document) {
                    results.add(document.toJson());
                }
            });
            return results.toString();
        }
        catch(Exception ex){
            System.out.println(ex.getMessage());
            return EMPTY_STRING;
        }

    }

    private final String EMPTY_STRING = "";

}
