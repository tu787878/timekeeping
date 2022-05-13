class CityModel {
  final int id;
  final String name;
  final String color;

  const CityModel({
    required this.id,
    required this.name,
    required this.color,
  });

  factory CityModel.fromJson(Map<String, dynamic> json) {
    return CityModel(
      id: json['id'] != null ? json['id'] : '',
      name: json['name'] != null ? json['name'] : '',
      color: json['color'] != null ? json['color'] : '',
    );
  }
}
