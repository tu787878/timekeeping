class JobCategoryModel {
  final int id;
  final String name;
  final String color;
  final String businessCategoryId;

  const JobCategoryModel({
    required this.id,
    required this.name,
    required this.color,
    required this.businessCategoryId,
  });

  factory JobCategoryModel.fromJson(Map<String, dynamic> json) {
    return JobCategoryModel(
      id: json['id'] != null ? json['id'] : '',
      name: json['name'] != null ? json['name'] : '',
      color: json['color'] != null ? json['color'] : '',
      businessCategoryId:
          json['businessCategoryId'] != null ? json['businessCategoryId'] : '',
    );
  }
}
