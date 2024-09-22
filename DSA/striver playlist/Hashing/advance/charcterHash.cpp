//ordered Map

// #include<bits/stdc++.h>
// using namespace std;


// int main(){
//     string s;
//     cin >> s;
//     map<char,int> mpp;
//     for(int i=0;i<s.size();i++){
//         mpp[s[i]]+=1;
//     }
//     //iterating through an map for this is ordered
//     for(auto it:mpp){
//         cout << it.first << "->"<<it.second<<endl;
//     }

//     int q;
//     cin >> q;
//     while(q--){
//         char c;
//         cin >> c;
//         cout << "character "<< c << " appears " << mpp[c] <<" times"<<endl;
//     }
// }

//Unordered Map
#include<bits/stdc++.h>
using namespace std;


int main(){
    string s;
    cin >> s;
    unordered_map<char,int> mpp;
    for(int i=0;i<s.size();i++){
        mpp[s[i]]+=1;
    }
    //iterating through an map for this is ordered
    for(auto it:mpp){
        cout << it.first << "->"<<it.second<<endl;
    }

    int q;
    cin >> q;
    while(q--){
        char c;
        cin >> c;
        cout << "character "<< c << " appears " << mpp[c] <<" times"<<endl;
    }
}