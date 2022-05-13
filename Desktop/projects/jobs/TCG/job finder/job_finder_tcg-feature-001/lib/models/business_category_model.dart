class BusinessCategoryModel {
  final String categoryId;
  final String name;

  const BusinessCategoryModel({
    required this.categoryId,
    required this.name,
  });

  @override
  bool operator ==(Object other) =>
      other is BusinessCategoryModel && other.categoryId == categoryId;

  @override
  int get hashCode => categoryId.hashCode;

  factory BusinessCategoryModel.fromJson(Map<String, dynamic> json) {
    return BusinessCategoryModel(
      categoryId:
          json['businessCategoryId'] != null ? json['businessCategoryId'] : '',
      name: json['businessCategoryName'] != null
          ? json['businessCategoryName']
          : '',
    );
  }
}
