package databaseTest;

import com.github.fakemongo.junit.FongoRule;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.connection.ServerVersion;
import databaseTest.requiredClasses.DbObject;
import models.facade.DatabaseFacade;
import org.bson.Document;
import org.junit.*;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;

/**
 * Created by robert on 10.09.16.
 */
public class DatabaseFacadeTest {

    @ClassRule
    public static FongoRule fongoRule = new FongoRule(true,new ServerVersion(1,0));

    @BeforeClass
    public static void setUp(){
        mockClient = fongoRule.getMongoClient();
        insertMockDocuments();
    }

    @AfterClass
    public static void tearDown(){
        mockClient.getDatabase(DATABASE_NAME).drop();
    }

    @Test
    public void getFirstDocumentJsonShouldReturnFirstDocument(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getFirstDocumentJson();
        Assert.assertNotNull(test);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 1);
        DbObject dbObject = dbObjects.get(0);
        Assert.assertEquals(dbObject.name,"A");
        Assert.assertEquals(dbObject.number,1);
    }

    @Test
    public void getAllDocumentsJsonShouldReturnAllDocuments(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getAllDocumentsJson();
        Assert.assertNotNull(test);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 2);
        DbObject dbObject = dbObjects.get(1);
        Assert.assertEquals(dbObject.name,"B");
        Assert.assertEquals(dbObject.number,2);
    }

    @Test
    public void getSpecificNumberOfDocumentsJsonShouldReturnThisDocuments(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsJson(2);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertNotNull(test);
        Assert.assertTrue(dbObjects.size() == 2);
        DbObject dbObject = dbObjects.get(0);
        Assert.assertEquals(dbObject.name,"A");
        Assert.assertEquals(dbObject.number,1);
    }

    @Test
    public void getDocumentsWithSpecificNumberGreaterThenDocumentsNumberShouldReturnMaxDocumentsNumber(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsJson(20);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertNotNull(test);
        Assert.assertTrue(dbObjects.size() == 2);
        DbObject dbObject = dbObjects.get(0);
        Assert.assertEquals(dbObject.name,"A");
        Assert.assertEquals(dbObject.number,1);
    }

    @Test
    public void getDocumentsWithSpecificNumberSmallerThenZeroShouldReturnTheAbsoluteValueOfThisNumber(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsJson(-1);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertNotNull(test);
        Assert.assertTrue(dbObjects.size() == 1);
    }


    @Test
    public void getDocumentsByFieldValueShouldReturnRightDocument(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsBy("Name","A");
        Assert.assertNotNull(test);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 1);
        DbObject dbObject = dbObjects.get(0);
        Assert.assertEquals(dbObject.name,"A");
        Assert.assertEquals(dbObject.number,1);
    }

    @Test
    public void getDocumentsByNonExistingFieldShouldReturnEmptyList(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsBy("NonexistingField","SomeValue");
        Assert.assertNotNull(test);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 0);
    }

    @Test
    public void getDocumentsByDocumentObjectShouldReturnRightDocument(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsBy(new Document("Number",2));
        Assert.assertNotNull(test);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 1);
        DbObject dbObject = dbObjects.get(0);
        Assert.assertEquals(dbObject.name,"B");
        Assert.assertEquals(dbObject.number,2);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getDocumentsByNullDocumentShouldThrowException(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsBy(null);
    }

    @Test
    public void getDocumentsByEmptyDocumentShouldReturnAllDocuments(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsBy(new Document());
        Assert.assertNotNull(test);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 2);
    }


    @Test
    public void getDocumentsInOrderShouldReturnOrderedDocuments(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsOrderedBy("Number",true,2);
        Assert.assertNotNull(test);
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 2);
        DbObject dbObject = dbObjects.get(0);
        Assert.assertEquals(dbObject.name,"B");
        Assert.assertEquals(dbObject.number,2);
    }

    @Test
    public void getDocumentsByFieldsValuesShouldReturnTwoDocuments(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        Dictionary fields = new Hashtable();
        fields.put("Name","A");
        fields.put("SuperName","A");
        String test = facade.getDocumentsByFields(fields,"or");
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 2);
    }


    @Test
    public void getDocumentsByFieldsValuesShouldReturnOneDocument(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        Dictionary fields = new Hashtable();
        fields.put("Name","C");
        fields.put("SuperName","C");
        String test = facade.getDocumentsByFields(fields,"or");
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        System.out.println("SiZe: "+dbObjects.get(0).name);
        Assert.assertTrue(dbObjects.size() == 1);
    }

    @Test
    public void getDocumentsByFieldsShouldReturnEmptyList(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        Dictionary fields = new Hashtable();
        fields.put("Name","Z");
        fields.put("SuperName","Z");
        String test = facade.getDocumentsByFields(fields,"or");
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 0);
    }

    @Test
    public void getDocumentsByNullFieldsShoudReturnAllDocuments(){
        DatabaseFacade facade = new DatabaseFacade(getDbCollection());
        String test = facade.getDocumentsByFields(null,"or");
        List<DbObject> dbObjects = gson.fromJson(test,new TypeToken<List<DbObject>>(){}.getType());
        Assert.assertTrue(dbObjects.size() == 2);
    }

    private static void insertMockDocuments(){
        mockClient.getDatabase(DATABASE_NAME)
                .getCollection(COLLECTION_NAME)
                .insertMany(getMockDocuments());
    }

    private static List<Document> getMockDocuments(){
        Document documentA = new Document();
        documentA.append("Name","A");
        documentA.append("SuperName","C");
        documentA.append("Number",1);

        Document documentB = new Document();
        documentB.append("Name","B");
        documentB.append("SuperName","A");
        documentB.append("Number",2);

        List<Document> documents = new ArrayList<>();
        documents.add(documentA);
        documents.add(documentB);
        return  documents;
    }

    private static MongoCollection<Document> getDbCollection(){
        return fongoRule.getMongoClient().getDatabase(DATABASE_NAME).getCollection(COLLECTION_NAME);
    }

    private static final Gson gson = new Gson();
    private static MongoClient mockClient;
    private static final String DATABASE_NAME = "dbtest";
    private static final String COLLECTION_NAME = "collectiontest";

}
