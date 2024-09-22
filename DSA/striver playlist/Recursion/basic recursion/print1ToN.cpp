#include <bits/stdc++.h>
using namespace std;

void function1(int i, int n){
  if(i>n) return;
  cout << i;
  function1(i+1, n);
  
}

int main(){
  int n;
  cout << "enter the nunber of letter you want print ";
  cin >> n;
  function1(1,n);
}