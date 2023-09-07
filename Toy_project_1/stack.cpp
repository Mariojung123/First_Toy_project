#include <iostream>
#include <stack>
using namespace std;

int main() {
    string a;
    stack<char> st;

    while (true) {
        getline(cin, a);
        
        if (a == ".") {
            break;
        }

        for (int i = 0; i < a.length(); i++) {
            if (a[i] == '(' || a[i] == '[') {
                st.push(a[i]);
            } else if (a[i] == ')') {
                if (st.empty() || st.top() != '(') {
                    printf("no\n");
                    goto end;
                }
                st.pop();
            } else if (a[i] == ']') {
                if (st.empty() || st.top() != '[') {
                    printf("no\n");
                    goto end;
                }
                st.pop();
            }
        }

        if (st.empty()) {
            printf("yes\n");
        } else {
            printf("no\n");
        }

        end:
        while (!st.empty()) {
            st.pop();
        }
    }

    return 0;
}
