import 'package:flutter/material.dart';
import 'package:google_nav_bar/google_nav_bar.dart';
import 'package:job/views/findJob/home.dart';
import 'package:job/views/findJob/jobLoadingSkeleton.dart';
import 'package:job/views/findStaff/people.dart';
import 'package:line_icons/line_icons.dart';

class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  List<Widget> _tabs = [Home(), FindPeople(), Home(), Home()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        children: _tabs,
        index: _selectedIndex,
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Colors.white,
        ),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15.0, vertical: 8),
            child: GNav(
              rippleColor: Colors.grey[300]!,
              hoverColor: Colors.grey[100]!,
              gap: 8,
              activeColor: Colors.white,
              iconSize: 24,
              padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
              duration: Duration(milliseconds: 400),
              tabBackgroundColor: Colors.black,
              color: Color(0xFFA5A7AC),
              tabs: [
                GButton(
                  icon: LineIcons.home,
                  text: 'Tìm việc',
                ),
                GButton(
                  icon: LineIcons.mapMarked,
                  text: 'Tìm người',
                ),
                GButton(
                  icon: LineIcons.podcast,
                  text: 'Lưu',
                ),
                GButton(
                  icon: LineIcons.inbox,
                  text: 'Tin nhắn',
                ),
              ],
              selectedIndex: _selectedIndex,
              onTabChange: (index) {
                setState(() {
                  _selectedIndex = index;
                });
              },
            ),
          ),
        ),
      ),
    );
  }
}
