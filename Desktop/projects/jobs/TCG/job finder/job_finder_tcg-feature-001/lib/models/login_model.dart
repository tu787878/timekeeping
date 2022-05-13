class LoginResponseModel {
  final int code;
  final String timestamp;
  final String message;
  final data;

  LoginResponseModel({
    required this.code,
    required this.timestamp,
    required this.message,
    required this.data,
  });

  factory LoginResponseModel.fromJson(Map<String, dynamic> json) {
    return LoginResponseModel(
      code: json['code'] != null ? json['code'] : '',
      timestamp: json['timestamp'] != null ? json['timestamp'] : '',
      message: json['message'] != null ? json['message'] : '',
      data: json['data'] != null ? json['data'] : null,
    );
  }
}

class LoginRequestModel {
  String username;
  String password;

  LoginRequestModel({
    required this.username,
    required this.password,
  });

  Map<String, dynamic> toJson() {
    Map<String, dynamic> map = {
      'username': username.trim(),
      'password': password.trim(),
    };
    return map;
  }
}
