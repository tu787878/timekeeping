class User {
  final String imagePath;
  final String name;
  final String email;
  final String about;
  final bool isDarkMode;

  const User({
    required this.imagePath,
    required this.name,
    required this.email,
    required this.about,
    required this.isDarkMode,
  });
}

User myUser = User(
  imagePath:
      'https://www.creativefabrica.com/wp-content/uploads/2020/11/07/DIY-logo-stamp-design-template-concept-Graphics-6510097-1-1-580x386.png',
  name: 'Mymycuisine',
  email: 'contact.mymycuisine@gmail.com',
  about:
      'Certified Personal Trainer and Nutritionist with years of experience in creating effective diets and training plans focused on achieving individual customers goals in a smooth way.',
  isDarkMode: false,
);
