import '../constants/constants.dart';

class Project{

  String? projectName;
  String? projectDesc;
  String? gitLink;
  String? storeLink;
    Project(String projectName,String projectDesc,String? gitLink,String? storeLink){
     this.projectName=projectName;
     this.projectDesc=projectDesc;
     this.gitLink=gitLink;
     this.storeLink=storeLink;
   }

}
List<Project> myProject=[
new Project("anime memory game", "simple card game", null,storeLink+memoyGame),
  new Project("todoList ", "todo list project with local database", null,storeLink+okList),
  new Project("bmi calculatore", "Body mass index (BMI) is a value derived from the mass (weight) and height of a person.", null,storeLink+memoyGame),
  new Project("Anime wallpaper", "Best Collection of Latest Anime Wallpapers", null,storeLink+"anime_wally"),
  new Project("shop app ", "flutter shop app",gitLink+gitLinkshop,null),
  new Project("habit builder ", "Habit builder UI and some functinality",
      gitLink+"habit_builderUI",null),
];