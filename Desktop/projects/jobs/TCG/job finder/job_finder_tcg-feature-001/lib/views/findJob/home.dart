import 'package:flutter/material.dart';
import 'package:job/constants.dart';
import 'package:job/views/findJob/findJob.dart';
import 'package:job/views/findJob/hotJob.dart';
import 'package:job/views/findJob/newJob.dart';
import 'package:job/views/upload_job.dart';
import 'package:job/widgets/appbar.dart';

class Home extends StatefulWidget {
  final searchParams = {};

  // Home({this.searchParams});

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
        heroTag: null,
        label: Text("Đăng Job"),
        icon: Icon(Icons.add),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => UploadJob(),
            ),
          );
        },
        backgroundColor: Colors.black,
      ),
      backgroundColor: kSilver,
      appBar: AppBarCustom(),
      body: Container(
        margin: EdgeInsets.only(left: 18.0),
        child: SingleChildScrollView(
          physics:
              BouncingScrollPhysics(parent: AlwaysScrollableScrollPhysics()),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SizedBox(height: 25.0),
              FindJob(),
              SizedBox(height: 25.0),
              HotJob(),
              SizedBox(height: 25.0),
              NewJob()
            ],
          ),
        ),
      ),
    );
  }
}
