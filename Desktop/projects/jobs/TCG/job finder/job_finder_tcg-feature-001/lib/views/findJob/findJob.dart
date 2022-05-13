import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:job/constants.dart';
import 'package:job/views/findJob/filter_item.dart';

class FindJob extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return (Column(
      children: [
        Text(
          "Tìm Công Việc",
          style: kPageTitleStyle,
        ),
        SizedBox(height: 25.0),
        Container(
          width: double.infinity,
          height: 50.0,
          margin: EdgeInsets.only(right: 18.0),
          child: Row(
            children: <Widget>[
              Expanded(
                child: Container(
                  padding: EdgeInsets.symmetric(horizontal: 15.0),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(12.0),
                  ),
                  child: TextField(
                    cursorColor: kBlack,
                    decoration: InputDecoration(
                      icon: Icon(
                        Icons.search,
                        size: 25.0,
                        color: kBlack,
                      ),
                      border: InputBorder.none,
                      hintText: "Tìm kiếm",
                      hintStyle: kSubtitleStyle.copyWith(
                        color: Colors.black38,
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                  width: 50.0,
                  height: 50.0,
                  margin: EdgeInsets.only(left: 12.0),
                  decoration: BoxDecoration(
                    color: kBlack,
                    borderRadius: BorderRadius.circular(12.0),
                  ),
                  child: MaterialButton(
                    child: Icon(
                      FontAwesomeIcons.slidersH,
                      color: Colors.white,
                      size: 20.0,
                    ),
                    onPressed: () => _showMyDialog(context),
                  ))
            ],
          ),
        ),
      ],
    ));
  }

  Future<void> _showMyDialog(context) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Filter by'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[FilterItem(), FilterItem(), FilterItem()],
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: const Text('Save'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            TextButton(
              child: const Text(
                'Cancel',
                style: TextStyle(color: Colors.red),
              ),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }
}
