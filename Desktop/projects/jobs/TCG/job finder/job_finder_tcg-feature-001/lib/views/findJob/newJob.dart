import 'package:flutter/material.dart';
import 'package:job/constants.dart';
import 'package:job/models/job_model.dart';
import 'package:job/models/query_search.dart';
import 'package:job/services/api/job_api.dart';
import 'package:job/views/findJob/job_detail.dart';
import 'package:job/widgets/company_card2.dart';

class NewJob extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return (Column(
      children: [
        Text(
          "Mới",
          style: kTitleStyle,
        ),
        SizedBox(height: 15.0),
        FutureBuilder(
          future: JobApi().getNewJobs(queryNewJobsBasic),
          builder: (context, AsyncSnapshot<List<JobModel>> snapshot) {
            if (snapshot.hasData) {
              var tuples = snapshot.data;
              return ListView.builder(
                itemCount: tuples!.length,
                scrollDirection: Axis.vertical,
                shrinkWrap: true,
                physics: BouncingScrollPhysics(),
                itemBuilder: (context, index) {
                  var job = tuples[index];
                  return InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => JobDetail(
                              job: job,
                            ),
                          ),
                        );
                      },
                      child: CompanyCard2(job: job));
                },
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
      ],
    ));
  }
}
