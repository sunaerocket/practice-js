/* 올바른 괄호 문제
 * 주어진 문자열이 바르게 닫힌 괄호인지 검사하는 로직 만들기
 * input => return
 * "()()" => true
 * "(())()" => true
 * ")()(" => false
 * "(()(" => false
 *
 * https://programmers.co.kr/learn/courses/13213/lessons/91074
 */

function solution(input) {
  const stack = [];

  for (const bracket of input) {
    if (bracket === "(") {
      stack.push(bracket);
    }

    if (stack.length === 0) {
      return false;
    }

    if (bracket === ")") {
      stack.pop();
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}

function optimizedSolution(input) {
  let count = 0; // array보다 메모리 절감

  for (const bracket of input) {
    if (bracket === "(") {
      count += 1;
    }

    if (count === 0) {
      return false;
    }

    if (bracket === ")") {
      count -= 1;
    }
  }

  if (count !== 0) {
    return false;
  }

  return true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
