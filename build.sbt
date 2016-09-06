routesGenerator := InjectedRoutesGenerator

name := "musictracker"

version := "1.0"

lazy val `musictracker` = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( javaJdbc ,  cache , javaWs )

libraryDependencies += "org.mongodb" % "mongodb-driver" % "3.3.0"

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"
