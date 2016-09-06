package helpers;

import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import java.util.Arrays;


/**
 * Created by robert on 02.09.16.
 */
public class DatabaseContext {

    private DatabaseContext(DbContextBuilder builder){
        _dbClient = builder._dbClient;
        _dbConnection = builder._dbConnection;
        _dbCollection = builder._dbCollection;
    }

    public MongoClient getDbClient() {
        return _dbClient;
    }

    public MongoDatabase geDbConnection() {
        return _dbConnection;
    }

    public MongoCollection<Document> getDbCollection() {
        return _dbCollection;
    }

    private final MongoClient _dbClient;
    private final MongoDatabase _dbConnection;
    private final MongoCollection<Document> _dbCollection;

    public static class DbContextBuilder{

        public DbContextBuilder(String databaseName){
            _databaseName = databaseName;
        }

        public DbContextBuilder collectionName(String collectionName){
            _collectionName = collectionName;
            return this;
        }

        public DbContextBuilder address(String mongoDbAddress, int port){
            _serverAddress = new ServerAddress(mongoDbAddress,port);
            return this;
        }

        public DbContextBuilder credentials(String userName,char [] password){
            _credentials = MongoCredential.createCredential(userName,_databaseName,password);
            return this;
        }

        public DatabaseContext build(){
            _dbClient = initlializeMongoClient();
            _dbConnection = _dbClient.getDatabase(_databaseName);
            _dbCollection = _dbConnection.getCollection(_collectionName);
            return new DatabaseContext(this);
        }

        private MongoClient initlializeMongoClient(){
            if(_credentials!=null){
                return new MongoClient(_serverAddress,Arrays.asList(_credentials));
            }
            return new MongoClient(_serverAddress);
        }

        private String _collectionName;
        private MongoCredential _credentials;
        private ServerAddress _serverAddress = new ServerAddress();
        private final String _databaseName;
        private MongoClient _dbClient;
        private MongoDatabase _dbConnection;
        private MongoCollection<Document> _dbCollection;
    }

}
