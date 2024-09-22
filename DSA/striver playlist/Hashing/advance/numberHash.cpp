#include<bits/stdc++.h>
using namespace std;


int main(){
  int n;
//   cout << "enter the size of an array";
  cin >> n;
  int arr[n];
  map<int ,int> mpp;
//   cout<< " enter the elements of an array";
  for(int i=0;i<n;i++){
    cin >> arr[i]; 
    mpp[arr[i]]++;
  }

//   cout << "enter the number of element you want to see";
  int q;
  cin >> q;
  while(q--){
    int number;
    // cout <<" enter the numbers";
    cin >> number;
    cout <<"number "<<number<<" appears "<< mpp[number]<<" times " << endl ;
  }
}


