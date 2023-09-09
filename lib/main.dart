import 'dart:js';

import 'package:flutter/material.dart';
import 'package:my_portfolio/logic/myprovider.dart';
import 'package:my_portfolio/ui/Card/contact.dart';
import 'package:my_portfolio/ui/Card/homeCard.dart';
import 'package:my_portfolio/ui/Card/projectCard.dart';
import 'package:my_portfolio/ui/Card/skillCard.dart';
import 'package:my_portfolio/ui/mobnavbar.dart';
import 'dart:ui_web';

import 'package:my_portfolio/ui/navbar.dart';
import 'package:provider/provider.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';
void main() {
  runApp(
      Provider(

          create: (_) => MyProvider(),

        child:  MyApp(),
      ),

  //    MyApp()
  );
}
class MyApp extends StatelessWidget {
   MyApp({super.key});
   var size,height,width;
  @override
  Widget build(BuildContext context) {
    size = MediaQuery.of(context).size;
    height = size.height;
    width = size.width;
    var key1 = GlobalKey();
    var key2 = GlobalKey();
    var key3 = GlobalKey();
    var key4 = GlobalKey();
    return  MaterialApp(



      home:Scaffold(
        body:

             SingleChildScrollView( 
               child: Column(
            children: [
                LayoutBuilder(builder:
                    (BuildContext ctx, BoxConstraints constraints){
                  if (constraints.maxWidth > 620) {
                    return webNavbar(width,key1,key2,key3,key4);
                  }else {return mobNavbar(width,key1,key2,key3,key4);}}),
                Column(
                  children: [
                   Container(
                       key: key4,
                       child: HomeCard(width: width, height: height)),
                    Container(height:height*0.03 ,
                      key: key3,
                  child: Text("Skill"),
                  ),


                      SkillCard(width: width, height: height),

                   Container(
                       key: key2,
                       child:Text("My Project"), ),ProjectCard(),
                 //  AboutMeCard(),
                 Container(
                     key: key1,
                     child: ContactCard(width: width, height: height,)),
                  ],
                ),
            ],
          ),
             )
        ),

    );
  }
}
/*
class MyApp extends StatelessWidget {
   MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return const MaterialApp(
        debugShowCheckedModeBanner: false,
      home: MyHomePage(title: 'Flutter Demo Home Page'),

    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});


  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {




  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return Scaffold(



    body:Column(
      children: [
        LayoutBuilder(builder:
        (BuildContext ctx, BoxConstraints constraints){
    if (constraints.maxWidth > 620) {
    return webNavbar(screenSize.width);
    }else {return mobNavbar(screenSize.width);}}),
        Column(
          children: [
            Row(
              children: [

              ],
            ),
          ],
        ),
      ],
    ) ,
    );

}}
*/