import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:job/constants.dart';
import 'package:job/models/job_model.dart';
import 'package:job/models/query_search.dart';
import 'package:job/models/tupel.dart';
import 'package:job/services/api/job_api.dart';
import 'package:job/views/findJob/job_detail.dart';
import 'package:job/widgets/appbar.dart';
import 'package:job/widgets/company_card.dart';
import 'package:job/widgets/company_card2.dart';

class FindPeople extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarCustom(),
      body: Container(
        margin: EdgeInsets.only(left: 18.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
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
                      child: Icon(
                        FontAwesomeIcons.slidersH,
                        color: Colors.white,
                        size: 20.0,
                      ),
                    )
                  ],
                ),
              ),
              SizedBox(height: 35.0),
              Text(
                "Phù hợp",
                style: kTitleStyle,
              ),
              SizedBox(height: 15.0),
              FutureBuilder(
                future: JobApi().getHotJobs(queryNewJobsBasic),
                builder: (context, AsyncSnapshot<List<JobModel>> snapshot) {
                  if (snapshot.hasData) {
                    var tuples = snapshot.data;
                    return Container(
                      width: double.infinity,
                      height: 190.0,
                      child: ListView.builder(
                        itemCount: tuples!.length,
                        scrollDirection: Axis.horizontal,
                        shrinkWrap: true,
                        physics: BouncingScrollPhysics(),
                        itemBuilder: (context, index) {
                          print(tuples[index]);
                          return Text("nghia");
                          // var job = tuples[index].item1;
                          // var business = tuples[index].item2;
                          // return InkWell(
                          //   onTap: () {
                          //     Navigator.push(
                          //       context,
                          //       MaterialPageRoute(
                          //         builder: (context) => JobDetail(
                          //           job: job,
                          //           business: business,
                          //         ),
                          //       ),
                          //     );
                          //   },
                          //   child: index == 0
                          //       ? CompanyCard(job: job, business: business)
                          //       : CompanyCard2(job: job, business: business),
                          // );
                        },
                      ),
                    );
                  } else if (snapshot.hasError) {
                    return Text(
                      'There was an error :(',
                    );
                  } else {
                    return CircularProgressIndicator();
                  }
                },
              ),
              SizedBox(height: 35.0),
            ],
          ),
        ),
      ),
    );
  }
}
