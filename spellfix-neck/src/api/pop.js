"use server";
import fetch from "node-fetch";
import { parse } from "parse5";

export async function getSynonyms(word) {
  const baseUrl = "https://ko.wiktionary.org/wiki/";
  const url = baseUrl + word;

  console.log(url);
  try {
    const response = await fetch(url);

    // 네트워크 연결 상태 확인
    if (!response.ok) {
      console.error(
        "네트워크 연결에 문제가 있습니다:",
        response.statusText
      );
      return [];
    }

    const html = await response.text();
    const document = parse(html);

    const words = [];

    const sections = ["합성어", "유의어", "파생어", "반의어"];
    sections.forEach((section) => {
      const sectionNode = findSection(document, section);
      if (sectionNode) {
        const examples = findExamples(sectionNode);
        examples.forEach((example) => {
          words.push(example);
        });
      }
    });

    console.log("결과:", words);
    return words;
  } catch (error) {
    console.error("HTML 문서를 가져오는 도중 오류 발생:", error);
    return [];
  }
}

function findSection(document, sectionName) {
  const headings = document.childNodes.filter(
    (node) => node.tagName === "h2"
  );
  const sectionNode = headings.find(
    (heading) => heading.childNodes[0].value === sectionName
  );
  return sectionNode;
}

function findExamples(sectionNode) {
  const examples = [];
  let currentNode = sectionNode.nextSibling;
  while (currentNode && currentNode.tagName !== "h2") {
    if (currentNode.tagName === "ul") {
      currentNode.childNodes.forEach((childNode) => {
        if (childNode.tagName === "li") {
          const exampleText = childNode.childNodes[0].value.trim();
          examples.push(exampleText);
        }
      });
    }
    currentNode = currentNode.nextSibling;
  }
  return examples;
}
