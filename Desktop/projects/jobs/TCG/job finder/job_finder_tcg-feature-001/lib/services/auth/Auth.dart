import 'dart:convert';
import 'package:hive/hive.dart';
import 'package:http/http.dart' as http;
import 'package:job/models/login_model.dart';
import 'package:job/models/url_model.dart';

class AuthService {
  late final Box box = Hive.box('authenticationBox');
  late final String host = UrlModel.toUrl();

  Future<bool> tokenIsActive() async {
    // create();
    var token = box.get('access_token');
    if (token != null) {
      String url = host + "/authenticate/checkToken";
      final response = await http.get(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token.toString(),
        },
      );
      var result = json.decode(response.body);
      print(result);
      if (result['code'] == 0) {
        print(result['message']);
        box.put("account_id", result['data']['accountId']);
        // box.put("username", result['data']['userName']);
        box.put("business", result['data']['business']);
        box.put("business_id", result['data']['businessId']);
        box.put("user_id", result['data']['userId']);
        return true;
      }
    }
    return false;
  }

  Future<bool> create() async {
    var token = box.get('access_token');
    if (token != null) {
      String url = host + "/api/business";
      final response = await http.get(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token.toString(),
        },
      );
      var result = json.decode(response.body);
      print(result);
    }
    return false;
  }

  Future<LoginResponseModel> login(LoginRequestModel loginRequestModel) async {
    String url = host + "/authenticate";
    final response = await http.post(
      Uri.parse(url),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: json.encode(loginRequestModel.toJson()),
    );

    // print(response.body);
    if (response.statusCode == 200 || response.statusCode == 400) {
      LoginResponseModel loginResponseModel =
          LoginResponseModel.fromJson(json.decode(response.body));
      if (loginResponseModel.code == 0) {
        print(loginResponseModel.data['token']);
        box.put('access_token', loginResponseModel.data['token']);
        // print('access_token: ' + box.get('access_token'));
      }
      return loginResponseModel;
    } else {
      throw Exception('Fail to load data!');
    }
  }
}
