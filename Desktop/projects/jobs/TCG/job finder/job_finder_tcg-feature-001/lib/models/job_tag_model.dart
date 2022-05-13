class JobTagModel {
  final int id;
  final String name;
  final String color;

  const JobTagModel({
    required this.id,
    required this.name,
    required this.color,
  });

  factory JobTagModel.fromJson(Map<String, dynamic> json) {
    return JobTagModel(
      id: json['id'] != null ? json['id'] : '',
      name: json['name'] != null ? json['name'] : '',
      color: json['color'] != null ? json['color'] : '',
    );
  }
}
