import 'package:job/models/business_category_model.dart';

class BusinessModel {
  final String businessId;
  final String businessName;
  final String businessAddress;
  final String businessDescription;
  final String businessLogoPath;
  final BusinessCategoryModel businessCategory;

  const BusinessModel({
    required this.businessId,
    required this.businessName,
    required this.businessAddress,
    required this.businessDescription,
    required this.businessLogoPath,
    required this.businessCategory,
  });

  factory BusinessModel.fromJson(Map<String, dynamic> json) {
    return BusinessModel(
      businessId: json['businessId'] != null ? json['businessId'] : '',
      businessName: json['businessName'] != null ? json['businessName'] : '',
      businessAddress:
          json['businessAdress'] != null ? json['businessAdress'] : '',
      businessDescription: json['businessDescription'] != null
          ? json['businessDescription']
          : '',
      businessLogoPath:
          json['businessLogoPath'] != null ? json['businessLogoPath'] : '',
      businessCategory:
          BusinessCategoryModel.fromJson(json['businessCategory']),
    );
  }

  @override
  String toString() {
    return "businessId=" +
        this.businessId +
        ", businessName=" +
        this.businessName;
  }
}
