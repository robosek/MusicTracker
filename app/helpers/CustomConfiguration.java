package helpers;

import play.Configuration;
import play.Play;

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
        _configuration = Play.application().configuration();
        initializeConfiguration();
    }

    public CustomConfiguration(Configuration configuration){
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
        _mongoHost = _configuration.getString("mongo.host");
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


    private  Configuration _configuration;
    private String _mongoUsername;
    private String _mongoPassword;
    private String _mongoHost;
    private int _mongoPort;

}
