#include<iostream>
#include<stack>

using namespace std;

int main(){
    string a;
    stack<char> st;
    

    while(a!="."){
        while(!st.empty()){ //스택 초기화
            st.pop();
            // printf("cleared!__first\n"); //확인문자
        }
        getline(cin,a);
        if(a.empty()) continue; //수정부분
        if(a=="."){ //끝내기
            break;
        }
        for(int i=0; i < a.size(); i++){
            if(a[i]=='(' || a[i]=='['){
                st.push(a[i]);
                // printf("%c push\n",a[i]);
            }

            if(a[i]==')'){
                if(st.empty()){
                    printf("no\n");
                    break;
                }
                else if(st.top()=='('){
                    st.pop();
                    // printf("%c pop\n",a[i]);
                }
                else if(st.top()=='['){
                    printf("no\n");
                    break;
                }
            }
            if(a[i]==']'){
                if(st.empty()){
                    printf("no\n");
                    break;
                }
                else if(st.top()=='['){
                    st.pop();
                    // printf("%c pop",a[i]);
                }
                else if(st.top()=='('){
                    printf("no\n");
                    break;
                }
            }
            if(a[i]=='.'){ //마침표가 찍히고 스텍이 남아있을 때
                if(!st.empty()){
                    printf("no\n");
                    break;
                }
                else if(st.empty()){
                    printf("yes\n");
                }
            }

        }
    }
return 0;
}