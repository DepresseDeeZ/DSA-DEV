#include<bits/stdc++.h>
using namespace std;

int hasht[100000000]={0};

int main(){
  int n;
  cout << "enter the size of an array";
  cin >> n;
  int arr[n];
  cout<< " enter the elements of an array";
  for(int i=0;i<n;i++){
    cin >> arr[i]; 
  }

  //precomupte for hashing
  for(int i=0;i<n;i++){
    hasht[arr[i]] += 1;
  }

  cout << "enter the number of element you want to see";
  int q;
  cin >> q;
  while(q--){
    int number;
    cout <<" enter the numbers";
    cin >> number;
    cout <<"number "<<number<<" appears "<< hasht[number]<<" times " << endl ;
  }
}


// #include<bits/stdc++.h>
// using namespace std;


// int main(){
//   int n;
//   cout << "enter the size of an array";
//   cin >> n;
//   int arr[n];
//   cout<< " enter the elements of an array";
//   for(int i=0;i<n;i++){
//     cin >> arr[i]; 
//   }

//   //precomupte for hashing
//   for(int i=0;i<n;i++){
//     hash[arr[i]] += 1;
//   }

//   cout << "enter the number of element you want to see";
//   int q;
//   cin >> q;
//   while(q--){
//     int number;
//     cout <<" enter the numbers";
//     cin >> number;
//     cout <<"number "<<number<<" appears "<< hash[number]<<" times " << endl ;
//   }
// }