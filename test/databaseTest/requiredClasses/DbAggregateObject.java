package databaseTest.requiredClasses;

import com.google.gson.annotations.SerializedName;

/**
 * Created by robert on 27.09.16.
 */
public class DbAggregateObject {
    @SerializedName("_id")
    public String name;
    @SerializedName("count")
    public int count;
}
