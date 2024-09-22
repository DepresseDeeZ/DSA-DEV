#include <bits/stdc++.h>
using namespace std;

int fibbo(int n){
  if(n<=1){
    return n;
  }
  return fibbo(n-1)+fibbo(n-2);
}

int main(){
  int n;
  cout << "enter the number of fibbo series you want ";
  cin >> n;
  for(int i=0;i<n;i++){
    cout << fibbo(i)<<endl;
    
  }
  return 0;

}