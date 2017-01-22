package helpers;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

/**
 * Created by robert on 18.09.16.
 */
public class CustomConfiguration {

    public String getMongoUsername() {
        return _mongoUsername;
    }
    public String getMongoPassword() {
        return _mongoPassword;
    }
    public String getMongoHost() {
        return _mongoHost;
    }
    public int getMongoPort() {
        return _mongoPort;
    }


    public CustomConfiguration(){
        _configuration = ConfigFactory.load();
        initializeConfiguration();
    }

    public CustomConfiguration(Config configuration){
        _configuration = configuration;
        initializeConfiguration();
    }


    private void initializeConfiguration(){
        getHost();
        getPort();
        getUsername();
        getPassword();
    }

    private void getHost(){
        _mongoHost = _configuration. getString("mongo.host");
    }

    private void getPort(){
        _mongoPort = _configuration.getInt("mongo.port");
    }

    private void getUsername(){
        _mongoUsername = _configuration.getString("mongo.username");
    }

    private void getPassword(){
        _mongoPassword = _configuration.getString("mongo.password");
    }


    private Config _configuration;
    private String _mongoUsername;
    private String _mongoPassword;
    private String _mongoHost;
    private int _mongoPort;

}
