import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

class HomeCard extends StatelessWidget {


   HomeCard({super.key,required this.width,required this.height}


       );

   final width;
   final height;


  @override
  Widget build(BuildContext context) {
    return  Container(
width: width *0.9,
      height: height*0.8,
      color:Colors.white,

        child: Column(
          children: [
          SizedBox(
            height:height*0.4 ,
            child: CircleAvatar(
              radius: width*0.6, // This radius is the radius of the picture in the circle avatar itself.
              backgroundImage: AssetImage('images/test.jpg'),


            ),
          ),
            Center(
              child: Padding(
                padding:  EdgeInsets.all(width *0.02),
                child: SizedBox(
                  width:  width *0.9,
                  height: height *0.3,
                  child: Center(
                    child: DefaultTextStyle(
                      style:  TextStyle(
                        fontSize: (height*0.07),
                        fontFamily: 'Bombers',
                      ),
                      child: AnimatedTextKit(
                        animatedTexts: [
                          TypewriterAnimatedText('My Name is Mahmoud'),
                          TypewriterAnimatedText('Mobile App Developer'),
                          TypewriterAnimatedText('Web App Developer'),
                        ],
                        totalRepeatCount: 30,
                      //  pause: const Duration(milliseconds: 1000),
                        onTap: () {

                        },
                      ),
                    ),
                  ),
                ),
              ),
            )
          ],
        ),

    );
  }
}
