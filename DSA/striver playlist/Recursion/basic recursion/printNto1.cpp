#include <bits/stdc++.h>
using namespace std;

void function1(int n){
  if(n==0) return;
  cout << n;
  function1(n-1);

}

int main(){
  int n;
  cout << "enter the nunber ";
  cin >> n;
  function1(n);
}