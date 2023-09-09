import 'package:flutter/material.dart';
import 'package:my_portfolio/constants/constants.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../model/project.dart';

class ProjectCard extends StatelessWidget {
  var scroller1;
   ProjectCard({super.key,this.scroller1});

  @override
  Widget build(BuildContext context) {
    return   SizedBox(
      height: MediaQuery.of(context).size.height*0.6,
      child: Padding(
        padding:  EdgeInsets.all(8.0),
        child:MediaQuery.of(context).size.width>=1000? GridView.builder(

            gridDelegate:  SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2,
              mainAxisSpacing: 2,

            ),
                itemCount: myProject.length,
                itemBuilder:(BuildContext context, int index){
              return Container(
            width: MediaQuery.of(context).size.width*0.4,
           height:MediaQuery.of(context).size.height*0.1 ,
           decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                color: Colors.white,

            ) ,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
mainAxisSize: MainAxisSize.min,
                  children: [
                    FittedBox(
                        fit: BoxFit.fitWidth,
                        child: Text(myProject[index].projectName!,
                      style: TextStyle(fontWeight: FontWeight.w600,),)),
                    Text(myProject[index].projectDesc!),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        myProject[index].gitLink!=null?   IconButton(
                          icon: Image.asset('assets/images/github-logo.png'),
                          onPressed: () =>{},
                        ):SizedBox(),
                        myProject[index].storeLink!=null? IconButton(
                          icon: Image.asset('assets/images/google-icon.png'),
                          onPressed: ()  async{
                          if (!await launchUrl(Uri.parse(storeLink+memoyGame))) {
              throw Exception('Could not launch ');
              }
                          },
                        ):SizedBox(),
                      ],
                    )
                  ],
                ),
          );}

        ):ListView.separated(
            itemCount: myProject.length,
            itemBuilder:(BuildContext context, int index){
          return Container(
            width: MediaQuery.of(context).size.width*0.6,
            key:scroller1,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              color: Colors.white,

            ) ,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                FittedBox(
                    fit: BoxFit.fitWidth,
                    child: Text(myProject[index].projectName!,
                      style: TextStyle(fontWeight: FontWeight.w600,),)),
                Text(myProject[index].projectDesc!),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    myProject[index].gitLink!=null?   IconButton(
                      icon: Image.asset('assets/images/github-logo.png'),
                      onPressed: () async{
                        if (!await launchUrl(Uri.parse(myProject[index].gitLink!))) {
                          throw Exception('Could not launch ');
                        }
                      },
                    ):SizedBox(),
                    myProject[index].storeLink!=null? IconButton(
                      icon: Image.asset('assets/images/google-icon.png'),
                      onPressed: ()  async{
                        if (!await launchUrl(Uri.parse(myProject[index].storeLink!))) {
                          throw Exception('Could not launch ');
                        }
                      },
                    ):SizedBox(),
                  ],
                )
              ],
            ),
          );},
          separatorBuilder: (context, index) =>  SizedBox(
            height: MediaQuery.of(context).size.height*0.03,
          ),


        ),
      ),
    );
  }
}
