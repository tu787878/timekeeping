import 'package:flutter/material.dart';
import 'package:shimmer_animation/shimmer_animation.dart';

class JobLoadingSkeleton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 200,
      child: ListView(
          scrollDirection: Axis.horizontal,
          shrinkWrap: true,
          physics: BouncingScrollPhysics(),
          children: [
            Container(
              width: 280,
              height: 190,
              margin: EdgeInsets.only(right: 15.0, bottom: 15.0),
              child: Shimmer(
                duration: Duration(seconds: 3),
                interval: Duration(seconds: 0),
                color: Colors.grey, //Default value
                colorOpacity: 0.3, //Default value
                enabled: true, //Default value
                direction: ShimmerDirection.fromLTRB(), //Default Value
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12.0),
                    color: Colors.grey[200],
                  ),
                ),
              ),
            ),
            Container(
              width: 280,
              height: 190,
              margin: EdgeInsets.only(right: 15.0, bottom: 15.0),
              child: Shimmer(
                duration: Duration(seconds: 3),
                interval: Duration(seconds: 0),
                color: Colors.grey, //Default value
                colorOpacity: 0.3, //Default value
                enabled: true, //Default value
                direction: ShimmerDirection.fromLTRB(), //Default Value
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12.0),
                    color: Colors.grey[200],
                  ),
                ),
              ),
            ),
          ]),
    );
  }
}
