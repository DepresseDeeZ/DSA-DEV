#include <bits/stdc++.h>
using namespace std;

void merge(int arr[], int l, int m, int r)
    {
        int n = r - l + 1; // Calculate size of the temporary array
        int temp[n];       // Temporary array to store the sorted elements
        
        int left = l;      // Starting index of left subarray
        int right = m + 1; // Starting index of right subarray
        int k = 0;         // Index for the temp array
        
        // Merging two halves
        while (left <= m && right <= r) {
            if (arr[left] <= arr[right]) {
                temp[k] = arr[left];
                left++;
            } else {
                temp[k] = arr[right];
                right++;
            }
            k++;
        }
        
        // Copy remaining elements of left half
        while (left <= m) {
            temp[k] = arr[left];
            left++;
            k++;
        }
        
        // Copy remaining elements of right half
        while (right <= r) {
            temp[k] = arr[right];
            right++;
            k++;
        }
        
        // Copy the sorted elements back into the original array
        for (int i = l; i <= r; i++) {
            arr[i] = temp[i - l];
        }

         
    }
    void mergeSort(int arr[], int l, int r)
    {
        //code here
        if (l < r) {
            int mid = (l + r) / 2;
            mergeSort(arr, l, mid);
            mergeSort(arr, mid + 1, r);
            merge(arr, l, mid, r);
        }
    }

    
int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    mergeSort(arr, 0, n - 1);
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}
