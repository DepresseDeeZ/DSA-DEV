#include <bits/stdc++.h>
using namespace std;

int factoiral(int n){
  if(n==0||n==1) return 1;
  return n*factoiral(n-1);
  
}

int main(){
  int n;
  cout << "enter the number ";  
  cin >> n;
  cout << factoiral(n);
  return 0;
}