import 'dart:ffi';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hive/hive.dart';
import 'package:job/constants.dart';
import 'package:job/models/city_model.dart';
import 'package:job/models/job_category_model.dart';
import 'package:job/models/job_model.dart';
import 'package:job/models/job_tag_model.dart';
import 'package:job/services/api/business_api.dart';
import 'package:job/services/api/job_api.dart';
import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';
import 'package:smart_select/smart_select.dart';

class UploadJob extends StatefulWidget {
  @override
  _UploadJobState createState() => _UploadJobState();
}

class _UploadJobState extends State<UploadJob> {
  TextEditingController _jobNameController = TextEditingController();
  TextEditingController _jobSalaryFrom = TextEditingController();
  TextEditingController _jobSalaryTo = TextEditingController();
  TextEditingController _jobDescription = TextEditingController();
  TextEditingController _jobAddress = TextEditingController();
  TextEditingController _jobRequirements = TextEditingController();
  TextEditingController _jobBenefits = TextEditingController();
  TextEditingController _jobWorkingTime = TextEditingController();
  TextEditingController _jobPostNumber = TextEditingController();

  late final Box box = Hive.box('authenticationBox');

  late JobCategoryModel jobCategoryId;
  late CityModel jobCity;
  int indexCategory = 0;
  int indexCity = 0;
  String _dateTimePicker = 'Chọn thời gian';

  List<JobTagModel> _tagsChoiced = [];
  // List<S2Choice<JobTagModel>> frameworks = [
  //   S2Choice<JobTagModel>(value: 1, title: 'Ionic'),
  //   S2Choice<JobTagModel>(value: 2, title: 'Flutter'),
  //   S2Choice<JobTagModel>(value: 3, title: 'React Native'),
  // ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: buildAppBar(context),
      body: ListView(
        physics: BouncingScrollPhysics(),
        children: [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: Text(
              "Thông tin công việc",
              style: kPageTitleStyle,
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextField(
              controller: _jobNameController,
              decoration: InputDecoration(
                hintText: 'Tên công việc',
                helperText: 'Tên tiêu đề của công việc',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  width: (MediaQuery.of(context).size.width - 60) * 0.5,
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 10),
                    child: TextField(
                      controller: _jobSalaryFrom,
                      decoration: InputDecoration(
                        hintText: '',
                        helperText: 'Tiền lương ít nhất',
                        border: OutlineInputBorder(),
                        prefixIcon: Icon(Icons.money),
                      ),
                      keyboardType: TextInputType.number,
                      inputFormatters: <TextInputFormatter>[
                        FilteringTextInputFormatter.digitsOnly
                      ],
                    ),
                  ),
                ),
                Container(
                  width: (MediaQuery.of(context).size.width - 60) * 0.5,
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 10),
                    child: TextField(
                      controller: _jobSalaryTo,
                      decoration: InputDecoration(
                        hintText: '',
                        helperText: 'Tiền lương nhiều nhất',
                        border: OutlineInputBorder(),
                        prefixIcon: Icon(Icons.money),
                      ),
                      keyboardType: TextInputType.number,
                      inputFormatters: <TextInputFormatter>[
                        FilteringTextInputFormatter.digitsOnly
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          FutureBuilder(
            future: JobApi().getJobCategories(),
            builder: (context, AsyncSnapshot<List<JobCategoryModel>> snapshot) {
              if (snapshot.hasData) {
                var categories = snapshot.data;
                jobCategoryId = categories![indexCategory];
                return Padding(
                  padding: EdgeInsets.symmetric(horizontal: 50),
                  child: DropdownButton<dynamic>(
                    hint: Text('Phân loại công việc'),
                    value: categories[indexCategory],
                    onChanged: (value) {
                      setState(() {
                        indexCategory = categories.indexOf(value);
                        jobCategoryId = value;
                      });
                    },
                    items: categories
                        .map<DropdownMenuItem>(
                          (category) => DropdownMenuItem<JobCategoryModel>(
                            child: new Text(category.name),
                            value: category,
                          ),
                        )
                        .toList(),
                  ),
                );
              } else if (snapshot.hasError) {
                return Text(
                  'There was an error :(',
                );
              } else {
                return Container();
              }
            },
          ),
          FutureBuilder(
            future: JobApi().getJobTags(),
            builder: (context, AsyncSnapshot<List<JobTagModel>> snapshot) {
              if (snapshot.hasData) {
                var jobTags = snapshot.data;
                List<S2Choice<JobTagModel>> tagChoices = jobTags!
                    .map<S2Choice<JobTagModel>>(
                        (e) => S2Choice(value: e, title: e.name))
                    .toList();
                return Padding(
                  padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                  child: SmartSelect<JobTagModel>.multiple(
                    title: 'Hình thức làm việc',
                    value: this._tagsChoiced,
                    choiceItems: tagChoices,
                    onChange: (state) => this._tagsChoiced = state.value,
                    choiceType: S2ChoiceType.chips,
                    modalType: S2ModalType.bottomSheet,
                  ),
                );
              } else if (snapshot.hasError) {
                return Text(
                  'There was an error :(',
                );
              } else {
                return Container();
              }
            },
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextField(
              controller: _jobAddress,
              decoration: InputDecoration(
                hintText: 'Tên đường công việc',
                helperText: 'Tên đường của công việc',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  width: (MediaQuery.of(context).size.width - 60) * 0.5,
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 10),
                    child: TextField(
                      controller: _jobPostNumber,
                      decoration: InputDecoration(
                        hintText: '',
                        helperText: 'Postzahl',
                        border: OutlineInputBorder(),
                        prefixIcon: Icon(Icons.location_city),
                      ),
                      keyboardType: TextInputType.number,
                      inputFormatters: <TextInputFormatter>[
                        FilteringTextInputFormatter.digitsOnly
                      ],
                    ),
                  ),
                ),
                FutureBuilder(
                  future: JobApi().getCities(),
                  builder: (context, AsyncSnapshot<List<CityModel>> snapshot) {
                    if (snapshot.hasData) {
                      var cities = snapshot.data;
                      jobCity = cities![indexCity];
                      return Container(
                        width: (MediaQuery.of(context).size.width - 100) * 0.5,
                        child: Padding(
                          padding: EdgeInsets.symmetric(
                            horizontal: 10,
                          ),
                          child: DropdownButton<dynamic>(
                            isExpanded: true,
                            hint: Text('Phân loại công việc'),
                            value: cities[indexCity],
                            onChanged: (value) {
                              setState(() {
                                indexCity = cities.indexOf(value);
                                jobCity = value;
                              });
                            },
                            items: cities
                                .map<DropdownMenuItem>(
                                  (city) => DropdownMenuItem<CityModel>(
                                    child: new Text(city.name),
                                    value: city,
                                  ),
                                )
                                .toList(),
                          ),
                        ),
                      );
                    } else if (snapshot.hasError) {
                      return Text(
                        'There was an error :(',
                      );
                    } else {
                      return Container();
                    }
                  },
                ),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextFormField(
              controller: this._jobDescription,
              minLines: 10,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                hintText: 'Mô tả công việc',
                helperText: 'Mô tả chi tiết công việc',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextFormField(
              controller: this._jobRequirements,
              minLines: 10,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                hintText: 'Yêu cầu công việc',
                helperText: 'Yêu cầu của công việc',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextFormField(
              controller: this._jobBenefits,
              minLines: 10,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                hintText: 'Lợi ích cho người làm',
                helperText: 'Các lợi ích cho người làm',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextFormField(
              controller: this._jobWorkingTime,
              minLines: 10,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                hintText: 'Thời gian làm việc',
                helperText: 'Các mốc thời gian làm việc có thể',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: Text("Đăng việc đến ngày:"),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30),
            child: OutlinedButton(
              onPressed: () {
                DatePicker.showDateTimePicker(context, showTitleActions: true,
                    onChanged: (date) {
                  print('change $date in time zone ' +
                      date.timeZoneOffset.inHours.toString());
                }, onConfirm: (date) {
                  print('confirm $date');
                  setState(() {
                    this._dateTimePicker = date.toString();
                  });
                }, currentTime: DateTime.now());
              },
              child: Text(
                _dateTimePicker,
                style: TextStyle(color: Colors.blue),
              ),
            ),
          ),
          SizedBox(
            height: 20,
          ),
          Container(
            height: 55,
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 30),
              child: ElevatedButton(
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.blue),
                ),
                onPressed: () {
                  print("upload job");
                  var businessId = box.get('business_id');
                  print("busineessId" + businessId.toString());
                  DateTime now = new DateTime.now();
                  JobModel job = new JobModel(
                    jobId: "",
                    jobName: this._jobNameController.text,
                    business: businessId,
                    jobDescription: this._jobDescription.text,
                    jobAddress: this._jobAddress.text,
                    workingTime: this._jobWorkingTime.text,
                    note: "",
                    jobLatitude: 0,
                    jobLongitude: 0,
                    salaryFrom: double.parse(this._jobSalaryFrom.text),
                    salaryTo: double.parse(this._jobSalaryTo.text),
                    createdTime: now.toString(),
                    expiredTime: this._dateTimePicker,
                    jobCategory: this.jobCategoryId,
                    city: this.jobCity,
                    jobRequirements: this._jobRequirements.text,
                    jobTags: this._tagsChoiced,
                    active: true,
                    post_code: int.parse(this._jobPostNumber.text),
                    jobBenefits: this._jobBenefits.text,
                  );

                  print(job);
                  BusinessApi().newJob(job);
                  this._tagsChoiced = [];
                },
                child: const Text(
                  'Đăng',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                  ),
                ),
              ),
            ),
          ),
          SizedBox(
            height: 20,
          ),
        ],
      ),
    );
  }

  AppBar buildAppBar(BuildContext context) {
    return AppBar(
      leading: BackButton(
        color: Colors.black,
      ),
      backgroundColor: Colors.transparent,
      elevation: 0,
      actions: [],
    );
  }
}
