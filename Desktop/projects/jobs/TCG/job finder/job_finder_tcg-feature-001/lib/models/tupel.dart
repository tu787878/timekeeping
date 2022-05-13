import 'dart:core';

import 'package:job/models/business_model.dart';
import 'package:job/models/job_model.dart';

class Tuple {
  final JobModel item1;
  final BusinessModel item2;

  Tuple({
    required this.item1,
    required this.item2,
  });

  factory Tuple.fromJson(Map<String, dynamic> json) {
    return Tuple(
      item1: json['item1'],
      item2: json['item2'],
    );
  }
}
