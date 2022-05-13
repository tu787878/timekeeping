import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:job/models/business_category_model.dart';
import 'package:job/models/business_model.dart';
import 'package:job/services/api/business_api.dart';
import 'package:job/widgets/profile_widget.dart';

class Editprofile extends StatefulWidget {
  @override
  _EditprofileState createState() => _EditprofileState();
}

class _EditprofileState extends State<Editprofile> {
  TextEditingController _businessNameController = TextEditingController();
  TextEditingController _businessAddressController = TextEditingController();

  TextEditingController _businessDescriptionController =
      TextEditingController();

  String _selectedCategory = "";
  String _selectedCategoryName = "";
  late File _image;
  bool _isSelected = false;

  _imgFromGallery() async {
    File image = await ImagePicker.pickImage(
        source: ImageSource.gallery, imageQuality: 50);

    setState(() {
      _image = image;
      _isSelected = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: BusinessApi().getBusiness(),
      builder: (context, AsyncSnapshot<BusinessModel> snapshot) {
        if (snapshot.hasData) {
          var business = snapshot.data;
          _businessNameController.text = business!.businessName;
          _businessAddressController.text = business.businessAddress;
          _businessDescriptionController.text = business.businessDescription;
          _selectedCategory = business.businessCategory.categoryId;
          return Scaffold(
            appBar: buildAppBar(context),
            body: ListView(
              physics: BouncingScrollPhysics(),
              children: [
                ProfileWidget(
                  imagePath: _isSelected
                      ? FileImage(this._image) as ImageProvider
                      : NetworkImage(business.businessLogoPath),
                  onClicked: () {
                    _imgFromGallery();
                  },
                  own: true,
                ),
                const SizedBox(height: 24),
                buildName(business),
                Padding(
                  padding: EdgeInsets.symmetric(
                    horizontal: 30,
                    vertical: 10,
                  ),
                  child: Text(
                    "Doanh nghiệp của bạn là:",
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                FutureBuilder(
                  future: BusinessApi().getBusinessCategories(),
                  builder: (context,
                      AsyncSnapshot<List<BusinessCategoryModel>> snapshot) {
                    if (snapshot.hasData) {
                      var categories = snapshot.data;
                      return Padding(
                        padding: EdgeInsets.symmetric(
                          horizontal: 30,
                          vertical: 10,
                        ),
                        child: DropdownButton<dynamic>(
                          hint: Text(
                              'Loại doanh nghiệp của bạn'), // Not necessary for Option 1
                          value: this._selectedCategory,
                          onChanged: (_) {},
                          items: categories!
                              .map<DropdownMenuItem>(
                                (category) => DropdownMenuItem<String>(
                                  child: new Text(category.name),
                                  value: category.categoryId,
                                ),
                              )
                              .toList(),
                        ),
                      );
                    } else if (snapshot.hasError) {
                      return Text(
                        'There was an error :(',
                      );
                    } else {
                      return CircularProgressIndicator();
                    }
                  },
                ),
                // Center(child: buildUpgradeButton()),
                // const SizedBox(height: 24),
                // const SizedBox(height: 48),
                // buildAbout(business),
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 30,
                  ),
                  child: OutlinedButton(
                    onPressed: () {
                      BusinessCategoryModel newBusinessCategory =
                          new BusinessCategoryModel(
                              categoryId: this._selectedCategory, name: "");
                      BusinessModel newBusiness = new BusinessModel(
                        businessId: business.businessId,
                        businessName: this._businessNameController.text,
                        businessAddress: this._businessAddressController.text,
                        businessDescription:
                            this._businessDescriptionController.text,
                        businessLogoPath: business.businessLogoPath,
                        businessCategory: newBusinessCategory,
                      );
                      print(newBusiness.businessId);
                      BusinessApi().saveBusinessProfile(newBusiness, null);
                    },
                    child: const Text('Lưu'),
                  ),
                ),
              ],
            ),
          );
        } else if (snapshot.hasError) {
          return Text(
            'There was an error :(',
          );
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }

  Widget buildName(BusinessModel business) => Column(
        children: [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextField(
              controller: this._businessNameController,
              decoration: InputDecoration(
                hintText: 'Tên doanh nghiệp',
                helperText: 'Tên doanh nghiệp của bạn',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextField(
              controller: this._businessAddressController,
              decoration: InputDecoration(
                hintText: 'Địa chỉ doanh nghiệp',
                helperText: 'Địa chỉ doanh nghiệp của bạn',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: TextFormField(
              controller: _businessDescriptionController,
              minLines: 10,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                hintText: 'Mô tả doanh nghiệp',
                helperText: 'Mô tả doanh nghiệp của bạn',
                border: OutlineInputBorder(),
              ),
            ),
          ),
        ],
      );
  AppBar buildAppBar(BuildContext context) {
    return AppBar(
      leading: BackButton(
        color: Colors.black,
      ),
      backgroundColor: Colors.transparent,
      elevation: 0,
      actions: [],
    );
  }
}
