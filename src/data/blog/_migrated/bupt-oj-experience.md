---
author: Zhengyuan Zhu
pubDatetime: 2018-02-13T00:00:00Z
title: "BUPT Online Judge Printed Materials"
slug: bupt-oj-experience
featured: false
draft: false
tags:
  - notes
description: ""
---

>

BUPT's reexamination programming test allows you to bring materials. I've organized the materials I prepared for the test for students who need reference. All the code below can run in the testing environment.

## Import Header Files for Programming Test

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38

```

```
#include<iostream>
#include<algorithm>
#include<string>
#include<string.h>
#include<stdlib.h>
#include<math.h>
#include<sstream>
#include<stdio.h>
#include<cstdio>
#include<vector>
#include<iterator>
#include<map>
#include<stack>
#include<queue>
#include<stdlib.h>
using namespace std;
```
## Structures
``` c++
struct student
{
    float score;
    int id;
}a[101];
int comp(const student &a,const student &b)
{
    return a.score>b.score;
}
int main()
{
    int n,k;//n students, find kth place score
    cin>>n>>k;
    for (int i=1;i<=n;++i)
        cin>>a[i].id>>a[i].score;
    sort(a+1,a+n+1,comp);
    cout<<a[k].id<<' '<<a[k].score<<endl;
    return 0;
}

```

## scanf & cin

- Floating point equality comparison
```
1

```

```
fabs(a-b)<0.000001

```

-

Input format with comma separation:

```
1

```

```
scanf("%d, %d",&a, &b);

```

-

`getchar();` used to consume spaces, has special uses!

## Supplement: Passing 2D arrays as parameters: Use pointers as little as possible!

- Valid forms:
```
1
2

```

```
void Foo1(int array[30][30]);
void Foo2(int array[][30]);

```

- Cannot omit higher dimension size! Invalid forms:
```
1
2

```

```
void Foo3(int array[][]);
void Foo4(int **array);//This method is also incorrect

```

## Trees and Graphs

### Binary Linked List Tree Building Routine

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66

```

```
//Based on binary search tree
struct node{
    char letter;
    node *lchild,*rchild;//
};
node *create(char c){
    node *p = (node *)malloc(sizeof(node));
    (*p).letter = c;
    (*p).lchild = (*p).rchild = NULL;
}
node *insert(node *t,char x){//Recursive tree building
    if(t==NULL){//If tree is empty
        t = create(x);
        return t;
    }
    else if(x-'0' < t->letter-'0'){//Insert into left subtree
        t->lchild = insert(t->lchild, x);
    }
    else if(x-'0' > t->letter-'0'){
        t->rchild = insert(t->rchild, x);
    }
    return t;
}
//Build tree from inorder and postorder
node *rebuild(char* post,char* in,int n){
    if(n==0) return NULL;
    char ch = post[n-1];
    node *p = create(ch);
    int i = 0;
    while(i < n && in[i] != ch) i++;
    int l_len = i;
    int r_len = n-i-1;
    if(l_len>0) (*p).lchild = rebuild(post,in,l_len);
    if(r_len>0) (*p).rchild = rebuild(post+l_len,in+l_len+1,r_len);
    return p;
}
//Preorder, postorder traversal
void preorder(node *t)
{
    if (ptr) {
        printf("\t%d", ptr->data);
        preorder(ptr->left_child);
        preorder(ptr->right_child);
    }
}
//Postorder traversal
void postorder(node *t)
{
    if (ptr) {
        postorder(ptr->left_child);
        postorder(ptr->right_child);
        printf("\t%d", ptr->data);
    }
}
//
int main(){
    char tree[30];
    while(scanf("%s",tree)!=EOF){
        node *t = NULL;
        for(int i = 0;i < strlen(tree);i++){
            t = insert(t,in[i]);
        }
        preorder(t);
    }
    return 0;
}

```

### Graph Routine - Building Graph

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20

```

```
struct Edge{
    int nextNode;//Next node number
    int cost;//Weight of this edge
};
vector<Edge> edge[N];//Vector simulating linked list
for(int i = 0;i < N;i++){
    edge[i].clear();//Clear linked list
}
//Add information to linked list
Edge tmp;
tmp.nextNode = 3;
tmp.cost = 38;
edge[1].push_back(tmp)
//Query all adjacency information of a node, traverse vector
for(int i = 0;i < edge[2].size();i++){//Traverse edge[2]
    int nextNode = edge[2][i].nextNode;
    int cost = edge[2][i].cost;
}
//Delete edge
edge[1].erase(edge[1].begin()+i,edge.begin()+i+1)

```

### Floyd Algorithm

```
1
2
3
4
5
6
7
8

```

```
for(int k = 1;k <=  N;k++){//Each time we select an intermediate node, core of Floyd algorithm
    for(int i = 1;i <= N;i++){
        for(int j = 1;j <= N;j++){
            if(a[i][k] == N || a[k][j] == N) continue;
            if(a[i][k]+a[k][j] < a[i][j])   a[i][j] = a[i][k] + a[k][j];
        }
    }
}

```

### Dijkstra Algorithm

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57

```

```
struct E{
    int next;// Adjacent node
    int c;
};
vector<E> edge[1005];//Adjacency list
int Dis[1005];
bool mark[1005];

int main(){
    int n,m,a,b,c;

    while(cin>>n>>m){//n nodes, m edges
        for(int i = 1;i <= n;i++){
            edge[i].clear();//Initialize adjacency list
        }
        for(int i = 1;i <= n;i++){
            Dis[i] = -1;
            mark[i] = false;
        }
        while(m--){
            cin>>a>>b>>c;//Path from a to b with weight c
            E tmp;
            tmp.c = c;
            tmp.next = b;
            edge[a].push_back(tmp);//Add b to a's adjacency list, for undirected graph
            tmp.next = a;
            edge[b].push_back(tmp);//Add a to b's adjacency list
        }

        int newP = 1;//Starting point
        Dis[1] = 0;
        mark[1] = true;//Find shortest path from node 1 to other nodes. Mark becomes true when visited
        for(int i = 1;i < n;i++){//Number of loops n-1 times
            for(int j = 0;j < edge[newP].size();j++){//Update distance array
                int t = edge[newP][j].next;//Save adjacent node
                int cost = edge[newP][j].c;
                if(mark[t]==true) continue;
                if(Dis[t] == -1 || Dis[t] > Dis[newP] + cost){
                    Dis[t] = Dis[newP]+cost;
                }
            }
            int min = 1000000;
            for(int j = 1;j <= n;j++){//Find minimum in Dis array
                if(mark[j]==true) continue;
                if(Dis[j]==-1) continue;
                if(Dis[j]<min){
                    min = Dis[j];
                    newP = j;//Update starting point. After selecting minimum node, starting point must be updated
                }
            }
            mark[newP] = true;
        }
        for(int i = 1;i <= n;i++){
            cout<<Dis[i]<<" "<<endl;
        }
    }
}

```

### Topological Sorting

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37

```

```
vector<int> edge[501];
queue<int> Q;

int main(){
    int degree[501];//Store in-degree, topological sorting judges in-degree
    int n,m;
    while(cin>>n>>m){//n is number of nodes, m is number of edges
        for(int i = 0;i < 501;i++){//
            degree[i] = 0;
            edge[i].clear();//Initialize list
        }
        while(Q.empty()==false){//Initialize, pop elements from queue until Q is empty
            Q.pop();
        }
        while(m--){//Input data
            int a,b;
            cin>>a>>b;//Input an edge from a to b
            degree[b]++;//In-degree plus one
            edge[a].push_back(b);//Store b in list
        }
        for(int i = 1;i <= n;i++){//Topological sort, find nodes with in-degree 0
            if(degree[i]==0){
                Q.push(i);
            }
        }
        while(Q.empty()==false){
            int now = Q.front();//Access front element
            Q.pop();
            cout<<now<<" ";
            for(int k = 0;k < edge[now].size();k++){
                degree[edge[now][k]]--;//Similar to 2D array access. Since now node has been enqueued, in-degree should be reduced by 1
                if(degree[edge[now][k]]==0) Q.push(edge[now][k]);
            }
        }
        cout<<endl;
    }
}

```

## Dynamic Programming

### Longest Common Subsequence and Longest Common Substring

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76

```

```
//Longest common subsequence: output longest sequence length
int lcse(string str1,string str2,vector<vector<int> >& vec){
    int len1 = str1.size();
    int len2 = str2.size();
    vector<vector<int> > c(len1 + 1, vector<int>(len2 + 1,0));
    for(int i = 0;i <= len1;i++){
        for(int j = 0;j <= len2;j++){
            if(i==0 || j==0){
                c[i][j] = 0;
            }
            else if(str1[i-1] == str2[j-1]){
                c[i][j] = c[i-1][j-1] + 1;
                vec[i][j] = 0;
            }
            else if(c[i-1][j] >= c[i][j-1]){
                c[i][j] = c[i-1][j];
                vec[i][j] = 1;
            }
            else{
                c[i][j] = c[i][j-1];
                vec[i][j] = 2;
            }
        }
    }
    return c[len1][len2];
}
//Longest common substring: output longest substring length
int lcst(string str1,string str2,vector<vector<int > >& vec){
    int len1 = str1.size();
    int len2 = str2.size();
    vector<vector<int> > c(len1+1,vector<int>(len2+1,0));
    int result = 0;
    for(int i = 0;i <= len1;i++){
        for(int j = 0;j <= len2;j++){
            if(i==0 || j==0){
                c[i][j] = 0;
            }
            else if(str1[i-1] == str2[j-1]){
                c[i][j] = c[i-1][j-1] + 1;
                vec[i][j] = 0;
                result = max(c[i][j],result);
            }
            else{
                c[i][j] = 0;
            }
        }
    }
    return result;
}

//Print common subsequence/substring
void print_lcs(vector<vector<int> >& vec,string str,int i,int j){
    if(i== 0 || j == 0){
        return ;
    }
    if(vec[i][j] == 0){
        print_lcs(vec,str,i-1,j-1);
        printf("%c",str[i-1]);
    }
    else if(vec[i][j] == 1){
        print_lcs(vec,str,i-1,j);
    }
    else{
        print_lcs(vec,str,i,j-1);
    }
}

int main(){
    string str1,str2;
    cin>>str1>>str2;
    vector<vector<int> > vec(str1.size()+1,vector<int>(str2.size() +1, -1));
    int ans = lcse(str1, str2, vec);
    cout<<ans<<endl;
    print_lcs(vec, str1, str1.size(), str2.size());
    return 0;
}

```

## Template Classes and Library Functions

### Template Class vector

- Define 2D vector
```
1

```

```
vector<vector<int> > p(m, vector<int>(n,0)); //m*n 2D vector, note the space. All elements initialized to 0

```

- vector member functions

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28

```

```
// Define 1D vector
vector<type> v;
// Insert element at end
v.push_back(s);
// Insert element at any position
vector<int>::iterator it = v.begin()
v.insert(it+pos,elem);//Insert one
v.insert(it+pos,4,elem);//Insert four
v.insert(it+pos,start,end);

// Delete one element
v.erase(position)
v.erase(v.end()-1)/v.erase(v.back());//Delete last element
// Sum: Add all elements in vector to 0
accumulate(v.begin(),v.end(),0)
// Reverse:
reverse(v.begin(),v.end());
// Sort:
sort(data.begin(),data.end(),::greater<int>());
// Iterator traversal
for(vector<int>::iterator it = v.begin(); it != v.end(); ++it)
    {
        cout << *it << " ";
    }
// Clear vector
v.clear();
// Swap elements
swap(sentence[0],sentence[4]);

```

### Template Class algorithm

-

Non-modifying sequence operations

-

Count return values

```
1

```

```
count(v.begin(),v.end(),num)//Count occurrences of 6

```

-

Count return values meeting condition

```
1
2

```

```
bool BigThan5(int &n){ return n > 5; }
count(v.begin(),v.end(),BigThan5)

```

-

Find value/value meeting condition

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18

```

```
        find(v.begin(),v.end(),num)
        find_if(v.begin(),v.end(),foo)
        ```

### Template Class stack&queue&map

- stack&queue

    ``` c
    # Define
    stack<int> s;
    queue<int> q;
    # Access top
    s.top()/s.front()/s.back()
    # Check if empty/return size
    s.empty()/s.size()
    # Insert, delete, swap
    s.push()/s.pop()/s.swap()

```

-

map

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17

```

```
#Initialize
map<string,double> m
#Declaration inserts
m["Li"] = 123.4;
#Search
data_x = m.find(key);
data_y = m[key];
if(m.find(key)==maplive.end())//Search failed
#Traverse
for(map<string,double>::iterator it = m.begin(); it != m.end(); ++it)
    {
            cout << it->first << ":" << it->second << endl;
    }
#Reverse traverse
for(map<int,int>::reverse_iterator it = bag.rbegin();it!=bag.rend();it++)
#Delete
m.erase(key);

```

-

multimap and multimap sorting

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23

```

```
#Initialize
multimap<int,int> bag;
#Insert data
bag.insert(make_pair(v,w));
#Sort
vector<pair<int,int> > BAG(bag.begin(),bag.end())
//Sort by key ascending
sort(BAG.begin(),BAG.end());
//Sort by value ascending
sort(BAG.begin(),BAG.end(),cmp_by_value);

bool cmp_by_value(const pair<int,int> a,const pair<int,int> b){
    if(a.first == b.first){
        return a.second<b.second;
    }
    else{
        return a.first>b.first;
    }
}
//Traverse
for(int i = 0;i < BAG.size();i++){
    cout<<BAG[i].first<<" "<<BAG[i].second<<endl;
}

```

### Math Problems

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71

```

```
//Floating point equality comparison
fabs(a-b)<0.000001
//Convert large number X in base M to base N
int M,N;
string X;
while(cin>>M>>N){
    cin>>X;
    int data[1010];//Store digits in base M
    int output[1010];//Store digits in base N
    memset(output,0,sizeof(output));
    for(int i = 0;i < X.length();i++){
        if(isalpha(X[i])){ data[i] = X[i]-'A'+10;}
        else{ data[i] = X[i] - '0';}
        int sum = 1,d = 0,len = X.length(),k = 0;
        while(sum){
            sum = 0;
            for(int i = 0;i < len;i++){
                d = data[i] / N;
                sum += d;
                if(i == len - 1){ output[k++] = data[i] % N;}
                else{ data[i+1] += (data[i] % N) * M;}
                data[i] = d;
            }
        }
        if(k == 0){ output[k] = 0;k--;}
        if(k == -1){ cout<<0<<endl;}
        else{
            for(int i = 0;i < k;i++){
                if(output[k-i-1] > 9){ cout<<(char)(output[k-i-1]+'a'-10);}
                else{ cout<<output[k-i-1];}
            }
        }
        cout<<endl;
    }
    return 0;
}
//Large number factorial
int a[20001];//Store each digit
int temp,digit,n,i,j = 0;
cin>>n;
a[0] = 1;//Start factorial from 1
digit = 1;//Digits start from first digit
for(int i = 2;i <= n;i++){
    int num = 0;
    for(j = 0;j < digit;j++){
        temp = a[j]*i+num;//Multiply each digit of a number by i
        a[j] = temp % 10;
        num = temp/10;
    }
    while(num){
        a[digit] = num%10;
        num = num/10;
        digit++;
    }
}
for(int i = digit-1;i>=0;i--){
    printf("%d",a[i]);
}
//Check if prime
bool judge(int x){
    if(x <= 1) return false;
    for(int i = 2; i<(int)sqrt(x)+1;i++){
        if(x % i == 0) return false;
    }
    return true;
}
//Find GCD of two numbers
int gcd(int a,int b){
    if(b==0) return a;// Recursion exit condition is a mod b = 0
    else return gcd(b, a % b);
}

```

### Library Function string CRUD

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42

```

```
#Get string with spaces
getchar();//Specifically consumes newline
getline(cin,mystr);
#Insert string
string s = "BUPT";
s.insert(position,string);
#Append at end
s.append(string);
s+=string;
#Delete string
s.erase(position,length);
#Compare strings
strcmp(s1,s2);//Returns 0 if same, 1 if different
#Extract string
s.substr(position,length);
#Find string: str is substring to find, position is start/end index
res_pos = s.find(str,position);
res_pos = s.rfind(str,position)
//Find all "bupt" and make uppercase
while ((pos = s.find("bupt",pos)) != string::npos){
    s.replace(pos, 4, "BUPT");
}
#Convert string to other types
string str = "12345.67";
**atoi(str.c_str())**/atof(str)/atol(str) this is super useful
#Convert integer to string
char(101)//Outputs e
//Another form
char str[100];
itoa(num, str, 10)//10 is base
#Replace: Replace 6 characters starting from 19th with 6 characters starting from 7th of str3
s.replace(19,6,str3,7,6);//7&6 are optional
#Compare: Whether s1&s2 are the same
string s1="123",s2="123";
cout<<s1.compare(s2)<<endl;//0
#Case conversion
string s = "Hello world";
transform(s.begin(),s.end(),s.begin(),::toupper);
or s[i] = toupper(s[i]);
#Reverse string
string str = "song";
reverse(str.begin(),str.end());

```

-

Check if string ends

```
1

```

```
a[i] == '\0';//String has '\0' terminator after last character

```

-

String reverse routine:

```
1
2
3
4
5
6
7

```

```
while(left < right){
    temp = a[left];
    a[left] = a[right];
    a[right] = temp;
    left++;
    right--;
}

```

## ASCII Code Reference Table

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/BUPT_OJ_experience.png)
