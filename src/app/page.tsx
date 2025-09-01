// src/app/page.tsx

"use client";

import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      본문
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={() => setIsOpen(true)}
      >
        모달 열기
      </button>
      <Modal isOpen={isOpen}>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>모달 제목</Modal.Title>
            <Modal.Description>모달 내용입니다.</Modal.Description>
          </Modal.Header>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-4 gap-2">
              <label htmlFor="name" className="w-fit whitespace-nowrap">
                이름
              </label>
              <input
                id="name"
                type="text"
                className="col-span-3 w-full border-2 border-gray-300"
                placeholder="이름을 입력해주세요."
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              <label htmlFor="email" className="w-fit whitespace-nowrap">
                이메일
              </label>
              <input
                id="email"
                type="text"
                className="col-span-3 w-full border-2 border-gray-300"
                placeholder="이메일을 입력해주세요."
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              <label htmlFor="agree" className="w-fit whitespace-nowrap">
                동의합니까
              </label>
              <input
                id="agree"
                type="checkbox"
                className="col-span-3 w-fit border-2 border-gray-300"
              />
            </div>
          </div>
          <Modal.Footer>
            <button
              className="rounded-md bg-gray-500 px-4 py-2 text-white"
              onClick={() => setIsOpen(false)}
            >
              취소
            </button>
            <button
              className="rounded-md bg-blue-500 px-4 py-2 text-white"
              onClick={() => alert("클릭함")}
            >
              확인
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
}
