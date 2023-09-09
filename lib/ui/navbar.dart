import 'package:flutter/material.dart';
import 'package:my_portfolio/logic/myprovider.dart';
import 'package:provider/provider.dart';
BoxConstraints? constraints;
Widget webNavbar(var screenSize,  [var key1,var key2,var key3,var key4]){

  return   PreferredSize(
    preferredSize: Size(screenSize, 1000),
    child: Container(
      color: Colors.white,
      child: Padding(
        padding: EdgeInsets.all(screenSize*0.03),
        child: Row(
          children: [
            const Text('Mahmoud Hamada',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  InkWell(
                    onTap: () {
                      Scrollable.ensureVisible(key4.currentContext!);
                    },
                    child: Text(
                      'Home',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),

                  SizedBox(width: screenSize / 20),
                  InkWell(
                    onTap: () {Scrollable.ensureVisible(key3.currentContext!);},
                    child: Text(
                      'Skill',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                  InkWell(
                    onTap: () {
                      Scrollable.ensureVisible(key2.currentContext!);

                    },
                    child: Text(
                      'Projects',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                  InkWell(
                    onTap: () {
                      Scrollable.ensureVisible(key1.currentContext!);
                    },
                    child: Text(
                      'Contact',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                ],
              ),
            ),

          ],
        ),
      ),
    ),
  );
}