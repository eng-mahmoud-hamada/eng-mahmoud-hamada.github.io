import 'dart:js';

import 'package:flutter/material.dart';
BoxConstraints? constraints;
enum SampleItem { itemOne, itemTwo, itemThree,item4 }
SampleItem? selectedMenu;
Widget mobNavbar(var screenSize,  [var key1,var key2,var key3,var key4]){
  return   PreferredSize(
    preferredSize: Size(screenSize, 1000),
    child: Container(
      color: Colors.white,
      child: Padding(
        padding: EdgeInsets.all(screenSize*0.03),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text('Mahmoud Hamada',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
          /*  Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  InkWell(
                    onTap: () {},
                    child: Text(
                      'Home',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                  InkWell(
                    onTap: () {},
                    child: Text(
                      'About',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                  InkWell(
                    onTap: () {},
                    child: Text(
                      'Skill',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                  InkWell(
                    onTap: () {},
                    child: Text(
                      'Projects',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                  InkWell(
                    onTap: () {},
                    child: Text(
                      'Contact',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                  SizedBox(width: screenSize / 20),
                ],
              ),
            ),
*/
            PopupMenuButton(
              constraints: BoxConstraints(
                minWidth: screenSize,
                maxWidth:screenSize,
              ),
              initialValue: selectedMenu,
              // Callback that sets the selected popup menu item.

              itemBuilder: (BuildContext context) => <PopupMenuEntry<SampleItem>>[
                 PopupMenuItem<SampleItem>(
                  value: SampleItem.itemOne,
                   onTap: () {
                     Scrollable.ensureVisible(key4.currentContext!);
                   },
                  child: Text(
                    'Home',
                    style: TextStyle(color: Colors.black),
                  ),
                ),
                 PopupMenuItem<SampleItem>(
                  value: SampleItem.itemTwo,
                   onTap: () {Scrollable.ensureVisible(key3.currentContext!);},
                  child: Text(
                    'Skill',
                    style: TextStyle(color: Colors.black),
                  ),
                ),
                 PopupMenuItem<SampleItem>(
                  value: SampleItem.itemThree,
                   onTap: () {
                     Scrollable.ensureVisible(key3.currentContext!);

                   },
                  child: Text(
                    'Projects',
                    style: TextStyle(color: Colors.black),
                  ),
                ),
                PopupMenuItem<SampleItem>(
                  value: SampleItem.item4,
                  onTap: () {
                    Scrollable.ensureVisible(key1.currentContext!);
                  }, child:Text(
                  'contacts',
                  style: TextStyle(color: Colors.black),
                ),
                  
                ),
              ],
            ),
          ],
        ),
      ),
    ),
  );
}