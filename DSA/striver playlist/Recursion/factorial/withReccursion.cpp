#include<bits/stdc++.h>
using namespace std;

int factorial(int i,int n){
  if(i<=1) return n;
  return factorial(i-1,n*i);
}
int main(){
  int n;
  cout << "enter a number ";
  cin >> n;
  cout << factorial(n,1);
  return 0;
}





