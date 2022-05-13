import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:job/views/tabs.dart';
import 'package:job/views/welcom_page.dart';
import 'package:job/widgets/open_app_loader.dart';

import 'services/auth/Auth.dart';

void main() async {
  await Hive.initFlutter();
  await Hive.openBox('authenticationBox');
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final authService = AuthService();

    return MaterialApp(
      title: 'Find Job',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: FutureBuilder(
        future: authService.tokenIsActive(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            if (snapshot.data == true) {
              return Tabs();
            } else {
              return WelcomPage();
            }
          } else {
            return OpenAppLoader();
          }
        },
      ),
    );
  }
}
