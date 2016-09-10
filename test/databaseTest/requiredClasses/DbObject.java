package databaseTest.requiredClasses;

import com.google.gson.annotations.SerializedName;

/**
 * Created by robert on 10.09.16.
 */
public class DbObject {
    @SerializedName("Name")
    public String name;
    @SerializedName("Number")
    public int number;
}
