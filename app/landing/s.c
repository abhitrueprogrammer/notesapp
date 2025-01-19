#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
int maxCrossingSum(int arr[],int left,int mid,int right,int*crossStart,int*crossEnd){
    int leftsum=INT_MIN;
    int rightsum=INT_MIN;
    int sum=0;
    for (int i=mid;i>=left;i--){
        sum+=arr[i];
        if (sum>leftsum){
            leftsum=sum;
            *crossStart=i;
        }
    }
    sum=0;
    for (int i=mid+1;i<=right;i++){
        sum+=arr[i];
        if (sum>rightsum){
            rightsum=sum;
            *crossEnd=i;
        }
    }
    return leftsum+rightsum;
}
int maxSubarraySum(int arr[],int left,int right,int*start,int*end){
    if (left==right){
        *start=*end=left;
        return arr[left];
    }
    int mid=(left+right)/2;
    int leftStart,leftEnd,rightStart,rightEnd,crossStart,crossEnd;
    int leftSum=maxSubarraySum(arr,left,mid,&leftStart,&leftEnd);
    int rightSum=maxSubarraySum(arr,mid+1,right,&rightStart,&rightEnd);
    int crossSum=maxCrossingSum(arr,left,mid,right,&crossStart,&crossEnd);
    if (leftSum>=rightSum && leftSum>=crossSum){
        *start=leftStart;
        *end=leftEnd;
        return leftSum;
    }
    else if (rightSum>=leftSum && rightSum>=crossSum){
        *start=rightStart;
        *end=rightEnd;
        return rightSum;
    }
    else{
        *start=crossStart;
        *end=crossEnd;
        return crossSum;
    }
}
int main(){
    int n;
    scanf("%d",&n);
    int arr[n];
    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    int start=0;
    int end=0;
    
    int maxSum=maxSubarraySum(arr,0,n-1,&start,&end);
    double average=maxSum/((double)(end-start+1));
    printf("%d\n",maxSum);
    printf("%.2f\n",average);
    printf("[");
    for (int i=start;i<=end;i++){
        printf("%d",arr[i]);
        if (i<end){
            printf(", ");
        }
    }
    printf("]\n");
    return 0;
}