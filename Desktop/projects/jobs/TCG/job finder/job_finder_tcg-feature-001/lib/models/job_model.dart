import 'package:job/models/business_model.dart';
import 'package:job/models/city_model.dart';
import 'package:job/models/job_category_model.dart';
import 'package:job/models/job_tag_model.dart';

class JobModel {
  final String jobId;
  final String jobName;
  final BusinessModel business;
  final String jobDescription;
  final String jobAddress;
  final String workingTime;
  final String note;
  final int jobLatitude;
  final int jobLongitude;
  final double salaryFrom;
  final double salaryTo;
  final String createdTime;
  final String expiredTime;
  final JobCategoryModel jobCategory;
  final CityModel city;
  final String jobRequirements;
  final String jobBenefits;
  final List<JobTagModel> jobTags;
  final bool active;
  final int post_code;

  const JobModel({
    required this.jobId,
    required this.jobName,
    required this.business,
    required this.jobDescription,
    required this.jobAddress,
    required this.workingTime,
    required this.note,
    required this.jobLatitude,
    required this.jobLongitude,
    required this.salaryFrom,
    required this.salaryTo,
    required this.createdTime,
    required this.expiredTime,
    required this.jobCategory,
    required this.city,
    required this.jobRequirements,
    required this.jobTags,
    required this.active,
    required this.post_code,
    required this.jobBenefits,
  });

  factory JobModel.fromJson(Map<String, dynamic> json) {
    return JobModel(
      jobId: json['jobId'] != null ? json['jobId'] : '',
      jobName: json['jobName'] != null ? json['jobName'] : '',
      business: BusinessModel.fromJson(json['business']),
      jobDescription:
          json['jobDescription'] != null ? json['jobDescription'] : '',
      jobAddress: json['jobAddress'] != null ? json['jobAddress'] : '',
      workingTime: json['workingTime'] != null ? json['workingTime'] : '',
      note: json['note'] != null ? json['note'] : '',
      jobLatitude: json['jobLatitude'] != null ? json['jobLatitude'] : '',
      jobLongitude: json['jobLongitude'] != null ? json['jobLongitude'] : '',
      salaryFrom: json['salaryFrom'] != null ? json['salaryFrom'] : '',
      salaryTo: json['salaryTo'] != null ? json['salaryTo'] : '',
      createdTime: json['createdTime'] != null ? json['createdTime'] : '',
      expiredTime: json['expiredTime'] != null ? json['expiredTime'] : '',
      jobCategory: JobCategoryModel.fromJson(json['jobCategory']),
      city: CityModel.fromJson(json['city']),
      jobTags: json['jobTag']
          .map<JobTagModel>((data) => JobTagModel.fromJson(data))
          .toList(),
      jobRequirements:
          json['jobRequirements'] != null ? json['jobRequirements'] : '',
      active: json['active'] != null ? json['active'] : '',
      post_code: json['postCode'] != null ? json['post_code'] : '',
      jobBenefits: json['jobBenefits'] != null ? json['jobBenefits'] : '',
    );
  }

  @override
  String toString() {
    return "jobId=" +
        this.jobId +
        ", jobName=" +
        this.jobName +
        ", jobTags=" +
        this.jobTags.length.toString();
  }
}
