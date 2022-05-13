import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'package:http/http.dart' as http;
import 'package:job/models/JobResponse.dart';
import 'package:job/models/business_model.dart';
import 'package:job/models/city_model.dart';
import 'package:job/models/job_category_model.dart';
import 'package:job/models/job_model.dart';
import 'package:job/models/job_tag_model.dart';
import 'package:job/models/query_search.dart';
import 'package:job/models/tupel.dart';
import 'package:job/models/url_model.dart';

class JobApi {
  late final Box box = Hive.box('authenticationBox');
  late final String host = UrlModel.toUrl();

  Future<List<JobModel>> getHotJobs(QuerySearch query) async {
    var token = box.get('access_token');
    if (token != null) {
      String url = host + "/api/jobs";
      final response = await http.get(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token.toString(),
        },
      );

      if (response.statusCode == 200 || response.statusCode == 400) {
        List<JobModel> jobModels =
            json.decode(response.body)['data']['jobs'].map<JobModel>((data) {
          return JobResponse.fromJson(data);
        }).toList();
        return jobModels;
      } else {
        throw Exception('Api fail!');
      }
    } else {
      throw Exception('Api fail!');
    }
  }

  Future<List<JobModel>> getNewJobs(QuerySearch query) async {
    var token = box.get('access_token');
    if (token != null) {
      String url = host + "/api/jobs";
      final response = await http.get(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token.toString(),
        },
      );

      if (response.statusCode == 200 || response.statusCode == 400) {
        List<JobModel> jobModels =
            json.decode(response.body)['data']['jobs'].map<JobModel>((data) {
          return new JobModel.fromJson(data);
        }).toList();
        return jobModels;
      } else {
        throw Exception('Api fail!');
      }
    } else {
      throw Exception('Api fail!');
    }
  }

  Future<List<JobCategoryModel>> getJobCategories() async {
    var token = box.get('access_token');
    if (token != null) {
      String url = host + "/api/jobs/categories";
      final response = await http.get(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token.toString(),
        },
      );
      // print(response.statusCode);
      // jsonDecode(utf8.decode(response.bodyBytes))
      // print(json.decode(response.body)['data']['business']);
      if (response.statusCode == 200 || response.statusCode == 400) {
        // print(json.decode(response.body)['data']['jobs'][0]["business"]);
        var res = jsonDecode(utf8.decode(response.bodyBytes));

        List<JobCategoryModel> jobCategories =
            res['data']['jobCategories'].map<JobCategoryModel>((data) {
          return new JobCategoryModel.fromJson(data);
        }).toList();

        return jobCategories;
      } else {
        throw Exception('Api fail!');
      }
    } else {
      throw Exception('Api fail!');
    }
  }

  Future<List<CityModel>> getCities() async {
    var token = box.get('access_token');
    if (token != null) {
      String url = host + "/api/jobs/cities";
      final response = await http.get(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token.toString(),
        },
      );
      // print(response.statusCode);
      // jsonDecode(utf8.decode(response.bodyBytes))
      // print(json.decode(response.body)['data']['business']);
      if (response.statusCode == 200 || response.statusCode == 400) {
        // print(json.decode(response.body)['data']['jobs'][0]["business"]);
        var res = jsonDecode(utf8.decode(response.bodyBytes));

        List<CityModel> cities = res['data']['cities'].map<CityModel>((data) {
          return new CityModel.fromJson(data);
        }).toList();

        return cities;
      } else {
        throw Exception('Api fail!');
      }
    } else {
      throw Exception('Api fail!');
    }
  }

  Future<List<JobTagModel>> getJobTags() async {
    var token = box.get('access_token');
    if (token != null) {
      String url = host + "/api/jobs/tags";
      final response = await http.get(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token.toString(),
        },
      );
      // print(response.statusCode);
      // jsonDecode(utf8.decode(response.bodyBytes))
      // print(json.decode(response.body)['data']['business']);
      if (response.statusCode == 200 || response.statusCode == 400) {
        // print(json.decode(response.body)['data']['jobs'][0]["business"]);
        var res = jsonDecode(utf8.decode(response.bodyBytes));

        List<JobTagModel> tags = res['data']['tags'].map<JobTagModel>((data) {
          return new JobTagModel.fromJson(data);
        }).toList();

        return tags;
      } else {
        throw Exception('Api fail!');
      }
    } else {
      throw Exception('Api fail!');
    }
  }
}
