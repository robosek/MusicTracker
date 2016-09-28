package models.facade;

import com.mongodb.*;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoIterable;
import org.bson.BsonDocument;
import org.bson.Document;
import org.bson.conversions.Bson;
import java.util.Enumeration;


import javax.print.Doc;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Dictionary;
import java.util.List;
import java.util.regex.Pattern;

import static com.mongodb.client.model.Filters.*;
import static java.util.Arrays.asList;
import static jdk.nashorn.internal.objects.NativeFunction.function;


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
        FindIterable<Document> iterable = _dbCollection.find(eq(fieldName,
                caseInsensitive(itemValue)));
        return processIterable(iterable);
    }

    public String getDocumentsByFields(Dictionary<String,String> fields, String logicalQueryOperator){
        BasicDBObject object = getKeyValues(fields,logicalQueryOperator);
        FindIterable<Document> iterable = _dbCollection.find(new Document(object));
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

    public String getAggregateDocumentsByFiled(String filedValue){
        AggregateIterable<Document> iterable = _dbCollection.aggregate(asList(
        new Document("$group", new Document("_id", "$"+filedValue)
                .append("count", new Document("$sum", 1)))));
        return processIterable(iterable);
    }

    private BasicDBObject getKeyValues(Dictionary<String,String> keyValues, String logicalQueryOperator){
        if(keyValues!=null){
            BasicDBList dbList = new BasicDBList();
            for (Enumeration list = keyValues.keys(); list.hasMoreElements();) {
                BasicDBObject object = new BasicDBObject();
                 String key = (String) list.nextElement();
                 String value = keyValues.get(key);
                 object.append(key,caseInsensitive(value));
                 dbList.add(object);
            }
            return new BasicDBObject("$"+logicalQueryOperator,dbList);
        }
        return new BasicDBObject();
    }

    private Pattern caseInsensitive(String value){
        return Pattern.compile(value,Pattern.CASE_INSENSITIVE);
    }

    private MongoCollection<Document> _dbCollection;
    private String logExceptionAndReturnEmptyString(String message){
        System.out.println(message);
        return EMPTY_STRING;
    }
    private String processIterable(MongoIterable<Document> iterable){
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
