package databaseTest;

import com.github.fakemongo.junit.FongoRule;
import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import com.mongodb.connection.ServerVersion;
import com.sun.jna.platform.unix.X11;
import helpers.DatabaseContext;
import org.junit.*;
import com.github.fakemongo.Fongo;

import static org.hamcrest.core.Is.is;

/**
 * Created by robert on 10.09.16.
 */
public class DatabaseContextTest {

    @Rule
    public FongoRule fongoRule = new FongoRule(true,new ServerVersion(1,0));

    @Before
    public void setUp(){
        mockClient = fongoRule.getMongoClient();
    }

    @Test
    public void connectToDatabaseShouldReturnDatabaseContext(){
        DatabaseContext dbContext = new DatabaseContext
                .DbContextBuilder(DATABASE_NAME)
                .collectionName(COLLECTION_NAME)
                .build();
        Assert.assertNotNull(dbContext.getDbClient());
        Assert.assertNotNull(dbContext.getDatabase());
        Assert.assertNotNull(dbContext.getDbCollection());
    }

    @Test
    public void connectToDatabaseWithSpecificServerAddressShouldReturnDatabaseContext(){
        DatabaseContext dbContext = new DatabaseContext
                .DbContextBuilder(DATABASE_NAME)
                .address(getServerAddress(),getServerPort())
                .collectionName(COLLECTION_NAME)
                .build();
        Assert.assertNotNull(dbContext.getDbClient());
        Assert.assertNotNull(dbContext.getDatabase());
        Assert.assertNotNull(dbContext.getDbCollection());
    }

    @Test(expected = java.lang.IllegalArgumentException.class)
    public void connectToDatabaseWithoutCollectionNameShouldThrowException(){
        DatabaseContext dbContext = new DatabaseContext.DbContextBuilder(DATABASE_NAME).build();
    }



    private String getServerAddress(){
        return mockClient.getAddress().getHost();
    }
    private int getServerPort(){
        return mockClient.getAddress().getPort();
    }

    private MongoClient mockClient;
    private final String DATABASE_NAME = "dbtest";
    private final String COLLECTION_NAME = "collectiontest";


}
