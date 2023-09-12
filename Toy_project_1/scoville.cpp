#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers;
    int num;

    std::cout << "정수를 입력하고 엔터를 누르세요. 엔터를 누르면 입력이 종료됩니다." << std::endl;

    while (std::cin >> num) { //문자를 집어넣을 때  False 인듯
        numbers.push_back(num);
    }

    std::cout << "입력된 정수들:" << std::endl;
    for (int i : numbers) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    return 0;
}
