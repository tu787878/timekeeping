import 'package:job/models/job_model.dart';

class JobResponse {
  final JobModel job;
  final int subscribers;
  final bool isApplied;

  JobResponse({
    required this.job,
    required this.subscribers,
    required this.isApplied,
  });

  factory JobResponse.fromJson(Map<String, dynamic> json) {
    return JobResponse(
      job: JobModel.fromJson(json['job']),
      subscribers: json['subscribers'] != null ? json['subscribers'] : '',
      isApplied: json['isApplied'] != null ? json['isApplied'] : '',
    );
  }
}
