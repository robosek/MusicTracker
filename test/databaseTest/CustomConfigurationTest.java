package databaseTest;

import com.google.common.collect.ImmutableMap;
import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;
import helpers.CustomConfiguration;
import junit.framework.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import play.Configuration;
import play.Play;

import javax.inject.Inject;

import java.io.File;

import static play.test.Helpers.fakeApplication;
import static play.test.Helpers.running;

/**
 * Created by robert on 18.09.16.
 */
public class CustomConfigurationTest {

    @Before
    public void setUp(){
        _customConfiguration = new CustomConfiguration(mockConfig());
    }

    @Test
    public void getMongoHostFromConfigByExistingKeyShouldReturnValue(){
        running(fakeApplication(), () -> {
                    Assert.assertNotNull(_customConfiguration.getMongoHost());
                    Assert.assertEquals("test.com",_customConfiguration.getMongoHost());
        }
        );
    }

    @Test
    public void getMongoPortFromConfigByExistingKeyShouldReturnValue(){
        running(fakeApplication(), () -> {
                Assert.assertNotNull(_customConfiguration.getMongoPort());
                Assert.assertEquals(1000,_customConfiguration.getMongoPort());
        });
    }

    @Test
    public void getMongoUsernameFromConfigByExistingKeyShouldReturnValue(){
        running(fakeApplication(), () -> {
                Assert.assertNotNull(_customConfiguration.getMongoUsername());
                Assert.assertEquals("usertest",_customConfiguration.getMongoUsername());
        });
    }

    @Test
    public void getMongoPasswordFromConfigByExistingKeyShouldReturnValue(){
        running(fakeApplication(),() -> {
                Assert.assertNotNull(_customConfiguration.getMongoPassword());
                Assert.assertEquals("test",_customConfiguration.getMongoPassword());

        });
    }

    @Test(expected = NullPointerException.class)
    public void getMongoValueFromConfigByNonExistingKeyShouldThrowException(){
        running(fakeApplication(),() -> {
            _customConfiguration = new CustomConfiguration(new Configuration(""));
            _customConfiguration.getMongoHost();
        });
    }

    public Configuration mockConfig() {
        return new Configuration(ConfigFactory.parseMap(ImmutableMap.of("mongo.host", "test.com",
                "mongo.port", 1000,
                "mongo.username", "usertest",
                "mongo.password","test")));
    }

    private CustomConfiguration _customConfiguration;


}
