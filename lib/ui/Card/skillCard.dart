import 'package:flutter/material.dart';

class SkillCard extends StatelessWidget {
  const SkillCard({super.key, this.width, this.height});
  final width;
  final height;
  @override
  Widget build(BuildContext context) {
    return Container(
      height:height*0.3 ,
      width: width,

      child: Center(
        child: Column(
          children: [
            Text("What I am capabie of?",
            style: TextStyle(fontWeight: FontWeight.bold),
            ),
            Expanded(

                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,

children: [

  SizedBox(
        width: width*0.2,
        height: height*0.2,
        child: Image.asset('images/Flutter.png', fit: BoxFit.fill)

    ),
  SizedBox(
      width: width*0.2,
      height: height*0.2,
      child: Image.asset('images/Dart_logo.png', fit: BoxFit.fill)

  ),
  SizedBox(
      width: width*0.2,
      height: height*0.2,
      child: Image.asset('images/github-logo.png', fit: BoxFit.fill)

  ),
   // Image.asset('images/8.png', fit: BoxFit.fill),
   // Image.asset('images/9.png', fit: BoxFit.fill),

  SizedBox(
      width: width*0.2,
      height: height*0.2,
      child: Image.asset('images/fire_logo.png', fit: BoxFit.fill)

  ),

],
            )),
          ],
        ),
      ),
    );
  }
}
