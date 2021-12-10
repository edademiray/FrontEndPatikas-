[16,21,11,8,12,22]

>**Soru 1-a:** Yukarıdaki dizinin Merge sort türüne göre aşamalarını yazınız.

* *Adım 1* : [**16,21,11,8,12,22**] 
* *Adım 2* : [**16,21,11**] - [**8,12,22**]
* *Adım 3* : [**16,21**] - [**11**] - [**8,12**] - [**22**]
* *Adım 4* : [**16**] - [**21**] - [**11**] -  [**8**] -  [**12**] -  [**22**] 
* *Adım 5 Birleştirme* : [**16,21**] - [**8,11**] - [**12,22**] 
* *Adım 6 Birleştirme* : [**8,11,16,21**] - [**12,22**]  
* *Adım 7 Birleştirme* : [**8,11,12,16,21,22**]


>**Soru 1-b:** Big-O gösterimini yazınız.

2^x=n ise logn = x olduğundan **O(nlogn)**
