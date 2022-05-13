import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:job/models/business_model.dart';
import 'package:job/models/company.dart';
import 'package:job/models/job_model.dart';
import 'package:job/services/api/business_api.dart';
import 'package:job/views/findJob/job_detail.dart';
import 'package:job/widgets/appbar_widget.dart';
import 'package:job/widgets/job_mini_card.dart';
import 'package:job/widgets/numbers_widget.dart';
import 'package:job/widgets/profile_widget.dart';
import 'package:job/widgets/recent_job_card.dart';

class ProfilePage extends StatefulWidget {
  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: BusinessApi().getBusiness(),
      builder: (context, AsyncSnapshot<BusinessModel> snapshot) {
        if (snapshot.hasData) {
          var business = snapshot.data;
          return Scaffold(
            appBar: buildProfileAppBar(context),
            body: ListView(
              physics: BouncingScrollPhysics(),
              children: [
                ProfileWidget(
                  imagePath: NetworkImage(business!.businessLogoPath),
                  onClicked: () async {},
                  own: false,
                ),
                buildName(business),
                const SizedBox(height: 24),
                // Center(child: buildUpgradeButton()),
                // const SizedBox(height: 24),
                NumbersWidget(),
                const SizedBox(height: 48),
                buildAbout(business),
                const SizedBox(height: 48),
                buildJob(business),
              ],
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
    );
  }

  Widget buildName(BusinessModel business) => Column(
        children: [
          Text(
            business.businessName,
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
          ),
          const SizedBox(height: 4),
          Text(
            business.businessAddress,
            style: TextStyle(color: Colors.black87),
          ),
          const SizedBox(height: 6),
          Container(
            margin: EdgeInsets.symmetric(horizontal: 5.0),
            padding: EdgeInsets.symmetric(
              horizontal: 8.0,
              vertical: 5.0,
            ),
            decoration: BoxDecoration(
              color: Colors.blueGrey,
              borderRadius: BorderRadius.circular(8.0),
              // border: Border.all(color: kBlack.withOpacity(.5)),
            ),
            child: Text(
              business.businessCategory.name,
              style: TextStyle(color: Colors.white),
            ),
          )
        ],
      );

  // Widget buildUpgradeButton() => ButtonWidget(
  //       text: 'Upgrade To PRO',
  //       onClicked: () {},
  //     );

  Widget buildAbout(BusinessModel business) => Container(
        padding: EdgeInsets.symmetric(horizontal: 48),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'About',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            Text(
              business.businessDescription,
              style: TextStyle(fontSize: 16, height: 1.4),
            ),
          ],
        ),
      );

  Widget buildJob(BusinessModel business) => FutureBuilder(
      future: BusinessApi().getJobs(),
      builder: (context, AsyncSnapshot<List<JobModel>> snapshot) {
        if (snapshot.hasData) {
          var jobs = snapshot.data;
          return Container(
            padding: EdgeInsets.symmetric(horizontal: 48),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Jobs',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 16),
                ListView.builder(
                  itemCount: jobs!.length,
                  scrollDirection: Axis.vertical,
                  shrinkWrap: true,
                  physics: ScrollPhysics(),
                  itemBuilder: (context, index) {
                    var job = jobs[index];
                    return InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => JobDetail(
                              job: null,
                            ),
                          ),
                        );
                      },
                      child: JobMiniCard(job: job, business: business),
                    );
                  },
                ),
                const SizedBox(height: 16),
                Card(
                  elevation: 0.0,
                  margin: EdgeInsets.only(left: 20.0),
                  child: Text(
                    'See more',
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          );
        } else if (snapshot.hasError) {
          return Text(
            'There was an error :(',
          );
        } else {
          return CircularProgressIndicator();
        }
      });
}
