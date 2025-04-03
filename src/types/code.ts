export type Difficulty = 'easy' | 'medium' | 'hard';
export type Language = 'python' | 'javascript' | 'java' | 'c' | 'cpp';

export interface CodeBlock {
  id: number;
  difficulty: Difficulty;
  code: Record<Language, string>;
  description: string;
}

export const codeBlocks: Record<Difficulty, CodeBlock[]> = {
  easy: [
    {
      id: 1,
      difficulty: 'easy',
      code: {
        python: `print("Hello, World!")`,
        javascript: `console.log("Hello, World!");`,
        java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        c: `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        cpp: `#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
      },
      description: 'Print a greeting message to the screen'
    },
    {
      id: 2,
      difficulty: 'easy',
      code: {
        python: `x = 5
y = 3
sum = x + y
print(sum)`,
        javascript: `let x = 5;
let y = 3;
let sum = x + y;
console.log(sum);`,
        java: `public class Main {
    public static void main(String[] args) {
        int x = 5;
        int y = 3;
        int sum = x + y;
        System.out.println(sum);
    }
}`,
        c: `#include <stdio.h>
int main() {
    int x = 5;
    int y = 3;
    int sum = x + y;
    printf("%d\\n", sum);
    return 0;
}`,
        cpp: `#include <iostream>
int main() {
    int x = 5;
    int y = 3;
    int sum = x + y;
    std::cout << sum << std::endl;
    return 0;
}`
      },
      description: 'Add two numbers and print the result'
    },
    {
      id: 3,
      difficulty: 'easy',
      code: {
        python: `name = "Alice"
print("Hi", name)`,
        javascript: `let name = "Alice";
console.log("Hi", name);`,
        java: `public class Main {
    public static void main(String[] args) {
        String name = "Alice";
        System.out.println("Hi " + name);
    }
}`,
        c: `#include <stdio.h>
int main() {
    char name[] = "Alice";
    printf("Hi %s\\n", name);
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
int main() {
    std::string name = "Alice";
    std::cout << "Hi " << name << std::endl;
    return 0;
}`
      },
      description: 'Print a greeting with a name'
    },
    {
      id: 4,
      difficulty: 'easy',
      code: {
        python: `age = 12
if age < 13:
    print("You are a kid")
else:
    print("You are a teenager")`,
        javascript: `let age = 12;
if (age < 13) {
    console.log("You are a kid");
} else {
    console.log("You are a teenager");
}`,
        java: `public class Main {
    public static void main(String[] args) {
        int age = 12;
        if (age < 13) {
            System.out.println("You are a kid");
        } else {
            System.out.println("You are a teenager");
        }
    }
}`,
        c: `#include <stdio.h>
int main() {
    int age = 12;
    if (age < 13) {
        printf("You are a kid\\n");
    } else {
        printf("You are a teenager\\n");
    }
    return 0;
}`,
        cpp: `#include <iostream>
int main() {
    int age = 12;
    if (age < 13) {
        std::cout << "You are a kid" << std::endl;
    } else {
        std::cout << "You are a teenager" << std::endl;
    }
    return 0;
}`
      },
      description: 'Check age and print a message'
    },
    {
      id: 5,
      difficulty: 'easy',
      code: {
        python: `for i in range(5):
    print("Hello")`,
        javascript: `for (let i = 0; i < 5; i++) {
    console.log("Hello");
}`,
        java: `public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println("Hello");
        }
    }
}`,
        c: `#include <stdio.h>
int main() {
    for (int i = 0; i < 5; i++) {
        printf("Hello\\n");
    }
    return 0;
}`,
        cpp: `#include <iostream>
int main() {
    for (int i = 0; i < 5; i++) {
        std::cout << "Hello" << std::endl;
    }
    return 0;
}`
      },
      description: 'Print "Hello" five times using a loop'
    }
  ],
  medium: [
    {
      id: 6,
      difficulty: 'medium',
      code: {
        python: `number = 7
for i in range(1, 11):
    print(f"{number} x {i} = {number * i}")`,
        javascript: `let number = 7;
for (let i = 1; i <= 10; i++) {
    console.log(\`\${number} x \${i} = \${number * i}\`);
}`,
        java: `public class Main {
    public static void main(String[] args) {
        int number = 7;
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%d x %d = %d\\n", number, i, number * i);
        }
    }
}`,
        c: `#include <stdio.h>
int main() {
    int number = 7;
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", number, i, number * i);
    }
    return 0;
}`,
        cpp: `#include <iostream>
int main() {
    int number = 7;
    for (int i = 1; i <= 10; i++) {
        std::cout << number << " x " << i << " = " << number * i << std::endl;
    }
    return 0;
}`
      },
      description: 'Print multiplication table for number 7'
    },
    {
      id: 7,
      difficulty: 'medium',
      code: {
        python: `numbers = [1, 2, 3, 4, 5]
sum = 0
for num in numbers:
    sum = sum + num
print("Sum is:", sum)`,
        javascript: `let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
    sum = sum + num;
}
console.log("Sum is:", sum);`,
        java: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : numbers) {
            sum = sum + num;
        }
        System.out.println("Sum is: " + sum);
    }
}`,
        c: `#include <stdio.h>
int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum = sum + numbers[i];
    }
    printf("Sum is: %d\\n", sum);
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    int sum = 0;
    for (int num : numbers) {
        sum = sum + num;
    }
    std::cout << "Sum is: " << sum << std::endl;
    return 0;
}`
      },
      description: 'Calculate the sum of numbers in an array'
    },
    {
      id: 8,
      difficulty: 'medium',
      code: {
        python: `word = "hello"
reversed_word = ""
for char in word:
    reversed_word = char + reversed_word
print(reversed_word)`,
        javascript: `let word = "hello";
let reversedWord = "";
for (let char of word) {
    reversedWord = char + reversedWord;
}
console.log(reversedWord);`,
        java: `public class Main {
    public static void main(String[] args) {
        String word = "hello";
        String reversedWord = "";
        for (char ch : word.toCharArray()) {
            reversedWord = ch + reversedWord;
        }
        System.out.println(reversedWord);
    }
}`,
        c: `#include <stdio.h>
#include <string.h>
int main() {
    char word[] = "hello";
    char reversed[6];
    int len = strlen(word);
    for (int i = 0; i < len; i++) {
        reversed[i] = word[len-1-i];
    }
    reversed[len] = '\\0';
    printf("%s\\n", reversed);
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
int main() {
    std::string word = "hello";
    std::string reversedWord;
    for (char ch : word) {
        reversedWord = ch + reversedWord;
    }
    std::cout << reversedWord << std::endl;
    return 0;
}`
      },
      description: 'Reverse a word character by character'
    },
    {
      id: 9,
      difficulty: 'medium',
      code: {
        python: `def greet(name, age):
    print(f"Hello {name}, you are {age} years old!")

greet("Bob", 10)`,
        javascript: `function greet(name, age) {
    console.log(\`Hello \${name}, you are \${age} years old!\`);
}

greet("Bob", 10);`,
        java: `public class Main {
    static void greet(String name, int age) {
        System.out.printf("Hello %s, you are %d years old!\\n", name, age);
    }

    public static void main(String[] args) {
        greet("Bob", 10);
    }
}`,
        c: `#include <stdio.h>
void greet(char name[], int age) {
    printf("Hello %s, you are %d years old!\\n", name, age);
}

int main() {
    greet("Bob", 10);
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
void greet(std::string name, int age) {
    std::cout << "Hello " << name << ", you are " << age << " years old!" << std::endl;
}

int main() {
    greet("Bob", 10);
    return 0;
}`
      },
      description: 'Create and use a simple function with parameters'
    },
    {
      id: 10,
      difficulty: 'medium',
      code: {
        python: `numbers = [1, 2, 3, 4, 5]
even_numbers = []
for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
print("Even numbers:", even_numbers)`,
        javascript: `let numbers = [1, 2, 3, 4, 5];
let evenNumbers = [];
for (let num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}
console.log("Even numbers:", evenNumbers);`,
        java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        ArrayList<Integer> evenNumbers = new ArrayList<>();
        for (int num : numbers) {
            if (num % 2 == 0) {
                evenNumbers.add(num);
            }
        }
        System.out.println("Even numbers: " + evenNumbers);
    }
}`,
        c: `#include <stdio.h>
int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int evenNumbers[5];
    int count = 0;
    
    for (int i = 0; i < 5; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers[count] = numbers[i];
            count++;
        }
    }
    
    printf("Even numbers: ");
    for (int i = 0; i < count; i++) {
        printf("%d ", evenNumbers[i]);
    }
    printf("\\n");
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::vector<int> evenNumbers;
    
    for (int num : numbers) {
        if (num % 2 == 0) {
            evenNumbers.push_back(num);
        }
    }
    
    std::cout << "Even numbers: ";
    for (int num : evenNumbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    return 0;
}`
      },
      description: 'Find even numbers in a list'
    }
  ],
  hard: [
    {
      id: 11,
      difficulty: 'hard',
      code: {
        python: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(is_prime(7))`,
        javascript: `function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));`,
        java: `public class Main {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i < n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(7));
    }
}`,
        c: `#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    printf("%d\\n", isPrime(7));
    return 0;
}`,
        cpp: `#include <iostream>
bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    std::cout << std::boolalpha << isPrime(7) << std::endl;
    return 0;
}`
      },
      description: 'Check if a number is prime'
    },
    {
      id: 12,
      difficulty: 'hard',
      code: {
        python: `def count_vowels(text):
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count = count + 1
    return count

print(count_vowels("Hello World"))`,
        javascript: `function countVowels(text) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World"));`,
        java: `public class Main {
    static int countVowels(String text) {
        String vowels = "aeiouAEIOU";
        int count = 0;
        for (char c : text.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countVowels("Hello World"));
    }
}`,
        c: `#include <stdio.h>
#include <string.h>

int countVowels(char text[]) {
    char vowels[] = "aeiouAEIOU";
    int count = 0;
    
    for (int i = 0; text[i]; i++) {
        for (int j = 0; vowels[j]; j++) {
            if (text[i] == vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

int main() {
    printf("%d\\n", countVowels("Hello World"));
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>

int countVowels(std::string text) {
    std::string vowels = "aeiouAEIOU";
    int count = 0;
    for (char c : text) {
        if (vowels.find(c) != std::string::npos) {
            count++;
        }
    }
    return count;
}

int main() {
    std::cout << countVowels("Hello World") << std::endl;
    return 0;
}`
      },
      description: 'Count the number of vowels in a text'
    },
    {
      id: 13,
      difficulty: 'hard',
      code: {
        python: `def find_max(numbers):
    if len(numbers) == 0:
        return None
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

print(find_max([3, 7, 2, 9, 1]))`,
        javascript: `function findMax(numbers) {
    if (numbers.length === 0) return null;
    let maxNum = numbers[0];
    for (let num of numbers) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

console.log(findMax([3, 7, 2, 9, 1]));`,
        java: `public class Main {
    static Integer findMax(int[] numbers) {
        if (numbers.length == 0) return null;
        int maxNum = numbers[0];
        for (int num : numbers) {
            if (num > maxNum) {
                maxNum = num;
            }
        }
        return maxNum;
    }

    public static void main(String[] args) {
        System.out.println(findMax(new int[]{3, 7, 2, 9, 1}));
    }
}`,
        c: `#include <stdio.h>

int findMax(int numbers[], int size) {
    if (size == 0) return -1;
    int maxNum = numbers[0];
    for (int i = 1; i < size; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}

int main() {
    int numbers[] = {3, 7, 2, 9, 1};
    printf("%d\\n", findMax(numbers, 5));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>

int findMax(std::vector<int> numbers) {
    if (numbers.empty()) return -1;
    int maxNum = numbers[0];
    for (int num : numbers) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

int main() {
    std::vector<int> numbers = {3, 7, 2, 9, 1};
    std::cout << findMax(numbers) << std::endl;
    return 0;
}`
      },
      description: 'Find the largest number in a list'
    },
    {
      id: 14,
      difficulty: 'hard',
      code: {
        python: `def multiply_table():
    for i in range(1, 6):
        for j in range(1, 6):
            print(f"{i} x {j} = {i * j}")
        print("--------")

multiply_table()`,
        javascript: `function multiplyTable() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            console.log(\`\${i} x \${j} = \${i * j}\`);
        }
        console.log("--------");
    }
}

multiplyTable();`,
        java: `public class Main {
    static void multiplyTable() {
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.printf("%d x %d = %d\\n", i, j, i * j);
            }
            System.out.println("--------");
        }
    }

    public static void main(String[] args) {
        multiplyTable();
    }
}`,
        c: `#include <stdio.h>

void multiplyTable() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            printf("%d x %d = %d\\n", i, j, i * j);
        }
        printf("--------\\n");
    }
}

int main() {
    multiplyTable();
    return 0;
}`,
        cpp: `#include <iostream>

void multiplyTable() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            std::cout << i << " x " << j << " = " << i * j << std::endl;
        }
        std::cout << "--------" << std::endl;
    }
}

int main() {
    multiplyTable();
    return 0;
}`
      },
      description: 'Print multiplication table from 1 to 5'
    },
    {
      id: 15,
      difficulty: 'hard',
      code: {
        python: `def draw_triangle(height):
    for i in range(height):
        spaces = " " * (height - i - 1)
        stars = "*" * (2 * i + 1)
        print(spaces + stars)

draw_triangle(5)`,
        javascript: `function drawTriangle(height) {
    for (let i = 0; i < height; i++) {
        let spaces = " ".repeat(height - i - 1);
        let stars = "*".repeat(2 * i + 1);
        console.log(spaces + stars);
    }
}

drawTriangle(5);`,
        java: `public class Main {
    static void drawTriangle(int height) {
        for (int i = 0; i < height; i++) {
            String spaces = " ".repeat(height - i - 1);
            String stars = "*".repeat(2 * i + 1);
            System.out.println(spaces + stars);
        }
    }

    public static void main(String[] args) {
        drawTriangle(5);
    }
}`,
        c: `#include <stdio.h>

void drawTriangle(int height) {
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < height - i - 1; j++) {
            printf(" ");
        }
        for (int j = 0; j < 2 * i + 1; j++) {
            printf("*");
        }
        printf("\\n");
    }
}

int main() {
    drawTriangle(5);
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>

void drawTriangle(int height) {
    for (int i = 0; i < height; i++) {
        std::string spaces(height - i - 1, ' ');
        std::string stars(2 * i + 1, '*');
        std::cout << spaces << stars << std::endl;
    }
}

int main() {
    drawTriangle(5);
    return 0;
}`
      },
      description: 'Draw a triangle pattern with stars'
    }
  ]
};