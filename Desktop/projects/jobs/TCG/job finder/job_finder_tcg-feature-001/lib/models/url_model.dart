import 'package:flutter/foundation.dart';

class UrlModel {
  static String urlLocal = "http://217.160.246.161:8080";
  static String urlProduct = "http://217.160.246.161:8080";

  static String toUrl() {
    if (kReleaseMode) return urlProduct;
    return urlLocal;
  }
}
