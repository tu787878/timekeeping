import 'package:flutter/material.dart';

class FilterItem extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return (Wrap(
      alignment: WrapAlignment.spaceBetween,
      crossAxisAlignment: WrapCrossAlignment.center,
      children: [
        Text("item"),
        Checkbox(
            value: false,
            onChanged: (bool? value) {
              print(value);
            })
      ],
    ));
  }
}
