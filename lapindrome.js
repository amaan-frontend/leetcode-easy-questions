#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Function to check if a string is a lapindrome
bool isLapindrome(char* str) {
    int freq[26] = {0}; // Frequency array to store character counts

    int len = strlen(str);
    int mid = len / 2;

    // Count the frequency of characters in the first half of the string
    for (int i = 0; i < mid; i++) {
        freq[str[i] - 'a']++;
    }

    // If the length of the string is odd, skip the middle character
    if (len % 2 == 1) {
        mid++;
    }

    // Check the second half of the string and decrement the frequency
    // If a character in the second half is not found in the first half or its frequency is already 0, it's not a lapindrome
    for (int i = mid; i < len; i++) {
        if (freq[str[i] - 'a'] == 0) {
            return false;
        }
        freq[str[i] - 'a']--;
    }

    return true;
}

int main() {
    int t; // Number of test cases
    scanf("%d", &t);

    while (t--) {
        char str[1001]; // Input string
        scanf("%s", str);

        // Check if the string is a lapindrome using the isLapindrome function
        if (isLapindrome(str)) {
            printf("YES\n");
        } else {
            printf("NO\n");
        }
    }

    return 0;
}
