#include <bits/stdc++.h>
#include<array>
using namespace std;

void reverseArray(int arr[],int l,int r){
  if(l>=r) return;
  swap(arr[l],arr[r]);
  reverseArray(arr,l+1,r-1);  
  
}

int main(){
  int arr[] = {1,2,3,4,5,6,7,8,9,10};
  int n = sizeof(arr)/sizeof(arr[0]);
  reverseArray(arr,0,n-1);
  for(int i=0;i<n;i++){
    cout << arr[i] << " ";
  }
  return 0;
}










