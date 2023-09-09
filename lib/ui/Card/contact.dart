import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../constants/constants.dart';

class ContactCard extends StatelessWidget {
   ContactCard( {super.key,required this.width,required this.height,this.scroller1,

   });
  final width;
  final height;
var scroller1;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height*0.4,
      color:footerColor ,
      key: scroller1,
      child: Padding(
        padding:  EdgeInsets.only(top:MediaQuery.of(context).size.height*0.03
            ,left: MediaQuery.of(context).size.width*0.06,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Contacts"),
            Text("Get in touch",style: TextStyle(fontWeight: FontWeight.w900,),),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.min,
              children: [
                   IconButton(
                  icon: Image.asset('assets/images/github-logo.png'),
                  onPressed: () async{
                    if (!await launchUrl(Uri.parse(gitLink))) {
                      throw Exception('Could not launch ');
                    }
                  },
                   ),
                 IconButton(
                  icon: Image.asset('assets/images/google-icon.png'),
                  onPressed: ()  async{
                    if (!await launchUrl(Uri.parse(storeLink))) {
                      throw Exception('Could not launch ');
                    }
                  },
                ),
                IconButton(
                  icon: Image.asset('assets/images/img.png'),
                  onPressed: ()  async{
                    if (!await launchUrl(Uri.parse(linkedinLink))) {
                      throw Exception('Could not launch ');
                    }
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
