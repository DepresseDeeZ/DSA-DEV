#include <bits/stdc++.h>
using namespace std;

void function1(int i,int n){
  if(i<1){
  cout << n;
  return;
  }
  function1(i-1,n+i);
}


int main(){
  int n;
  cout << "enter the number ";
  cin >> n;
  function1(n,0);
}