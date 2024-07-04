#include <iostream>

using namespace std;

int main () {
  string str;
  cout << "What word would you like to convert to ASCII? >> ";
  cin >> str;

  for (int i = 0; i < str.length(); i++) {
    cout << str[i] << " => " << (int)str[i] << endl;
  }

  return 0;
}